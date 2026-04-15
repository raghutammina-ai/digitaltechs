import AnimatedSection from './AnimatedSection'

const stacks = [
  {
    category: 'AI & Machine Learning',
    accent: 'text-blue-400',
    cardClass: 'hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]',
    tagClass: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    tools: ['OpenAI / GPT-4', 'Anthropic Claude', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Scikit-learn', 'YOLO'],
  },
  {
    category: 'Data & Analytics',
    accent: 'text-cyan-400',
    cardClass: 'hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]',
    tagClass: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    tools: ['Apache Spark', 'Apache Kafka', 'Snowflake', 'dbt', 'Databricks', 'Power BI', 'Tableau', 'Airflow'],
  },
  {
    category: 'Cloud & Infrastructure',
    accent: 'text-teal-400',
    cardClass: 'hover:border-teal-500/40 hover:shadow-[0_0_40px_rgba(20,184,166,0.1)]',
    tagClass: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
    tools: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'Pulumi'],
  },
  {
    category: 'Software Development',
    accent: 'text-violet-400',
    cardClass: 'hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]',
    tagClass: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    tools: ['React / Next.js', 'Node.js', 'Python', 'TypeScript', 'FastAPI', 'PostgreSQL', 'React Native', 'GraphQL'],
  },
]

export default function TechStack() {
  return (
    <section className="bg-[#020817] py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 block">Technology</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Our Technology Stack
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            We work with the industry&apos;s best tools across AI, data, cloud, and software engineering.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {stacks.map((stack, i) => (
            <AnimatedSection key={stack.category} delay={i * 0.08}>
              <div className={`bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${stack.cardClass}`}>
                <h3 className={`font-bold text-xs uppercase tracking-[0.2em] mb-5 ${stack.accent}`}>
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map(tool => (
                    <span
                      key={tool}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg border ${stack.tagClass}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
