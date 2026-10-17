'use client';

import React, { useState } from 'react';

export default function RoiCalculator() {
  const [currentSpend, setCurrentSpend] = useState(15000);

  // Valtix average plan is around 3000-5000 AED. Let's use 4000 AED as a baseline for the calc.
  const valtixCost = 4000;
  const savings = Math.max(0, currentSpend - valtixCost);
  const annualSavings = savings * 12;

  const handleSliderChange = (e) => {
    setCurrentSpend(Number(e.target.value));
  };

  return (
    <section className="roi-section section-py" id="roi-calculator">
      <div className="wrapper">
        <div className="roi-container">
          <div className="roi-header">
            <h2 className="section-title">Calculate Your Savings</h2>
            <p className="section-desc">See how much you could save annually by switching your in-house accounting to Valtix's premium virtual stack.</p>
          </div>

          <div className="roi-calculator-box">
            <div className="roi-slider-group">
              <label className="roi-label">Current Monthly Accounting Spend (AED)</label>
              <div className="roi-value-display">
                {currentSpend.toLocaleString()} <span className="currency">AED</span>
              </div>
              <input 
                type="range" 
                min="3000" 
                max="50000" 
                step="1000" 
                value={currentSpend} 
                onChange={handleSliderChange}
                className="roi-slider"
              />
              <div className="roi-slider-labels">
                <span>3,000 AED</span>
                <span>50,000+ AED</span>
              </div>
            </div>

            <div className="roi-results-grid">
              <div className="roi-result-card">
                <h4>Valtix Monthly Cost</h4>
                <div className="result-value">~{valtixCost.toLocaleString()} <span>AED</span></div>
                <p className="result-note">Based on our popular Retainer Plan.</p>
              </div>
              <div className="roi-result-card highlight">
                <h4>Your Annual Savings</h4>
                <div className="result-value highlight-value">
                  {annualSavings.toLocaleString()} <span>AED</span>
                </div>
                <p className="result-note">Plus zero visa, medical, or gratuity costs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
