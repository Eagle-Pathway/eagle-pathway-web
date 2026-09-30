import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Send,
  CheckCircle2,
  ShieldCheck,
  Zap,
  LineChart,
  BookOpen,
  Award,
  Languages,
  Clock,
  MapPin,
  Star,
  Users,
  Check,
  Sparkles,
  ArrowRight,
  Globe2,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import FAQ from '../components/services/FAQ';
import { site } from '../content/site';

export const metadata: Metadata = {
  title: 'Top Tutoring Services in Ethiopia & Addis Ababa | Private & Home Tutors | Eagle Pathway',
  description:
    'Best private tutoring services in Ethiopia, Addis Ababa, and online worldwide (የአስጠኚ አገልግሎት እና የቤት ቱቶሪያል). Vetted 1-on-1 home & online tutors for KG–Grade 12, National Exams, SAT, and IELTS. Fast 48h tutor matching.',
  keywords: [
    'Tutoring services in ethiopia',
    'Tutoring Addis Ababa',
    'Private tutors Ethiopia',
    'Home tutors Addis Ababa',
    'Online tutoring Ethiopia',
    'Ethiopian diaspora tutoring',
    'Best tutoring agency Addis Ababa',
    'የአስጠኚ አገልግሎት አዲስ አበባ',
    'የቤት አስጠኚዎች',
    'ቱቶሪያል አዲስ አበባ',
    'Astegniwoch Addis Ababa',
    'Ethiopia tutors and tutorial services',
    'SAT tutors Ethiopia',
    'IELTS tutoring Addis Ababa',
    'IGCSE tutors Ethiopia',
    'Cambridge tutors Addis Ababa',
    'Grade 12 national exam tutoring Ethiopia',
    'Eagle Pathway Tutoring',
  ],
  alternates: {
    canonical: `${site.url}/tutoring`,
  },
  openGraph: {
    title: 'Top Tutoring Services in Ethiopia & Addis Ababa | Eagle Pathway',
    description:
      'Expert 1-on-1 private home tutoring in Addis Ababa and online tutoring worldwide for Ethiopian and international students. Background-checked tutors for KG–12, SAT, IELTS, and National Exams.',
    url: `${site.url}/tutoring`,
    type: 'website',
  },
};

export default function TutoringPage() {
  const tutoringFaqs = [
    {
      question: 'Where can I find private or online tutoring in Ethiopia and abroad?',
      answer:
        'You can find verified private and online tutors through Eagle Pathway. We operate across all sub-cities in Addis Ababa (Bole, CMC, Sarbet, Kazanchis, Old Airport, Ayat, etc.) for in-person home tutoring, as well as providing live interactive 1-on-1 online tutoring for Ethiopian students across regional Ethiopia and abroad in any country worldwide (USA, Canada, UK, Europe, Middle East, etc.).',
    },
    {
      question: 'How much do tutoring services cost in Addis Ababa and online?',
      answer:
        'Tutoring rates depend on the student grade level (KG–8, Grade 9–12, or International/SAT/IELTS test prep), the number of sessions per week, and whether sessions are in-person home tutoring or online. Contact our hotline at +251 985 705 712 for a fast, customized quote with zero hidden fees.',
    },
    {
      question: 'How fast can you match a tutor with my child?',
      answer:
        'We typically match students with a verified, background-checked tutor within 24 to 48 hours after assessing your child’s grade level, subject requirements, curriculum (National, Cambridge, American, IB), and learning schedule.',
    },
    {
      question: 'What curriculums and subjects do Eagle Pathway tutors cover?',
      answer:
        'Our vetted tutors cover the Ethiopian National Curriculum (KG–12, Grade 6, 8, and 12 national exams), Cambridge / IGCSE / A-Levels, American Curriculum, International Baccalaureate (IB), plus specialized test preparation including Digital SAT, IELTS Academic/General, TOEFL, and Duolingo.',
    },
    {
      question: 'How are Eagle Pathway tutors vetted and selected?',
      answer:
        'All tutors undergo rigorous screening: academic verification (graduates and top students from premier universities such as AAU, ASTU, and international programs), subject proficiency testing, background checks, and pedagogy training to ensure patient, motivating, and safe learning environments.',
    },
    {
      question: 'Do parents receive regular progress updates?',
      answer:
        'Yes. Parents receive weekly progress reports detailing covered curriculum chapters, homework completion, mock test scores, and areas of improvement, ensuring complete transparency and peace of mind.',
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      name: `${site.name} Tutoring Services`,
      alternateName: [
        'Eagle Pathway Tutorial Services',
        'የአስጠኚ አገልግሎት አዲስ አበባ',
        'የቤት አስጠኚዎች Eagle Pathway',
      ],
      description:
        'Premier private and home tutoring agency in Addis Ababa, Ethiopia and online worldwide. Vetted 1-on-1 tutors for KG-12, SAT, IELTS, and national exams.',
      url: `${site.url}/tutoring`,
      telephone: site.tutoring.phone1,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'City Square Mall, 7th Floor, Office No. 702',
        addressLocality: 'Addis Ababa',
        addressRegion: 'Addis Ababa',
        addressCountry: 'ET',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 9.0108,
        longitude: 38.7613,
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Addis Ababa',
        },
        {
          '@type': 'Country',
          name: 'Ethiopia',
        },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '08:00',
          closes: '20:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '180',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: tutoringFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  const programs = [
    {
      title: 'KG & Primary School Tutoring',
      badge: 'KG – Grade 8',
      icon: BookOpen,
      desc: 'Foundational reading, writing, arithmetic, and homework support designed to build rock-solid confidence early on.',
      points: [
        'Math, English, Science & Amharic foundation',
        'Homework guidance & daily study habit formation',
        'Patient, engaging, and caring certified tutors',
        'Grade 6 & Grade 8 Ministry Exam preparation',
      ],
      popular: false,
    },
    {
      title: 'High School & National Exams (9–12)',
      badge: 'Grade 9 – 12',
      icon: Award,
      desc: 'Intensive subject mastery in STEM and Social Sciences to score top results in school and Grade 12 National Exams.',
      points: [
        'Advanced Mathematics & Calculus',
        'Physics, Chemistry & Biology problem solving',
        'Grade 12 Ethiopian University Entrance Exam prep',
        'Regular chapter quizzes & past-exam analytics',
      ],
      popular: true,
    },
    {
      title: 'International Curricula (Cambridge & IB)',
      badge: 'IGCSE / AS / A-Levels / AP',
      icon: Sparkles,
      desc: 'Specialized tutors trained in international standards for students in private & international schools in Ethiopia and abroad.',
      points: [
        'Cambridge IGCSE & A-Levels mastery',
        'American Curriculum & AP Courses',
        'International Baccalaureate (IB) support',
        'Past paper drills with official marking schemes',
      ],
      popular: false,
    },
    {
      title: 'SAT, IELTS & English Test Prep',
      badge: 'High-Stakes Exams',
      icon: Languages,
      desc: 'Strategic preparation with diagnostics, proven tactics, and mock tests to achieve scholarship-winning benchmark scores.',
      points: [
        'Digital SAT (Math + Reading & Writing)',
        'IELTS Academic & General (Target Band 7.5+)',
        'TOEFL iBT & Duolingo English Test',
        'One-on-one timing drills and essay critiques',
      ],
      popular: false,
    },
  ];

  const neighborhoods = [
    'Bole & Rwanda',
    'Sarbet & Old Airport',
    'CMC & Ayat',
    'Kazanchis & Bambis',
    'Megenagna & Gerji',
    'Summit & Signal',
    'Piazza & Arat Kilo',
    'Lebu & Jomo',
    'Online Worldwide (USA, Canada, Europe, Middle East & Africa)',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="tutoring-hero" style={{ padding: '4rem 0 3.5rem', background: 'linear-gradient(180deg, rgba(26, 43, 95, 0.03) 0%, var(--bg) 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <Reveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(232, 146, 10, 0.12)', border: '1px solid rgba(232, 146, 10, 0.3)', padding: '0.4rem 1.1rem', borderRadius: '999px', marginBottom: '1.25rem' }}>
                <Star size={16} className="text-orange" fill="currentColor" />
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--orange)' }}>
                  #1 Vetted Private Tutoring Agency in Addis Ababa & Online Worldwide · የአስጠኚ አገልግሎት
                </span>
              </div>
            </Reveal>

            <Reveal delay={30}>
              <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.15, fontWeight: 800, color: 'var(--navy)', marginBottom: '1.2rem' }}>
                Exceptional 1-on-1 Tutoring Services in Ethiopia & Worldwide
              </h1>
            </Reveal>

            <Reveal delay={60}>
              <p style={{ fontSize: '1.15rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Get matched with vetted, high-performing home tutors in Addis Ababa and online tutors worldwide. From KG–12 school subjects and Ethiopian National Exams to Cambridge IGCSE and SAT/IELTS prep — guaranteed tutor matching in under 48 hours.
              </p>
            </Reveal>

            {/* Direct Hotline Box */}
            <Reveal delay={90}>
              <div style={{ background: '#ffffff', border: '2px solid rgba(26, 43, 95, 0.1)', borderRadius: '20px', padding: '1.5rem', boxShadow: '0 12px 30px rgba(0,0,0,0.06)', display: 'inline-block', width: '100%', maxWidth: '720px', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--navy)', fontWeight: 700, fontSize: '1.05rem' }}>
                    <Phone size={20} className="text-orange" />
                    <span>Parents Hotline for Fast Matching:</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.85rem', width: '100%' }}>
                    <a
                      href={`tel:${site.tutoring.phone1}`}
                      className="btn btn-primary btn-lg"
                      style={{ flex: '1 1 240px', justifyContent: 'center', fontSize: '1.02rem', fontWeight: 700 }}
                    >
                      <Phone size={18} /> Call {site.tutoring.phone1Display}
                    </a>
                    <a
                      href={`tel:${site.tutoring.phone2}`}
                      className="btn btn-ghost btn-lg"
                      style={{ flex: '1 1 240px', justifyContent: 'center', fontSize: '1.02rem', fontWeight: 700, borderColor: 'var(--navy)', color: 'var(--navy)' }}
                    >
                      <Phone size={18} /> Call {site.tutoring.phone2Display}
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--muted)' }}>
                    <Send size={15} style={{ color: '#0088cc' }} />
                    <span>Or direct Telegram chat: <a href={site.tutoring.telegram} target="_blank" rel="noopener noreferrer" style={{ color: '#0088cc', fontWeight: 700, textDecoration: 'underline' }}>{site.tutoring.handle}</a></span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Trust Badges */}
            <Reveal delay={120}>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.95rem', color: 'var(--body)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <ShieldCheck size={18} style={{ color: '#16a34a' }} />
                  <strong>100% Background Checked</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Zap size={18} style={{ color: '#f59e0b' }} />
                  <strong>Fast 48-Hour Matching</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <LineChart size={18} style={{ color: '#2563eb' }} />
                  <strong>Weekly Progress Reports</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Globe2 size={18} style={{ color: '#ea580c' }} />
                  <strong>Addis Ababa & Online Worldwide</strong>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Amharic Local Feature Card */}
      <section style={{ padding: '1.5rem 0 3rem' }}>
        <div className="container">
          <Reveal>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(26, 43, 95, 0.03) 0%, rgba(232, 146, 10, 0.04) 50%, #ffffff 100%)',
                borderRadius: '24px',
                padding: '2.5rem 2.25rem',
                border: '1.5px solid rgba(26, 43, 95, 0.08)',
                boxShadow: '0 12px 35px -8px rgba(26, 43, 95, 0.07)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle ambient accent glow */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-10%',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(232, 146, 10, 0.08) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.75rem',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Top Content Row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '2rem',
                  }}
                >
                  <div style={{ flex: '1 1 500px', maxWidth: '750px' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        background: 'rgba(234, 88, 12, 0.1)',
                        border: '1px solid rgba(234, 88, 12, 0.25)',
                        padding: '0.35rem 0.95rem',
                        borderRadius: '999px',
                        marginBottom: '1rem',
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        color: 'var(--orange)',
                      }}
                    >
                      <Sparkles size={15} />
                      <span>ፈጣን አስጠኚ ማገናኛ · አዲስ አበባ እና ኦንላይን በዓለም ዙሪያ</span>
                    </div>

                    <h2
                      style={{
                        color: 'var(--navy)',
                        fontSize: 'clamp(1.5rem, 3.2vw, 2.15rem)',
                        fontWeight: 800,
                        lineHeight: 1.25,
                        marginBottom: '0.85rem',
                      }}
                    >
                      የታመኑ እና ብቁ የቤት አስጠኚዎች ይፈልጋሉ?
                    </h2>

                    <p
                      style={{
                        color: 'var(--body)',
                        fontSize: '1.02rem',
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      ከኬጂ እስከ 12ኛ ክፍል፣ ብሔራዊ ፈተናዎች፣ ካምብሪጅ (IGCSE/A-Levels) እና SAT/IELTS በአዲስ አበባ ባሉበት ቦታ ድረስ እንዲሁም በየትኛውም የዓለም ክፍል በኦንላይን ብቁ አስጠኚዎችን በ48 ሰዓት ውስጥ እናቀርባለን።
                    </p>
                  </div>

                  {/* Action Buttons Box */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem',
                      minWidth: '270px',
                      flex: '1 1 270px',
                    }}
                  >
                    <a
                      href={`tel:${site.tutoring.phone1}`}
                      className="btn btn-primary btn-lg"
                      style={{
                        justifyContent: 'center',
                        fontSize: '1rem',
                        fontWeight: 700,
                        boxShadow: '0 8px 20px -4px rgba(234, 88, 12, 0.4)',
                        width: '100%',
                        padding: '0.95rem 1.4rem',
                      }}
                    >
                      <Phone size={18} /> ደውለው ያስመዝግቡ
                    </a>
                    <a
                      href={site.tutoring.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-lg"
                      style={{
                        justifyContent: 'center',
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        borderColor: 'rgba(2, 132, 199, 0.3)',
                        color: '#0284c7',
                        background: 'rgba(2, 132, 199, 0.06)',
                        width: '100%',
                        padding: '0.95rem 1.4rem',
                      }}
                    >
                      <Send size={18} /> በቴሌግራም ያናግሩን
                    </a>
                  </div>
                </div>

                {/* Bottom Trust Chips */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--line)',
                    fontSize: '0.88rem',
                    color: 'var(--navy)',
                    fontWeight: 600,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      background: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '999px',
                      color: '#15803d',
                    }}
                  >
                    <CheckCircle2 size={15} />
                    <span>በአዲስ አበባ የቤት አስጠኚዎች (In-Person)</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      background: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '999px',
                      color: '#15803d',
                    }}
                  >
                    <CheckCircle2 size={15} />
                    <span>ኦንላይን በዓለም ዙሪያ (Online Worldwide)</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      background: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '999px',
                      color: '#15803d',
                    }}
                  >
                    <CheckCircle2 size={15} />
                    <span>በ48 ሰዓት ውስጥ ፈጣን ምደባ (48h Match)</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section bg-soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Our Tutoring Programs</span>
            <h2>Tailored Instruction for Every Academic Level</h2>
            <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--muted)' }}>
              From strengthening foundational concepts to dominating competitive entrance exams in Ethiopia and abroad.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginTop: '2.5rem' }}>
            {programs.map((p, idx) => {
              const IconComponent = p.icon;
              return (
                <Reveal key={idx} delay={idx * 60}>
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '20px',
                      padding: '2rem',
                      border: p.popular ? '2px solid var(--orange)' : '1px solid var(--line)',
                      boxShadow: p.popular ? '0 12px 30px rgba(232, 146, 10, 0.12)' : 'var(--shadow-sm)',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      position: 'relative',
                    }}
                  >
                    {p.popular && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '-12px',
                          right: '20px',
                          background: 'var(--orange)',
                          color: '#fff',
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          padding: '0.2rem 0.75rem',
                          borderRadius: '999px',
                          textTransform: 'uppercase',
                        }}
                      >
                        Most Popular
                      </span>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '12px',
                          background: 'rgba(26, 43, 95, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--navy)',
                        }}
                      >
                        <IconComponent size={26} />
                      </div>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          padding: '0.3rem 0.75rem',
                          borderRadius: '999px',
                          background: 'var(--bg-soft)',
                          color: 'var(--navy)',
                          border: '1px solid var(--line)',
                        }}
                      >
                        {p.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '0.6rem' }}>{p.title}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.55, marginBottom: '1.5rem' }}>{p.desc}</p>

                    <div style={{ marginTop: 'auto', marginBottom: '1.5rem' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {p.points.map((pt, pidx) => (
                          <li key={pidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: 'var(--body)' }}>
                            <CheckCircle2 size={16} className="text-orange" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#"
                      className={`btn ${p.popular ? 'btn-primary' : 'btn-ghost'} btn-full`}
                      style={{ justifyContent: 'center' }}
                    >
                      Book This Program <ArrowRight size={15} style={{ marginLeft: '6px' }} />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Eagle Pathway Tutoring Works */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Seamless Process</span>
            <h2>How It Works for Parents & Students</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--muted)' }}>
              Getting your child the right academic support is quick, transparent, and hassle-free.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {[
              {
                step: '01',
                title: 'Request & Assessment',
                desc: 'Call us or submit your child’s grade, subject needs, and home/online preference.',
              },
              {
                step: '02',
                title: '48-Hour Tutor Match',
                desc: 'We match your student with a background-checked subject specialist tailored to their learning style.',
              },
              {
                step: '03',
                title: 'Structured Sessions',
                desc: 'In-person home sessions in Addis Ababa or interactive online classes worldwide with diagnostic reviews.',
              },
              {
                step: '04',
                title: 'Weekly Parent Updates',
                desc: 'Track grades, homework completion, exam milestones, and noticeable academic growth.',
              },
            ].map((s, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div style={{ background: '#ffffff', borderRadius: '18px', padding: '1.75rem', border: '1px solid var(--line)', height: '100%' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--orange)', opacity: 0.8, display: 'block', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
                    {s.step}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations in Addis Ababa & Worldwide */}
      <section className="section bg-soft">
        <div className="container">
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '3rem 2rem', border: '1px solid var(--line)', textAlign: 'center' }}>
            <Reveal>
              <span className="eyebrow" style={{ background: 'rgba(26, 43, 95, 0.08)', color: 'var(--navy)' }}>
                Coverage Across Addis Ababa & Online Worldwide
              </span>
              <h2 style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                Home Tutoring in Addis Ababa & 1-on-1 Online Anywhere
              </h2>
              <p style={{ maxWidth: '680px', margin: '0 auto 2rem', color: 'var(--muted)' }}>
                Our tutors travel directly to your home across all major districts in Addis Ababa, or connect via live interactive 1-on-1 virtual classrooms for students across Ethiopia and abroad in any country worldwide.
              </p>
            </Reveal>

            <Reveal delay={60}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', maxWidth: '850px', margin: '0 auto' }}>
                {neighborhoods.map((n, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'var(--bg-soft)',
                      border: '1px solid var(--line)',
                      padding: '0.5rem 1.1rem',
                      borderRadius: '999px',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: 'var(--navy)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <MapPin size={14} className="text-orange" /> {n}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section addressing Search Queries */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2>Everything You Need to Know About Our Tutoring</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--muted)' }}>
              Answers to the most common questions from parents and students in Ethiopia and abroad.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <FAQ questions={tutoringFaqs} />
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section cta-section">
        <div className="container">
          <Reveal className="cta-box text-center">
            <h2>Ready to Pair Your Child with a Top Tutor?</h2>
            <p>
              Call our Addis Ababa hotline or register online to start your first session within 48 hours.
            </p>
            <div className="hero-ctas justify-center" style={{ marginTop: '1.5rem' }}>
              <a
                href={`tel:${site.tutoring.phone1}`}
                className="btn btn-primary btn-lg"
              >
                📞 Call {site.tutoring.phone1Display}
              </a>
              <a
                href="#"
                className="btn btn-ghost btn-lg"
                style={{ background: '#fff' }}
              >
                Request a Tutor Online
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
