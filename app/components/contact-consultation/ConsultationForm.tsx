'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import StepIndicator from './StepIndicator';
import ServiceSelector from './ServiceSelector';
import FileUpload from './FileUpload';
import ReviewStep from './ReviewStep';

type ApplicationData = {
  // Step 1
  eligibilityConfirmed: boolean;

  // Step 2
  fullName: string;
  gender: string;
  phone: string;
  email: string;
  telegram: string;
  
  // Step 3
  academicLevel: string;
  
  // Step 4
  englishProof: string;
  
  // Step 5
  services: string[];
  
  // Step 6
  motivation: string;
  appliedBefore: string;
  appliedDetails: string;
  referral: string;
  
  // Step 7
  paymentReceipt: File | null;
  
  // Step 8
  agreements: {
    accurate: boolean;
    noGuarantee: boolean;
    terms: boolean;
  };
};

const initialData: ApplicationData = {
  eligibilityConfirmed: false,
  fullName: '',
  gender: '',
  phone: '',
  email: '',
  telegram: '',
  academicLevel: '',
  englishProof: '',
  services: [],
  motivation: '',
  appliedBefore: '',
  appliedDetails: '',
  referral: '',
  paymentReceipt: null,
  agreements: {
    accurate: false,
    noGuarantee: false,
    terms: false,
  },
};

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ApplicationData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalSteps = 9;

  const updateData = (fields: Partial<ApplicationData>) => {
    setData((prev) => ({ ...prev, ...fields }));
    if (Object.keys(errors).length > 0) setErrors({});
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!data.eligibilityConfirmed) newErrors.eligibilityConfirmed = 'You must confirm that you meet the eligibility requirements.';
    }
    else if (currentStep === 2) {
      if (!data.fullName.trim()) newErrors.fullName = 'Required';
      if (!data.gender) newErrors.gender = 'Required';
      if (!data.phone.trim()) newErrors.phone = 'Required';
      if (!data.email.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) newErrors.email = 'Valid email required';
      if (!data.telegram.trim()) newErrors.telegram = 'Required';
    }
    else if (currentStep === 3) {
      if (!data.academicLevel) newErrors.academicLevel = 'Please select your academic level.';
    }
    else if (currentStep === 4) {
      if (!data.englishProof) newErrors.englishProof = 'Please select an option.';
    }
    else if (currentStep === 5) {
      if (data.services.length === 0) newErrors.services = 'Please select at least one service.';
    }
    else if (currentStep === 6) {
      if (data.appliedBefore === 'Yes' && !data.appliedDetails.trim()) {
        newErrors.appliedDetails = 'Please briefly describe your previous application.';
      }
    }
    else if (currentStep === 7) {
      if (!data.paymentReceipt) {
        newErrors.paymentReceipt = 'Payment receipt is required to proceed.';
      }
    }
    else if (currentStep === 8) {
      if (!data.agreements.accurate || !data.agreements.noGuarantee || !data.agreements.terms) {
        newErrors.agreements = 'You must agree to all conditions to proceed.';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((s) => Math.min(s + 1, totalSteps));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitApplication = async () => {
    if (!validateStep(9)) return;
    
    setIsSubmitting(true);
    
    console.log('--- APPLICATION SUBMITTED ---', data);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="consult-card success-card">
        <div className="success-icon">
          <Check size={36} />
        </div>
        <h2>Application Received</h2>
        <p className="success-msg">
          Thank you for applying with Eagle Pathway. Our team will review your application and payment, and contact you through Telegram, WhatsApp, or Email.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a href="#" className="btn btn-primary">Join Telegram Community</a>
        </div>
      </div>
    );
  }

  return (
    <div className="consult-wrapper">
      <StepIndicator currentStep={step} totalSteps={totalSteps} />

      <div className="consult-card">
        {step === 1 && (
          <div className="consult-step step-1">
            <h2>Eligibility Confirmation</h2>
            <p className="step-desc">All of the following requirements are mandatory.</p>
            
            <div style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--ink)', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>To qualify for Eagle Pathway’s consultancy support and Italian university admission, applicants must meet the following minimum requirements:</p>
              
              <div>
                <h4 style={{ color: 'var(--navy)', marginBottom: '0.25rem' }}>1️⃣ Academic Qualifications</h4>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', color: 'var(--muted)' }}>
                  <li><strong>Master’s Applicants:</strong> Minimum CGPA of 3.00 / 4.00</li>
                  <li><strong>Bachelor’s Applicants:</strong> Minimum 275 / 600 on Ethiopia’s Grade 12 National Exam</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: 'var(--navy)', marginBottom: '0.25rem' }}>2️⃣ English Language Proficiency</h4>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', color: 'var(--muted)' }}>
                  <li><strong>IELTS:</strong> 6.5 or above</li>
                  <li><strong>TOEFL:</strong> 90 or above</li>
                  <li><strong>Duolingo:</strong> 100 or above</li>
                  <li><strong>Medium of instruction letter</strong></li>
                </ul>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.25rem', fontStyle: 'italic' }}>
                  (Any one of the above is accepted. Medium of instruction letter can be used temporarily for some universities.)
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--navy)', marginBottom: '0.25rem' }}>3️⃣ Bank Statement Requirement</h4>
                <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>A valid bank statement is mandatory, unless you qualify for a merit-based scholarship.</p>
                <p style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.25rem' }}>Accepted bank accounts:</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', color: 'var(--muted)' }}>
                  <li>Applicant’s personal account</li>
                  <li>Parent’s (Father or Mother) account</li>
                  <li>Sibling’s account</li>
                  <li>Banks located in Ethiopia or Italy only</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: 'var(--navy)', marginBottom: '0.25rem' }}>4️⃣ Required Documents</h4>
                <p style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.25rem' }}>(Combine and Upload as One File later in the process)</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', color: 'var(--muted)' }}>
                  <li>Passport (valid for at least 1 year)</li>
                  <li>Academic transcripts (Grade 11 &amp; 12 for Bachelor’s, or University transcript for Master’s)</li>
                  <li>Degree certificate or temporary degree</li>
                  <li>Medium of Instruction (English)</li>
                  <li>Two recommendation letters</li>
                  <li>CV &amp; Motivation Letter (prepared with your consultant)</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: 'var(--navy)', marginBottom: '0.25rem' }}>5️⃣ Commitment &amp; Readiness</h4>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', color: 'var(--muted)' }}>
                  <li>Applicants must be ready to start immediately.</li>
                  <li>A commitment fee of <strong>5,000 ETB</strong> is required before review — this amount will be deducted from the total package fee.</li>
                </ul>
              </div>
            </div>

            <label style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', cursor: 'pointer', background: 'var(--bg-soft)', padding: '1.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--line)' }}>
              <input type="checkbox" checked={data.eligibilityConfirmed} onChange={(e) => updateData({ eligibilityConfirmed: e.target.checked })} style={{ marginTop: '0.2rem', width: '18px', height: '18px', accentColor: 'var(--orange)' }} />
              <span style={{ fontSize: '0.95rem', color: 'var(--ink)', lineHeight: 1.5, fontWeight: 500 }}>
                I have read and confirm that I meet all the above eligibility requirements to proceed.
              </span>
            </label>
            {errors.eligibilityConfirmed && <span className="error-text" style={{ display: 'block', marginTop: '0.75rem', fontWeight: 500 }}>{errors.eligibilityConfirmed}</span>}
          </div>
        )}

        {step === 2 && (
          <div className="consult-step">
            <h2>Personal Information</h2>
            <div className="field">
              <label>Full Name *</label>
              <input type="text" placeholder="Your full name" value={data.fullName} onChange={(e) => updateData({ fullName: e.target.value })} />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>
            
            <div className="field-row">
              <div className="field">
                <label>Gender *</label>
                <select value={data.gender} onChange={(e) => updateData({ gender: e.target.value })}>
                  <option value="">Select...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                {errors.gender && <span className="error-text">{errors.gender}</span>}
              </div>
              <div className="field">
                <label>Phone Number *</label>
                <input type="tel" placeholder="+251 9XX XXX XXX" value={data.phone} onChange={(e) => updateData({ phone: e.target.value })} />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label>Email *</label>
                <input type="email" placeholder="you@email.com" value={data.email} onChange={(e) => updateData({ email: e.target.value })} />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              <div className="field">
                <label>Telegram Username *</label>
                <input type="text" placeholder="@username" value={data.telegram} onChange={(e) => updateData({ telegram: e.target.value })} />
                {errors.telegram && <span className="error-text">{errors.telegram}</span>}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="consult-step">
            <h2>Academic Background</h2>
            <p className="step-desc">What is your current academic level?</p>
            
            <div className="level-cards">
              {['High School Student', 'High School Graduate', "Bachelor's Student", "Bachelor's Graduate", "Master's Student", "Master's Graduate"].map(level => (
                <label key={level} className={`level-card ${data.academicLevel === level ? 'selected' : ''}`}>
                  <input type="radio" checked={data.academicLevel === level} onChange={() => updateData({ academicLevel: level })} style={{ display: 'none' }} />
                  {level}
                </label>
              ))}
            </div>
            {errors.academicLevel && <span className="error-text">{errors.academicLevel}</span>}
          </div>
        )}

        {step === 4 && (
          <div className="consult-step">
            <h2>English Language Qualification</h2>
            <p className="step-desc">Do you have English proficiency proof?</p>
            
            <div className="radio-list">
              {['IELTS', 'TOEFL', 'Duolingo', 'Medium of Instruction Letter', 'No English Test'].map(proof => (
                <label key={proof} className={`radio-item ${data.englishProof === proof ? 'selected' : ''}`}>
                  <input type="radio" checked={data.englishProof === proof} onChange={() => updateData({ englishProof: proof })} />
                  <span>{proof}</span>
                </label>
              ))}
            </div>
            {errors.englishProof && <span className="error-text">{errors.englishProof}</span>}
          </div>
        )}

        {step === 5 && (
          <div className="consult-step">
            <h2>Consultancy Services</h2>
            <p className="step-desc">What support do you need? (Select all that apply)</p>
            
            <ServiceSelector 
              selectedServices={data.services} 
              onChange={(services) => updateData({ services })} 
            />
            {errors.services && <span className="error-text">{errors.services}</span>}
          </div>
        )}

        {step === 6 && (
          <div className="consult-step">
            <h2>About Your Goal</h2>
            <p className="step-desc">Help us understand your context. (Optional)</p>
            
            <div className="field">
              <label>Why do you want to study abroad?</label>
              <textarea placeholder="Share your motivation..." value={data.motivation} onChange={(e) => updateData({ motivation: e.target.value })} rows={4} />
            </div>

            <div className="field" style={{ marginTop: '1.5rem' }}>
              <label>Have you applied for a scholarship before?</label>
              <div className="radio-group-inline">
                <label className={`radio-pill ${data.appliedBefore === 'Yes' ? 'selected' : ''}`}>
                  <input type="radio" checked={data.appliedBefore === 'Yes'} onChange={() => updateData({ appliedBefore: 'Yes' })} style={{ display: 'none' }} />
                  Yes
                </label>
                <label className={`radio-pill ${data.appliedBefore === 'No' ? 'selected' : ''}`}>
                  <input type="radio" checked={data.appliedBefore === 'No'} onChange={() => updateData({ appliedBefore: 'No' })} style={{ display: 'none' }} />
                  No
                </label>
              </div>
            </div>

            {data.appliedBefore === 'Yes' && (
              <div className="field animate-in">
                <label>Please describe briefly *</label>
                <input type="text" placeholder="Which scholarship/university?" value={data.appliedDetails} onChange={(e) => updateData({ appliedDetails: e.target.value })} />
                {errors.appliedDetails && <span className="error-text">{errors.appliedDetails}</span>}
              </div>
            )}

            <div className="field" style={{ marginTop: '1.5rem' }}>
              <label>How did you hear about Eagle Pathway?</label>
              <select value={data.referral} onChange={(e) => updateData({ referral: e.target.value })}>
                <option value="">Select...</option>
                <option value="Telegram">Telegram</option>
                <option value="Instagram">Instagram</option>
                <option value="TikTok">TikTok</option>
                <option value="Friend">Friend</option>
                <option value="Google Search">Google Search</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        )}

        {step === 7 && (
          <div className="consult-step">
            <h2>Payment Confirmation</h2>
            <p className="step-desc">Please upload your payment receipt to proceed.</p>

            <div className="payment-info-box" style={{ background: 'var(--bg-soft)', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--line)', marginBottom: '2rem' }}>
              <div className="amount" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '1rem', borderBottom: '1px solid var(--line)', paddingBottom: '0.75rem' }}>
                Required First Payment: <span style={{ color: 'var(--orange)' }}>5000 ETB</span>
              </div>
              <div className="details" style={{ fontSize: '0.95rem', color: 'var(--ink)' }}>
                <p style={{ marginBottom: '0.5rem' }}><span style={{ color: 'var(--muted)', width: '130px', display: 'inline-block' }}>Payment Method:</span> Commercial Bank of Ethiopia</p>
                <p style={{ marginBottom: '0.5rem' }}><span style={{ color: 'var(--muted)', width: '130px', display: 'inline-block' }}>Account Holder:</span> Tadelech Eyasu</p>
                <p><span style={{ color: 'var(--muted)', width: '130px', display: 'inline-block' }}>Account Number:</span> <strong style={{ fontSize: '1.1rem', letterSpacing: '0.5px' }}>1000401380338</strong></p>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <FileUpload 
                file={data.paymentReceipt} 
                onFileSelect={(file) => updateData({ paymentReceipt: file })} 
              />
              {errors.paymentReceipt && <span className="error-text" style={{ display: 'block', marginTop: '1rem', textAlign: 'center' }}>{errors.paymentReceipt}</span>}
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="consult-step">
            <h2>Agreement</h2>
            <p className="step-desc">Please review and agree to the following.</p>

            <div className="agreements-list">
              <label className="checkbox-item">
                <input 
                  type="checkbox" 
                  checked={data.agreements.accurate} 
                  onChange={(e) => updateData({ agreements: { ...data.agreements, accurate: e.target.checked } })}
                />
                <span>I confirm that all information provided is accurate. *</span>
              </label>

              <label className="checkbox-item">
                <input 
                  type="checkbox" 
                  checked={data.agreements.noGuarantee} 
                  onChange={(e) => updateData({ agreements: { ...data.agreements, noGuarantee: e.target.checked } })}
                />
                <span>I understand consultancy services do not guarantee scholarship awards or university admission. *</span>
              </label>

              <label className="checkbox-item">
                <input 
                  type="checkbox" 
                  checked={data.agreements.terms} 
                  onChange={(e) => updateData({ agreements: { ...data.agreements, terms: e.target.checked } })}
                />
                <span>I agree to Eagle Pathway terms and conditions. *</span>
              </label>
            </div>
            {errors.agreements && <span className="error-text" style={{ display: 'block', marginTop: '1rem' }}>{errors.agreements}</span>}
          </div>
        )}

        {step === 9 && (
          <div className="consult-step">
            <h2>Final Review</h2>
            <p className="step-desc">Check your information before submitting.</p>
            
            <ReviewStep data={data} />
          </div>
        )}

        {/* Navigation */}
        <div className="consult-actions">
          {step > 1 ? (
            <button className="btn btn-ghost" onClick={prevStep} disabled={isSubmitting}>Previous</button>
          ) : (
            <div></div>
          )}

          {step < totalSteps ? (
            <button className="btn btn-primary" onClick={nextStep}>Continue</button>
          ) : (
            <button className="btn btn-primary" onClick={submitApplication} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Apply with Us'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
