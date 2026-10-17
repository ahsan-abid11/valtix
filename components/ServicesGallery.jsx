'use client';

import React from 'react';
import Link from 'next/link';
import { servicesData } from '../data/servicesData';

export default function ServicesGallery() {
  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'bookkeeping':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="18" rx="2" />
            <line x1="9" y1="3" x2="9" y2="21" />
          </svg>
        );
      case 'vat':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="5" x2="5" y2="19" />
            <circle cx="6.5" cy="6.5" r="2.5" />
            <circle cx="17.5" cy="17.5" r="2.5" />
          </svg>
        );
      case 'corporate-tax':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case 'payroll':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
        );
      case 'mis':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        );
      case 'cloud':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M12 12v9" />
            <path d="m8 17 4 4 4-4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="section-py services-gallery-section" id="services-gallery">
      <div className="wrapper">
        <header className="text-center services-gallery-header">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            REGULATORY SUITE
          </p>
          <h2 className="section-title">
            All Services &amp; Regulatory Deliverables
          </h2>
          <p className="section-desc services-gallery-lead">
            Explore our complete matrix of statutory bookkeeping, FTA tax filing, MoHRE payroll, and financial intelligence in a single scannable gallery.
          </p>
        </header>

        {/* Modern Services Gallery Grid */}
        <div className="services-gallery-grid">
          {servicesData.map((service, index) => {
            const idxStr = String(index + 1).padStart(2, '0');

            return (
              <article
                key={service.id}
                className="service-gallery-card"
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const size = Math.max(rect.width, rect.height) * 2.4;

                  const oldRipples = card.querySelectorAll('.service-card-ripple');
                  oldRipples.forEach((r) => r.remove());

                  const ripple = document.createElement('span');
                  ripple.className = 'service-card-ripple ripple-enter';
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

                  const activeRipples = card.querySelectorAll('.service-card-ripple.ripple-enter');
                  activeRipples.forEach((r) => {
                    r.classList.remove('ripple-enter');
                    r.classList.add('ripple-exit');
                    r.style.transformOrigin = `${x}px ${y}px`;
                    setTimeout(() => r.remove(), 550);
                  });
                }}
              >
                <div className="service-card-content">
                  {/* Top Card Meta */}
                  <div className="gallery-card-top">
                    <div className="gallery-icon-pill">
                      {renderIcon(service.icon)}
                    </div>
                    <span className="gallery-idx-badge">{idxStr}</span>
                  </div>

                  {/* Card Title & Desc */}
                  <div className="gallery-card-body">
                    <h3 className="gallery-service-title">
                      {service.title}
                    </h3>
                    <p className="gallery-service-desc">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
