import { site } from '../content/site';

function AppleLogo({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.37 1.43c.08 1.02-.33 2.02-.99 2.74-.7.77-1.85 1.36-2.96 1.27-.1-.99.38-2.02 1-2.66.69-.74 1.9-1.29 2.95-1.35zM20.5 17.2c-.55 1.27-.82 1.84-1.53 2.96-.99 1.57-2.39 3.53-4.12 3.54-1.54.01-1.94-1-4.03-.99-2.09.01-2.53 1.01-4.07.99-1.73-.01-3.05-1.78-4.04-3.35C-.05 16.05-.34 11-1 8.9c.7-1.45 2.07-2.37 3.59-2.39 1.46-.02 2.84.99 3.74.99.9 0 2.57-1.22 4.33-1.04.74.03 2.81.3 4.14 2.26-3.63 1.99-3.05 7.16 1.7 8.48z" />
    </svg>
  );
}

function PlayLogo({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path d="M3.6 2.3c-.3.3-.5.7-.5 1.3v16.8c0 .6.2 1 .5 1.3l.1.1L13 12.1v-.2L3.7 2.2l-.1.1z" fill="#34a853" />
      <path d="M16.3 15.3 13 12.1v-.2l3.3-3.2.1.1 3.9 2.2c1.1.6 1.1 1.6 0 2.3l-4 2.1z" fill="#fbbc04" />
      <path d="M16.4 15.2 13 12 3.6 21.7c.4.4 1 .4 1.6.1l11.2-6.6" fill="#ea4335" />
      <path d="M16.4 8.8 5.2 2.2c-.6-.3-1.2-.3-1.6.1L13 12l3.4-3.2z" fill="#4285f4" />
    </svg>
  );
}

type Props = { variant?: 'dark' | 'light'; center?: boolean };

export default function AppButtons({ variant = 'dark', center = false }: Props) {
  const soon = !site.app.available;

  const stores = [
    { key: 'apple', top: 'Download on the', name: 'App Store', href: site.app.ios, logo: <AppleLogo /> },
    { key: 'google', top: 'Get it on', name: 'Google Play', href: site.app.android, logo: <PlayLogo /> },
  ];

  return (
    <div className={`app-area ${center ? 'center' : ''}`}>
      <span className={`app-soon ${variant === 'light' ? 'on-dark' : ''}`}>
        <span className="app-soon-dot" /> Mobile apps launching soon
      </span>
      <div className="app-btns">
        {stores.map((s) =>
          soon ? (
            <span key={s.key} className={`store-btn ${variant} is-soon`} aria-disabled title="Coming soon">
              {s.logo}
              <span className="store-btn-text">
                <small>{s.top}</small>
                <b>{s.name}</b>
              </span>
            </span>
          ) : (
            <a key={s.key} className={`store-btn ${variant}`} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.logo}
              <span className="store-btn-text">
                <small>{s.top}</small>
                <b>{s.name}</b>
              </span>
            </a>
          )
        )}
      </div>
    </div>
  );
}
