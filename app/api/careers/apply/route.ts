import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const TO = process.env.CONTACT_TO_EMAIL || 'info@eaglespathway.com';
const FROM = process.env.CONTACT_FROM_EMAIL || 'Eagle Pathway <onboarding@resend.dev>';

function escapeHtml(value: string = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';

    let career_id = '';
    let job_title = '';
    let full_name = '';
    let email = '';
    let phone = '';
    let cover_letter = '';
    let resume_url = '';
    let resumeFile: File | null = null;
    let resumeBuffer: Buffer | null = null;
    let resumeFileName = '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      career_id = (formData.get('career_id') as string) || '';
      job_title = (formData.get('job_title') as string) || '';
      full_name = (formData.get('full_name') as string) || '';
      email = (formData.get('email') as string) || '';
      phone = (formData.get('phone') as string) || '';
      cover_letter = (formData.get('cover_letter') as string) || '';
      resume_url = (formData.get('resume_url') as string) || '';
      resumeFile = formData.get('resume') as File | null;

      if (resumeFile && typeof resumeFile.arrayBuffer === 'function') {
        const arrayBuffer = await resumeFile.arrayBuffer();
        resumeBuffer = Buffer.from(arrayBuffer);
        resumeFileName = resumeFile.name;
      }
    } else {
      const body = await request.json();
      career_id = body.career_id || '';
      job_title = body.job_title || '';
      full_name = body.full_name || '';
      email = body.email || '';
      phone = body.phone || '';
      cover_letter = body.cover_letter || '';
      resume_url = body.resume_url || '';
    }

    if (!job_title || !full_name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: job_title, full_name, email, and phone are required.' },
        { status: 400 }
      );
    }

    let insertedId: string | null = null;
    let storedResumeUrl = resume_url;

    // 1. Try uploading to Supabase Storage if file is provided
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey);

        if (resumeBuffer && resumeFileName) {
          const fileExt = resumeFileName.split('.').pop() || 'pdf';
          const cleanName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
          
          try {
            const { data: uploadData, error: uploadError } = await supabase.storage
              .from('resumes')
              .upload(cleanName, resumeBuffer, {
                contentType: resumeFile?.type || 'application/octet-stream',
                upsert: true,
              });

            if (!uploadError && uploadData) {
              const { data: publicUrlData } = supabase.storage.from('resumes').getPublicUrl(cleanName);
              if (publicUrlData?.publicUrl) {
                storedResumeUrl = publicUrlData.publicUrl;
              }
            }
          } catch (storageErr) {
            console.warn('Supabase storage upload note (bucket may not exist yet):', storageErr);
          }
        }

        // Save to Supabase job_applications table
        const { data, error } = await supabase
          .from('job_applications')
          .insert({
            career_id: career_id && !career_id.startsWith('c') ? career_id : null,
            job_title,
            full_name,
            email,
            phone,
            resume_url: storedResumeUrl || (resumeFileName ? `Attached: ${resumeFileName}` : null),
            cover_letter: cover_letter || null,
            status: 'pending',
          })
          .select('id')
          .single();

        if (error) {
          console.warn('Supabase job_applications insert warning:', error.message);
        } else if (data) {
          insertedId = data.id;
        }
      } catch (dbErr) {
        console.warn('Database error during application submission:', dbErr);
      }
    }

    // 2. Dispatch email notification with resume attached via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);

        const attachments = [];
        if (resumeBuffer && resumeFileName) {
          attachments.push({
            filename: resumeFileName,
            content: resumeBuffer,
          });
        }

        const html = `
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;color:#0f172a;line-height:1.6">
            <div style="background:linear-gradient(135deg,#111b40,#0f172a);padding:24px;border-radius:12px 12px 0 0;color:#ffffff">
              <span style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#f59e0b;font-weight:700">Eagle Pathway Careers</span>
              <h2 style="margin:6px 0 0;font-size:20px;font-weight:700">New Candidate Application</h2>
              <p style="margin:4px 0 0;font-size:14px;color:#e2e8f0">Role: <strong>${escapeHtml(job_title)}</strong></p>
            </div>
            
            <div style="border:1px solid #e2e8f0;border-top:none;padding:24px;border-radius:0 0 12px 12px;background:#ffffff">
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr>
                  <td style="padding:10px 12px;border-bottom:1px solid #f1f5f9;font-weight:600;color:#475569;width:35%">Candidate Name</td>
                  <td style="padding:10px 12px;border-bottom:1px solid #f1f5f9;color:#0f172a;font-weight:700">${escapeHtml(full_name)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;border-bottom:1px solid #f1f5f9;font-weight:600;color:#475569">Email Address</td>
                  <td style="padding:10px 12px;border-bottom:1px solid #f1f5f9"><a href="mailto:${escapeHtml(email)}" style="color:#2563eb;text-decoration:none">${escapeHtml(email)}</a></td>
                </tr>
                <tr>
                  <td style="padding:10px 12px;border-bottom:1px solid #f1f5f9;font-weight:600;color:#475569">Phone Number</td>
                  <td style="padding:10px 12px;border-bottom:1px solid #f1f5f9"><a href="tel:${escapeHtml(phone)}" style="color:#0f172a;text-decoration:none;font-weight:600">${escapeHtml(phone)}</a></td>
                </tr>
                ${resumeFileName ? `
                <tr>
                  <td style="padding:10px 12px;border-bottom:1px solid #f1f5f9;font-weight:600;color:#475569">Attached CV/Resume</td>
                  <td style="padding:10px 12px;border-bottom:1px solid #f1f5f9;font-weight:700;color:#0f172a">📎 ${escapeHtml(resumeFileName)} (attached to this email)</td>
                </tr>` : ''}
                ${storedResumeUrl && storedResumeUrl.startsWith('http') ? `
                <tr>
                  <td style="padding:10px 12px;border-bottom:1px solid #f1f5f9;font-weight:600;color:#475569">Resume Link</td>
                  <td style="padding:10px 12px;border-bottom:1px solid #f1f5f9"><a href="${escapeHtml(storedResumeUrl)}" target="_blank" style="color:#2563eb">View Uploaded Resume ↗</a></td>
                </tr>` : ''}
              </table>

              ${cover_letter ? `
              <div style="margin-top:20px;padding:16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0">
                <span style="font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;display:block;margin-bottom:8px">Candidate Note</span>
                <p style="margin:0;font-size:14px;color:#334155;white-space:pre-wrap">${escapeHtml(cover_letter)}</p>
              </div>` : ''}

              <div style="margin-top:24px;padding-top:16px;border-top:1px solid #f1f5f9;font-size:12px;color:#94a3b8;display:flex;justify-content:space-between">
                <span>Submitted via Eagle Pathway Careers</span>
                <span>${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </div>
        `;

        await resend.emails.send({
          from: FROM,
          to: [TO],
          replyTo: email,
          subject: `💼 New Job Application: ${job_title} — ${full_name}`,
          html,
          attachments,
        });
      } catch (emailErr) {
        console.warn('Resend notification warning:', emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully.',
      applicationId: insertedId,
    });
  } catch (err: any) {
    console.error('Careers apply route error:', err);
    return NextResponse.json(
      { error: err.message || 'An unexpected error occurred while processing the application.' },
      { status: 500 }
    );
  }
}
