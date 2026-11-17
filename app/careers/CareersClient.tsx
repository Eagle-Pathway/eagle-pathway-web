'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Lock, Briefcase } from 'lucide-react';
import { Career, isCareerOpen } from './careersData';

interface Props {
  initialCareers: Career[];
}

export default function CareersClient({ initialCareers }: Props) {
  const [careers] = useState<Career[]>(initialCareers);

  return (
    <>
      {/* Top Header Banner */}
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

          {/* Job Rows / Empty State */}
          {careers.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 1.5rem',
                background: '#f8fafc',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                marginTop: '1rem',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#f1f5f9',
                  color: '#64748b',
                  display: 'grid',
                  placeItems: 'center',
                  margin: '0 auto 1.25rem',
                }}
              >
                <Briefcase size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', margin: '0 0 0.5rem' }}>
                No Open Positions at This Time
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
                We are not actively hiring for new positions right now. Please check back later or follow our announcements for upcoming roles!
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {careers.map((job) => (
                <Link
                  key={job.id}
                  href={`/careers/${job.slug || job.id}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem 0.25rem',
                    borderBottom: '1px solid var(--line)',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'background 0.15s ease',
                  }}
                  className="career-item-row"
                >
                  {/* Left: Title & Meta */}
                  <div style={{ paddingRight: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                      <h3
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: 'var(--navy)',
                          margin: 0,
                        }}
                      >
                        {job.title}
                      </h3>
                      {!isCareerOpen(job) && (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            background: '#fee2e2',
                            color: '#b91c1c',
                            padding: '0.15rem 0.55rem',
                            borderRadius: '999px',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                          }}
                        >
                          <Lock size={10} /> Closed
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 500 }}>
                      {job.department} · {job.employment_type} · {job.location}
                    </div>
                  </div>

                  {/* Right: Deadline & Circular Arrow Button */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                    <span style={{ fontSize: '0.88rem', color: !isCareerOpen(job) ? '#b91c1c' : 'var(--muted)', fontWeight: !isCareerOpen(job) ? 600 : 400, whiteSpace: 'nowrap' }}>
                      {!isCareerOpen(job) ? 'Closed' : job.deadline ? `Apply by ${job.deadline}` : 'Open'}
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
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
