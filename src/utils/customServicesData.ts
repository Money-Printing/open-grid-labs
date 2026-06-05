import type { ServiceDetail } from "./serviceDetailGenerator";

// Highly detailed custom data for featured services
export const customServicesData: Record<string, ServiceDetail> = {
	"agentic-ai": {
		title: "Agentic AI",
		category: "Artificial Intelligence",
		highlight: "#00ffff", // Cyan
		description: "Autonomous, goal-driven AI agents that plan, execute, and collaborate to automate complex enterprise workflows.",
		overview: "Agentic AI shifts the paradigm from passive question-answering systems to proactive, autonomous decision-makers. By utilizing advanced reasoning loops, long-term memory systems, and secure tool usage, these AI agents can independently execute end-to-end tasks, interact with legacy APIs, self-correct errors, and coordinate with other agents to accomplish complex business objectives.",
		technologies: ["LangChain", "LangGraph", "AutoGPT", "CrewAI", "Python", "LlamaIndex", "GPT-4o / Claude 3.5 Sonnet"],
		features: [
			"Autonomous Planning & Reasoning: Dynamic decomposition of high-level goals into executable sub-tasks.",
			"Multi-Agent Collaboration: Specialized networks of agents communicating via state-sharing protocols.",
			"Dynamic Tool & API Integration: Secure read-write execution across databases, CRMs, ERPs, and external APIs.",
			"Self-Healing Execution: Continuous error monitoring, loop detection, and self-correcting logic during tool invocation."
		],
		useCases: [
			{
				industry: "Fintech",
				title: "Autonomous Loan Underwriting Agent",
				desc: "Developed a multi-agent system that autonomously fetches applicant records from multiple databases, calculates debt-to-income ratios, cross-checks credit histories, and drafts comprehensive risk-assessment reports for underwriters, reducing processing time from 4 days to 15 minutes."
			},
			{
				industry: "Customer Support",
				title: "Dynamic Self-Solving Support Agent",
				desc: "Created a self-solving agent that interacts directly with customer accounts, diagnostic logs, and refund gateways to resolve complex transactional issues, achieving 72% resolution without human intervention."
			}
		],
		results: [
			{ metric: "Operational Velocity", value: "15x Speedup", desc: "For end-to-end task execution and report compilation." },
			{ metric: "Human Hand-off", value: "-75% Reduction", desc: "Decreased manual intervention in customer and backend workflows." },
			{ metric: "Task Completion", value: "98.4% Accuracy", desc: "High success rate in executing structured, multi-step API transactions." }
		]
	},
	"large-language-models": {
		title: "Large Language Models",
		category: "Artificial Intelligence",
		highlight: "#00ffff", // Cyan
		description: "Custom-trained, quantized, and enterprise-integrated LLMs that understand and generate domain-specific intelligence.",
		overview: "Large Language Models are the foundational engine of modern artificial intelligence. We specialize in selecting, fine-tuning, and integrating advanced open-source and proprietary models (such as Llama, Mistral, and Claude). Our services focus on aligning these models with enterprise compliance requirements, optimizing inference latency, and building secure deployment architectures.",
		technologies: ["vLLM", "Hugging Face", "PyTorch", "TensorRT", "Llama-3", "Claude API", "DeepSpeed"],
		features: [
			"Domain-Specific Vocabulary Alignment: Tailoring language synthesis to medical, legal, or industrial jargon.",
			"Quantization & Cost Optimization: Shrinking models to FP8 or INT4 to achieve 4x cheaper inference with minimal accuracy drop.",
			"Private & Air-Gapped Deployment: Running models on internal VPCs or on-prem hardware for absolute data security.",
			"Advanced Context Windows: Handling 100k+ tokens securely for long-document analysis, cross-referencing, and summarization."
		],
		useCases: [
			{
				industry: "Legal Tech",
				title: "Enterprise Contract Auditing System",
				desc: "Deployed a customized open-source LLM within a private cloud environment to audit thousands of multi-page legal documents hourly, flagging compliance risks, non-standard clauses, and hidden liability issues."
			},
			{
				industry: "Healthcare",
				title: "Medical Report Synthesis Platform",
				desc: "Configured a HIPAA-compliant medical-domain model to extract clinical findings from unstructured physician notes, structuring them into FHIR-compliant JSON outputs with 97% semantic fidelity."
			}
		],
		results: [
			{ metric: "Inference Latency", value: "35ms TTFT", desc: "Ultra-fast Time-To-First-Token utilizing optimized vLLM setups." },
			{ metric: "Hardware Cost", value: "60% Savings", desc: "Achieved via model quantization and dynamic load balancing." },
			{ metric: "Processing Speed", value: "20,000 pages/hr", desc: "High-throughput document auditing and compliance mapping." }
		]
	},
	"rag-implementation": {
		title: "RAG Implementation",
		category: "Artificial Intelligence",
		highlight: "#00ffff", // Cyan
		description: "Advanced Retrieval-Augmented Generation architectures to ground LLMs in your private, real-time enterprise database.",
		overview: "Retrieval-Augmented Generation (RAG) bridges the gap between static LLM training data and active, proprietary enterprise knowledge. We design and implement robust production-grade RAG systems using advanced indexing, hybrid search (keyword + dense vector), query rewriting, reranking, and agentic routers. This eliminates hallucinations and guarantees that every generated answer is directly backed by a verifiable source.",
		technologies: ["Pinecone", "Qdrant", "LlamaIndex", "LangChain", "Cohere Rerank", "PGVector", "OpenAI Embeddings"],
		features: [
			"Hybrid Ingestion Pipelines: Real-time syncing and parsing of PDFs, Notion, Confluence, SQL databases, and Slack.",
			"Semantic Chunking & Metadata Enrichment: Dynamically segmenting documents by syntax trees and tagging them for precise filtering.",
			"Advanced Re-Ranking Models: Incorporating cross-encoder re-rankers to feed only the top-matching contexts into the LLM prompt.",
			"Source Attribution & Auditing: Every answer generated includes interactive inline citations mapping directly to source paragraphs."
		],
		useCases: [
			{
				industry: "Manufacturing",
				title: "Technician Field Manual RAG",
				desc: "Developed a voice-enabled RAG system allowing field technicians to query 100,000+ pages of schematics, equipment logs, and repair manuals in real-time, receiving instant, step-by-step instructions with diagrams."
			},
			{
				industry: "Finance",
				title: "Real-time Regulatory Compliance Search",
				desc: "Built a RAG platform for an investment bank that aggregates daily SEC filings, central bank announcements, and local regulatory updates, providing compliance officers with a single source of truth."
			}
		],
		results: [
			{ metric: "Hallucination Rate", value: "< 0.2%", desc: "Near-zero hallucination through strict context enforcement." },
			{ metric: "Query Resolution", value: "1.2 Seconds", desc: "End-to-end response time including retrieval and generation." },
			{ metric: "Information Access", value: "8x Faster", desc: "Compared to manual document searching and cross-referencing." }
		]
	},
	"chatbots-virtual-assistants": {
		title: "Chatbots & Virtual Assistants",
		category: "Natural Language",
		highlight: "#00e673", // Emerald
		description: "Next-generation conversational agents featuring emotive speech synthesis, multi-lingual capabilities, and transactional execution.",
		overview: "Our conversational virtual assistants go far beyond simple scripted FAQs. Powered by deep natural language understanding (NLU) and generative AI, they engage in multi-turn dialogue, maintain complex conversational state, detect user emotion, and seamlessly execute transactions on behalf of users by communicating with backend systems. They provide a warm, human-like interface in over 80 languages across web, mobile, voice, and messaging platforms.",
		technologies: ["Rasa", "Dialogflow CX", "OpenAI Assistant API", "React", "Python", "ElevenLabs (Voice)", "WebSockets"],
		features: [
			"Multi-Turn Context Preservation: Remembering details mentioned early in the conversation for coherent context-aware dialogue.",
			"Sentiment & Emotion Detection: Dynamically adjusting conversation tone based on user urgency, anger, or satisfaction.",
			"Direct Action Fulfillment: Seamlessly executing operations like booking appointments, upgrading tiers, and updating credit cards.",
			"Omnichannel Deployment: Deploy once and access across Web, WhatsApp, SMS, iOS/Android apps, and custom voice kiosks."
		],
		useCases: [
			{
				industry: "E-Commerce",
				title: "Hyper-Personalized Shopping Assistant",
				desc: "Created a virtual stylist assistant that analyzes past purchases, style preferences, and real-time sizing parameters to guide users through inventory, resulting in a 24% uplift in average order value (AOV)."
			},
			{
				industry: "BFSI",
				title: "Conversational Banking Assistant",
				desc: "Deployed a highly secure, voice-activated virtual assistant within a retail banking app that allows users to transfer funds, check balances, and temporarily lock debit cards using conversational speech."
			}
		],
		results: [
			{ metric: "Customer Satisfaction", value: "+38% CSAT", desc: "Significant boost in customer satisfaction ratings." },
			{ metric: "Ticket Deflection", value: "68% Automated", desc: "Resolving inquiries without routing to human agents." },
			{ metric: "Language Coverage", value: "85+ Languages", desc: "Fluent, culturally aligned translation and conversation." }
		]
	},
	"content-generation": {
		title: "Content Generation",
		category: "Natural Language",
		highlight: "#00e673", // Emerald
		description: "Governed LLM content workflows featuring parameterised briefs, tone controls, review gates, and performance analytics to scale on-brand content production.",
		overview: "Our Content Generation service replaces fragile, ad hoc prompting with structured, production-grade text generation pipelines. We build governed workflows that ingest product and brand reference data, apply fine-grained style controls, enforce automated compliance checks, and manage human-in-the-loop review queues. By supporting 9 distinct content formats, we reduce first-draft production time by 43% and deliver highly accurate outputs that 76% of editors accept on the first review.",
		technologies: ["LLM Generation", "Brand Rules", "Review Gates", "Content Analytics", "Python", "LlamaIndex", "LangChain"],
		features: [
			"Multi-Format Brief Mapping: Dynamic parsing of raw inputs into structured formats covering articles, product copy, social updates, and email campaigns.",
			"Fine-Grained Style & Tone Controls: Enforcing target brand attributes like humor, technical depth, formality, and sentence length constraints.",
			"Automated Compliance & Bias Checks: Scanning draft outputs for trademark violations, legal risks, formatting errors, and protected attribute bias.",
			"Human-in-the-Loop Review Gates: Secure web workspaces allowing editors to inspect generated content, compare with inputs, and edit drafts."
		],
		useCases: [
			{
				industry: "Marketing Tech",
				title: "Governed Multi-Format Content Platform",
				desc: "Built a governed copywriting pipeline supporting 9 distinct content formats with brand templates, evaluation metrics, and editorial approval gates, cutting first-draft production time by 43%."
			},
			{
				industry: "Product Growth",
				title: "On-Brand Product Description Generator",
				desc: "Deployed a high-volume description generation workflow that integrates catalog databases, brand guides, and target audiences to produce thousands of unique, compliant descriptions daily."
			}
		],
		results: [
			{ metric: "Draft Production Speed", value: "-43% Time", desc: "Major reduction in first-draft compilation and assembly cycles." },
			{ metric: "Editorial Acceptance", value: "76% Accepted", desc: "High rate of drafts approved on the very first review cycle with no edits." },
			{ metric: "Format Support", value: "9 Formats", desc: "Standardized, reusable content workflows spanning email, social, web, and docs." }
		]
	},
	"intent-recognition": {
		title: "Intent Recognition",
		category: "Natural Language",
		highlight: "#00e673", // Emerald
		description: "Automated message routing and triage pipelines using intent classification, CRM integrations, and confidence-based human-in-the-loop escalation.",
		overview: "Our Intent Recognition service turns chaotic incoming customer text streams into organized, automated workflows. We construct advanced classification pipelines that automatically identify customer intent, parse key details, trigger immediate CRM responses, and route ambiguous or sensitive messages to dedicated human review queues. Supporting 31 distinct intents, our system cuts manual triage times by 49% while maintaining a verified 84% accuracy rate.",
		technologies: ["Intent Classification", "Routing", "Confidence Scoring", "CRM Integration", "Python", "vLLM", "LlamaIndex"],
		features: [
			"Multi-Channel Message Intake: Continuous polling and normalization of emails, chats, CRM tickets, and product events.",
			"High-Fidelity Intent Classification: Algorithmic parsing of customer inputs across 31 granular intent profiles.",
			"Confidence-Score Routing: Setting strict confidence gates to automate standard cases while routing low-score items to reviewers.",
			"Seamless CRM Integration: Automatically updating CRM records, triggering webhooks, and assigning tickets to the right teams."
		],
		useCases: [
			{
				industry: "Customer Operations",
				title: "Automated Ticket Routing System",
				desc: "Deployed an intent recognition pipeline classifying customer goals across 31 distinct intents, reducing manual triage time by 49% and ensuring 84% intent routing accuracy."
			},
			{
				industry: "E-Commerce Support",
				title: "Transactional Self-Service Assistant",
				desc: "Designed an NLP intake flow that classifies transaction-specific requests, automatically invoking order tracking and cancellation webhooks while routing complex inquiries to support queues."
			}
		],
		results: [
			{ metric: "Triage Speedup", value: "-49% Time", desc: "Dramatic reduction in manual support ticket triage and routing times." },
			{ metric: "Intents Classified", value: "31 Intents", desc: "High-resolution classification map covering billing, products, and technical support." },
			{ metric: "Routing Accuracy", value: "84% Accuracy", desc: "Substantial accuracy levels verified on holdout customer review samples." }
		]
	},
	"language-translation": {
		title: "Language Translation",
		category: "Natural Language",
		highlight: "#00e673", // Emerald
		description: "Automated translation pipelines utilizing domain-specific glossaries, translation memories, and confidence scoring gates for multilingual operations.",
		overview: "Our Language Translation service scales multilingual customer support and content localization without sacrificing operational speed. We build automated translation workflows that enforce domain terminology via custom glossaries, leverage translation memory to cut duplicate costs, apply confidence scores to route high-risk segments to human review, and integrate directly with global support tools. Supporting 12 languages, our pipeline reduces turnaround times by 67% and secures 94% glossary adherence.",
		technologies: ["Translation Models", "Glossary Management", "Quality Review", "Localization Automation", "Python", "React", "vLLM"],
		features: [
			"Domain glossary enforcement: Algorithmic term replacement and style checks ensuring on-brand vocabulary across all translated outputs.",
			"Dynamic translation memory: Caching and reusing identical past translations to cut API call volume and costs.",
			"Confidence score gates: Evaluating translation quality on the fly and escalating low-scoring segments to bilingual reviewers.",
			"Omnichannel localization: Directly integrating translation triggers with support ticketing, chats, emails, and documentation channels."
		],
		useCases: [
			{
				industry: "Global SaaS",
				title: "Enterprise Multilingual Support Pipeline",
				desc: "Built an automated translation workflow supporting 12 languages with domain glossaries, translation memory caching, and confidence review gates, reducing translation turnaround time by 67%."
			},
			{
				industry: "Content Operations",
				title: "Continuous Localization Pipeline",
				desc: "Deployed a translation intake system linked to git repositories and help documentation hubs that translates updates into multiple target languages automatically while ensuring 94% adherence to product glossaries."
			}
		],
		results: [
			{ metric: "Turnaround Speedup", value: "-67% Time", desc: "Major reduction in manual translation queue waiting times." },
			{ metric: "Glossary Adherence", value: "94% Adherence", desc: "Near-perfect usage of target product and brand terms on reviewed samples." },
			{ metric: "Languages Active", value: "12 Languages", desc: "Granular coverage mapping across global regional user cohorts." }
		]
	},
	"named-entity-recognition": {
		title: "Named Entity Recognition",
		category: "Natural Language",
		highlight: "#00e673", // Emerald
		description: "Automated entity extraction and linking pipelines turning unstructured text and documents into validated systems-of-record updates.",
		overview: "Our Named Entity Recognition (NER) service automates the capture of critical domain fields across unstructured support workflows, contracts, and internal records. We build highly precise extraction pipelines that isolate customers, product names, dates, amounts, locations, and contract parameters, linking them traceably to enterprise databases. Supporting 19 entity types, our system cuts manual data entry by 61% and achieves an 88% Reviewed Match Precision.",
		technologies: ["NER", "Entity Linking", "Validation Rules", "Workflow APIs", "Python", "SpaCy", "vLLM"],
		features: [
			"High-resolution entity extraction: Precise parsing and labeling of up to 19 distinct entity fields across text, PDF, and image sources.",
			"System-of-record entity linking: Resolving raw extracted text strings against actual CRM, ERP, and product catalog databases traceably.",
			"Confidence scoring & threshold gates: Automating high-confidence field saves while routing low-score documents to manual reviewer workspaces.",
			"Automated schema mapping: Structuring messy extracted outputs into clean, validated JSON blocks compatible with corporate APIs."
		],
		useCases: [
			{
				industry: "Enterprise Operations",
				title: "Governed Document Data Capture",
				desc: "Built a named entity recognition pipeline supporting 19 entity types to extract customer, contract, and billing details from PDF archives, cutting manual data entry by 61%."
			},
			{
				industry: "Document Processing",
				title: "Intelligent Support Tagging & Linking",
				desc: "Deployed a real-time extraction pipeline that parses support tickets for product models, order IDs, and dates, automatically query-matching them to CRM database profiles with an 88% precision score."
			}
		],
		results: [
			{ metric: "Data Entry Speed", value: "-61% Capture", desc: "Major capacity unblocked by automating manual keystrokes and document reads." },
			{ metric: "Entity Precision", value: "88% Precision", desc: "Highly reliable entity matching and linking verified on holdout reviewed archives." },
			{ metric: "Entity Coverage", value: "19 Entity Types", desc: "Broad dictionary mappings spanning money, dates, codes, companies, and product titles." }
		]
	},
	"question-answering": {
		title: "Question Answering",
		category: "Natural Language",
		highlight: "#00e673", // Emerald
		description: "Production-ready Question Answering workflows that retrieve trusted knowledge, generate grounded citation-backed answers, and route low-confidence queries for human review.",
		overview: "Our Question Answering service unifies scattered enterprise knowledge sources to deliver reliable, citation-backed answers for employees and customers alike. By designing high-precision retrieval engines, groundable LLM generation setups, automated citation layers, and human-in-the-loop review routing queues, we cut repeated internal questions by 57% and ensure a robust 86% acceptance rate on reviewed queries.",
		technologies: ["NLP Retrieval", "Answer Generation", "Retrieval-Augmented Generation (RAG)", "Citations", "Feedback Loop", "Python", "LlamaIndex", "vLLM"],
		features: [
			"Production NLP pipeline: Seamless intake, cleaning, enrichment, model inference, and structured output delivery.",
			"Tailored evaluation datasets: Customized quality thresholds and confidence scoring mappings aligned to specific business workflows.",
			"Human-in-the-loop review: Secure escalation queues routing low-confidence, high-risk, or compliance-sensitive queries to expert review.",
			"Comprehensive QA dashboards: Continuous tracking of system volume, accuracy, latency, drift, exception rates, and downstream adoption.",
			"Reusable API patterns: Standardized integration models enabling scaling across multiple customer-facing and internal products."
		],
		useCases: [
			{
				industry: "Knowledge Management",
				title: "Enterprise Document Question Answering",
				desc: "Built an end-to-end question answering pipeline connecting 4 disparate knowledge bases, reducing repeated internal questions by 57% and introducing source-backed citation verification."
			},
			{
				industry: "Customer Enablement",
				title: "Confidence-Routed Helpdesk Assistant",
				desc: "Implemented a confidence-scoring gateway routing high-confidence queries to automated answers while sending complex cases to human review, ensuring an 86% reviewed acceptance rate."
			}
		],
		results: [
			{ metric: "Internal Questions", value: "-57% Repeated", desc: "Significant reduction in duplicate queries across support and sales channels." },
			{ metric: "Answer Acceptance", value: "86% Reviewed", desc: "Extremely high user-acceptance rate verified on holdout reviewed samples." },
			{ metric: "Connected Sources", value: "4 Unified Bases", desc: "Unified query routing across unstructured support logs, docs, and systems." }
		]
	},
	"sentiment-analysis": {
		title: "Sentiment Analysis",
		category: "Natural Language",
		highlight: "#00e673", // Emerald
		description: "Production sentiment analysis pipelines that score emotional tone across every customer channel, track trend shifts, and route high-risk conversations faster.",
		overview: "Our Sentiment Analysis service transforms multi-channel customer language into measurable, actionable signals. We design scoring workflows that span reviews, tickets, calls, and chats—applying confidence-based routing, live dashboards, and human review for sensitive cases. By making sentiment continuous and operational rather than manual and periodic, we cut negative escalation time by 46% and achieve 82% agreement with expert-labeled samples.",
		technologies: ["Sentiment Models", "Trend Analysis", "Routing Workflows", "Monitoring Dashboards", "Python", "vLLM", "LlamaIndex"],
		features: [
			"Multi-channel intake: Scoring sentiment uniformly across reviews, support tickets, chat logs, calls, and product events.",
			"Confidence-scored routing: Automating high-confidence sentiment flags while escalating uncertain or high-risk signals to reviewers.",
			"Live trend dashboards: Surfacing real-time sentiment drift, channel breakdowns, and at-risk conversation queues.",
			"Human-in-the-loop review: Secure review queues for low-confidence, compliance-sensitive, or high-stakes escalations.",
			"Reusable integration patterns: Standardized APIs enabling sentiment signals to feed CRMs, alerting tools, and reporting systems."
		],
		useCases: [
			{
				industry: "Customer Experience",
				title: "Multi-Channel Sentiment Monitoring Platform",
				desc: "Built a production sentiment pipeline monitoring 5 customer channels in real time, cutting negative escalation time by 46% and replacing manual weekly reporting with live dashboards."
			},
			{
				industry: "Support Operations",
				title: "At-Risk Conversation Priority Router",
				desc: "Deployed a confidence-based routing layer that flags high-negative-sentiment conversations for priority agent assignment, reducing response lag on critical support cases."
			}
		],
		results: [
			{ metric: "Escalation Speed", value: "-46% Time", desc: "Significantly faster routing of negative customer conversations to the right teams." },
			{ metric: "Label Agreement", value: "82% Accuracy", desc: "High agreement between automated sentiment labels and expert-reviewed ground truth." },
			{ metric: "Channels Active", value: "5 Channels", desc: "Unified scoring across reviews, tickets, chats, calls, and product events." }
		]
	},
	"mlops-pipeline": {
		title: "MLOps Pipeline",
		category: "Machine Learning",
		highlight: "#c44dff", // Purple
		description: "Repeatable MLOps pipelines automating model validation, training, registry approval, deployment, monitoring, and trigger-based retraining loops.",
		overview: "Our MLOps Pipeline service turns fragile model releases into reliable, scalable production systems. We design end-to-end pipelines that connect data sources, training environments, model registries, and deployment targets under automated gates. By versioning datasets, feature libraries, training runs, and model binaries together, we reduce manual release steps by 73% and cut validation-to-deployment cycles by 45%.",
		technologies: ["ML CI/CD", "Model Registry", "Drift Detection", "Automated Retraining", "MLflow / Kubeflow", "Kubernetes"],
		features: [
			"Governed Release Gates: Automated checks for data quality, model accuracy thresholds, explainability, and rollback readiness before production rollout.",
			"DVC Versioning & Lineage: Versioning training snapshots, dataset snapshots, parameters, and resulting binaries together for absolute reproducibility.",
			"Continuous Drift Monitoring: Dashboards and alerts tracking prediction quality, input data drift, prediction drift, and operational latency.",
			"Trigger-Based Retraining: Staged response workflows that automate retraining and redeployment once performance decay is detected."
		],
		useCases: [
			{
				industry: "Enterprise SaaS",
				title: "Governed Production MLOps Pipeline",
				desc: "Designed and onboarded 8 production models into a governed pipeline, automating validation, deployment, and drift checks, reducing manual release steps by 73%."
			},
			{
				industry: "MLOps Platform",
				title: "Drift-Triggered Retraining Loop",
				desc: "Constructed automated retraining runs linked to live drift detectors, ensuring model accuracy refreshes automatically before user-facing KPIs degrade."
			}
		],
		results: [
			{ metric: "Manual Steps", value: "-73% Reduction", desc: "Minimized human touchpoints and errors during model verification and deployment." },
			{ metric: "Release Speed", value: "-45% Cycle Time", desc: "Drastically accelerated validation-to-production deployment duration." },
			{ metric: "Governed Pipeline", value: "8 Models Live", desc: "Full coverage across scheduled, batch, and real-time inference models." }
		]
	},
	"computer-vision": {
		title: "Computer Vision",
		category: "Deep Learning",
		highlight: "#ff3399", // Pink
		description: "Advanced spatial intelligence models enabling machines to analyze, interpret, and act upon visual inputs in real-time.",
		overview: "Our Computer Vision services deliver state-of-the-art visual processing capabilities. We build customized deep learning architectures that detect, classify, segment, and track objects in static images, high-speed camera feeds, and multi-spectral inputs. Designed for edge computers and robust cloud clusters alike, our solutions power quality control, physical security, spatial computing, and autonomous systems.",
		technologies: ["OpenCV", "PyTorch", "YOLOv8", "TensorRT", "CUDA", "Segment Anything (SAM)", "Roboflow"],
		features: [
			"Real-Time Object Detection & Tracking: Extremely low latency localization of items in high-definition video feeds.",
			"Pixel-Level Semantic Segmentation: Isolating complex, irregular shapes for biomedical imaging and precision agriculture.",
			"Edge-Optimized Architectures: Compiling models via TensorRT for deployment on NVIDIA Jetson, smartphones, and IoT devices.",
			"Generative Image Processing: Auto-enhancing clarity, restoring defect-filled frames, and generating synthetic training images."
		],
		useCases: [
			{
				industry: "Manufacturing",
				title: "Automated Micro-Defect Inspector",
				desc: "Deployed a YOLOv8-based computer vision inspection system on high-speed conveyor lines that detects microscopic cracks in semiconductor wafers, operating at 120 frames per second with sub-millimeter accuracy."
			},
			{
				industry: "Logistics",
				title: "Warehouse Spatial Optimization Vision",
				desc: "Created a real-time multi-camera tracking system that monitors forklift movements, pallet locations, and safety hazards, optimizing path routing and warehouse throughput."
			}
		],
		results: [
			{ metric: "Defect Detection", value: "99.8% Recall", desc: "Near-perfect tracking of structural surface anomalies." },
			{ metric: "Processing Speed", value: "120 FPS", desc: "High-frequency evaluation of live, multi-cam video streams." },
			{ metric: "Edge Latency", value: "8.2ms / frame", desc: "Sub-10ms localized inference on custom edge hardware." }
		]
	},
	"ai-ethics-governance": {
		title: "AI Ethics & Governance",
		category: "Artificial Intelligence",
		highlight: "#00ffff", // Cyan
		description: "Risk classification, policy creation, ethics review boards, and compliance roadmaps to make responsible AI repeatable and enforceable.",
		overview: "AI Ethics & Governance operationalizes corporate values and emerging regulations like the EU AI Act into standard controls and repeatable pre-launch workflows. By building a proportionate operating model that tiers models by risk, organizes independent review boards, and maps regulatory requirements to concrete evidence templates, we help rapidly growing AI companies protect public trust and clear enterprise compliance gates without slowing down innovation speed.",
		technologies: ["EU AI Act Framework", "NIST AI RMF", "ISO/IEC 42001", "Compliance Roadmaps", "Ethics Review Charters", "AI System Registers"],
		features: [
			"Risk Classification Framework: Custom four-tier framework aligning systems to regulatory definitions.",
			"Ethics Review Board Charter: Membership, escalation paths, and operational parameters for governance.",
			"Responsible-AI Policy: Translating abstract principles into concrete checklist controls per risk tier.",
			"AI System Register: Central catalog giving leadership a single view of all model dependencies and risk postures."
		],
		useCases: [
			{
				industry: "AI / SaaS",
				title: "Enterprise Governance Operating Model",
				desc: "Designed and stood up an enforceable AI governance operating model spanning 40+ systems for a venture-backed generative AI startup, aligning their safety practices with the EU AI Act and cutting sales security-review times in half."
			},
			{
				industry: "Healthcare Tech",
				title: "Clinical Model Compliance Framework",
				desc: "Established an AI ethics review board and automated clinical validation pipelines for patient-facing recommendation agents, ensuring strict HIPAA alignment, bias detection, and human-in-the-loop overrides."
			}
		],
		results: [
			{ metric: "Compliance Review Time", value: "-60% Reduction", desc: "Drastically accelerated safety and regulatory review cycles." },
			{ metric: "Governance Visibility", value: "100% Registered", desc: "All production systems risk-classified and continuously audited." },
			{ metric: "Regulatory Alignment", value: "4 Risk Tiers", desc: "Direct, proactive mapping to the EU AI Act and emerging standards." }
		]
	},
	"ai-strategy-consulting": {
		title: "AI Strategy Consulting",
		category: "Artificial Intelligence",
		highlight: "#00ffff", // Cyan
		description: "Maturity assessments, use-case prioritization portfolios, and governance frameworks tied to board-ready roadmaps.",
		overview: "Our AI Strategy Consulting service guides organisations through the complex landscape of artificial intelligence, cutting through hype to deploy practical, high-ROI portfolios. By aligning technical possibilities with real business objectives, conducting honest readiness assessments, scoring use cases on value and feasibility, and designing robust risk frameworks, we enable companies to scale and innovate with absolute confidence.",
		technologies: ["AI Maturity Assessments", "Prioritization Frameworks", "Responsible-AI Policies", "Risk Tiering Models", "Maturity Scoring", "ROI Modeling"],
		features: [
			"Honest Maturity Assessments: Objective scoring of data, talent, technology, and culture readiness.",
			"Value & Feasibility Scoring: Balanced prioritization plotting use cases on dual value/feasibility axes.",
			"A Phased 3-Year Roadmap: Practical implementation timelines backed by budget gates and initiative owners.",
			"A Defensible Board-Ready Case: Financial models quantifying cost, return, and portfolio-wide ROI."
		],
		useCases: [
			{
				industry: "Professional Services",
				title: "Enterprise Strategy & 3-Year Roadmap",
				desc: "Engaged with a 1,200-employee professional services firm to consolidate scattered pilots, scoring 34 candidate use cases on a value-vs-feasibility matrix, establishing an firm-wide governance policy, and unlocking board approval with a 5x projected ROI."
			},
			{
				industry: "Financial Advisory",
				title: "AI Operating Model & Portfolio Prioritization",
				desc: "Designed an automated portfolio scoring rubric for a tier-2 financial advisory firm, evaluating 20+ operations-facing generative AI tools and sequencing them into quick-win pilots, yielding a 40% operations speedup within six months."
			}
		],
		results: [
			{ metric: "Portfolio ROI", value: "5× Projected", desc: "Measurable returns mapped to prioritized operational and customer initiatives." },
			{ metric: "Prioritized Shortlist", value: "34 Use Cases", desc: "Dozens of candidate ideas objectively scored and sequenced by complexity." },
			{ metric: "Accelerated Pilots", value: "3 within 90 days", desc: "Immediate quick-win rollouts validated to build rapid momentum." }
		]
	},
	"explainable-ai": {
		title: "Explainable AI",
		category: "Artificial Intelligence",
		highlight: "#00ffff", // Cyan
		description: "SHAP and LIME feature attributions, automated model cards, and continuous bias auditing to make high-accuracy models transparent and compliant.",
		overview: "Our Explainable AI (XAI) service bridges the gap between high-performance black-box models and stringent auditability requirements. By engineering model-agnostic explainability wrappers using game-theoretic SHAP and local surrogate LIME attributions, automating model cards, and embedding continuous bias monitoring, we turn model outputs into transparent, regulator-approved assets without sacrificing model accuracy.",
		technologies: ["SHAP (SHapley Additive exPlanations)", "LIME (Local Interpretable Model-agnostic Explanations)", "Automated Model Cards", "Fairness/Bias Telemetry", "Immutable Audit Trails"],
		features: [
			"SHAP & LIME Attributions: Rigorous, mathematically validated feature importance scores for every prediction.",
			"Automated Model Cards: Dynamic documentation describing model datasets, performance, boundaries, and goals.",
			"Continuous Bias Monitoring: Real-time telemetry flagging demographic disparities and protected-attribute drift.",
			"Immutable Audit Trail: Secure logs capturing model parameters, features, and explanations for regulators."
		],
		useCases: [
			{
				industry: "Regulated FinTech",
				title: "Transparent Risk Scoring Engine",
				desc: "Wrapped an opaque, high-stakes customer risk scoring model in a private cloud environment, producing real-time local SHAP attributions and reducing support escalations questioning decisions by 63%."
			},
			{
				industry: "Enterprise SaaS",
				title: "Automated Model Auditing & Compliance",
				desc: "Deployed automated model cards and continuous fairness alerts across 40+ models in production, cutting the regulatory approval and validation cycle from 3 weeks to 4 days."
			}
		],
		results: [
			{ metric: "Explainability Coverage", value: "100% Registered", desc: "All production models wrapped and audit-ready with detailed explanations." },
			{ metric: "Model Approval Cycle", value: "4× Faster", desc: "Drastically accelerated internal and external compliance and review timelines." },
			{ metric: "Support Escalations", value: "-63% Drop", desc: "Substantial decrease in customer-facing disputes and compliance questions." }
		]
	},
	"prompt-engineering": {
		title: "Prompt Engineering",
		category: "Artificial Intelligence",
		highlight: "#00ffff", // Cyan
		description: "Parameterised prompt templates, version control, automated evaluations, and few-shot optimizations to make LLM outputs consistent, reliable, and cost-effective.",
		overview: "Our Prompt Engineering service treats prompts as managed, versioned, and testable codebase assets rather than buried copy-pasted strings. By establishing systematic prompt template libraries, continuous regression test harnesses, few-shot demonstration registries, and prompt compression techniques, we help rapidly growing AI companies cut LLM output errors by 64% and reduce token expenses by 41%.",
		technologies: ["Prompt Templates", "Automated Evaluation Harnesses", "Prompt Version Control", "Few-Shot Optimization", "Structured Output Schemas", "Prompt Compression"],
		features: [
			"Parameterised Template Library: Consolidating duplicated strings into parameterized, shared components.",
			"Prompt Versioning & Rollback: Tracking and serving prompts under version control with instant rollbacks.",
			"Automated Eval Harness: Running golden evaluation datasets to catch quality regressions before release.",
			"Prompt Optimization & Few-Shot: Fine-tuning instructions, few-shot examples, and chain-of-thought scoping."
		],
		useCases: [
			{
				industry: "AI SaaS Startup",
				title: "Enterprise Prompt Architecture & MLOps",
				desc: "Centralised 70+ prompts across 9 features for a fast-growing generative AI company, establishing version control, an A/B evaluation suite, and structured output formatting, cutting output failures by 64%."
			},
			{
				industry: "Content Tech",
				title: "Cost & Token Optimization Pipeline",
				desc: "Optimized a high-volume summarization and classification product, applying prompt compression and semantic parsing constraints to reduce token consumption costs by 41% with a 26% accuracy improvement."
			}
		],
		results: [
			{ metric: "Malformed Outputs", value: "-64% Reduction", desc: "Dramatically lower rate of parsing and formatting failures." },
			{ metric: "Token Consumption Cost", value: "-41% Savings", desc: "Significant reduction in per-request prompt and completion tokens." },
			{ metric: "Prompt Iteration Speed", value: "3.5× Faster", desc: "Prompt edits shipped and evaluated in under three hours instead of days." }
		]
	},
	"time-series-forecasting": {
		title: "Time Series Forecasting",
		category: "Machine Learning",
		highlight: "#c44dff", // Purple
		description: "Trend, seasonality, and hierarchical SKU forecasting models with honest walk-forward validation and calibrated prediction intervals.",
		overview: "Our Time Series Forecasting service replaces simplistic rolling averages with structured multi-horizon model portfolios (ARIMA, Prophet, global gradient-boosted ML). By decomposing complex trends and yearly seasonality, enforcing walk-forward validation to eliminate future-leakage, generating prediction intervals for safety-stock, and reconciliating forecasts hierarchically from SKU to aggregate category levels, we help companies reduce demand-forecast error by 47% and right-size inventory levels.",
		technologies: ["ARIMA", "Prophet", "Exponential Smoothing", "Hierarchical Reconciliation", "Walk-Forward Validation", "Prediction Intervals"],
		features: [
			"Multi-Model Portfolio: Algorithmic selection across ARIMA, Prophet, and gradient-boosted regressions per series.",
			"Seasonality Decomposition: Separating yearly, weekly, holiday, and promotional demand influences explicitly.",
			"Hierarchical Reconciliation: Enforcing mathematical consistency so SKU, category, and total forecasts agree.",
			"Calibrated Prediction Intervals: calibrating uncertainty ranges to enable data-driven safety-stock inventory decisions."
		],
		useCases: [
			{
				industry: "Retail Operations",
				title: "Hierarchical Demand Forecasting Pipeline",
				desc: "Deployed a time-aware forecasting system for 9,000+ SKUs with 4 years of history, implementing walk-forward validation and Prophet/ML models, cutting MAPE by 47% and stockouts by 58%."
			},
			{
				industry: "Supply Chain Logistics",
				title: "Inventory-Aware Safety Stock Modeler",
				desc: "Integrated walk-forward prediction intervals with inventory order management systems, reducing excess warehouse inventory on slow-moving products by 33%."
			}
		],
		results: [
			{ metric: "Forecast Error (MAPE)", value: "-47% Reduction", desc: "Significant improvement in forecast accuracy against a rolling-average baseline." },
			{ metric: "Fast-Mover Stockouts", value: "-58% Fewer", desc: "Material reduction in critical out-of-stock events during demand peaks." },
			{ metric: "Slow-Mover Excess", value: "-33% Inventory", desc: "Materially lower working-capital waste and warehouse overhead." }
		]
	},
	"model-optimization": {
		title: "Model Optimization",
		category: "Machine Learning",
		highlight: "#c44dff", // Purple
		description: "Quantization, structured pruning, and knowledge distillation pipeline making production models smaller, faster, and cheaper while preserving accuracy.",
		overview: "Model Optimization bridges the gap between research-stage models and production realities. Our structured optimization program applies quantization, structured pruning, and knowledge distillation under a rigorous accuracy verification harness. We enable scaling companies to reduce inference costs by 68% and triple throughput on existing hardware without losing more than 0.3% accuracy.",
		technologies: ["Quantization (INT8/FP16)", "Structured Pruning", "Knowledge Distillation", "ONNX", "TensorRT", "Kernel Fusion", "PyTorch"],
		features: [
			"Post-Training Quantization (INT8): Compressing weights and activations to INT8 to cut compute and memory footprint with near-zero accuracy drop.",
			"Structured Pruning: Removing low-contribution attention heads, layers, and neurons to make models structurally compact.",
			"Knowledge Distillation: Training compact student models to reproduce the behavior of larger teacher models, achieving high accuracy with a fraction of the size.",
			"Hardware-Aware Compilation: Compiling compressed models using ONNX and TensorRT with kernel fusion and batch-size tuning."
		],
		useCases: [
			{
				industry: "AI / SaaS",
				title: "Enterprise Model Optimization Program",
				desc: "Optimized 12 production models under strict accuracy budgets, applying post-training quantization, pruning, and distillation, cutting inference cost by 68% and tripling request throughput on existing hardware."
			},
			{
				industry: "Edge AI",
				title: "Constrained Edge Model Deployment",
				desc: "Trained a compact student model via knowledge distillation to inherit the accuracy of a large teacher model, making it small enough to deploy in a resource-constrained edge environment."
			}
		],
		results: [
			{ metric: "Inference Cost", value: "-68% Lower", desc: "Drastically reduced compute and memory cost per request as volume scaled." },
			{ metric: "Hardware Throughput", value: "3× Increase", desc: "Tripled predictions per second on the exact same hardware fleet." },
			{ metric: "Accuracy Preservation", value: "Within 0.3%", desc: "Worst-case degradation capped strictly within the pre-defined accuracy budget." }
		]
	},
	"feature-engineering": {
		title: "Feature Engineering",
		category: "Machine Learning",
		highlight: "#c44dff", // Purple
		description: "Governed feature stores, reusable transformation pipelines, and validation systems turning messy operational data into highly predictive ML signals.",
		overview: "Feature Engineering is where model accuracy and engineering reliability are won or lost. We design reusable feature pipelines that unify transformations across offline training and online inference. By building time-aware joins to prevent leakage, establishing standard preprocessing, and automating data quality checks, we improve model lift by 18% and cut feature iteration cycles by 42%.",
		technologies: ["Feature Pipelines", "Validation Tests", "Feature Store", "Time-Aware Joins", "MLOps", "SQL / Python"],
		features: [
			"Governed Feature Catalog: Single source of truth with definitions, owners, freshness rules, and lineage trails.",
			"Parity Transformation Pipelines: Generating the exact same transformations for batch training and real-time inference.",
			"Time-Aware Aggregation: Designing leakage-free aggregations locked exactly to the moment of prediction.",
			"Automated Feature Quality Checks: Monitoring null rates, schema shifts, freshness delays, and distribution changes."
		],
		useCases: [
			{
				industry: "Data-rich SaaS",
				title: "Enterprise Feature Store Implementation",
				desc: "Designed and deployed 134 production-ready cataloged features across churn, upsell, and risk predictions, guaranteeing zero active leakage risks and +18% model lift."
			},
			{
				industry: "MLOps",
				title: "Parity Inference & Training Pipelines",
				desc: "Constructed unified feature extraction pipelines that eliminate notebook-to-production manual translation, accelerating new feature rollout to same-day iteration."
			}
		],
		results: [
			{ metric: "Model Performance", value: "+18% Lift", desc: "Significant predictive accuracy gains across churn and risk models." },
			{ metric: "Cycle Time", value: "-42% Prep Time", desc: "Drastic reduction in data preparation and training workflow duration." },
			{ metric: "Parity & Security", value: "0 Leakage Risks", desc: "Absolute training-inference alignment with no future-data leakage." }
		]
	},
	"automl-solutions": {
		title: "AutoML Solutions",
		category: "Machine Learning",
		highlight: "#c44dff", // Purple
		description: "Governed AutoML workflows automating algorithm search, hyperparameter tuning, validation, and production deployment under clear risk limits.",
		overview: "AutoML Solutions scale machine learning impact without letting automation become a silent black box. We design structured AutoML systems that automate the highly intensive search and hyperparameter tuning phases while maintaining absolute data-science governance. By embedding clear metric scorecards, bias/fairness checks, and automatic retraining pipelines, we cut experimentation cycle times by 64% and evaluate 38% more model candidates per sprint.",
		technologies: ["AutoML Pipelines", "Hyperparameter Tuning", "Model Registry", "Experiment Tracking", "Fairness Scans", "MLOps"],
		features: [
			"Automated Algorithm Search: Controlled, parallel exploration across multiple model families to find baselines fast.",
			"Bounded Hyperparameter Tuning: Bounded grid, random, and Bayesian searches constrained by compute budget controls.",
			"Standard Evaluation Scorecards: Enforcing consistent test splits, validation rules, fairness audits, and threshold checks.",
			"Seamless Registry Hooks: Winning models are connected directly to deployment workflows, batch scoring, and APIs."
		],
		useCases: [
			{
				industry: "Growth-stage SaaS",
				title: "Enterprise AutoML Platform Rollout",
				desc: "Deployed automated pipelines for 6 priority model families across pricing, churn, and lead scoring, slashing average experimentation cycle times by 64%."
			},
			{
				industry: "Analytics Platform",
				title: "Governed Retraining & Registry Pipeline",
				desc: "Architected automated drift-based retraining loops with model registries, enabling instant batch and API deployment once holdout validation is passed."
			}
		],
		results: [
			{ metric: "Velocity Lift", value: "-64% Cycle Time", desc: "Drastic acceleration in model development and testing duration." },
			{ metric: "Exploration Rate", value: "+38% Candidates", desc: "More model families and hyperparameter variations checked per sprint." },
			{ metric: "Governance Parity", value: "6 Model Families", desc: "Consistent verification, fairness checks, and approvals across all pipelines." }
		]
	},
	"a-b-testing-ml": {
		title: "A/B Testing ML",
		category: "Machine Learning",
		highlight: "#c44dff", // Purple
		description: "Controlled ML A/B testing frameworks measuring incremental variant uplift, tracking operational guardrails, and managing phased releases.",
		overview: "A/B Testing ML moves model releases from offline speculation to production decisions. We design robust live-traffic experimentation pipelines that assign cohorts stably, capture true exposure logs, compute exact incremental lift, and safeguard guardrail metrics such as latency, fairness, and UX. By incorporating sequential testing rules and gradual rollout gates, we help teams scale model deployment with absolute confidence.",
		technologies: ["Experiment Design", "Uplift Modeling", "Sequential Testing", "Exposure Logs", "Guardrail Tracking", "Staged Rollouts"],
		features: [
			"Controlled Variant Routing: Stably routing user traffic to control and model variants using secure eligibility parameters.",
			"Uplift & Significance Scans: Mathematically sound uplift scoring with sequential monitoring rules to prevent early-peeking errors.",
			"Simultaneous Guardrail Telemetry: Tracking latency, user support load, fairness parameters, and revenue health side-by-side.",
			"Traceable Rollout Gates: Staged release paths (5% -> 25% -> 100%) with automated and human gatekeeping checks."
		],
		useCases: [
			{
				industry: "Consumer SaaS",
				title: "Enterprise ML A/B Testing Rollout",
				desc: "Launched a standardized experimentation platform, validating 14 model-backed variants across recommendations and pricing, cutting inconclusive tests by 31%."
			},
			{
				industry: "Digital Marketplace",
				title: "Recommendation Variant Uplift Study",
				desc: "A/B tested a new recommendation model against live production traffic, capturing exposure logs and securing an +11% incremental conversion lift."
			}
		],
		results: [
			{ metric: "Incremental Lift", value: "+11% Conversion", desc: "Measured real-world revenue and engagement uplift on the winning model." },
			{ metric: "Test Efficiency", value: "-31% Inconclusive", desc: "Fewer wasted sprints due to standardized power checks and templates." },
			{ metric: "Governance Metrics", value: "14 Governed Tests", desc: "Consistent experiment metrics, guardrail definitions, and approval trails." }
		]
	}
};
