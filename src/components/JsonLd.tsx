const siteUrl = 'https://www.digitaltechs.in'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Digital Tech Prosperity',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: 'Empowering Progress with Digital Tech Prosperity. Intelligent, scalable AI solutions across healthcare, finance, retail, manufacturing, education, logistics and every industry.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@digitaltechs.in',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.linkedin.com/company/digitaltechs',
    'https://twitter.com/digitaltechsin',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI & Software Development',
  provider: {
    '@type': 'Organization',
    name: 'Digital Tech Prosperity',
    url: siteUrl,
  },
  description: 'Custom AI development, machine learning, data analytics, cloud infrastructure, and digital transformation services.',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Machine Learning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Analytics' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Solutions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Transformation' } },
    ],
  },
}

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
