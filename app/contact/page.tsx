import { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
import { site } from '../content/site';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Eagle Pathway',
  description: 'Get in touch with Eagle Pathway for general inquiries and support.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-head" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>Contact Us</h1>
          <p>
            Have a question or need more information? We're here to help you on your global education journey.
          </p>
        </div>
      </section>

      <section className="section bg-soft" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Quick Contact Info */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius)', flex: '1', minWidth: '250px' }}>
                <div style={{ background: 'var(--bg-soft)', padding: '1rem', borderRadius: '50%', color: 'var(--navy)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--navy)' }}>Email</h4>
                  <a href={`mailto:${site.email}`} style={{ color: 'var(--muted)', textDecoration: 'none' }}>{site.email}</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius)', flex: '1', minWidth: '250px' }}>
                <div style={{ background: 'var(--bg-soft)', padding: '1rem', borderRadius: '50%', color: 'var(--navy)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--navy)' }}>Phone</h4>
                  <a href={`tel:${site.phone}`} style={{ color: 'var(--muted)', textDecoration: 'none' }}>{site.phone}</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', padding: '1.5rem', borderRadius: 'var(--radius)', flex: '1', minWidth: '250px' }}>
                <div style={{ background: 'var(--bg-soft)', padding: '1rem', borderRadius: '50%', color: 'var(--navy)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--navy)' }}>Location</h4>
                  <span style={{ color: 'var(--muted)' }}>{site.location}</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
            
          </div>
        </div>
      </section>
    </main>
  );
}
