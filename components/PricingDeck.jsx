'use client';

import React, { useState, useRef } from 'react';
import { pricingData } from '../data/pricingData';

export default function PricingDeck() {
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const planRefs = useRef([]);

  const handleMobileScroll = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      const container = e.currentTarget;
      const scrollLeft = container.scrollLeft;
      const card = planRefs.current[0];
      if (card) {
        const cardWidth = card.offsetWidth + 16;
        const newIndex = Math.round(scrollLeft / cardWidth);
        if (newIndex >= 0 && newIndex < pricingData.length && newIndex !== activePlanIndex) {
          setActivePlanIndex(newIndex);
        }
      }
    }
  };

  const scrollToPlan = (idx) => {
    setActivePlanIndex(idx);
    planRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  return (
    <section className="section-py" id="packages">
      <div className="wrapper">
        <header style={{ textAlign: 'center', maxWidth: '680px', marginInline: 'auto', marginBottom: '40px' }}>
          <p className="eyebrow" style={{ justifyContent: 'center', fontSize: '10px', marginBottom: '6px' }}>Predictable Pricing</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(24px, 2.8vw, 32px)', letterSpacing: '-0.02em', marginBottom: '8px' }}>Transparent Monthly Retainers</h2>
          <p className="section-desc" style={{ marginInline: 'auto', fontSize: '13.5px', lineHeight: 1.55 }}>
            Remote accounting and bookkeeping support for UAE startups and SMEs At-a-Glance Comparison
          </p>
        </header>

        {/* 3 Tier Cards with Embedded Compact Feature Matrix */}
        <div className="pricing-deck" onScroll={handleMobileScroll}>
          {pricingData.map((plan, index) => (
            <div
              key={plan.id}
              ref={(el) => (planRefs.current[index] = el)}
              className={`price-plan-card ${plan.featured ? 'featured' : ''}`}
            >
              {plan.featured && <span className="featured-tag">{plan.tag}</span>}

              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.015em', color: 'var(--ink)' }}>{plan.name}</h3>
                </div>
                <div className="plan-subtitle-tag" style={{ fontSize: '10px', padding: '2px 8px' }}>{plan.subtitle}</div>
                <p className="plan-target" style={{ marginTop: '8px', minHeight: '34px', fontSize: '12.5px', lineHeight: 1.45 }}>{plan.target}</p>
                <div className="price-tag" style={{ marginBlock: '12px', fontSize: '32px' }}>
                  {plan.price} <span style={{ fontSize: '13px' }}>{plan.period}</span>
                </div>

                {/* Compact Embedded Feature Matrix */}
                <div className="card-matrix-box">
                  <div className="cmb-title" style={{ fontSize: '9px', letterSpacing: '0.07em', marginBottom: '10px' }}>MONTHLY PACKAGE FEATURE MATRIX</div>
                  <ul className="card-matrix-list">
                    {plan.matrixFeatures.map((feat, i) => (
                      <li key={i} className={`cm-row ${feat.type === 'no' ? 'dimmed' : ''}`}>
                        <span className="cm-name">{feat.name}</span>
                        <span className="cm-val">
                          {feat.type === 'yes' && (
                            <span className="cm-icon check" title="Included" aria-label="Included">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                          )}
                          {feat.type === 'no' && (
                            <span className="cm-icon cross" title="Not Included" aria-label="Not Included">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                              </svg>
                            </span>
                          )}
                          {feat.type === 'pill' && (
                            <span className="cm-pill check">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <span>{feat.val}</span>
                            </span>
                          )}
                          {feat.type === 'text' && (
                            <span className="cm-pill text">{feat.val}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={plan.ctaLink}
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', marginTop: '24px' }}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="mobile-dots-indicator" aria-label="Pricing plans slides">
          {pricingData.map((_, idx) => (
            <span
              key={idx}
              className={`mobile-dot ${activePlanIndex === idx ? 'active' : ''}`}
              onClick={() => scrollToPlan(idx)}
              aria-label={`Go to plan ${idx + 1}`}
            />
          ))}
        </div>

        {/* Pricing & Service Notes Callout */}
        <div className="pricing-notes-card">
          <div className="pnc-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <strong>PRICING &amp; SERVICE NOTES</strong>
          </div>
          <p>
            Customized pricing based on your business requirements. Quotation confirmed based on transaction volume, business activity, payroll, and reporting needs. Transaction limits are monthly. Payroll covers preparation &amp; WPS SIF file creation; actual disbursement is not included.
          </p>
        </div>

        {/* Global Communication Protocol Banner - Professional */}
        <div className="pricing-comm-banner" style={{
          marginTop: '40px',
          padding: '28px 36px',
          background: '#07090c',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '28px'
        }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#fff', letterSpacing: '-0.01em', marginBottom: '4px' }}>Standard Communication Protocol</h3>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.5' }}>Secure, direct channels with your dedicated finance team.</p>
          </div>
          
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#fff' }}>WhatsApp Core</strong>
                <span style={{ fontSize: '12px', color: '#777' }}>Direct group chat support</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#fff' }}>Video Advisory</strong>
                <span style={{ fontSize: '12px', color: '#777' }}>Teams &amp; Google Meet calls</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
