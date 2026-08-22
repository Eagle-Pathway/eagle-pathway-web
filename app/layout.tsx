import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
// import AiAssistantWidget from './components/AiAssistantWidget';
import { site } from './content/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  verification: {
    google: 'googlefd8e292bf0a88074',
  },
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Eagle Pathway | Scholarships & Tutoring for Ethiopian Students',
    template: '%s | Eagle Pathway',
  },
  description:
    'From the classroom to a global scholarship. Expert tutoring, SAT/IELTS prep, and scholarship guidance helping Ethiopian and African students secure admissions and funding at world-class universities.',
  keywords: [
    'Scholarship Ethiopia',
    'Scholarship agency Addis Ababa',
    'Study abroad Ethiopia',
    'Tutoring Addis Ababa',
    'SAT prep Ethiopia',
    'IELTS prep Addis Ababa',
    'International Education Ethiopia',
    'Eagle Pathway',
    'Undergraduate scholarships for Ethiopian students',
    'Master degree scholarships Ethiopia',
    'Full funding study abroad Africa',
    'አስጠኚዎች አዲስ አበባ',
    'የአስጠኚዎች ኤጀንሲ',
    'ቱቶሪያል አዲስ አበባ',
    'የስኮላርሺፕ ኤጀንሲ አዲስ አበባ',
    'Astegniwoch Addis Ababa',
    'Ethiopia tutors and tutorial services',
  ],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Eagle Pathway — Secure Your Future Abroad | አስጠኚዎች እና የስኮላርሺፕ ኤጀንሲ',
    description:
      'Expert tutoring, SAT/IELTS preparation, and scholarship guidance helping Ethiopian students secure admissions and funding at world-class universities.',
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eagle Pathway — Secure Your Future Abroad | አስጠኚዎች እና የስኮላርሺፕ ኤጀንሲ',
    description:
      'Expert tutoring and scholarship guidance for Ethiopian students aiming for world-class universities.',
    images: ['/logo.png'],
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon.png`,
    description:
      'Scholarship guidance, SAT/IELTS preparation, and academic tutoring (አስጠኚዎች እና ቱቶሪያል) helping Ethiopian students secure admissions and funding at world-class universities.',
    email: site.email,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Addis Ababa',
      addressCountry: 'ET',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Ethiopia',
    },
    sameAs: [
      site.telegram.url,
      site.socials.facebook,
      site.socials.tiktok,
      site.socials.instagram,
      site.socials.youtube,
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    alternateName: ['Eagle Pathway Ethiopia', 'EaglePathway', 'ኢግል ፓዝዌይ', 'አስጠኚዎች አዲስ አበባ'],
  },
];

import TopAnnouncementBar from './components/TopAnnouncementBar';
import FloatingTelegramWidget from './components/FloatingTelegramWidget';
import AnalyticsAndAds from './components/AnalyticsAndAds';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AnalyticsAndAds />
        <div className="sticky-header-wrapper">
          <TopAnnouncementBar />
          <Nav />
        </div>
        <main className="main-content-offset">{children}</main>
        <Footer />
        <FloatingTelegramWidget />
      </body>
    </html>
  );
}
