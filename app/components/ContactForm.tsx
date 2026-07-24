'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('fullName')?.toString().split(' ')[0] || '',
      lastName: formData.get('fullName')?.toString().split(' ').slice(1).join(' ') || '',
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: 'General Inquiry',
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="consult-card success-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div className="success-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--green)' }}>
          <Check size={48} />
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Message Sent!</h2>
        <p className="success-msg" style={{ textAlign: 'center', color: 'var(--muted)' }}>
          Thank you for reaching out to Eagle Pathway. Our team will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div className="consult-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '2.5rem' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="field">
          <label>Full Name *</label>
          <input type="text" name="fullName" placeholder="Your full name" required />
        </div>
        
        <div className="field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="field">
            <label>Email Address *</label>
            <input type="email" name="email" placeholder="you@email.com" required />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="+251 9XX XXX XXX" />
          </div>
        </div>

        <div className="field">
          <label>Message *</label>
          <textarea 
            name="message"
            placeholder="How can we help you today?" 
            rows={5} 
            required 
            style={{ 
              width: '100%', 
              padding: '0.875rem 1rem', 
              borderRadius: 'var(--radius)', 
              border: '1px solid var(--line)', 
              background: '#fff', 
              fontFamily: 'inherit',
              resize: 'vertical'
            }} 
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary" 
          disabled={isSubmitting}
          style={{ marginTop: '1rem', width: '100%' }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
