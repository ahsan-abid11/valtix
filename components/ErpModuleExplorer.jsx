'use client';

import React from 'react';
import { erpModules } from '../data/erpData';

export default function ErpModuleExplorer({ selectedModules = [], onToggleModule, onBuildMyErp }) {
  const moduleIcons = {
    finance: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    inventory: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      </svg>
    ),
    'sales-purchasing': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
      </svg>
    ),
    'hr-payroll': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      </svg>
    ),
    manufacturing: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
      </svg>
    ),
    'reporting-analytics': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    'crm-supplier': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    'security-audit': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    integrations: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    )
  };

  const handleToggle = (moduleName) => {
    if (onToggleModule) {
      onToggleModule(moduleName);
    }
  };

  const handleBuildClick = () => {
    if (onBuildMyErp) {
      onBuildMyErp();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="erp-section erp-section-light" id="modules">
      <div className="erp-container">
        <header className="erp-section-header">
          <p className="erp-section-eyebrow">MODULAR SCOPE BUILDER</p>
          <h2 className="erp-section-h2">Build an ERP Around the Modules You Actually Need.</h2>
          <p className="erp-section-desc">
            Select the operational building blocks required for your company today. Toggle on or off with a single click.
          </p>
        </header>

        {/* Clean Stacked Enterprise List Layout */}
        <div className="erp-modules-list-container" role="list">
          {erpModules.slice(0, 9).map((mod, idx) => {
            const isSelected = selectedModules.includes(mod.name);

            return (
              <div
                key={mod.id}
                role="listitem"
                className={`erp-module-row-item ${isSelected ? 'row-selected' : ''}`}
                onClick={() => handleToggle(mod.name)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleToggle(mod.name);
                  }
                }}
              >
                {/* 1. Left: Order Number & Icon */}
                <div className="row-left-cluster">
                  <span className="row-index">{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                  <div className="row-icon-pill">
                    {moduleIcons[mod.id] || moduleIcons.finance}
                  </div>
                </div>

                {/* 2. Middle: Name, Tag & Short Summary */}
                <div className="row-content-body">
                  <div className="row-title-line">
                    <h3 className="row-module-title">{mod.name}</h3>
                    <span className="row-module-tag">{mod.tag}</span>
                  </div>
                  <p className="row-module-desc">{mod.desc}</p>
                </div>

                {/* 3. Right: Toggle Status Pill */}
                <div className="row-action-cluster">
                  <span className={`row-state-badge ${isSelected ? 'badge-included' : ''}`}>
                    {isSelected ? (
                      <>
                        <span className="badge-check">✓</span> Included in Scope
                      </>
                    ) : (
                      <>
                        <span className="badge-plus">+</span> Select Module
                      </>
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Bottom Summary Bar */}
        <div className="erp-list-scope-bar">
          <div className="scope-summary-left">
            <span className="scope-total-badge">
              <strong>{selectedModules.length}</strong> {selectedModules.length === 1 ? 'Module' : 'Modules'} in Scope
            </span>
            <span className="scope-items-preview">
              {selectedModules.length === 0
                ? 'Click on any list row above to select your required ERP modules.'
                : selectedModules.join(' • ')}
            </span>
          </div>

          <button
            type="button"
            className="erp-btn erp-btn-accent"
            onClick={handleBuildClick}
          >
            <span>Proceed with Scope &rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
