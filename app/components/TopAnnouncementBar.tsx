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
          href="https://forms.gle/Fpcrq4bimki647M16"
          target="_blank"
          rel="noopener noreferrer"
          className="top-banner-link"
        >
          <span className="top-banner-badge">
            <Sparkles size={13} className="top-banner-badge-icon" />
            <span>2027 Intake</span>
          </span>
          <span className="top-banner-text-desktop">
            <strong className="top-banner-highlight">Book Package to 2027 Intake:</strong> Accepting applications for March & September 2027 in <span className="top-banner-destinations">China, Italy & Germany</span>.
          </span>
          <span className="top-banner-text-mobile">
            <strong>2027 Intake:</strong> China, Italy & Germany
          </span>
          <span className="top-banner-cta">
            <span>Book Package</span>
            <ArrowRight size={14} className="top-banner-arrow" />
          </span>
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="top-banner-close"
          aria-label="Dismiss banner"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
