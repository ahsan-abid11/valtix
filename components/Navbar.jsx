'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const megaTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (megaTimeoutRef.current) {
      clearTimeout(megaTimeoutRef.current);
    }
    setIsMegaOpen(true);
  };

  const handleMouseLeave = () => {
    megaTimeoutRef.current = setTimeout(() => {
      setIsMegaOpen(false);
    }, 180); // 180ms grace window prevents accidental dropping
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setMobileServicesOpen(false);
    setIsMegaOpen(false);
  };

  return (
    <header className="site-header" id="navbar">
      <div className="wrapper header-inner">
        {/* Logo */}
        <Link href="/#home" className="brand-logo" aria-label="Valtix Business Solutions">
          <img
            src="/assets/logo2.png"
            alt="Valtix Solutions"
            className="navbar-brand-img"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu" aria-label="Main Navigation">
          <Link href="/#home" className="nav-link">Home</Link>

          {/* Unified Services Mega Menu */}
          <div
            className={`nav-dropdown nav-mega-dropdown ${isMegaOpen ? 'is-active' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="nav-link dropdown-toggle"
              aria-expanded={isMegaOpen}
              aria-haspopup="true"
              onClick={() => setIsMegaOpen((prev) => !prev)}
            >
              Services <span className="caret">&#9662;</span>
            </button>

            <div
              className={`mega-menu-panel ${isMegaOpen ? 'is-visible' : ''}`}
              role="region"
              aria-label="Services Navigation"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mega-menu-container">
                <div className="mega-menu-grid">
                
                {/* Column 1: Web Engineering & Enterprise Software */}
                <div className="mega-menu-col">
                  <div className="mega-col-header">
                    <span className="mega-col-eyebrow">DIGITAL &amp; SYSTEMS</span>
                    <h4 className="mega-col-title">Web Engineering</h4>
                  </div>
                  
                  <div className="mega-menu-list">
                    <Link href="/services/custom-erp-development" className="mega-menu-card">
                      <div className="mega-card-icon erp-accent">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                          <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                      </div>
                      <div className="mega-card-text">
                        <span className="mega-card-name">Custom ERP Systems</span>
                        <span className="mega-card-sub">Oracle, PostgreSQL &amp; full workflow logic</span>
                      </div>
                    </Link>

                    <Link href="/services/enterprise-portals" className="mega-menu-card">
                      <div className="mega-card-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                          <polyline points="2 17 12 22 22 17"/>
                          <polyline points="2 12 12 17 22 12"/>
                        </svg>
                      </div>
                      <div className="mega-card-text">
                        <span className="mega-card-name">Enterprise Portals</span>
                        <span className="mega-card-sub">Secure client &amp; internal team platforms</span>
                      </div>
                    </Link>

                    <Link href="/services/mobile-app-development" className="mega-menu-card">
                      <div className="mega-card-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                          <line x1="12" y1="18" x2="12.01" y2="18"/>
                        </svg>
                      </div>
                      <div className="mega-card-text">
                        <span className="mega-card-name">Mobile App Development</span>
                        <span className="mega-card-sub">iOS &amp; Android native business apps</span>
                      </div>
                    </Link>

                    <Link href="/services/web-designing-service" className="mega-menu-card">
                      <div className="mega-card-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        </svg>
                      </div>
                      <div className="mega-card-text">
                        <span className="mega-card-name">Web Designing Service</span>
                        <span className="mega-card-sub">High-converting corporate architecture</span>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Column 2: Accounting Services (Industries) */}
                <div className="mega-menu-col">
                  <div className="mega-col-header">
                    <span className="mega-col-eyebrow">SECTOR EXPERTISE</span>
                    <h4 className="mega-col-title">Accounting Services</h4>
                  </div>
                  
                  <div className="mega-menu-list">
                    <Link href="/industries/cleaning-facility-care" className="mega-menu-card">
                      <div className="mega-card-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                          <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                      </div>
                      <div className="mega-card-text">
                        <span className="mega-card-name">Facility Care &amp; Cleaning</span>
                        <span className="mega-card-sub">Roster management &amp; site job audits</span>
                      </div>
                    </Link>

                    <Link href="/industries/general-trading" className="mega-menu-card">
                      <div className="mega-card-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="1" y="3" width="15" height="13" rx="2"/>
                          <polygon points="16 8 20 8 23 11 23 16 16 16 8"/>
                          <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                        </svg>
                      </div>
                      <div className="mega-card-text">
                        <span className="mega-card-name">General Trading</span>
                        <span className="mega-card-sub">Import/export, multi-currency &amp; stock</span>
                      </div>
                    </Link>

                    <Link href="/industries/beauty-salons-wellness" className="mega-menu-card">
                      <div className="mega-card-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                        </svg>
                      </div>
                      <div className="mega-card-text">
                        <span className="mega-card-name">Wellness &amp; Salons</span>
                        <span className="mega-card-sub">Appointment scheduling &amp; POS checkout</span>
                      </div>
                    </Link>

                    <Link href="/industries/event-production" className="mega-menu-card">
                      <div className="mega-card-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      </div>
                      <div className="mega-card-text">
                        <span className="mega-card-name">Event Production</span>
                        <span className="mega-card-sub">Equipment rentals &amp; staged crew dispatch</span>
                      </div>
                    </Link>

                    <Link href="/industries/technical-maintenance" className="mega-menu-card">
                      <div className="mega-card-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                        </svg>
                      </div>
                      <div className="mega-card-text">
                        <span className="mega-card-name">Technical &amp; MEP</span>
                        <span className="mega-card-sub">Field service ticketing &amp; job costing</span>
                      </div>
                    </Link>

                    <Link href="/industries/professional-consultancies" className="mega-menu-card">
                      <div className="mega-card-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                      </div>
                      <div className="mega-card-text">
                        <span className="mega-card-name">Professional Consultancies</span>
                        <span className="mega-card-sub">Client invoicing &amp; retainer tracking</span>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Column 3: Featured Enterprise Banner */}
                <div className="mega-menu-featured">
                  <div className="mega-featured-inner">
                    <span className="mega-badge">FEATURED SOLUTION</span>
                    <h4 className="mega-featured-title">Custom ERP Engineering</h4>
                    <p className="mega-featured-desc">
                      Replace fractured spreadsheets with enterprise software engineered around your specific operational workflows.
                    </p>
                    <ul className="mega-featured-points">
                      <li>&bull; 100% Source Code &amp; Data Ownership</li>
                      <li>&bull; Zero Per-User Monthly Subscription Seats</li>
                      <li>&bull; Tailored to UAE / GCC Statutory Accounting</li>
                    </ul>
                    <Link href="/services/custom-erp-development" className="btn btn-primary mega-featured-btn">
                      Explore ERP Scope &rarr;
                    </Link>
                  </div>
                </div>

              </div>
              </div>
            </div>
          </div>

          <Link href="/#services" className="nav-link">Accounting &amp; Tax</Link>
          <Link href="/#why-valtix" className="nav-link">Why Valtix</Link>
          <Link href="/#packages" className="nav-link">Packages</Link>
          <Link href="/#faqs" className="nav-link">FAQs</Link>
          <Link href="/#contact" className="btn btn-dark" style={{ padding: '8px 16px', fontSize: '13px' }}>
            Book Advisory
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-toggle"
          id="mobileToggleBtn"
          aria-label="Toggle navigation"
          aria-expanded={isMobileOpen}
          onClick={toggleMobileMenu}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${isMobileOpen ? 'active' : ''}`} id="mobileNavDrawer">
        <Link href="/#home" className="nav-link mobile-link" onClick={closeMobileMenu}>Home</Link>
        
        {/* Mobile Services Accordion Toggle */}
        <div className="mobile-accordion-group">
          <button
            type="button"
            className="mobile-accordion-toggle"
            onClick={() => setMobileServicesOpen((prev) => !prev)}
          >
            <span>Services &amp; Industries</span>
            <span className={`accordion-arrow ${mobileServicesOpen ? 'open' : ''}`}>&#9662;</span>
          </button>

          {mobileServicesOpen && (
            <div className="mobile-accordion-sublinks">
              <span className="mobile-sub-label">Web &amp; Systems</span>
              <Link href="/services/custom-erp-development" className="mobile-sublink highlighted" onClick={closeMobileMenu}>
                &bull; Custom ERP Systems
              </Link>
              <Link href="/services/enterprise-portals" className="mobile-sublink" onClick={closeMobileMenu}>
                &bull; Enterprise Portals
              </Link>
              <Link href="/services/mobile-app-development" className="mobile-sublink" onClick={closeMobileMenu}>
                &bull; Mobile App Development
              </Link>
              <Link href="/services/web-designing-service" className="mobile-sublink" onClick={closeMobileMenu}>
                &bull; Web Designing Service
              </Link>

              <span className="mobile-sub-label" style={{ marginTop: '10px' }}>Accounting &amp; Tax</span>
              <Link href="/#services" className="mobile-sublink" onClick={closeMobileMenu}>
                &bull; Accounting &amp; Bookkeeping
              </Link>
              <Link href="/#services" className="mobile-sublink" onClick={closeMobileMenu}>
                &bull; UAE VAT Compliance (FTA)
              </Link>
              <Link href="/#services" className="mobile-sublink" onClick={closeMobileMenu}>
                &bull; Corporate Tax (CT) Compliance
              </Link>
              <Link href="/#services" className="mobile-sublink" onClick={closeMobileMenu}>
                &bull; WPS Compliant Payroll
              </Link>
              <Link href="/#services" className="mobile-sublink" onClick={closeMobileMenu}>
                &bull; Financial &amp; MIS Reporting
              </Link>
              <Link href="/#services" className="mobile-sublink" onClick={closeMobileMenu}>
                &bull; Backlog Cleanup &amp; Cloud Migration
              </Link>
            </div>
          )}
        </div>

        <Link href="/#services" className="nav-link mobile-link" onClick={closeMobileMenu}>Accounting &amp; Tax</Link>
        <Link href="/#why-valtix" className="nav-link mobile-link" onClick={closeMobileMenu}>Why Valtix</Link>
        <Link href="/#packages" className="nav-link mobile-link" onClick={closeMobileMenu}>Packages</Link>
        <Link href="/#faqs" className="nav-link mobile-link" onClick={closeMobileMenu}>FAQs</Link>
        <Link href="/#contact" className="btn btn-primary mobile-link" style={{ width: '100%', marginTop: '8px' }} onClick={closeMobileMenu}>
          Schedule Free Call
        </Link>
      </div>
    </header>
  );
}

