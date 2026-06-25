import Link from 'next/link';
import { nav, site } from '@/app/content/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <span className="brand-mark" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11l9-7 9 7" />
                  <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" />
                  <path d="M9 21v-6h6v6" />
                </svg>
              </span>
              {site.name}
            </Link>
            <p>
              Scholarship guidance and academic tutoring helping Ethiopian students
              secure admissions and funding at world-class universities.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Product</h4>
            <ul>
              <li><Link href="/services">Tutoring</Link></li>
              <li><Link href="/services">Scholarships</Link></li>
              <li><span style={{ color: 'var(--muted)' }}>Mobile app — coming soon</span></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Made in Addis Ababa 🇪🇹</span>
        </div>
      </div>
    </footer>
  );
}
