'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

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
            Scholarship Bootcamp 2026
          </span>
          <span className="top-banner-cta">
            Reserve Slot <ArrowRight size={13} />
          </span>
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="top-banner-close"
          aria-label="Dismiss banner"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
