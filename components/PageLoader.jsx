'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  // When pathname or search params change, hide loader after rendering completes
  useEffect(() => {
    setLoading(false);
  }, [pathname, searchParams]);

  // Intercept client-side link clicks that trigger route changes
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Ignore anchor jumps on same page, tel, mailto, target="_blank", or external protocols
      if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        target.target === '_blank' ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey
      ) {
        return;
      }

      // Check if it's an internal route that is different from current pathname
      try {
        const url = new URL(href, window.location.href);
        const currentUrl = new URL(window.location.href);

        if (url.origin === currentUrl.origin) {
          // If navigating to different page or different query
          if (url.pathname !== currentUrl.pathname || url.search !== currentUrl.search) {
            setLoading(true);
          }
        }
      } catch (err) {
        // Fallback relative check
        if (href.startsWith('/') && href !== window.location.pathname) {
          setLoading(true);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });

    // Handle browser back/forward buttons
    const handlePopState = () => {
      setLoading(true);
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleAnchorClick, { capture: true });
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Safety auto-dismiss after 6s in case route takes unusually long or fails
  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="valtix-page-loader-backdrop" aria-live="assertive" role="alert">
      <div className="valtix-page-loader-box">
        <div className="valtix-spinner-green" />
      </div>
    </div>
  );
}
