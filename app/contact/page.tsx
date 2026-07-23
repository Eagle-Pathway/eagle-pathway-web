'use client';

import { useState, FormEvent } from 'react';
import Icon from '../components/Icon';
import { site } from '../content/site';

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  gradeLevel: '',
  targetCountry: '',
  message: '',
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initial);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData(initial);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Let’s start your journey</h1>
          <p>
            Book a free, no-obligation consultation. Tell us where you are and we’ll map the path
            forward — usually within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div>
              <div className="info-card">
                <span className="dot"><Icon name="mail" size={18} /></span>
                <div>
                  <b>Email</b>
                  <span><a href={`mailto:${site.email}`}>{site.email}</a></span>
                </div>
              </div>
              <div className="info-card">
                <span className="dot"><Icon name="phone" size={18} /></span>
                <div>
                  <b>Phone</b>
                  <span><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></span>
                </div>
              </div>
              <div className="info-card">
                <span className="dot"><Icon name="location" size={18} /></span>
                <div>
                  <b>Location</b>
                  <span>{site.location}</span>
                </div>
              </div>
              <div className="info-card">
                <span className="dot"><Icon name="mobile" size={18} /></span>
                <div>
                  <b>Mobile app</b>
                  <span>Coming soon to the App Store &amp; Google Play.</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="form" onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="firstName">First name *</label>
                  <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="field">
                  <label htmlFor="lastName">Last name *</label>
                  <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="email">Email *</label>
                  <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="field">
                <label htmlFor="service">Service interested in *</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option value="tutoring">Tutoring (academic / exam prep)</option>
                  <option value="scholarship">Scholarship advisory</option>
                  <option value="both">Both tutoring & scholarship</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="gradeLevel">Current level</label>
                  <select id="gradeLevel" name="gradeLevel" value={formData.gradeLevel} onChange={handleChange}>
                    <option value="">Select status</option>
                    <option value="high-school">High school student</option>
                    <option value="university">University student</option>
                    <option value="bsc-completed">BSc completed</option>
                    <option value="msc-completed">MSc completed</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="targetCountry">Target destination</label>
                  <select id="targetCountry" name="targetCountry" value={formData.targetCountry} onChange={handleChange}>
                    <option value="">Select country</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">United States</option>
                    <option value="eu">EU (Europe)</option>
                    <option value="australia">Australia</option>
                    <option value="undecided">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals and any questions you have..."
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Book a Service'}
              </button>

              {status === 'success' && (
                <p className="form-status ok">
                  Thank you! We’ll be in touch within 24 hours to schedule your free consultation.
                </p>
              )}
              {status === 'error' && (
                <p className="form-status err">
                  Something went wrong. Please try again or email us directly at {site.email}.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
