'use client';

import React from 'react';
import { erpCaseStudies } from '../data/erpData';

export default function ErpCaseStudies() {
  return (
    <section className="erp-section erp-section-light" id="case-studies">
      <div className="erp-container">
        <header className="erp-section-header">
          <p className="erp-section-eyebrow">PROJECT EVIDENCE &amp; WORKFLOW AUDIT</p>
          <h2 className="erp-section-h2">Built Around Real Business Workflows.</h2>
          <p className="erp-section-desc">
            Detailed implementation walkthroughs demonstrating how custom relational schemas and dedicated workflows resolve real operational bottlenecks.
          </p>
        </header>

        <div className="erp-case-studies-grid">
          {erpCaseStudies.map((cs) => (
            <article key={cs.id} className="erp-case-study-card">
              <div className="cs-top-bar">
                <span className="cs-badge">{cs.badge}</span>
                <span className="cs-client-type">{cs.clientType}</span>
              </div>

              <h3 className="cs-title">{cs.title}</h3>

              {/* Problem & Legacy Workflow */}
              <div className="cs-block">
                <strong className="cs-block-label">The Operational Challenge:</strong>
                <p className="cs-block-text">{cs.problem}</p>
              </div>

              <div className="cs-block workflow-box">
                <strong className="cs-block-label">Legacy Manual Workflow:</strong>
                <p className="cs-workflow-steps">{cs.existingWorkflow}</p>
              </div>

              {/* Architecture & Modules */}
              <div className="cs-block">
                <strong className="cs-block-label">Engineered Architecture:</strong>
                <p className="cs-arch-text">{cs.architecture}</p>
              </div>

              <div className="cs-block">
                <strong className="cs-block-label">Modules Developed:</strong>
                <div className="cs-modules-pills">
                  {cs.modulesDeveloped.map((m, i) => (
                    <span key={i} className="cs-module-pill">{m}</span>
                  ))}
                </div>
              </div>

              {/* Verified Outcomes */}
              <div className="cs-outcomes-box">
                <strong className="cs-outcomes-title">Documented Implementation Outcomes:</strong>
                <p className="cs-outcomes-text">{cs.verifiedOutcomes}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
