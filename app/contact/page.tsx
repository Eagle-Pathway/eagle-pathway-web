import type { Metadata } from 'next';
import ConsultationForm from '../components/contact-consultation/ConsultationForm';

export const metadata: Metadata = {
  title: 'Consultation Booking | Eagle Pathway',
  description: 'Book your scholarship and university admission consultation with Eagle Pathway.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">8 quick sections · takes about 5 minutes</span>
          <h1>Book Your Scholarship Consultation</h1>
          <p>
            Get personalized guidance for studying abroad, university admissions, and fully funded scholarship opportunities.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <ConsultationForm />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            <h2>Why choose Eagle Pathway?</h2>
          </div>
          <div className="grid-3">
            <div className="svc-global-card">
              <div className="svc-global-icon">🎯</div>
              <h3>Experienced Guidance</h3>
              <p className="desc" style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
                Work with consultants who have successfully navigated the international scholarship system and secured fully funded opportunities.
              </p>
            </div>
            <div className="svc-global-card">
              <div className="svc-global-icon">🧩</div>
              <h3>Personalized Strategy</h3>
              <p className="desc" style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
                No generic advice. We analyze your unique academic profile and build a tailored roadmap to maximize your chances of admission.
              </p>
            </div>
            <div className="svc-global-card">
              <div className="svc-global-icon">🏆</div>
              <h3>Scholarship-Focused Support</h3>
              <p className="desc" style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
                Beyond admissions, we specialize in identifying and competing for merit-based scholarships, financial aid, and fellowships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-head text-center">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq">
            <details className="faq-item">
              <summary>Does submitting this guarantee admission?</summary>
              <p>No. We provide professional guidance, strategy, and application support to maximize your chances, but final admission decisions rest solely with the universities and scholarship committees.</p>
            </details>
            <details className="faq-item">
              <summary>Do you support fully funded scholarships?</summary>
              <p>Yes. We support students targeting international scholarships and university opportunities, helping you craft a highly competitive application package.</p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
