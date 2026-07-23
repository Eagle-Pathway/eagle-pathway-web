import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import ServiceCard from '../components/services/ServiceCard';
import DestinationCard from '../components/services/DestinationCard';
import MentorshipCard from '../components/services/MentorshipCard';
import ProcessTimeline from '../components/services/ProcessTimeline';
import FAQ from '../components/services/FAQ';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Eagle Pathway',
  description:
    'From university selection to scholarship applications and visa preparation, Eagle Pathway provides strategic guidance to help Ethiopian and African students achieve their international education goals.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'University & Scholarship Strategy Consultation',
      icon: '🎯',
      description: 'A personalized consultation where we analyze your academic background, goals, and opportunities to create a clear study-abroad strategy.',
      includes: ['Profile evaluation', 'Suitable countries analysis', 'Scholarship direction', 'Application roadmap'],
      bestFor: "Students who don't know where to start.",
      ctaText: 'Book Consultation',
    },
    {
      title: 'University Research & Selection',
      icon: '🏛️',
      description: 'We research universities that match your academic profile, intended field, budget, and scholarship opportunities.',
      includes: ['University shortlist', 'Program matching', 'Admission requirements', 'Scholarship opportunities'],
      bestFor: 'Students struggling to choose universities.',
      ctaText: 'Book Consultation',
    },
    {
      title: 'Application Document Support',
      icon: '📄',
      description: 'Professional support preparing competitive application documents.',
      includes: ['CV improvement', 'Motivation letter', 'Personal statement', 'Recommendation letter guidance'],
      bestFor: 'Students who want stronger applications.',
      ctaText: 'Book Consultation',
    },
    {
      title: 'One-to-One Mentorship',
      icon: '👤',
      description: 'Personal guidance throughout your complete application journey.',
      includes: ['Weekly meetings', 'Application planning', 'Progress tracking', 'Strategy adjustments'],
      bestFor: 'Students who want personal support.',
      ctaText: 'Book Consultation',
    },
    {
      title: 'Full Application Management',
      icon: '⭐',
      description: 'Complete support from university selection until submission.',
      includes: ['University applications', 'Scholarship applications', 'Document preparation', 'Deadline management', 'Final review'],
      bestFor: 'Students who want a done-with-you experience.',
      ctaText: 'Book Consultation',
    },
    {
      title: 'Embassy & Visa Preparation',
      icon: '✈️',
      description: 'Prepare confidently for your student visa process.',
      includes: ['Interview preparation', 'Common questions', 'Document checklist', 'Mock interviews'],
      bestFor: 'Students preparing for departure.',
      ctaText: 'Book Consultation',
    },
    {
      title: 'English Test Preparation',
      icon: '📝',
      description: 'Improve your English test performance with structured preparation.',
      includes: ['IELTS preparation', 'TOEFL preparation', 'Duolingo preparation', 'Practice strategy'],
      ctaText: 'Book Consultation',
    },
    {
      title: 'Recommendation Letter Writing',
      icon: '✍️',
      description: 'Transform your achievements and experiences into strong recommendation letters aligned with university expectations.',
      includes: ['Content strategy', 'Professional structure', 'University-focused writing'],
      ctaText: 'Book Consultation',
    },
    {
      title: 'High School Scholarship Guidance',
      icon: '🎓',
      description: 'Support for students targeting international high school scholarships.',
      includes: ['Profile building', 'Leadership development', 'Essay preparation', 'Interview preparation'],
      ctaText: 'Book Consultation',
    },
  ];

  const destinations = [
    { country: 'Europe', flag: '🇪🇺', description: 'Regional scholarships, government grants, and affordable education pathways across the EU.' },
    { country: 'North America', flag: '🌎', description: 'Graduate programs, assistantships, and university scholarships in the USA and Canada.' },
    { country: 'Asia', flag: '🌏', description: 'Fully funded government and university scholarships in China, South Korea, and Japan.' },
    { country: 'Middle East', flag: '🕌', description: 'Fully funded educational opportunities and research programs in the UAE, Qatar, and Saudi Arabia.' },
    { country: 'Oceania', flag: '🇦🇺', description: 'High-quality research programs and international scholarships in Australia and New Zealand.' },
    { country: 'Global Online', flag: '💻', description: 'Affordable, flexible online degree programs from top universities worldwide.' },
  ];

  const mentorships = [
    {
      type: 'Private' as const,
      description: 'Personalized one-on-one guidance for students who want dedicated support.',
      includes: ['University research', 'Application strategy', 'Document review', 'Scholarship guidance', 'Visa preparation'],
      ctaText: 'Enroll Now',
    },
    {
      type: 'Group' as const,
      description: 'Affordable learning program where students receive guidance together.',
      includes: ['Scholarship training', 'Application workshops', 'University research', 'Q&A sessions'],
      ctaText: 'Join Program',
      isPopular: true,
    },
  ];

  const processSteps = [
    { num: '01', title: 'Profile Assessment', description: 'We understand your academic background and goals.' },
    { num: '02', title: 'Strategy Development', description: 'We identify universities and scholarship opportunities.' },
    { num: '03', title: 'Application Preparation', description: 'We build strong documents and applications.' },
    { num: '04', title: 'Submission & Support', description: 'We guide you until completion.' },
  ];

  const faqs = [
    {
      question: 'Do you guarantee admission or scholarships?',
      answer: 'No. Universities and scholarship organizations make final decisions. We provide professional guidance and maximize your chances.',
    },
    {
      question: 'Who can apply?',
      answer: "Students from Ethiopia and Africa applying for undergraduate, master's, and scholarship opportunities.",
    },
    {
      question: 'Do you help with visa preparation?',
      answer: 'Yes, we provide embassy preparation and interview guidance.',
    },
  ];

  const trustIndicators = [
    'Scholarship Strategy',
    'University Application Support',
    'Personal Mentorship',
    'Visa Preparation',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="svc-hero">
        <div className="container">
          <Reveal className="svc-hero-inner">
            <h1>Your Complete Pathway to Global Education Opportunities</h1>
            <p>From university selection to scholarship applications and visa preparation, Eagle Pathway provides strategic guidance to help Ethiopian and African students achieve their international education goals.</p>
            <div className="svc-hero-ctas">
              <Link href="/contact" className="btn btn-primary btn-lg">Book Consultation</Link>
              <Link href="/apply" className="btn btn-ghost btn-lg">Start Application</Link>
            </div>
            <div className="svc-trust-strip">
              {trustIndicators.map((indicator, i) => (
                <div key={i} className="svc-trust-item">
                  <div className="svc-trust-icon">
                    <Check size={14} />
                  </div>
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Services</span>
            <h2>Choose the support level that matches your journey.</h2>
          </Reveal>
          <div className="svc-grid">
            {services.map((svc, i) => (
              <Reveal key={i} delay={i * 50}>
                <ServiceCard {...svc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <h2>Scholarship Destinations</h2>
            <p>Explore some of the top countries we help students reach.</p>
          </Reveal>
          <div className="dest-grid">
            {destinations.map((dest, i) => (
              <Reveal key={i} delay={i * 60}>
                <DestinationCard {...dest} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="section bg-navy text-white">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow eyebrow-light">Mentorship Programs</span>
            <h2 className="text-white">Accelerate Your Success</h2>
          </Reveal>
          <div className="mentor-grid">
            {mentorships.map((mentor, i) => (
              <Reveal key={i} delay={i * 100}>
                <MentorshipCard {...mentor} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Process</span>
            <h2>How Eagle Pathway Works</h2>
          </Reveal>
          <Reveal>
            <ProcessTimeline steps={processSteps} />
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">FAQ</span>
            <h2>Common Questions</h2>
          </Reveal>
          <Reveal>
            <FAQ questions={faqs} />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta-section">
        <div className="container">
          <Reveal className="cta-box text-center">
            <h2>Ready to Start Your Study Abroad Journey?</h2>
            <p>Get expert guidance and build a stronger path toward international education.</p>
            <div className="hero-ctas justify-center">
              <Link href="/contact" className="btn btn-primary btn-lg">Book Consultation</Link>
              <Link href="/apply" className="btn btn-ghost btn-lg" style={{ background: '#fff' }}>Apply Now</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
