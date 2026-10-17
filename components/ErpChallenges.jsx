'use client';

import React from 'react';
import Link from 'next/link';

export default function ErpChallenges() {
  const challenges = [
    {
      num: "01",
      title: "Scattered Spreadsheets",
      problem: "Multiple teams update conflicting Excel files, leading to errors and duplicated effort.",
      outcome: "Single Central Database",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>
        </svg>
      )
    },
    {
      num: "02",
      title: "Limited Stock Visibility",
      problem: "Warehouse and sales lack live sync, causing stockouts, delayed dispatch, and overpromising.",
      outcome: "Live Inventory Ledger",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    },
    {
      num: "03",
      title: "Delayed Financial Reporting",
      problem: "Compiling monthly P&L and receivables takes days of manual cross-checking after month-end.",
      outcome: "Automated Instant Reporting",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    },
    {
      num: "04",
      title: "Disconnected Approvals",
      problem: "Purchase requests and discounts get delayed across email threads with no clear audit trail.",
      outcome: "Enforced Digital Approvals",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    }
  ];

  return (
    <section className="erp-section erp-section-dark" id="challenges">
      <div className="erp-container">
        <header className="erp-section-header">
          <p className="erp-section-eyebrow">OPERATIONAL INEFFICIENCIES</p>
          <h2 className="erp-section-h2" style={{ color: '#FFFFFF' }}>Your Business Has Grown. Your Software Should Keep Up.</h2>
          <p className="erp-section-desc">
            When off-the-shelf tools become a bottleneck, custom ERP unifies your operations around a single reliable database.
          </p>
        </header>

        <div className="erp-challenges-grid">
          {challenges.map((item, idx) => (
            <div key={idx} className="erp-challenge-card">
              <div className="erp-challenge-card-top">
                <div className="erp-challenge-icon-box">
                  {item.icon}
                </div>
                <span className="erp-outcome-pill">{item.outcome}</span>
              </div>
              <h3 className="erp-challenge-title">{item.title}</h3>
              <p className="erp-challenge-problem">{item.problem}</p>
            </div>
          ))}
        </div>

        <div className="erp-section-cta-wrap">
          <Link href="#contact" className="erp-btn erp-btn-accent">
            <span>Discuss Your Business Challenges</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
