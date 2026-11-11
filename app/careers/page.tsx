import type { Metadata } from 'next';
import CareersClient from './CareersClient';
import { getCareers } from './careersData';
import { site } from '../content/site';

export const metadata: Metadata = {
  title: 'Careers | Eagle Pathway',
  description:
    'Join Eagle Pathway. Pick a role, read what it involves, and apply in a few minutes.',
  alternates: {
    canonical: `${site.url}/careers`,
  },
  openGraph: {
    title: 'Careers — Eagle Pathway',
    description: 'Explore open roles at Eagle Pathway in Addis Ababa and remote worldwide.',
    url: `${site.url}/careers`,
    type: 'website',
  },
};

export default async function CareersPage() {
  const careers = await getCareers();

  return (
    <>
      <CareersClient initialCareers={careers} />
    </>
  );
}
