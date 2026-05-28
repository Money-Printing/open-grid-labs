import { useState } from "react";
import { useParams, Link, Navigate } from "react-router";
import SEO from "../../../components/seo";
import { motion, AnimatePresence } from "motion/react";
import { 
	ArrowLeft, 
	BrainCircuit, 
	ArrowRight, 
	Sparkles, 
	CheckCircle2, 
	Terminal,
	Layers,
	ShieldCheck,
	Workflow,
	Activity,
	Lock,
	ChevronDown,
	HelpCircle,
	Quote as QuoteIcon,
	Database,
	Cpu
} from "lucide-react";

// Slugify helper
export const slugify = (text: string) => {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)+/g, "");
};

interface ServiceDetail {
	title: string;
	category: "Artificial Intelligence" | "Machine Learning" | "Deep Learning" | "Natural Language";
	highlight: string;
	description: string;
	overview: string;
	technologies: string[];
	features: string[];
	useCases: {
		industry: string;
		title: string;
		desc: string;
	}[];
	results: {
		metric: string;
		value: string;
		desc: string;
	}[];
}

// Highly detailed custom data for featured services
const customServicesData: Record<string, ServiceDetail> = {
	"agentic-ai": {
		title: "Agentic AI",
		category: "Artificial Intelligence",
		highlight: "hsl(180,100%,50%)", // Cyan
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
		highlight: "hsl(180,100%,50%)", // Cyan
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
		highlight: "hsl(180,100%,50%)", // Cyan
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
		highlight: "hsl(150,100%,45%)", // Emerald
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
	"mlops-pipeline": {
		title: "MLOps Pipeline",
		category: "Machine Learning",
		highlight: "hsl(280,100%,65%)", // Purple
		description: "Enterprise-grade Machine Learning operations pipelines that automate model training, testing, tracking, and scalable deployment.",
		overview: "Bridging the gap between experimental data science and resilient enterprise software is the core of our MLOps practice. We construct fully automated CI/CD pipelines for models, ensuring continuous training, rigid integration testing, model performance tracking, and low-latency deployments. By implementing real-time drift detection and shadow deployments, we ensure your production models remain accurate and dependable.",
		technologies: ["Kubeflow", "MLflow", "Docker", "Kubernetes", "AWS SageMaker", "Prometheus & Grafana", "DVC (Data Version Control)"],
		features: [
			"Automated Training Pipelines: Triggering model retraining based on schedules, performance degradation, or new data arrivals.",
			"Data & Model Versioning (DVC): Absolute reproducibility by locking datasets, hyperparameters, and resulting binaries together.",
			"Model Drift & Latency Monitoring: Active alerting when incoming inference data diverges from the training distribution.",
			"Zero-Downtime Deployments: Implementing canary, blue-green, and shadow deployment schemes for seamless updates."
		],
		useCases: [
			{
				industry: "Fintech",
				title: "Enterprise Credit Scoring Pipeline",
				desc: "Architected an automated MLOps pipeline that orchestrates the daily ingestion of credit histories, retrains tabular models, performs bias audits, and rolls out the updated model via canary deployments."
			},
			{
				industry: "AdTech",
				title: "High-Throughput Recommendation MLOps",
				desc: "Built a Kubernetes-based inference cluster supporting 50,000 predictions per second with real-time performance tracking and automated rollbacks based on predictive quality metrics."
			}
		],
		results: [
			{ metric: "Time-to-Production", value: "95% Reduction", desc: "Decreased model deployment cycle from weeks to 20 minutes." },
			{ metric: "Inference Latency", value: "99.9% < 12ms", desc: "Ensured fast, predictable predictions at scale." },
			{ metric: "Drift Detection", value: "< 2 Minutes", desc: "Immediate identification and routing for model retraining." }
		]
	},
	"computer-vision": {
		title: "Computer Vision",
		category: "Deep Learning",
		highlight: "hsl(330,100%,60%)", // Pink
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
	}
};

// High-fidelity fallback database generator to dynamically populate any of the 48 services with incredibly professional, specific content.
// This guarantees that absolutely every single one of the 48 services has a fully detailed, custom-looking landing page.
const generateServiceDetail = (slug: string, title: string): ServiceDetail => {
	// First check if explicit detailed data exists
	if (customServicesData[slug]) {
		return customServicesData[slug];
	}

	// Figure out the category from the lists
	const aiServices = [
		"Agentic AI", "Large Language Models", "Voice to Text Converter", "AI Strategy Consulting",
		"Explainable AI", "AI Ethics & Governance", "Prompt Engineering", "AI Model Fine-tuning",
		"RAG Implementation", "AI Integration Services", "Custom AI Solutions", "AI Performance Monitoring"
	];
	const mlServices = [
		"Predictive Modeling", "Classification Systems", "Regression Analysis", "Clustering Algorithms",
		"Recommendation Engines", "Anomaly Detection", "Time Series Forecasting", "Feature Engineering",
		"Model Optimization", "A/B Testing ML", "AutoML Solutions", "MLOps Pipeline"
	];
	const dlServices = [
		"Neural Networks", "Computer Vision", "Image Recognition", "Object Detection",
		"Face Recognition", "OCR Solutions", "Video Analytics", "Generative AI",
		"Style Transfer", "CNN Models", "RNN/LSTM", "Transfer Learning"
	];
	
	let category: "Artificial Intelligence" | "Machine Learning" | "Deep Learning" | "Natural Language" = "Natural Language";
	let highlight = "hsl(150,100%,45%)"; // Emerald default

	if (aiServices.includes(title)) {
		category = "Artificial Intelligence";
		highlight = "hsl(180,100%,50%)"; // Cyan
	} else if (mlServices.includes(title)) {
		category = "Machine Learning";
		highlight = "hsl(280,100%,65%)"; // Purple
	} else if (dlServices.includes(title)) {
		category = "Deep Learning";
		highlight = "hsl(330,100%,60%)"; // Pink
	}

	// Category specific parameters to generate high-fidelity tailored templates
	const categoryConfig = {
		"Artificial Intelligence": {
			tech: ["LangChain", "OpenAI API", "Hugging Face", "Python", "LlamaIndex", "VectorDBs", "Docker"],
			metrics: [
				{ metric: "Efficiency Gain", value: "45% Reduction", desc: "In operational costs and processing cycles." },
				{ metric: "Deployment Time", value: "2 Weeks", desc: "Rapid implementation through microservice frameworks." },
				{ metric: "System Accuracy", value: "99.2%", desc: "High confidence in structured tasks and API routing." }
			]
		},
		"Machine Learning": {
			tech: ["Scikit-Learn", "XGBoost", "Pandas", "NumPy", "PostgreSQL", "MLflow", "FastAPI"],
			metrics: [
				{ metric: "Prediction Accuracy", value: "94.8% Area Under Curve", desc: "Extremely robust predictive classification metrics." },
				{ metric: "Feature Processing", value: "10x Speedup", desc: "Compared to traditional legacy ETL architectures." },
				{ metric: "Revenue Impact", value: "+18% Growth", desc: "Direct optimization of transactional and customer flows." }
			]
		},
		"Deep Learning": {
			tech: ["PyTorch", "TensorFlow", "CUDA", "TensorRT", "NVIDIA Triton", "Docker", "ONNX"],
			metrics: [
				{ metric: "Inference Latency", value: "15ms Average", desc: "Highly optimized deep model execution times." },
				{ metric: "Precision Metric", value: "98.5% IoU", desc: "Exceptional spatial and categorization boundaries." },
				{ metric: "Throughput Capacity", value: "50k req/sec", desc: "Scalable clusters serving low-latency requests." }
			]
		},
		"Natural Language": {
			tech: ["SpaCy", "NLTK", "Transformers (Hugging Face)", "PyTorch", "FastAPI", "Elasticsearch", "Neo4j"],
			metrics: [
				{ metric: "Semantic Accuracy", value: "96.4% F1 Score", desc: "High linguistic understanding and categorization accuracy." },
				{ metric: "Response Speed", value: "120ms RT", desc: "Near-instant text analysis and intent classification." },
				{ metric: "Information Extraction", value: "90% Automation", desc: "Dramatically lower reliance on manual indexing." }
			]
		}
	};

	const config = categoryConfig[category];

	return {
		title: title,
		category: category,
		highlight: highlight,
		description: `Enterprise-grade ${title} solutions designed to drive operational automation, scale intelligence, and deliver immediate ROI.`,
		overview: `Our ${title} service utilizes cutting-edge architectures to resolve complex organizational problems. By integrating modern ${category} methods, custom data validation frameworks, and optimized hosting environments, we build software that turns raw information into actionable business intelligence. We tailor every aspect to align with regulatory standards, custom APIs, and demanding performance requirements.`,
		technologies: config.tech,
		features: [
			`Tailormade ${title} Modeling: Custom configurations designed specifically around your datasets and business context.`,
			"Automated Scaling & Orchestration: Deployments utilizing high-throughput container systems (Docker/Kubernetes).",
			"Real-Time Analytics & Reporting: Continuous logging of processing speed, accuracy metrics, and system logs.",
			"Secure Data Handshakes: Advanced encryption protocols guaranteeing that all transit data is fully protected."
		],
		useCases: [
			{
				industry: "Fintech",
				title: `${title} Asset Management & Risk System`,
				desc: `Integrated our custom ${title} algorithms with legacy transaction APIs to evaluate risk models, predict fraudulent movements, and audit operations, reducing compliance auditing overhead by 40%.`
			},
			{
				industry: "Retail & E-Commerce",
				title: `${title}-Powered Operational Flow`,
				desc: `Developed an end-to-end data pipelines that leverages ${title} to analyze real-time demand signals, automate stock allocation, and serve contextual notifications, lifting customer conversion metrics by 14%.`
			}
		],
		results: config.metrics
	};
};

function AIIntegrationServicesCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	const stats = [
		{ value: "12", label: "Manual workflows automated end to end", accent: "from-cyan-400 to-blue-500" },
		{ value: "70%", label: "Less manual data handling across teams", accent: "from-purple-500 to-fuchsia-400" },
		{ value: "9", label: "Existing systems connected to AI", accent: "from-pink-500 to-rose-400" },
		{ value: "11 wk", label: "From stalled prototype to production", accent: "from-emerald-400 to-teal-500" }
	];

	const challenges = [
		{ text: "AI ran in a sandbox with no live connection to CRM, warehouse, or internal tools" },
		{ text: "Staff manually copied data in and out, making the AI slower than doing the task by hand" },
		{ text: "Each system had its own API, auth, and quirks—every integration was a brittle one-off" },
		{ text: "No permissions, logging, or error handling, so the AI couldn't be trusted with live data" },
		{ text: "AI was bolted alongside workflows rather than embedded inside them, so adoption stalled" }
	];

	const solutions = [
		{ text: "A unified integration layer exposing AI to every system through one consistent, secure interface" },
		{ text: "Reusable connectors for the CRM, data warehouse, ticketing, and internal apps" },
		{ text: "An orchestration engine that chains AI steps with system actions into end-to-end workflows" },
		{ text: "Centralised authentication, permissions, logging, and error handling across all integrations" },
		{ text: "AI embedded directly into existing tools and workflows, where staff already work" }
	];

	const architectureStages = [
		{ title: "Systems", items: ["CRM", "Data Warehouse", "Ticketing", "Internal Apps", "Third-party APIs", "Document Stores"], color: "hsl(180,100%,50%)" },
		{ title: "Connectors", items: ["Reusable API Connectors", "Authentication & Secrets", "Permissions & Data Scoping", "Rate Limiting & Retries"], color: "hsl(210,100%,50%)" },
		{ title: "Orchestration", items: ["Workflow Engine", "AI + System Action Chaining", "Triggers & Events", "Human-in-the-Loop Steps"], color: "hsl(280,100%,65%)" },
		{ title: "AI & Delivery", items: ["LLM & AI Services", "In-App Embedding", "Audit Logging", "Monitoring & Error Alerting"], color: "hsl(330,100%,60%)" }
	];

	const phases = [
		{
			number: "Phase 1",
			title: "Integration Layer & First Connector (Weeks 1–4)",
			desc: "OpenGridLabs designed the unified integration layer with centralised authentication, permissions, logging, and error handling, then built the first connector—to the CRM—and shipped one complete automated workflow end to end. This proved the architecture on a real, high-value process before scaling.",
			accent: "from-cyan-400 to-blue-500"
		},
		{
			number: "Phase 2",
			title: "Connectors & Orchestration (Weeks 5–9)",
			desc: "With the foundation proven, the team added connectors for the data warehouse, ticketing system, and internal apps, and built the orchestration engine that chains AI steps with system actions—reading a record, calling the AI, writing results back, and triggering follow-on steps. Human-in-the-loop checkpoints were added where staff needed to review before an action committed.",
			accent: "from-purple-500 to-fuchsia-400"
		},
		{
			number: "Phase 3",
			title: "Embedding, Monitoring & Enablement (Weeks 10–11)",
			desc: "OpenGridLabs embedded the AI directly into the tools staff already used, so it appeared inside their workflow rather than as a separate app. End-to-end monitoring, audit logging, and error alerting were finalised, and the client's engineers were trained to build new connectors and workflows on the layer themselves—so integration could continue without external help.",
			accent: "from-pink-500 to-rose-400"
		}
	];

	const tableResults = [
		{ metric: "Systems connected to AI", before: "0 (sandbox)", after: "9", change: "Integrated" },
		{ metric: "Workflows automated end to end", before: "0", after: "12", change: "New capability" },
		{ metric: "Manual data handling", before: "Baseline", after: "30% of baseline", change: "-70%" },
		{ metric: "Average task turnaround", before: "Baseline", after: "0.4× baseline", change: "2.5× faster" },
		{ metric: "AI feature adoption by staff", before: "Low (extra app)", after: "High (in-workflow)", change: "Embedded" },
		{ metric: "Integration audit & logging", before: "None", after: "Full coverage", change: "New capability" },
		{ metric: "Effort to add a new system", before: "One-off project", after: "Reusable connector", change: "Scalable" }
	];

	const successFactors = [
		{
			title: "A layer, not a tangle of one-offs",
			desc: "Investing first in a unified integration layer meant every new system became a reusable connector rather than a bespoke project—keeping complexity flat as coverage grew and avoiding the brittle web that sinks most integration efforts."
		},
		{
			title: "Embed where people already work",
			desc: "Putting AI inside the tools staff already used—rather than as a separate app to switch to—was the difference between low and high adoption. Integration is as much about workflow as about APIs."
		},
		{
			title: "Security and observability from day one",
			desc: "Centralised authentication, permissions, logging, and error handling meant the AI could be trusted with live data and every action was traceable—turning a risky prototype into something safe to run in production."
		},
		{
			title: "Prove it on one workflow first",
			desc: "Shipping a single complete, automated workflow early validated the architecture and built confidence before scaling—so the broader rollout extended a proven pattern rather than betting on an untested design."
		}
	];

	const faqs = [
		{
			q: "What are AI integration services?",
			a: "AI integration services connect AI capabilities—such as large language models, speech, or vision—to an organisation's existing systems, data, and workflows. Rather than building AI in isolation, integration delivers the connectors, API layers, authentication, data pipelines, and orchestration needed for AI to read from and write to tools like CRMs, data warehouses, and internal apps, so it becomes part of day-to-day operations."
		},
		{
			q: "Why do AI projects fail at the integration stage?",
			a: "Many AI projects produce a strong model or prototype that never reaches users because it isn't connected to real systems. Common causes include brittle one-off integrations, no unified API layer, authentication and data-access hurdles, poor error handling, and AI bolted onto workflows rather than embedded in them. A dedicated integration layer with reusable connectors, monitoring, and security solves these problems."
		}
	];

	return (
		<>
			<SEO
				title="AI Integration Services Case Study - OpenGridLabs"
				description="How OpenGridLabs built an enterprise AI integration layer connecting CRM, data warehouse, and internal tools in 11 weeks to automate 12 workflows."
				canonical="/services/ai-data/ai-integration-services"
				keywords="AI Integration, AI System Integration, LLM API Integration, AI Workflow Automation, AI Orchestration, AI Connectors, AI Middleware, Enterprise AI, CRM Integration, API Layer, AI Deployment, System Integration"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(280,100%,65%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/ai-data" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to AI & Data Intelligence
					</Link>
				</div>

				{/* Main Hero Header */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-start">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							<div className="flex items-center gap-3">
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 backdrop-blur-md">
									Case Study · Artificial Intelligence
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How AI Integration Embedded Intelligence Across a Company's Entire Stack in 11 Weeks
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling company had capable AI that nobody could use—stuck in a prototype, disconnected from real systems. OpenGridLabs built the integration layer that plugged AI into their CRM, data warehouse, and internal tools, automating twelve workflows and finally turning a promising demo into daily production value.
							</p>
						</motion.div>

						{/* Project Overview Details Panel */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4 w-full"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl space-y-6">
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-cyan-400" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-cyan-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">Technology / SaaS (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scope</span>
										<span className="text-base font-semibold text-foreground">9 systems connected</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">11 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">API Layer · Connectors · Orchestration · Auth</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Floating Glowing Stats Grid */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-20 relative z-10">
					<div className="grid md:grid-cols-4 gap-6">
						{stats.map((stat, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.08 }}
								whileHover={{ scale: 1.03, y: -5 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-cyan-400 transition-colors">
										{stat.value}
									</p>
									<p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/90 transition-colors">
										{stat.label}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Detailed Background & Definition Block */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-stretch">
						<div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl space-y-6">
							<div className="flex items-center gap-2">
								<BrainCircuit className="w-5 h-5 text-cyan-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-cyan-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client is a venture-backed technology company that had invested heavily in AI capability—a capable model and a slick internal prototype that summarised records, drafted responses, and classified incoming work. In a demo, it was impressive. In the business, it changed nothing. The AI lived in a sandbox, disconnected from the systems where work actually happened.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								To use it, staff copied data out of the CRM, pasted it into the prototype, then copied results back by hand. Nothing flowed automatically, nothing was logged, and the AI had no live access to the company's data warehouse, ticketing system, or internal apps. The hard part of AI, the team had discovered, was not building the model—it was wiring it into a real environment of legacy APIs, authentication, permissions, and existing workflows. They needed AI integration services: the connective layer that turns standalone AI into a working part of the operation.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Are AI Integration Services?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									AI integration services connect AI capabilities to an organisation's existing systems, data, and workflows. Rather than building AI in isolation, integration delivers the connectors, API layers, authentication, data pipelines, and orchestration that let AI read from and write to tools like CRMs, data warehouses, and internal apps—so it becomes a usable part of everyday operations rather than a sandboxed demo.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* The Challenge vs Solutions Delivered section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Gap & The Solution</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Five Integration Gaps Overcome
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs unlocked the capabilities of a stalled AI prototype and scaled it across 9 production systems.
						</p>
					</div>

					<div className="space-y-6">
						{challenges.map((challenge, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: idx * 0.05 }}
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
							>
								<div className="grid lg:grid-cols-12 gap-8 items-center">
									{/* Challenge Left Column */}
									<div className="lg:col-span-5 flex gap-4 items-start">
										<div className="w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0 flex items-center justify-center text-red-500 font-bold border border-red-500/20">
											{idx + 1}
										</div>
										<div>
											<span className="text-xs uppercase text-red-500 font-bold tracking-widest block mb-1">Challenge</span>
											<p className="text-foreground/90 font-medium text-base md:text-lg">
												{challenge.text}
											</p>
										</div>
									</div>

									{/* Connector arrow */}
									<div className="hidden lg:flex lg:col-span-1 justify-center">
										<ArrowRight className="w-6 h-6 text-cyan-400" />
									</div>

									{/* Solution Right Column */}
									<div className="lg:col-span-6 flex gap-4 items-start border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
										<div className="w-8 h-8 rounded-full bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-500 border border-green-500/20">
											<CheckCircle2 className="w-5 h-5" />
										</div>
										<div>
											<span className="text-xs uppercase text-green-500 font-bold tracking-widest block mb-1">Solution Delivered</span>
											<p className="text-foreground font-semibold text-base md:text-lg">
												{solutions[idx].text}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* System Architecture Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-cyan-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Blueprint</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									System Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-cyan-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs built an integration layer that sits between the company's AI capabilities and its existing systems. Instead of point-to-point connections that multiply with every new tool, everything routes through one orchestration layer with shared connectors, security, and monitoring—so adding a system or a workflow is incremental rather than a fresh integration project each time.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Build the layer once, connect everything after:</strong> The trap in AI integration is building a brittle one-off connection for every system, so complexity explodes as tools are added. Centralised auth, consistent logging and error handling turns each addition into a small, safe project.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									AI Integration Architecture Layers
								</h3>
								
								<div className="flex flex-col gap-3">
									{architectureStages.map((stage, idx) => (
										<motion.div 
											key={idx}
											whileHover={{ x: 10 }}
											transition={{ type: "spring", stiffness: 300, damping: 20 }}
											className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg group relative overflow-hidden"
										>
											<div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: stage.color }} />
											<div className="md:w-1/4">
												<h4 className="font-bold uppercase tracking-wider text-sm text-foreground flex items-center gap-2">
													{idx === 0 && <Database className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 1 && <Lock className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 2 && <Workflow className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 3 && <Cpu className="w-4 h-4" style={{ color: stage.color }} />}
													{stage.title}
												</h4>
											</div>
											<div className="md:w-3/4 flex flex-wrap gap-2">
												{stage.items.map((item, itemIdx) => (
													<span key={itemIdx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-muted-foreground group-hover:text-foreground transition-colors">
														{item}
													</span>
												))}
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Implementation Approach Timeline */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-20">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Roadmap</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Implementation Approach
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							OpenGridLabs embedded a team of integration engineers and a solutions architect alongside the client's team across three structured phases.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20" />
						
						{phases.map((phase, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.15 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 relative shadow-xl md:w-1/3 flex flex-col justify-between"
							>
								<div 
									className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r"
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(180,100%,50%)" : idx === 1 ? "hsl(280,100%,65%)" : "hsl(330,100%,60%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1 rounded-full border border-cyan-400/20">
											{phase.number}
										</span>
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{phase.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{phase.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Measurable Results Table */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12 text-center lg:text-left">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Proven Value</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Measurable Results
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl">
							Outcomes were measured across a 60-day post-deployment window against pre-engagement baselines, demonstrating the power of workflow integration.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400">After</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{tableResults.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-cyan-400 font-bold text-base">{row.after}</td>
											<td className="p-6 text-green-400 font-bold text-base flex items-center gap-1.5">
												<CheckCircle2 className="w-4 h-4 text-green-500" />
												{row.change}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* Pull Quote Block */}
				<section className="w-[90%] max-w-[1200px] mx-auto mt-32 relative z-10 text-center">
					<div className="glass-panel p-12 md:p-20 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-8 left-10 text-cyan-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"We'd spent months on the AI itself and it sat unused because it touched nothing. The integration work is what made it real—now it reads from our systems, acts in them, and shows up right inside the tools our team already uses every day."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— VP of Operations</p>
								<p className="text-sm text-muted-foreground">Confidential venture-backed Technology Company</p>
							</div>
						</div>
					</div>
				</section>

				{/* Success Factors Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Key Drivers</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Why This Worked: Key Success Factors
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{successFactors.map((factor, idx) => (
							<div 
								key={idx}
								className="glass-panel p-8 md:p-12 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-cyan-400" />
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{factor.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm md:text-base leading-relaxed">
									{factor.desc}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Accordion FAQ Section */}
				<section className="w-[90%] max-w-[1000px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Learning Center</span>
						<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mt-2">
							Frequently Asked Questions
						</h2>
					</div>

					<div className="space-y-4">
						{faqs.map((faq, idx) => {
							const isOpen = activeFaq === idx;
							return (
								<div 
									key={idx} 
									className="glass-panel rounded-2xl border border-black/5 dark:border-white/5 shadow-md overflow-hidden transition-all duration-300"
								>
									<button 
										onClick={() => toggleFaq(idx)}
										className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.01] transition-colors focus:outline-none"
									>
										<div className="flex gap-3 items-center">
											<HelpCircle className="w-5 h-5 text-cyan-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
									</button>
									
									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div 
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3 }}
												className="overflow-hidden border-t border-white/5"
											>
												<div className="p-6 text-muted-foreground text-sm md:text-base leading-relaxed bg-white/[0.005]">
													{faq.a}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						})}
					</div>
				</section>

				{/* Final Call to Action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div 
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-cyan-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-cyan-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Ready to connect your AI to the systems where work happens?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds AI integration layers—reusable connectors, orchestration, security, and in-workflow embedding—so your AI becomes a working part of daily operations, not a sandboxed demo.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-cyan-400 to-purple-500 hover:shadow-cyan-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(34,211,238,0.2)`
									}}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/ai-data"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 border border-white/10 hover:border-white/20 text-foreground"
								>
									More case studies
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

function LargeLanguageModelsCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	const stats = [
		{ value: "71%", label: "Reduction in per-query inference cost", accent: "from-cyan-400 to-blue-500" },
		{ value: "3.2×", label: "Faster median response latency", accent: "from-purple-500 to-fuchsia-400" },
		{ value: "38%", label: "Increase in answer accuracy on eval sets", accent: "from-pink-500 to-rose-400" },
		{ value: "12 wk", label: "From prototype to full production deployment", accent: "from-emerald-400 to-teal-500" }
	];

	const challenges = [
		{ text: "Every request—trivial or complex—hit a single frontier model, making inference cost the largest line item in COGS" },
		{ text: "Responses occasionally fabricated facts not present in the customer's own documents, undermining enterprise trust" },
		{ text: "P95 latency exceeded 9 seconds during peak load, hurting user experience and retention" },
		{ text: "No systematic evaluation harness—quality regressions shipped silently with each prompt change" },
		{ text: "Zero observability into token spend, cache behaviour, or per-customer cost attribution" }
	];

	const solutions = [
		{ text: "Intelligent model-routing layer directing simple queries to small fine-tuned models and reserving frontier models for hard cases" },
		{ text: "Retrieval-augmented generation grounding every answer in the customer's own indexed knowledge base" },
		{ text: "Semantic caching that returns vetted answers for repeated and near-duplicate queries instantly" },
		{ text: "An automated evaluation harness with golden datasets gating every model and prompt change before release" },
		{ text: "Full LLMOps observability dashboard with token spend, latency, and per-customer cost attribution" }
	];

	const architectureStages = [
		{ title: "Ingestion", items: ["Document Loaders", "Chunking & Embedding Pipeline", "Vector Database", "Metadata & Access-Control Indexing"], color: "hsl(180,100%,50%)" },
		{ title: "Orchestration", items: ["Intent Classification", "Model Router", "Prompt Templating", "Semantic Cache", "Token Budgeting & Rate Limiting"], color: "hsl(210,100%,50%)" },
		{ title: "Model Layer", items: ["Fine-Tuned Small Models", "Frontier Model Fallback", "RAG Retriever", "Re-Ranker", "Structured Output & Guardrails"], color: "hsl(280,100%,65%)" },
		{ title: "Eval & Ops", items: ["Automated Eval Harness", "Golden Datasets", "Cost & Latency Telemetry", "Hallucination & Drift Monitoring", "Human Feedback Loop"], color: "hsl(330,100%,60%)" }
	];

	const phases = [
		{
			number: "Phase 1",
			title: "Evaluation Baseline & RAG Foundation (Weeks 1–4)",
			desc: "Before changing anything, OpenGridLabs built an evaluation harness with golden datasets drawn from real customer queries and expert-labelled answers. This made quality measurable for the first time. In parallel, the team stood up the retrieval pipeline—chunking, embedding, and indexing customer documents—so the model could be grounded in trusted data rather than relying on parametric memory.",
			accent: "from-cyan-400 to-blue-500"
		},
		{
			number: "Phase 2",
			title: "Fine-tuning & Model Routing (Weeks 5–9)",
			desc: "Using the labelled data, OpenGridLabs fine-tuned compact open models to match frontier-model quality on the most common query types at a fraction of the cost. An intent classifier and router were introduced to send each request to the cheapest model that could answer it correctly, escalating to the frontier model only when confidence was low. Every routing rule was validated against the eval harness before going live.",
			accent: "from-purple-500 to-fuchsia-400"
		},
		{
			number: "Phase 3",
			title: "Caching, Observability & Hardening (Weeks 10–12)",
			desc: "Semantic caching was layered in to eliminate redundant inference on repeated queries. A full observability dashboard exposed token spend, latency percentiles, cache hit rates, and per-customer cost. Guardrails for structured output and hallucination detection were finalised, and the client's engineers were trained to run the eval harness themselves so quality gates would outlast the engagement.",
			accent: "from-pink-500 to-rose-400"
		}
	];

	const tableResults = [
		{ metric: "Per-query inference cost", before: "Baseline", after: "29% of baseline", change: "−71%" },
		{ metric: "Median response latency", before: "4.8 s", after: "1.5 s", change: "−69%" },
		{ metric: "P95 latency (peak load)", before: "9.2 s", after: "3.1 s", change: "−66%" },
		{ metric: "Answer accuracy (eval set)", before: "61%", after: "84%", change: "+38%" },
		{ metric: "Hallucination rate", before: "9.4%", after: "1.2%", change: "−87%" },
		{ metric: "Cache hit rate (repeat queries)", before: "0%", after: "41%", change: "+41 pts" },
		{ metric: "Gross margin on AI features", before: "—", after: "+34 points", change: "Margin restored" }
	];

	const successFactors = [
		{
			title: "Evaluation before optimisation",
			desc: "By building a measurable eval harness in week one, every subsequent change could be judged on evidence rather than intuition. This turned a subjective 'does it feel better?' debate into a quantifiable quality gate."
		},
		{
			title: "Right-sizing the model to the task",
			desc: "Most queries did not need a frontier model. Routing the easy majority to small fine-tuned models—and reserving expensive capacity for genuinely hard cases—was the single largest driver of the cost reduction."
		},
		{
			title: "RAG for truth, fine-tuning for behaviour",
			desc: "Rather than treating them as competing approaches, OpenGridLabs combined them: retrieval grounded answers in the customer's real data, while fine-tuning shaped tone, format, and domain reasoning. The combination cut hallucinations sharply."
		},
		{
			title: "Observability as a first-class feature",
			desc: "Per-customer cost and latency telemetry meant the client could finally price, forecast, and optimise with confidence—turning their LLM from an unpredictable expense into a managed, profitable capability."
		}
	];

	const faqs = [
		{
			q: "What is the difference between RAG and fine-tuning?",
			a: "Retrieval-augmented generation grounds a model in external, up-to-date knowledge at query time, making it ideal for factual accuracy and frequently changing data. Fine-tuning adjusts the model's weights to specialise its tone, format, and reasoning. In production, the two are complementary—fine-tuning shapes behaviour while RAG supplies current, trusted knowledge."
		},
		{
			q: "How do you reduce LLM inference costs at scale?",
			a: "The biggest levers are intelligent model routing (sending simple queries to smaller, cheaper models), semantic caching of repeated work, prompt compression, and substituting compact fine-tuned models for large general-purpose ones wherever accuracy allows. Together these can reduce per-query costs by well over half without sacrificing quality."
		}
	];

	return (
		<>
			<SEO
				title="LLM Cost & Latency Optimization Case Study | OpenGridLabs"
				description="How OpenGridLabs cut LLM inference costs by 71% and sped up response latency by 3.2x for an enterprise knowledge assistant product."
				canonical="/services/ai-data/large-language-models"
				keywords="Large Language Models, LLM inference cost, RAG, Fine-tuning, Small Language Models, LLMOps"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(280,100%,65%) 0%, hsl(180,100%,50%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/ai-data" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to AI & Data Intelligence
					</Link>
				</div>

				{/* Main Hero Header */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-start">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							<div className="flex items-center gap-3">
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 backdrop-blur-md">
									Case Study · Artificial Intelligence
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Production-Grade LLMs Cut Inference Costs 71% for a High-Growth AI Company
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling AI product company partnered with OpenGridLabs to take large language models from promising prototype to reliable production—combining fine-tuning, retrieval-augmented generation, and intelligent model routing to deliver accuracy and economics that finally made sense at scale.
							</p>
						</motion.div>

						{/* Project Overview Details Panel */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4 w-full"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl space-y-6">
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-purple-500" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-purple-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">AI / SaaS (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scale</span>
										<span className="text-base font-semibold text-foreground">8M+ queries / month</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">12 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">LLM Fine-tuning · RAG · Model Routing · LLMOps</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Floating Glowing Stats Grid */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-20 relative z-10">
					<div className="grid md:grid-cols-4 gap-6">
						{stats.map((stat, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.08 }}
								whileHover={{ scale: 1.03, y: -5 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-purple-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-purple-400 transition-colors">
										{stat.value}
									</p>
									<p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/90 transition-colors">
										{stat.label}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Detailed Background & Definition Block */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-stretch">
						<div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl space-y-6">
							<div className="flex items-center gap-2">
								<BrainCircuit className="w-5 h-5 text-purple-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-purple-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-purple-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client is a venture-backed AI company building a knowledge-assistant product used by enterprise customers across legal, financial, and technical-support teams. After an early version built on a single large general-purpose model proved the concept, adoption grew faster than the infrastructure could economically support. By the time they engaged OpenGridLabs, the product was serving more than eight million queries per month—and the unit economics were heading in the wrong direction.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Every query, simple or complex, was routed to the same expensive frontier model. Latency was inconsistent, responses occasionally hallucinated facts that weren't in the customer's own data, and the cost of goods sold was eroding gross margin to the point where leadership feared it would threaten the next funding round. The team didn't need a better demo. They needed large language models that were accurate, fast, observable, and economically sustainable in production.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-purple-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-purple-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Does It Mean to Productionize an LLM?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									A working prompt is not a production system. Productionizing a large language model means grounding it in trusted data (RAG), specialising its behaviour where needed (fine-tuning), routing each request to the right-sized model, caching repeated work, and wrapping the whole pipeline in evaluation, monitoring, and guardrails so quality and cost stay predictable at scale.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* The Challenge vs Solutions Delivered section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Gap & The Solution</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Five Optimization Challenges Overcome
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs transformed an expensive, hallucinating prototype into a fast, predictable enterprise system.
						</p>
					</div>

					<div className="space-y-6">
						{challenges.map((challenge, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: idx * 0.05 }}
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-purple-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
							>
								<div className="grid lg:grid-cols-12 gap-8 items-center">
									{/* Challenge Left Column */}
									<div className="lg:col-span-5 flex gap-4 items-start">
										<div className="w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0 flex items-center justify-center text-red-500 font-bold border border-red-500/20">
											{idx + 1}
										</div>
										<div>
											<span className="text-xs uppercase text-red-500 font-bold tracking-widest block mb-1">Challenge</span>
											<p className="text-foreground/90 font-medium text-base md:text-lg">
												{challenge.text}
											</p>
										</div>
									</div>

									{/* Connector arrow */}
									<div className="hidden lg:flex lg:col-span-1 justify-center">
										<ArrowRight className="w-6 h-6 text-purple-400" />
									</div>

									{/* Solution Right Column */}
									<div className="lg:col-span-6 flex gap-4 items-start border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
										<div className="w-8 h-8 rounded-full bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-500 border border-green-500/20">
											<CheckCircle2 className="w-5 h-5" />
										</div>
										<div>
											<span className="text-xs uppercase text-green-500 font-bold tracking-widest block mb-1">Solution Delivered</span>
											<p className="text-foreground font-semibold text-base md:text-lg">
												{solutions[idx].text}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* System Architecture Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-purple-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-purple-400">Blueprint</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									System Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-purple-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs designed a layered LLM platform that sits between the client's application and the underlying model providers. The architecture is provider-agnostic—models can be swapped or added without application changes—and is built for evaluation, cost control, and regulatory-grade data handling from the ground up.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-purple-500/20 bg-purple-500/5 text-purple-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Privacy-first by design:</strong> Customer data stays isolated per tenant, with retrieval scoped by access controls so no answer can leak across organisations. Prompts and completions are logged but redacted of PII, and no customer data is used to train shared models.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Production LLM Platform Architecture
								</h3>
								
								<div className="flex flex-col gap-3">
									{architectureStages.map((stage, idx) => (
										<motion.div 
											key={idx}
											whileHover={{ x: 10 }}
											transition={{ type: "spring", stiffness: 300, damping: 20 }}
											className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg group relative overflow-hidden"
										>
											<div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: stage.color }} />
											<div className="md:w-1/4">
												<h4 className="font-bold uppercase tracking-wider text-sm text-foreground flex items-center gap-2">
													{idx === 0 && <Database className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 1 && <Workflow className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 2 && <Cpu className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 3 && <Activity className="w-4 h-4" style={{ color: stage.color }} />}
													{stage.title}
												</h4>
											</div>
											<div className="md:w-3/4 flex flex-wrap gap-2">
												{stage.items.map((item, itemIdx) => (
													<span key={itemIdx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-muted-foreground group-hover:text-foreground transition-colors">
														{item}
													</span>
												))}
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Implementation Approach Timeline */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-20">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Roadmap</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Implementation Approach
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							OpenGridLabs embedded a cross-functional team of ML engineers, an LLM evaluation specialist, and a platform architect alongside the client's team.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 opacity-20" />
						
						{phases.map((phase, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.15 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 relative shadow-xl md:w-1/3 flex flex-col justify-between"
							>
								<div 
									className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r"
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(280,100%,65%)" : idx === 1 ? "hsl(180,100%,50%)" : "hsl(330,100%,60%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-400/10 px-3.5 py-1 rounded-full border border-purple-400/20">
											{phase.number}
										</span>
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{phase.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{phase.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Measurable Results Table */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12 text-center lg:text-left">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Proven Value</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Measurable Results
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl">
							Outcomes were measured across a 60-day post-deployment window against pre-engagement baselines, demonstrating massive quality and cost optimization.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-purple-400">After</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{tableResults.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-purple-400 font-bold text-base">{row.after}</td>
											<td className="p-6 text-green-400 font-bold text-base flex items-center gap-1.5">
												<CheckCircle2 className="w-4 h-4 text-green-500" />
												{row.change}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* Pull Quote Block */}
				<section className="w-[90%] max-w-[1200px] mx-auto mt-32 relative z-10 text-center">
					<div className="glass-panel p-12 md:p-20 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-8 left-10 text-purple-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"We thought scaling our LLM meant spending more. OpenGridLabs showed us it meant architecting smarter. We serve better answers, faster, for a fraction of the cost—and for the first time we can actually see where every token goes."
							</p>
							<div className="w-12 h-px bg-purple-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— VP of Engineering</p>
								<p className="text-sm text-muted-foreground">Confidential venture-backed AI Company</p>
							</div>
						</div>
					</div>
				</section>

				{/* Success Factors Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Key Drivers</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Why This Worked: Key Success Factors
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{successFactors.map((factor, idx) => (
							<div 
								key={idx}
								className="glass-panel p-8 md:p-12 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-purple-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-purple-400" />
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{factor.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm md:text-base leading-relaxed">
									{factor.desc}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Accordion FAQ Section */}
				<section className="w-[90%] max-w-[1000px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Learning Center</span>
						<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mt-2">
							Frequently Asked Questions
						</h2>
					</div>

					<div className="space-y-4">
						{faqs.map((faq, idx) => {
							const isOpen = activeFaq === idx;
							return (
								<div 
									key={idx} 
									className="glass-panel rounded-2xl border border-black/5 dark:border-white/5 shadow-md overflow-hidden transition-all duration-300"
								>
									<button 
										onClick={() => toggleFaq(idx)}
										className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.01] transition-colors focus:outline-none"
									>
										<div className="flex gap-3 items-center">
											<HelpCircle className="w-5 h-5 text-purple-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-400' : ''}`} />
									</button>
									
									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div 
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3 }}
												className="overflow-hidden border-t border-white/5"
											>
												<div className="p-6 text-muted-foreground text-sm md:text-base leading-relaxed bg-white/[0.005]">
													{faq.a}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						})}
					</div>
				</section>

				{/* Final Call to Action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div 
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-purple-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-purple-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Ready to take your LLM from prototype to production?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds production-grade LLM platforms—fine-tuning, RAG, model routing, and LLMOps—tuned for accuracy, latency, and cost at scale.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-purple-400 to-cyan-500 hover:shadow-purple-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(168,85,247,0.2)`
									}}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/ai-data"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 border border-white/10 hover:border-white/20 text-foreground"
								>
									More case studies
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

function AIModelFineTuningCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	const stats = [
		{ value: "92%", label: "Lower inference cost vs. the frontier model", accent: "from-cyan-400 to-blue-500" },
		{ value: "On par", label: "Task quality matched the frontier baseline", accent: "from-purple-500 to-fuchsia-400" },
		{ value: "2.8×", label: "Faster responses from the smaller model", accent: "from-pink-500 to-rose-400" },
		{ value: "10 wk", label: "From dataset to a production fine-tuned model", accent: "from-emerald-400 to-teal-500" }
	];

	const challenges = [
		{ text: "Frontier-model API cost per call dominated gross margin at high volume" },
		{ text: "Total dependence on one vendor's pricing, rate limits, and availability" },
		{ text: "Sensitive data leaving their environment on every API request" },
		{ text: "Prompting had hit a quality ceiling—longer prompts only added cost, not accuracy" },
		{ text: "No in-house dataset, training pipeline, or evaluation to build a custom model with confidence" }
	];

	const solutions = [
		{ text: "A curated, deduplicated training dataset built from real task data with quality and bias checks" },
		{ text: "LoRA-based parameter-efficient fine-tuning of a compact open model on the task" },
		{ text: "A rigorous evaluation harness benchmarking the fine-tuned model against the frontier baseline" },
		{ text: "A self-hosted serving setup giving full data control and predictable cost" },
		{ text: "A repeatable retraining pipeline so the model improves as new data arrives" }
	];

	const architectureStages = [
		{ title: "Data", items: ["Task data collection", "Cleaning & deduplication", "Labelling & quality checks", "Train / validation / test splits"], color: "hsl(180,100%,50%)" },
		{ title: "Training", items: ["Base-model selection", "LoRA / PEFT fine-tuning", "Hyperparameter sweeps", "Checkpointing & tracking"], color: "hsl(210,100%,50%)" },
		{ title: "Evaluation", items: ["Golden test sets", "Frontier-baseline benchmark", "Regression & bias checks", "Promote / reject gate"], color: "hsl(280,100%,65%)" },
		{ title: "Serving", items: ["Self-hosted inference", "Adapter versioning", "Cost & latency telemetry", "Continuous retraining loop"], color: "hsl(330,100%,60%)" }
	];

	const phases = [
		{
			number: "Phase 1",
			title: "Dataset Curation & Baseline (Weeks 1–4)",
			desc: "OpenGridLabs assembled a training dataset from the client's real task data, then cleaned, deduplicated, and quality-checked it—correcting mislabels and balancing edge cases. In parallel, the team established the frontier model's performance on a held-out golden test set, setting the exact bar the fine-tuned model would have to clear to justify the switch.",
			accent: "from-cyan-400 to-blue-500"
		},
		{
			number: "Phase 2",
			title: "Fine-Tuning & Evaluation (Weeks 5–8)",
			desc: "Using LoRA for efficient, low-cost training, OpenGridLabs fine-tuned a compact open model, running hyperparameter sweeps and tracking every experiment. Each candidate was benchmarked head-to-head against the frontier baseline on the golden test set, with regression and bias checks—so the decision to adopt the custom model rested on measured quality, not optimism.",
			accent: "from-purple-500 to-fuchsia-400"
		},
		{
			number: "Phase 3",
			title: "Serving & Continuous Retraining (Weeks 9–10)",
			desc: "The winning model was deployed on a self-hosted serving setup with adapter versioning and full cost and latency telemetry. OpenGridLabs built a repeatable retraining loop that folds in new task data over time and re-runs the evaluation gate automatically, and trained the client's engineers to own the pipeline end to end.",
			accent: "from-pink-500 to-rose-400"
		}
	];

	const tableResults = [
		{ metric: "Task accuracy (golden test set)", before: "94%", after: "94%", change: "Matched" },
		{ metric: "Inference cost per call", before: "Baseline", after: "8% of baseline", change: "−92%" },
		{ metric: "Median response latency", before: "Baseline", after: "0.36× baseline", change: "2.8× faster" },
		{ metric: "Vendor dependency", before: "Single vendor", after: "Self-hosted", change: "Removed" },
		{ metric: "Data leaving environment", before: "Every request", after: "None", change: "Data retained" },
		{ metric: "Format / output consistency", before: "Prompt-dependent", after: "Reliably structured", change: "Improved" },
		{ metric: "Retraining on new data", before: "Not applicable", after: "Repeatable pipeline", change: "New capability" }
	];

	const successFactors = [
		{
			title: "Data quality over data quantity",
			desc: "The biggest accuracy gains came from curating a clean, balanced, correctly labelled dataset—not from a bigger training run. Fixing the data is where fine-tuning is won or lost, so that is where the effort went."
		},
		{
			title: "A frontier baseline set the bar",
			desc: "By measuring the existing model's quality first, the team had an exact target. The fine-tuned model wasn't adopted because it was cheaper—it was adopted because it provably matched quality and was cheaper."
		},
		{
			title: "Parameter-efficient by design",
			desc: "LoRA made fine-tuning fast and inexpensive to run and iterate on, turning what could have been a heavy, costly training effort into something the client's own team could repeat affordably."
		},
		{
			title: "Right tool for the task",
			desc: "Fine-tuning suited this narrow, high-volume, stable task perfectly. Part of the value was the honest framing of when to fine-tune versus when prompting or RAG is the better choice—so the client invested where it genuinely paid off."
		}
	];

	const faqs = [
		{
			q: "When should you fine-tune instead of using prompting or RAG?",
			a: "Fine-tuning fits when you need consistent behaviour, tone, or format that prompting can't reliably deliver, when you want a smaller, cheaper model to match a larger one on a narrow task, or when prompts have grown long and costly. Prompting and RAG are better for fast iteration and supplying fresh knowledge. In practice the three combine: RAG for knowledge, prompting for flexibility, fine-tuning for reliable behaviour at lower cost."
		},
		{
			q: "What is LoRA and parameter-efficient fine-tuning (PEFT)?",
			a: "LoRA (Low-Rank Adaptation) trains a small set of additional weights while keeping the original model frozen, making fine-tuning far cheaper and faster than updating every parameter. It needs much less GPU memory and produces small adapter files that are easy to store, swap, and serve—making custom models practical without the cost of full fine-tuning."
		}
	];

	return (
		<>
			<SEO
				title="Model Fine-Tuning Case Study - OpenGridLabs"
				description="How fine-tuning a small model matched frontier quality at a fraction of the cost, slashing per-call inference by 92% and speeding responses 2.8x."
				canonical="/services/ai-data/ai-model-fine-tuning"
				keywords="Model Fine-Tuning, LoRA, PEFT, LLM Fine-Tuning, Open Source Models, Inference Cost, MLOps"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(280,100%,65%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/ai-data" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to AI & Data Intelligence
					</Link>
				</div>

				{/* Main Hero Header */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-start">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							<div className="flex items-center gap-3">
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 backdrop-blur-md">
									Case Study · Artificial Intelligence
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Fine-Tuning a Small Model Matched Frontier Quality at a Fraction of the Cost
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling AI company partnered with OpenGridLabs to escape its dependence on an expensive frontier model—curating training data, fine-tuning a compact open model with LoRA, and proving through rigorous evaluation that it matched frontier quality on their core task at roughly one-twelfth the inference cost.
							</p>
						</motion.div>

						{/* Project Overview Details Panel */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4 w-full"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl space-y-6">
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-cyan-400" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-cyan-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">AI / SaaS (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scale</span>
										<span className="text-base font-semibold text-foreground">6M+ task calls / month</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">10 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Dataset Curation · LoRA · Evaluation · Serving</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Floating Glowing Stats Grid */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-20 relative z-10">
					<div className="grid md:grid-cols-4 gap-6">
						{stats.map((stat, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.08 }}
								whileHover={{ scale: 1.03, y: -5 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-cyan-400 transition-colors">
										{stat.value}
									</p>
									<p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/90 transition-colors">
										{stat.label}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Detailed Background & Definition Block */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-stretch">
						<div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl space-y-6">
							<div className="flex items-center gap-2">
								<BrainCircuit className="w-5 h-5 text-cyan-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-cyan-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client is a venture-backed AI company whose product performs a high-volume, specialised language task—structured extraction and classification—at the core of its workflow. To reach quality fast, they had built the feature on a top-tier frontier model accessed through an API. It worked well, and it got them to market. But the same model that made the product possible was now its biggest constraint.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								At more than six million task calls a month, the per-call API cost dominated their margins, every request left their environment, and they were entirely dependent on a single vendor's pricing, availability, and rate limits. Long, carefully engineered prompts had pushed quality as far as prompting could go, yet costs kept climbing with volume. The task itself was narrow and repetitive—exactly the kind of problem where a smaller, specialised model can match a general-purpose giant. The company needed to know: could fine-tuning a compact model match frontier quality on their task while slashing cost and giving them back control?
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is Model Fine-Tuning?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Fine-tuning continues training a pre-trained model on a curated dataset of task-specific examples, adjusting its behaviour to specialise in tone, format, and domain reasoning. Unlike prompting, which steers a general model at runtime, fine-tuning bakes the desired behaviour into the model itself—often letting a much smaller, cheaper model match a large one on a narrow, well-defined task.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* The Challenge vs Solutions Delivered section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Gap & The Solution</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Strategic Risks Resolved
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							Five issues were turning a frontier-model dependency into a strategic and financial risk.
						</p>
					</div>

					<div className="space-y-6">
						{challenges.map((challenge, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: idx * 0.05 }}
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
							>
								<div className="grid lg:grid-cols-12 gap-8 items-center">
									{/* Challenge Left Column */}
									<div className="lg:col-span-5 flex gap-4 items-start">
										<div className="w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0 flex items-center justify-center text-red-500 font-bold border border-red-500/20">
											{idx + 1}
										</div>
										<div>
											<span className="text-xs uppercase text-red-500 font-bold tracking-widest block mb-1">Challenge</span>
											<p className="text-foreground/90 font-medium text-base md:text-lg">
												{challenge.text}
											</p>
										</div>
									</div>

									{/* Connector arrow */}
									<div className="hidden lg:flex lg:col-span-1 justify-center">
										<ArrowRight className="w-6 h-6 text-cyan-400" />
									</div>

									{/* Solution Right Column */}
									<div className="lg:col-span-6 flex gap-4 items-start border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
										<div className="w-8 h-8 rounded-full bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-500 border border-green-500/20">
											<CheckCircle2 className="w-5 h-5" />
										</div>
										<div>
											<span className="text-xs uppercase text-green-500 font-bold tracking-widest block mb-1">Solution Delivered</span>
											<p className="text-foreground font-semibold text-base md:text-lg">
												{solutions[idx].text}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* System Architecture Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-cyan-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Pipeline</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									System Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-cyan-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs built an end-to-end fine-tuning pipeline that turns raw task data into a deployed, evaluated custom model. Every stage is reproducible and version-controlled, so the client can retrain on demand, compare any model against the frontier baseline, and promote a new version only when it provably wins.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>The dataset is the model:</strong> Fine-tuning quality is decided long before training starts. The largest gains came not from clever hyperparameters but from disciplined data curation—deduplicating, correcting mislabelled examples, balancing edge cases, and screening for bias. A smaller, cleaner dataset consistently beat a larger, noisier one, which is why the bulk of the engagement focused on the data, not the training run.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Fine-Tuning Pipeline Architecture
								</h3>
								
								<div className="flex flex-col gap-3">
									{architectureStages.map((stage, idx) => (
										<motion.div 
											key={idx}
											whileHover={{ x: 10 }}
											transition={{ type: "spring", stiffness: 300, damping: 20 }}
											className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg group relative overflow-hidden"
										>
											<div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: stage.color }} />
											<div className="md:w-1/4">
												<h4 className="font-bold uppercase tracking-wider text-sm text-foreground flex items-center gap-2">
													{idx === 0 && <Database className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 1 && <Lock className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 2 && <Workflow className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 3 && <Cpu className="w-4 h-4" style={{ color: stage.color }} />}
													{stage.title}
												</h4>
											</div>
											<div className="md:w-3/4 flex flex-wrap gap-2">
												{stage.items.map((item, itemIdx) => (
													<span key={itemIdx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-muted-foreground group-hover:text-foreground transition-colors">
														{item}
													</span>
												))}
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Implementation Approach Timeline */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-20">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Roadmap</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Implementation Approach
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							The engagement ran across three structured phases designed to de-risk the build-your-own-model decision with evidence at every step.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20" />
						
						{phases.map((phase, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.15 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 relative shadow-xl md:w-1/3 flex flex-col justify-between"
							>
								<div 
									className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r"
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(180,100%,50%)" : idx === 1 ? "hsl(280,100%,65%)" : "hsl(330,100%,60%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1 rounded-full border border-cyan-400/20">
											{phase.number}
										</span>
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{phase.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{phase.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Measurable Results Table */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12 text-center lg:text-left">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Proven Value</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Measurable Results
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl">
							Outcomes were measured across a 60-day post-deployment window against the frontier-model baseline, using the same golden test set throughout.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Frontier baseline</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400">Fine-tuned model</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{tableResults.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-cyan-400 font-bold text-base">{row.after}</td>
											<td className="p-6 text-green-400 font-bold text-base flex items-center gap-1.5">
												<CheckCircle2 className="w-4 h-4 text-green-500" />
												{row.change}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* Pull Quote Block */}
				<section className="w-[90%] max-w-[1200px] mx-auto mt-32 relative z-10 text-center">
					<div className="glass-panel p-12 md:p-20 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div className="absolute top-8 left-10 text-cyan-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"We assumed matching the frontier model meant paying frontier prices forever. Fine-tuning proved otherwise—same quality on our task, a fraction of the cost, faster responses, and our data never leaves our walls. It changed our whole cost structure."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— VP of Engineering</p>
								<p className="text-sm text-muted-foreground">Confidential venture-backed AI Company</p>
							</div>
						</div>
					</div>
				</section>

				{/* Success Factors Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Key Drivers</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Why This Worked: Key Success Factors
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{successFactors.map((factor, idx) => (
							<div 
								key={idx}
								className="glass-panel p-8 md:p-12 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-cyan-400" />
									<h3 className="text-xl md:text-2xl font-bold text-foreground">
										{factor.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm md:text-base leading-relaxed">
									{factor.desc}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Accordion FAQ Section */}
				<section className="w-[90%] max-w-[1000px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Learning Center</span>
						<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mt-2">
							Frequently Asked Questions
						</h2>
					</div>

					<div className="space-y-4">
						{faqs.map((faq, idx) => {
							const isOpen = activeFaq === idx;
							return (
								<div 
									key={idx} 
									className="glass-panel rounded-2xl border border-black/5 dark:border-white/5 shadow-md overflow-hidden transition-all duration-300"
								>
									<button 
										onClick={() => toggleFaq(idx)}
										className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.01] transition-colors focus:outline-none"
									>
										<div className="flex gap-3 items-center">
											<HelpCircle className="w-5 h-5 text-cyan-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
									</button>
									
									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div 
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3 }}
												className="overflow-hidden border-t border-white/5"
											>
												<div className="p-6 text-muted-foreground text-sm md:text-base leading-relaxed bg-white/[0.005]">
													{faq.a}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						})}
					</div>
				</section>

				{/* Final Call to Action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div 
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-cyan-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-cyan-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Ready to fine-tune a model that fits your task and your budget?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds end-to-end fine-tuning pipelines—dataset curation, LoRA training, rigorous evaluation, and serving—so a custom model matches frontier quality at a fraction of the cost.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-cyan-400 to-purple-500 hover:shadow-cyan-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(34,211,238,0.2)`
									}}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/ai-data"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 border border-white/10 hover:border-white/20 text-foreground"
								>
									More case studies
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default function ServicesAIDataDetail() {
	const { serviceId } = useParams<{ serviceId: string }>();

	if (serviceId === "ai-integration-services") {
		return <AIIntegrationServicesCaseStudy />;
	}

	if (serviceId === "large-language-models") {
		return <LargeLanguageModelsCaseStudy />;
	}

	if (serviceId === "ai-model-fine-tuning") {
		return <AIModelFineTuningCaseStudy />;
	}

	// Recreate all lists to perform reverse-lookup or slug match
	const aiServices = [
		"Agentic AI", "Large Language Models", "Voice to Text Converter", "AI Strategy Consulting",
		"Explainable AI", "AI Ethics & Governance", "Prompt Engineering", "AI Model Fine-tuning",
		"RAG Implementation", "AI Integration Services", "Custom AI Solutions", "AI Performance Monitoring"
	];
	const mlServices = [
		"Predictive Modeling", "Classification Systems", "Regression Analysis", "Clustering Algorithms",
		"Recommendation Engines", "Anomaly Detection", "Time Series Forecasting", "Feature Engineering",
		"Model Optimization", "A/B Testing ML", "AutoML Solutions", "MLOps Pipeline"
	];
	const dlServices = [
		"Neural Networks", "Computer Vision", "Image Recognition", "Object Detection",
		"Face Recognition", "OCR Solutions", "Video Analytics", "Generative AI",
		"Style Transfer", "CNN Models", "RNN/LSTM", "Transfer Learning"
	];
	const nlpServices = [
		"Text Analytics", "Sentiment Analysis", "Chatbots & Virtual Assistants", "Language Translation",
		"Named Entity Recognition", "Topic Modeling", "Text Summarization", "Question Answering",
		"Intent Recognition", "Content Generation", "Speech Recognition", "Voice Synthesis"
	];

	const allServices = [...aiServices, ...mlServices, ...dlServices, ...nlpServices];

	// Find the matching service by slug
	const matchedTitle = allServices.find(s => slugify(s) === serviceId);

	if (!serviceId || !matchedTitle) {
		return <Navigate to="/services/ai-data" replace />;
	}

	const service = generateServiceDetail(serviceId, matchedTitle);

	return (
		<>
			<SEO
				title={`${service.title} - AI & Data Services | OpenGridLabs`}
				description={service.description}
				canonical={`/services/ai-data/${serviceId}`}
				keywords={`${service.title}, ${service.category}, AI solutions, data intelligence, machine learning, opengridlabs`}
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[600px] blur-[160px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, ${service.highlight} 0%, transparent 70%)`
					}}
				/>

				{/* Back Button & Breadcrumbs */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/ai-data" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to AI & Data Intelligence
					</Link>
				</div>

				{/* Main Hero Header */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-center">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							{/* Category Tag */}
							<div className="flex items-center gap-3">
								<span 
									className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border bg-opacity-10 backdrop-blur-md"
									style={{ 
										borderColor: `${service.highlight}30`, 
										backgroundColor: `${service.highlight}10`,
										color: service.highlight 
									}}
								>
									{service.category}
								</span>
							</div>

							{/* Large Service Title */}
							<h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								{service.title}
							</h1>

							{/* Core Tagline */}
							<p className="text-xl md:text-3xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								{service.description}
							</p>
						</motion.div>

						{/* Interactive Technology Card */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl">
								<div 
									className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full" 
									style={{ backgroundColor: service.highlight }}
								/>
								<div className="flex items-center gap-3 mb-6">
									<Terminal className="w-6 h-6" style={{ color: service.highlight }} />
									<h3 className="text-lg font-bold text-foreground">Technology Stack</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{service.technologies.map((tech, idx) => (
										<span 
											key={idx} 
											className="px-3.5 py-1.5 rounded-xl text-sm font-medium border border-black/5 dark:border-white/5 bg-foreground/[0.02] dark:bg-white/5 text-foreground/80"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* In-depth Overview Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div 
							className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" 
							style={{ backgroundImage: `linear-gradient(to right, transparent, ${service.highlight}40, transparent)` }}
						/>
						<div className="grid lg:grid-cols-12 gap-12">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<BrainCircuit className="w-5 h-5 text-muted-foreground" />
									<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Deep Dive</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
									Service Overview
								</h2>
								<div 
									className="w-16 h-1 rounded-full" 
									style={{ backgroundColor: service.highlight }}
								/>
							</div>
							<div className="lg:col-span-7">
								<p className="text-lg md:text-2xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
									{service.overview}
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Detailed Features & Capabilities */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">System Capabilities</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Core Features
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						{service.features.map((feature, idx) => {
							const [titlePart, descPart] = feature.split(": ");
							return (
								<motion.div 
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: idx * 0.05 }}
									className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-colors shadow-lg group relative overflow-hidden"
								>
									<div className="flex gap-4 items-start">
										<div className="mt-1">
											<CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: service.highlight }} />
										</div>
										<div className="space-y-2">
											<h3 className="text-xl font-bold text-foreground">
												{titlePart}
											</h3>
											{descPart && (
												<p className="text-muted-foreground leading-relaxed">
													{descPart}
												</p>
											)}
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</section>

				{/* Custom Real-world Use Cases */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Applied AI</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Enterprise Use Cases
						</h2>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						{service.useCases.map((useCase, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, scale: 0.98 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="glass-panel p-10 rounded-[36px] border border-black/5 dark:border-white/5 flex flex-col justify-between h-[360px] relative overflow-hidden group shadow-xl"
							>
								<div 
									className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
									style={{ backgroundColor: service.highlight }}
								/>
								
								<div className="space-y-4">
									<span 
										className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-black/10 dark:border-white/10 bg-foreground/[0.01] text-muted-foreground"
									>
										{useCase.industry}
									</span>
									<h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
										{useCase.title}
									</h3>
								</div>

								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									{useCase.desc}
								</p>
							</motion.div>
						))}
					</div>
				</section>

				{/* Results & Business Impact Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Strategic Value</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Target Impact Metrics
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{service.results.map((result, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 text-left relative overflow-hidden shadow-lg"
							>
								<div 
									className="absolute -top-6 -right-6 w-16 h-16 rounded-full opacity-10"
									style={{ backgroundColor: service.highlight }}
								/>
								<div className="space-y-4 relative z-10">
									<span className="text-xs uppercase text-muted-foreground font-bold tracking-wider">
										{result.metric}
									</span>
									<p 
										className="text-4xl md:text-5xl font-black tracking-tight"
										style={{ color: service.highlight }}
									>
										{result.value}
									</p>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{result.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Contact Call to Action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div 
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none"
							style={{ backgroundColor: service.highlight }}
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto" style={{ color: service.highlight }} />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Ready to deploy this capability?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								Partner with our AI and software engineering experts to custom design, validate, and integrate {service.title} inside your enterprise software platform.
							</p>
							<div>
								<Link 
									to="/contact-us"
									className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white"
									style={{ 
										background: `linear-gradient(135deg, ${service.highlight} 0%, hsl(280, 100%, 60%) 100%)`,
										boxShadow: `0 10px 30px ${service.highlight}30`
									}}
								>
									Get in Touch <ArrowRight className="w-5 h-5" />
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
