import { placements } from '@/app/content/site';

export default function PlacementLogos() {
  const items = [...placements, ...placements];

  return (
    <div className="logos">
      <p className="logos-label">Students admitted to programs at</p>
      <div className="logos-marquee-wrapper">
        <div className="logos-marquee">
          {items.map((p, idx) => (
            <span key={`p1-${p.short}-${idx}`} className="logo-badge" title={p.name}>
              {p.short}
            </span>
          ))}
        </div>
        <div className="logos-marquee" aria-hidden="true">
          {items.map((p, idx) => (
            <span key={`p2-${p.short}-${idx}`} className="logo-badge" title={p.name}>
              {p.short}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
