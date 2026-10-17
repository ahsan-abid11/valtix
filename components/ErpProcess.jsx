'use client';

import React from 'react';
import { developmentProcessSteps } from '../data/erpData';

export default function ErpProcess() {
  return (
    <section className="erp-section erp-section-light" id="process">
      <div className="erp-container">
        <header className="erp-section-header">
          <p className="erp-section-eyebrow">ENGINEERING LIFECYCLE</p>
          <h2 className="erp-section-h2">From Business Requirements to a Working ERP.</h2>
          <p className="erp-section-desc">
            A structured, milestones-driven engineering process. We prioritize risk reduction, transparent database architecture, and phased module rollouts.
          </p>
        </header>

        <div className="erp-process-timeline">
          {developmentProcessSteps.map((step, idx) => (
            <div key={idx} className="erp-process-step-card">
              <div className="step-header">
                <span className="step-number">{step.step}</span>
                <span className="step-phase-pill">{step.timeline}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>

              <div className="step-deliverables-box">
                <strong className="deliv-label">Phase Deliverables:</strong>
                <p className="deliv-text">{step.deliverables}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule & Scope Caveat Box */}
        <div className="erp-process-disclaimer">
          <div className="disclaimer-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <p>
            <strong>Engineering Schedule Integrity:</strong> Realistic timelines depend on custom scope, third-party API availability, legacy database cleanliness, and client testing validation. We do not promise artificial overnight launches for enterprise systems that manage client financial ledgers.
          </p>
        </div>
      </div>
    </section>
  );
}
