export interface Industry {
  slug: string
  name: string
  tagline: string
  description: string
  icon: string
  color: string
  bgColor: string
  challenges: string[]
  solutions: { title: string; desc: string }[]
  outcomes: { metric: string; label: string }[]
  useCases: string[]
}

export const industries: Industry[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    tagline: 'AI that saves time, improves outcomes, and transforms patient care.',
    description: 'From medical imaging to clinical decision support, we build AI solutions that help healthcare organisations deliver better patient outcomes, reduce administrative burden, and operate more efficiently.',
    challenges: [
      'Manual and time-consuming diagnostics workflows',
      'Overwhelming volumes of unstructured clinical data',
      'High administrative burden on clinical staff',
      'Difficulty predicting patient risk and readmission',
    ],
    solutions: [
      { title: 'Medical Imaging AI', desc: 'Computer vision models for radiology, pathology, and diagnostic imaging with clinical-grade accuracy.' },
      { title: 'Clinical NLP', desc: 'Extract insights from clinical notes, discharge summaries, and medical records automatically.' },
      { title: 'Predictive Risk Models', desc: 'Identify high-risk patients, predict readmissions, and optimise care pathways.' },
      { title: 'AI-Powered Administration', desc: 'Automate scheduling, billing, coding, and compliance workflows.' },
    ],
    outcomes: [
      { metric: '94%', label: 'Diagnostic accuracy' },
      { metric: '40%', label: 'Admin time saved' },
      { metric: '30%', label: 'Cost reduction' },
      { metric: '25%', label: 'Faster diagnoses' },
    ],
    useCases: ['Medical imaging analysis', 'Patient risk stratification', 'Clinical documentation AI', 'Drug discovery support', 'Appointment scheduling automation', 'Claims processing AI'],
  },
  {
    slug: 'finance',
    name: 'Finance & Banking',
    icon: '🏦',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    tagline: 'Intelligent finance — faster decisions, lower risk, better customer experiences.',
    description: 'We help banks, fintechs, and investment firms harness AI for fraud detection, risk modelling, trading intelligence, and hyper-personalised customer experiences.',
    challenges: [
      'Real-time fraud detection at scale',
      'Manual credit risk assessment processes',
      'Regulatory compliance and reporting burden',
      'Fragmented customer data limiting personalisation',
    ],
    solutions: [
      { title: 'Fraud Detection AI', desc: 'Real-time transaction monitoring with ML models that detect anomalies and reduce false positives.' },
      { title: 'Credit Risk Modelling', desc: 'AI-powered credit scoring and risk assessment for faster, more accurate lending decisions.' },
      { title: 'Trading Intelligence', desc: 'Real-time data pipelines and predictive models for portfolio management and algorithmic trading.' },
      { title: 'Regulatory AI', desc: 'Automated compliance monitoring, AML detection, and regulatory reporting.' },
    ],
    outcomes: [
      { metric: '60%', label: 'Fraud reduction' },
      { metric: '3x', label: 'Faster risk decisions' },
      { metric: '45%', label: 'Compliance cost savings' },
      { metric: '35%', label: 'Revenue uplift' },
    ],
    useCases: ['Fraud & AML detection', 'Algorithmic trading', 'Credit scoring', 'KYC automation', 'Customer churn prediction', 'Regulatory reporting'],
  },
  {
    slug: 'retail',
    name: 'Retail & E-commerce',
    icon: '🛍️',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    tagline: 'AI-powered retail — personalised, efficient, and data-driven at every touchpoint.',
    description: 'From recommendation engines to demand forecasting, we help retailers and e-commerce companies use AI to increase sales, optimise inventory, and deliver exceptional customer experiences.',
    challenges: [
      'Low personalisation leading to poor conversion rates',
      'Inventory inefficiencies and stockout/overstock issues',
      'Rising customer service costs',
      'Fragmented omnichannel experience',
    ],
    solutions: [
      { title: 'AI Recommendation Engine', desc: 'Personalised product recommendations that increase basket size and customer lifetime value.' },
      { title: 'Demand Forecasting', desc: 'ML models that predict demand patterns and optimise inventory levels across channels.' },
      { title: 'AI Customer Support', desc: 'LLM-powered support agents that resolve 70%+ of queries without human intervention.' },
      { title: 'Visual Search & Commerce', desc: 'Computer vision for visual product search, virtual try-on, and automated cataloguing.' },
    ],
    outcomes: [
      { metric: '30%', label: 'Sales increase' },
      { metric: '72%', label: 'Support automation' },
      { metric: '25%', label: 'Inventory reduction' },
      { metric: '40%', label: 'Customer satisfaction' },
    ],
    useCases: ['Product recommendations', 'Demand forecasting', 'AI chatbot support', 'Price optimisation', 'Visual search', 'Churn prediction'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: '🏭',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    tagline: 'Smart manufacturing — AI-powered efficiency, quality, and uptime.',
    description: 'We help manufacturers reduce downtime, improve quality, optimise supply chains, and build intelligent factory operations through AI and IoT integration.',
    challenges: [
      'Unplanned equipment downtime and maintenance costs',
      'Manual quality inspection bottlenecks',
      'Supply chain disruptions and inefficiencies',
      'Energy waste and rising operational costs',
    ],
    solutions: [
      { title: 'Predictive Maintenance', desc: 'IoT + ML systems that predict equipment failures before they happen, reducing downtime by 38%+.' },
      { title: 'AI Quality Inspection', desc: 'Computer vision for automated defect detection at line speed with human-level accuracy.' },
      { title: 'Supply Chain AI', desc: 'Demand sensing, supplier risk monitoring, and logistics optimisation powered by AI.' },
      { title: 'Energy Optimisation', desc: 'ML models that reduce energy consumption by identifying waste patterns in real time.' },
    ],
    outcomes: [
      { metric: '38%', label: 'Downtime reduction' },
      { metric: '45%', label: 'Defect detection rate' },
      { metric: '20%', label: 'Energy savings' },
      { metric: '3x', label: 'Quality throughput' },
    ],
    useCases: ['Predictive maintenance', 'Visual quality inspection', 'Supply chain optimisation', 'Energy management', 'Production scheduling AI', 'Worker safety AI'],
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    icon: '🚚',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    tagline: 'Smarter logistics — optimised routes, automated operations, real-time visibility.',
    description: 'We help logistics and supply chain companies reduce costs, improve delivery performance, and build real-time operational intelligence through AI and automation.',
    challenges: [
      'Inefficient route planning driving up fuel costs',
      'Manual warehouse operations slowing fulfilment',
      'Limited real-time visibility across the supply chain',
      'High last-mile delivery costs and failures',
    ],
    solutions: [
      { title: 'Route Optimisation AI', desc: 'Dynamic route planning that reduces fuel costs and improves on-time delivery rates.' },
      { title: 'Warehouse Automation', desc: 'AI-powered picking, sorting, and inventory management for faster fulfilment.' },
      { title: 'Supply Chain Visibility', desc: 'Real-time tracking and predictive analytics across the full supply chain.' },
      { title: 'Demand Sensing', desc: 'ML forecasting for shipment volumes enabling better capacity planning.' },
    ],
    outcomes: [
      { metric: '45%', label: 'Operational cost saving' },
      { metric: '30%', label: 'Delivery time reduction' },
      { metric: '25%', label: 'Fuel cost savings' },
      { metric: '99%', label: 'Tracking accuracy' },
    ],
    useCases: ['Route optimisation', 'Fleet management AI', 'Warehouse robotics', 'Demand forecasting', 'Last-mile AI', 'Supply chain risk monitoring'],
  },
  {
    slug: 'education',
    name: 'Education',
    icon: '🎓',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    tagline: 'AI-powered learning — personalised, accessible, and outcome-focused.',
    description: 'We help educational institutions and EdTech companies use AI to personalise learning, identify at-risk students, automate administration, and deliver better outcomes at scale.',
    challenges: [
      'One-size-fits-all learning not meeting individual needs',
      'Identifying at-risk students before they disengage',
      'High administrative burden on educators',
      'Scaling quality education to larger student populations',
    ],
    solutions: [
      { title: 'Adaptive Learning AI', desc: 'Personalised learning paths that adapt to each student\'s pace, style, and performance.' },
      { title: 'Student Analytics', desc: 'Early warning systems that identify at-risk students and trigger timely interventions.' },
      { title: 'AI Teaching Assistant', desc: 'LLM-powered assistants that answer student questions, grade assignments, and provide feedback 24/7.' },
      { title: 'Admin Automation', desc: 'Automate enrolment, scheduling, reporting, and compliance workflows.' },
    ],
    outcomes: [
      { metric: '35%', label: 'Improved outcomes' },
      { metric: '50%', label: 'Admin time saved' },
      { metric: '28%', label: 'Dropout reduction' },
      { metric: '40%', label: 'Student satisfaction' },
    ],
    useCases: ['Adaptive learning platforms', 'Student risk prediction', 'AI tutoring', 'Plagiarism detection', 'Automated grading', 'Enrolment AI'],
  },
]

export function getIndustry(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug)
}
