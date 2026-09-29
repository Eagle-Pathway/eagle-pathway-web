import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from './components/Reveal';
import Icon from './components/Icon';
import Section from './components/Section';
import SectionHeader from './components/SectionHeader';
import TelegramCard from './components/TelegramCard';
import PlacementLogos from './components/PlacementLogos';
import HeroVisual from './components/HeroVisual';
import CaseStudyCard from './components/CaseStudyCard';
import TrustStrip from './components/TrustStrip';
import PlacementTicker from './components/PlacementTicker';
import EligibilityEstimator from './components/EligibilityEstimator';
import TutoringShowcase from './components/TutoringShowcase';
import AppButtons, { PlayLogo } from './components/AppButtons';
import { Phone, Send } from 'lucide-react';
import { stats, features, testimonials, site } from './content/site';

export const metadata: Metadata = {
  title: 'Eagle Pathway | Scholarships & Tutoring for Ethiopian Students',
  description:
    'From the classroom to a global scholarship. Expert tutoring, SAT/IELTS prep, and scholarship guidance helping Ethiopian and African students secure admissions and funding at world-class universities.',
  alternates: {
    canonical: site.url,
  },
};

export default function Home() {
  const topFeatures = features.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-layout">
            <div className="hero-content">
              <Reveal>
                <div className="hero-parents-call-box">
                  <div className="parents-call-row-1">
                    <span className="parents-call-label">Need a tutor fast? Call:</span>{' '}
                    <span className="parents-call-numbers">
                      <a href={`tel:${site.tutoring.phone1}`} className="parents-call-num">{site.tutoring.phone1Display}</a>
                      <span className="parents-call-slash"> / </span>
                      <a href={`tel:${site.tutoring.phone2}`} className="parents-call-num">{site.tutoring.phone2Display}</a>
                    </span>
                  </div>
                  <div className="parents-call-row-2">
                    <span className="parents-call-label">Telegram:</span>{' '}
                    <a href={site.tutoring.telegram} target="_blank" rel="noopener noreferrer" className="parents-call-tg-link">
                      {site.tutoring.handle}
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={20}>
                <div className="hero-trust-badge">
                  <div className="trust-dots" aria-hidden="true">
                    <span className="trust-dot dot-purple" />
                    <span className="trust-dot dot-yellow" />
                    <span className="trust-dot dot-green" />
                  </div>
                  <span className="trust-text">
                    Trusted by <strong>Students</strong> Across Ethiopia
                  </span>
                </div>
              </Reveal>
              <Reveal delay={40}>
                <h1 className="hero-main-title">
                  From the classroom <br className="hidden sm:inline" />
                  <span className="inline-block whitespace-nowrap">
                    to a{' '}
                    <span className="highlight-text">
                      global scholarship
                      <svg className="highlight-svg" viewBox="0 0 280 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 14C65 4 175 4 276 12" stroke="url(#hero-stroke-grad)" strokeWidth="6" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="hero-stroke-grad" x1="0" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#e8920a" />
                            <stop offset="0.5" stopColor="#f59e0b" />
                            <stop offset="1" stopColor="#ea580c" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={80}>
                <p className="hero-sub">
                  Expert tutoring and scholarship guidance that helps Ethiopian students win
                  admissions and funding at world-class universities in Canada, the UK, the USA and Europe.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="hero-ctas">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.eaglepathway.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem' }}
                  >
                    <PlayLogo size={22} />
                    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.15 }}>
                      <small style={{ fontSize: '0.68rem', opacity: 0.88, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Get it on</small>
                      <span style={{ fontSize: '1rem', fontWeight: 800 }}>Google Play</span>
                    </span>
                  </a>
                  <Link href="/services" className="btn btn-ghost btn-lg">
                    Explore services
                  </Link>
                </div>
                <p className="hero-note">Official Android App · Free first consultation</p>
              </Reveal>
            </div>

            <Reveal delay={100}>
              <HeroVisual />
            </Reveal>
          </div>

          <Reveal delay={160}>
            <PlacementLogos />
          </Reveal>
        </div>
      </section>

      <PlacementTicker />

      <Section tight>
        <Reveal>
          <div className="stats-band">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
                {'detail' in s && s.detail && <small>{s.detail}</small>}
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section soft>
        <Reveal className="section-head">
          <SectionHeader
            eyebrow="What we do"
            title="Three pillars of your pathway"
            description="Tutoring, strategy and application support — coordinated by one team that tracks your progress every week."
          />
        </Reveal>
        <div className="grid-3">
          {topFeatures.map((f, i) => (
            <Reveal key={f.title} className="card" delay={i * 50}>
              <div className="card-icon">
                <Icon name={f.icon} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="section-cta-link">
            <Link href="/services">See all services →</Link>
          </p>
        </Reveal>
      </Section>

      <Section tight>
        <Reveal>
          <EligibilityEstimator />
        </Reveal>
      </Section>

      <TutoringShowcase />

      <Section>
        <Reveal className="section-head">
          <SectionHeader
            eyebrow="Success stories"
            title="Results students feel"
            description="Real outcomes from structured guidance — not promises."
          />
        </Reveal>
        <div className="testimonials-carousel-wrapper">
          <div className="testimonials-marquee">
            {testimonials.map((t, i) => (
              <CaseStudyCard key={`m1-${i}`} story={t} />
            ))}
          </div>
          <div className="testimonials-marquee" aria-hidden="true">
            {testimonials.map((t, i) => (
              <CaseStudyCard key={`m2-${i}`} story={t} />
            ))}
          </div>
        </div>
        <Reveal delay={100}>
          <p className="section-cta-link">
            <Link href="/results">View all results →</Link>
          </p>
        </Reveal>
      </Section>

      <Section tight>
        <Reveal>
          <div className="card" style={{ background: 'linear-gradient(135deg, rgba(26, 43, 95, 0.04) 0%, rgba(232, 146, 10, 0.04) 100%)', borderRadius: '24px', padding: '2.5rem 2rem', border: '1px solid rgba(26, 43, 95, 0.08)' }}>
            <div className="split" style={{ alignItems: 'center' }}>
              <div>
                <SectionHeader
                  eyebrow="Mobile App"
                  title="Take your learning & application progress anywhere"
                  description="Track scholarship milestones, review tutor feedback, practice exams, and get live updates directly on your phone."
                  align="left"
                />
                <div style={{ marginTop: '1.5rem' }}>
                  <AppButtons variant="dark" />
                </div>
              </div>
              <div style={{ textAlign: 'center', padding: '1.5rem', background: '#ffffff', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--orange)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.35rem' }}>Now Live on Google Play</span>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--navy)', margin: '0 0 0.5rem 0' }}>Get the Eagle Pathway App</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                  Manage 1-on-1 tutoring, scholarship deadlines, and university application progress on the go.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section soft>
        <div className="split">
          <Reveal>
            <SectionHeader
              eyebrow="Community"
              title="20,000+ students follow our Telegram"
              description="Daily scholarship alerts, deadlines and fully-funded opportunities — free for everyone."
              align="left"
            />
            <TrustStrip />
          </Reveal>
          <Reveal delay={80}>
            <TelegramCard />
          </Reveal>
        </div>
      </Section>

      <Section tight>
        <Reveal className="cta">
          <h2>Ready to write your success story?</h2>
          <p>Book a free consultation and get a structured pathway within your first week.</p>
          <div className="hero-ctas">
            <a href="https://forms.gle/eUrPE13Gt2GL4D3y9" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg">Scholarship Bootcamp</a>
            <Link href="/how-it-works" className="btn btn-light btn-lg">See how it works</Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
