'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Send, Loader2, UploadCloud, FileText, X, Share2, Check } from 'lucide-react';
import { Career } from './careersData';

interface Props {
  job: Career;
}

export default function JobDetailView({ job }: Props) {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    cover_letter: '',
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeLink, setResumeLink] = useState('');
  const [useLinkInstead, setUseLinkInstead] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyShareLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setSubmitError('File size exceeds 10MB. Please upload a smaller file.');
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

    if (!resumeFile && !resumeLink) {
      setSubmitError('Please upload your CV / Resume to submit your application.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const data = new FormData();
      data.append('career_id', job.id);
      data.append('job_title', job.title);
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
    <div>
      {/* Top Bar with Back Link & Share Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <Link
          href="/careers"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontSize: '0.95rem',
            fontWeight: 600,
            color: 'var(--orange)',
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={16} /> Back to all open roles
        </Link>

        {/* Share Button */}
        <button
          type="button"
          onClick={handleCopyShareLink}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.86rem',
            fontWeight: 600,
            color: copiedLink ? '#16a34a' : '#475569',
            background: copiedLink ? '#f0fdf4' : '#f8fafc',
            border: '1px solid',
            borderColor: copiedLink ? '#bbf7d0' : 'var(--line)',
            padding: '0.45rem 0.9rem',
            borderRadius: '999px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          title="Copy direct shareable link for this role"
        >
          {copiedLink ? (
            <>
              <Check size={14} style={{ color: '#16a34a' }} /> Copied Link!
            </>
          ) : (
            <>
              <Share2 size={14} /> Share Role
            </>
          )}
        </button>
      </div>

      {/* Role Title & Metadata */}
      <h2
        style={{
          fontSize: 'clamp(1.85rem, 4.5vw, 2.5rem)',
          fontWeight: 800,
          color: 'var(--navy)',
          margin: '0 0 0.5rem',
          lineHeight: 1.25,
        }}
      >
        {job.title}
      </h2>
      <div
        style={{
          fontSize: '0.95rem',
          color: '#64748b',
          fontWeight: 500,
          marginBottom: '1.75rem',
        }}
      >
        {job.department} · {job.employment_type} · {job.location}
        {job.deadline && (
          <span style={{ color: 'var(--orange)', fontWeight: 700, marginLeft: '0.5rem' }}>
            · Apply by {job.deadline}
          </span>
        )}
      </div>

      {/* Divider Line */}
      <div style={{ borderTop: '1.5px solid var(--line)', marginBottom: '2rem' }} />

      {/* About the Role */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.65rem' }}>
          About the Role
        </h3>
        <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7, margin: 0 }}>
          {job.description || job.summary}
        </p>
      </div>

      {/* Responsibilities */}
      {job.responsibilities && job.responsibilities.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.65rem' }}>
            What you will do
          </h3>
          <ul style={{ margin: 0, paddingLeft: '1.35rem', fontSize: '0.95rem', color: '#334155', lineHeight: 1.7 }}>
            {job.responsibilities.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '0.35rem' }}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Requirements */}
      {job.requirements && job.requirements.length > 0 && (
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.65rem' }}>
            What we look for
          </h3>
          <ul style={{ margin: 0, paddingLeft: '1.35rem', fontSize: '0.95rem', color: '#334155', lineHeight: 1.7 }}>
            {job.requirements.map((item, idx) => (
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
              Thank you. We have received your application for &ldquo;{job.title}&rdquo; and will be in touch.
            </p>
            <Link
              href="/careers"
              className="btn btn-primary"
              style={{ display: 'inline-flex', marginTop: '1.25rem', padding: '0.65rem 1.25rem', textDecoration: 'none' }}
            >
              Back to all roles
            </Link>
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
  );
}

