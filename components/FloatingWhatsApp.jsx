'use client';

import React, { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Automatically reveal the popup after 1.8 seconds with a smooth pop-in
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/971528834899?text=${encodeURIComponent(
    'Hello Valtix Business Solutions, I would like to inquire about your services.'
  )}`;

  return (
    <div className="wa-float-wrapper">
      {/* Premium WhatsApp Chat Popup Card */}
      {showTooltip && (
        <div className="wa-chat-popup" role="dialog" aria-label="WhatsApp quick chat popup">
          {/* Green Top Header Bar with Valtix Brand Identity */}
          <div className="wa-popup-top-banner">
            <div className="wa-top-agent-info">
              <div className="wa-popup-avatar-box">
                <img
                  src="/assets/tlogo.png"
                  alt="Valtix Logo"
                  className="wa-popup-avatar-img"
                />
                <span className="wa-avatar-online-dot" />
              </div>
              <div className="wa-top-details">
                <h4 className="wa-top-name">Valtix Client Support</h4>
                <span className="wa-top-status">Typically replies within 2 mins</span>
              </div>
            </div>

            <button
              type="button"
              className="wa-popup-close-btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTooltip(false);
              }}
              aria-label="Close message"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Speech Bubble Container */}
          <div className="wa-popup-body">
            <div className="wa-chat-bubble">
              <span className="wa-sender-name">Support Team</span>
              <p className="wa-msg-text">
                Hi there! 👋 How can we help your business today? Connect with our Dubai consultants directly on WhatsApp.
              </p>
              <span className="wa-msg-time">Just now</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-cta-action-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
              </svg>
              <span>Chat with us</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-pill"
        id="floatingWhatsappBtn"
        aria-label="Chat with us on WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        <span className="wa-pulse-glow" aria-hidden="true" />
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
        </svg>
      </a>
    </div>
  );
}
