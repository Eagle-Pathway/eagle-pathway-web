import type { Metadata } from 'next';
import Reveal from '../components/Reveal';
import { stats } from '../content/site';

export const metadata: Metadata = {
  title: 'About | Eagle Pathway',
  description:
    'EaglePathway Education is an EdTech and global mobility company empowering learners from Kindergarten to global success through tutoring, AI technology, and international opportunity services.',
};

const coreValues = [
  {
    icon: '🏆',
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in teaching, technology, and service.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and accountability in every engagement.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We continuously develop modern, technology-powered educational solutions.',
  },
  {
    icon: '🎓',
    title: 'Student First',
    description: 'Every decision we make begins with the success and wellbeing of our students.',
  },
  {
    icon: '🌍',
    title: 'Accessibility',
    description: 'We believe quality education should be within reach of every learner.',
  },
  {
    icon: '📚',
    title: 'Lifelong Learning',
    description: 'We support growth that continues long after graduation.',
  },
  {
    icon: '✈️',
    title: 'Global Citizenship',
    description: 'We prepare students to thrive as responsible citizens of an interconnected world.',
  },
];

const divisions = [
  {
    number: '01',
    title: 'EaglePathway Learning',
    subtitle: 'Building Academic Excellence',
    description:
      'Supporting learners at every stage — from Early Childhood Education through Senior Secondary — with personalized tutoring, structured mentoring, and a powerful digital learning platform.',
    items: [
      'One-to-one, small-group, and live online tutoring',
      'National examination preparation',
      'Digital learning platform with practice questions',
      'Performance analytics and parent reporting',
    ],
  },
  {
    number: '02',
    title: 'EaglePathway Global',
    subtitle: 'Connecting Students with Global Opportunities',
    description:
      'Preparing students to compete for and succeed in international opportunities — from university admissions to visa support and arrival orientation.',
    items: [
      'University selection and application support',
      'Scholarship strategy and essay coaching',
      'Visa guidance and documentation support',
      'Pre-departure orientation and arrival support',
    ],
  },
  {
    number: '03',
    title: 'EaglePathway Opportunities',
    subtitle: 'Discovering the Next Opportunity',
    description:
      'Using intelligent technology to match every learner with scholarships, fellowships, internships, and programmes that fit their exact academic profile and goals.',
    items: [
      'Scholarships, fellowships, and exchange programmes',
      'University admissions and summer schools',
      'Internships, competitions, and conferences',
      'Research, leadership, and volunteer opportunities',
    ],
  },
];

const techFeatures = [
  {
    icon: '👤',
    title: 'Lifelong Student Profile',
    description:
      'Every learner creates one academic profile that evolves with them — from Kindergarten through university and beyond.',
  },
  {
    icon: '🤖',
    title: 'AI Learning Assistant',
    description:
      'Students can ask questions, receive explanations, generate quizzes, practise exams, improve essays, and summarise lessons on demand.',
  },
  {
    icon: '🎯',
    title: 'Opportunity Matching',
    description:
      'An intelligent recommendation engine analyses each profile to surface the scholarships, programmes, and openings that fit best.',
  },
  {
    icon: '📊',
    title: 'Student Dashboard',
    description:
      'Learners monitor progress, assignments, attendance, assessments, certificates, and achievements in one place.',
  },
];

const impactGoals = [
  { value: '500K+', label: 'Learners to support', sub: 'Across all services by 2035' },
  { value: 'Nationwide', label: 'School partnerships', sub: 'Across Ethiopia' },
  { value: 'East Africa', label: 'Regional expansion', sub: 'Scaling across the region' },
  { value: '#1', label: 'AI-powered education platform', sub: 'In Africa' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">About EaglePathway</span>
            <h1>Empowering Every Learner.<br />Connecting Every Opportunity.</h1>
            <p>
              Africa&apos;s next-generation education technology and global mobility company — guiding
              learners from the classroom to global success.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Who We Are */}
      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <span className="eyebrow">Our Mission</span>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)' }}>
                Talent is everywhere.<br />Opportunity should be too.
              </h2>
              <p style={{ marginTop: '1rem', fontSize: '1.05rem', color: 'var(--muted)' }}>
                EaglePathway Education was founded on a simple conviction: every year, thousands of
                talented students fall short of their potential — not because they lack ability, but
                because they lack access to quality instruction, mentorship, and reliable information
                about global opportunities.
              </p>
              <p style={{ marginTop: '1rem', color: 'var(--muted)' }}>
                We integrate three things usually offered separately — personalized education,
                intelligent technology, and global opportunity services — all within one connected
                platform. A learner who joins us in primary school can remain within the same
                ecosystem all the way through to international placement.
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

      {/* Vision, Mission, Purpose */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Why we exist</span>
            <h2>Vision, Mission & Purpose</h2>
          </Reveal>
          <div className="grid-3">
            {[
              {
                label: 'Vision',
                text: "To become Africa's leading education technology and global opportunity platform, empowering millions of learners to achieve academic excellence and access world-class educational opportunities.",
              },
              {
                label: 'Mission',
                text: 'To empower learners through innovative education, personalized mentorship, technology-driven learning, and international opportunity services that enable every student to succeed academically and thrive globally.',
              },
              {
                label: 'Purpose',
                text: 'To ensure that every learner — regardless of background, geography, or income — has access to the guidance, education, and opportunities needed to build a successful future.',
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 70}>
                <div className="card" style={{ borderTop: '3px solid var(--orange)', height: '100%' }}>
                <span className="eyebrow" style={{ marginBottom: '0.75rem', display: 'block' }}>{item.label}</span>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Three Divisions */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Ecosystem</span>
            <h2>Three Integrated Divisions</h2>
            <p>
              EaglePathway is organised around three divisions that work as a single, connected
              journey — from foundational learning to global placement.
            </p>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {divisions.map((div, i) => (
              <Reveal key={div.number} delay={i * 80}>
                <div className="about-division">
                  <div className="about-division-num">{div.number}</div>
                  <div className="about-division-body">
                    <div>
                      <span className="eyebrow">{div.subtitle}</span>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{div.title}</h3>
                      <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>{div.description}</p>
                    </div>
                    <ul className="about-division-list">
                      {div.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Platform</span>
            <h2>Technology at the Core</h2>
            <p>
              Our mobile and web platform brings every service together around a single learner
              identity — from first lesson to final placement.
            </p>
          </Reveal>
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {techFeatures.map((feat, i) => (
              <Reveal key={feat.title} className="card" delay={i * 70}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{feat.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{feat.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{feat.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What we stand for</span>
            <h2>Our Core Values</h2>
          </Reveal>
          <div className="grid-4" style={{ gap: '1.25rem' }}>
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 50}>
                <div className="card" style={{ textAlign: 'center', height: '100%' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Horizon 2035 */}
      <section className="section section-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Horizon 2035</span>
            <h2>Our Impact Goals</h2>
            <p>Building Africa&apos;s most impactful education technology platform, one learner at a time.</p>
          </Reveal>
          <div className="stats-band" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginTop: '2rem' }}>
            {impactGoals.map((g, i) => (
              <Reveal key={g.label} delay={i * 60}>
                <div className="stat" style={{ textAlign: 'center' }}>
                <strong style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{g.value}</strong>
                <span>{g.label}</span>
                <small style={{ display: 'block', color: 'var(--muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{g.sub}</small>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="about-promise">
              <h3>Our Promise</h3>
              <p>
                At EaglePathway, we do more than teach. We inspire. We mentor. We innovate. We
                connect. We empower. From a child&apos;s very first classroom experience to graduation
                from a world-class university — and beyond — we stand beside every learner, helping
                them unlock their potential and confidently pursue a future without limits.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', color: 'var(--navy)', fontWeight: 600 }}>
                {['Learn', 'Grow', 'Connect', 'Succeed Globally'].map((word) => (
                  <span key={word} style={{ background: 'var(--orange-light)', color: 'var(--orange)', padding: '0.35rem 1rem', borderRadius: '99px', fontSize: '0.9rem' }}>
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="cta">
            <h2>Ready to begin your journey?</h2>
            <p>
              Join thousands of learners who trust EaglePathway to guide them from the classroom
              to global success.
            </p>
            <div className="hero-ctas">
              <Link href="/apply" className="btn btn-light btn-lg">Get Started</Link>
              <a href={`mailto:${site.email}`} className="btn btn-light btn-lg">Email us</a>
            </div>
          </Reveal>
        </div>
      </section> */}
    </>
  );
}
