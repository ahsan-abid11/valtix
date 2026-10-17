'use client';

import React, { useState } from 'react';
import TopNotice from '../../../components/TopNotice';
import Navbar from '../../../components/Navbar';
import ErpHero from '../../../components/ErpHero';
import ErpChallenges from '../../../components/ErpChallenges';
import ErpComparison from '../../../components/ErpComparison';
import ErpModuleExplorer from '../../../components/ErpModuleExplorer';
import ErpIndustries from '../../../components/ErpIndustries';
import ErpProcess from '../../../components/ErpProcess';
import ErpFaq from '../../../components/ErpFaq';
import ConsultationContact from '../../../components/ConsultationContact';
import Footer from '../../../components/Footer';
import FloatingWhatsApp from '../../../components/FloatingWhatsApp';

export default function CustomErpDevelopmentPage() {
  const [selectedModules, setSelectedModules] = useState([
    'Finance and Accounting',
    'Inventory and Stores'
  ]);

  const handleToggleModule = (moduleName) => {
    setSelectedModules((prev) => {
      if (prev.includes(moduleName)) {
        return prev.filter((m) => m !== moduleName);
      } else {
        return [...prev, moduleName];
      }
    });
  };

  const handleBuildMyErp = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formattedNotes = selectedModules.length > 0
    ? `Selected ERP Modules: ${selectedModules.join(', ')}`
    : '';

  return (
    <>
      {/* Global Top Notice & Global Navbar */}
      <TopNotice />
      <Navbar />

      <main id="custom-erp-main" role="main">
        {/* Hero Section */}
        <ErpHero />

        {/* Business Challenges */}
        <ErpChallenges />

        {/* Interactive Platform Comparison */}
        <ErpComparison />

        {/* Interactive Module Explorer */}
        <ErpModuleExplorer
          selectedModules={selectedModules}
          onToggleModule={handleToggleModule}
          onBuildMyErp={handleBuildMyErp}
        />

        {/* Industry Solutions */}
        <ErpIndustries />

        {/* Development Process */}
        <ErpProcess />

        {/* FAQ Accordion */}
        <ErpFaq />

        {/* Global Consultation Contact Form */}
        <div id="contact">
          <ConsultationContact
            initialService="Custom ERP Software Development"
            initialNotes={formattedNotes}
          />
        </div>
      </main>

      {/* Global Footer & Floating WhatsApp */}
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
