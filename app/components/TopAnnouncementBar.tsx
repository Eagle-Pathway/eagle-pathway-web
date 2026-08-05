'use client';

import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function TopAnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="top-banner">
      <div className="container top-banner-inner">
        <div className="top-banner-content">
          <span className="top-banner-badge">
            <Sparkles size={13} /> Cohort Open
          </span>
          <span className="top-banner-text">
            <strong>Scholarship Bootcamp 2026:</strong> Limited seats available for the upcoming admissions cycle.
          </span>
        </div>
        <div className="top-banner-actions">
          <a
            href="https://forms.gle/eUrPE13Gt2GL4D3y9"
            target="_blank"
            rel="noopener noreferrer"
            className="top-banner-btn"
          >
            Reserve Your Slot →
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="top-banner-close"
            aria-label="Dismiss banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
