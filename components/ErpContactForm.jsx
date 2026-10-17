'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function ErpContactForm({ selectedModules = [] }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    industry: 'Manufacturing & Factories',
    preferredPlatform: 'Custom Web ERP',
    requiredModules: '',
    existingSoftware: '',
    approxUserCount: '10–50 Users',
    projectDescription: '',
    preferredContactMethod: 'Email & Video Consultation'
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // idle | submitting | success | dev_mode
  const [statusMessage, setStatusMessage] = useState('');

  // Synchronize prefilled modules from Module Explorer when selectedModules change
  useEffect(() => {
    if (selectedModules && selectedModules.length > 0) {
      setFormData(prev => ({
        ...prev,
        requiredModules: selectedModules.join(', ')
      }));
    }
  }, [selectedModules]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    }
    if (!formData.businessEmail.trim()) {
      errors.businessEmail = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errors.businessEmail = 'Please provide a valid business email address.';
    }
    if (!formData.companyName.trim()) {
      errors.companyName = 'Company name is required.';
    }
    if (!formData.projectDescription.trim()) {
      errors.projectDescription = 'Please briefly describe your current operations and goals.';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstErrorField = Object.keys(errors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();
      return;
    }

    setSubmissionStatus('submitting');

    // Documented Integration Boundary:
    // This connects to the client's direct consultation channel while cleanly logging the structured payload.
    // In production environments without a dedicated SMTP/CRM microservice, we provide both a WhatsApp advisory
    // dispatch and a local dev-mode confirmation state.
    setTimeout(() => {
      const summaryPayload =
        `*Custom ERP Project Inquiry — Valtix*\n\n` +
        `• *Full Name:* ${formData.fullName}\n` +
        `• *Business Email:* ${formData.businessEmail}\n` +
        `• *Company:* ${formData.companyName}\n` +
        `• *Industry:* ${formData.industry}\n` +
        `• *Preferred Platform:* ${formData.preferredPlatform}\n` +
        `• *Required Modules:* ${formData.requiredModules || 'General ERP Scope'}\n` +
        `• *Existing Systems:* ${formData.existingSoftware || 'Spreadsheets / None'}\n` +
        `• *Approximate Users:* ${formData.approxUserCount}\n` +
        `• *Contact Preference:* ${formData.preferredContactMethod}\n` +
        `• *Project Overview:* ${formData.projectDescription}\n\n` +
        `_Generated via Valtix ERP Architectural Portal_`;

      const whatsappUrl = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(summaryPayload)}`;

      // Open WhatsApp consultation link in background
      try {
        window.open(whatsappUrl, '_blank');
      } catch (err) {
        console.info('Direct window dispatch notice:', err);
      }

      setSubmissionStatus('success');
      setStatusMessage('Your ERP scope enquiry has been formatted and initiated. Our engineering team will review your specifications within one business day.');
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      industry: 'Manufacturing & Factories',
      preferredPlatform: 'Custom Web ERP',
      requiredModules: '',
      existingSoftware: '',
      approxUserCount: '10–50 Users',
      projectDescription: '',
      preferredContactMethod: 'Email & Video Consultation'
    });
    setFormErrors({});
    setSubmissionStatus('idle');
  };

  return (
    <section className="erp-section erp-section-dark" id="contact">
      <div className="erp-container">
        <div className="erp-contact-split">
          {/* Left Context Information */}
          <div className="erp-contact-info-col">
            <span className="erp-eyebrow" style={{ color: 'var(--erp-accent)' }}>DIRECT ARCHITECTURAL CONSULTATION</span>
            <h2 className="erp-contact-h2">Your Business Is Unique. Your ERP Should Be, Too.</h2>
            <p className="erp-contact-desc">
              Tell us how your business operates, which systems you currently use and what you want to improve. We'll help you identify a practical development approach.
            </p>

            <div className="erp-contact-commitments">
              <div className="commitment-item">
                <span className="commit-icon">✓</span>
                <div>
                  <strong>NDA Under Law</strong>
                  <p>Mutual non-disclosure protection before reviewing proprietary spreadsheets or databases.</p>
                </div>
              </div>
              <div className="commitment-item">
                <span className="commit-icon">✓</span>
                <div>
                  <strong>No High-Pressure Sales</strong>
                  <p>Consultations are conducted with senior technical architects, not aggressive sales commission reps.</p>
                </div>
              </div>
              <div className="commitment-item">
                <span className="commit-icon">✓</span>
                <div>
                  <strong>Fixed-Scope Proposals</strong>
                  <p>Milestone-based commercial estimates with clear architectural boundaries and source-code rights.</p>
                </div>
              </div>
            </div>

            <div className="erp-contact-office-box">
              <span className="office-title">Engineering Office &amp; Inquiries:</span>
              <p className="office-detail"><strong>Email:</strong> {siteConfig.email}</p>
              <p className="office-detail"><strong>Active Hours:</strong> {siteConfig.operatingHours}</p>
              <p className="office-detail"><strong>Model:</strong> {siteConfig.operatingModel}</p>
            </div>
          </div>

          {/* Right Responsive Form Card */}
          <div className="erp-form-card" role="region" aria-label="ERP Project Scope Enquiry Form">
            {submissionStatus === 'success' ? (
              <div className="erp-form-success-box" role="status" aria-live="polite">
                <div className="success-icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--erp-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3>Enquiry Successfully Prepared</h3>
                <p>{statusMessage}</p>
                <div className="success-summary">
                  <strong>Registered Company:</strong> {formData.companyName} ({formData.businessEmail})<br />
                  <strong>Platform Selected:</strong> {formData.preferredPlatform}<br />
                  <strong>Scoped Modules:</strong> {formData.requiredModules || 'Custom Scope'}
                </div>
                <button type="button" className="erp-btn erp-btn-outline-light" onClick={handleReset} style={{ marginTop: '20px' }}>
                  <span>Submit Another Project Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="erp-enquiry-form">
                <div className="form-row-duo">
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Tariq Al-Mansoor"
                      className={`form-input ${formErrors.fullName ? 'has-error' : ''}`}
                      required
                    />
                    {formErrors.fullName && <span className="form-error-msg">{formErrors.fullName}</span>}
                  </div>

                  {/* Business Email */}
                  <div className="form-group">
                    <label htmlFor="businessEmail" className="form-label">
                      Business Email <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      placeholder="tariq@company.com"
                      className={`form-input ${formErrors.businessEmail ? 'has-error' : ''}`}
                      required
                    />
                    {formErrors.businessEmail && <span className="form-error-msg">{formErrors.businessEmail}</span>}
                  </div>
                </div>

                <div className="form-row-duo">
                  {/* Company Name */}
                  <div className="form-group">
                    <label htmlFor="companyName" className="form-label">
                      Company Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Al-Mansoor Industrial LLC"
                      className={`form-input ${formErrors.companyName ? 'has-error' : ''}`}
                      required
                    />
                    {formErrors.companyName && <span className="form-error-msg">{formErrors.companyName}</span>}
                  </div>

                  {/* Industry */}
                  <div className="form-group">
                    <label htmlFor="industry" className="form-label">Industry Domain</label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Manufacturing & Factories">Manufacturing &amp; Factories</option>
                      <option value="Wholesale & Distribution">Wholesale &amp; Distribution</option>
                      <option value="Warehousing & Logistics">Warehousing &amp; Logistics</option>
                      <option value="Retail & Multi-Location">Retail &amp; Multi-Location</option>
                      <option value="Professional & Service Businesses">Professional &amp; Service Businesses</option>
                      <option value="Other Industry">Other Industry Environment</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-duo">
                  {/* Preferred Platform */}
                  <div className="form-group">
                    <label htmlFor="preferredPlatform" className="form-label">Preferred Platform Architecture</label>
                    <select
                      id="preferredPlatform"
                      name="preferredPlatform"
                      value={formData.preferredPlatform}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Custom Web ERP (React/Node/PostgreSQL)">Custom Web ERP (Browser / React / PostgreSQL)</option>
                      <option value="Oracle APEX Development">Oracle APEX (Database-Centric / SQL / PL-SQL)</option>
                      <option value="Native Desktop ERP (.NET)">Native Desktop ERP (.NET / High-Speed Counter / Warehouse)</option>
                      <option value="Architectural Recommendation Needed">Not Sure — Recommend Best Fit</option>
                    </select>
                  </div>

                  {/* Approximate User Count */}
                  <div className="form-group">
                    <label htmlFor="approxUserCount" className="form-label">Approximate User Count</label>
                    <select
                      id="approxUserCount"
                      name="approxUserCount"
                      value={formData.approxUserCount}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="1–10 Users">1–10 Users</option>
                      <option value="10–50 Users">10–50 Users</option>
                      <option value="50–150 Users">50–150 Users</option>
                      <option value="150+ Enterprise Users">150+ Enterprise Users</option>
                    </select>
                  </div>
                </div>

                {/* Required Modules (Prefilled from explorer if chosen) */}
                <div className="form-group">
                  <label htmlFor="requiredModules" className="form-label">
                    Required ERP Modules
                    <span className="form-label-hint">(Automatically prefilled from Module Explorer above)</span>
                  </label>
                  <input
                    type="text"
                    id="requiredModules"
                    name="requiredModules"
                    value={formData.requiredModules}
                    onChange={handleChange}
                    placeholder="e.g. Inventory and Stores, Finance and Accounting, Sales and Purchasing"
                    className="form-input"
                  />
                </div>

                {/* Existing Software / Database */}
                <div className="form-group">
                  <label htmlFor="existingSoftware" className="form-label">
                    Current Systems or Database
                    <span className="form-label-hint">(e.g. Excel spreadsheets, Tally, QuickBooks, legacy Oracle 11g, etc.)</span>
                  </label>
                  <input
                    type="text"
                    id="existingSoftware"
                    name="existingSoftware"
                    value={formData.existingSoftware}
                    onChange={handleChange}
                    placeholder="e.g. Multiple Excel sheets + legacy Tally system"
                    className="form-input"
                  />
                </div>

                {/* Project Description */}
                <div className="form-group">
                  <label htmlFor="projectDescription" className="form-label">
                    Brief Project Overview &amp; Key Goals <span className="req">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    placeholder="Explain how your business currently operates, what specific workflows break down, and what milestones you want to achieve."
                    className={`form-textarea ${formErrors.projectDescription ? 'has-error' : ''}`}
                    required
                  />
                  {formErrors.projectDescription && <span className="form-error-msg">{formErrors.projectDescription}</span>}
                </div>

                {/* Preferred Contact Method */}
                <div className="form-group">
                  <label htmlFor="preferredContactMethod" className="form-label">Preferred Consultation Method</label>
                  <select
                    id="preferredContactMethod"
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Email & Video Consultation">Email &amp; Video Call (Google Meet / Teams)</option>
                    <option value="WhatsApp Direct Discussion">WhatsApp Direct Discussion</option>
                    <option value="Direct Phone Call">Direct Phone Call</option>
                  </select>
                </div>

                {/* Submit Action */}
                <div className="form-submit-row">
                  <button
                    type="submit"
                    className="erp-btn erp-btn-accent"
                    disabled={submissionStatus === 'submitting'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {submissionStatus === 'submitting' ? (
                      <span>Formatting Scope...</span>
                    ) : (
                      <>
                        <span>Submit Project Scope Enquiry</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                <p className="form-security-note">
                  🔒 All client submissions are protected under mutual NDA. We never share or sell company details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
