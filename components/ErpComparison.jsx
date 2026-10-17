'use client';

import React from 'react';
import { platformComparisonRows } from '../data/erpData';

export default function ErpComparison() {
  return (
    <section className="erp-section erp-section-light" id="platform-comparison">
      <div className="erp-container">
        <header className="erp-section-header">
          <p className="erp-section-eyebrow">ARCHITECTURAL EVALUATION</p>
          <h2 className="erp-section-h2">Choose the Right ERP Architecture for Your Business.</h2>
          <p className="erp-section-desc">
            Suitability depends on transaction volume, workflow design, client infrastructure, security requirements, and total cost of ownership.
          </p>
        </header>

        {/* Responsive Comparison Table Container */}
        <div className="erp-table-scroll-wrapper" role="region" aria-label="ERP Platform Architectural Comparison Table" tabIndex={0}>
          <table className="erp-comparison-table">
            <thead>
              <tr>
                <th className="th-feature" scope="col">Architectural Criteria</th>
                <th className="th-platform" scope="col">
                  <strong>Custom Web ERP</strong>
                  <span>Browser-Centric Cross-Device</span>
                </th>
                <th className="th-platform" scope="col">
                  <strong>Oracle APEX</strong>
                  <span>Database-Centric SQL / PL-SQL</span>
                </th>
                <th className="th-platform" scope="col">
                  <strong>Native Desktop ERP</strong>
                  <span>Keyboard-Optimized .NET Client</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {platformComparisonRows.map((row, idx) => (
                <tr key={idx}>
                  <th className="td-feature" scope="row">
                    <strong>{row.feature}</strong>
                  </th>
                  <td className="td-val web">{row.web}</td>
                  <td className="td-val apex">{row.apex}</td>
                  <td className="td-val desktop">{row.desktop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Informational Guidance Note */}
        <div className="erp-table-guidance">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--erp-text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p>
            <strong>Engineering Note:</strong> Architectural decisions are not mutually exclusive. Many organizations employ a hybrid model—such as a Native Desktop client for high-speed warehouse dispatch and an Oracle APEX or Web ERP portal for remote management and supplier collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
