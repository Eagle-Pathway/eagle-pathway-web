'use client';

import { Send } from 'lucide-react';
import { site } from '@/app/content/site';

interface AnnouncementTickerProps {
  className?: string;
}

export default function AnnouncementTicker({ className = '' }: AnnouncementTickerProps) {
  // Repeating units to guarantee seamless infinite scroll across all screen widths
  const units = Array.from({ length: 6 });

  return (
    <div
      className={`announcement-ticker-wrapper ${className}`}
      aria-label="Announcements and Quick Contact"
    >
      <div className="announcement-ticker-container">
        <div className="announcement-ticker-track">
          {units.map((_, i) => (
            <div key={i} className="announcement-ticker-item">
              <span className="announcement-ticker-msg">
                <strong className="announcement-ticker-strong">🎓 2027 Intake:</strong>{' '}
                <span>We are accepting applicants for March 2027 and September 2027 intake to China, Italy and Germany — Contact us:</span>{' '}
                <a
                  href={`mailto:${site.email}`}
                  className="announcement-ticker-link"
                >
                  ✉️ {site.email}
                </a>
                <span className="announcement-ticker-comma">,</span>
                <a
                  href="https://wa.me/4915215828900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="announcement-ticker-link"
                >
                  💬 +49 152 158 28900 (WhatsApp)
                </a>
              </span>

              <span className="announcement-ticker-separator" aria-hidden="true" />

              <span className="announcement-ticker-msg">
                <strong className="announcement-ticker-strong">Need a tutor fast?</strong>{' '}
                <span>Telegram:</span>{' '}
                <a
                  href={site.tutoring.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="announcement-ticker-link"
                >
                  <Send size={13} className="inline-icon" /> {site.tutoring.handle}
                </a>
              </span>

              <span className="announcement-ticker-separator" aria-hidden="true" />

              <span className="announcement-ticker-msg">
                <strong className="announcement-ticker-strong">Need Scholarship Guidance?</strong>{' '}
                <span>Telegram:</span>{' '}
                <a
                  href={site.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="announcement-ticker-link"
                >
                  <Send size={13} className="inline-icon" /> {site.telegram.handle}
                </a>
              </span>

              <span className="announcement-ticker-separator" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
