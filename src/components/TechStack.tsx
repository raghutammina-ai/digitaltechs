import AnimatedSection from './AnimatedSection'

const stacks = [
  {
    category: 'AI & Machine Learning',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    tools: ['OpenAI / GPT-4', 'Anthropic Claude', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Scikit-learn', 'YOLO'],
  },
  {
    category: 'Data & Analytics',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    tools: ['Apache Spark', 'Apache Kafka', 'Snowflake', 'dbt', 'Databricks', 'Power BI', 'Tableau', 'Airflow'],
  },
  {
    category: 'Cloud & Infrastructure',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    tools: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'Pulumi'],
  },
  {
    category: 'Software Development',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    tools: ['React / Next.js', 'Node.js', 'Python', 'TypeScript', 'FastAPI', 'PostgreSQL', 'React Native', 'GraphQL'],
  },
]

export default function TechStack() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Technology</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Our Technology Stack
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            We work with the industry&apos;s best tools across AI, data, cloud, and software engineering.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stacks.map((stack, i) => (
            <AnimatedSection key={stack.category} delay={i * 0.1}>
              <div className="border border-slate-200 rounded-2xl p-6 card-glow">
                <h3 className={`font-bold text-base mb-4 ${stack.color}`}>{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map(tool => (
                    <span
                      key={tool}
                      className={`text-sm font-medium px-3 py-1.5 rounded-lg ${stack.bg} ${stack.color} border border-current/10`}
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
