'use client';

import React from 'react';
import Link from 'next/link';
import { erpPlatforms } from '../data/erpData';

export default function ErpPlatforms() {
  const platformIcons = [
    // Web
    <svg key="web" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>,
    // Oracle APEX
    <svg key="apex" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>,
    // Desktop
    <svg key="desktop" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ];

  return (
    <section className="erp-section erp-section-dark" id="platforms">
      <div className="erp-container">
        <header className="erp-section-header">
          <p className="erp-section-eyebrow">ARCHITECTURAL CHOICES</p>
          <h2 className="erp-section-h2" style={{ color: '#FFFFFF' }}>Three ERP Platforms. One Goal: Better Business Operations.</h2>
          <p className="erp-section-desc">
            We engineer web-native, database-centric Oracle APEX, and native desktop systems built to fit your operational environment.
          </p>
        </header>

        <div className="erp-platforms-grid">
          {erpPlatforms.map((platform, pIdx) => (
            <div key={platform.id} className="erp-platform-card" id={platform.id}>
              <div>
                <div className="platform-card-header-row">
                  <div className="platform-icon-avatar">
                    {platformIcons[pIdx]}
                  </div>
                  <span className="platform-tagline">{platform.tagline}</span>
                </div>

                <h3 className="platform-title">{platform.name}</h3>
                <p className="platform-desc">{platform.desc}</p>

                {/* Technologies */}
                <div className="platform-tech-box">
                  <span className="tech-box-label">Core Tech Stack:</span>
                  <div className="tech-pills">
                    {platform.techExamples.slice(0, 5).map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div className="platform-capabilities">
                  <span className="cap-label">Engineered Capabilities:</span>
                  <ul className="platform-cap-list">
                    {platform.capabilities.slice(0, 4).map((cap, i) => (
                      <li key={i} className="platform-cap-item">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--erp-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="platform-best-for">
                  <strong>Best For:</strong>
                  <p>{platform.bestFor}</p>
                </div>

                <div className="platform-card-footer">
                  <Link href={platform.ctaLink} className="erp-btn erp-btn-outline-accent" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>{platform.ctaText}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
