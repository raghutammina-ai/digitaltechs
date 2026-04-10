import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { posts, getPost, categoryColors } from '../data'

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const related = posts.filter(p => p.slug !== post.slug && (p.category === post.category || p.industry === post.industry)).slice(0, 3)

  const paragraphs = post.content.split('\n\n')

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient grid-overlay pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-200 text-sm mb-6 hover:text-white transition-colors">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/20`}>
                {post.category}
              </span>
              <span className="text-xs bg-white/15 text-white px-2.5 py-1 rounded-full border border-white/20">
                {post.industry}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-blue-100 text-lg mb-6">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200">
              <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
              <span className="flex items-center gap-1.5"><Tag size={14} />{post.industry}</span>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Article */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12">
            <AnimatedSection>
              <div className="prose prose-slate prose-lg max-w-none">
                {paragraphs.map((para, i) => {
                  if (para.startsWith('## ')) {
                    return (
                      <h2 key={i} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                        {para.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (para.startsWith('**') && para.includes('**:')) {
                    const [boldPart, ...rest] = para.split('**:')
                    return (
                      <p key={i} className="text-slate-600 leading-relaxed mb-4">
                        <strong className="text-slate-900">{boldPart.replace('**', '')}:</strong>{rest.join('**:')}
                      </p>
                    )
                  }
                  return (
                    <p key={i} className="text-slate-600 leading-relaxed mb-4">
                      {para}
                    </p>
                  )
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* CTA */}
          <AnimatedSection className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to apply AI in your organisation?</h3>
            <p className="text-blue-100 mb-6">Book a free consultation and let&apos;s discuss your specific use case.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
              Get a Free Consultation
            </Link>
          </AnimatedSection>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-16">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((p, i) => (
                  <AnimatedSection key={p.slug} delay={i * 0.1}>
                    <Link href={`/blog/${p.slug}`}>
                      <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all h-full flex flex-col">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full self-start mb-3 ${categoryColors[p.category]}`}>
                          {p.category}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug flex-1">{p.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-3">
                          <Clock size={11} />{p.readTime}
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
