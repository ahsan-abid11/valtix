'use client';

import React from 'react';
import { erpCostSecurityItems } from '../data/erpData';

export default function ErpOwnership() {
  const categoryIcons = [
    // Source Code
    <svg key="code" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    // Database
    <svg key="db" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    // 3rd Party
    <svg key="lib" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>,
    // Hosting
    <svg key="host" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
    // Backup
    <svg key="backup" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>,
    // Security
    <svg key="sec" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    // Support
    <svg key="sup" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  ];

  return (
    <section className="erp-section erp-section-dark" id="ownership">
      <div className="erp-container">
        <header className="erp-section-header">
          <p className="erp-section-eyebrow">COMMERCIAL CLARITY &amp; GOVERNANCE</p>
          <h2 className="erp-section-h2" style={{ color: '#FFFFFF' }}>Know What You Own — and What It Costs to Run.</h2>
          <p className="erp-section-desc">
            We clearly distinguish one-time engineering fees from ongoing operational costs with zero hidden charges.
          </p>
        </header>

        {/* Clear Cost Distinction Banner */}
        <div className="erp-cost-distinction-banner" style={{ marginBottom: '32px' }}>
          <div className="distinction-col">
            <span className="badge-type dev">DEVELOPMENT FEES</span>
            <h4>One-Time Milestone Project Cost</h4>
            <p>Covers discovery, database architecture, custom UI, migration scripting, and go-live deployment.</p>
          </div>
          <div className="distinction-vs">VS</div>
          <div className="distinction-col">
            <span className="badge-type ops">RUNNING EXPENSES</span>
            <h4>Ongoing Operational Costs</h4>
            <p>Your chosen cloud server VPS, database licences (if applicable), and optional maintenance retainers.</p>
          </div>
        </div>

        <div className="erp-cost-grid">
          {erpCostSecurityItems.map((item, idx) => (
            <div key={idx} className="erp-cost-card">
              <div className="cost-card-header">
                <div className="cost-icon-box">
                  {categoryIcons[idx] || categoryIcons[0]}
                </div>
                <span className="cost-card-summary">{item.summary}</span>
              </div>
              <h3 className="cost-card-title">{item.category}</h3>
              <p className="cost-card-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
