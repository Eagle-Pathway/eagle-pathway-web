'use client';

import { useState } from 'react';
import { Check, UploadCloud, X } from 'lucide-react';

type ApplicationData = {
  eligibilityMet: boolean | null;
  hasBankStatement: string | null;
  understandsPaid: boolean | null;
  package: string | null;
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
  paymentReceipt: File | null;
  confirmed: boolean;
};

const initialData: ApplicationData = {
  eligibilityMet: null,
  hasBankStatement: null,
  understandsPaid: null,
  package: null,
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
  paymentReceipt: null,
  confirmed: false,
};

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ApplicationData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalSteps = 8;

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
    // Clear errors when user types
    if (Object.keys(errors).length > 0) {
      setErrors({});
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 2) {
      if (data.eligibilityMet === null) newErrors.eligibilityMet = 'Please confirm your eligibility.';
      if (!data.hasBankStatement) newErrors.hasBankStatement = 'Please select an option.';
      if (data.understandsPaid === null) newErrors.understandsPaid = 'Please confirm you understand this is a paid service.';
    }
    if (currentStep === 3) {
      if (!data.package) newErrors.package = 'Please select a package to continue.';
    }
    if (currentStep === 4) {
      if (!data.fullName.trim()) newErrors.fullName = 'Full name is required.';
      if (!data.email.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) newErrors.email = 'Valid email is required.';
      if (!data.contactMethod) newErrors.contactMethod = 'Please select a contact method.';
      if (!data.contactUsername.trim()) newErrors.contactUsername = 'Username/Number is required.';
    }
    if (currentStep === 5) {
      if (!data.academicLevel) newErrors.academicLevel = 'Current academic level is required.';
      if (!data.fieldOfStudy.trim()) newErrors.fieldOfStudy = 'Field of study is required.';
      if (!data.applicationLevel) newErrors.applicationLevel = 'Intended application level is required.';
      if (!data.englishProof) newErrors.englishProof = 'Please select an English proof option.';
      if (!data.mediumOfInstruction) newErrors.mediumOfInstruction = 'Medium of instruction is required.';
      if (!data.cgpa.trim()) newErrors.cgpa = 'Latest CGPA/Grade is required.';
    }
    if (currentStep === 6) {
      if (data.files.length === 0) newErrors.files = 'Please upload at least one combined document.';
    }
    if (currentStep === 7) {
      if (!data.paymentReceipt) newErrors.paymentReceipt = 'Payment receipt is required to proceed.';
    }
    if (currentStep === 8) {
      if (!data.confirmed) newErrors.confirmed = 'You must confirm the information is correct.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }
    return true;
  };

  const submitApplication = async () => {
    if (!validateStep(8)) return;
    
    setIsSubmitting(true);
    
    // TODO: Connect to backend API (e.g. Supabase or Next.js API route)
    // const formData = new FormData();
    // formData.append('data', JSON.stringify(data));
    // formData.append('receipt', data.paymentReceipt);
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
        <h2 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem' }}>Application Received</h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Thank you — your application has been successfully received.
        </p>
        <div style={{ background: 'var(--bg-soft)', padding: '2rem', borderRadius: 'var(--radius-lg)', display: 'inline-block', textAlign: 'left' }}>
          <p style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '0.5rem' }}>Next Step:</p>
          <p style={{ color: 'var(--muted)' }}>Contact <strong>@italy_premiumservice</strong> on Telegram with:</p>
          <div style={{ background: '#fff', padding: '1rem', border: '1px solid var(--line)', borderRadius: '8px', marginTop: '1rem', fontStyle: 'italic', color: 'var(--navy)' }}>
            &quot;I have submitted my form — ready to proceed.&quot;
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
        {step === 1 && (
          <div className="app-step step-1">
            <h2>Welcome to Eagle Pathway</h2>
            <p className="desc">Commitment Application Form</p>
            
            <div style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--ink)', marginBottom: '2rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                We understand how confusing, competitive, and stressful scholarship applications can be — because we lived it and won it multiple times.
              </p>
              <p>
                Today, we help serious Ethiopian & African students secure fully funded study opportunities abroad — with clarity, proven strategy, and zero guesswork.
              </p>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem', color: 'var(--navy)', fontWeight: 600 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--orange)" /> Professional consultancy support</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--orange)" /> Personal consultant review</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--orange)" /> Scholarship strategy</li>
            </ul>
          </div>
        )}

        {step === 2 && (
          <div className="app-step step-2">
            <h2>Eligibility Confirmation</h2>
            <p className="desc">Academic Qualifications</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ background: 'var(--bg-soft)', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Master Applicants</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Minimum CGPA: <strong>3.00/4.00</strong></p>
              </div>
              <div style={{ background: 'var(--bg-soft)', padding: '1.5rem', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Bachelor Applicants</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Minimum Grade 12 National Exam: <strong>275/600</strong></p>
              </div>
            </div>

            <div className="field" style={{ marginBottom: '2rem' }}>
              <label>1. Do you meet the minimum academic eligibility?</label>
              <div className="app-radio-group">
                <label className={`app-radio-item ${data.eligibilityMet === true ? 'selected' : ''}`}>
                  <input type="radio" checked={data.eligibilityMet === true} onChange={() => updateData({ eligibilityMet: true })} />
                  <span>Yes — I meet the requirement</span>
                </label>
                <label className={`app-radio-item ${data.eligibilityMet === false ? 'selected' : ''}`}>
                  <input type="radio" checked={data.eligibilityMet === false} onChange={() => updateData({ eligibilityMet: false })} />
                  <span>No — I do not meet the requirement</span>
                </label>
              </div>
              {errors.eligibilityMet && <span className="app-error">{errors.eligibilityMet}</span>}
            </div>

            <div className="field" style={{ marginBottom: '2rem' }}>
              <label>2. Do you have either:</label>
              <div className="app-radio-group">
                {['Valid bank statement', 'Merit scholarship eligibility', 'Other'].map(opt => (
                  <label key={opt} className={`app-radio-item ${data.hasBankStatement === opt ? 'selected' : ''}`}>
                    <input type="radio" checked={data.hasBankStatement === opt} onChange={() => updateData({ hasBankStatement: opt })} />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
              {errors.hasBankStatement && <span className="app-error">{errors.hasBankStatement}</span>}
            </div>

            <div className="field">
              <label>3. Do you understand this is a paid professional service?</label>
              <div className="app-radio-group">
                <label className={`app-radio-item ${data.understandsPaid === true ? 'selected' : ''}`}>
                  <input type="radio" checked={data.understandsPaid === true} onChange={() => updateData({ understandsPaid: true })} />
                  <span>Yes — Continue</span>
                </label>
                <label className={`app-radio-item ${data.understandsPaid === false ? 'selected' : ''}`}>
                  <input type="radio" checked={data.understandsPaid === false} onChange={() => updateData({ understandsPaid: false })} />
                  <span>No — Stop</span>
                </label>
              </div>
              {errors.understandsPaid && <span className="app-error">{errors.understandsPaid}</span>}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="app-step step-3">
            <h2>Package Selection</h2>
            <p className="desc">Choose the level of support you need.</p>
            
            <div className="package-cards">
              {/* Package 1 */}
              <div className={`package-card ${data.package === 'Mentorship Only' ? 'selected' : ''}`} onClick={() => updateData({ package: 'Mentorship Only' })}>
                <div className="split">75% You / 25% Me</div>
                <h3>Mentorship Only</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>You submit applications yourself with expert guidance.</p>
                <ul>
                  <li>• Step-by-step guidance</li>
                  <li>• Document review</li>
                  <li>• CV correction</li>
                  <li>• Motivation letter review</li>
                </ul>
                <div style={{ marginTop: 'auto', background: 'var(--bg-soft)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Start:</span> <strong>13,390 ETB</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>After admission:</span> <strong>16,069 ETB</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Scholarship period:</span> <strong>13,390 ETB</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Embassy prep:</span> <strong>10,712 ETB</strong></div>
                </div>
              </div>

              {/* Package 2 */}
              <div className={`package-card ${data.package === 'Shared Application' ? 'selected' : ''}`} onClick={() => updateData({ package: 'Shared Application' })}>
                <div className="split">50% You / 50% Me</div>
                <h3>Shared Application</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>We work together to prepare and submit.</p>
                <ul>
                  <li>• CV preparation</li>
                  <li>• Motivation letter preparation</li>
                  <li>• University strategy</li>
                  <li>• Application review</li>
                </ul>
                <div style={{ marginTop: 'auto', background: 'var(--bg-soft)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Start:</span> <strong>26,781 ETB</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>After admission:</span> <strong>32,137 ETB</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Scholarship period:</span> <strong>26,781 ETB</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Embassy prep:</span> <strong>21,424 ETB</strong></div>
                </div>
              </div>

              {/* Package 3 */}
              <div className={`package-card ${data.package === 'Full VIP' ? 'selected' : ''}`} onClick={() => updateData({ package: 'Full VIP' })}>
                <div className="split">100% Done For You</div>
                <h3>Full VIP</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>Complete end-to-end professional service.</p>
                <ul>
                  <li>• University selection</li>
                  <li>• Applications</li>
                  <li>• Scholarship process</li>
                  <li>• Embassy support</li>
                  <li>• Departure preparation</li>
                </ul>
                <div style={{ marginTop: 'auto', background: 'var(--bg-soft)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Start:</span> <strong>53,562 ETB</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>After admission:</span> <strong>64,274 ETB</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Scholarship period:</span> <strong>53,562 ETB</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Embassy prep:</span> <strong>42,849 ETB</strong></div>
                </div>
              </div>
            </div>
            {errors.package && <span className="app-error" style={{ marginTop: '1rem' }}>{errors.package}</span>}
          </div>
        )}

        {step === 4 && (
          <div className="app-step step-4">
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

        {step === 5 && (
          <div className="app-step step-5">
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

        {step === 6 && (
          <div className="app-step step-6">
            <h2>Document Upload</h2>
            <p className="desc">Upload your required academic documents.</p>

            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <h4 style={{ color: '#1e3a8a', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Required for {data.applicationLevel || "your"} level:</h4>
              <ul style={{ color: '#1e40af', fontSize: '0.85rem', paddingLeft: '1.2rem' }}>
                {data.applicationLevel === "Master's" ? (
                  <><li>Passport</li><li>Transcript</li><li>Degree certificate</li><li>Medium of Instruction</li><li>Recommendation letters</li><li>CV</li><li>Motivation Letter</li></>
                ) : data.applicationLevel === "Bachelor's" ? (
                  <><li>Passport</li><li>Grade 11 transcript</li><li>Grade 12 transcript</li><li>Grade 12 National Exam Result</li><li>Medium of Instruction</li><li>Recommendations</li></>
                ) : (
                  <li>Please go back and select an Application Level to see requirements.</li>
                )}
              </ul>
            </div>

            <label className="app-file-upload">
              <UploadCloud size={48} color="var(--navy)" style={{ margin: '0 auto 1rem' }} />
              <div style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '0.25rem' }}>Click to upload combined documents</div>
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

        {step === 7 && (
          <div className="app-step step-7">
            <h2>Payment Confirmation</h2>
            <p className="desc">Secure your commitment to start.</p>

            <div className="bank-details">
              <h3 style={{ color: 'var(--navy)', marginBottom: '1rem', borderBottom: '1px solid var(--line)', paddingBottom: '0.5rem' }}>Initial Commitment Payment: <strong>5,000 ETB</strong></h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>&quot;This payment confirms seriousness and will be deducted from your selected package.&quot;</p>
              
              <p>Bank: <strong>Commercial Bank of Ethiopia</strong></p>
              <p>Account Holder: <strong>Tadelech Eyasu</strong></p>
              <p>Account Number: <strong style={{ fontSize: '1.1rem', color: 'var(--orange)', letterSpacing: '1px' }}>1000401380338</strong></p>
            </div>

            <div className="field">
              <label>Upload Payment Receipt</label>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <label className="btn btn-primary" style={{ cursor: 'pointer', padding: '0.6rem 1.2rem' }}>
                  Choose File
                  <input 
                    type="file" 
                    accept="image/*,.pdf" 
                    style={{ display: 'none' }} 
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        updateData({ paymentReceipt: e.target.files[0] });
                      }
                    }}
                  />
                </label>
                {data.paymentReceipt && <span style={{ fontSize: '0.9rem', color: 'var(--ink)' }}>{data.paymentReceipt.name}</span>}
              </div>
              {errors.paymentReceipt && <span className="app-error">{errors.paymentReceipt}</span>}
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="app-step step-8">
            <h2>Final Confirmation</h2>
            <p className="desc">Review and submit your application.</p>

            <div style={{ background: 'var(--bg-soft)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--ink)' }}>
              <p style={{ marginBottom: '0.5rem' }}><strong>Name:</strong> {data.fullName}</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Package:</strong> {data.package}</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Target:</strong> {data.applicationLevel} in {data.fieldOfStudy}</p>
              <p><strong>Contact:</strong> {data.contactUsername} ({data.contactMethod})</p>
            </div>

            <label style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', cursor: 'pointer' }}>
              <input type="checkbox" checked={data.confirmed} onChange={(e) => updateData({ confirmed: e.target.checked })} style={{ marginTop: '0.2rem', width: '18px', height: '18px', accentColor: 'var(--orange)' }} />
              <span style={{ fontSize: '0.95rem', color: 'var(--ink)', lineHeight: 1.5 }}>
                I confirm all information submitted is correct and I am ready to proceed.
              </span>
            </label>
            {errors.confirmed && <span className="app-error" style={{ display: 'block', marginTop: '0.5rem' }}>{errors.confirmed}</span>}
          </div>
        )}

        <div className="app-actions">
          {step > 1 ? (
            <button className="btn" style={{ background: 'var(--line)', color: 'var(--ink)' }} onClick={prevStep} disabled={isSubmitting}>Previous</button>
          ) : (
            <div></div> // empty spacer
          )}
          
          {step < totalSteps ? (
            <button className="btn btn-primary" onClick={nextStep}>Next Step</button>
          ) : (
            <button className="btn btn-primary" onClick={submitApplication} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
