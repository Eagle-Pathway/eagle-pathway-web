import { trustPoints } from '@/app/content/site';

export default function TrustStrip() {
  return (
    <div className="trust-strip">
      {trustPoints.map((point) => (
        <div key={point.label} className="trust-item">
          <strong>{point.label}</strong>
          <span>{point.detail}</span>
        </div>
      ))}
    </div>
  );
}
