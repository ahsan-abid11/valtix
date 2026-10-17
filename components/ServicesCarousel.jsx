'use client';

import React, { useEffect, useRef } from 'react';
import { servicesData } from '../data/servicesData';

export default function ServicesCarousel() {
  const sectionRef = useRef(null);
  const [activeServiceIndex, setActiveServiceIndex] = React.useState(0);
  const serviceCardRefs = useRef([]);

  const handleMobileScroll = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      const container = e.currentTarget;
      const scrollLeft = container.scrollLeft;
      const card = serviceCardRefs.current[0];
      if (card) {
        const cardWidth = card.offsetWidth + 16;
        const newIndex = Math.round(scrollLeft / cardWidth);
        if (newIndex >= 0 && newIndex < servicesData.length && newIndex !== activeServiceIndex) {
          setActiveServiceIndex(newIndex);
        }
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-in-view');
          }
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-py services-enterprise-section" id="services">
      <div className="wrapper">
        <header className="text-center" style={{ marginBottom: '100px' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>End-to-End Capabilities</p>
          <h2 className="section-title" style={{ maxWidth: '800px', marginInline: 'auto' }}>
            Services &amp; Regulatory Sub-Services
          </h2>
        </header>

        <div className="enterprise-flow" ref={sectionRef} onScroll={handleMobileScroll}>
          {servicesData.map((service, index) => {
            const idxStr = String(index + 1).padStart(2, '0');
            const isReversed = index % 2 !== 0;

            return (
              <article 
                key={service.id} 
                ref={(el) => (serviceCardRefs.current[index] = el)}
                className={`ent-service-row ${isReversed ? 'row-reversed' : ''}`}
                style={{
                  position: 'sticky',
                  top: `calc(120px + ${index * 30}px)`,
                  zIndex: index + 1
                }}
              >
                {/* Left Column: Clean High-Contrast Service Overview */}
                <div className="ent-main-col">
                  <div className="ent-content-header">
                    <div className="ent-badge-cluster">
                      <span className="ent-idx-pill">{idxStr}</span>
                      <span className="ent-category-chip">STATUTORY COMPLIANCE</span>
                    </div>

                    <h3 className="ent-title">
                      {(() => {
                        const words = service.title.split(' ');
                        const lastWord = words.pop();
                        return (
                          <>
                            {words.join(' ')} <span className="ent-title-accent">{lastWord}</span>
                          </>
                        );
                      })()}
                    </h3>

                    <p className="ent-desc">{service.desc}</p>
                  </div>

                  {/* High Quality Context Image Preview with Overlay */}
                  <div className="ent-image-showcase">
                    <img
                      src={service.bgImage}
                      alt={service.title}
                      className="ent-showcase-img"
                      loading="lazy"
                    />
                    <div className="ent-img-overlay-caption">
                      <span className="overlay-tag">Operational Domain</span>
                      <span className="overlay-label">{service.title}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Specialized Deliverables Checklist */}
                <div className="ent-sub-col">
                  <div className="ent-sub-card">
                    <div className="ent-sub-top-header">
                      <span className="ent-sub-label">Specialized Deliverables</span>
                      <span className="ent-sub-count">{service.subServices.length} Key Outputs</span>
                    </div>

                    <ul className="ent-sub-list">
                      {service.subServices.map((sub, i) => (
                        <li key={i}>
                          <div className="ent-check-circle">
                            <svg className="ent-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile Dots Indicator */}
        <div className="mobile-dots-indicator" aria-hidden="true">
          {servicesData.map((_, i) => (
            <span
              key={i}
              className={`mobile-dot ${activeServiceIndex === i ? 'active' : ''}`}
              onClick={() => {
                setActiveServiceIndex(i);
                serviceCardRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
