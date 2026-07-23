import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import CaseStudyCard from '../components/CaseStudyCard';
import PlacementLogos from '../components/PlacementLogos';
import { stats, testimonials } from '../content/site';

export const metadata: Metadata = {
  title: 'Results | Eagle Pathway',
  description:
    'Student outcomes, university admissions and scholarship results from Eagle Pathway — 70+ students guided since 2024.',
};

export default function ResultsPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Results</span>
            <h1>Outcomes that speak for themselves</h1>
            <p>
              We measure success by admissions, funding secured and families who finally had
              visibility into the process.
            </p>
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
                {s.detail && <small>{s.detail}</small>}
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <PlacementLogos />
        </Reveal>
      </Section>

      <Section soft>
        <Reveal className="section-head">
          <SectionHeader
            eyebrow="Case studies"
            title="Stories from our students"
            description="Names shortened for privacy. Outcomes verified by our advisory team."
          />
        </Reveal>
        <div className="grid-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <CaseStudyCard story={t} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tight>
        <Reveal className="cta">
          <h2>Want results like these?</h2>
          <p>Book a free consultation and we’ll map a realistic pathway for your profile.</p>
          <div className="hero-ctas">
            <Link href="/apply-with-us" className="btn btn-light btn-lg">Book a consultation</Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
