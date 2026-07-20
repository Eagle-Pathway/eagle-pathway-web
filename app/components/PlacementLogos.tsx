import { placements } from '@/app/content/site';

export default function PlacementLogos() {
  return (
    <div className="logos">
      <p className="logos-label">Students admitted to programs at</p>
      <div className="logos-row">
        {placements.map((p) => (
          <span key={p.short} className="logo-badge" title={p.name}>
            {p.short}
          </span>
        ))}
      </div>
    </div>
  );
}
