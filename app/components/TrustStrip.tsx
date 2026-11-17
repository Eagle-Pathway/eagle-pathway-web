import { CheckCircle2 } from 'lucide-react';
import { trustPoints } from '@/app/content/site';

export default function TrustStrip() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        marginTop: '1.75rem',
      }}
    >
      {trustPoints.map((point) => (
        <div
          key={point.label}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            fontSize: '0.92rem',
            color: '#334155',
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#e0f2fe',
              color: '#0284c7',
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0,
            }}
          >
            <CheckCircle2 size={13} style={{ color: '#0284c7' }} />
          </div>
          <span style={{ fontWeight: 700, color: 'var(--navy)' }}>{point.label}</span>
          <span style={{ color: '#94a3b8' }}>·</span>
          <span style={{ color: '#64748b' }}>{point.detail}</span>
        </div>
      ))}
    </div>
  );
}
