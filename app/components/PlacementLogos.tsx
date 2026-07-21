import { placements } from '@/app/content/site';

export default function PlacementLogos() {
  return (
    <div className="logos">
      <p className="logos-label">Students admitted to programs at</p>
      <div className="logos-marquee-wrapper">
        <div className="logos-marquee">
          {placements.map((p) => (
            <span key={`p1-${p.short}`} className="logo-badge" title={p.name}>
              {p.short}
            </span>
          ))}
        </div>
        <div className="logos-marquee" aria-hidden="true">
          {placements.map((p) => (
            <span key={`p2-${p.short}`} className="logo-badge" title={p.name}>
              {p.short}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
