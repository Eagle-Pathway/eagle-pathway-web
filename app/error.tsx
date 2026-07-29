'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{ 
      minHeight: '70vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--navy)' }}>Something went wrong!</h2>
      <p style={{ color: 'var(--muted)', marginBottom: '2rem', maxWidth: '400px' }}>
        An unexpected error occurred. We have been notified and are looking into it.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          className="btn btn-primary"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
        <Link href="/" className="btn" style={{ background: 'var(--bg-soft)', color: 'var(--navy)' }}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
