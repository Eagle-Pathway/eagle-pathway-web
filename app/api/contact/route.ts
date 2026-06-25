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
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      service,
      gradeLevel,
      targetCountry,
      message,
    } = body ?? {};

    if (!firstName || !lastName || !email || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set — cannot send contact email.');
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const rows: [string, string][] = [
      ['Name', `${firstName} ${lastName}`],
      ['Email', email],
      ['Phone', phone || '—'],
      ['Service', service],
      ['Current level', gradeLevel || '—'],
      ['Target destination', targetCountry || '—'],
      ['Message', message || '—'],
    ];

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#0f172a">
        <h2 style="color:#4f46e5;margin:0 0 16px">New consultation request</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          ${rows
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding:8px 12px;border:1px solid #e6e8ef;background:#f7f8fc;font-weight:600;white-space:nowrap;vertical-align:top">${escapeHtml(label)}</td>
              <td style="padding:8px 12px;border:1px solid #e6e8ef;white-space:pre-wrap">${escapeHtml(value)}</td>
            </tr>`
            )
            .join('')}
        </table>
        <p style="color:#64748b;font-size:12px;margin-top:16px">Sent from the Eagle Pathway website contact form.</p>
      </div>`;

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `New consultation request — ${firstName} ${lastName}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
