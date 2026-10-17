'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TopNotice from '../../../components/TopNotice';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';
import ConsultationContact from '../../../components/ConsultationContact';

import {
  mobileHeroStats,
  mobileArchitectureFeatures,
  mobileInteractivePlatforms,
  mobileProcessLifecycle,
  mobileFaqs
} from '../../../data/mobileAppData';

export default function MobileAppDevelopmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeScreenTab, setActiveScreenTab] = useState('telemetry');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [notifIndex, setNotifIndex] = useState(0);
  const [notifVisible, setNotifVisible] = useState(true);

  const notifications = [
    {
      app: 'Valtix Ops',
      icon: '🛡️',
      iconBg: '#1B3835',
      title: 'Face ID Verified',
      body: 'Secure enclave unlocked · TLS 1.3 active',
      time: 'now',
      accent: '#10B981',
    },
    {
      app: 'SQLite Sync',
      icon: '⚡',
      iconBg: '#1D3557',
      title: '1,280 Records Synced',
      body: 'Offline queue flushed · 18ms latency',
      time: '1m ago',
      accent: '#3B82F6',
    },
    {
      app: 'Field Tracker',
      icon: '📍',
      iconBg: '#3B1F2B',
      title: 'Driver Arrived at Zone 4',
      body: 'Geofence trigger · Auto-logged to ERP',
      time: '2m ago',
      accent: '#F59E0B',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(Math.max(window.scrollY / 700, 0), 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cycle Apple-style notifications: show → pause 2.5s → hide → next
  useEffect(() => {
    let showTimer, hideTimer;
    const cycle = () => {
      setNotifVisible(true);
      hideTimer = setTimeout(() => {
        setNotifVisible(false);
        showTimer = setTimeout(() => {
          setNotifIndex((prev) => (prev + 1) % notifications.length);
          cycle();
        }, 600);
      }, 2800);
    };
    const init = setTimeout(cycle, 1200);
    return () => { clearTimeout(init); clearTimeout(showTimer); clearTimeout(hideTimer); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaqIndex((prev) => (prev === idx ? -1 : idx));
  };

  const featureIcons = {
    offline: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" /><path d="m8 17 4 4 4-4" />
      </svg>
    ),
    shield: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    bell: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
    hardware: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    )
  };

  return (
    <>
      <TopNotice />
      <Navbar />

      <main className="mobile-app-page-main" id="mobile-app-main">

        {/* ============================================================
            1. HERO SECTION: Executive Split with Interactive Phone UI
            ============================================================ */}
        <section className="mobile-hero-executive">
          <div className="mobile-hero-mesh" aria-hidden="true" />

          <div className="mobile-container">
            <div className="mobile-hero-grid">

              {/* Left Column: Positioning & CTAs */}
              <div className="mobile-hero-left">
                <div className="mobile-chip-pill">
                  <span className="chip-tag">ENTERPRISE MOBILE</span>
                  <span className="chip-text">iOS &amp; Android Engineering</span>
                </div>

                <h1 className="mobile-hero-headline">
                  Native Mobile Apps <br />
                  <span className="mobile-headline-accent">Engineered for Real Business Operations.</span>
                </h1>

                <p className="mobile-hero-lead">
                  Put your business directly into the hands of your clients and field teams. Fluid 60fps applications with offline-first SQLite sync, hardware biometric security, and direct integration into your core ERP database.
                </p>

                <div className="mobile-hero-actions">
                  <Link href="#contact" className="mobile-btn-primary">
                    <span>Discuss Your App Scope</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                  <Link href="#platforms" className="mobile-btn-secondary">
                    <span>Explore Tech Stacks</span>
                  </Link>
                </div>

                {/* Deployment Destinations Strip */}
                <div className="mobile-stores-row">
                  <span className="stores-label">PUBLISH DIRECT TO:</span>

                  {/* Apple App Store */}
                  <div className="store-platform-pill">
                    <svg viewBox="0 0 384 512" width="16" height="16" fill="currentColor">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.1-44.6-35.9-2.8-74.3 22.7-93.1 22.7-18.9 0-46.5-21-79.9-20.5-40.9 .4-77.7 23.7-99 60.8-43.5 75.3-11.1 187.3 31.5 249.2 21.1 30.7 45.4 65.5 78.4 64.3 31.9-1.3 44.1-20.7 82.2-20.7 38 0 49.3 20.7 82.7 20 34.3-.7 55.4-32.8 76.1-63.3 23.9-35.4 33.7-69.8 34.2-71.5-.2-.2-68-26.1-68.8-111.6zM245.9 83.1c17.5-21.2 29.3-50.6 26-79.9-24.8 1-54.6 16.6-73.1 37.7-15.1 17.1-28.7 47.4-24.9 75.8 28.1 2.2 54.5-12.4 72-33.6z" />
                    </svg>
                    <span>Apple App Store (iOS)</span>
                  </div>

                  {/* Google Play */}
                  <div className="store-platform-pill">
                    <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                    </svg>
                    <span>Google Play (Android)</span>
                  </div>
                </div>
              </div>

              {/* Sleek Apple Smartphone Showcase Container with 3D Scroll Depth */}
              <div className="mobile-phone-showcase-wrap">

                {/* Subtle Background Glow behind phone */}
                <div
                  className="phone-back-glow"
                  style={{
                    transform: `scale(${1 + scrollProgress * 0.25})`,
                    opacity: 0.8 + scrollProgress * 0.3
                  }}
                />

                {/* Straight Phone Stage — scroll depth only, no tilt */}
                <div
                  className="phone-straight-stage"
                  style={{
                    transform: `
                        translateY(${scrollProgress * 80}px)
                        scale(${1 - scrollProgress * 0.04})
                      `,
                    transition: 'transform 0.3s cubic-bezier(0.2,0.9,0.3,1)'
                  }}
                >
                  <div className="phone-titanium-outer-chassis">
                    {/* Physical Hardware Buttons */}
                    <div className="phone-btn-volume-up" />
                    <div className="phone-btn-volume-down" />
                    <div className="phone-btn-power" />
                    <div className="phone-btn-action" />

                    <div className="phone-glass-bezel">
                      {/* Glass Gloss Sheen Reflection */}
                      <div className="phone-gloss-glare" />

                      {/* Clean Minimalist Dynamic Island */}
                      <div className="phone-dynamic-island">
                        <span className="island-camera-lens" />
                        <span className="island-sensor-dot" />
                      </div>

                      {/* Clean iOS Screen Canvas */}
                      <div className="phone-screen-content">
                        {/* Interactive Demo View Selector inside Phone */}
                        <div className="phone-internal-switch">
                          <button
                            type="button"
                            className={`screen-switch-btn ${activeScreenTab === 'dashboard' ? 'active' : ''}`}
                            onClick={() => setActiveScreenTab('dashboard')}
                          >
                            Live Ops
                          </button>
                          <button
                            type="button"
                            className={`screen-switch-btn ${activeScreenTab === 'telemetry' ? 'active' : ''}`}
                            onClick={() => setActiveScreenTab('telemetry')}
                          >
                            Telemetry
                          </button>
                          <button
                            type="button"
                            className={`screen-switch-btn ${activeScreenTab === 'hardware' ? 'active' : ''}`}
                            onClick={() => setActiveScreenTab('hardware')}
                          >
                            Hardware
                          </button>
                        </div>

                        {/* ── Apple iOS Notification Banner ── */}
                        <div
                          className="ios-notif-banner"
                          style={{
                            transform: notifVisible ? 'translateY(0) scale(1)' : 'translateY(-110%) scale(0.96)',
                            opacity: notifVisible ? 1 : 0,
                            transition: notifVisible
                              ? 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease'
                              : 'transform 0.3s cubic-bezier(0.4,0,1,1), opacity 0.25s ease',
                          }}
                        >
                          <span
                            className="ios-notif-icon"
                            style={{ background: notifications[notifIndex].iconBg }}
                          >
                            {notifications[notifIndex].icon}
                          </span>
                          <div className="ios-notif-text">
                            <div className="ios-notif-header">
                              <span className="ios-notif-app">{notifications[notifIndex].app}</span>
                              <span className="ios-notif-time">{notifications[notifIndex].time}</span>
                            </div>
                            <span className="ios-notif-title">{notifications[notifIndex].title}</span>
                            <span className="ios-notif-body">{notifications[notifIndex].body}</span>
                          </div>
                          <span
                            className="ios-notif-dot"
                            style={{ background: notifications[notifIndex].accent }}
                          />
                        </div>

                        {/* Dynamic Screen Tab Content */}
                        {activeScreenTab === 'dashboard' && (
                          <>
                            {/* KPI Widget */}
                            <div className="app-kpi-card">
                              <span className="kpi-label">Real-time Order Throughput</span>
                              <div className="kpi-value-row">
                                <span className="kpi-main-val">1,280 Units</span>
                                <span className="kpi-change-pill">+34.8% Sync</span>
                              </div>
                              <div className="kpi-progress-track">
                                <div className="kpi-progress-bar" style={{ width: '84%' }} />
                              </div>
                            </div>

                            {/* Quick Action Rows */}
                            <div className="app-action-list">
                              <div className="app-action-item">
                                <div className="action-icon-circle">
                                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" />
                                  </svg>
                                </div>
                                <div className="action-details">
                                  <span className="action-title">Scan Warehouse QR Code</span>
                                  <span className="action-sub">Camera hardware scanner API (0.12s)</span>
                                </div>
                                <span className="action-status-badge">Ready</span>
                              </div>

                              <div className="app-action-item">
                                <div className="action-icon-circle" style={{ background: 'rgba(52, 211, 153, 0.2)', color: '#34D399' }}>
                                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                  </svg>
                                </div>
                                <div className="action-details">
                                  <span className="action-title">Instant Client Invoicing</span>
                                  <span className="action-sub">Direct ERP balance ledger write</span>
                                </div>
                                <span className="action-status-badge green">Synced</span>
                              </div>

                              <div className="app-action-item">
                                <div className="action-icon-circle" style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38BDF8' }}>
                                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 14 14" />
                                  </svg>
                                </div>
                                <div className="action-details">
                                  <span className="action-title">Driver Geofence Route</span>
                                  <span className="action-sub">Native GPS background daemon</span>
                                </div>
                                <span className="action-status-badge blue">Tracking</span>
                              </div>
                            </div>
                          </>
                        )}

                        {activeScreenTab === 'telemetry' && (
                          <div className="screen-telemetry-body">
                            <div className="telemetry-stat-box">
                              <span className="telemetry-label">Frame Render Rate</span>
                              <span className="telemetry-number">59.94 FPS</span>
                              <span className="telemetry-sub">Native Skia & Metal pipeline</span>
                            </div>

                            <div className="telemetry-chart-visual">
                              <div className="chart-bar" style={{ height: '40%' }} />
                              <div className="chart-bar" style={{ height: '65%' }} />
                              <div className="chart-bar" style={{ height: '55%' }} />
                              <div className="chart-bar" style={{ height: '80%' }} />
                              <div className="chart-bar" style={{ height: '70%' }} />
                              <div className="chart-bar" style={{ height: '95%' }} />
                              <div className="chart-bar active" style={{ height: '100%' }} />
                            </div>

                            <div className="telemetry-metrics-grid">
                              <div className="t-metric-cell">
                                <span>Memory Peak</span>
                                <strong>42 MB</strong>
                              </div>
                              <div className="t-metric-cell">
                                <span>Network Sync</span>
                                <strong>18 ms</strong>
                              </div>
                              <div className="t-metric-cell">
                                <span>Crash Free</span>
                                <strong>99.96%</strong>
                              </div>
                              <div className="t-metric-cell">
                                <span>Cold Start</span>
                                <strong>0.82s</strong>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeScreenTab === 'hardware' && (
                          <div className="screen-hardware-body">
                            <div className="hardware-item-row">
                              <div className="hw-dot green" />
                              <div className="hw-info">
                                <strong>Secure Enclave Auth</strong>
                                <span>Biometric TouchID / FaceID ready</span>
                              </div>
                              <span className="hw-chip">Active</span>
                            </div>

                            <div className="hardware-item-row">
                              <div className="hw-dot blue" />
                              <div className="hw-info">
                                <strong>Bluetooth LE Peripherals</strong>
                                <span>Zebra Barcode & Thermal Printer</span>
                              </div>
                              <span className="hw-chip">Paired</span>
                            </div>

                            <div className="hardware-item-row">
                              <div className="hw-dot purple" />
                              <div className="hw-info">
                                <strong>SQLite High-Concurrency DB</strong>
                                <span>WAL-mode offline writes</span>
                              </div>
                              <span className="hw-chip">100% Sync</span>
                            </div>

                            <div className="hardware-item-row">
                              <div className="hw-dot orange" />
                              <div className="hw-info">
                                <strong>APNs / FCM Push Engine</strong>
                                <span>Instant dispatch broadcast triggers</span>
                              </div>
                              <span className="hw-chip">Listening</span>
                            </div>
                          </div>
                        )}

                        {/* Bottom App Dock */}
                        <div className="app-bottom-dock">
                          <button
                            type="button"
                            className={`dock-item ${activeScreenTab === 'dashboard' ? 'active' : ''}`}
                            onClick={() => setActiveScreenTab('dashboard')}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                            <span>Ops</span>
                          </button>
                          <button
                            type="button"
                            className={`dock-item ${activeScreenTab === 'telemetry' ? 'active' : ''}`}
                            onClick={() => setActiveScreenTab('telemetry')}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                            <span>Stats</span>
                          </button>
                          <button
                            type="button"
                            className={`dock-item ${activeScreenTab === 'hardware' ? 'active' : ''}`}
                            onClick={() => setActiveScreenTab('hardware')}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            <span>Hardware</span>
                          </button>
                          <div className="dock-item">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            <span>Profile</span>
                          </div>
                        </div>

                        {/* Home Indicator Bar */}
                        <div className="phone-home-indicator" />

                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Proof Metrics Bar */}
            <div className="mobile-stats-ribbon">
              {mobileHeroStats.map((stat, idx) => (
                <div key={idx} className="stat-metric-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-sub">{stat.sub}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ============================================================
            2. ARCHITECTURE PILLARS (DEEP FOREST VALTIX SLATE SECTION)
            ============================================================ */}
        <section className="mobile-section mobile-section-dark" id="capabilities">
          <div className="mobile-container">
            <header className="mobile-section-header">
              <span className="mobile-eyebrow">ENGINEERING PILLARS</span>
              <h2 className="mobile-section-title">Built for Performance, Not Generic Templates.</h2>
              <p className="mobile-section-desc">
                We develop mission-critical mobile software capable of operating reliably on low-battery field days, in underground parking lots, and through high-frequency transactions.
              </p>
            </header>

            <div className="mobile-features-grid">
              {mobileArchitectureFeatures.map((feat) => (
                <div key={feat.id} className="mobile-feature-card">
                  <div>
                    <div className="feature-card-top">
                      <div className="feature-icon-box">
                        {featureIcons[feat.icon]}
                      </div>
                      <span className="feature-badge-pill">{feat.badge}</span>
                    </div>

                    <h3 className="feature-card-title">{feat.title}</h3>
                    <span className="feature-tagline">{feat.tagline}</span>
                    <p className="feature-card-desc">{feat.desc}</p>
                  </div>

                  <div className="feature-pills-row">
                    {feat.metrics.map((m, i) => (
                      <span key={i} className="feature-tag-chip">{m}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            3. PLATFORM & FRAMEWORK COMPARISON
            ============================================================ */}
        <section className="mobile-section mobile-section-light" id="platforms">
          <div className="mobile-container">
            <header className="mobile-section-header">
              <span className="mobile-eyebrow">TECHNOLOGY EVALUATION</span>
              <h2 className="mobile-section-title">Choose the Right Mobile Stack for Your Goal.</h2>
              <p className="mobile-section-desc">
                Whether you need rapid market deployment with React Native or raw native Swift/Kotlin for custom sensor hardware, we recommend the optimal technology stack.
              </p>
            </header>

            <div className="mobile-platforms-grid">
              {mobileInteractivePlatforms.map((plat) => (
                <div
                  key={plat.id}
                  className={`mobile-platform-card ${plat.id === 'react-native' ? 'recommended-card' : ''}`}
                  onMouseEnter={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const size = Math.max(rect.width, rect.height) * 2.4;

                    const oldRipples = card.querySelectorAll('.card-ripple-wave');
                    oldRipples.forEach((r) => r.remove());

                    const ripple = document.createElement('span');
                    ripple.className = 'card-ripple-wave ripple-enter';
                    ripple.style.width = `${size}px`;
                    ripple.style.height = `${size}px`;
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                    card.appendChild(ripple);
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const activeRipples = card.querySelectorAll('.card-ripple-wave.ripple-enter');
                    activeRipples.forEach((r) => {
                      r.classList.remove('ripple-enter');
                      r.classList.add('ripple-exit');
                      r.style.transformOrigin = `${x}px ${y}px`;
                      setTimeout(() => r.remove(), 600);
                    });
                  }}
                >
                  <div className="card-content-wrap">
                    <span className="platform-badge-tag">{plat.badge}</span>
                    <h3 className="platform-title-text">{plat.name}</h3>
                    <span className="platform-timeframe">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                      {plat.timeframe}
                    </span>
                    <p className="platform-lead-text">{plat.lead}</p>

                    <ul className="platform-bullets-list">
                      {plat.highlights.map((h, idx) => (
                        <li key={idx}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="platform-best-box">
                    <strong>Optimal Business Fit:</strong>
                    <span>{plat.bestFor}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            4. DEVELOPMENT LIFECYCLE (5 STRUCTURED MILESTONES)
            ============================================================ */}
        <section className="mobile-section mobile-section-light" style={{ borderTop: '1px solid var(--border)' }} id="process">
          <div className="mobile-container">
            <header className="mobile-section-header">
              <span className="mobile-eyebrow">ENGINEERING LIFECYCLE</span>
              <h2 className="mobile-section-title">From Figma Wireframes to Store Launch.</h2>
              <p className="mobile-section-desc">
                A milestone-governed path that eliminates guesswork and delivers certified, production-ready binaries directly into your developer consoles.
              </p>
            </header>

            <div className="mobile-lifecycle-grid">
              {mobileProcessLifecycle.map((step, idx) => (
                <div key={idx} className="lifecycle-step-card">
                  <div>
                    <div className="step-card-header">
                      <span className="step-number-text">{step.step}</span>
                      <span className="step-phase-pill">{step.phase}</span>
                    </div>
                    <h3 className="step-title-text">{step.title}</h3>
                    <p className="step-desc-text">{step.desc}</p>
                  </div>

                  <div className="step-deliverable-strip">
                    <strong>Key Deliverable:</strong>
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            5. FAQS ACCORDION
            ============================================================ */}
        <section className="mobile-section mobile-section-light" style={{ borderTop: '1px solid var(--border)' }} id="faqs">
          <div className="mobile-container">
            <header className="mobile-section-header">
              <span className="mobile-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="mobile-section-title">Everything You Need to Know Before Building.</h2>
            </header>

            <div className="mobile-faq-container">
              {mobileFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;

                return (
                  <div key={idx} className={`mobile-faq-item ${isOpen ? 'faq-open' : ''}`}>
                    <button
                      type="button"
                      className="mobile-faq-trigger"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-title-left">
                        <span className="faq-idx-num">{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                        <span className="faq-query-text">{faq.question}</span>
                      </div>
                      <span className="faq-expand-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-content-wrap">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            6. GLOBAL CONSULTATION CONTACT FORM
            ============================================================ */}
        <div id="contact">
          <ConsultationContact
            initialService="Custom Mobile App Development"
            initialNotes="Inquiry regarding iOS and Android mobile app development for enterprise operations."
          />
        </div>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
