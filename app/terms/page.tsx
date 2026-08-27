import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import { site } from '../content/site';
import {
  Phone,
  Send,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  UserCheck,
  FileCheck,
  Award,
  CreditCard,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Operating Policy | Eagle Tutorials Services',
  description:
    'Comprehensive operating guidelines, parent payment structure, tutor commission terms (25% upfront commitment + 20% monthly commission), and quality standards for Eagle Tutorials Services.',
  alternates: {
    canonical: `${site.url}/terms`,
  },
};

const parentHighlights = [
  'Parents pay Eagle Tutorials Services directly each month — no direct money handling with tutors',
  'Tutors are vetted, assigned, managed, and paid directly by Eagle Tutorials Services',
  'Free tutor replacement support whenever a family requests a tutor change',
  'Structured progress tracking and official payment receipts for parents',
];

const tutorHighlights = [
  '25% upfront commitment fee (based on monthly tutoring rate) paid when position is confirmed',
  '20% monthly service commission from monthly income for as long as the active relationship continues',
  'Reliable monthly earnings paid directly to you by Eagle Tutorials Services',
  'Continuous student matching, relationship support, and administrative management',
];

const policyCards = [
  {
    icon: ShieldCheck,
    title: 'Parent Payment & Replacement Guarantee',
    tag: 'For Families',
    color: 'var(--orange)',
    bg: 'rgba(232, 146, 10, 0.08)',
    points: [
      'Parents pay **Eagle Tutorials Services directly** every month. Tutors are paid by Eagle Tutorials Services and do not collect payments from families.',
      'If a family requests a change or if tutoring discontinues after a paid period, Eagle Tutorials Services will provide an expert replacement tutor to ensure learning continuity.',
    ],
  },
  {
    icon: HeartHandshake,
    title: 'Tutor Commitment & Monthly Commission',
    tag: 'For Tutors',
    color: 'var(--navy)',
    bg: 'rgba(26, 43, 95, 0.08)',
    points: [
      'Tutors pay a **25% upfront commitment fee** (based on the agreed monthly tutoring amount) when confirming a position placement.',
      'Thereafter, a **20% monthly service commission** applies from the tutor’s monthly income for as long as the Eagle-referred tutoring relationship remains active.',
    ],
  },
  {
    icon: CreditCard,
    title: 'Managed Payouts & Quality Control',
    tag: 'Payment Flow',
    color: '#0284c7',
    bg: 'rgba(2, 132, 199, 0.08)',
    points: [
      'Eagle Tutorials Services manages all student fee collections and disburses tutor earnings monthly.',
      'Tutors are expected to maintain strict punctuality, professional conduct, and structured lesson delivery.',
    ],
  },
  {
    icon: Clock,
    title: 'Active Referral Relationship',
    tag: 'Ongoing Terms',
    color: '#7c3aed',
    bg: 'rgba(124, 58, 237, 0.08)',
    points: [
      'The 20% monthly service commission remains active for the full duration of any tutoring engagement initiated through Eagle Tutorials Services.',
      'If a tutoring arrangement ends or requires replacement, Eagle Tutorials Services coordinates the transition smoothly.',
    ],
  },
];

const parentProcess = [
  { step: '01', title: 'Request a Tutor', desc: 'Tell us your child’s grade, subjects, and location in Addis Ababa or online.' },
  { step: '02', title: 'Expert Match', desc: 'We match you with a verified, top-rated tutor within 24–48 hours.' },
  { step: '03', title: 'Pay Eagle Tutorials', desc: 'Pay Eagle Tutorials Services directly for your monthly tutoring package.' },
  { step: '04', title: 'Replacement Support', desc: 'Enjoy quality instruction with free tutor replacement if ever requested.' },
];

const tutorProcess = [
  { step: '01', title: 'Apply & Verify', desc: 'Submit academic credentials, teaching experience, and location preferences.' },
  { step: '02', title: 'Interview & Match', desc: 'Complete diagnostic verification and receive matching tutoring opportunities.' },
  { step: '03', title: '25% Upfront Fee', desc: 'Pay the 25% upfront commitment fee upon position confirmation to secure the job.' },
  { step: '04', title: 'Teach & 20% Monthly', desc: 'Receive monthly payouts from Eagle Tutorials net of the 20% service commission.' },
];

const codeOfConduct = [
  { title: 'Punctuality & Reliability', text: 'Tutors must arrive on time for all scheduled sessions and notify parents and Eagle Tutorials at least 6 hours prior to any unavoidable schedule adjustments.' },
  { title: 'Safety & Professional Ethics', text: 'Eagle Tutorials maintains zero tolerance for unsafe behavior, dishonesty, or improper conduct. Student wellbeing is our primary commitment.' },
  { title: 'Structured Lesson Delivery', text: 'Tutors are expected to prepare structured lesson plans, practice materials, and homework support aligned with national curricula or test requirements.' },
  { title: 'Weekly Progress Updates', text: 'Tutors provide structured weekly feedback to parents so families stay informed about student progress and areas for improvement.' },
];

const policyFaqs = [
  {
    q: 'How does monthly tutor payment work?',
    a: 'Parents pay Eagle Tutorials Services directly every month. Tutors are paid by Eagle Tutorials Services. Tutors do not collect payments directly from families.',
  },
  {
    q: 'What is the commission structure for tutors?',
    a: 'Tutors pay a 25% upfront commitment fee (based on the agreed monthly tutoring rate) upon position confirmation, followed by a 20% monthly service commission from monthly income for as long as the Eagle-referred relationship continues.',
  },
  {
    q: 'What happens if a parent wants to change tutors?',
    a: 'If a parent requests a new tutor, Eagle Tutorials Services will provide a qualified replacement tutor to ensure the student’s learning continues smoothly.',
  },
  {
    q: 'How quickly can a tutor be matched?',
    a: 'We typically match parents with qualified tutors within 24 to 48 hours depending on subject requirements, schedule, and location (onsite in Addis Ababa or online across Ethiopia).',
  },
  {
    q: 'Can tutors work online outside Addis Ababa?',
    a: 'Yes! We support both in-person tutoring across Addis Ababa and live online tutoring for students across Ethiopia and internationally.',
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Catchy Hero */}
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Eagle Tutorials Services</span>
            <h1>Simple, Fair & Transparent.</h1>
            <p>
              Everything you need to know about working with us — built on managed payments, professional tutoring, and total peace of mind for families and educators.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Two Pillars: Families & Tutors */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '2rem' }}>
            <Reveal delay={40}>
              <div
                className="card"
                style={{
                  height: '100%',
                  borderTop: '4px solid var(--orange)',
                  background: '#ffffff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'var(--orange-light)',
                      color: 'var(--orange)',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', margin: 0 }}>For Parents & Families</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 600 }}>Direct Payment to Eagle · Full Support</span>
                  </div>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  You pay Eagle Tutorials Services directly — we manage your tutor, guarantee session quality, and handle replacements whenever needed.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {parentHighlights.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--ink)', fontWeight: 500 }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--orange)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div
                className="card"
                style={{
                  height: '100%',
                  borderTop: '4px solid var(--navy)',
                  background: '#ffffff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(26, 43, 95, 0.1)',
                      color: 'var(--navy)',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    <HeartHandshake size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', margin: 0 }}>For Educators & Tutors</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 600 }}>25% Upfront · 20% Monthly Commission</span>
                  </div>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  Connect with motivated families, receive direct monthly payouts from Eagle Tutorials, and grow your professional tutoring career.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {tutorHighlights.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--ink)', fontWeight: 500 }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--navy)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Clear Policy Breakdown Cards */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The Details</span>
            <h2>Operating & Payment Terms</h2>
            <p>Clear rules designed for managed payment safety, tutor commitment, and quality assurance.</p>
          </Reveal>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {policyCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <Reveal key={card.title} delay={idx * 70}>
                  <div className="card" style={{ height: '100%', borderRadius: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <IconComp size={22} style={{ color: card.color, flexShrink: 0 }} />
                        <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{card.title}</h3>
                      </div>
                      <span
                        style={{
                          background: card.bg,
                          color: card.color,
                          padding: '0.25rem 0.75rem',
                          borderRadius: '99px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {card.tag}
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {card.points.map((pt, pIdx) => (
                        <p key={pIdx} style={{ margin: 0, color: 'var(--muted)', fontSize: '0.93rem', lineHeight: 1.65 }}>
                          {pt.replace(/\*\*(.*?)\*\*/g, '$1')}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step-by-Step How It Works for Both */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Step-by-Step Journey</span>
            <h2>How Placement & Payments Work</h2>
            <p>A structured, hassle-free experience for parents and tutors alike.</p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Parents Journey */}
            <div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <UserCheck size={20} className="text-amber-600" /> For Parents
              </h3>
              <div className="grid-4" style={{ gap: '1rem' }}>
                {parentProcess.map((p, i) => (
                  <Reveal key={p.step} delay={i * 60}>
                    <div className="card" style={{ height: '100%', padding: '1.25rem' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--orange)', display: 'block', marginBottom: '0.35rem' }}>
                        STEP {p.step}
                      </span>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{p.title}</h4>
                      <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>{p.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Tutors Journey */}
            <div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileCheck size={20} className="text-amber-600" /> For Tutors
              </h3>
              <div className="grid-4" style={{ gap: '1rem' }}>
                {tutorProcess.map((t, i) => (
                  <Reveal key={t.step} delay={i * 60}>
                    <div className="card" style={{ height: '100%', padding: '1.25rem' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--navy)', display: 'block', marginBottom: '0.35rem' }}>
                        STEP {t.step}
                      </span>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{t.title}</h4>
                      <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>{t.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code of Conduct Section */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Excellence & Ethics</span>
            <h2>Tutor Code of Conduct</h2>
            <p>Our mandatory standards for professional tutoring in Ethiopia.</p>
          </Reveal>

          <div className="grid-2" style={{ gap: '1.25rem' }}>
            {codeOfConduct.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 60}>
                <div className="card" style={{ height: '100%', background: '#ffffff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--navy)' }}>
                    <Award size={18} style={{ color: 'var(--orange)' }} />
                    <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers about payments, tutor management, and commission structure.</p>
          </Reveal>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {policyFaqs.map((faq, idx) => (
              <Reveal key={faq.q} delay={idx * 50}>
                <div className="card" style={{ padding: '1.25rem 1.5rem' }}>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--navy)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <HelpCircle size={18} style={{ color: 'var(--orange)', flexShrink: 0 }} />
                    {faq.q}
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0, paddingLeft: '1.75rem' }}>
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Direct Support Card */}
          <Reveal delay={100}>
            <div
              className="card"
              style={{
                marginTop: '3rem',
                background: 'linear-gradient(135deg, var(--navy) 0%, #0f172a 100%)',
                color: '#ffffff',
                borderRadius: '20px',
                padding: '2.25rem 2rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(232, 146, 10, 0.2)',
                  color: 'var(--orange)',
                  display: 'grid',
                  placeItems: 'center',
                  margin: '0 auto 1rem',
                }}
              >
                <Sparkles size={24} />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Need Personal Assistance or Guidance?</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '580px', margin: '0 auto 1.5rem' }}>
                Our operations team is available to assist families and tutors with matching, feedback, and payment verifications.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                <a
                  href="tel:+251985705712"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Phone size={16} /> Call +251 985 705 712
                </a>
                <a
                  href="https://t.me/EagleTutorialsServices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    background: '#229ED9',
                    color: '#ffffff',
                    border: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Send size={16} /> Telegram: @EagleTutorialsServices
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
