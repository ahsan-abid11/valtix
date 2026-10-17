'use client';

import React, { useState } from 'react';

/**
 * Interactive Design Architecture Lab
 * A tactile, creative centerpiece demonstrating web craftsmanship:
 * - Live design tokens control (Palette / Typography / Breakpoints / Speed)
 * - Layered Glass Inspector & Architecture Telemetry
 * - Code Output Terminal preview
 * - Responsive pointer tilt with specular highlight
 */
export default function InteractiveDesignLab() {
  const [activeMode, setActiveMode] = useState('design'); // 'design' | 'code' | 'speed'
  const [accentColor, setAccentColor] = useState('#C8502E');
  const [deviceBreakpoint, setDeviceBreakpoint] = useState('desktop');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const colors = [
    { label: 'Valtix Terracotta', hex: '#C8502E' },
    { label: 'Emerald Mint', hex: '#10B981' },
    { label: 'Electric Cobalt', hex: '#3B82F6' },
    { label: 'Imperial Amber', hex: '#F59E0B' }
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x: x * 6, y: -y * 6 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      className="wd-lab-wrapper"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Ambient Ground Glow */}
      <div
        className="wd-lab-ambient-glow"
        style={{
          background: `radial-gradient(circle, ${accentColor}33 0%, rgba(31,61,58,0.2) 60%, transparent 80%)`,
          transform: isHovered ? 'scale(1.08)' : 'scale(1)'
        }}
      />

      {/* 3D Tilted Interactive Console */}
      <div
        className="wd-lab-stage"
        style={{
          transform: `perspective(1100px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
          transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="wd-lab-chassis">
          
          {/* Header Bar */}
          <div className="wd-lab-header">
            <div className="wd-lab-controls-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="wd-lab-tag">VALTIX DESIGN ENGINE v2.4</span>
            </div>

            {/* Mode Selector Tabs */}
            <div className="wd-lab-mode-switch">
              <button
                type="button"
                className={`lab-switch-btn ${activeMode === 'design' ? 'is-active' : ''}`}
                onClick={() => setActiveMode('design')}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
                <span>Design System</span>
              </button>
              <button
                type="button"
                className={`lab-switch-btn ${activeMode === 'code' ? 'is-active' : ''}`}
                onClick={() => setActiveMode('code')}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
                <span>Code Stack</span>
              </button>
              <button
                type="button"
                className={`lab-switch-btn ${activeMode === 'speed' ? 'is-active' : ''}`}
                onClick={() => setActiveMode('speed')}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                <span>Audit</span>
              </button>
            </div>
          </div>

          {/* Main Visual Board */}
          <div className="wd-lab-body">

            {/* MODE 1: Interactive Design System Engine */}
            {activeMode === 'design' && (
              <div className="wd-lab-panel design-panel">
                {/* Visual Canvas Simulator */}
                <div className="wd-canvas-stage">
                  <div className="wd-canvas-viewport" data-breakpoint={deviceBreakpoint}>
                    <div className="wd-viewport-hero">
                      <div className="wd-vh-badge" style={{ backgroundColor: `${accentColor}22`, color: accentColor, borderColor: `${accentColor}55` }}>
                        <span className="wd-vh-dot" style={{ backgroundColor: accentColor }} />
                        <span>Interactive Prototype</span>
                      </div>
                      <h4 className="wd-vh-headline">
                        Crafted For <span style={{ color: accentColor }}>Enterprise</span> Credibility
                      </h4>
                      <p className="wd-vh-desc">
                        Responsive layout, bespoke typography tokens, zero drag-and-drop bloat.
                      </p>
                      <div className="wd-vh-cta-group">
                        <button type="button" className="wd-vh-btn primary" style={{ backgroundColor: accentColor }}>
                          Live Preview &rarr;
                        </button>
                        <button type="button" className="wd-vh-btn outline">
                          Figma Source
                        </button>
                      </div>
                    </div>

                    {/* Live Metric Cards Grid */}
                    <div className="wd-canvas-cards">
                      <div className="wd-c-card">
                        <span className="card-label">Breakpoints</span>
                        <strong className="card-val">Fluid CSS clamp()</strong>
                      </div>
                      <div className="wd-c-card">
                        <span className="card-label">Layout Engine</span>
                        <strong className="card-val">CSS Grid + Flex</strong>
                      </div>
                      <div className="wd-c-card">
                        <span className="card-label">Framework</span>
                        <strong className="card-val">Next.js 14 SSR</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Tweak Controls Bar */}
                <div className="wd-lab-toolbar">
                  {/* Accent Swatches */}
                  <div className="wd-tool-group">
                    <span className="tool-title">Brand Accent:</span>
                    <div className="swatch-list">
                      {colors.map((c) => (
                        <button
                          key={c.hex}
                          type="button"
                          className={`swatch-btn ${accentColor === c.hex ? 'is-selected' : ''}`}
                          style={{ backgroundColor: c.hex }}
                          onClick={() => setAccentColor(c.hex)}
                          aria-label={c.label}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Responsive Preview Viewports */}
                  <div className="wd-tool-group">
                    <span className="tool-title">Viewport:</span>
                    <div className="device-buttons">
                      <button
                        type="button"
                        className={`device-btn ${deviceBreakpoint === 'desktop' ? 'active' : ''}`}
                        onClick={() => setDeviceBreakpoint('desktop')}
                      >
                        Desktop
                      </button>
                      <button
                        type="button"
                        className={`device-btn ${deviceBreakpoint === 'tablet' ? 'active' : ''}`}
                        onClick={() => setDeviceBreakpoint('tablet')}
                      >
                        Tablet
                      </button>
                      <button
                        type="button"
                        className={`device-btn ${deviceBreakpoint === 'mobile' ? 'active' : ''}`}
                        onClick={() => setDeviceBreakpoint('mobile')}
                      >
                        Mobile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODE 2: Code Architecture Terminal */}
            {activeMode === 'code' && (
              <div className="wd-lab-panel code-panel">
                <div className="terminal-file-header">
                  <span className="file-name">app/services/web-designing/page.jsx</span>
                  <span className="file-status">Clean Production Build</span>
                </div>
                <pre className="terminal-code">
                  <code>
{`// Valtix Hand-Crafted Production Architecture
import { NextPage } from 'next';
import { HeroSection, DesignMatrix, PerformanceAudit } from '@/components';

export default async function BespokeWebPage() {
  const assets = await getOptimizedMediaAssets();
  
  return (
    <main className="fluid-canvas" data-theme="dark">
      <HeroSection 
        renderMode="SSR" 
        pageSpeedTarget={100} 
        ipOwnership="100% Client Handover" 
      />
      <DesignMatrix sourceFigmaFiles={true} />
    </main>
  );
}`}
                  </code>
                </pre>
                <div className="terminal-badges">
                  <span className="t-badge green">&bull; No WordPress CMS</span>
                  <span className="t-badge blue">&bull; Pure React 18</span>
                  <span className="t-badge orange">&bull; UAE Edge CDN</span>
                </div>
              </div>
            )}

            {/* MODE 3: Speed & Lighthouse Telemetry */}
            {activeMode === 'speed' && (
              <div className="wd-lab-panel speed-panel">
                <div className="speed-header">
                  <div className="score-ring">
                    <span className="score-num">100</span>
                    <span className="score-unit">LIGHTHOUSE</span>
                  </div>
                  <div className="speed-summary">
                    <h4>Zero-Bloat Performance Scorecard</h4>
                    <p>Engineered without bulky templates, third-party trackers, or slow plugins.</p>
                  </div>
                </div>

                <div className="metrics-bars">
                  <div className="m-bar-row">
                    <span className="m-bar-label">First Contentful Paint (FCP)</span>
                    <div className="m-bar-track"><div className="m-bar-fill green" style={{ width: '96%' }} /></div>
                    <span className="m-bar-val">0.4s</span>
                  </div>
                  <div className="m-bar-row">
                    <span className="m-bar-label">Largest Contentful Paint (LCP)</span>
                    <div className="m-bar-track"><div className="m-bar-fill green" style={{ width: '94%' }} /></div>
                    <span className="m-bar-val">0.7s</span>
                  </div>
                  <div className="m-bar-row">
                    <span className="m-bar-label">Cumulative Layout Shift (CLS)</span>
                    <div className="m-bar-track"><div className="m-bar-fill green" style={{ width: '99%' }} /></div>
                    <span className="m-bar-val">0.00</span>
                  </div>
                  <div className="m-bar-row">
                    <span className="m-bar-label">Edge TTFB in Dubai / UAE</span>
                    <div className="m-bar-track"><div className="m-bar-fill orange" style={{ width: '98%' }} /></div>
                    <span className="m-bar-val">18ms</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer Bar / Quality Stamp */}
          <div className="wd-lab-footer">
            <div className="footer-status">
              <span className="status-ping" style={{ backgroundColor: accentColor }} />
              <span>Full Source Code Repository Handed Over Upon Launch</span>
            </div>
            <div className="footer-tag">
              <span>Bespoke Engineering</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
