'use client';

import React, { useEffect, useRef } from 'react';

import Link from 'next/link';

export default function WebEngineering() {
  const bentoRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const cardRefs = useRef([]);

  const handleMobileScroll = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      const container = e.currentTarget;
      const scrollLeft = container.scrollLeft;
      const card = cardRefs.current[0];
      if (card) {
        const cardWidth = card.offsetWidth + 16;
        const newIndex = Math.round(scrollLeft / cardWidth);
        if (newIndex >= 0 && newIndex < 4 && newIndex !== activeCardIndex) {
          setActiveCardIndex(newIndex);
        }
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('bento-in-view');
          }
        });
      },
      {
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.1,
      }
    );

    if (bentoRef.current) {
      observer.observe(bentoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-py section-bento-engineering" id="web-development">
      <div className="bento-bg-glow"></div>
      
      <div className="wrapper">
        <header className="bento-header text-center" style={{ marginBottom: '80px' }}>
          <h2 className="section-title" style={{ color: '#FFF', maxWidth: '800px', marginInline: 'auto' }}>
            Elevate Your Digital Presence
          </h2>
          <p className="section-desc" style={{ color: 'var(--dark-muted)', maxWidth: '600px', marginInline: 'auto' }}>
            We don't use generic templates. We build bespoke, high-performance web platforms designed to automate operations, secure client trust, and drive revenue.
          </p>
        </header>

        <div className="bento-grid" ref={bentoRef} onScroll={handleMobileScroll}>
          
          {/* Card 1: Web Apps & Portals (Span 2 cols) */}
          <div className="bento-card bento-span-2 card-apps" ref={(el) => (cardRefs.current[0] = el)}>
            <div className="bento-content">
              <div className="bento-header-flex">
                <span className="bento-mono-tag">Operational Efficiency</span>
                <div className="bento-status-dot"></div>
              </div>
              <h3 className="bento-title">Client Portals &amp; Internal Tools</h3>
              <p className="bento-desc">
                Automate your daily operations and provide secure document vaults for your clients. We build scalable platforms that save your team hours of manual work.
              </p>
              
              <Link href="/services/enterprise-portals" className="bento-explore-btn">
                Explore Service <span className="arrow">&rarr;</span>
              </Link>
              
              <div className="bento-visual">
                <svg className="bento-blueprint-svg" viewBox="0 0 400 150" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4">
                  <rect x="20" y="20" width="360" height="110" rx="8" />
                  <line x1="20" y1="50" x2="380" y2="50" />
                  <circle cx="45" cy="35" r="4" fill="var(--accent)" />
                  <circle cx="65" cy="35" r="4" fill="var(--dark-muted)" />
                  <circle cx="85" cy="35" r="4" fill="var(--dark-muted)" />
                  <rect x="40" y="70" width="100" height="40" rx="4" />
                  <rect x="160" y="70" width="200" height="8" rx="2" />
                  <rect x="160" y="90" width="150" height="8" rx="2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Corporate Web Design (Span 1) */}
          <div className="bento-card card-design" ref={(el) => (cardRefs.current[1] = el)}>
            <div className="bento-content">
              <div className="bento-header-flex">
                <span className="bento-mono-tag">Brand Authority</span>
              </div>
              <h3 className="bento-title">Web Designing Service</h3>
              <p className="bento-desc">
                Bespoke digital identities that position your firm as an industry leader in the UAE and turn visitors into qualified leads.
              </p>
              
              <Link href="/services/web-designing-service" className="bento-explore-btn">
                Explore Service <span className="arrow">&rarr;</span>
              </Link>
              
              <div className="bento-icon-glow">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3: E-Commerce (Span 1) */}
          <div className="bento-card card-ecommerce" ref={(el) => (cardRefs.current[2] = el)}>
            <div className="bento-content">
              <div className="bento-header-flex">
                <span className="bento-mono-tag">Secure Revenue</span>
              </div>
              <h3 className="bento-title">Digital Sales &amp; Gateways</h3>
              <p className="bento-desc">
                High-conversion checkout engines integrated seamlessly with local gateways like Stripe UAE and Network International.
              </p>
              
              <Link href="/services/web-designing-service" className="bento-explore-btn">
                Explore Service <span className="arrow">&rarr;</span>
              </Link>
              
              <div className="bento-icon-glow">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 4: Web Retainers (Span 2) */}
          <div className="bento-card bento-span-2 card-care" ref={(el) => (cardRefs.current[3] = el)}>
            <div className="bento-content">
              <div className="bento-header-flex">
                <span className="bento-mono-tag">Proactive Care</span>
                <span className="bento-uptime">Zero Downtime Guarantee</span>
              </div>
              <h3 className="bento-title">Ongoing Support &amp; Protection</h3>
              <p className="bento-desc">
                We act as your dedicated digital team. From monthly security patching to speed optimization, we ensure your business never goes offline.
              </p>
              
              <Link href="/#contact" className="bento-explore-btn">
                Inquire Retainer <span className="arrow">&rarr;</span>
              </Link>
              
              <div className="bento-visual bento-server-rack">
                <div className="rack-unit">
                  <div className="rack-light blink"></div>
                  <div className="rack-line"></div>
                </div>
                <div className="rack-unit active">
                  <div className="rack-light on"></div>
                  <div className="rack-line"></div>
                </div>
                <div className="rack-unit">
                  <div className="rack-light blink-slow"></div>
                  <div className="rack-line"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Dots Indicator */}
        <div className="mobile-dots-indicator" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`mobile-dot ${activeCardIndex === i ? 'active' : ''}`}
              style={{ background: activeCardIndex === i ? 'var(--accent)' : 'rgba(255, 255, 255, 0.2)' }}
              onClick={() => {
                setActiveCardIndex(i);
                cardRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
