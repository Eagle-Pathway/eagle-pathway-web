'use client';

import { useState } from 'react';
import { Send, X, ExternalLink, CheckCircle, Phone } from 'lucide-react';
import { site } from '@/app/content/site';

export default function FloatingTelegramWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-telegram-wrapper">
      {/* Popup Window */}
      {open && (
        <div className="floating-telegram-popup animate-in">
          <div className="floating-telegram-header">
            <div className="floating-telegram-header-info">
              <div className="floating-avatar">
                <span>EP</span>
                <span className="online-status-dot" />
              </div>
              <div>
                <h4>Eagle Pathway Direct Support</h4>
                <p>Online • Quick support for parents & students</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="floating-close-btn"
              aria-label="Close message"
            >
              <X size={18} />
            </button>
          </div>

          <div className="floating-telegram-body">
            <div className="chat-bubble left">
              👋 Welcome! Whether you need an <strong>Astegni / Tutor fast</strong> or <strong>Scholarship Guidance</strong>, we are here to help:
            </div>

            <div className="chat-highlights">
              <div className="highlight-item">
                <CheckCircle size={14} className="check-icon" />
                <span>Tutoring: KG–12, Languages, SAT & IELTS</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={14} className="check-icon" />
                <span>Scholarships: Admissions & Visa Counseling</span>
              </div>
            </div>

            <div className="chat-action-buttons">
              <a
                href={`tel:${site.tutoring.phone1}`}
                className="chat-btn"
                style={{ background: '#f59e0b', color: '#0f172a', fontWeight: 700 }}
              >
                <Phone size={16} /> Call Tutoring Hotline ({site.tutoring.phone1Display})
              </a>

              <a
                href={site.tutoring.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="chat-btn primary-chat-btn"
              >
                <Send size={16} /> Tutoring Telegram (@EagleTutorialsServices)
              </a>

              <a
                href="https://forms.gle/eUrPE13Gt2GL4D3y9"
                target="_blank"
                rel="noopener noreferrer"
                className="chat-btn secondary-chat-btn"
              >
                <ExternalLink size={16} /> Scholarship Bootcamp 2026
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="floating-telegram-trigger"
        aria-label="Quick Connect on Telegram"
      >
        <span className="pulse-ring" />
        <div className="trigger-icon">
          {open ? <X size={24} /> : <Send size={24} />}
        </div>
        <span className="trigger-label">
          Telegram Quick Connect
          <span className="trigger-badge">20k+</span>
        </span>
      </button>
    </div>
  );
}
