'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';
import ConsultationContact from '../../../components/ConsultationContact';
import PixelCanvas from '../../../components/PixelCanvas';
import {
  webDesignServices,
  webDesignProcess,
  webDesignPortfolio,
  webDesignFaqs
} from '../../../data/webDesignData';
import './web-design.css';

export default function WebDesigningServicePage() {
  const [activeService, setActiveService] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Smooth Intersection Observer for refined, non-intrusive scroll reveals
  React.useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const revealElements = document.querySelectorAll('.wd-reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Dynamic Typewriter Effect Loop (Client-Focused Business Outcomes)
  const typingWords = React.useMemo(() => [
    'Turns Visitors Into Paying Clients.',
    'Builds Instant Corporate Trust.',
    'Ranks Higher & Generates Inquiries.',
    'Grows Your Revenue In The UAE.'
  ], []);

  const [typedText, setTypedText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  React.useEffect(() => {
    const currentWord = typingWords[wordIdx];
    const typingSpeed = isDeleting ? 45 : 95;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % typingWords.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIdx, typingWords]);
  const heroRef = React.useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, active: false });

  const handleHeroMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y, active: true });
  };

  const handleHeroMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <>
      <Navbar />

      <main className="wd-page" role="main">

        {/* ── Hero (Dark Theme with Interactive Pixel Mouse Hover Effect) ── */}
        <section
          ref={heroRef}
          className="wd-hero wd-hero-dark"
          id="hero"
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
        >
          {/* Interactive Retro-Digital Pixel Grid Canvas in Dark Mode */}
          <PixelCanvas isLight={false} pixelSize={28} />

          <div className="wd-container wd-hero-container">
            <div className="wd-hero-center-layout">
              <h1 className="wd-hero-title-prominent">
                <span className="wd-title-static">We Build Premium Websites That </span>
                <span className="wd-typing-wrapper">
                  <span className="wd-typing-text">{typedText}</span>
                  <span className="wd-cursor-blink">&#9612;</span>
                </span>
              </h1>

              <p className="wd-hero-lead-prominent">
                Stop losing high-value deals to competitors with an outdated website. We design authority-driven websites that win client confidence within 3 seconds, generate qualified leads, and give your business the premium look it deserves.
              </p>

              {/* Action Buttons */}
              <div className="wd-hero-actions-centered">
                <a href="#contact" className="btn btn-primary btn-hero-lg">
                  <span>Get Free Website Strategy Consultation</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
                <a href="#services" className="btn btn-secondary-dark btn-hero-lg">
                  <span>Explore Services</span>
                </a>
              </div>

              {/* Value Architecture Chips Row (Business Benefits Instead of Technical Jargon) */}
              <div className="wd-hero-specs-grid">
                <div className="wd-spec-chip">
                  <div className="wd-spec-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <div className="wd-spec-content">
                    <span className="wd-spec-value">More Inquiries</span>
                    <span className="wd-spec-label">Built to convert traffic into WhatsApp &amp; call leads</span>
                  </div>
                </div>

                <div className="wd-spec-chip">
                  <div className="wd-spec-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
                  </div>
                  <div className="wd-spec-content">
                    <span className="wd-spec-value">High-Ticket Trust</span>
                    <span className="wd-spec-label">Makes your company look enterprise-grade &amp; reliable</span>
                  </div>
                </div>

                <div className="wd-spec-chip">
                  <div className="wd-spec-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                  </div>
                  <div className="wd-spec-content">
                    <span className="wd-spec-value">Instant 0.4s Speed</span>
                    <span className="wd-spec-label">Visitors stay on your site instead of clicking away</span>
                  </div>
                </div>

                <div className="wd-spec-chip">
                  <div className="wd-spec-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10" /><path d="m10 15 5-3-5-3v6z" /></svg>
                  </div>
                  <div className="wd-spec-content">
                    <span className="wd-spec-value">Zero Monthly Lock-in</span>
                    <span className="wd-spec-label">You own 100% of your website, files &amp; domain forever</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Approach (Light Theme Editorial Redesign) ── */}
        <section className="wd-section wd-section-light wd-approach-section wd-reveal-on-scroll" id="approach">
          <div className="wd-container">
            <div className="wd-approach-layout">
              <div className="wd-approach-text">
                <span className="wd-approach-badge">
                  <span className="wd-approach-badge-dot"></span>
                  HOW WE WORK
                </span>
                <h2 className="wd-section-title">
                  Built with code,<br />
                  <span className="wd-text-gradient-approach">not with page builders.</span>
                </h2>
                <p className="wd-body-text">
                  We write every line of code by hand using Next.js and React. There are no WordPress themes, no drag-and-drop builders, and no bloated plugin dependencies that break after updates.
                </p>
                <p className="wd-body-text">
                  The result is a website you fully own — ultra-fast by default, effortless to maintain, and built to scale as your company grows. We hand over the complete, unencrypted source code when the project ships.
                </p>

                <div className="wd-approach-guarantee">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8502E" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>100% Code Ownership &amp; Zero Platform Lock-in</span>
                </div>
              </div>

              <div className="wd-approach-cards-grid">
                <div className="wd-approach-card">
                  <div className="wd-approach-card-header">
                    <span className="wd-point-num-pill">01</span>
                    <span className="wd-point-tag">Handcrafted Architecture</span>
                  </div>
                  <h3>Custom code, no templates</h3>
                  <p>Every single component is written specifically for your layout, brand typography, and business conversion goal. Nothing is borrowed from a generic theme marketplace.</p>
                </div>

                <div className="wd-approach-card">
                  <div className="wd-approach-card-header">
                    <span className="wd-point-num-pill">02</span>
                    <span className="wd-point-tag">Sub-Second Speed</span>
                  </div>
                  <h3>Fast on every connection</h3>
                  <p>Server-rendered Next.js pages, compressed next-gen WebP assets, and CDN edge delivery across UAE nodes. Pages load in under 0.4 seconds.</p>
                </div>

                <div className="wd-approach-card">
                  <div className="wd-approach-card-header">
                    <span className="wd-point-num-pill">03</span>
                    <span className="wd-point-tag">Permanent Freedom</span>
                  </div>
                  <h3>You own everything forever</h3>
                  <p>Complete source code, domain names, hosting accounts, and full tracking analytics. Zero recurring licensing fees, and zero dependency on external plugins.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="wd-section wd-reveal-on-scroll" id="services">
          <div className="wd-container">
            <div className="wd-section-header">
              <p className="wd-label">Services</p>
              <h2 className="wd-section-title">What we can help&nbsp;with.</h2>
              <p className="wd-section-desc">
                Whether you need a new website from scratch, a redesign of something outdated, or ongoing development support — here is what we offer.
              </p>
            </div>

            <div className="wd-services-grid">
              {webDesignServices.map((service, idx) => {
                // Bespoke Vector Icon for each service
                const renderServiceIcon = () => {
                  switch (service.id) {
                    case 'website-design':
                      return (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <line x1="3" y1="9" x2="21" y2="9" />
                          <line x1="9" y1="21" x2="9" y2="9" />
                        </svg>
                      );
                    case 'nextjs-development':
                      return (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                          <line x1="14" y1="4" x2="10" y2="20" />
                        </svg>
                      );
                    case 'landing-pages':
                      return (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      );
                    case 'ecommerce':
                      return (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="9" cy="21" r="1" />
                          <circle cx="20" cy="21" r="1" />
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                      );
                    case 'website-redesign':
                      return (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="23 4 23 10 17 10" />
                          <polyline points="1 20 1 14 7 14" />
                          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                        </svg>
                      );
                    case 'ongoing-support':
                    default:
                      return (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                      );
                  }
                };

                return (
                  <div
                    key={service.id}
                    className="wd-service-card"
                  >
                    {/* Animated Clip Path Overlay Surface */}
                    <div className="wd-service-clip-overlay" aria-hidden="true" />

                    <div className="wd-service-header">
                      <div className="wd-service-icon-box">
                        {renderServiceIcon()}
                      </div>
                      <h3 className="wd-service-title">{service.title}</h3>
                    </div>
                    <p className="wd-service-desc">{service.description}</p>
                    <ul className="wd-service-scope">
                      {service.scope.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <a href="#contact" className="wd-service-link">
                      Discuss this service
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Process (5-Phase Execution Roadmap with Connected Timeline & Interactive Nodes) ── */}
        <section className="wd-section wd-section-dark wd-process-section wd-reveal-on-scroll" id="process">
          {/* Subtle Grid Ambient Aura */}
          <div className="wd-process-ambient-glow" aria-hidden="true" />

          <div className="wd-container">
            <div className="wd-section-header wd-process-header">
              <div className="wd-process-badge">
                <span className="wd-process-badge-pulse" />
                <span>5-PHASE EXECUTION ROADMAP</span>
              </div>
              <h2 className="wd-section-title">
                From first conversation<br />
                <span className="wd-text-gradient-process">to production launch.</span>
              </h2>
              <p className="wd-section-desc dark">
                A predictable, transparent delivery pipeline with zero black boxes. You know exactly what is happening at every milestone, who is responsible, and when to test deliverables.
              </p>
            </div>

            {/* Stepper Roadmap Track */}
            <div className="wd-process-timeline-wrapper">
              <div className="wd-process-timeline-bar" aria-hidden="true">
                <div className="wd-process-timeline-fill" />
              </div>

              <div className="wd-process-cards-grid">
                {webDesignProcess.map((step, idx) => {
                  const getStepIcon = (index) => {
                    switch (index) {
                      case 0: // Discovery
                        return (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <path d="M11 8v6M8 11h6" />
                          </svg>
                        );
                      case 1: // Structure & Wireframes
                        return (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                            <line x1="9" y1="21" x2="9" y2="9" />
                          </svg>
                        );
                      case 2: // Visual Design
                        return (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 19l7-7 3 3-7 7-3-3z" />
                            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                            <path d="M2 2l7.586 7.586" />
                            <circle cx="11" cy="11" r="2" />
                          </svg>
                        );
                      case 3: // Development
                        return (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                            <line x1="14" y1="4" x2="10" y2="20" />
                          </svg>
                        );
                      case 4: // Launch
                      default:
                        return (
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                          </svg>
                        );
                    }
                  };

                  return (
                    <div key={step.step} className="wd-process-card-step">
                      {/* Top Node Indicator */}
                      <div className="wd-process-step-node">
                        <span className="wd-process-node-ring" />
                        <span className="wd-process-node-dot">{step.step}</span>
                      </div>

                      {/* Card Content Box */}
                      <div className="wd-process-card-inner">
                        <div className="wd-process-card-glow" />
                        <div className="wd-process-card-header">
                          <div className="wd-process-icon-box">
                            {getStepIcon(idx)}
                          </div>
                          <div className="wd-process-timeline-badge">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            <span>{step.duration}</span>
                          </div>
                        </div>

                        <h3 className="wd-process-card-title">{step.title}</h3>
                        <p className="wd-process-card-desc">{step.description}</p>

                        <div className="wd-process-card-footer">
                          <span className="wd-process-status-tag">
                            <span className="wd-status-dot" />
                            Phase {step.step}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Guarantee Strip */}
            <div className="wd-process-guarantee-strip">
              <div className="wd-guarantee-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>Live staging URL for preview before production deploy</span>
              </div>
              <div className="wd-guarantee-divider" />
              <div className="wd-guarantee-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                <span>100% Code &amp; Domain Ownership delivered at launch</span>
              </div>
            </div>
          </div>
        </section>


        {/* ── FAQ ── */}
        <section className="wd-section wd-section-subtle" id="faq">
          <div className="wd-container">
            <div className="wd-faq-layout">
              <div className="wd-faq-header">
                <p className="wd-label">Common questions</p>
                <h2 className="wd-section-title">Good questions to ask before starting a&nbsp;project.</h2>
              </div>

              <div className="wd-faq-list">
                {webDesignFaqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className={`wd-faq-item ${isOpen ? 'is-open' : ''}`}>
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                        className="wd-faq-trigger"
                      >
                        <span>{faq.q}</span>
                        <span className="wd-faq-icon">{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && (
                        <div className="wd-faq-answer">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <div id="contact">
          <ConsultationContact
            initialService="Corporate Web Development & Design"
            initialNotes=""
          />
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
