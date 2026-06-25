'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const ADMIN_API_URL = 'https://eagle-pathway-79kn.vercel.app/api/assistant';

export default function AiAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(ADMIN_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok || !response.body) throw new Error('Network response was not ok');

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith('data: ')) continue;

          const dataStr = trimmed.slice(6);
          if (dataStr === '[DONE]') continue;

          try {
            const data = JSON.parse(dataStr);
            const content = data.choices?.[0]?.delta?.content;
            if (content) {
              setMessages((prev) => {
                const next = [...prev];
                const last = next[next.length - 1];
                if (last && last.role === 'assistant') {
                  return [...next.slice(0, -1), { ...last, content: last.content + content }];
                }
                return next;
              });
            }
          } catch {
            /* ignore partial json */
          }
        }
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I am currently unavailable. Please try again later.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {isOpen && (
        <div
          style={{
            width: 360,
            maxWidth: 'calc(100vw - 48px)',
            height: 520,
            maxHeight: 'calc(100vh - 120px)',
            marginBottom: 16,
            background: '#fff',
            borderRadius: 20,
            boxShadow: '0 30px 60px -15px rgba(15,23,42,0.3)',
            border: '1px solid #e6e8ef',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '16px 18px',
              background: 'linear-gradient(120deg, #4f46e5, #7c3aed)',
              color: '#fff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
              <Sparkles size={18} /> Eagle AI Guide
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              style={{ background: 'none', border: 0, color: 'rgba(255,255,255,0.85)', cursor: 'pointer', display: 'flex' }}
            >
              <X size={20} />
            </button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 12, background: '#f7f8fc' }}>
            {messages.length === 0 && (
              <div style={{ textAlign: 'center', color: '#64748b', marginTop: 36 }}>
                <Sparkles size={36} style={{ margin: '0 auto 12px', opacity: 0.5 }} />
                <p style={{ fontSize: 14 }}>Hi! Ask me anything about scholarships, tutoring or how Eagle Pathway works.</p>
              </div>
            )}

            {messages.map((msg, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div
                  style={{
                    maxWidth: '85%',
                    borderRadius: 16,
                    padding: '10px 13px',
                    fontSize: 14,
                    lineHeight: 1.5,
                    whiteSpace: 'pre-wrap',
                    background: msg.role === 'user' ? '#4f46e5' : '#fff',
                    color: msg.role === 'user' ? '#fff' : '#0f172a',
                    border: msg.role === 'user' ? 'none' : '1px solid #e6e8ef',
                    borderTopRightRadius: msg.role === 'user' ? 4 : 16,
                    borderTopLeftRadius: msg.role === 'user' ? 16 : 4,
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ padding: 12, background: '#fff', borderTop: '1px solid #e6e8ef', display: 'flex', gap: 8 }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about scholarships..."
              disabled={isLoading}
              style={{
                flex: 1,
                background: '#f1f3f9',
                border: '1px solid transparent',
                borderRadius: 999,
                padding: '10px 16px',
                fontSize: 14,
                color: '#0f172a',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              style={{
                background: !input.trim() || isLoading ? '#a5b4fc' : '#4f46e5',
                color: '#fff',
                width: 42,
                height: 42,
                borderRadius: '50%',
                border: 0,
                display: 'grid',
                placeItems: 'center',
                cursor: !input.trim() || isLoading ? 'default' : 'pointer',
                flexShrink: 0,
              }}
            >
              {isLoading ? <Loader2 size={18} className="spin" /> : <Send size={18} />}
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Hide assistant' : 'Open assistant'}
        style={{
          background: 'linear-gradient(120deg, #4f46e5, #7c3aed)',
          color: '#fff',
          width: 58,
          height: 58,
          borderRadius: '50%',
          border: 0,
          boxShadow: '0 12px 28px -8px rgba(79,70,229,0.7)',
          display: 'grid',
          placeItems: 'center',
          cursor: 'pointer',
          transform: isOpen ? 'scale(0)' : 'scale(1)',
          opacity: isOpen ? 0 : 1,
          transition: 'all 0.25s ease',
        }}
      >
        <MessageCircle size={26} />
      </button>
    </div>
  );
}
