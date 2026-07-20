import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AiAssistantWidget from './components/AiAssistantWidget';

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
  metadataBase: new URL('https://www.eaglespathway.com'),
  title: 'Eagle Pathway | Scholarships & Tutoring for Ethiopian Students',
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
    url: 'https://www.eaglespathway.com',
    siteName: 'Eagle Pathway',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <AiAssistantWidget />
      </body>
    </html>
  );
}
