'use client';

import React, { useState, useEffect, useRef } from 'react';
import { industriesData } from '../data/industriesData';

import Link from 'next/link';

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        // Triggers when the tab is exactly in the middle of the screen
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    tabRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleMobileScroll = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      const container = e.currentTarget;
      const scrollLeft = container.scrollLeft;
      const card = tabRefs.current[0];
      if (card) {
        const cardWidth = card.offsetWidth + 14;
        const newIndex = Math.round(scrollLeft / cardWidth);
        if (newIndex >= 0 && newIndex < industriesData.length && newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }
    }
  };

  return (
    <section className="industry-section section-py" id="industries">
      <div className="wrapper">
        <header className="text-center" style={{ marginBottom: '56px' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Industry Expertise</p>
          <h2 className="section-title">Tailored Sector Experience</h2>
          <p className="section-desc" style={{ marginInline: 'auto' }}>
            Every industry presents specific billing cadence, tax treatments, and payroll nuances. 
            We configure your virtual back-office to reflect your real operational environment.
          </p>
        </header>

        <div className="industry-hub-split">
          {/* Left Side: Scrolling Tabs */}
          <div className="industry-hub-scroll-list" onScroll={handleMobileScroll}>
            {industriesData.map((item, index) => (
              <div
                key={item.number}
                className={`industry-scroll-tab ${activeIndex === index ? 'active' : ''}`}
                data-index={index}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => {
                  setActiveIndex(index);
                  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
                    tabRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                  } else {
                    tabRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <span className="industry-tab-num">{item.number} — {item.tag}</span>
                <span className="industry-tab-title">{item.title}</span>
                <p className="industry-tab-desc">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile Dots Indicator */}
          <div className="mobile-dots-indicator" aria-hidden="true">
            {industriesData.map((_, i) => (
              <span
                key={i}
                className={`mobile-dot ${activeIndex === i ? 'active' : ''}`}
                onClick={() => {
                  setActiveIndex(i);
                  tabRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                }}
              />
            ))}
          </div>

          {/* Right Side: Sticky Display Panel */}
          <div className="industry-hub-sticky-display">
            {industriesData.map((item, index) => (
              <div
                key={`panel-${item.number}`}
                className={`industry-display-panel ${activeIndex === index ? 'active' : ''}`}
              >
                <div
                  className="industry-display-bg"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="industry-display-scrim"></div>
                <div className="industry-display-content">
                  <h3>{item.title}</h3>
                  <Link href={`/industries/${item.slug}`} className="industry-explore-btn">
                    Explore Industry <span className="arrow">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
