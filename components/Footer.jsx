import React from 'react';
import Link from 'next/link';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="wrapper">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/#home" className="brand-logo" aria-label="Valtix Business Solutions">
              <img
                src="/assets/tlogo.png"
                alt="Valtix Logo"
                className="footer-logo-img"
              />
              <div className="logo-text-wrap">
                <strong>Valtix</strong>
                <span className="logo-subtext">Business Solutions</span>
              </div>
            </Link>
            <p className="footer-brand-p">
              Dedicated virtual accounting, FTA Corporate Tax compliance, WPS payroll, and corporate digital engineering for UAE enterprises — zero in-house salary overhead.
            </p>

            {/* Quick Contact Chips */}
            <div className="footer-contact-chips">
              <a href={siteConfig.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="footer-chip">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                <span>WhatsApp Advisory</span>
              </a>

              <a href={`mailto:${siteConfig.email}`} className="footer-chip">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>

          {/* Col 1: Financial & Tax */}
          <div className="footer-col">
            <div className="footer-col-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              <h4>Accounting &amp; Tax</h4>
            </div>
            <div className="footer-links">
              <Link href="/services/bookkeeping-accounting">
                <span className="link-bullet">›</span> Bookkeeping (QBO &amp; Zoho)
              </Link>
              <Link href="/services/vat-compliance">
                <span className="link-bullet">›</span> VAT 201 Quarterly Filing
              </Link>
              <Link href="/services/corporate-tax-uae">
                <span className="link-bullet">›</span> Corporate Tax 9% Returns
              </Link>
              <Link href="/services/payroll-hr-management">
                <span className="link-bullet">›</span> WPS MoHRE Payroll
              </Link>
              <Link href="/services/accounting-backlog-cleanup">
                <span className="link-bullet">›</span> Backlog Audit Cleanup
              </Link>
              <Link href="/services/cfo-advisory-financial-planning">
                <span className="link-bullet">›</span> Virtual CFO Advisory
              </Link>
            </div>
          </div>

          {/* Col 2: Digital & Engineering */}
          <div className="footer-col">
            <div className="footer-col-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              <h4>Engineering Stack</h4>
            </div>
            <div className="footer-links">
              <Link href="/services/web-development">
                <span className="link-bullet">›</span> Corporate Web Platforms
              </Link>
              <Link href="/services/mobile-app-development">
                <span className="link-bullet">›</span> iOS &amp; Android Apps
              </Link>
              <Link href="/services/custom-erp-development">
                <span className="link-bullet">›</span> Custom ERP Systems
              </Link>
              <Link href="/services/client-portal-saas">
                <span className="link-bullet">›</span> Client Portals &amp; SaaS
              </Link>
              <Link href="/services/cloud-migration">
                <span className="link-bullet">›</span> Cloud &amp; API Integrations
              </Link>
              <Link href="/services/web-maintenance">
                <span className="link-bullet">›</span> 24/7 Security Retainers
              </Link>
            </div>
          </div>

          {/* Col 3: Industry Solutions */}
          <div className="footer-col">
            <div className="footer-col-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              <h4>Sectors Covered</h4>
            </div>
            <div className="footer-links">
              <Link href="/#industries">
                <span className="link-bullet">›</span> Cleaning &amp; Facility Care
              </Link>
              <Link href="/#industries">
                <span className="link-bullet">›</span> General Trading &amp; Import
              </Link>
              <Link href="/#industries">
                <span className="link-bullet">›</span> Salons, Spas &amp; Wellness
              </Link>
              <Link href="/#industries">
                <span className="link-bullet">›</span> Entertainment &amp; Events
              </Link>
              <Link href="/#industries">
                <span className="link-bullet">›</span> Technical &amp; Fit-Out Services
              </Link>
              <Link href="/#industries">
                <span className="link-bullet">›</span> Logistics &amp; Transport
              </Link>
            </div>
          </div>

          {/* Col 4: Corporate Engagement */}
          <div className="footer-col">
            <div className="footer-col-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <h4>Engagement</h4>
            </div>
            <div className="footer-links">
              <Link href="/#contact">
                <span className="link-bullet">›</span> Book Free Consultation
              </Link>
              <Link href="/#packages">
                <span className="link-bullet">›</span> Monthly Retainer Plans
              </Link>
              <Link href="/#faqs">
                <span className="link-bullet">›</span> FAQs &amp; Compliance Hub
              </Link>
              <Link href="/privacy-policy">
                <span className="link-bullet">›</span> Privacy &amp; Data Security
              </Link>
              <Link href="/terms-of-service">
                <span className="link-bullet">›</span> Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copy-text">
            <span>&copy; {new Date().getFullYear()} Valtix Business Solutions. All rights reserved across the United Arab Emirates.</span>
          </div>

          <div className="footer-sub-tags">
            <span className="footer-tag-pill">Virtual Accounting</span>
            <span className="footer-tag-pill">FTA Tax Agent Standards</span>
            <span className="footer-tag-pill">WPS Payroll</span>
            <span className="footer-tag-pill">Full-Stack Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
