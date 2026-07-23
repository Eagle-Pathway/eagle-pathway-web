'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import StepIndicator from './StepIndicator';
import ServiceSelector from './ServiceSelector';
import FileUpload from './FileUpload';
import ReviewStep from './ReviewStep';

type ConsultationData = {
  // Step 1
  fullName: string;
  gender: string;
  phone: string;
  email: string;
  telegram: string;
  
  // Step 2
  academicLevel: string;
  
  // Step 3
  englishProof: string;
  
  // Step 4
  services: string[];
  
  // Step 5
  motivation: string;
  appliedBefore: string;
  appliedDetails: string;
  referral: string;
  
  // Step 6
  paymentReceipt: File | null;
  
  // Step 7
  agreements: {
    accurate: boolean;
    noGuarantee: boolean;
    terms: boolean;
  };
};

const initialData: ConsultationData = {
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
  const [data, setData] = useState<ConsultationData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalSteps = 8;

  const updateData = (fields: Partial<ConsultationData>) => {
    setData((prev) => ({ ...prev, ...fields }));
    if (Object.keys(errors).length > 0) setErrors({});
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!data.fullName.trim()) newErrors.fullName = 'Required';
      if (!data.gender) newErrors.gender = 'Required';
      if (!data.phone.trim()) newErrors.phone = 'Required';
      if (!data.email.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) newErrors.email = 'Valid email required';
      if (!data.telegram.trim()) newErrors.telegram = 'Required';
    }
    else if (currentStep === 2) {
      if (!data.academicLevel) newErrors.academicLevel = 'Please select your academic level.';
    }
    else if (currentStep === 3) {
      if (!data.englishProof) newErrors.englishProof = 'Please select an option.';
    }
    else if (currentStep === 4) {
      if (data.services.length === 0) newErrors.services = 'Please select at least one service.';
    }
    else if (currentStep === 5) {
      // All optional, but if appliedBefore is Yes, they should provide details
      if (data.appliedBefore === 'Yes' && !data.appliedDetails.trim()) {
        newErrors.appliedDetails = 'Please briefly describe your previous application.';
      }
    }
    else if (currentStep === 6) {
      if (!data.paymentReceipt) newErrors.paymentReceipt = 'Payment receipt is required.';
    }
    else if (currentStep === 7) {
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

  const submitConsultation = async () => {
    if (!validateStep(8)) return;
    
    setIsSubmitting(true);
    
    // Prepare payload
    const payload = {
      ...data,
      paymentReceipt: data.paymentReceipt?.name || null // Just logging the name for now
    };
    
    console.log('--- CONSULTATION SUBMITTED ---', payload);
    // TODO: backend integration with Supabase or Next.js API
    
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
        <h2>Consultation Request Received</h2>
        <p className="success-msg">
          Thank you for contacting Eagle Pathway. Our team will review your request and contact you through Telegram, WhatsApp, or Email.
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

        {step === 2 && (
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

        {step === 3 && (
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

        {step === 4 && (
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

        {step === 5 && (
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

        {step === 6 && (
          <div className="consult-step">
            <h2>Consultation Confirmation</h2>
            <p className="step-desc">To confirm your consultation request.</p>

            <div className="payment-info-box">
              <div className="amount">Payment Required: <span>5000 ETB</span></div>
              <div className="details">
                <p><span>Payment Method:</span> Commercial Bank of Ethiopia</p>
                <p><span>Account Holder:</span> Tadelech Eyasu</p>
                <p><span>Account Number:</span> <strong>1000401380338</strong></p>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <FileUpload 
                file={data.paymentReceipt} 
                onFileSelect={(file) => updateData({ paymentReceipt: file })} 
              />
              {errors.paymentReceipt && <span className="error-text" style={{ display: 'block', marginTop: '0.5rem', textAlign: 'center' }}>{errors.paymentReceipt}</span>}
            </div>
          </div>
        )}

        {step === 7 && (
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

        {step === 8 && (
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
            <div></div> // Spacer for layout
          )}

          {step < totalSteps ? (
            <button className="btn btn-primary" onClick={nextStep}>Continue</button>
          ) : (
            <button className="btn btn-primary" onClick={submitConsultation} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
