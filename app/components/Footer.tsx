import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { nav, site } from '@/app/content/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <Image
                src="/logo.png"
                alt={site.name}
                width={200}
                height={64}
                className="brand-logo brand-logo-footer"
              />
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
            </ul>
          </div>

          <div>
            <h4>Product</h4>
            <ul>
              <li><Link href="/services">Tutoring</Link></li>
              <li><Link href="/services">Scholarships</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/results">Results</Link></li>
              <li><a href={site.telegram.url} target="_blank" rel="noopener noreferrer">Telegram community</a></li>
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
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            Made with <Heart size={14} fill="#ef4444" stroke="#ef4444" /> by Eagle Pathway Tech
          </span>
        </div>
      </div>
    </footer>
  );
}
