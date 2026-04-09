import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Thought leadership, AI trends, and practical insights from the Digital Tech Prosperity team — covering every industry.',
}

const categories = ['All', 'AI & ML', 'Data Analytics', 'Cloud', 'Industry Insights', 'Case Studies']

const posts = [
  {
    title: 'How Generative AI is Transforming Healthcare Diagnostics',
    excerpt: 'From medical imaging to clinical decision support, generative AI is reshaping how clinicians diagnose and treat patients. Here\'s what\'s working in production today.',
    category: 'AI & ML',
    industry: 'Healthcare',
    readTime: '6 min read',
    date: 'Apr 5, 2026',
    featured: true,
  },
  {
    title: 'Building Real-Time Data Pipelines for Financial Services',
    excerpt: 'Latency matters in finance. We break down the architecture behind a real-time trading intelligence platform we built for a capital markets client.',
    category: 'Data Analytics',
    industry: 'Finance',
    readTime: '8 min read',
    date: 'Mar 28, 2026',
    featured: true,
  },
  {
    title: 'RAG vs Fine-Tuning: Which Should You Choose for Your LLM?',
    excerpt: 'Retrieval-Augmented Generation and fine-tuning both have their place. We compare the two approaches across cost, accuracy, and maintenance overhead.',
    category: 'AI & ML',
    industry: 'General',
    readTime: '7 min read',
    date: 'Mar 20, 2026',
    featured: false,
  },
  {
    title: 'Predictive Maintenance in Manufacturing: A Practical Guide',
    excerpt: 'IoT sensors + ML models + real-time dashboards. We walk through the full architecture of a predictive maintenance system that reduced downtime by 38%.',
    category: 'Case Studies',
    industry: 'Manufacturing',
    readTime: '10 min read',
    date: 'Mar 12, 2026',
    featured: false,
  },
  {
    title: 'Cloud Cost Optimisation: 5 Strategies That Actually Work',
    excerpt: 'Cloud bills spiralling? We share five strategies our engineering team uses to cut AWS and Azure costs without sacrificing performance or reliability.',
    category: 'Cloud',
    industry: 'General',
    readTime: '5 min read',
    date: 'Mar 5, 2026',
    featured: false,
  },
  {
    title: 'AI in Retail: From Recommendation Engines to Store Operations',
    excerpt: 'Retailers using AI across the value chain are outpacing competitors. We look at the highest-ROI applications of AI in retail and e-commerce today.',
    category: 'Industry Insights',
    industry: 'Retail',
    readTime: '6 min read',
    date: 'Feb 24, 2026',
    featured: false,
  },
  {
    title: 'Responsible AI: Building Systems That Are Fair and Explainable',
    excerpt: 'As AI makes higher-stakes decisions, fairness and explainability are no longer optional. Here\'s how we approach responsible AI development at DTP.',
    category: 'AI & ML',
    industry: 'General',
    readTime: '7 min read',
    date: 'Feb 14, 2026',
    featured: false,
  },
  {
    title: 'Automating Government Services with RPA and Document AI',
    excerpt: 'We helped a government agency cut processing time by 60% using Robotic Process Automation and AI-powered document extraction. Full case study inside.',
    category: 'Case Studies',
    industry: 'Government',
    readTime: '9 min read',
    date: 'Feb 3, 2026',
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  'AI & ML':           'bg-blue-50 text-blue-600',
  'Data Analytics':    'bg-cyan-50 text-cyan-600',
  'Cloud':             'bg-teal-50 text-teal-600',
  'Industry Insights': 'bg-purple-50 text-purple-600',
  'Case Studies':      'bg-orange-50 text-orange-600',
}

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
              <AnimatedSection key={post.title} delay={i * 0.1}>
                <div className="bg-white border border-slate-200 rounded-2xl p-7 card-glow h-full flex flex-col">
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
                    <Link href="#" className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* All posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 0.05}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 card-glow h-full flex flex-col">
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
                    <Link href="#" className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
