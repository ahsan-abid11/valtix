'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section" id="home" ref={sectionRef}>
      {/* Dubai Skyline Background */}
      <div className="hero-bg-layer" aria-hidden="true"></div>
      <div className="hero-scrim-layer" aria-hidden="true"></div>

      {/* Decorative grid pattern */}
      <div className="hero-grid-pattern" aria-hidden="true"></div>

      <div className="wrapper hero-content-center">
        <div className={`hero-text-block ${visible ? 'hero-text-block--visible' : ''}`}>

          {/* Huge Prominent Brand Name */}
          <div className="hero-brand-display-title">
            VALTIX SOLUTIONS
          </div>

          {/* Main Dominant Headline */}
          <h1 className="display-title hero-title">
            Numbers You Can Trust. <span className="hero-title-gradient">Business You Can Grow.</span>
          </h1>

          {/* Trusted Partner Subdeck */}
          <p className="hero-partner-subdeck">
            Your Trusted Partner for Remote Accounting &amp; Bookkeeping
          </p>

          {/* Value Proposition Description */}
          <p className="hero-intro">
            We provide reliable and cost-effective remote accounting, bookkeeping, VAT filing, and corporate tax services for businesses in the <strong>UAE</strong> — keeping your financial records audit-ready so you can focus entirely on growth.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <span>Get Free 20-Min Consultation</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#packages" className="btn btn-secondary">Explore Packages</a>
          </div>
        </div>

        {/* Trust bar — stat cards */}
        <div className={`hero-stats-row ${visible ? 'hero-stats-row--visible' : ''}`}>
          <div className="hero-stat-card">
            <div className="hero-stat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div>
              <strong>100% FTA Compliant</strong>
              <span>Federal Tax Authority certified</span>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="hero-stat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div>
              <strong>Read-Only Protocol</strong>
              <span>Zero access to your funds</span>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="hero-stat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <strong>UAE Timezone</strong>
              <span>Mon–Fri, 9 AM – 6 PM GST</span>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="hero-stat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div>
              <strong>Zero Overhead</strong>
              <span>No visa, medical or gratuity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
