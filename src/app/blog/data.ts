export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  industry: string
  readTime: string
  date: string
  featured: boolean
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: 'generative-ai-healthcare-diagnostics',
    title: 'How Generative AI is Transforming Healthcare Diagnostics',
    excerpt: "From medical imaging to clinical decision support, generative AI is reshaping how clinicians diagnose and treat patients. Here's what's working in production today.",
    category: 'AI & ML',
    industry: 'Healthcare',
    readTime: '6 min read',
    date: 'Apr 5, 2026',
    featured: true,
    content: `
Generative AI is no longer a research curiosity in healthcare — it's deployed in production environments at leading hospital systems globally. From radiology to oncology, AI models are augmenting clinical decision-making in ways that improve both speed and accuracy.

## Medical Imaging: Where AI Excels First

Computer vision models trained on millions of labelled scans now achieve diagnostic accuracy rivalling experienced radiologists for specific conditions. Chest X-ray analysis for pneumonia, diabetic retinopathy screening, and skin lesion classification are all areas where production AI systems are delivering measurable clinical value.

The key enabler has been transfer learning — pre-training on large medical image datasets like CheXpert and fine-tuning on hospital-specific data. This dramatically reduces the labelled data required for deployment.

## Clinical NLP: Turning Notes into Insights

Unstructured clinical notes are a goldmine of patient information that remains locked away. Large language models fine-tuned on medical text can extract diagnoses, medications, allergies, and symptoms from free-text notes at scale.

We've seen hospitals reduce documentation time by 40% by deploying AI-assisted note generation, where the model drafts a clinical summary and the physician reviews and approves.

## The Road Ahead

Multimodal AI — models that combine imaging, genomics, clinical notes, and patient history — represents the next frontier. Early results in cancer prognosis and treatment response prediction are promising.

The key challenge remains regulatory approval and clinician trust. Explainability — understanding why a model made a particular recommendation — is non-negotiable in clinical settings.
    `.trim(),
  },
  {
    slug: 'real-time-data-pipelines-financial-services',
    title: 'Building Real-Time Data Pipelines for Financial Services',
    excerpt: 'Latency matters in finance. We break down the architecture behind a real-time trading intelligence platform we built for a capital markets client.',
    category: 'Data Analytics',
    industry: 'Finance',
    readTime: '8 min read',
    date: 'Mar 28, 2026',
    featured: true,
    content: `
In capital markets, milliseconds matter. A real-time data pipeline that delivers stale data — even by a few seconds — can mean missed opportunities or significant losses. Here's how we architected a trading intelligence platform that processes over 2 million events per second.

## Architecture Overview

The core stack: Apache Kafka for event ingestion, Apache Flink for stream processing, ClickHouse for real-time analytics, and a React-based dashboard for visualisation.

Kafka handles the firehose of market data, order events, and trade confirmations. Flink applies enrichment, aggregation, and anomaly detection logic in real time. ClickHouse's columnar storage enables sub-second queries across billions of rows.

## Key Design Decisions

**Exactly-once semantics**: Financial data cannot be double-counted. We used Flink's checkpointing mechanism combined with idempotent Kafka producers to guarantee exactly-once processing.

**Schema evolution**: Market data schemas change. We adopted Apache Avro with a schema registry to handle backward-compatible schema changes without downtime.

**Backpressure handling**: When downstream systems slow down, the pipeline must not lose data. We configured Kafka topic retention to act as a buffer, allowing downstream systems to catch up.

## Outcomes

The platform reduced trade reconciliation time from hours to minutes and enabled real-time risk exposure monitoring that previously required overnight batch runs.
    `.trim(),
  },
  {
    slug: 'rag-vs-fine-tuning-llm',
    title: 'RAG vs Fine-Tuning: Which Should You Choose for Your LLM?',
    excerpt: 'Retrieval-Augmented Generation and fine-tuning both have their place. We compare the two approaches across cost, accuracy, and maintenance overhead.',
    category: 'AI & ML',
    industry: 'General',
    readTime: '7 min read',
    date: 'Mar 20, 2026',
    featured: false,
    content: `
One of the most common questions we hear from clients: "Should we fine-tune a model on our data, or use RAG?" The answer depends on your use case, budget, and how often your data changes.

## What is RAG?

Retrieval-Augmented Generation combines a language model with a retrieval system. When a user asks a question, the system first retrieves relevant documents from a knowledge base, then passes them as context to the LLM to generate an answer.

**Pros**: No training required, knowledge base can be updated instantly, transparent reasoning (you can see which documents were retrieved), lower cost.

**Cons**: Quality depends on retrieval accuracy, longer prompts increase latency and cost, not suitable for tasks requiring deeply embedded knowledge.

## What is Fine-Tuning?

Fine-tuning updates a pre-trained model's weights on domain-specific data. The model learns to respond in a particular style, follow specific instructions, or become expert in a domain.

**Pros**: Faster inference (no retrieval step), better at style and tone adaptation, can encode procedural knowledge.

**Cons**: Expensive to train and re-train, knowledge is frozen at training time, harder to debug.

## Decision Framework

Choose **RAG** when: your knowledge base changes frequently, you need source citations, you're building a Q&A system over documents.

Choose **fine-tuning** when: you need a consistent tone/persona, you're doing classification or extraction, your task is well-defined and stable.

Most production systems use **both**: RAG for knowledge retrieval, fine-tuning for instruction following and style.
    `.trim(),
  },
  {
    slug: 'predictive-maintenance-manufacturing',
    title: 'Predictive Maintenance in Manufacturing: A Practical Guide',
    excerpt: "IoT sensors + ML models + real-time dashboards. We walk through the full architecture of a predictive maintenance system that reduced downtime by 38%.",
    category: 'Case Studies',
    industry: 'Manufacturing',
    readTime: '10 min read',
    date: 'Mar 12, 2026',
    featured: false,
    content: `
Unplanned equipment downtime costs manufacturers an average of $260,000 per hour. For our client — a mid-sized automotive components manufacturer — unplanned downtime was costing over £4M annually. Here's how we reduced it by 38%.

## The Problem

Their maintenance strategy was purely reactive: machines broke down, engineers responded. There was no visibility into equipment health and no way to predict failures in advance.

## The Solution Architecture

**Data collection**: We instrumented 47 critical machines with IoT sensors measuring vibration, temperature, pressure, and current draw. Sensor data was ingested via MQTT into a time-series database (InfluxDB).

**Feature engineering**: Raw sensor readings were transformed into features: rolling means, standard deviations, rate of change, spectral features from FFT analysis of vibration data.

**Model training**: We trained an XGBoost classifier on 18 months of historical data labelled with failure events. The model predicts failure probability over the next 7 days with 84% precision and 79% recall.

**Alerting and dashboard**: A Grafana dashboard shows real-time equipment health scores. Alerts trigger maintenance work orders in their CMMS when failure probability exceeds a threshold.

## Results After 6 Months

- 38% reduction in unplanned downtime
- £1.5M annual savings in maintenance costs
- Maintenance labour efficiency improved by 22%
- Average time-to-repair reduced by 45 minutes per incident
    `.trim(),
  },
  {
    slug: 'cloud-cost-optimisation-strategies',
    title: 'Cloud Cost Optimisation: 5 Strategies That Actually Work',
    excerpt: "Cloud bills spiralling? We share five strategies our engineering team uses to cut AWS and Azure costs without sacrificing performance or reliability.",
    category: 'Cloud',
    industry: 'General',
    readTime: '5 min read',
    date: 'Mar 5, 2026',
    featured: false,
    content: `
Cloud costs have a habit of growing faster than your user base. These five strategies consistently deliver 20-40% cost reductions for our clients without impacting performance.

## 1. Right-size Your Compute

Over-provisioned instances are the most common source of cloud waste. Use CloudWatch (AWS) or Azure Monitor to identify instances running at below 20% CPU utilisation for extended periods. Downsizing these is the fastest win.

## 2. Use Spot/Preemptible Instances for Batch Workloads

Machine learning training jobs, data processing pipelines, and batch analytics are ideal candidates for Spot instances — up to 90% cheaper than on-demand. Use AWS Spot Fleet or Azure Spot VMs with a checkpointing strategy to handle interruptions.

## 3. Implement Auto-scaling Aggressively

Many teams set minimum instance counts far too high "just in case." Analyse your traffic patterns and implement predictive auto-scaling that scales down overnight and on weekends. We routinely see 30% savings from this alone.

## 4. Audit Your Storage

S3 and Blob Storage costs compound quickly. Implement lifecycle policies to move data to cheaper tiers (Infrequent Access, Glacier) based on access patterns. Delete or archive stale snapshots and old log files.

## 5. Reserved Instances for Baseline Load

For stable, predictable workloads, 1-year or 3-year reserved instances offer 40-60% savings over on-demand pricing. Combine with Savings Plans for flexibility across instance types.

The key is building a FinOps culture — treating cloud costs as a first-class engineering concern, not an afterthought.
    `.trim(),
  },
  {
    slug: 'ai-in-retail',
    title: 'AI in Retail: From Recommendation Engines to Store Operations',
    excerpt: "Retailers using AI across the value chain are outpacing competitors. We look at the highest-ROI applications of AI in retail and e-commerce today.",
    category: 'Industry Insights',
    industry: 'Retail',
    readTime: '6 min read',
    date: 'Feb 24, 2026',
    featured: false,
    content: `
Retail is one of the highest-ROI industries for AI investment. From personalised recommendations to supply chain optimisation, the applications are diverse and the returns measurable. Here's where we're seeing the biggest impact.

## Recommendation Engines: The Proven Winner

Personalised product recommendations drive 35% of Amazon's revenue. For smaller retailers, collaborative filtering and content-based models can deliver significant uplift with relatively modest investment.

The key is moving beyond "customers who bought X also bought Y" to session-aware models that understand browsing intent in real time.

## Demand Forecasting: Cutting Inventory Waste

Overstocking and stockouts cost retailers 3.5% of revenue annually. ML-based demand forecasting — incorporating seasonality, promotions, weather, and competitor pricing — reduces forecast error by 20-30% compared to statistical methods.

## Visual Commerce

Computer vision is transforming product discovery. Visual search (upload a photo, find similar products) and virtual try-on (AR for clothing and accessories) reduce returns and increase conversion. We've built these systems for fashion and home goods retailers.

## AI-Powered Customer Service

LLM-based chatbots now handle 70%+ of tier-1 customer service queries — order status, returns, product questions — without human intervention. The key is integration with backend order management systems.
    `.trim(),
  },
  {
    slug: 'responsible-ai-fair-explainable',
    title: 'Responsible AI: Building Systems That Are Fair and Explainable',
    excerpt: "As AI makes higher-stakes decisions, fairness and explainability are no longer optional. Here's how we approach responsible AI development at DTP.",
    category: 'AI & ML',
    industry: 'General',
    readTime: '7 min read',
    date: 'Feb 14, 2026',
    featured: false,
    content: `
AI systems making decisions about credit, hiring, healthcare, and criminal justice must be held to a higher standard. Responsible AI isn't just ethics — it's risk management. Biased or opaque AI can expose organisations to regulatory action, reputational damage, and real harm to individuals.

## Fairness: What It Means in Practice

Fairness in ML is not a single metric — it's a collection of properties that may be mutually incompatible. Demographic parity (equal outcomes across groups), equalized odds (equal false positive rates), and individual fairness (similar individuals treated similarly) often cannot all be satisfied simultaneously.

Our approach: define fairness requirements with stakeholders before training, then measure across protected attributes (gender, ethnicity, age) using tools like Fairlearn or IBM AI Fairness 360.

## Explainability: From Black Box to Glass Box

For high-stakes decisions, stakeholders need to understand why a model made a recommendation. We use several techniques depending on the use case:

**SHAP values**: Quantify each feature's contribution to a specific prediction. Works for any model type.

**LIME**: Local approximations that explain individual predictions using interpretable surrogate models.

**Attention visualisation**: For transformer models, visualise which input tokens the model focused on.

## Governance: The Missing Piece

Technical fairness and explainability tools are only part of the picture. Organisations need governance processes: model documentation (model cards), regular audits, human-in-the-loop for high-stakes decisions, and clear escalation paths.

We include responsible AI checklists in our project delivery process and encourage clients to appoint an AI ethics champion.
    `.trim(),
  },
  {
    slug: 'automating-government-services-rpa-document-ai',
    title: 'Automating Government Services with RPA and Document AI',
    excerpt: "We helped a government agency cut processing time by 60% using Robotic Process Automation and AI-powered document extraction. Full case study inside.",
    category: 'Case Studies',
    industry: 'Government',
    readTime: '9 min read',
    date: 'Feb 3, 2026',
    featured: false,
    content: `
Government agencies process enormous volumes of documents — applications, permits, licences, compliance filings — largely through manual, paper-based workflows. One of our clients, a regional government agency, was processing over 50,000 documents monthly with a team of 30 staff. Processing time averaged 14 days per application.

## The Challenge

Documents arrived in multiple formats (PDF, scanned paper, email attachments). Each document type had a different structure. Staff spent the majority of their time on data extraction and validation, not on the substantive decision-making they were hired for.

## The Solution

**Document AI**: We built a document classification and extraction pipeline using Google Document AI and custom fine-tuned models for agency-specific forms. The pipeline automatically classifies incoming documents, extracts structured data, and flags exceptions for human review.

**RPA**: UiPath bots were deployed to automate the downstream workflow — populating the case management system, sending acknowledgement letters, routing to the correct team, and generating standard correspondence.

**Human-in-the-loop**: Exceptions (low-confidence extractions, incomplete documents) are routed to a review queue where staff approve or correct the AI's work. This maintains quality while dramatically reducing manual effort.

## Results

- 60% reduction in average processing time (14 days → 5.5 days)
- 45% reduction in staff time spent on data entry
- Error rate reduced from 8% to under 1%
- Staff redeployed to higher-value case assessment work
- £1.2M annual efficiency savings
    `.trim(),
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug)
}

export const categoryColors: Record<string, string> = {
  'AI & ML':           'bg-blue-50 text-blue-600',
  'Data Analytics':    'bg-cyan-50 text-cyan-600',
  'Cloud':             'bg-teal-50 text-teal-600',
  'Industry Insights': 'bg-purple-50 text-purple-600',
  'Case Studies':      'bg-orange-50 text-orange-600',
}
