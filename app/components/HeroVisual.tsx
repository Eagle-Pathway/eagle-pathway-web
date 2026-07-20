import Image from 'next/image';
import { stats } from '@/app/content/site';

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual-glow" aria-hidden />
      
      <div className="hero-visual-content">
        <div className="hero-visual-icon">
          <Image src="/icon.png" alt="Eagle Pathway" width={140} height={140} priority />
        </div>
        
        <div className="hero-visual-stats">
          {stats.slice(0, 2).map((s, idx) => (
            <div key={s.label} className={`hero-stat-chip chip-${idx}`}>
              <div className="chip-icon">{idx === 0 ? '🎓' : '🌍'}</div>
              <div className="chip-info">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="hero-visual-caption">
          <span className="caption-dot"></span>
          Learn · Grow · Succeed
        </div>
      </div>
    </div>
  );
}
