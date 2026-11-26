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
  AlertTriangle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Operating Policy | Eagle Tutorials Services',
  description:
    'Comprehensive operating guidelines, parent payment structure, tutor commission structure (Eagle-determined: 25% upfront commitment + 20% monthly commission, or a one-time only 50% fee), strict refund & replacement policy, and quality standards for Eagle Tutorials Services.',
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
  'Transparent Commission Models: Plan 1 (25% upfront + 20% monthly) OR Plan 2 (One-time only 50% fee)',
  'Eagle Tutorials Services reserves the right to decide the commission structure (Plan 1 or Plan 2) for each job',
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
    title: 'Tutor Commission & Job Structure',
    tag: 'For Tutors',
    color: 'var(--navy)',
    bg: 'rgba(26, 43, 95, 0.08)',
    points: [
      'Eagle Tutorials Services reserves the right to decide the applicable commission model for each tutoring placement or job:',
      '• **Plan 1 (Split Plan)**: 25% upfront commitment fee (based on agreed monthly tutoring rate) upon placement confirmation, followed by a 20% monthly service commission from monthly earnings.',
      '• **Plan 2 (One-Time 50% Settlement)**: A single one-time only 50% fee (half of the first month’s rate) upon placement confirmation, with 0% ongoing monthly commission thereafter.',
      '• The commission option (Plan 1 or Plan 2) is determined by Eagle on a per-job basis prior to placement confirmation.',
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
      'For tutors on Plan 1, the 20% monthly service commission applies for the duration of the active Eagle-referred tutoring engagement.',
      'For tutors on Plan 2 (one-time 50%), ongoing monthly payouts are disbursed at 100% net earnings with zero monthly deductions.',
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
  { step: '03', title: 'Commission Assignment', desc: 'Eagle determines the commission option for each job (Plan 1: 25% + 20% monthly, or Plan 2: 50% one-time).' },
  { step: '04', title: 'Teach & Receive Earnings', desc: 'Receive prompt monthly payouts: net of 20% for Plan 1, or 100% full net earnings with Plan 2.' },
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
    q: 'Who decides the commission structure for each tutoring job?',
    a: 'Eagle Tutorials Services reserves the sole right to decide the commission structure for each specific job. Depending on the arrangement, Eagle assigns either Plan 1 (25% upfront commitment fee + 20% monthly service commission) or Plan 2 (a single one-time only 50% placement fee with 0% ongoing monthly deductions thereafter).',
  },
  {
    q: 'Can tutors get a refund after receiving parent contact information?',
    a: 'No. There is strictly no refund once the parent’s phone number has been sent to the tutor and communication with the parents has taken place. The referral service is considered fully rendered once contact details are provided and discussions occur.',
  },
  {
    q: 'What happens if a parent wants to change tutors or discontinue?',
    a: 'If a parent requests a new tutor, Eagle Tutorials Services provides a qualified replacement tutor for the family. For tutors, in eligible situations where a parent discontinues through no fault of the tutor, Eagle Pathway provides replacement tutoring opportunities rather than cash refunds.',
  },
  {
    q: 'How quickly can a tutor be matched?',
    a: 'We typically match parents with qualified tutors within 24 to 48 hours depending on subject requirements, schedule, and location (onsite in Addis Ababa or online across Ethiopia and worldwide).',
  },
  {
    q: 'Can tutors work online outside Addis Ababa?',
    a: 'Yes! We support both in-person tutoring across Addis Ababa and live online tutoring for Ethiopian students across Ethiopia and worldwide in any country.',
  },
];

const refundPolicies = [
  {
    num: '1',
    title: 'Strict No-Refund Rule (Contact Established)',
    text: 'No refund will be issued under any circumstances once the parent’s phone number has been sent to the tutor and communication with the parents has taken place.',
    tail: 'The referral and placement service is deemed completed once contact details have been transferred and initial discussion between tutor and parents has commenced.',
  },
  {
    num: '2',
    title: 'Parent Discontinuation & Replacement Support',
    text: 'If a parent discontinues or requests a schedule change after communication has occurred, no cash refund is provided. Instead, Eagle Pathway will support the tutor with:',
    options: [
      'A priority replacement tutoring placement with equivalent monthly earning potential, or',
      'Reassignment to another matching student family at the discretion of Eagle Pathway.',
    ],
    tail: 'Replacement opportunities are offered provided the tutor has maintained full professionalism, punctuality, and compliance with our operating standards.',
  },
  {
    num: '3',
    title: 'Tutor-Initiated Termination',
    text: 'If a tutor voluntarily ends or withdraws from a tutoring engagement before completing the agreed placement period:',
    options: [
      'No refund will be issued.',
      'A replacement placement may only be reviewed in verifiable extenuating circumstances beyond the tutor’s control (such as documented serious health issues), subject to administrative approval.',
    ],
  },
  {
    num: '4',
    title: 'Misconduct, Bypass or Performance Issues',
    text: 'Commission or placement fees will strictly NOT be refunded if a tutor:',
    options: [
      'Attempts to bypass Eagle Tutorials Services or negotiate private payment arrangements directly with parents;',
      'Engages in misconduct, dishonesty, or unprofessional behavior;',
      'Demonstrates repeated lateness or failure to attend scheduled sessions; or',
      'Delivers consistently unsatisfactory or unverified teaching performance.',
    ],
    tail: 'Tutors are required to uphold strict professional ethics, punctuality, and quality teaching standards throughout the placement.',
  },
  {
    num: '5',
    title: 'Replacement Request Window',
    text: 'Any replacement request eligible under this policy must be communicated to Eagle Pathway administration within 14 days of the affected placement event.',
    tail: 'After this 14-day window, placement files are finalized and eligibility for reassignment expires.',
  },
  {
    num: '6',
    title: 'Administrative Discretion',
    text: 'Eagle Pathway reserves the sole right to review all placement communications, verify parent feedback, and make final binding determinations regarding replacement eligibility.',
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
                    <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 600 }}>Eagle-Determined Structure · 25% + 20% Monthly OR One-Time 50%</span>
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

      {/* Refund & Replacement Policy */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Fairness & Transparency</span>
            <h2>Refund & Replacement Policy</h2>
            <p>
              At Eagle Pathway, we aim to ensure a fair and transparent experience for both parents and tutors. Our refund and replacement policy applies to tutoring placements under the following conditions:
            </p>
          </Reveal>

          {/* Prominent No-Refund Notice */}
          <Reveal delay={20}>
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.06)',
                border: '1.5px solid rgba(239, 68, 68, 0.25)',
                borderRadius: '14px',
                padding: '1.25rem 1.5rem',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
              }}
            >
              <AlertTriangle size={22} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#b91c1c', display: 'block', fontSize: '1rem', marginBottom: '0.35rem' }}>
                  Important Rule: No Refund After Contact Is Established
                </strong>
                <p style={{ margin: 0, fontSize: '0.92rem', color: '#7f1d1d', lineHeight: 1.6 }}>
                  <strong>No refund will be issued once the parent’s phone number has been sent to the tutor and communication with the parents has taken place.</strong> Referral services are considered fully delivered upon contact exchange and discussion. In qualified cases where a parent discontinues through no fault of the tutor, Eagle Pathway provides replacement tutoring opportunities.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {refundPolicies.map((policy, idx) => (
              <Reveal key={policy.num} delay={idx * 60}>
                <div
                  className="card"
                  style={{
                    height: '100%',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    background: '#ffffff',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        background: 'rgba(232, 146, 10, 0.12)',
                        color: 'var(--orange)',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {policy.num}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--navy)', margin: 0 }}>
                      {policy.title}
                    </h3>
                  </div>

                  <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.65, margin: 0, marginBottom: policy.options ? '0.75rem' : '0.5rem' }}>
                    {policy.text}
                  </p>

                  {policy.options && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: policy.tail ? '0.75rem' : '0' }}>
                      {policy.options.map((opt, oIdx) => (
                        <li key={oIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--ink)', lineHeight: 1.5 }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--orange)', flexShrink: 0, marginTop: '3px' }} />
                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {policy.tail && (
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                      {policy.tail}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step How It Works for Both */}
      <section className="section section-soft">
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
      <section className="section">
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
      <section className="section section-soft">
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
