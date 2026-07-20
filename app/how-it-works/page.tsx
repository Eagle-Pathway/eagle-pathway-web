import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import AppButtons from '../components/AppButtons';
import { steps, features, faqs } from '../content/site';

export const metadata: Metadata = {
  title: 'How It Works | Eagle Pathway',
  description:
    'A structured 4-step process — discovery, planning, execution and submission — with weekly tracking at every stage.',
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">How it works</span>
            <h1>A clear path, from week one</h1>
            <p>
              No guesswork. Every engagement follows a structured plan with milestones,
              owners and weekly tracking.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="steps">
          {steps.map((step, i) => (
            <Reveal key={step.title} className="step" delay={i * 60}>
              <span className="step-num">{i + 1}</span>
              <span className="step-week">{step.week}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section soft>
        <div className="split">
          <Reveal>
            <SectionHeader
              eyebrow="The platform"
              title="An app that keeps you moving every day"
              description="Your roadmap, tasks, sessions and advisor messages in one place. Students and parents always know the current stage and what comes next."
              align="left"
            />
            <ul className="check-list">
              <li>Shared roadmap with milestones and owners</li>
              <li>Weekly progress updates for students and families</li>
              <li>Built-in study guide for instant help</li>
              <li>Message your advisor and join sessions anywhere</li>
            </ul>
            <div className="split-actions">
              <AppButtons variant="dark" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="visual-card">
              <div className="visual-row">
                <span className="dot"><Icon name="strategy" size={18} /></span>
                <div>
                  <b>Application roadmap</b>
                  <small>Week 4 of 8 · On track</small>
                </div>
                <span className="tag tag-success">Active</span>
              </div>
              <div className="visual-row">
                <span className="dot"><Icon name="documents" size={18} /></span>
                <div>
                  <b>SOP draft reviewed</b>
                  <small>Advisor feedback ready</small>
                </div>
                <span className="tag tag-success">Done</span>
              </div>
              <div className="visual-row">
                <span className="dot"><Icon name="tutoring" size={18} /></span>
                <div>
                  <b>IELTS session</b>
                  <small>Thursday · 5:00 PM</small>
                </div>
                <span className="tag tag-pending">Soon</span>
              </div>
              <div className="visual-row">
                <span className="dot"><Icon name="ai" size={18} /></span>
                <div>
                  <b>Study guide</b>
                  <small>“Help me outline my essay”</small>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal className="section-head">
          <SectionHeader
            eyebrow="Support"
            title="Everything coordinated in one place"
            description="Six capabilities working together — not six disconnected vendors."
          />
        </Reveal>
        <div className="grid-3">
          {features.map((f, i) => (
            <Reveal key={f.title} className="card" delay={i * 40}>
              <div className="card-icon">
                <Icon name={f.icon} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section soft>
        <Reveal className="section-head">
          <SectionHeader eyebrow="FAQ" title="Common questions" />
        </Reveal>
        <div className="faq">
          {faqs.map((item, i) => (
            <Reveal key={item.question} as="div" delay={i * 40}>
              <details className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tight>
        <Reveal className="cta">
          <h2>Ready to start?</h2>
          <p>Book a free consultation and get your roadmap within the first week.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-light btn-lg">Book a consultation</Link>
            <Link href="/services" className="btn btn-light btn-lg">View services</Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
