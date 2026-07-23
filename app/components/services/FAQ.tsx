'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQProps {
  questions: {
    question: string;
    answer: string;
  }[];
}

export default function FAQ({ questions }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {questions.map((q, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`faq-row ${isOpen ? 'open' : ''}`}>
            <button className="faq-trigger" onClick={() => toggle(i)}>
              <span>{q.question}</span>
              <div className="faq-icon">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            <div className="faq-content" style={{ maxHeight: isOpen ? '500px' : '0' }}>
              <div className="faq-inner">
                <p>{q.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
