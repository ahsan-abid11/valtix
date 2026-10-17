'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ErpNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [platformsDropdownOpen, setPlatformsDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);

  const toggleMobile = () => setMobileMenuOpen(prev => !prev);
  const closeMobile = () => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setPlatformsDropdownOpen(false);
    setIndustriesDropdownOpen(false);
  };

  return (
    <header className="erp-header" id="navbar">
      <div className="erp-nav-container">
        {/* Brand Logo */}
        <Link href="/" className="erp-brand" onClick={closeMobile} aria-label="Valtix Custom ERP Development">
          <img
            src="/assets/logo2.png"
            alt="Valtix Logo"
            className="erp-brand-logo"
            width={160}
            height={36}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="erp-nav-desktop" aria-label="Main ERP Navigation">
          {/* Solutions Dropdown */}
          <div
            className="erp-nav-dropdown-wrap"
            onMouseEnter={() => setSolutionsDropdownOpen(true)}
            onMouseLeave={() => setSolutionsDropdownOpen(false)}
          >
            <button
              type="button"
              className="erp-nav-link erp-nav-trigger"
              aria-expanded={solutionsDropdownOpen}
            >
              <span>Solutions</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {solutionsDropdownOpen && (
              <div className="erp-dropdown-menu">
                <Link href="#modules" className="erp-dropdown-item" onClick={() => setSolutionsDropdownOpen(false)}>
                  <strong>Module Explorer</strong>
                  <span>Finance, inventory, sales, HR &amp; manufacturing</span>
                </Link>
                <Link href="#challenges" className="erp-dropdown-item" onClick={() => setSolutionsDropdownOpen(false)}>
                  <strong>Business Challenges</strong>
                  <span>Spreadsheet consolidation &amp; workflow bottlenecks</span>
                </Link>
                <Link href="#ownership" className="erp-dropdown-item" onClick={() => setSolutionsDropdownOpen(false)}>
                  <strong>Ownership &amp; Security</strong>
                  <span>Contractual source code ownership &amp; running costs</span>
                </Link>
              </div>
            )}
          </div>

          {/* Platforms Dropdown */}
          <div
            className="erp-nav-dropdown-wrap"
            onMouseEnter={() => setPlatformsDropdownOpen(true)}
            onMouseLeave={() => setPlatformsDropdownOpen(false)}
          >
            <button
              type="button"
              className="erp-nav-link erp-nav-trigger"
              aria-expanded={platformsDropdownOpen}
            >
              <span>Platforms</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {platformsDropdownOpen && (
              <div className="erp-dropdown-menu">
                <Link href="#platforms" className="erp-dropdown-item" onClick={() => setPlatformsDropdownOpen(false)}>
                  <strong>Custom Web ERP</strong>
                  <span>Browser-based applications (React, Next.js, Node, PostgreSQL)</span>
                </Link>
                <Link href="#platforms" className="erp-dropdown-item" onClick={() => setPlatformsDropdownOpen(false)}>
                  <strong>Oracle APEX Development</strong>
                  <span>Database-centric SQL, PL/SQL &amp; enterprise grids</span>
                </Link>
                <Link href="#platforms" className="erp-dropdown-item" onClick={() => setPlatformsDropdownOpen(false)}>
                  <strong>Native Desktop ERP</strong>
                  <span>Keyboard-optimized .NET client for warehouses &amp; counters</span>
                </Link>
                <Link href="#platform-comparison" className="erp-dropdown-item" onClick={() => setPlatformsDropdownOpen(false)}>
                  <strong>Platform Comparison</strong>
                  <span>Direct architectural comparison matrix</span>
                </Link>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="erp-nav-dropdown-wrap"
            onMouseEnter={() => setIndustriesDropdownOpen(true)}
            onMouseLeave={() => setIndustriesDropdownOpen(false)}
          >
            <button
              type="button"
              className="erp-nav-link erp-nav-trigger"
              aria-expanded={industriesDropdownOpen}
            >
              <span>Industries</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {industriesDropdownOpen && (
              <div className="erp-dropdown-menu">
                <Link href="#industries" className="erp-dropdown-item" onClick={() => setIndustriesDropdownOpen(false)}>
                  <strong>Manufacturing &amp; Factories</strong>
                  <span>Work orders, BOMs &amp; material consumption</span>
                </Link>
                <Link href="#industries" className="erp-dropdown-item" onClick={() => setIndustriesDropdownOpen(false)}>
                  <strong>Wholesale &amp; Distribution</strong>
                  <span>GRN, batch dispatch &amp; client credit limits</span>
                </Link>
                <Link href="#industries" className="erp-dropdown-item" onClick={() => setIndustriesDropdownOpen(false)}>
                  <strong>Warehousing &amp; Logistics</strong>
                  <span>Bin allocation, pick-pack &amp; cycle counting</span>
                </Link>
                <Link href="#industries" className="erp-dropdown-item" onClick={() => setIndustriesDropdownOpen(false)}>
                  <strong>Retail &amp; Multi-Branch</strong>
                  <span>Store checkout &amp; central inventory visibility</span>
                </Link>
                <Link href="#industries" className="erp-dropdown-item" onClick={() => setIndustriesDropdownOpen(false)}>
                  <strong>Professional Services</strong>
                  <span>Client billing retainers &amp; project hours</span>
                </Link>
              </div>
            )}
          </div>

          <Link href="#process" className="erp-nav-link">Our Process</Link>
          <Link href="#faqs" className="erp-nav-link">Resources</Link>
        </nav>

        {/* Right CTA */}
        <div className="erp-nav-actions">
          <Link href="#contact" className="erp-btn erp-btn-accent">
            <span>Discuss Your Project</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="erp-mobile-toggle"
            onClick={toggleMobile}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="erp-mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="erp-mobile-drawer-inner">
            <Link href="#solutions" className="erp-mobile-link" onClick={closeMobile}>Solutions</Link>
            <Link href="#platforms" className="erp-mobile-link" onClick={closeMobile}>Platforms (Web, Oracle APEX, Desktop)</Link>
            <Link href="#platform-comparison" className="erp-mobile-link" onClick={closeMobile}>Platform Comparison</Link>
            <Link href="#modules" className="erp-mobile-link" onClick={closeMobile}>Module Explorer</Link>
            <Link href="#industries" className="erp-mobile-link" onClick={closeMobile}>Industry Solutions</Link>
            <Link href="#process" className="erp-mobile-link" onClick={closeMobile}>Our Process</Link>
            <Link href="#ownership" className="erp-mobile-link" onClick={closeMobile}>Ownership &amp; Costs</Link>
            <Link href="#case-studies" className="erp-mobile-link" onClick={closeMobile}>Project Walkthroughs</Link>
            <Link href="#faqs" className="erp-mobile-link" onClick={closeMobile}>Resources &amp; FAQ</Link>

            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--erp-border-dark)' }}>
              <Link href="#contact" className="erp-btn erp-btn-accent" style={{ width: '100%', justifyContent: 'center' }} onClick={closeMobile}>
                <span>Discuss Your ERP Project</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
