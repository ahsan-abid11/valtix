import React from 'react';

const steps = [
  {
    number: "01",
    phase: "Phase 1",
    timeframe: "Day 1",
    title: "Discovery & Scope Assessment",
    desc: "We execute a mutual UAE NDA and review your monthly transaction volume, bank accounts, VAT status, and software setup to define your scope.",
    badgeColor: "#0071e3",
    badgeBg: "rgba(0, 113, 227, 0.1)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6M8 11h6" />
      </svg>
    )
  },
  {
    number: "02",
    phase: "Phase 2",
    timeframe: "Day 2",
    title: "Read-Only Integration",
    desc: "We connect to your Zoho Books, QuickBooks, or Xero with read-only bank feeds. Zero operational disruption and zero access to your funds.",
    badgeColor: "#0284c7",
    badgeBg: "rgba(2, 132, 199, 0.1)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    )
  },
  {
    number: "03",
    phase: "Phase 3",
    timeframe: "Ongoing",
    title: "Live Books & Submissions",
    desc: "Your dedicated accountant classifies transactions, prepares P&L and Balance Sheet reports, and files timely VAT 201 returns every cycle.",
    badgeColor: "#10b981",
    badgeBg: "rgba(16, 185, 129, 0.1)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    )
  }
];

export default function OnboardingSteps() {
  return (
    <section className="section-py onboarding-section" id="onboarding">
      <div className="wrapper">
        {/* Header */}
        <header className="text-center" style={{ marginBottom: '44px' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Simple Execution</p>
          <h2 className="section-title">Seamless 3-Step Onboarding</h2>
          <p className="section-desc" style={{ textAlign: 'center', marginInline: 'auto', maxWidth: '540px' }}>
            Transitioning your bookkeeping is structured, confidential, and completed in under 48 hours.
          </p>
        </header>

        {/* 3 Step Cards Grid */}
        <div className="onboarding-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="onboarding-card">
              <div className="onboarding-card-top">
                <span className="onboarding-step-badge" style={{ color: step.badgeColor, background: step.badgeBg, borderColor: `${step.badgeColor}33` }}>
                  Step {step.number} · {step.timeframe}
                </span>
                <div className="onboarding-step-icon" style={{ color: step.badgeColor, background: step.badgeBg }}>
                  {step.icon}
                </div>
              </div>

              <h3 className="onboarding-card-title">{step.title}</h3>
              <p className="onboarding-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="onboarding-cta">
          <a href="#contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Start Your Onboarding
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="onboarding-cta-note">No commitment required · Free discovery consultation included</p>
        </div>
      </div>
    </section>
  );
}
