import React from 'react';

const platforms = [
  {
    name: "QuickBooks Online",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22" r="21" fill="#2CA01C" />
        <path d="M22 11C15.925 11 11 15.925 11 22c0 4.29 2.457 7.995 6.045 9.774v-3.795C14.92 26.395 13.4 23.995 13.4 22c0-4.75 3.85-8.6 8.6-8.6h1.2V11H22zm1.2 11.2H22c-4.75 0-8.6 3.85-8.6 8.6 0 1.995 1.52 4.395 3.645 5.979v-3.795C19.457 30.005 17 26.29 17 22c0-2.76 2.24-5 5-5h1.2v6.2z" fill="#FFFFFF" />
        <path d="M22 33c6.075 0 11-4.925 11-11 0-4.29-2.457-7.995-6.045-9.774v3.795c2.125 1.584 3.645 3.984 3.645 5.979 0 4.75-3.85 8.6-8.6 8.6h-1.2V33H22zm-1.2-11.2H22c4.75 0 8.6-3.85 8.6-8.6 0-1.995-1.52-4.395-3.645-5.979v3.795C24.543 13.995 27 17.71 27 22c0 2.76-2.24 5-5 5h-1.2v-6.2z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Zoho Books",
    icon: (
      <svg width="42" height="42" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="18" height="18" rx="4.5" fill="#E42528" />
        <rect x="24" y="2" width="18" height="18" rx="4.5" fill="#22AC38" />
        <rect x="2" y="24" width="18" height="18" rx="4.5" fill="#0091DA" />
        <rect x="24" y="24" width="18" height="18" rx="4.5" fill="#F8B61C" />
        <text x="11" y="15.5" fill="#FFFFFF" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="12" textAnchor="middle">Z</text>
        <text x="33" y="15.5" fill="#FFFFFF" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="12" textAnchor="middle">O</text>
        <text x="11" y="37.5" fill="#FFFFFF" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="12" textAnchor="middle">H</text>
        <text x="33" y="37.5" fill="#FFFFFF" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="12" textAnchor="middle">O</text>
      </svg>
    ),
  },
  {
    name: "Xero Accounting",
    icon: (
      <svg width="42" height="42" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22" r="21" fill="#13B5EA" />
        <path d="M13 14l5 8-5 8h4.5l2.7-4.5 2.7 4.5h4.5l-5-8 5-8h-4.5l-2.7 4.5-2.7-4.5H13z" fill="#FFFFFF" />
        <circle cx="33" cy="22" r="2.2" fill="#FFFFFF" />
        <circle cx="11" cy="22" r="2.2" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "FTA EmaraTax",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="10" fill="#0C4A28" />
        <rect x="7" y="10" width="4" height="24" rx="1" fill="#EE161F" />
        <rect x="13" y="10" width="24" height="7" fill="#00732F" />
        <rect x="13" y="18.5" width="24" height="7" fill="#FFFFFF" />
        <rect x="13" y="27" width="24" height="7" fill="#111317" />
        <circle cx="25" cy="22" r="8" fill="#C5A059" />
        <text x="25" y="25" fill="#0C4A28" fontFamily="'JetBrains Mono', monospace" fontWeight="800" fontSize="7" textAnchor="middle">FTA</text>
      </svg>
    ),
  },
  {
    name: "Cloud Migration",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="10" fill="#FFF2ED" />
        <path d="M33 24.5a6 6 0 0 0-5.8-4.5 6.1 6.1 0 0 0-1.2.1A8 8 0 0 0 12.5 23a5.5 5.5 0 0 0 1.5 10.8H32.5a5 5 0 0 0 .5-9.3z" fill="rgba(200, 80, 46, 0.15)" />
        <path d="M22 17v12m0-12l-3.5 3.5M22 17l3.5 3.5" stroke="#C8502E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 27l7 5.5 7-5.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function SoftwareEcosystem() {
  // Repeat the 5 platforms to create 2 identical groups of 10 items for a seamless 50% scroll loop
  const repeatedList = [...platforms, ...platforms, ...platforms, ...platforms];

  return (
    <section className="software-ecosystem-section" id="cloud-platforms" aria-label="Supported Cloud Platforms">
      <div className="cloud-marquee-wrap" aria-label="Supported accounting software carousel">
        <div className="cloud-marquee-track">
          {repeatedList.map((platform, index) => (
            <div key={index} className="cloud-platform-item" aria-hidden={index >= platforms.length * 2 ? "true" : undefined}>
              <div className="cloud-platform-icon-box">
                {platform.icon}
              </div>
              <span className="cloud-platform-name">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
