'use client';

import React, { useRef, useState } from 'react';

/**
 * Realistic 3D Interactive Mockup Centerpiece
 * - Natural perspective, ambient contact shadows, and realistic multi-layer depth
 * - Gentle pointer-responsive 3D tilt with smooth damping and spring-back
 * - Believable interface components (live metrics ticker, interactive tabs, responsive preview)
 */
export default function RealisticWebsiteMockup() {
  const containerRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'Corporate Portal', status: 'Live', speed: '99/100', visitors: '14.2k/mo' },
    { name: 'Next.js App', status: 'Optimal', speed: '98/100', visitors: '28.6k/mo' },
    { name: 'E-Commerce', status: 'Active', speed: '96/100', visitors: '42.1k/mo' }
  ];

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates (-1 to 1)
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Elegant, restrained tilt limits (max 5.5deg)
    const tiltX = -normY * 5.5;
    const tiltY = normX * 6.5;

    setRotate({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      className="wd-mockup-wrapper"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Ambient Ground Shadow */}
      <div
        className="wd-mockup-ambient-shadow"
        style={{
          transform: isHovered
            ? `scale(${1 + Math.abs(rotate.y) * 0.01}) translateY(18px) rotate(${rotate.y * 0.4}deg)`
            : 'scale(1) translateY(10px) rotate(0deg)',
          opacity: isHovered ? 0.35 : 0.22
        }}
      />

      {/* 3D Perspective Stage */}
      <div
        className="wd-mockup-stage"
        style={{
          transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: isHovered ? 'transform 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Main Browser Window Frame */}
        <div className="wd-browser-frame">
          {/* Subtle directional light reflex across glass */}
          <div
            className="wd-surface-sheen"
            style={{
              opacity: isHovered ? 0.6 : 0.25,
              transform: `translate(${rotate.y * 8}px, ${rotate.x * 6}px)`
            }}
          />

          {/* Browser Chrome Header */}
          <div className="wd-browser-bar">
            <div className="wd-browser-dots" aria-hidden="true">
              <span className="dot-close"></span>
              <span className="dot-min"></span>
              <span className="dot-max"></span>
            </div>

            <div className="wd-browser-address-bar">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="wd-lock-icon">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="wd-address-host">valtixsolutions.com</span>
              <span className="wd-address-path">/services/web-designing</span>
            </div>

            <div className="wd-browser-meta">
              <span className="wd-live-pill">
                <span className="wd-pulse-indicator"></span>
                <span>Production</span>
              </span>
            </div>
          </div>

          {/* Viewport: Layered Website Experience */}
          <div className="wd-browser-viewport">
            {/* Layer 1: Simulated Website Navigation */}
            <div className="wd-viewport-nav">
              <div className="wd-vnav-brand">
                <span className="wd-vnav-logo-mark">V</span>
                <span className="wd-vnav-logo-text">VALTIX STUDIO</span>
              </div>

              {/* Interactive Tabs within the Mockup */}
              <div className="wd-vnav-tabs">
                {tabs.map((tab, idx) => (
                  <button
                    key={tab.name}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`wd-vnav-tab ${activeTab === idx ? 'is-active' : ''}`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              <div className="wd-vnav-cta">
                <span className="wd-status-dot"></span>
                <span>AED Ready</span>
              </div>
            </div>

            {/* Layer 2: Hero Canvas inside the preview with floating depth cards */}
            <div className="wd-viewport-content">
              <div className="wd-vc-headline-group">
                <div className="wd-vc-tag">
                  <span className="wd-vc-bullet"></span>
                  Next.js 14 • React SSR Architecture
                </div>
                <h3 className="wd-vc-title">
                  Engineered for Performance & High-Ticket Trust
                </h3>
                <p className="wd-vc-subtitle">
                  Precision digital craftsmanship built exclusively with bespoke code — zero page builders, zero template bloat.
                </p>
              </div>

              {/* Layer 3: Interactive Parallax Floating Cards */}
              <div
                className="wd-vc-metrics-row"
                style={{
                  transform: `translateZ(26px) translate(${rotate.y * -1.8}px, ${rotate.x * -1.4}px)`,
                  transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.5s ease-out'
                }}
              >
                {/* Metric Card 1: Core Web Vitals */}
                <div className="wd-metric-chip">
                  <div className="wd-metric-chip-icon speed">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <div>
                    <span className="wd-chip-label">Lighthouse Score</span>
                    <strong className="wd-chip-value">{tabs[activeTab].speed}</strong>
                  </div>
                </div>

                {/* Metric Card 2: TTFB Edge Performance */}
                <div className="wd-metric-chip">
                  <div className="wd-metric-chip-icon ping">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <span className="wd-chip-label">UAE Edge Ping</span>
                    <strong className="wd-chip-value">18ms TTFB</strong>
                  </div>
                </div>

                {/* Metric Card 3: Code Ownership */}
                <div className="wd-metric-chip">
                  <div className="wd-metric-chip-icon repo">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </div>
                  <div>
                    <span className="wd-chip-label">Ownership</span>
                    <strong className="wd-chip-value">100% IP Handover</strong>
                  </div>
                </div>
              </div>

              {/* Layer 4: Floating Code Inspector Badge */}
              <div
                className="wd-code-badge"
                style={{
                  transform: `translateZ(38px) translate(${rotate.y * -3}px, ${rotate.x * -2.4}px)`,
                  transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.5s ease-out'
                }}
              >
                <div className="wd-code-badge-header">
                  <span className="wd-code-dot green"></span>
                  <span>next.config.mjs</span>
                </div>
                <div className="wd-code-badge-body">
                  <code>output: &apos;standalone&apos;,</code>
                  <code>compress: true,</code>
                  <code>reactStrictMode: true</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
