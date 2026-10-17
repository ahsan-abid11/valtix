'use client';

import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ConsultationContact from '../../../components/ConsultationContact';

export default function EnterprisePortalsPage() {
  return (
    <>
      <Navbar />
      <main className="svc-portals-main">
        {/* DASHBOARD HERO */}
        <section className="portals-hero">
          <div className="portals-hero-content">
            <span className="mono-tag" style={{ border: '1px solid rgba(0, 113, 227, 0.3)', color: 'var(--accent)', background: 'rgba(0, 113, 227, 0.1)' }}>SaaS Architecture</span>
            <h1 className="portals-title">Client Portals &amp; Internal Tools</h1>
            <p className="portals-desc">Automate operations, eliminate data entry, and secure client trust with bespoke dashboard interfaces.</p>
          </div>
          
          <div className="portals-mockup-wrapper">
            <div className="portals-mockup">
              <div className="p-sidebar">
                <div className="p-logo"></div>
                <div className="p-nav-item active"></div>
                <div className="p-nav-item"></div>
                <div className="p-nav-item"></div>
                <div className="p-nav-item mt-auto"></div>
              </div>
              <div className="p-main">
                <div className="p-header">
                  <div className="p-search"></div>
                  <div className="p-avatar"></div>
                </div>
                <div className="p-stats">
                  <div className="p-stat-card"></div>
                  <div className="p-stat-card"></div>
                  <div className="p-stat-card"></div>
                </div>
                <div className="p-grid">
                  <div className="p-table-card">
                    <div className="p-table-header"></div>
                    <div className="p-table-row"></div>
                    <div className="p-table-row"></div>
                    <div className="p-table-row"></div>
                    <div className="p-table-row"></div>
                  </div>
                  <div className="p-chart-card">
                    <div className="p-chart-bar" style={{height: '40%'}}></div>
                    <div className="p-chart-bar" style={{height: '70%'}}></div>
                    <div className="p-chart-bar" style={{height: '50%'}}></div>
                    <div className="p-chart-bar" style={{height: '90%'}}></div>
                    <div className="p-chart-bar" style={{height: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DATA GRID FEATURES */}
        <section className="portals-features section-py">
          <div className="wrapper">
            <div className="portals-data-grid">
              <div className="pd-card span-2">
                <h3>Secure Client Document Vaults</h3>
                <p>Provide your clients with a secure, 24/7 portal to upload documents, sign contracts, and view project statuses without endless email threads.</p>
              </div>
              <div className="pd-card">
                <h3>Automated Quotation</h3>
                <p>Empower sales to generate dynamic quotes instantly based on real-time pricing.</p>
              </div>
              <div className="pd-card">
                <h3>Bank-Grade Security</h3>
                <p>JWT auth, RBAC, and end-to-end encryption to protect mission-critical data.</p>
              </div>
              <div className="pd-card span-2">
                <h3>Custom Analytics</h3>
                <p>Replace manual Excel reports with live dashboards that visualize your entire operation.</p>
              </div>
            </div>
          </div>
        </section>

        <ConsultationContact />
      </main>
      <Footer />
    </>
  );
}
