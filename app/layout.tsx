import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AiAssistantWidget from './components/AiAssistantWidget';
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
  title: {
    default: 'Eagle Pathway | Scholarships & Tutoring for Ethiopian Students',
    template: '%s | Eagle Pathway',
  },
  description:
    'From the classroom to a global scholarship. Expert tutoring and scholarship guidance helping Ethiopian students secure admissions and funding at world-class universities.',
  keywords: [
    'Scholarship Ethiopia',
    'Tutoring Addis Ababa',
    'International Education',
    'Eagle Pathway',
    'Study Abroad',
    'SAT IELTS prep',
  ],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Eagle Pathway — Secure Your Future Abroad',
    description:
      'Expert tutoring and scholarship guidance for Ethiopian students aiming for world-class universities.',
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eagle Pathway — Secure Your Future Abroad',
    description:
      'Expert tutoring and scholarship guidance for Ethiopian students aiming for world-class universities.',
    images: ['/logo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon.png`,
  description:
    'Scholarship guidance and academic tutoring helping Ethiopian students secure admissions and funding at world-class universities.',
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Addis Ababa',
    addressCountry: 'ET',
  },
  sameAs: [site.telegram.url],
};

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
        <Nav />
        <main>{children}</main>
        <Footer />
        <AiAssistantWidget />
      </body>
    </html>
  );
}
