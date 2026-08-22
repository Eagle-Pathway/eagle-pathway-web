'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Languages, Award, ShieldCheck, Zap, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import { site } from '@/app/content/site';

export default function TutoringShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'school' | 'exams' | 'languages'>('all');

  const tracks = [
    {
      id: 'school',
      category: 'School Curriculum',
      badge: 'KG – Grade 12',
      icon: BookOpen,
      title: 'School Curriculum & National Exams',
      description: 'Customized 1-on-1 tutoring covering all primary and secondary subjects following national & international curricula.',
      subjects: ['Mathematics & Calculus', 'Physics & Chemistry', 'Biology & General Science', 'National Exam Preparation', 'Homework & Study Habits'],
      tagColor: 'var(--navy)',
    },
    {
      id: 'exams',
      category: 'Test Preparation',
      badge: 'High-Stakes Prep',
      icon: Award,
      title: 'SAT, IELTS & TOEFL Test Prep',
      description: 'Structured prep programs with diagnostic testing, mock exams, and proven strategies to reach top target scores.',
      subjects: ['Digital SAT (Math & Verbal)', 'IELTS Academic & General', 'TOEFL iBT Mastery', 'Duolingo English Test', 'Mock Exams & Score Analytics'],
      tagColor: 'var(--orange)',
    },
    {
      id: 'languages',
      category: 'Languages & Skills',
      badge: 'All Levels',
      icon: Languages,
      title: 'Language Mastery & Communication',
      description: 'Accelerated language learning for academic readiness, study abroad, and professional confidence.',
      subjects: ['Academic & Business English', 'English Speaking & Pronunciation', 'Grammar & Essay Writing', 'Conversational French & German', 'Public Speaking & Presentation'],
      tagColor: '#059669',
    },
  ];

  const filteredTracks = activeTab === 'all' ? tracks : tracks.filter((t) => t.id === activeTab);

  return (
    <div className="tutoring-showcase">
      <div className="container">
        {/* Header */}
        <Reveal className="section-head text-center">
          <span className="eyebrow" style={{ background: 'rgba(234, 88, 12, 0.1)', color: 'var(--orange)', padding: '0.4rem 1rem', borderRadius: '99px', fontWeight: 600 }}>
            Vetted 1-on-1 Tutoring
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            Any Subject. Any Grade. <span className="accent-text">Matched Fast.</span>
          </h2>
          <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--muted)', fontSize: '1.1rem' }}>
            Whether your student needs to master school coursework, excel in standardized exam prep, or build language fluency, we pair you with verified expert tutors in under 48 hours.
          </p>
        </Reveal>

        {/* Tab Filter */}
        <Reveal delay={60}>
          <div className="tutoring-tabs">
            <button
              onClick={() => setActiveTab('all')}
              className={`tutoring-tab ${activeTab === 'all' ? 'active' : ''}`}
            >
              All Programs
            </button>
            <button
              onClick={() => setActiveTab('school')}
              className={`tutoring-tab ${activeTab === 'school' ? 'active' : ''}`}
            >
              School Curriculum (KG–12)
            </button>
            <button
              onClick={() => setActiveTab('exams')}
              className={`tutoring-tab ${activeTab === 'exams' ? 'active' : ''}`}
            >
              SAT / IELTS / TOEFL Prep
            </button>
            <button
              onClick={() => setActiveTab('languages')}
              className={`tutoring-tab ${activeTab === 'languages' ? 'active' : ''}`}
            >
              Languages & Skills
            </button>
          </div>
        </Reveal>

        {/* Track Cards */}
        <div className="tutoring-grid">
          {filteredTracks.map((track, i) => {
            const IconComp = track.icon;
            return (
              <Reveal key={track.id} delay={i * 80} className="tutoring-card">
                <div className="tutoring-card-header">
                  <div className="tutoring-icon-box" style={{ background: 'var(--surface-sunken)', color: track.tagColor }}>
                    <IconComp size={26} />
                  </div>
                  <span className="tutoring-badge" style={{ borderColor: track.tagColor, color: track.tagColor }}>
                    {track.badge}
                  </span>
                </div>

                <h3 className="tutoring-card-title">{track.title}</h3>
                <p className="tutoring-card-desc">{track.description}</p>

                <div className="tutoring-subjects-list">
                  <span className="tutoring-subjects-label">Included Subjects & Focus:</span>
                  <ul>
                    {track.subjects.map((sub, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="text-orange" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tutoring-card-footer">
                  <a
                    href="https://forms.gle/NL2oB6mHHUscnZo9A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-full"
                  >
                    Request a Tutor <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Feature Highlights Strip */}
        <Reveal delay={120}>
          <div className="tutoring-highlights-strip">
            <div className="highlight-item">
              <div className="highlight-icon">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4>100% Vetted Tutors</h4>
                <p>Top university graduates and subject experts background-checked by Eagle Pathway.</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <Zap size={24} />
              </div>
              <div>
                <h4>Fast 48-Hour Matching</h4>
                <p>We match your student based on learning style, grade level, and schedule preferences.</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <LineChart size={24} />
              </div>
              <div>
                <h4>Weekly Progress Updates</h4>
                <p>Parents receive detailed reports on topics covered, test scores, and homework performance.</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom Banner */}
        <Reveal delay={160}>
          <div className="tutoring-banner">
            <div className="banner-content">
              <h3>Parents: Need a tutor right now?</h3>
              <p style={{ marginBottom: '0.75rem' }}>Call our direct hotline or message our Tutoring Telegram for immediate tutor matching.</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.95rem', fontWeight: 600 }}>
                <span>📞 Call: <a href={`tel:${site.tutoring.phone1}`} style={{ color: '#fbbf24', textDecoration: 'underline' }}>{site.tutoring.phone1Display}</a> / <a href={`tel:${site.tutoring.phone2}`} style={{ color: '#fbbf24', textDecoration: 'underline' }}>{site.tutoring.phone2Display}</a></span>
                <span>📩 Telegram: <a href={site.tutoring.telegram} target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline' }}>{site.tutoring.handle}</a></span>
              </div>
            </div>
            <div className="banner-action">
              <a
                href={`tel:${site.tutoring.phone1}`}
                className="btn btn-light btn-lg"
              >
                📞 Call Direct Hotline
              </a>
              <a
                href={site.tutoring.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-lg text-white"
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff', background: 'rgba(255,255,255,0.1)' }}
              >
                📩 Message Telegram
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
