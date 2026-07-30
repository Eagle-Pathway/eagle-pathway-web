'use client';

import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import StepIndicator from './StepIndicator';
import ServiceSelector from './ServiceSelector';
import FileUpload from './FileUpload';
import ReviewStep from './ReviewStep';

type ApplicationData = {
  // Step 1
  eligibilityConfirmed: boolean;

  // Step 2
  selectedScholarships: string[];

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
  selectedScholarships: [],
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

  const [scholarships, setScholarships] = useState<any[]>([]);
  const [loadingScholarships, setLoadingScholarships] = useState(true);
  const [expandedScholarshipId, setExpandedScholarshipId] = useState<string | null>(null);

  useEffect(() => {
    async function loadScholarships() {
      try {
        const { supabase } = await import('@/app/lib/supabase');
        const { data, error } = await supabase
          .from('scholarships')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false });
        if (!error && data) {
          setScholarships(data);
        }
      } catch (err) {
        console.error(err);
      }
      setLoadingScholarships(false);
    }
    loadScholarships();
  }, []);

  const totalSteps = 10;

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
      if (!data.selectedScholarships || data.selectedScholarships.length === 0) newErrors.selectedScholarships = 'Please select at least one option to proceed.';
    }
    else if (currentStep === 9) {
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
    if (!validateStep(10)) return;
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('formType', 'Apply with Us');
      
      const { paymentReceipt, ...payload } = data;
      
      formData.append('data', JSON.stringify(payload));
      
      if (data.paymentReceipt) {
        formData.append('receipt', data.paymentReceipt);
      }

      const res = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert('Failed to submit application. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="consult-card success-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ width: 64, height: 64, background: '#dcfce7', color: '#15803d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <Check size={32} />
        </div>
        <h2 style={{ fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem' }}>Application Received!</h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Thank you for applying with Eagle Pathway. Our team will review your application and payment shortly.
        </p>
        <div style={{ background: 'var(--bg-soft)', padding: '2rem', borderRadius: 'var(--radius-lg)', display: 'inline-block', textAlign: 'left' }}>
          <p style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '0.5rem' }}>Next Step:</p>
          <p style={{ color: 'var(--muted)' }}>Contact <strong>@italy_premiumservice</strong> on Telegram with:</p>
          <div style={{ background: '#fff', padding: '1rem', border: '1px solid var(--line)', borderRadius: '8px', marginTop: '1rem', fontStyle: 'italic', color: 'var(--navy)' }}>
            &quot;I have submitted my application and payment receipt — ready for my consultation.&quot;
          </div>
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
          <div className="consult-step step-2 animate-in">
            <h2>Active Scholarships</h2>
            <p className="step-desc">Which opportunity are you applying for?</p>
            
            {loadingScholarships ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>Loading active scholarships...</div>
            ) : (
              <div className="radio-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label 
                  onClick={() => {
                    const current = data.selectedScholarships || [];
                    const hasGeneral = current.includes('General Consultation / Not Sure Yet');
                    const updated = hasGeneral 
                      ? current.filter(item => item !== 'General Consultation / Not Sure Yet')
                      : [...current, 'General Consultation / Not Sure Yet'];
                    updateData({ selectedScholarships: updated });
                  }}
                  className={`radio-item ${(data.selectedScholarships || []).includes('General Consultation / Not Sure Yet') ? 'selected' : ''}`} 
                  style={{ display: 'flex', alignItems: 'flex-start', padding: '1rem', border: '1px solid var(--line)', borderRadius: '8px', cursor: 'pointer' }}
                >
                  <input 
                    type="checkbox" 
                    checked={(data.selectedScholarships || []).includes('General Consultation / Not Sure Yet')} 
                    readOnly
                    style={{ marginTop: '0.25rem', marginRight: '1rem', accentColor: 'var(--orange)' }}
                  />
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--navy)', fontSize: '1.05rem' }}>General Consultation</h4>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: 'var(--muted)' }}>I want general university admission or scholarship support, but I haven't chosen a specific one yet.</p>
                  </div>
                </label>

                {scholarships.map((s) => {
                  const currentSelected = data.selectedScholarships || [];
                  const isSelected = currentSelected.includes(s.name);
                  const isExpanded = expandedScholarshipId === s.id;

                  const toggleSelection = () => {
                    const updated = isSelected 
                      ? currentSelected.filter(item => item !== s.name)
                      : [...currentSelected, s.name];
                    updateData({ selectedScholarships: updated });
                  };

                  return (
                    <div 
                      key={s.id} 
                      onClick={toggleSelection}
                      className={`radio-item ${isSelected ? 'selected' : ''}`} 
                      style={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        padding: '1.25rem', 
                        border: isSelected ? '2px solid var(--orange)' : '1px solid var(--line)', 
                        borderRadius: '12px', 
                        cursor: 'pointer',
                        background: isSelected ? 'rgba(255,107,0,0.03)' : '#fff',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
                        <input 
                          type="checkbox" 
                          checked={isSelected} 
                          readOnly
                          style={{ marginTop: '0.25rem', marginRight: '1rem', accentColor: 'var(--orange)' }}
                        />
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <h4 style={{ margin: 0, color: 'var(--navy)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span>{s.country_flag}</span> {s.name}
                            </h4>
                            {s.deadline && (
                              <span style={{ fontSize: '0.8rem', color: 'var(--orange)', fontWeight: 600, background: 'rgba(255,107,0,0.1)', padding: '2px 8px', borderRadius: '12px' }}>
                                Deadline: {new Date(s.deadline).toLocaleDateString()}
                              </span>
                            )}
                          </div>

                          <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--ink)', fontWeight: 500 }}>
                            {s.organization} • {s.country}
                          </p>

                          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                            {s.degree_levels?.map((level: string) => (
                              <span key={level} style={{ fontSize: '0.75rem', fontWeight: 600, background: 'var(--bg-soft)', color: 'var(--navy)', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                                {level}
                              </span>
                            ))}
                            {s.funding_details && (
                              <span style={{ fontSize: '0.85rem', color: 'var(--orange)', fontWeight: 600 }}>
                                • {s.funding_details}
                              </span>
                            )}
                          </div>

                          {/* Toggle Button for Details */}
                          <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem' }}>
                            <button 
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedScholarshipId(isExpanded ? null : s.id);
                              }}
                              style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--navy)',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.35rem',
                                padding: 0,
                                textDecoration: 'underline'
                              }}
                            >
                              {isExpanded ? 'Hide Details ▲' : 'View Full Details & Requirements ▼'}
                            </button>
                          </div>

                          {/* Expanded Details Panel */}
                          {isExpanded && (
                            <div 
                              onClick={(e) => e.stopPropagation()} 
                              style={{
                                marginTop: '0.85rem',
                                padding: '1rem',
                                background: '#f8fafc',
                                borderRadius: '8px',
                                border: '1px solid #e2e8f0',
                                fontSize: '0.88rem',
                                color: 'var(--ink)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.85rem'
                              }}
                            >
                              {s.description && (
                                <div>
                                  <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: '0.35rem' }}>Overview & Description:</strong>
                                  <p style={{ margin: 0, whiteSpace: 'pre-line', color: '#475569', fontSize: '0.85rem', lineHeight: 1.6 }}>
                                    {s.description}
                                  </p>
                                </div>
                              )}

                              {s.requirements && s.requirements.length > 0 && (
                                <div>
                                  <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: '0.35rem' }}>Requirements:</strong>
                                  <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#475569', fontSize: '0.85rem', lineHeight: 1.6 }}>
                                    {Array.isArray(s.requirements) ? (
                                      s.requirements.map((req: string, idx: number) => <li key={idx}>{req}</li>)
                                    ) : (
                                      <li>{String(s.requirements)}</li>
                                    )}
                                  </ul>
                                </div>
                              )}

                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.75rem', background: '#fff', padding: '0.85rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                                {s.funding_type && (
                                  <div>
                                    <span style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'block' }}>Funding Type</span>
                                    <strong style={{ fontSize: '0.85rem', color: '#1e293b', textTransform: 'capitalize' }}>{s.funding_type.replace('_', ' ')}</strong>
                                  </div>
                                )}
                                {s.min_gpa && (
                                  <div>
                                    <span style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'block' }}>Min GPA</span>
                                    <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>{s.min_gpa} / 4.0</strong>
                                  </div>
                                )}
                                {s.requires_ielts !== undefined && (
                                  <div>
                                    <span style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'block' }}>IELTS Required</span>
                                    <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>{s.requires_ielts ? 'Yes' : 'No / MOI Allowed'}</strong>
                                  </div>
                                )}
                                {s.accepts_english_medium !== undefined && (
                                  <div>
                                    <span style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'block' }}>Medium of Instruction</span>
                                    <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>{s.accepts_english_medium ? 'Accepted' : 'Not Accepted'}</strong>
                                  </div>
                                )}
                              </div>

                              {s.fields_of_study && s.fields_of_study.length > 0 && (
                                <div>
                                  <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>Fields of Study:</span>
                                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                                    {s.fields_of_study.map((field: string) => (
                                      <span key={field} style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', textTransform: 'capitalize' }}>
                                        {field}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {s.target_departments && s.target_departments.length > 0 && (
                                <div>
                                  <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>Target Departments:</span>
                                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                                    {s.target_departments.map((dept: string) => (
                                      <span key={dept} style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>
                                        {dept}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {s.website_url && (
                                <div style={{ marginTop: '0.25rem' }}>
                                  <a 
                                    href={s.website_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ color: 'var(--orange)', textDecoration: 'underline', fontSize: '0.82rem', fontWeight: 600 }}
                                  >
                                    Visit Official Scholarship Portal ↗
                                  </a>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {errors.selectedScholarships && <span className="error-text" style={{ display: 'block', marginTop: '1rem' }}>{errors.selectedScholarships}</span>}
          </div>
        )}

        {step === 3 && (
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

        {step === 4 && (
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

        {step === 5 && (
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

        {step === 6 && (
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

        {step === 7 && (
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

        {step === 8 && (
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

        {step === 9 && (
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

        {step === 10 && (
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
