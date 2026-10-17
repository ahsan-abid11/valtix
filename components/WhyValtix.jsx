'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

export default function WhyValtix() {
  const [activeDuelIndex, setActiveDuelIndex] = useState(1); // 0 = In-House, 1 = Valtix
  const duelRefs = useRef([]);

  const handleMobileScroll = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      const container = e.currentTarget;
      const scrollLeft = container.scrollLeft;
      const card = duelRefs.current[0];
      if (card) {
        const cardWidth = card.offsetWidth + 16;
        const newIndex = Math.round(scrollLeft / cardWidth);
        if (newIndex >= 0 && newIndex < 2 && newIndex !== activeDuelIndex) {
          setActiveDuelIndex(newIndex);
        }
      }
    }
  };

  const inHousePoints = [
    { title: "AED 8,500+ Visa Fees", desc: "2-year residency visa, Emirates ID, medical fitness, plus mandatory medical insurance renewal." },
    { title: "Compounding Severance (EOSG)", desc: "Accumulates end-of-service gratuity liabilities under UAE Labor Law payable upon exit." },
    { title: "Single Person Risk", desc: "Filings stall during 30-day annual leaves, medical sick leaves, or sudden resignations." },
    { title: "Workstation & IT Costs", desc: "Requires dedicated office desk lease, desktop equipment, and separate software seat fees." }
  ];

  const valtixPoints = [
    { title: "AED 0 Visa & Medical Costs", desc: "Pay strictly for high-yield finance output. Zero visa sponsorship or residency overhead." },
    { title: "100% Tax-Deductible Expense", desc: "Monthly retainers are direct operational business expenses that lower taxable profit." },
    { title: "Redundant 3-Person Pod", desc: "Continuous coverage by dedicated accountant, VAT specialist, and senior review manager." },
    { title: "Strict Read-Only Banking", desc: "External auditor access protocol. We never hold, sign cheques, or disburse client funds." }
  ];

  const metrics = [
    { stat: "AED 0", label: "Visa & Medical Overhead", sub: "Save upfront fees completely", highlight: "#0071e3" },
    { stat: "75%", label: "Annual Cost Reduction", sub: "Compared to full-time salary", highlight: "#10b981" },
    { stat: "0 Days", label: "Leave / Sick Downtime", sub: "Redundant team coverage", highlight: "#0284c7" },
    { stat: "100%", label: "Read-Only Fund Protection", sub: "Zero withdrawal access", highlight: "#059669" }
  ];

  const deepDives = [
    {
      badge: "Cost Efficiency",
      title: "Eliminate Visa & Desk Overhead",
      desc: "Pay strictly for productive financial output. Zero workstation leases, visa renewals, or HR sponsorship liabilities.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      )
    },
    {
      badge: "Legal Protection",
      title: "Zero Gratuity Liability (EOSG)",
      desc: "Retainers are 100% tax-deductible operational business expenses with zero severance obligations under UAE Labor Law.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
        </svg>
      )
    },
    {
      badge: "Capital Safety",
      title: "Strict Read-Only Bank Protocol",
      desc: "We operate exclusively on auditor view feeds. We never hold client capital, sign cheques, or authorize fund transfers.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      badge: "Team Continuity",
      title: "Multi-Specialist Pod Redundancy",
      desc: "Permanent coverage by dedicated accountant and VAT specialist ensures zero filing disruption during annual leaves.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <section className="section-py why-valtix-section" id="why-valtix">
      <div className="wrapper">
        {/* Header */}
        <header className="text-center" style={{ marginBottom: '36px' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Direct Financial Comparison</p>
          <h2 className="section-title">Why Choose Valtix Over In-House Staff?</h2>
          <p className="section-desc" style={{ marginInline: 'auto', maxWidth: '640px' }}>
            Hiring an in-house accountant in Dubai or Abu Dhabi burdens your P&amp;L with visas, health insurance,
            and end-of-service reserves before the first ledger entry is audited.
          </p>
        </header>

        {/* Comparison Duel Cards (Desktop 2-Col Grid, Mobile 100% Horizontal Carousel) */}
        <div className="why-duel-grid" onScroll={handleMobileScroll}>
          {/* Card 0: In-House Staff */}
          <div
            className="why-duel-card card-inhouse"
            ref={(el) => (duelRefs.current[0] = el)}
          >
            <div className="why-duel-badge-wrap">
              <span className="why-duel-badge badge-inhouse">Traditional In-House Hire</span>
            </div>
            
            <h3 className="why-duel-title">Full-Time Employee</h3>
            <div className="why-duel-cost">
              <span className="cost-num">AED 120,000+</span>
              <span className="cost-period">/ year typical burden</span>
            </div>

            <ul className="why-duel-list">
              {inHousePoints.map((pt, i) => (
                <li key={i} className="duel-item duel-item-inhouse">
                  <span className="duel-icon cross">&times;</span>
                  <div>
                    <strong>{pt.title}</strong>
                    <p>{pt.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 1: Valtix Virtual Pod */}
          <div
            className="why-duel-card card-valtix"
            ref={(el) => (duelRefs.current[1] = el)}
          >
            <div className="why-duel-badge-wrap">
              <span className="why-duel-badge badge-valtix">Valtix Virtual Model</span>
              <span className="why-duel-tag">Recommended for SMEs</span>
            </div>

            <h3 className="why-duel-title">Dedicated Accounting Pod</h3>
            <div className="why-duel-cost">
              <span className="cost-num" style={{ color: 'var(--emerald)' }}>From AED 1,200</span>
              <span className="cost-period">/ month fixed retainer</span>
            </div>

            <ul className="why-duel-list">
              {valtixPoints.map((pt, i) => (
                <li key={i} className="duel-item duel-item-valtix">
                  <span className="duel-icon check">&#10003;</span>
                  <div>
                    <strong>{pt.title}</strong>
                    <p>{pt.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="why-duel-footer">
              <Link href="#contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Switch to Valtix Virtual Pod</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Duel Dots Indicator */}
        <div className="mobile-dots-indicator" aria-hidden="true">
          {[0, 1].map((i) => (
            <span
              key={i}
              className={`mobile-dot ${activeDuelIndex === i ? 'active' : ''}`}
              onClick={() => {
                setActiveDuelIndex(i);
                duelRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
              }}
            />
          ))}
        </div>

        {/* Metrics Bar */}
        <div className="why-metrics-ribbon">
          {metrics.map((m, idx) => (
            <div key={idx} className="why-metric-card">
              <strong className="why-metric-num" style={{ color: m.highlight }}>{m.stat}</strong>
              <span className="why-metric-label">{m.label}</span>
              <span className="why-metric-sub">{m.sub}</span>
            </div>
          ))}
        </div>

        {/* 4 Deep-Dive Core Advantages */}
        <div className="why-deep-grid">
          {deepDives.map((item, idx) => (
            <div key={idx} className="why-deep-card">
              <div className="why-deep-top">
                <span className="why-deep-badge">{item.badge}</span>
                <div className="why-deep-icon">{item.icon}</div>
              </div>
              <h4 className="why-deep-title">{item.title}</h4>
              <p className="why-deep-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
