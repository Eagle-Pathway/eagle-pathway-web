import type { Metadata } from 'next';
import Reveal from '../components/Reveal';
import Link from 'next/link';
import { site } from '../content/site';

export const metadata: Metadata = {
  title: 'Company Profile & Privacy | Eagle Pathway',
  description:
    'EaglePathway Education Company Profile. Empowering Every Learner. Connecting Every Opportunity.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Company Profile</span>
            <h1>Empowering Every Learner.<br />Connecting Every Opportunity.</h1>
            <p>
              Version 1.0 | 2026<br />
              Learn. Grow. Connect. Succeed Globally.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <Reveal delay={100}>
            <div className="content-block" style={{ marginBottom: '3rem' }}>
              <h2>1. Executive Summary</h2>
              <p>
                EaglePathway Education is an education technology (EdTech) and global mobility company dedicated to transforming how students learn, grow, and access opportunity worldwide. We operate a comprehensive education ecosystem that supports learners from Kindergarten through Grade 12 — and beyond — with high-quality tutoring, digital learning, academic mentoring, AI-powered educational technology, university preparation, scholarship guidance, and international mobility advisory services.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Unlike traditional tutoring centres or standalone education consultancies, EaglePathway integrates three things that are usually offered separately: personalized education, intelligent technology, and global opportunity services — all within one connected platform. A learner who joins us in primary school can remain within the same ecosystem through secondary school, university preparation, scholarship applications, and international placement.
              </p>
              <p style={{ marginTop: '1rem', fontWeight: 600 }}>
                Our mission is simple: to guide every learner from the classroom to global success.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="content-block" style={{ marginBottom: '3rem' }}>
              <h2>2. Who We Are</h2>
              <p>EaglePathway Education was founded on a simple conviction:</p>
              <blockquote style={{ fontSize: '1.25rem', fontStyle: 'italic', margin: '1.5rem 0', paddingLeft: '1.5rem', borderLeft: '4px solid var(--orange)', color: 'var(--navy)' }}>
                Talent is everywhere. Opportunity is not.
              </blockquote>
              <p>
                Every year, thousands of talented students fall short of their potential — not because they lack ability, but because they lack access to quality instruction, mentorship, personalized guidance, and reliable information about global opportunities. EaglePathway exists to close that gap.
              </p>
              <p style={{ marginTop: '1rem' }}>
                By bringing together experienced educators, advanced technology, and international expertise, we are building Africa&apos;s next-generation education ecosystem — one that meets learners where they are and carries them as far as their ambition can reach.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="content-block" style={{ marginBottom: '3rem' }}>
              <h2>3. Vision, Mission & Purpose</h2>
              <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Vision</h3>
              <p>To become Africa&apos;s leading education technology and global opportunity platform, empowering millions of learners to achieve academic excellence and access world-class educational opportunities.</p>
              
              <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Mission</h3>
              <p>To empower learners through innovative education, personalized mentorship, technology-driven learning, and international opportunity services that enable every student to succeed academically and thrive globally.</p>
              
              <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Purpose</h3>
              <p>We exist to ensure that every learner — regardless of background, geography, or income — has access to the guidance, education, and opportunities needed to build a successful future.</p>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="content-block" style={{ marginBottom: '3rem' }}>
              <h2>4. Our Core Values</h2>
              <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1.5rem', display: 'grid', gap: '1rem' }}>
                <li><strong>Excellence:</strong> We hold ourselves to the highest standards in teaching, technology, and service.</li>
                <li><strong>Integrity:</strong> We operate with honesty, transparency, and accountability in every engagement.</li>
                <li><strong>Innovation:</strong> We continuously develop modern, technology-powered educational solutions.</li>
                <li><strong>Student First:</strong> Every decision we make begins with the success and wellbeing of our students.</li>
                <li><strong>Accessibility:</strong> We believe quality education should be within reach of every learner.</li>
                <li><strong>Lifelong Learning:</strong> We support growth that continues long after graduation.</li>
                <li><strong>Global Citizenship:</strong> We prepare students to thrive as responsible citizens of an interconnected world.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="content-block" style={{ marginBottom: '3rem' }}>
              <h2>5. Our Ecosystem: Three Integrated Divisions</h2>
              <p style={{ marginBottom: '1.5rem' }}>EaglePathway is organised around three divisions that work as a single, connected journey.</p>
              
              <h3 style={{ fontSize: '1.25rem', color: 'var(--orange)', marginBottom: '1rem' }}>5.1 EaglePathway Learning — Building Academic Excellence</h3>
              <p style={{ marginBottom: '1rem' }}>This division supports learners at every stage of the academic journey, from first classroom experiences to national examinations.</p>
              
              <div style={{ marginLeft: '1rem', marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Early Childhood Education (KG)</h4>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                  <li>School readiness and foundational skills</li>
                  <li>Early literacy and numeracy development</li>
                  <li>Creativity, play-based learning, and language development</li>
                </ul>

                <h4 style={{ marginBottom: '0.5rem' }}>Primary Education</h4>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                  <li>Mathematics, English, and Science tutoring</li>
                  <li>Homework support and structured study habits</li>
                  <li>Reading fluency and comprehension improvement</li>
                </ul>

                <h4 style={{ marginBottom: '0.5rem' }}>Junior Secondary</h4>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                  <li>Subject-specific tutoring across the curriculum</li>
                  <li>Examination preparation and study-skills coaching</li>
                  <li>Weekend classes and holiday programmes</li>
                </ul>

                <h4 style={{ marginBottom: '0.5rem' }}>Senior Secondary</h4>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                  <li>Intensive national examination preparation</li>
                  <li>Advanced tutoring in core and elective subjects</li>
                  <li>Career guidance and university preparation</li>
                </ul>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: 'var(--orange)', marginBottom: '1rem' }}>5.2 EaglePathway Global — Connecting Students with Global Opportunities</h3>
              <p style={{ marginBottom: '1rem' }}>This division prepares students and professionals to compete for — and succeed in — international opportunities.</p>
              
              <div style={{ marginLeft: '1rem', marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>University Admission Support</h4>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                  <li>University selection and academic planning</li>
                  <li>Personal statements, motivation letters, and CV development</li>
                  <li>Interview preparation and end-to-end application guidance</li>
                </ul>

                <h4 style={{ marginBottom: '0.5rem' }}>Scholarship Readiness</h4>
                <p>We help learners become genuinely competitive applicants through:</p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                  <li>Profile assessment and gap analysis</li>
                  <li>Leadership and extracurricular planning</li>
                  <li>Academic portfolio development</li>
                  <li>Essay coaching and full application review</li>
                </ul>

                <h4 style={{ marginBottom: '0.5rem' }}>Student Mobility</h4>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                  <li>Visa guidance and documentation support</li>
                  <li>Pre-departure and cultural orientation</li>
                  <li>Accommodation and travel preparation</li>
                  <li>Arrival and settling-in support</li>
                </ul>

                <h4 style={{ marginBottom: '0.5rem' }}>Global Travel Advisory</h4>
                <p>Our advisory services extend beyond students to professionals, researchers, business travellers, tourists, and families, covering travel planning, documentation guidance, destination orientation, visa advisory, and international relocation guidance.</p>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: 'var(--orange)', marginBottom: '1rem' }}>5.3 EaglePathway Opportunities — Discovering the Next Opportunity</h3>
              <p>This division leverages technology to connect users with opportunities aligned to their goals. Instead of searching through thousands of listings, users receive personalized recommendations matched to their academic profile, interests, and aspirations, including:</p>
              <ul style={{ paddingLeft: '2.5rem', marginTop: '1rem' }}>
                <li>Scholarships, fellowships, and exchange programmes</li>
                <li>University admissions and summer schools</li>
                <li>Internships, competitions, and conferences</li>
                <li>Research, leadership, and volunteer opportunities</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={350}>
            <div className="content-block" style={{ marginBottom: '3rem' }}>
              <h2>6. Technology at the Core</h2>
              <p style={{ marginBottom: '1rem' }}>Technology is the engine of the EaglePathway ecosystem. Our mobile and web platform brings every service together around a single learner identity.</p>
              <ul style={{ listStyleType: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                <li><strong>Lifelong Student Profile:</strong> Every learner creates one academic profile that evolves with them — from Kindergarten through university and beyond.</li>
                <li><strong>AI Learning Assistant:</strong> Students can ask questions, receive explanations, generate quizzes, practise exams, improve essays, and summarise lessons on demand.</li>
                <li><strong>Opportunity Matching:</strong> An intelligent recommendation engine analyses each profile to surface the scholarships, programmes, and openings that fit best.</li>
                <li><strong>Student Dashboard:</strong> Learners monitor progress, assignments, attendance, assessments, certificates, and achievements in one place.</li>
                <li><strong>Parent Dashboard:</strong> Parents stay informed about attendance, performance, tutor feedback, and academic growth in real time.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="content-block" style={{ marginBottom: '3rem' }}>
              <h2>7. Why EaglePathway?</h2>
              <p style={{ marginBottom: '1rem' }}>Most organisations specialise in a single link of the education chain — a tutoring centre here, an admissions consultancy there, a scholarship database elsewhere. EaglePathway provides the entire journey through one integrated ecosystem:</p>
              <div style={{ background: 'var(--surface-sunken)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold', color: 'var(--navy)', marginBottom: '1rem' }}>
                Kindergarten → Primary School → Secondary School → University Preparation → International Opportunities → Global Success
              </div>
              <p>Because every stage is connected, no learner has to start over, repeat their story, or navigate the next step alone. Their history, strengths, and goals travel with them.</p>
            </div>
          </Reveal>

          <Reveal delay={450}>
            <div className="content-block" style={{ marginBottom: '3rem' }}>
              <h2>8. Our Impact Goals — Horizon 2035</h2>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
                <li><strong>500,000+ learners</strong> — supported across our learning, mobility, and opportunity services.</li>
                <li><strong>Nationwide school partnerships</strong> — established across Ethiopia.</li>
                <li><strong>Regional expansion</strong> — throughout East Africa.</li>
                <li><strong>Africa&apos;s leading AI-powered education platform</strong> — built and continuously improved.</li>
                <li><strong>Thousands of admissions</strong> — secured for students at leading universities worldwide.</li>
                <li><strong>Trusted partnerships</strong> — with schools, parents, governments, and international institutions.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="content-block" style={{ marginBottom: '3rem' }}>
              <h2>9. Who We Serve</h2>
              <p>Our services are designed for a broad community of learners and institutions: students and parents; schools, universities, and teachers; professionals and international travellers; and educational and corporate organisations seeking training or mobility support.</p>
            </div>
          </Reveal>

          <Reveal delay={550}>
            <div className="content-block" style={{ marginBottom: '3rem' }}>
              <h2>10. Strategic Objectives</h2>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
                <li>Improve measurable academic outcomes for every enrolled learner</li>
                <li>Increase access to quality education across income levels and regions</li>
                <li>Promote educational equity and inclusion</li>
                <li>Prepare globally competitive graduates</li>
                <li>Expand educational technology adoption across Africa</li>
                <li>Build lifelong learner communities that persist beyond graduation</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="content-block" style={{ marginBottom: '3rem' }}>
              <h2>11. Social Responsibility</h2>
              <p style={{ marginBottom: '1rem' }}>We believe education should transform lives — including the lives of those who cannot yet afford our services. EaglePathway is committed to:</p>
              <ul style={{ paddingLeft: '1.5rem', display: 'grid', gap: '0.5rem' }}>
                <li>Educational inclusion and community outreach</li>
                <li>Teacher development and digital literacy programmes</li>
                <li>Rural education support</li>
                <li>Merit-based scholarship initiatives</li>
                <li>Educational research and youth leadership development</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={650}>
            <div className="content-block" style={{ marginBottom: '3rem' }}>
              <h2>12. Our Promise</h2>
              <p>At EaglePathway, we do more than teach. We inspire. We mentor. We innovate. We connect. We empower.</p>
              <p style={{ marginTop: '1rem' }}>From a child&apos;s very first classroom experience to graduation from a world-class university — and beyond — we stand beside every learner, helping them unlock their potential and confidently pursue a future without limits.</p>
              <div style={{ textAlign: 'center', marginTop: '2rem', padding: '2rem', borderTop: '2px solid var(--surface-sunken)', borderBottom: '2px solid var(--surface-sunken)' }}>
                <h3 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>EaglePathway Education</h3>
                <p style={{ color: 'var(--orange)', fontWeight: 'bold' }}>Learn. Grow. Connect. Succeed Globally.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={700}>
            <div className="content-block">
              <h2>13. Contact Us</h2>
              <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1.5rem', display: 'grid', gap: '1rem' }}>
                <li><strong>Head Office:</strong> {site.location}</li>
                <li><strong>Phone:</strong> <a href={`tel:${site.phone}`} style={{ color: 'var(--orange)', textDecoration: 'underline' }}>{site.phone}</a></li>
                <li><strong>Email:</strong> <a href={`mailto:${site.email}`} style={{ color: 'var(--orange)', textDecoration: 'underline' }}>{site.email}</a></li>
                <li><strong>Website:</strong> <a href={site.url} style={{ color: 'var(--orange)', textDecoration: 'underline' }}>{site.url}</a></li>
                <li><strong>Social Media:</strong> 
                  <span style={{ display: 'inline-flex', gap: '0.5rem', marginLeft: '0.5rem' }}>
                    <a href={site.socials.tiktok} target="_blank" rel="noreferrer" style={{ color: 'var(--navy)' }}>TikTok</a> | 
                    <a href={site.socials.telegram} target="_blank" rel="noreferrer" style={{ color: 'var(--navy)' }}>Telegram</a> | 
                    <a href={site.socials.youtube} target="_blank" rel="noreferrer" style={{ color: 'var(--navy)' }}>YouTube</a> | 
                    <a href={site.socials.facebook} target="_blank" rel="noreferrer" style={{ color: 'var(--navy)' }}>Facebook</a>
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
