'use client';

import { useState } from 'react';
import { Check, UploadCloud, X } from 'lucide-react';

type ApplicationData = {
  fullName: string;
  contactMethod: string;
  contactUsername: string;
  email: string;
  academicLevel: string;
  fieldOfStudy: string;
  applicationLevel: string;
  englishProof: string;
  mediumOfInstruction: string;
  cgpa: string;
  files: File[];
  confirmed: boolean;
};

const initialData: ApplicationData = {
  fullName: '',
  contactMethod: '',
  contactUsername: '',
  email: '',
  academicLevel: '',
  fieldOfStudy: '',
  applicationLevel: '',
  englishProof: '',
  mediumOfInstruction: '',
  cgpa: '',
  files: [],
  confirmed: false,
};

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ApplicationData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalSteps = 6;

  const nextStep = () => {
    if (validateStep(step)) {
      setErrors({});
      setStep((s) => Math.min(s + 1, totalSteps));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateData = (fields: Partial<ApplicationData>) => {
    setData((prev) => ({ ...prev, ...fields }));
    if (Object.keys(errors).length > 0) {
      setErrors({});
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 2) {
      if (!data.fullName.trim()) newErrors.fullName = 'Full name is required.';
      if (!data.email.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) newErrors.email = 'Valid email is required.';
      if (!data.contactMethod) newErrors.contactMethod = 'Please select a contact method.';
      if (!data.contactUsername.trim()) newErrors.contactUsername = 'Username/Number is required.';
    }
    if (currentStep === 3) {
      if (!data.academicLevel) newErrors.academicLevel = 'Current academic level is required.';
      if (!data.fieldOfStudy.trim()) newErrors.fieldOfStudy = 'Field of study is required.';
      if (!data.applicationLevel) newErrors.applicationLevel = 'Intended application level is required.';
      if (!data.englishProof) newErrors.englishProof = 'Please select an English proof option.';
      if (!data.mediumOfInstruction) newErrors.mediumOfInstruction = 'Medium of instruction is required.';
      if (!data.cgpa.trim()) newErrors.cgpa = 'Latest CGPA/Grade is required.';
    }
    if (currentStep === 4) {
      if (data.files.length === 0) newErrors.files = 'Please upload at least one document.';
    }
    if (currentStep === 6) {
      if (!data.confirmed) newErrors.confirmed = 'You must confirm the information is correct.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }
    return true;
  };

  const submitApplication = async () => {
    if (!validateStep(6)) return;

    setIsSubmitting(true);

    // TODO: Connect to backend API (e.g. Supabase or Next.js API route)
    // const formData = new FormData();
    // formData.append('data', JSON.stringify(data));
    // data.files.forEach(f => formData.append('files', f));
    // await fetch('/api/apply', { method: 'POST', body: formData });

    console.log('--- FORM SUBMITTED ---', data);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="app-form-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ width: 64, height: 64, background: '#dcfce7', color: '#15803d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <Check size={32} />
        </div>
        <h2 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem' }}>Request Received!</h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Thank you — we have received your details and will be in touch shortly to schedule your free consultation.
        </p>
        <div style={{ background: 'var(--bg-soft)', padding: '2rem', borderRadius: 'var(--radius-lg)', display: 'inline-block', textAlign: 'left' }}>
          <p style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '0.5rem' }}>Next Step:</p>
          <p style={{ color: 'var(--muted)' }}>Contact <strong>@italy_premiumservice</strong> on Telegram with:</p>
          <div style={{ background: '#fff', padding: '1rem', border: '1px solid var(--line)', borderRadius: '8px', marginTop: '1rem', fontStyle: 'italic', color: 'var(--navy)' }}>
            &quot;I have submitted my form — ready for my free consultation.&quot;
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-form-wrapper">
      <div className="app-progress">
        <div className="app-progress-bar">
          <div className="app-progress-fill" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
        </div>
        <div className="app-progress-text">Step {step} of {totalSteps}</div>
      </div>

      <div className="app-form-card">

        {/* STEP 1 — Welcome */}
        {step === 1 && (
          <div className="app-step step-1">
            <h2>Get Started with Eagle Pathway</h2>
            <p className="desc">Free Consultation Request</p>

            <div style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--ink)', marginBottom: '2rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                We understand how confusing, competitive, and stressful scholarship applications can be — because we lived it and won it multiple times.
              </p>
              <p>
                Today, we help serious Ethiopian &amp; African students secure fully funded study opportunities abroad — with clarity, proven strategy, and zero guesswork.
              </p>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem', color: 'var(--navy)', fontWeight: 600 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--orange)" /> Free first consultation</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--orange)" /> Personal consultant review</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--orange)" /> Scholarship strategy session</li>
            </ul>

            <div style={{ background: 'var(--bg-soft)', padding: '1.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--line)', color: 'var(--muted)', fontSize: '0.95rem' }}>
              This short form takes about 3 minutes and helps us prepare a personalised consultation for you.
            </div>
          </div>
        )}

        {/* STEP 2 — Personal Info */}
        {step === 2 && (
          <div className="app-step step-2">
            <h2>Personal Information</h2>
            <p className="desc">Tell us how we can reach you.</p>

            <div className="field">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" value={data.fullName} onChange={(e) => updateData({ fullName: e.target.value })} />
              {errors.fullName && <span className="app-error">{errors.fullName}</span>}
            </div>

            <div className="field">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" value={data.email} onChange={(e) => updateData({ email: e.target.value })} />
              {errors.email && <span className="app-error">{errors.email}</span>}
            </div>

            <div className="field-row">
              <div className="field">
                <label>Preferred Contact Method</label>
                <select value={data.contactMethod} onChange={(e) => updateData({ contactMethod: e.target.value })}>
                  <option value="">Select...</option>
                  <option value="Email">Email</option>
                  <option value="Telegram">Telegram</option>
                  <option value="WhatsApp">WhatsApp</option>
                </select>
                {errors.contactMethod && <span className="app-error">{errors.contactMethod}</span>}
              </div>
              <div className="field">
                <label>Contact Username / Number</label>
                <input type="text" placeholder="@username or +251..." value={data.contactUsername} onChange={(e) => updateData({ contactUsername: e.target.value })} />
                {errors.contactUsername && <span className="app-error">{errors.contactUsername}</span>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 — Academic Profile */}
        {step === 3 && (
          <div className="app-step step-3">
            <h2>Academic Profile</h2>
            <p className="desc">Your educational background.</p>

            <div className="field-row">
              <div className="field">
                <label>Current Academic Level</label>
                <select value={data.academicLevel} onChange={(e) => updateData({ academicLevel: e.target.value })}>
                  <option value="">Select...</option>
                  <option value="High School Student">High School Student</option>
                  <option value="Bachelor's Student">Bachelor&apos;s Student</option>
                  <option value="Bachelor's Graduate">Bachelor&apos;s Graduate</option>
                  <option value="Master's Student">Master&apos;s Student</option>
                  <option value="Master's Graduate">Master&apos;s Graduate</option>
                </select>
                {errors.academicLevel && <span className="app-error">{errors.academicLevel}</span>}
              </div>
              <div className="field">
                <label>Application Level</label>
                <select value={data.applicationLevel} onChange={(e) => updateData({ applicationLevel: e.target.value })}>
                  <option value="">Select...</option>
                  <option value="Bachelor's">Bachelor&apos;s</option>
                  <option value="Master's">Master&apos;s</option>
                </select>
                {errors.applicationLevel && <span className="app-error">{errors.applicationLevel}</span>}
              </div>
            </div>

            <div className="field">
              <label>Field of Study / Intended Major</label>
              <input type="text" placeholder="e.g. Computer Science" value={data.fieldOfStudy} onChange={(e) => updateData({ fieldOfStudy: e.target.value })} />
              {errors.fieldOfStudy && <span className="app-error">{errors.fieldOfStudy}</span>}
            </div>

            <div className="field-row">
              <div className="field">
                <label>English Proof</label>
                <select value={data.englishProof} onChange={(e) => updateData({ englishProof: e.target.value })}>
                  <option value="">Select...</option>
                  <option value="IELTS">IELTS</option>
                  <option value="TOEFL">TOEFL</option>
                  <option value="Duolingo">Duolingo</option>
                  <option value="None yet">None yet</option>
                </select>
                {errors.englishProof && <span className="app-error">{errors.englishProof}</span>}
              </div>
              <div className="field">
                <label>Medium of Instruction</label>
                <input type="text" placeholder="e.g. English" value={data.mediumOfInstruction} onChange={(e) => updateData({ mediumOfInstruction: e.target.value })} />
                {errors.mediumOfInstruction && <span className="app-error">{errors.mediumOfInstruction}</span>}
              </div>
            </div>

            <div className="field">
              <label>Latest CGPA / Grade 12 Result</label>
              <input type="text" placeholder="e.g. 3.8/4.0 or 450/600" value={data.cgpa} onChange={(e) => updateData({ cgpa: e.target.value })} />
              {errors.cgpa && <span className="app-error">{errors.cgpa}</span>}
            </div>
          </div>
        )}

        {/* STEP 4 — Documents */}
        {step === 4 && (
          <div className="app-step step-4">
            <h2>Document Upload</h2>
            <p className="desc">Upload your academic documents so we can prepare your consultation.</p>

            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <h4 style={{ color: '#1e3a8a', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Suggested documents for {data.applicationLevel || 'your'} level:</h4>
              <ul style={{ color: '#1e40af', fontSize: '0.85rem', paddingLeft: '1.2rem' }}>
                {data.applicationLevel === "Master's" ? (
                  <><li>Passport</li><li>Transcript</li><li>Degree certificate</li><li>Medium of Instruction letter</li><li>CV (if available)</li></>
                ) : data.applicationLevel === "Bachelor's" ? (
                  <><li>Passport</li><li>Grade 11 &amp; 12 transcripts</li><li>Grade 12 National Exam Result</li><li>Medium of Instruction letter</li></>
                ) : (
                  <li>Please go back and select an Application Level to see suggestions.</li>
                )}
              </ul>
            </div>

            <label className="app-file-upload">
              <UploadCloud size={48} color="var(--navy)" style={{ margin: '0 auto 1rem' }} />
              <div style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '0.25rem' }}>Click to upload your documents</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>PDF, ZIP, JPG (Max 5 files, 10MB each)</div>
              <input
                type="file"
                multiple
                accept=".pdf,.zip,.jpg,.jpeg"
                style={{ display: 'none' }}
                onChange={(e) => {
                  if (e.target.files) {
                    const newFiles = Array.from(e.target.files).slice(0, 5 - data.files.length);
                    updateData({ files: [...data.files, ...newFiles] });
                  }
                }}
              />
            </label>

            {data.files.length > 0 && (
              <div className="app-file-list">
                {data.files.map((file, idx) => (
                  <div key={idx} className="app-file-item">
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '80%' }}>{file.name}</span>
                    <button type="button" onClick={() => updateData({ files: data.files.filter((_, i) => i !== idx) })} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}><X size={16} /></button>
                  </div>
                ))}
              </div>
            )}
            {errors.files && <span className="app-error">{errors.files}</span>}
          </div>
        )}

        {/* STEP 5 — Goals */}
        {step === 5 && (
          <div className="app-step step-5">
            <h2>Your Goals</h2>
            <p className="desc">Help us understand what you are working towards.</p>

            <div className="field">
              <label>What is your main goal? (Optional)</label>
              <textarea
                placeholder="e.g. I want to secure a fully funded master's scholarship in Italy by September 2025..."
                rows={5}
                style={{ width: '100%', padding: '0.9rem 1rem', border: '1px solid var(--line)', borderRadius: 'var(--radius)', fontSize: '0.95rem', resize: 'vertical', fontFamily: 'inherit' }}
              />
            </div>

            <div className="field">
              <label>Have you applied to any universities before? (Optional)</label>
              <div className="app-radio-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {['Yes', 'No', 'Currently applying'].map(opt => (
                  <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem', border: '1px solid var(--line)', borderRadius: '8px', cursor: 'pointer', fontWeight: 500 }}>
                    <input type="radio" name="applied" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 6 — Confirm */}
        {step === 6 && (
          <div className="app-step step-6">
            <h2>Almost Done!</h2>
            <p className="desc">Review and submit your consultation request.</p>

            <div style={{ background: 'var(--bg-soft)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--ink)' }}>
              <p style={{ marginBottom: '0.5rem' }}><strong>Name:</strong> {data.fullName || '—'}</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> {data.email || '—'}</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Target:</strong> {data.applicationLevel || '—'} in {data.fieldOfStudy || '—'}</p>
              <p><strong>Contact:</strong> {data.contactUsername || '—'} ({data.contactMethod || '—'})</p>
            </div>

            <div style={{ background: 'var(--orange-light)', border: '1px solid var(--orange)', padding: '1.25rem', borderRadius: 'var(--radius)', marginBottom: '2rem', fontSize: '0.95rem', color: 'var(--navy)' }}>
              🎉 <strong>Your first consultation is completely free.</strong> After we receive your form, our team will reach out within 24 hours to schedule your session.
            </div>

            <label style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', cursor: 'pointer' }}>
              <input type="checkbox" checked={data.confirmed} onChange={(e) => updateData({ confirmed: e.target.checked })} style={{ marginTop: '0.2rem', width: '18px', height: '18px', accentColor: 'var(--orange)' }} />
              <span style={{ fontSize: '0.95rem', color: 'var(--ink)', lineHeight: 1.5 }}>
                I confirm all information submitted is accurate and I am ready to speak with an Eagle Pathway consultant.
              </span>
            </label>
            {errors.confirmed && <span className="app-error" style={{ display: 'block', marginTop: '0.5rem' }}>{errors.confirmed}</span>}
          </div>
        )}

        <div className="app-actions">
          {step > 1 ? (
            <button className="btn" style={{ background: 'var(--line)', color: 'var(--ink)' }} onClick={prevStep} disabled={isSubmitting}>Previous</button>
          ) : (
            <div></div>
          )}

          {step < totalSteps ? (
            <button className="btn btn-primary" onClick={nextStep}>Next Step</button>
          ) : (
            <button className="btn btn-primary" onClick={submitApplication} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Request My Free Consultation'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
