import AnimatedSection from './AnimatedSection'

const stacks = [
  {
    category: 'AI & Machine Learning',
    color: 'text-blue-400',
    border: 'hover:border-blue-500/30',
    tag: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    tools: ['OpenAI / GPT-4', 'Anthropic Claude', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Scikit-learn', 'YOLO'],
  },
  {
    category: 'Data & Analytics',
    color: 'text-cyan-400',
    border: 'hover:border-cyan-500/30',
    tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    tools: ['Apache Spark', 'Apache Kafka', 'Snowflake', 'dbt', 'Databricks', 'Power BI', 'Tableau', 'Airflow'],
  },
  {
    category: 'Cloud & Infrastructure',
    color: 'text-emerald-400',
    border: 'hover:border-emerald-500/30',
    tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    tools: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'Pulumi'],
  },
  {
    category: 'Software Development',
    color: 'text-violet-400',
    border: 'hover:border-violet-500/30',
    tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    tools: ['React / Next.js', 'Node.js', 'Python', 'TypeScript', 'FastAPI', 'PostgreSQL', 'React Native', 'GraphQL'],
  },
]

export default function TechStack() {
  return (
    <section className="py-24 border-t border-white/[0.06] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-4">Technology</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Our technology stack
          </h2>
          <p className="text-zinc-500 max-w-md mx-auto text-lg leading-relaxed">
            Best-in-class tools across AI, data, cloud, and software engineering.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stacks.map((s, i) => (
            <AnimatedSection key={s.category} delay={i * 0.07}>
              <div className={`border border-white/[0.08] ${s.border} rounded-2xl p-7 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1`}>
                <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-5 ${s.color}`}>{s.category}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tools.map(tool => (
                    <span key={tool} className={`text-[12px] font-semibold px-3 py-1.5 rounded-lg border ${s.tag}`}>
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
