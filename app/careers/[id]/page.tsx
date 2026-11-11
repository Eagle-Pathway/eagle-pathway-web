import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCareerByIdOrSlug } from '../careersData';
import JobDetailView from '../JobDetailView';
import { site } from '@/app/content/site';
import { ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const job = await getCareerByIdOrSlug(resolvedParams.id);

  if (!job) {
    return {
      title: 'Career Opening | Eagle Pathway',
      description: 'Explore career opportunities at Eagle Pathway.',
    };
  }

  const shareUrl = `${site.url}/careers/${job.slug || job.id}`;

  return {
    title: `${job.title} | Careers at Eagle Pathway`,
    description: job.summary || job.description || `Join Eagle Pathway as ${job.title}.`,
    alternates: {
      canonical: shareUrl,
    },
    openGraph: {
      title: `${job.title} — Eagle Pathway Careers`,
      description: job.summary || `Join our team in Addis Ababa and remote. Apply now.`,
      url: shareUrl,
      type: 'website',
      siteName: site.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${job.title} — Eagle Pathway Careers`,
      description: job.summary,
    },
  };
}

export default async function SingleCareerPage({ params }: Props) {
  const resolvedParams = await params;
  const job = await getCareerByIdOrSlug(resolvedParams.id);

  if (!job) {
    return (
      <>
        {/* Banner */}
        <section
          style={{
            background: '#111b40',
            color: '#ffffff',
            padding: '4rem 1.5rem 3.5rem',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 800,
                color: '#ffffff',
                margin: '0 0 0.5rem',
              }}
            >
              Role Not Found
            </h1>
            <div style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.75)' }}>
              <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                Home
              </Link>{' '}
              /{' '}
              <Link href="/careers" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                Careers
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 1.5rem 6rem', background: '#ffffff', textAlign: 'center' }}>
          <div style={{ maxWidth: '520px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '0.75rem', fontWeight: 800 }}>
              This position is no longer active
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              The role you are looking for may have been filled or expired. Check our open roles to find active opportunities.
            </p>
            <Link
              href="/careers"
              className="btn btn-primary"
              style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', textDecoration: 'none' }}
            >
              <ArrowLeft size={16} /> View All Open Positions
            </Link>
          </div>
        </section>
      </>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description || job.summary,
    datePosted: new Date().toISOString().split('T')[0],
    employmentType: job.employment_type?.toUpperCase().replace(/[^A-Z]/g, '_') || 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: site.name,
      sameAs: site.url,
      logo: `${site.url}/icon.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Addis Ababa',
        addressCountry: 'ET',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Banner */}
      <section
        style={{
          background: '#111b40',
          color: '#ffffff',
          padding: '4rem 1.5rem 3.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              margin: '0 0 0.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            Careers
          </h1>
          <div style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 500 }}>
            <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
              Home
            </Link>{' '}
            /{' '}
            <Link href="/careers" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
              Careers
            </Link>{' '}
            / <span>{job.title}</span>
          </div>
        </div>
      </section>

      {/* Main Role Details & In-Page Form */}
      <section style={{ padding: '3.5rem 1.5rem 5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <JobDetailView job={job} />
        </div>
      </section>
    </>
  );
}

