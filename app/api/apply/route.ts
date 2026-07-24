import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO = process.env.CONTACT_TO_EMAIL || 'info@eaglepathway.com';
const FROM = process.env.CONTACT_FROM_EMAIL || 'Eagle Pathway <onboarding@resend.dev>';

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const formType = formData.get('formType') as string;
    const dataString = formData.get('data') as string;
    const receipt = formData.get('receipt') as File | null;

    if (!formType || !dataString) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const payload = JSON.parse(dataString);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set — cannot send application email.');
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    // Build HTML rows from the JSON payload dynamically, ignoring booleans (like agreements)
    const rows = Object.entries(payload)
      .filter(([key, value]) => typeof value === 'string' || Array.isArray(value))
      .map(([key, value]) => {
        // Format the key e.g. "fullName" -> "Full Name"
        const formattedKey = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase());
          
        const formattedValue = Array.isArray(value) ? value.join(', ') : (value || '—');
        return [formattedKey, formattedValue];
      });

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#0f172a">
        <h2 style="color:#4f46e5;margin:0 0 16px">New Submission: ${escapeHtml(formType)}</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          ${rows
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding:8px 12px;border:1px solid #e6e8ef;background:#f7f8fc;font-weight:600;white-space:nowrap;vertical-align:top">${escapeHtml(label as string)}</td>
              <td style="padding:8px 12px;border:1px solid #e6e8ef;white-space:pre-wrap">${escapeHtml(value as string)}</td>
            </tr>`
            )
            .join('')}
        </table>
        <p style="color:#64748b;font-size:12px;margin-top:16px">Sent from the Eagle Pathway website forms.</p>
      </div>`;

    const resend = new Resend(apiKey);
    
    // Prepare attachments if receipt is provided
    const attachments = [];
    if (receipt) {
      const arrayBuffer = await receipt.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: receipt.name,
        content: buffer,
      });
    }

    // Ensure we send reply-to properly if email is provided
    const replyTo = payload.email || undefined;
    const userName = payload.fullName || 'User';

    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo,
      subject: `New Application (${formType}) — ${userName}`,
      html,
      attachments,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Application form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
