'use client';

import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Switching to Valtix completely streamlined our corporate tax filing. Their portal is intuitive, and their team acts exactly like an in-house department, just without the overhead.",
    author: "Omar Al Farsi",
    role: "Managing Director, TechNova UAE"
  },
  {
    id: 2,
    quote: "The combination of web engineering and financial services is genius. They rebuilt our e-commerce platform and simultaneously integrated our entire VAT accounting structure.",
    author: "Sarah Jenkins",
    role: "Founder, Luxe Retail Dubai"
  },
  {
    id: 3,
    quote: "Their read-only protocol gave our board immediate peace of mind. Exceptional compliance standards and always available in the UAE timezone.",
    author: "Ahmed Mansour",
    role: "CFO, BuildCorp Middle East"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section section-py">
      <div className="wrapper">
        <div className="testimonials-header text-center">
          <p className="eyebrow">Client Success Stories</p>
          <h2 className="section-title">Trusted by UAE Enterprises</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="quote-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
