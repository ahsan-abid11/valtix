'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { faqsData } from '../data/faqsData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-section" id="faqs">
      <div className="wrapper">
        {/* Header */}
        <header className="faq-header">
          <p className="eyebrow" style={{ justifyContent: 'center', fontSize: '10px', marginBottom: '6px' }}>Data &amp; Operational Security</p>
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: 'clamp(24px, 2.8vw, 32px)', letterSpacing: '-0.02em', marginBottom: '8px' }}>Frequently Asked Questions</h2>
          <p className="section-desc" style={{ textAlign: 'center', marginInline: 'auto', fontSize: '13.5px', lineHeight: 1.55 }}>
            Clear, unequivocal answers regarding document security, bank access protocols, and operational workflows.
          </p>
        </header>

        {/* Centered Accordion */}
        <div className="faq-container">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">
                    <span className="faq-q-num">0{index + 1}</span>
                    <span className="faq-q-title">{faq.question}</span>
                  </span>
                  <div className="faq-toggle-icon" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>
                <div className="faq-content-wrap">
                  <div className="faq-content-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Helpful Support Footer */}
        <div className="faq-bottom-help">
          <span>Still have questions about your business setup?</span>
          <Link href="#contact" className="faq-help-link">
            Speak with an Advisor &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
