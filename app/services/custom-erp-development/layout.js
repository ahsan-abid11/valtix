import React from 'react';
import '../../globals-erp.css';

export const metadata = {
  title: 'Custom ERP Software Development | Web, Oracle APEX & Desktop ERP',
  description: 'Custom ERP software development for business operations, inventory, finance, manufacturing and HR. Explore web-based, Oracle APEX and desktop ERP solutions.',
  keywords: [
    'custom erp software development',
    'custom erp development',
    'oracle apex erp development',
    'oracle apex development',
    'oracle native desktop erp',
    'custom web erp',
    'enterprise erp solutions',
    'inventory and stores management',
    'finance and accounting erp',
    'manufacturing erp software'
  ],
  alternates: {
    canonical: 'https://valtixsolutions.com/services/custom-erp-development'
  },
  openGraph: {
    title: 'Custom ERP Software Development | Web, Oracle APEX & Desktop ERP',
    description: 'Custom ERP software development for business operations, inventory, finance, manufacturing and HR. Explore web-based, Oracle APEX and desktop ERP solutions.',
    url: 'https://valtixsolutions.com/services/custom-erp-development',
    siteName: 'Valtix',
    type: 'website'
  }
};

export default function CustomErpLayout({ children }) {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom ERP Software Development',
    provider: {
      '@type': 'Organization',
      name: 'Valtix',
      url: 'https://valtixsolutions.com'
    },
    description: 'Custom ERP software development and enterprise business application engineering for finance, inventory, sales, manufacturing and workforce management.',
    serviceType: 'Enterprise Software Development',
    areaServed: 'Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ERP Platforms',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Web ERP'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Oracle APEX Development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Native Desktop ERP'
          }
        }
      ]
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://valtixsolutions.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://valtixsolutions.com/services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Custom ERP Development',
        item: 'https://valtixsolutions.com/services/custom-erp-development'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
