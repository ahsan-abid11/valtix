'use client';

import React, { useState } from 'react';
import { erpFaqs } from '../data/erpData';

export default function ErpFaq() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (idx) => {
    setOpenIndex(prev => (prev === idx ? -1 : idx));
  };

  return (
    <section className="erp-section erp-section-light" id="faqs">
      <div className="erp-container">
        <header className="erp-section-header">
          <p className="erp-section-eyebrow">COMMON TECHNICAL &amp; COMMERCIAL INQUIRIES</p>
          <h2 className="erp-section-h2">Frequently Asked Questions About Custom ERP Development.</h2>
          <p className="erp-section-desc">
            Direct answers explaining technical trade-offs, architecture choices, migration risks, and code ownership boundaries.
          </p>
        </header>

        <div className="erp-faq-accordion-container">
          {erpFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className={`erp-faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="erp-faq-trigger"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-btn-${idx}`}
                >
                  <span className="faq-q-left">
                    <span className="faq-index-badge">{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                    <span className="faq-question-text">{faq.q}</span>
                  </span>

                  <span className="faq-icon-wrapper" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  className="erp-faq-content-wrap"
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  hidden={!isOpen}
                >
                  <div className="erp-faq-content-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
