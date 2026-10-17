import React from 'react';

export default function TopNotice() {
  const noticeText = "Corporate Tax & Quarterly VAT 201 compliance — zero in-house salary overhead across all 7 Emirates.";

  // Create a block of content that represents one "loop"
  const noticeBlock = (
    <>
      <span className="notice-text">{noticeText}</span>
      <span className="notice-divider">•</span>
    </>
  );

  return (
    <aside className="top-notice" role="note" aria-label="UAE Corporate Regulatory Announcement">
      <div className="marquee-container">
        <div className="marquee-content">
          {/* We duplicate the block multiple times so it fills the screen and animates seamlessly */}
          {noticeBlock}
          {noticeBlock}
          {noticeBlock}
          {noticeBlock}
        </div>
      </div>
    </aside>
  );
}
