import { stats } from '@/app/content/site';
import { CheckCircle2, MessageCircle, ChevronRight } from 'lucide-react';

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual-glow" aria-hidden />
      
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
      
      <div className="app-mockup">
        <div className="app-mockup-notch" />
        
        <div className="app-mockup-header">
          <div>
            <h4>Welcome back,</h4>
            <h3>Amanuel T.</h3>
          </div>
          <div className="app-mockup-avatar">AT</div>
        </div>

        <div className="app-mockup-body">
          <div className="app-card progress-card">
            <div className="progress-header">
              <span className="uni-name">McGill University</span>
              <span className="status-badge">In Progress</span>
            </div>
            <p className="degree-name">MSc Computer Science</p>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: '85%' }}></div>
            </div>
            <p className="progress-text">85% Complete · Deadline in 14 days</p>
          </div>

          <div className="app-card tasks-card">
            <h4>Next Steps</h4>
            <ul>
              <li className="completed">
                <CheckCircle2 size={16} /> <span>Submit Transcripts</span>
              </li>
              <li className="completed">
                <CheckCircle2 size={16} /> <span>Draft SOP</span>
              </li>
              <li className="pending">
                <div className="circle-empty" /> <span>Review SOP with Tutor</span> <ChevronRight size={14} className="ml-auto" />
              </li>
            </ul>
          </div>

          <div className="app-notification">
            <div className="notif-icon"><MessageCircle size={18} /></div>
            <div className="notif-content">
              <strong>Tutor Natnael</strong>
              <p>I left some feedback on your SOP draft...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
