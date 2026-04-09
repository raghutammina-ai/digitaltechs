import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { posts, categoryColors } from './data'

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Thought leadership, AI trends, and practical insights from the Digital Tech Prosperity team — covering every industry.',
}

const categories = ['All', 'AI & ML', 'Data Analytics', 'Cloud', 'Industry Insights', 'Case Studies']

export default function BlogPage() {
  const featured = posts.filter(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient grid-overlay pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block bg-white/15 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              Insights
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog & Insights</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Practical perspectives on AI, data, cloud, and digital transformation — from our team to yours.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category filters */}
          <AnimatedSection className="flex flex-wrap gap-2 mb-12">
            {categories.map(c => (
              <span key={c} className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-default border transition-colors ${
                c === 'All' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
              }`}>
                {c}
              </span>
            ))}
          </AnimatedSection>

          {/* Featured posts */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {featured.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-white border border-slate-200 rounded-2xl p-7 card-glow h-full flex flex-col hover:border-blue-300 hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                      <span className="text-xs bg-blue-600 text-white px-2.5 py-1 rounded-full font-medium">Featured</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{post.title}</h2>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1"><Tag size={12} />{post.industry}</span>
                      </div>
                      <span className="text-blue-600 text-sm font-medium flex items-center gap-1">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* All posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 card-glow h-full flex flex-col hover:border-blue-300 hover:shadow-md transition-all">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full self-start mb-3 ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{post.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                      <span className="text-blue-600 text-sm font-medium flex items-center gap-1">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
