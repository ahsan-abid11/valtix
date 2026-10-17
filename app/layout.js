import './globals.css';
import { Suspense } from 'react';
import PageLoader from '../components/PageLoader';
import { siteConfig } from '../data/siteConfig';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    'UAE accounting',
    'virtual bookkeeping Dubai',
    'Corporate Tax UAE',
    'VAT filing UAE',
    'WPS payroll UAE',
    'Zoho Books Dubai',
    'QuickBooks UAE',
    'web development UAE',
    'Free Zone accounting',
  ],
  authors: [{ name: siteConfig.name }],
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.title,
    description:
      'Audit-ready virtual accounting, FTA tax filings, WPS payroll, and web engineering for UAE SMEs without in-house salary overhead.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Valtix Business Solutions UAE',
      },
    ],
    locale: 'en_AE',
  },
};

export const viewport = {
  themeColor: '#111317',
};
export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: 'Valtix Business Solutions',
    description:
      'Dedicated virtual bookkeeping, UAE VAT & FTA Corporate Tax compliance, WPS payroll, and digital development for enterprises across the UAE.',
    url: siteConfig.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    areaServed: [
      'Dubai',
      'Abu Dhabi',
      'Sharjah',
      'Ajman',
      'Ras Al Khaimah',
      'UAE Free Zones',
    ],
    currenciesAccepted: 'AED',
    openingHours: 'Mo-Fr 09:00-18:00',
  };

  return (
    <html lang="en">
      <head>
        {/* Plus Jakarta Sans, Outfit & Open Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&family=Space+Grotesk:wght@600;700&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/product-sans"
          rel="stylesheet"
        />
        {/* Structured JSON-LD Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <PageLoader />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
