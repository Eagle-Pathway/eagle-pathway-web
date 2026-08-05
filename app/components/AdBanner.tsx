'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
  style?: React.CSSProperties;
}

export default function AdBanner({
  slot,
  format = 'auto',
  responsive = true,
  style,
}: AdBannerProps) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (adsenseId && typeof window !== 'undefined') {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, [adsenseId]);

  if (!adsenseId) {
    // Development / Fallback Sponsored Banner Placeholder
    return (
      <div
        className="ad-banner-placeholder"
        style={{
          background: 'var(--bg-soft)',
          border: '1px dashed var(--line)',
          borderRadius: 'var(--radius)',
          padding: '1.25rem',
          textAlign: 'center',
          color: 'var(--muted)',
          fontSize: '0.85rem',
          margin: '1.5rem 0',
          ...style,
        }}
      >
        <span style={{ fontWeight: 600, color: 'var(--navy)', display: 'block', marginBottom: '0.25rem' }}>
          📢 Sponsored Educational Opportunity
        </span>
        Connect with international university partners &amp; scholarship grant providers.
      </div>
    );
  }

  return (
    <div className="ad-container" style={{ margin: '1.5rem 0', textAlign: 'center', ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adsenseId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
