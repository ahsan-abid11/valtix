'use client';

import React from 'react';
import Link from 'next/link';
import TopNotice from '../../../components/TopNotice';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ConsultationContact from '../../../components/ConsultationContact';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';

export default function BeautySalonsPage() {
  const highlights = [
    {
      title: "Daily POS Revenue Reconciliation",
      desc: "Matching daily cash, credit card terminals, and tap-to-pay gateway payouts with zero discrepancy."
    },
    {
      title: "Stylist Commissions & Payroll",
      desc: "Automated calculation of service tiers, retail bonuses, and MoHRE WPS compliance for salon staff."
    },
    {
      title: "Tip Distribution Records",
      desc: "Clear tracking and transparent pass-through payouts of discretionary electronic customer tips."
    },
    {
      title: "Retail Inventory & 5% VAT",
      desc: "Distinguishing resale products from treatment backbar consumables, with accurate FTA quarterly VAT filings."
    }
  ];

  return (
    <>
      <TopNotice />
      <Navbar />

      <main className="ind-page-wrapper">
        {/* HERO SECTION */}
        <section
          className="ind-clean-hero with-bg-image"
          style={{
            backgroundImage: "linear-gradient(180deg, rgba(8, 12, 20, 0.82) 0%, rgba(8, 12, 20, 0.94) 100%), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=85')"
          }}
        >
          <div className="wrapper">
            <nav className="ind-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="bc-sep">/</span>
              <Link href="/#industries">Industries</Link>
              <span className="bc-sep">/</span>
              <span className="bc-current">Beauty Salons &amp; Wellness</span>
            </nav>

            <div className="ind-hero-badge-wrap">
              <span className="ind-pill-badge">Industry Overview</span>
            </div>

            <h1 className="ind-hero-heading">
              Beauty Salons &amp; Wellness
            </h1>

            <p className="ind-hero-subheading">
              Daily POS revenue reconciliation, stylist commissions, tip distribution records, retail inventory management, and accurate 5% VAT calculations.
            </p>

            <div className="ind-hero-actions" style={{ marginBottom: 0 }}>
              <Link href="#contact" className="btn btn-primary ind-hero-btn">
                <span>Book Free Consultation</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CORE FOCUS SECTION */}
        <section className="ind-section">
          <div className="wrapper">
            <header className="ind-sec-header" style={{ marginBottom: '32px' }}>
              <p className="eyebrow" style={{ justifyContent: 'center' }}>Key Operations</p>
              <h2 className="section-title">Accounting &amp; Operational Scope</h2>
            </header>

            <div className="ind-deliverables-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="ind-deliverable-card" style={{ padding: '24px' }}>
                  <div className="idc-header" style={{ marginBottom: 0 }}>
                    <span className="idc-badge">0{idx + 1} Focus</span>
                    <h3 className="idc-title" style={{ fontSize: '18px', marginBottom: '8px' }}>{item.title}</h3>
                    <p className="idc-desc" style={{ fontSize: '14px', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <ConsultationContact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
