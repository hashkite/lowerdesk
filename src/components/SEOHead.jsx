import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://fittrock.com/pages/yogeek-height-adjustable-desk';
const OG_IMAGE = 'https://lh3.googleusercontent.com/aida/AP1WRLv2MIDvxaugAP2Foj9KcJsiLvh_AAMysbY5aAcbn0cOELMjwb5wj18EX_gEgZ2iPUPmccG8eWfa4TkJ2hsZJTdOIAQdZyxk8-rrB6FyVZh2omZ7v2iLqoijRUBm4nw5C-I49kKDYGOAB-w2zZLos3uBavpUHkU0jaWuW7gbjkiQ2SQxseP9OH-3jyDbEbWoqQqa6cDxe9VPGWXWKHVWAbdBVtLXXEC0C-YX_Ud8FCnJfbV6GcUXdlEKiQ';

export default function SEOHead() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Yogeek Pro Electric Standing Desk',
    description:
      'The only electric standing desk that descends to 49cm for natural floor-sitting and rises to 120cm for standing. Engineered for biological movement.',
    brand: {
      '@type': 'Brand',
      name: 'Lowerdesk by Fittrock',
    },
    offers: {
      '@type': 'Offer',
      url: SITE_URL,
      priceCurrency: 'INR',
      price: '37999',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/PreOrder',
      itemCondition: 'https://schema.org/NewCondition',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '550',
    },
    image: OG_IMAGE,
    sku: 'YOGEEK-PRO-001',
    manufacturer: {
      '@type': 'Organization',
      name: 'Fittrock Ergonomics LLP',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office no 610, 6th floor, Park Plaza, Porwal Rd, Lohegaon',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        postalCode: '411047',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Yogeek Pro | Precision Floor-to-Standing Electric Desk by Fittrock</title>
      <meta
        name="description"
        content="Experience ultimate ergonomic freedom with Yogeek Pro, the only electric standing desk that descends to 49cm for natural floor-sitting and rises to 120cm for standing. Engineered for biological movement."
      />
      <meta name="keywords" content="electric standing desk, floor sitting desk, ergonomic desk, sit stand desk, adjustable height desk, lowerdesk, lowerdesk by fittrock, standing desk India, fittrock, yogeek, yogeek pro" />
      <meta name="author" content="Fittrock Ergonomics LLP" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={SITE_URL} />

      {/* Open Graph */}
      <meta property="og:type" content="product" />
      <meta property="og:title" content="Yogeek Pro | Precision Floor-to-Standing Electric Desk by Fittrock" />
      <meta
        property="og:description"
        content="The only electric desk that goes from floor-sitting (49cm) to standing (120cm). Special offer — Order now."
      />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:site_name" content="Lowerdesk by Fittrock" />
      <meta property="og:locale" content="en_IN" />
      <meta property="product:price:amount" content="37999" />
      <meta property="product:price:currency" content="INR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Yogeek Pro | Precision Floor-to-Standing Electric Desk by Fittrock" />
      <meta
        name="twitter:description"
        content="The only electric desk that goes from floor-sitting (49cm) to standing (120cm). Special offer — Order now."
      />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Mobile & PWA */}
      <meta name="theme-color" content="#4a7c59" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured Data — JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
