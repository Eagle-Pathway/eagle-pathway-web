'use client';

import { useState } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';

export default function TopAnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="top-banner">
      <div className="container top-banner-inner">
        <a
          href="https://forms.gle/eUrPE13Gt2GL4D3y9"
          target="_blank"
          rel="noopener noreferrer"
          className="top-banner-link"
        >
          <span className="top-banner-badge">
            <Sparkles size={12} />
            <span>Bootcamp</span>
          </span>

          <span className="top-banner-text-desktop">
            <strong>Scholarship Bootcamp 2026:</strong> Limited seats available for the upcoming admissions cycle.
          </span>

          <span className="top-banner-text-mobile">
            Bootcamp 2026 Open
          </span>

          <span className="top-banner-cta">
            <span>Reserve Slot</span>
            <ArrowRight size={13} />
          </span>
        </a>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setDismissed(true);
          }}
          className="top-banner-close"
          aria-label="Dismiss banner"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
