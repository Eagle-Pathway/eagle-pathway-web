import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import { serviceTracks, pricing, faqs, steps } from '../content/site';

export const metadata: Metadata = {
  title: 'Services | Eagle Pathway',
  description:
    'Tutoring, scholarship strategy, application support and global payment services for Ethiopian students aiming abroad.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Services</span>
            <h1>Two tracks, one outcome</h1>
            <p>
              Whether you need stronger exam scores, a winning application, or both — we build a
              plan around your goals and run it with you, week by week.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tracks */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            {serviceTracks.map((track, i) => (
              <Reveal key={track.title} className="track" delay={i * 70}>
                <h3>{track.title}</h3>
                <p className="sub">{track.subtitle}</p>
                <ul className="check-list">
                  {track.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The process</span>
            <h2>How an engagement runs</h2>
            <p>A structured plan with milestones, owners and weekly tracking — so momentum never stalls.</p>
          </Reveal>
          <div className="steps">
            {steps.map((step, i) => (
              <Reveal key={step.title} className="step" delay={i * 80}>
                <span className="step-num">{i + 1}</span>
                <span className="step-week">{step.week}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Plans</span>
            <h2>Simple, transparent packages</h2>
            <p>Pick a starting point — we’ll tailor the details to your timeline and goals.</p>
          </Reveal>
          <div className="price-grid">
            {pricing.map((plan, i) => (
              <Reveal key={plan.name} className={`price-card ${plan.featured ? 'featured' : ''}`} delay={i * 70}>
                {plan.featured && <span className="price-badge">Most chosen</span>}
                <h3>{plan.name}</h3>
                <p className="desc">{plan.description}</p>
                <ul className="price-features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'} btn-block`}>
                  Get started
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
          </Reveal>
          <div className="faq">
            {faqs.map((item, i) => (
              <Reveal key={item.question} as="div" delay={i * 50}>
                <details className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="cta">
            <h2>Not sure which track you need?</h2>
            <p>Book a free consultation and we’ll recommend the right pathway for your profile.</p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-light btn-lg">Book a consultation</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
