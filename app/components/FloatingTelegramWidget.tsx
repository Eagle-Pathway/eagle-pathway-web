'use client';

import { useState } from 'react';
import { Send, X, MessageSquare, ExternalLink, CheckCircle } from 'lucide-react';
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
                <span>TT</span>
                <span className="online-status-dot" />
              </div>
              <div>
                <h4>Eagle Pathway Consultation</h4>
                <p>Online • Replies quickly on Telegram</p>
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
              👋 Hi there! Looking for scholarship guidance or application assistance?
            </div>
            <div className="chat-bubble left">
              Join our <strong>20,000+ member Telegram community</strong> or speak directly with our lead advisor.
            </div>

            <div className="chat-highlights">
              <div className="highlight-item">
                <CheckCircle size={14} className="check-icon" />
                <span>Fully Funded Scholarship Shortlists</span>
              </div>
              <div className="highlight-item">
                <CheckCircle size={14} className="check-icon" />
                <span>1-on-1 Academic & Visa Counseling</span>
              </div>
            </div>

            <div className="chat-action-buttons">
              <a
                href={site.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="chat-btn primary-chat-btn"
              >
                <Send size={16} /> Open Telegram Chat (@Tegegnpathway)
              </a>

              <a
                href="https://forms.gle/eUrPE13Gt2GL4D3y9"
                target="_blank"
                rel="noopener noreferrer"
                className="chat-btn secondary-chat-btn"
              >
                <ExternalLink size={16} /> Book Scholarship Bootcamp
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
