'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Send, Loader2, UploadCloud, FileText, X } from 'lucide-react';

export interface Career {
  id: string;
  title: string;
  slug?: string;
  department: string;
  location: string;
  employment_type: string;
  deadline?: string;
  summary: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  is_active?: boolean;
}

interface Props {
  initialCareers: Career[];
}

export default function CareersClient({ initialCareers }: Props) {
  const [careers] = useState<Career[]>(initialCareers);
  const [activeJob, setActiveJob] = useState<Career | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    cover_letter: '',
  });

  // Resume File State
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeLink, setResumeLink] = useState('');
  const [useLinkInstead, setUseLinkInstead] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Check URL query param on mount (e.g. ?role=id)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const roleId = params.get('role');
      if (roleId) {
        const found = careers.find((c) => c.id === roleId || c.slug === roleId);
        if (found) {
          setActiveJob(found);
        }
      }
    }
  }, [careers]);

  const handleOpenJob = (job: Career) => {
    setActiveJob(job);
    setSubmitSuccess(false);
    setSubmitError(null);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('role', job.slug || job.id);
      window.history.pushState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToList = () => {
    setActiveJob(null);
    setSubmitSuccess(false);
    setSubmitError(null);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('role');
      window.history.pushState({}, '', url.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit: 10MB
    if (file.size > 10 * 1024 * 1024) {
      setSubmitError('File size exceeds 10MB. Please upload a smaller PDF or Word file.');
      return;
    }

    setSubmitError(null);
    setResumeFile(file);
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeJob) return;

    if (!resumeFile && !resumeLink) {
      setSubmitError('Please upload your CV / Resume to submit your application.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const data = new FormData();
      data.append('career_id', activeJob.id);
      data.append('job_title', activeJob.title);
      data.append('full_name', formData.full_name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('cover_letter', formData.cover_letter);

      if (resumeFile) {
        data.append('resume', resumeFile);
      }
      if (resumeLink) {
        data.append('resume_url', resumeLink);
      }

      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        body: data,
      });

      const resData = await res.json();
      if (!res.ok || resData.error) {
        throw new Error(resData.error || 'Failed to submit application.');
      }

      setSubmitSuccess(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        cover_letter: '',
      });
      setResumeFile(null);
      setResumeLink('');
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Top Navy Header Banner */}
      <section
        style={{
          background: '#111b40',
          color: '#ffffff',
          padding: '4rem 1.5rem 3.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              margin: '0 0 0.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            Careers
          </h1>
          <div style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 500 }}>
            <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
              Home
            </Link>{' '}
            / <span>Careers</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '3.5rem 1.5rem 5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {activeJob ? (
            /* Single Job View on the Page (NO MODAL) */
            <div>
              {/* Back Link */}
              <button
                onClick={handleBackToList}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--orange)',
                  cursor: 'pointer',
                  marginBottom: '1.75rem',
                }}
              >
                <ArrowLeft size={16} /> Back to all open roles
              </button>

              {/* Title & Metadata */}
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.35rem)',
                  fontWeight: 800,
                  color: 'var(--navy)',
                  margin: '0 0 0.5rem',
                  lineHeight: 1.25,
                }}
              >
                {activeJob.title}
              </h2>
              <div
                style={{
                  fontSize: '0.95rem',
                  color: '#64748b',
                  fontWeight: 500,
                  marginBottom: '1.75rem',
                }}
              >
                {activeJob.department} · {activeJob.employment_type} · {activeJob.location}
                {activeJob.deadline && (
                  <span style={{ color: 'var(--orange)', fontWeight: 700, marginLeft: '0.5rem' }}>
                    · Apply by {activeJob.deadline}
                  </span>
                )}
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1.5px solid var(--line)', marginBottom: '2rem' }} />

              {/* About Role */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.65rem' }}>
                  About the Role
                </h3>
                <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7, margin: 0 }}>
                  {activeJob.description || activeJob.summary}
                </p>
              </div>

              {/* Responsibilities */}
              {activeJob.responsibilities && activeJob.responsibilities.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.65rem' }}>
                    What you will do
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: '1.35rem', fontSize: '0.95rem', color: '#334155', lineHeight: 1.7 }}>
                    {activeJob.responsibilities.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '0.35rem' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {activeJob.requirements && activeJob.requirements.length > 0 && (
                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.65rem' }}>
                    What we look for
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: '1.35rem', fontSize: '0.95rem', color: '#334155', lineHeight: 1.7 }}>
                    {activeJob.requirements.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '0.35rem' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* In-Page Application Form */}
              <div
                style={{
                  borderTop: '1.5px solid var(--line)',
                  paddingTop: '2.5rem',
                  marginTop: '2rem',
                }}
              >
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)', margin: '0 0 0.4rem' }}>
                  Apply for this position
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', margin: '0 0 1.5rem' }}>
                  Fill in your details and upload your CV/Resume below.
                </p>

                {submitSuccess ? (
                  <div
                    style={{
                      background: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      borderRadius: '12px',
                      padding: '1.75rem',
                      textAlign: 'center',
                    }}
                  >
                    <CheckCircle2 size={36} style={{ color: '#16a34a', margin: '0 auto 0.5rem' }} />
                    <h4 style={{ color: '#166534', margin: '0 0 0.35rem', fontWeight: 700, fontSize: '1.1rem' }}>
                      Application Submitted!
                    </h4>
                    <p style={{ color: '#15803d', fontSize: '0.92rem', margin: 0 }}>
                      Thank you. We have received your application for &ldquo;{activeJob.title}&rdquo; and will be in touch.
                    </p>
                    <button
                      onClick={handleBackToList}
                      className="btn btn-primary"
                      style={{ marginTop: '1.25rem', padding: '0.65rem 1.25rem' }}
                    >
                      Back to all roles
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {submitError && (
                      <div
                        style={{
                          background: '#fef2f2',
                          border: '1px solid #fecaca',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          color: '#b91c1c',
                          fontSize: '0.88rem',
                        }}
                      >
                        {submitError}
                      </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Abebe Kebede"
                          value={formData.full_name}
                          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            border: '1.5px solid var(--line)',
                            fontSize: '0.95rem',
                            outline: 'none',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            border: '1.5px solid var(--line)',
                            fontSize: '0.95rem',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+251 9XX XXX XXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            border: '1.5px solid var(--line)',
                            fontSize: '0.95rem',
                            outline: 'none',
                          }}
                        />
                      </div>

                      {/* Resume / CV Upload Section */}
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                          <label style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--navy)' }}>
                            CV / Resume *
                          </label>
                          <button
                            type="button"
                            onClick={() => setUseLinkInstead(!useLinkInstead)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: 'var(--orange)',
                              fontSize: '0.78rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              padding: 0,
                            }}
                          >
                            {useLinkInstead ? 'Upload file instead' : 'Or paste link'}
                          </button>
                        </div>

                        {useLinkInstead ? (
                          <input
                            type="url"
                            placeholder="https://drive.google.com/your-cv..."
                            value={resumeLink}
                            onChange={(e) => setResumeLink(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              borderRadius: '8px',
                              border: '1.5px solid var(--line)',
                              fontSize: '0.95rem',
                              outline: 'none',
                            }}
                          />
                        ) : (
                          <div>
                            <input
                              type="file"
                              ref={fileInputRef}
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              style={{ display: 'none' }}
                            />

                            {resumeFile ? (
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  padding: '0.65rem 0.9rem',
                                  borderRadius: '8px',
                                  border: '1.5px solid #10b981',
                                  background: '#f0fdf4',
                                }}
                              >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
                                  <FileText size={18} style={{ color: '#16a34a', flexShrink: 0 }} />
                                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#0f172a', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                    {resumeFile.name}
                                  </span>
                                  <span style={{ fontSize: '0.78rem', color: '#64748b', flexShrink: 0 }}>
                                    ({formatFileSize(resumeFile.size)})
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={handleRemoveFile}
                                  style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#64748b',
                                    cursor: 'pointer',
                                    padding: '0.2rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                  title="Remove file"
                                >
                                  <X size={16} />
                                </button>
                              </div>
                            ) : (
                              <div
                                onClick={() => fileInputRef.current?.click()}
                                style={{
                                  border: '1.5px dashed var(--line)',
                                  borderRadius: '8px',
                                  padding: '0.65rem 1rem',
                                  textAlign: 'center',
                                  cursor: 'pointer',
                                  background: '#fafafa',
                                  transition: 'all 0.2s ease',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '0.5rem',
                                }}
                              >
                                <UploadCloud size={18} style={{ color: 'var(--orange)' }} />
                                <span style={{ fontSize: '0.88rem', color: 'var(--navy)', fontWeight: 600 }}>
                                  Click to upload CV / Resume
                                </span>
                                <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                                  (PDF, DOC, DOCX)
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                        Why are you a good fit for this role? (Brief note) *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us briefly about your relevant experience and background..."
                        value={formData.cover_letter}
                        onChange={(e) => setFormData({ ...formData, cover_letter: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          border: '1.5px solid var(--line)',
                          fontSize: '0.95rem',
                          outline: 'none',
                          resize: 'vertical',
                        }}
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary btn-lg"
                        style={{ padding: '0.85rem 2rem', fontWeight: 700 }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" /> Submitting...
                          </>
                        ) : (
                          <>
                            Submit Application <Send size={15} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          ) : (
            /* Open Roles List (matching inspiration) */
            <div>
              {/* Intro Paragraph */}
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.65,
                  color: '#475569',
                  margin: '0 0 2.5rem',
                  maxWidth: '720px',
                }}
              >
                Eagle Pathway guides ambitious students from local classrooms to global scholarships and
                world-class universities. Join the team that makes it happen. Pick a role, read what it
                involves, and apply in a few minutes.
              </p>

              {/* Open Roles Count Bar */}
              <div style={{ marginBottom: '0.5rem' }}>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: 'var(--orange)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'block',
                  }}
                >
                  {careers.length} {careers.length === 1 ? 'OPEN ROLE' : 'OPEN ROLES'}
                </span>
              </div>

              {/* Divider Line */}
              <div style={{ borderTop: '1.5px solid var(--line)', marginBottom: '0.5rem' }} />

              {/* Job Rows */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {careers.map((job) => (
                  <div
                    key={job.id}
                    onClick={() => handleOpenJob(job)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1.5rem 0.25rem',
                      borderBottom: '1px solid var(--line)',
                      cursor: 'pointer',
                      transition: 'background 0.15s ease',
                    }}
                    className="career-item-row"
                  >
                    {/* Left: Title & Meta */}
                    <div style={{ paddingRight: '1rem' }}>
                      <h3
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: 'var(--navy)',
                          margin: '0 0 0.35rem',
                        }}
                      >
                        {job.title}
                      </h3>
                      <div style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 500 }}>
                        {job.department} · {job.employment_type} · {job.location}
                      </div>
                    </div>

                    {/* Right: Deadline & Circular Arrow Button */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                      <span style={{ fontSize: '0.88rem', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
                        {job.deadline ? `Apply by ${job.deadline}` : 'Open'}
                      </span>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          border: '1.5px solid var(--line)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--navy)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
