'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '../data/siteConfig';

export default function ErpFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="erp-footer" role="contentinfo">
      <div className="erp-container">
        <div className="erp-footer-grid">
          {/* Brand Column */}
          <div className="erp-footer-col-brand">
            <Link href="/" className="erp-footer-brand-link" aria-label="Valtix Custom ERP Development">
              <img
                src="/assets/tlogo.png"
                alt="Valtix Logo"
                className="erp-footer-logo"
                width={36}
                height={36}
              />
              <div className="erp-footer-brand-title">
                <strong>Valtix</strong>
                <span>Custom ERP Engineering</span>
              </div>
            </Link>
            <p className="erp-footer-bio">
              Custom ERP software development and enterprise business application engineering. Unifying inventory, finance, sales, manufacturing and workforce management around your actual workflows.
            </p>
            <div className="erp-footer-contact-brief">
              <span><strong>Inquiries:</strong> {siteConfig.email}</span>
              <span><strong>Operating Hours:</strong> {siteConfig.operatingHours}</span>
            </div>
          </div>

          {/* Col 1: Platforms */}
          <div className="erp-footer-col">
            <h4 className="erp-footer-heading">ERP Platforms</h4>
            <ul className="erp-footer-links">
              <li><Link href="#platforms">Custom Web ERP (React/Node)</Link></li>
              <li><Link href="#platforms">Oracle APEX Development</Link></li>
              <li><Link href="#platforms">Native Desktop ERP (.NET)</Link></li>
              <li><Link href="#platform-comparison">Platform Comparison Matrix</Link></li>
              <li><Link href="#ownership">Software Ownership &amp; IP Terms</Link></li>
            </ul>
          </div>

          {/* Col 2: Core Modules */}
          <div className="erp-footer-col">
            <h4 className="erp-footer-heading">Business Modules</h4>
            <ul className="erp-footer-links">
              <li><Link href="#modules">Finance &amp; Accounting</Link></li>
              <li><Link href="#modules">Inventory &amp; Stores</Link></li>
              <li><Link href="#modules">Sales &amp; Purchasing</Link></li>
              <li><Link href="#modules">Manufacturing &amp; Production</Link></li>
              <li><Link href="#modules">HR &amp; Workforce Payroll</Link></li>
              <li><Link href="#modules">Reporting &amp; Analytics</Link></li>
            </ul>
          </div>

          {/* Col 3: Industry Solutions */}
          <div className="erp-footer-col">
            <h4 className="erp-footer-heading">Industry Solutions</h4>
            <ul className="erp-footer-links">
              <li><Link href="#industries">Manufacturing &amp; Factories</Link></li>
              <li><Link href="#industries">Wholesale &amp; Distribution</Link></li>
              <li><Link href="#industries">Warehousing &amp; Logistics</Link></li>
              <li><Link href="#industries">Retail &amp; Multi-Branch</Link></li>
              <li><Link href="#industries">Professional Services</Link></li>
            </ul>
          </div>

          {/* Col 4: Process & Governance */}
          <div className="erp-footer-col">
            <h4 className="erp-footer-heading">Engineering &amp; Governance</h4>
            <ul className="erp-footer-links">
              <li><Link href="#process">Development Lifecycle</Link></li>
              <li><Link href="#case-studies">Project Walkthroughs</Link></li>
              <li><Link href="#ownership">Database Portability</Link></li>
              <li><Link href="#ownership">Operating vs Dev Costs</Link></li>
              <li><Link href="#faqs">Frequently Asked Questions</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="erp-footer-bottom">
          <p className="erp-copyright">
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Custom ERP systems engineered to contract.
          </p>

          <div className="erp-legal-links">
            <Link href="#contact">Privacy Policy</Link>
            <span className="dot-sep" aria-hidden="true">•</span>
            <Link href="#contact">Terms of Service</Link>
            <span className="dot-sep" aria-hidden="true">•</span>
            <Link href="#contact">IP Licensing Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
