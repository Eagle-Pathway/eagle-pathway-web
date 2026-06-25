import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import { team, stats, site } from '../content/site';

export const metadata: Metadata = {
  title: 'About | Eagle Pathway',
  description:
    'Eagle Pathway combines Ethiopian education realities with global admissions expertise to help students study abroad.',
};

const values = [
  {
    title: 'Honesty over hype',
    description:
      'We never promise outcomes we cannot control. We focus on the work that genuinely improves your chances.',
  },
  {
    title: 'Local + global',
    description:
      'We understand the Ethiopian classroom and the expectations of admissions offices abroad — and bridge the two.',
  },
  {
    title: 'Accountability',
    description:
      'Every plan has owners, milestones and weekly tracking, so progress is visible and momentum never stalls.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">About us</span>
            <h1>Opening doors to global education</h1>
            <p>
              Eagle Pathway is an Ethiopian education and scholarship consultancy on a mission to
              make world-class universities accessible to every capable student at home.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <span className="eyebrow">Our mission</span>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)' }}>
                Talent is everywhere. Opportunity should be too.
              </h2>
              <p style={{ marginTop: '1rem', fontSize: '1.05rem', color: 'var(--muted)' }}>
                Too many qualified Ethiopian students never apply abroad — not for lack of ability,
                but because the process is opaque and overwhelming. We exist to change that.
              </p>
              <p style={{ marginTop: '1rem', color: 'var(--muted)' }}>
                We combine personal tutoring, scholarship strategy and a purpose-built platform so
                students and their families move forward with clarity and confidence — from the
                first session to a funded offer.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="stats-band" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What we stand for</span>
            <h2>Our values</h2>
          </Reveal>
          <div className="grid-3">
            {values.map((v, i) => (
              <Reveal key={v.title} className="card" delay={i * 70}>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The team</span>
            <h2>Advisors in your corner</h2>
            <p>Educators and admissions specialists who have walked this path before.</p>
          </Reveal>
          <div className="grid-3">
            {team.map((member, i) => (
              <Reveal key={member.name} className="team-card" delay={i * 70}>
                <div className="avatar">{member.initials}</div>
                <h3>{member.name}</h3>
                <div className="role">{member.role}</div>
                <p>{member.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="cta">
            <h2>Let’s build your pathway</h2>
            <p>Book a free consultation with an advisor and take the first concrete step.</p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-light btn-lg">Book a consultation</Link>
              <a href={`mailto:${site.email}`} className="btn btn-light btn-lg">Email us</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
