'use client';

import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function ConsultationContact({ initialService = 'Monthly Accounting & Bookkeeping', initialNotes = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: initialService,
    notes: initialNotes,
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const company = formData.company.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim() || 'N/A';
    const service = formData.service;
    const notes = formData.notes.trim() || 'None';

    const text =
      `*New Advisory Inquiry — Valtix UAE*\n\n` +
      `• *Name:* ${name}\n` +
      `• *Company/Zone:* ${company}\n` +
      `• *WhatsApp:* ${phone}\n` +
      `• *Email:* ${email}\n` +
      `• *Service Interest:* ${service}\n` +
      `• *Overview:* ${notes}\n\n` +
      `_Sent via Valtix Web Portal_`;

    window.open(`https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopyDetails = () => {
    const name = formData.name.trim() || 'N/A';
    const company = formData.company.trim() || 'N/A';
    const phone = formData.phone.trim() || 'N/A';
    const email = formData.email.trim() || 'N/A';
    const service = formData.service;
    const notes = formData.notes.trim() || 'None';

    const payload = `Valtix Inquiry:\nName: ${name}\nCompany: ${company}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nNotes: ${notes}`;

    const tempInput = document.createElement('textarea');
    tempInput.value = payload;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Unable to copy', err);
    }
    document.body.removeChild(tempInput);
  };

  return (
    <section className="section-py contact-section" id="contact">
      <div className="wrapper">
        <header className="contact-clean-header text-center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Get in Touch</p>
          <h2 className="section-title">Schedule a Free 20-Minute Consultation</h2>
          <p className="section-desc" style={{ maxWidth: '640px', marginInline: 'auto' }}>
            Connect with an experienced UAE accountant and digital strategist. We will review your transaction volume,
            software setup, or urgent filing deadlines under full confidentiality.
          </p>
        </header>

        <div className="contact-grid-clean">
          {/* Left Details Box */}
          <div className="contact-info-panel-clean">
            <div>
              <h3>Direct Virtual Support</h3>
              <p className="intro">
                Serving Mainland and Free Zone enterprises across Dubai, Abu Dhabi, Sharjah, and all Northern Emirates with 100% virtual delivery.
              </p>

              <div className="info-rows-clean">
                <div className="info-item-clean">
                  <div className="info-icon-clean">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4>Operating Model</h4>
                    <p>100% Virtual — Dubai, Abu Dhabi, Sharjah &amp; Free Zones</p>
                  </div>
                </div>

                <div className="info-item-clean">
                  <div className="info-icon-clean">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Instant Messaging</h4>
                    <p>
                      <a href={siteConfig.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                        Chat directly on WhatsApp &rarr;
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item-clean">
                  <div className="info-icon-clean">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4>Official Inquiries</h4>
                    <p>
                      <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="security-badge-clean">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>All discussions protected by mutual UAE NDA.</span>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="contact-form-panel-clean">
            <form id="advisoryForm" onSubmit={handleSubmit}>
              <div className="form-duo">
                <div className="field-group">
                  <label htmlFor="name">Your Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="company">Company / Free Zone *</label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="form-input"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-duo">
                <div className="field-group">
                  <label htmlFor="phone">WhatsApp Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="email">Business Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="service">Primary Area of Interest *</label>
                <select
                  id="service"
                  className="form-input"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Custom ERP Software Development">Custom ERP Software Development</option>
                  <option value="Monthly Accounting & Bookkeeping">Monthly Accounting &amp; Bookkeeping</option>
                  <option value="UAE VAT 201 Registration & Quarterly Filing">UAE VAT 201 Registration &amp; Quarterly Filing</option>
                  <option value="Corporate Tax Registration & Compliance">Corporate Tax Registration &amp; Compliance</option>
                  <option value="WPS Compliant MoHRE Payroll">WPS Compliant MoHRE Payroll</option>
                  <option value="Historical Backlog Ledger Reconstruction">Historical Backlog Ledger Reconstruction</option>
                  <option value="Corporate Web Development & Design">Corporate Web Design &amp; Digital Infrastructure</option>
                  <option value="Comprehensive Virtual Retainer">Comprehensive All-in-One Retainer</option>
                </select>
              </div>

              <div className="field-group">
                <label htmlFor="notes">Brief Overview / Monthly Invoices</label>
                <textarea
                  id="notes"
                  rows={3}
                  className="form-input"
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-buttons-row">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ flex: '1', minWidth: '220px', paddingBlock: '13px' }}
                >
                  <span>Send via WhatsApp Advisory</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="btn btn-secondary"
                  style={{ paddingBlock: '13px' }}
                >
                  <span>{copied ? 'Copied!' : 'Copy Details'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
