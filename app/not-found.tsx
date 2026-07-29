import Link from 'next/link';
import Reveal from './components/Reveal';

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <Reveal>
          <span className="eyebrow" style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'inline-block' }}>404 Error</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Page Not Found</h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-light btn-lg" style={{ background: 'var(--orange)', color: '#fff', border: 'none' }}>
              Return Home
            </Link>
            <Link href="/contact" className="btn btn-lg" style={{ border: '1px solid var(--border)', background: 'transparent' }}>
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
