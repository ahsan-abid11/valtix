'use client';

import React from 'react';

export default function ServiceShowcase() {
  return (
    <section className="showcase-section" id="platform-overview">
      <div className="wrapper">
        {/* Header */}
        <header className="showcase-header">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            Integrated Business Ecosystem
          </p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            One Unified Hub for All Your Operations
          </h2>
        </header>

        {/* Big Showcase Image Display */}
        <div className="showcase-display">
          <div className="showcase-img-container">
            <img
              src="/assets/explain_service.png"
              alt="Valtix Solutions complete business, mobile, and software overview"
              className="showcase-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
