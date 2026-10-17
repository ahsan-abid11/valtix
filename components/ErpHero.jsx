'use client';

import React from 'react';
import Link from 'next/link';

export default function ErpHero() {
  return (
    <section className="erp-hero-executive" id="hero">
      {/* Subtle modern top lighting */}
      <div className="hero-mesh-background" aria-hidden="true" />

      <div className="erp-container">
        <div className="erp-hero-split">
          
          {/* Left Column: Core Positioning & CTAs */}
          <div className="erp-hero-left">
            <div className="hero-eyebrow-chip">
              <span className="chip-badge">ENTERPRISE ENGINEERING</span>
              <span className="chip-text">Custom ERP Solutions</span>
            </div>

            <h1 className="hero-display-headline">
              Custom ERP Software <br />
              <span className="hero-highlight-text">That Works The Way Your Business Works.</span>
            </h1>

            <p className="hero-lead-paragraph">
              Unify your essential operations with purpose-built business software for inventory, finance, production, and workforce management. Engineered around your exact workflows, infrastructure, and commercial goals.
            </p>

            <div className="hero-action-cluster">
              <Link href="#contact" className="btn-hero-primary">
                <span>Discuss Your Project</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="#platforms" className="btn-hero-secondary">
                <span>Explore Platforms</span>
              </Link>
            </div>

            {/* Contractual Commitments */}
            <div className="hero-commitments-list">
              <div className="commitment-bullet">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
                </svg>
                <span>Full Source-Code &amp; Database IP Ownership</span>
              </div>
              <div className="commitment-bullet">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <span>Flexible Cloud VPS or On-Premise Deployment</span>
              </div>
              <div className="commitment-bullet">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Zero Per-User Monthly Subscription Seats</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Value Architecture Showcase */}
          <div className="erp-hero-right">
            <div className="hero-capability-showcase-card">
              <div className="showcase-card-header">
                <div className="header-meta">
                  <span className="meta-tag">ENGINEERING PILLARS</span>
                  <h3 className="meta-title">Tailored Core Capabilities</h3>
                </div>
                <div className="header-badge">Milestone Delivery</div>
              </div>

              <div className="showcase-features-stack">
                <div className="feature-stack-item">
                  <div className="stack-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
                    </svg>
                  </div>
                  <div className="stack-info">
                    <h4>Multi-Location Inventory &amp; Stores</h4>
                    <p>Live bin allocation, serial tracking, and automated purchase reorders.</p>
                  </div>
                </div>

                <div className="feature-stack-item">
                  <div className="stack-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  </div>
                  <div className="stack-info">
                    <h4>Finance &amp; Statutory General Ledger</h4>
                    <p>Three-way AP matching, AR debtor aging, and instant P&amp;L balance sheets.</p>
                  </div>
                </div>

                <div className="feature-stack-item">
                  <div className="stack-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
                    </svg>
                  </div>
                  <div className="stack-info">
                    <h4>Manufacturing &amp; Production BOMs</h4>
                    <p>Assembly routing, component scrap tracking, and live WIP costing.</p>
                  </div>
                </div>

                <div className="feature-stack-item">
                  <div className="stack-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                  </div>
                  <div className="stack-info">
                    <h4>Executive KPIs &amp; Audit Governance</h4>
                    <p>Role-based screen access, immutable logs, and scheduled board exports.</p>
                  </div>
                </div>
              </div>

              {/* Quick Consult Strip inside card */}
              <div className="showcase-card-footer">
                <div className="consult-badge">
                  <span className="dot" />
                  <span>Senior Technical Architect Review</span>
                </div>
                <Link href="#contact" className="consult-link">
                  Request Scope &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Enterprise Tech Platforms Strip with Authentic Logos */}
        <div className="erp-tech-ecosystem-bar">
          <div className="ecosystem-label">
            <span>ENGINEERED WITH MODERN DATABASES &amp; ENTERPRISE FRAMEWORKS:</span>
          </div>

          <div className="ecosystem-logos-row">
            {/* Oracle */}
            <div className="ecosystem-pill">
              <svg width="24" height="15" viewBox="0 0 100 60" fill="none" aria-hidden="true">
                <path d="M30 6C13.4 6 0 16.7 0 30s13.4 24 30 24h40c16.6 0 30-10.7 30-24S86.6 6 70 6H30zm0 10h40c11.1 0 20 6.3 20 14s-8.9 14-20 14H30c-11.1 0-20-6.3-20-14s8.9-14 20-14z" fill="#F80000" />
              </svg>
              <div className="pill-copy">
                <strong>Oracle</strong>
                <span>Database &amp; APEX</span>
              </div>
            </div>

            {/* PostgreSQL */}
            <div className="ecosystem-pill">
              <svg width="20" height="21" viewBox="0 0 256 267" fill="none" aria-hidden="true">
                <path d="M127.3 0C84 0 46 25.1 27.5 63.8c-1.3 2.7-.2 5.9 2.5 7.3 2.7 1.4 6 .3 7.4-2.4C54.1 33.6 89.2 10.4 127.3 10.4c63.6 0 115.3 51.7 115.3 115.3 0 63.6-51.7 115.3-115.3 115.3-33.1 0-64.2-14.3-85.3-39.1-1.9-2.2-5.2-2.5-7.5-.6-2.2 1.9-2.5 5.2-.6 7.5 23.3 27.3 57.5 43 93.4 43 70 0 126.7-56.7 126.7-126.1C254 56.7 197.3 0 127.3 0z" fill="#336791"/>
                <path d="M125.7 35.8c-32.9 0-59.5 26.6-59.5 59.5 0 17.6 7.6 33.5 19.8 44.5-4.2 11.2-13.6 19.9-25.2 23.8-2.8.9-4.3 4-3.4 6.8.9 2.8 4 4.3 6.8 3.4 14.5-4.9 26.2-15.6 31.6-29.5 9.1 6.8 20.4 10.9 32.7 10.9 32.9 0 59.5-26.6 59.5-59.5 0-32.9-26.6-59.9-59.5-59.9zm0 108.6c-27.1 0-49.1-22-49.1-49.1s22-49.1 49.1-49.1 49.1 22 49.1 49.1-22 49.1-49.1 49.1z" fill="#336791"/>
              </svg>
              <div className="pill-copy">
                <strong>PostgreSQL</strong>
                <span>&amp; SQL Server</span>
              </div>
            </div>

            {/* React */}
            <div className="ecosystem-pill">
              <svg width="22" height="20" viewBox="0 0 115 102" fill="none" aria-hidden="true">
                <path d="M57.5 14.1c17.7 0 32.1 16.5 32.1 36.9s-14.4 36.9-32.1 36.9-32.1-16.5-32.1-36.9 14.4-36.9 32.1-36.9m0-6.1c-21.1 0-38.2 19.3-38.2 43s17.1 43 38.2 43 38.2-19.3 38.2-43-17.1-43-38.2-43z" fill="#00D8FF"/>
                <ellipse cx="57.5" cy="51" rx="10.8" ry="10.8" fill="#00D8FF"/>
                <path d="M25.6 32.6c8.9-15.3 26.9-21.7 44.5-11.5s24.6 31.2 15.8 46.5-26.9 21.7-44.5 11.5c-17.7-10.2-24.7-31.2-15.8-46.5m-5.3-3c-10.5 18.3-2.1 43.4 18.9 55.4 20.9 12.1 46.3 4.5 56.9-13.7s2.1-43.4-18.9-55.4c-20.9-12.2-46.4-4.6-56.9 13.7z" fill="#00D8FF"/>
              </svg>
              <div className="pill-copy">
                <strong>React &amp; Next.js</strong>
                <span>Browser Web ERP</span>
              </div>
            </div>

            {/* .NET */}
            <div className="ecosystem-pill">
              <svg width="20" height="20" viewBox="0 0 256 256" fill="none" aria-hidden="true">
                <rect width="256" height="256" rx="50" fill="#512BD4"/>
                <path d="M68 84h24v88H68V84zm54 0h22l34 54V84h24v88h-22l-34-54v54h-24V84z" fill="#FFFFFF"/>
              </svg>
              <div className="pill-copy">
                <strong>.NET &amp; C#</strong>
                <span>Native Desktop Client</span>
              </div>
            </div>

            {/* REST API */}
            <div className="ecosystem-pill">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9"/>
                <path d="m8 12 3 3 5-5"/>
              </svg>
              <div className="pill-copy">
                <strong>REST &amp; ORDS</strong>
                <span>API Automation</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
