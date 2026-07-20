import { site } from '@/app/content/site';

export default function TelegramCard() {
  return (
    <a
      href={site.telegram.url}
      target="_blank"
      rel="noopener noreferrer"
      className="tg-card"
    >
      <div className="tg-card-icon" aria-hidden>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </div>
      <div>
        <span className="tg-card-label">Telegram Channel</span>
        <h3 className="tg-card-title">Join {site.telegram.members} members</h3>
        <p className="tg-card-desc">
          Daily scholarship alerts, deadlines and fully-funded opportunities — free.
        </p>
        <span className="tg-card-link">{site.telegram.handle} →</span>
      </div>
    </a>
  );
}
