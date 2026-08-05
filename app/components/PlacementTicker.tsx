'use client';

import { Award } from 'lucide-react';
import { placements } from '@/app/content/site';

export default function PlacementTicker() {
  // Duplicate array to ensure seamless infinite scrolling loop
  const list = [...placements, ...placements];

  return (
    <div className="placement-ticker-wrapper">
      <div className="container">
        <div className="ticker-label">
          <Award size={16} /> Target Destinations &amp; Placements
        </div>
      </div>

      <div className="ticker-track-container">
        <div className="ticker-track">
          {list.map((item, index) => (
            <div key={`${item.name}-${index}`} className="ticker-pill">
              <span className="ticker-dot" />
              <span className="ticker-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
