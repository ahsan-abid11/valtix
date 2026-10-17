export default function sitemap() {
  const baseUrl = 'https://valtixsolutions.com';
  const lastModified = new Date().toISOString();

  // All canonical public indexable pages
  const routes = [
    // Main Landing Page
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Core Services
    {
      url: `${baseUrl}/services/web-designing-service`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/custom-erp-development`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/enterprise-portals`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/mobile-app-development`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Industry Modules
    {
      url: `${baseUrl}/industries/general-trading`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/professional-consultancies`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/technical-maintenance`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/cleaning-facility-care`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/event-production`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/beauty-salons-wellness`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return routes;
}
