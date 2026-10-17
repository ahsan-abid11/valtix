'use client';

import React from 'react';
import Link from 'next/link';
import { industrySolutions } from '../data/erpData';

export default function ErpIndustries() {
  const industryIcons = {
    manufacturing: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
      </svg>
    ),
    distribution: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    retail: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    services: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    warehousing: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
      </svg>
    )
  };

  return (
    <section className="erp-section erp-section-dark" id="industries">
      <div className="erp-container">
        <header className="erp-section-header">
          <p className="erp-section-eyebrow">SECTOR-SPECIFIC WORKFLOWS</p>
          <h2 className="erp-section-h2" style={{ color: '#FFFFFF' }}>ERP Software Designed for Your Industry.</h2>
          <p className="erp-section-desc">
            Tailored data models, shop-floor screens, and approval rules engineered for your operational domain.
          </p>
        </header>

        <div className="erp-industries-grid">
          {industrySolutions.map((ind) => (
            <div key={ind.id} className="erp-industry-card">
              <div>
                <div className="ind-header-row">
                  <div className="ind-icon-box">
                    {industryIcons[ind.id] || industryIcons.services}
                  </div>
                  <span className="ind-tagline">{ind.tagline}</span>
                </div>

                <h3 className="ind-name">{ind.name}</h3>
                <p className="ind-desc">{ind.desc}</p>

                <div className="ind-workflows-box">
                  <span className="wf-title">Engineered Workflows:</span>
                  <ul className="wf-list">
                    {ind.workflows.slice(0, 3).map((wf, idx) => (
                      <li key={idx} className="wf-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--erp-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{wf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="ind-card-bottom">
                <Link href="#contact" className="ind-link">
                  <span>Discuss {ind.name}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
