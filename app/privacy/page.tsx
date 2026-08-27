import type { Metadata } from 'next';
import Reveal from '../components/Reveal';
import Link from 'next/link';
import { site } from '../content/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | Eagle Pathway',
  description:
    'Official Privacy Policy for Eagle Pathway mobile app and website. Learn how we collect, use, protect, and handle account deletion for your data.',
  alternates: {
    canonical: `${site.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Direct Privacy Policy Hero */}
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Legal & Data Protection</span>
            <h1>Privacy Policy</h1>
            <p>
              Last Updated: August 2026 | Effective Date: Immediately<br />
              EaglePathway Education (&quot;Eagle Pathway&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Section 1 */}
          <Reveal delay={100}>
            <div className="content-block" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>1. Introduction</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
                EaglePathway Education respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website at <strong>{site.url}</strong>, our mobile application (&quot;Eagle Pathway App&quot;), and our educational, tutoring, and scholarship advisory services.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginTop: '0.75rem' }}>
                Please read this Privacy Policy carefully. By accessing or using our platform, mobile app, or services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </Reveal>

          {/* Section 2 */}
          <Reveal delay={150}>
            <div className="content-block" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>2. Information We Collect</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                We collect personal information that you voluntarily provide to us when registering an account, submitting an application, or interacting with our services:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'grid', gap: '0.6rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                <li><strong>Personal Identification Data:</strong> Full Name, Email Address, Phone Number, and Physical Location / Address.</li>
                <li><strong>Academic & Application Data:</strong> Educational background, current grade/degree level, target universities, scholarship goals, test scores (SAT/IELTS), and Statement of Purpose drafts.</li>
                <li><strong>Parent & Guardian Information:</strong> Parent name and contact details for learners under 18 years of age.</li>
                <li><strong>Technical & App Usage Data:</strong> Device model, operating system version, app usage statistics, and IP address collected automatically for app performance and diagnostic troubleshooting.</li>
              </ul>
            </div>
          </Reveal>

          {/* Section 3 */}
          <Reveal delay={200}>
            <div className="content-block" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>3. How We Use Your Information</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                We use the information we collect for specific, legitimate educational and service purposes:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'grid', gap: '0.6rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                <li>To create, authenticate, and manage your Eagle Pathway student or parent account.</li>
                <li>To match students with verified 1-on-1 academic tutors based on subject, grade level, and location.</li>
                <li>To provide university application review, scholarship shortlisting, and mentorship tracking.</li>
                <li>To communicate important updates, lesson schedules, parent progress reports, and notification alerts.</li>
                <li>To maintain system security, prevent fraud, and ensure technical stability of the mobile app.</li>
              </ul>
            </div>
          </Reveal>

          {/* Section 4 */}
          <Reveal delay={250}>
            <div className="content-block" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>4. Data Sharing & Third Parties</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                <strong>We do not sell, rent, or trade your personal information to third parties or advertisers.</strong> We may share data only under the following limited circumstances:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'grid', gap: '0.6rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                <li><strong>Assigned Tutors & Advisors:</strong> Necessary profile information (student grade, subject goals) shared with assigned tutors to conduct lessons.</li>
                <li><strong>Service Providers:</strong> Trusted cloud infrastructure and messaging providers operating under strict confidentiality contracts.</li>
                <li><strong>Legal Requirements:</strong> Disclosures required by law, court order, or governmental regulations.</li>
              </ul>
            </div>
          </Reveal>

          {/* Section 5 */}
          <Reveal delay={300}>
            <div className="content-block" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>5. Data Security & Encryption</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
                We implement robust technical and organizational security measures to protect your personal information. All data transmitted between the Eagle Pathway mobile app and our servers is encrypted in transit using industry-standard <strong>HTTPS / TLS 1.3 encryption</strong>. Access to user data is strictly restricted to authorized operational staff and verified advisors.
              </p>
            </div>
          </Reveal>

          {/* Section 6 */}
          <Reveal delay={350}>
            <div className="content-block" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>6. Account Deletion & Data Retention</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                You have the right to request deletion of your account and all associated personal data at any time:
              </p>
              <ul style={{ paddingLeft: '1.5rem', display: 'grid', gap: '0.6rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                <li><strong>In-App Deletion:</strong> Open the Eagle Pathway Mobile App, go to <strong>Settings &rarr; Delete Account</strong>, and confirm deletion.</li>
                <li><strong>Email Deletion Request:</strong> Send an account deletion request email to <a href={`mailto:${site.email}`} style={{ color: 'var(--orange)', textDecoration: 'underline' }}>{site.email}</a>. Upon receipt, your account and associated personal data will be permanently removed within 7 working days.</li>
              </ul>
            </div>
          </Reveal>

          {/* Section 7 */}
          <Reveal delay={400}>
            <div className="content-block" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>7. Children&apos;s Privacy</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
                For primary and secondary school learners under 18 years of age, account creation and service enrollment require parent or legal guardian consent and oversight. We do not knowingly collect personal information directly from children without parental involvement.
              </p>
            </div>
          </Reveal>

          {/* Section 8 */}
          <Reveal delay={450}>
            <div className="content-block" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>8. Changes to This Privacy Policy</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
                We may update this Privacy Policy from time to time to reflect changes in our operational practices or regulatory requirements. Any updates will be posted directly on this page with an updated effective date.
              </p>
            </div>
          </Reveal>

          {/* Section 9 */}
          <Reveal delay={500}>
            <div className="content-block">
              <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>9. Contact Us</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                If you have any questions, concerns, or data privacy requests regarding this policy, please contact us:
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem', display: 'grid', gap: '0.6rem', color: 'var(--muted)' }}>
                <li><strong>Organization:</strong> EaglePathway Education</li>
                <li><strong>Address:</strong> {site.location}</li>
                <li><strong>Email:</strong> <a href={`mailto:${site.email}`} style={{ color: 'var(--orange)', textDecoration: 'underline' }}>{site.email}</a></li>
                <li><strong>Phone:</strong> <a href={`tel:${site.phone}`} style={{ color: 'var(--orange)', textDecoration: 'underline' }}>{site.phone}</a></li>
                <li><strong>Telegram Support:</strong> <a href={site.tutoring.telegram} target="_blank" rel="noreferrer" style={{ color: 'var(--orange)', textDecoration: 'underline' }}>{site.tutoring.handle}</a></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
