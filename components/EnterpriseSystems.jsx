'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function EnterpriseSystems() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sys-in-view');
          }
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      }
    );

    const blocks = containerRef.current.querySelectorAll('.sys-block');
    blocks.forEach((block) => observer.observe(block));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-py section-enterprise-sys" id="enterprise-systems">
      <div className="sys-bg-glow"></div>
      
      <div className="wrapper" ref={containerRef}>
        
        {/* Mobile Application Development */}
        <div className="sys-block sys-mobile">
          <div className="sys-content">
            <div className="bento-header-flex">
              <span className="mono-tag" style={{ border: '1px solid rgba(0, 113, 227, 0.3)', color: 'var(--accent)', background: 'rgba(0, 113, 227, 0.1)' }}>Native &amp; Cross-Platform</span>
            </div>
            <h3 className="sys-title">Mobile Application Development</h3>
            <p className="sys-desc">
              From consumer-facing iOS apps to robust enterprise Android utilities. We build lightning-fast, intuitive mobile applications that put your business directly in your customers' pockets.
            </p>
            <ul className="sys-features">
              <li>High-Performance React Native &amp; Swift</li>
              <li>Seamless API &amp; Backend Integration</li>
              <li>Engaging UI/UX &amp; Micro-interactions</li>
            </ul>
            <Link href="/services/mobile-app-development" className="sys-explore-btn">
              Explore Mobile Apps <span className="arrow">&rarr;</span>
            </Link>
          </div>
          
          <div className="sys-visual">
            {/* iPhone Silhouette Mockup */}
            <div className="mockup-phone">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <svg viewBox="0 0 200 400" className="phone-ui-svg" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                  <rect x="20" y="40" width="160" height="60" rx="8" fill="rgba(0, 113, 227, 0.05)" />
                  <circle cx="40" cy="70" r="12" fill="var(--accent)" />
                  <line x1="65" y1="65" x2="160" y2="65" strokeDasharray="4 4" />
                  <line x1="65" y1="75" x2="120" y2="75" strokeDasharray="4 4" />
                  
                  <rect x="20" y="120" width="75" height="100" rx="8" />
                  <rect x="105" y="120" width="75" height="100" rx="8" />
                  
                  <rect x="20" y="240" width="160" height="40" rx="8" />
                  <rect x="20" y="290" width="160" height="40" rx="8" />
                  <rect x="20" y="340" width="160" height="40" rx="8" />
                </svg>
                <div className="phone-glow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom ERP Development */}
        <div className="sys-block sys-erp reverse">
          <div className="sys-content">
            <div className="bento-header-flex">
              <span className="mono-tag" style={{ border: '1px solid rgba(16, 185, 129, 0.3)', color: 'var(--emerald)', background: 'rgba(16, 185, 129, 0.1)' }}>Business Automation</span>
            </div>
            <h3 className="sys-title">Custom ERP Development</h3>
            <p className="sys-desc">
              Break down data silos and automate your entire operation. We build bespoke Enterprise Resource Planning systems tailored specifically to your company's unique workflows.
            </p>
            <ul className="sys-features">
              <li>Unified HR, Finance &amp; Inventory Systems</li>
              <li>Real-time Cloud Data Synchronization</li>
              <li>Scalable &amp; Bank-grade Secure Architecture</li>
            </ul>
            <Link href="/services/custom-erp-development" className="sys-explore-btn">
              Explore ERP Systems <span className="arrow">&rarr;</span>
            </Link>
          </div>
          
          <div className="sys-visual">
            {/* Dashboard UI Mockup */}
            <div className="mockup-dashboard">
              <div className="dash-sidebar">
                <div className="dash-dot"></div>
                <div className="dash-dot"></div>
                <div className="dash-dot"></div>
              </div>
              <div className="dash-main">
                <div className="dash-header">
                  <div className="dash-search"></div>
                  <div className="dash-avatar"></div>
                </div>
                <div className="dash-grid">
                  <div className="dash-card span-2">
                    <svg viewBox="0 0 200 80" className="chart-svg" fill="none" stroke="var(--emerald)" strokeWidth="2" strokeLinejoin="round">
                      <polyline points="0,70 40,40 80,50 120,20 160,30 200,10" />
                    </svg>
                  </div>
                  <div className="dash-card"></div>
                  <div className="dash-card"></div>
                  <div className="dash-card"></div>
                  <div className="dash-card span-3">
                    <div className="dash-line"></div>
                    <div className="dash-line" style={{ width: '80%' }}></div>
                    <div className="dash-line" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              <div className="dash-glow"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
