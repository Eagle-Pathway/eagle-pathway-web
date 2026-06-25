import Link from 'next/link';
import Reveal from './components/Reveal';
import Icon from './components/Icon';
import AppButtons from './components/AppButtons';
import {
  stats,
  placements,
  features,
  steps,
  audiences,
  pricing,
  testimonials,
} from './content/site';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <Reveal>
            <span className="pill">
              <span className="pill-dot" /> Trusted by students across Ethiopia
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h1>
              From the classroom to a <span className="grad-text">global scholarship</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="hero-sub">
              Expert tutoring and scholarship guidance that helps Ethiopian students win
              admissions and funding at world-class universities in Canada, the UK, the USA and Europe.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start your journey
              </Link>
              <Link href="/services" className="btn btn-ghost btn-lg">
                Explore services
              </Link>
            </div>
          </Reveal>
          
          <Reveal delay={220}>
            <div style={{ marginTop: '1.5rem' }}>
              <AppButtons variant="dark" center />
            </div>
          </Reveal>

          <Reveal delay={260}>
            <p className="hero-note">Free first consultation · No obligation</p>
          </Reveal>

          <Reveal delay={300}>
            <div className="logos">
              <p className="logos-label">Students placed at</p>
              <div className="logos-row">
                {placements.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="stats-band">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Everything you need, in one pathway</h2>
            <p>Tutoring, strategy and application support — coordinated by one team that tracks your progress every week.</p>
          </Reveal>
          <div className="grid-3">
            {features.map((f, i) => (
              <Reveal key={f.title} className="card" delay={i * 60}>
                <div className="card-icon">
                  <Icon name={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Split: platform */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <span className="eyebrow">The app</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
                An app that keeps you moving every day
              </h2>
              <p style={{ marginTop: '1rem', fontSize: '1.05rem', color: 'var(--muted)' }}>
                Your roadmap, tasks, sessions and advisor messages in one place, right on your
                phone. Students and parents always know the current stage and what comes next.
              </p>
              <ul className="check-list">
                <li>Shared roadmap with milestones and owners</li>
                <li>Weekly progress updates for students and families</li>
                <li>Built-in AI study guide for instant help</li>
                <li>Message your advisor and join sessions anywhere</li>
              </ul>
              <div style={{ marginTop: '2rem' }}>
                <AppButtons variant="dark" />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="visual-card">
                <div className="visual-row">
                  <span className="dot"><Icon name="strategy" size={18} /></span>
                  <div>
                    <b>Application roadmap</b>
                    <small>Week 4 of 8 · On track</small>
                  </div>
                  <span className="tag">Active</span>
                </div>
                <div className="visual-row">
                  <span className="dot"><Icon name="documents" size={18} /></span>
                  <div>
                    <b>SOP draft reviewed</b>
                    <small>Advisor feedback ready</small>
                  </div>
                  <span className="tag">Done</span>
                </div>
                <div className="visual-row">
                  <span className="dot"><Icon name="tutoring" size={18} /></span>
                  <div>
                    <b>IELTS session</b>
                    <small>Thursday · 5:00 PM</small>
                  </div>
                  <span className="tag" style={{ background: '#e0e7ff', color: '#4338ca' }}>Soon</span>
                </div>
                <div className="visual-row">
                  <span className="dot"><Icon name="ai" size={18} /></span>
                  <div>
                    <b>Eagle AI Guide</b>
                    <small>“Help me outline my essay”</small>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>A clear path, from week one</h2>
            <p>No guesswork. Every engagement follows a structured plan with milestones and weekly tracking.</p>
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

      {/* Audiences */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Who we help</span>
            <h2>Built around your goals</h2>
          </Reveal>
          <div className="grid-3">
            {audiences.map((a, i) => (
              <Reveal key={a.title} className="audience-card" delay={i * 70}>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Success stories</span>
            <h2>Results students feel</h2>
          </Reveal>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} className="quote" delay={i * 70}>
                <span className="stars">★★★★★</span>
                <p>“{t.quote}”</p>
                <div className="who">
                  <b>{t.name}</b>
                  <small>{t.detail}</small>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Plans</span>
            <h2>Choose the support that fits</h2>
            <p>Transparent packages with no surprises. Talk to us to find your fit.</p>
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

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="cta">
            <h2>Ready to write your success story?</h2>
            <p>Book a free consultation and get a structured pathway within your first week.</p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-light btn-lg">Start your journey</Link>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
              <AppButtons variant="light" center />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
