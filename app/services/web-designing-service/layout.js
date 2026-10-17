export const metadata = {
  title: 'Bespoke Web Design & Next.js Engineering Dubai | Valtix Solutions',
  description:
    'Custom web design, high-speed Next.js frontend engineering, and conversion-focused business websites in Dubai & UAE. 100% code ownership, zero lock-in.',
  keywords: [
    'web design dubai',
    'web development uae',
    'nextjs development dubai',
    'corporate website design uae',
    'custom web development dubai',
    'ecommerce website development uae',
    'business web design free zone',
  ],
  alternates: {
    canonical: 'https://valtixsolutions.com/services/web-designing-service',
  },
  openGraph: {
    title: 'Bespoke Web Design & Next.js Engineering Dubai | Valtix Solutions',
    description:
      'Custom website design and Next.js development for businesses in Dubai and the UAE. Fast, responsive, and built with code you fully own.',
    url: 'https://valtixsolutions.com/services/web-designing-service',
    siteName: 'Valtix Business Solutions',
    type: 'website',
    locale: 'en_AE',
  },
};

export default function WebDesignLayout({ children }) {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Bespoke Web Design & Development Services',
    provider: {
      '@type': 'Organization',
      name: 'Valtix Business Solutions',
      url: 'https://valtixsolutions.com',
    },
    serviceType: 'Web Design and Development',
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    description:
      'Bespoke Next.js corporate website design, mobile-first UX, performance optimization, and custom web application engineering in Dubai, UAE.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}
