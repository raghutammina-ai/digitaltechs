import { MetadataRoute } from 'next'

const siteUrl = 'https://www.digitaltechs.in'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl,                              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${siteUrl}/services`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/about`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/portfolio`,               lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${siteUrl}/blog`,                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${siteUrl}/careers`,                 lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${siteUrl}/contact`,                 lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${siteUrl}/faq`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/industries/healthcare`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/industries/finance`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/industries/retail`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/industries/manufacturing`,lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/industries/logistics`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/industries/education`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/privacy-policy`,          lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${siteUrl}/terms-of-service`,        lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
