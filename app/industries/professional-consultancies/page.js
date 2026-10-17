'use client';

import React from 'react';
import Link from 'next/link';
import TopNotice from '../../../components/TopNotice';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ConsultationContact from '../../../components/ConsultationContact';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';

export default function ProfessionalConsultanciesPage() {
  const pillars = [
    {
      num: "01",
      title: "Predictable Retainer & SLA Invoicing",
      desc: "Automating recurring monthly advisory retainers, milestone fee releases, and automated payment reminders without administrative drag."
    },
    {
      num: "02",
      title: "Time-to-Billing & Project Realization",
      desc: "Reconciling consultant billable hours against agreed client budgets to eliminate unbilled scope creep and protect advisory margins."
    },
    {
      num: "03",
      title: "Partner Profit Sharing & Equity Splits",
      desc: "Managing partner draw accounts, performance bonus pools, and transparent dividend schedules aligned with UAE Corporate Tax rules."
    },
    {
      num: "04",
      title: "Designated Free Zone & Mainland Compliance",
      desc: "Seamless financial reporting across DIFC, ADGM, DMCC, and mainland jurisdictions with quarterly VAT 201 filing and audit packages."
    }
  ];

  return (
    <>
      <TopNotice />
      <Navbar />

      <main className="consultancy-wrapper">
        {/* EDITORIAL HERO SECTION */}
        <section className="consultancy-hero">
          <div className="wrapper">
            <nav className="ind-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="bc-sep">/</span>
              <Link href="/#industries">Industries</Link>
              <span className="bc-sep">/</span>
              <span className="bc-current">Professional &amp; Consultancies</span>
            </nav>

            <div>
              <span className="consultancy-badge">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="#34D399">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                DIFC · ADGM · Free Zone · Mainland
              </span>
            </div>

            <h1 className="consultancy-title">
              Professional &amp; <em>Consultancies</em>
            </h1>

            <p className="consultancy-desc">
              Designed for digital agencies, law practices, executive search, and Free Zone consultancies requiring crisp retainers and zero overhead.
            </p>

            <div className="consultancy-pills-row">
              <span className="consultancy-pill-tag">Automated Retainer Billing</span>
              <span className="consultancy-pill-tag">Partner Draw Accounting</span>
              <span className="consultancy-pill-tag">Zero Admin Overhead</span>
              <span className="consultancy-pill-tag">FTA &amp; Corporate Tax Ready</span>
            </div>

            <div>
              <Link href="#contact" className="btn btn-primary" style={{ padding: '13px 28px', fontSize: '14px' }}>
                <span>Book Confidential Advisory</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* BESPOKE 4-PILLAR EDITORIAL GRID */}
        <section style={{ padding: '64px 0' }}>
          <div className="wrapper">
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <p className="eyebrow" style={{ justifyContent: 'center', color: '#34D399' }}>Core Financial Architecture</p>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>
                Advisory Operational Scope
              </h2>
            </div>

            <div className="consultancy-grid-editorial">
              {pillars.map((item, idx) => (
                <div key={idx} className="consultancy-card">
                  <span className="cc-num">PILLAR {item.num}</span>
                  <h3 className="cc-title">{item.title}</h3>
                  <p className="cc-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* SLEEK MANIFESTO CALLOUT */}
            <div className="consultancy-manifesto">
              <div>
                <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '15px', marginBottom: '4px' }}>
                  A Dedicated Virtual Finance Team for Knowledge Firms
                </strong>
                <p>
                  Eliminate full-time CFO and bookkeeping payroll overhead. Your agency receives accurate monthly management reports, prompt VAT submissions, and transparent cash flow metrics.
                </p>
              </div>
              <Link href="#contact" className="btn btn-secondary" style={{ whiteSpace: 'nowrap', borderColor: 'rgba(52, 211, 153, 0.4)', color: '#34D399' }}>
                Speak With An Advisor &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* CONSULTATION CONTACT */}
        <ConsultationContact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
