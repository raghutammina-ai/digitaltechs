import { MetadataRoute } from 'next'

const siteUrl = 'https://www.digitaltechs.in'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl,                              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${siteUrl}/services`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/about`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/portfolio`,               lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${siteUrl}/contact`,                 lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${siteUrl}/privacy-policy`,          lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
