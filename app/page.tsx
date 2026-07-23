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
import { stats, features, testimonials } from './content/site';

export default function Home() {
  const topFeatures = features.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-layout">
            <div className="hero-content">
              <Reveal>
                <span className="pill">
                  <span className="pill-dot" /> Trusted by students across Ethiopia
                </span>
              </Reveal>
              <Reveal delay={40}>
                <h1>
                  From the classroom to a <span className="accent-text">global scholarship</span>
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
                  <Link href="/contact" className="btn btn-primary btn-lg">
                    Get Started
                  </Link>
                  <Link href="/services" className="btn btn-ghost btn-lg">
                    Explore services
                  </Link>
                </div>
                <p className="hero-note">Free first consultation · No obligation</p>
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
            <Link href="/contact" className="btn btn-light btn-lg">Get Started</Link>
            <Link href="/how-it-works" className="btn btn-light btn-lg">See how it works</Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
