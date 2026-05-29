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

function VoiceToTextConverterCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	const stats = [
		{ value: "96%", label: "Transcription accuracy on domain audio", accent: "from-cyan-400 to-blue-500" },
		{ value: "<300ms", label: "Streaming partial-result latency", accent: "from-purple-500 to-fuchsia-400" },
		{ value: "58%", label: "Lower transcription cost per audio hour", accent: "from-pink-500 to-rose-400" },
		{ value: "11 wk", label: "From prototype to full production deployment", accent: "from-emerald-400 to-teal-500" }
	];

	const challenges = [
		{ text: "Word error rate climbed sharply on noisy, multi-speaker, and accented audio—exactly the recordings customers cared about most" },
		{ text: "Industry-specific terms, product names, and acronyms were consistently mis-transcribed by the generic engine" },
		{ text: "No speaker labelling, so transcripts read as one undifferentiated block of text" },
		{ text: "Live-caption latency felt sluggish, breaking the real-time experience users expected" },
		{ text: "Flat per-hour API pricing made unit economics worse with every new customer" }
	];

	const solutions = [
		{ text: "Noise-robust preprocessing and voice-activity detection to handle messy real-world audio" },
		{ text: "Domain adaptation with custom vocabulary and phrase biasing for the client's jargon, names, and acronyms" },
		{ text: "Speaker diarization that attributes each segment to the correct speaker with consistent labels" },
		{ text: "A streaming ASR pipeline returning stable partial results in under 300ms for true real-time captions" },
		{ text: "A hybrid streaming-plus-batch architecture that routed each job to the most cost-efficient path" }
	];

	const architectureStages = [
		{ title: "Audio Capture", items: ["Live mic & file streams", "Resampling", "Noise suppression", "Voice-activity detection", "Segmentation"], color: "hsl(180,100%,50%)" },
		{ title: "Orchestration", items: ["Streaming vs. batch router", "Language detection", "Custom vocabulary & phrase biasing", "Throttling & queueing"], color: "hsl(210,100%,50%)" },
		{ title: "Speech Models", items: ["Acoustic model", "Language model", "Domain-adapted fine-tune", "Speaker diarization", "Confidence scoring"], color: "hsl(280,100%,65%)" },
		{ title: "Post & Ops", items: ["Punctuation & formatting", "Speaker labelling", "Profanity & PII redaction", "WER telemetry", "Cost & latency monitoring"], color: "hsl(330,100%,60%)" }
	];

	const phases = [
		{
			number: "Phase 1",
			title: "Audio Benchmark & Preprocessing (Weeks 1–3)",
			desc: "Before changing any model, OpenGridLabs assembled a representative benchmark set of real customer audio—noisy, accented, multi-speaker—and measured word error rate against human-verified transcripts. This made quality objectively measurable. In parallel, the team built the preprocessing front end: noise suppression, resampling, and voice-activity detection to clean audio before it reached any model.",
			accent: "from-cyan-400 to-blue-500"
		},
		{
			number: "Phase 2",
			title: "Domain Adaptation & Diarization (Weeks 4–8)",
			desc: "Using labelled audio, OpenGridLabs adapted the acoustic and language models to the client's domain and added custom vocabulary and phrase biasing for product names, acronyms, and jargon. Speaker diarization was integrated so each segment was attributed correctly. Every change was validated against the benchmark set, with word error rate tracked release over release until it consistently passed target on hard audio.",
			accent: "from-purple-500 to-fuchsia-400"
		},
		{
			number: "Phase 3",
			title: "Streaming, Cost Routing & Hardening (Weeks 9–11)",
			desc: "The streaming pipeline was tuned to emit stable partial results under 300ms, and a router was introduced to send live sessions through the low-latency path while batch jobs took the cheaper, higher-accuracy path. A full observability dashboard exposed word error rate, latency percentiles, and per-customer cost. Punctuation, formatting, and PII-redaction guardrails were finalised, and the client's engineers were trained to run the benchmark harness themselves.",
			accent: "from-pink-500 to-rose-400"
		}
	];

	const tableResults = [
		{ metric: "Transcription accuracy (domain audio)", before: "82%", after: "96%", change: "+14 pts" },
		{ metric: "Word error rate (noisy / multi-speaker)", before: "23%", after: "6%", change: "−74%" },
		{ metric: "Streaming partial-result latency", before: "~1.4 s", after: "<300 ms", change: "−79%" },
		{ metric: "Speaker attribution accuracy", before: "None", after: "93%", change: "New capability" },
		{ metric: "Custom-term recognition", before: "47%", after: "92%", change: "+96%" },
		{ metric: "Transcription cost per audio hour", before: "Baseline", after: "42% of baseline", change: "−58%" },
		{ metric: "Manual transcript correction time", before: "—", after: "−81%", change: "81% less rework" }
	];

	const successFactors = [
		{
			title: "Benchmark before tuning",
			desc: "By measuring word error rate on real, difficult customer audio in week one, every subsequent change could be judged on evidence. Accuracy stopped being a matter of opinion and became a tracked metric."
		},
		{
			title: "Adapt to the domain, not the demo",
			desc: "The single biggest accuracy gain came from teaching the models the client's actual vocabulary and audio conditions—custom terms, accents, and noise—rather than relying on a generic engine tuned for clean, average speech."
		},
		{
			title: "Latency and accuracy are separate problems",
			desc: "Splitting traffic into a low-latency streaming path and a cheaper high-accuracy batch path let OpenGridLabs optimise each for what it actually needed, instead of compromising on both."
		},
		{
			title: "Observability as a first-class feature",
			desc: "Tracking word error rate, latency, and per-customer cost in production meant the client could catch regressions early, price confidently, and keep improving the engine long after the engagement ended."
		}
	];

	const faqs = [
		{
			q: "What is the difference between streaming and batch speech-to-text?",
			a: "Streaming speech-to-text transcribes audio in real time as someone speaks, returning partial results within milliseconds—ideal for live captions, voice assistants, and call centres. Batch transcription processes a complete recording afterward, trading latency for slightly higher accuracy and lower cost, which suits meetings, podcasts, and archives."
		},
		{
			q: "How can voice-to-text accuracy be improved for a specific domain?",
			a: "Accuracy improves through domain adaptation: fine-tuning the acoustic and language models on representative audio, adding custom vocabulary and phrase biasing for product names and jargon, applying noise-robust preprocessing, and using speaker diarization to attribute words correctly. Together these sharply reduce word error rate on specialised audio."
		}
	];

	return (
		<>
			<SEO
				title="Real-Time Voice-to-Text Case Study | OpenGridLabs"
				description="How OpenGridLabs' custom speech platform achieved 96% transcription accuracy and under 300ms latency for a high-growth AI SaaS company."
				canonical="/services/ai-data/voice-to-text-converter"
				keywords="Streaming ASR, speech-to-text, speaker diarization, domain adaptation, word error rate, speech AI, low latency transcription"
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
								How Real-Time Voice-to-Text Reached 96% Accuracy for a High-Growth AI Company
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling AI product company partnered with OpenGridLabs to turn an unreliable transcription feature into a production-grade speech engine—combining streaming speech recognition, speaker diarization, and domain adaptation.
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
										<span className="text-base font-semibold text-foreground">120K+ audio hours / month</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">11 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Streaming ASR · Diarization · Domain Adaptation · MLOps</span>
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
								Our client is a venture-backed AI company whose product captures spoken conversations—meetings, support calls, and field interviews—and turns them into searchable, structured text. Voice-to-text sat at the very core of the experience: if the transcript was wrong, every downstream feature built on top of it was wrong too. An early version stitched together a generic off-the-shelf speech API, and for clean, single-speaker audio it worked well enough to win their first customers.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Then real-world usage arrived. Overlapping speakers, background noise, industry jargon, accents, and long recordings exposed the limits of a one-size-fits-all engine. Accuracy on the audio that mattered most hovered in the low 80s, latency made live captions feel laggy, and per-hour API costs ballooned as volume crossed 120,000 audio hours per month. The team didn't need another generic transcriber. They needed a fast, accurate, observable, and cost-efficient voice-to-text platform built for their domain.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									How Does Modern Voice-to-Text Work?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									A production speech-to-text system captures audio, cleans and segments it, and passes it through an acoustic model that maps sound to phonemes and a language model that turns those into fluent text. Streaming systems return partial results in milliseconds, speaker diarization labels who said what, and domain adaptation tunes the models to a customer's specific vocabulary and audio conditions.
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
							Five Speech Integration Bottlenecks Overcome
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built a custom domain-adapted transcription engine to resolve accuracy and latency.
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
									OpenGridLabs designed a layered speech platform that sits between the client's application and the underlying speech models. The architecture is engine-agnostic—self-hosted and third-party models can be mixed or swapped without application changes.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Privacy-first by design:</strong> Audio and transcripts are isolated per tenant and encrypted in transit and at rest. Optional on-the-fly PII redaction removes sensitive details from transcripts, recordings are retained only for the period a customer configures, and no customer audio is used to train shared models without explicit opt-in.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Voice-to-Text Platform Architecture
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
													{idx === 3 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
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
							The engagement ran across three structured phases designed to ship measurable accuracy gains early while building toward a durable platform. OpenGridLabs embedded a cross-functional team of speech-ML engineers, an evaluation specialist, and a platform architect alongside the client's product team.
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
							Outcomes were measured across a 60-day post-deployment window against pre-engagement baselines, using the same benchmark audio set throughout.
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
								"Our transcripts went from 'mostly right' to something customers actually trust without checking. The captions feel instant, the speaker labels just work, and we're paying far less per hour than we were with the generic API we started on."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— VP of Product</p>
								<p className="text-sm text-muted-foreground">Confidential AI Company</p>
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
								Ready to build voice-to-text your users can trust?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds production-grade speech platforms—streaming ASR, diarization, domain adaptation, and MLOps—tuned for accuracy, latency, and cost at scale.
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

function CustomAISolutionsCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	const stats = [
		{ value: "4,200", label: "Expert hours saved per year", accent: "from-cyan-400 to-blue-500" },
		{ value: "97%", label: "Accuracy on the specialised task", accent: "from-purple-500 to-fuchsia-400" },
		{ value: "Days→min", label: "Turnaround per case, start to finish", accent: "from-pink-500 to-rose-400" },
		{ value: "16 wk", label: "From discovery to production system", accent: "from-emerald-400 to-teal-500" }
	];

	const challenges = [
		{ text: "A high-value process bottlenecked on a handful of senior experts, impossible to scale" },
		{ text: "Off-the-shelf AI tools got the hard, high-stakes cases wrong—confidently" },
		{ text: "Inputs were unusual: domain-specific documents and images no generic model understood" },
		{ text: "Decisions depended on subtle expert judgement plus rigid domain rules and precedent" },
		{ text: "The knowledge existed only in experts' heads, with no labelled data to learn from" }
	];

	const solutions = [
		{ text: "An end-to-end system orchestrating all three into a single decision, with human review" },
		{ text: "A fine-tuned model specialised on the client's documents and decision patterns" },
		{ text: "A custom computer-vision component to interpret the domain-specific images" },
		{ text: "A domain-rules engine encoding the non-negotiable logic and precedent experts apply" },
		{ text: "A discovery phase that captured expert knowledge and turned it into labelled training data" }
	];

	const architectureStages = [
		{ title: "Inputs", items: ["Domain documents", "Specialised images", "Historical case data", "Reference rules & precedent"], color: "hsl(180,100%,50%)" },
		{ title: "Perception", items: ["Custom computer vision", "Document understanding", "Feature extraction", "Data structuring"], color: "hsl(210,100%,50%)" },
		{ title: "Reasoning", items: ["Fine-tuned domain model", "Rules & precedent engine", "Confidence scoring", "Conflict resolution"], color: "hsl(280,100%,65%)" },
		{ title: "Decision", items: ["Explainable recommendation", "Human-in-the-loop review", "System integration", "Monitoring & feedback loop"], color: "hsl(330,100%,60%)" }
	];

	const phases = [
		{
			number: "Phase 1",
			title: "Discovery & Feasibility (Weeks 1–5)",
			desc: "Because no labelled data existed, OpenGridLabs worked closely with the client's experts to capture how they actually made decisions, building an initial labelled dataset and the success criteria the system would be measured against. A focused feasibility prototype tested the hardest part of the problem early—proving the approach could work before either side committed to the full build.",
			accent: "from-cyan-400 to-blue-500"
		},
		{
			number: "Phase 2",
			title: "Bespoke Build & Evaluation (Weeks 6–13)",
			desc: "OpenGridLabs built each component—the custom vision model, the fine-tuned decision model, and the rules engine—and orchestrated them into one pipeline. Development was tightly iterative: every version was evaluated against expert-labelled cases, with the client's experts reviewing outputs and refining edge cases, so the system learned the judgement that had lived only in their heads.",
			accent: "from-purple-500 to-fuchsia-400"
		},
		{
			number: "Phase 3",
			title: "Integration, Human Review & Handover (Weeks 14–16)",
			desc: "The solution was integrated into the client's existing workflow with a human-in-the-loop review step, so experts approve decisions rather than make them from scratch—keeping accountability while removing the bottleneck. Monitoring and a feedback loop were added so the system keeps improving, and OpenGridLabs handed over full ownership, documentation, and training so the client controls their bespoke system and its data.",
			accent: "from-pink-500 to-rose-400"
		}
	];

	const tableResults = [
		{ metric: "Decision accuracy on the task", before: "Expert baseline", after: "97% (expert-matched)", change: "Matched" },
		{ metric: "Turnaround per case", before: "Days", after: "Minutes", change: "Drastically faster" },
		{ metric: "Expert hours per year on the task", before: "Baseline", after: "−4,200 hours", change: "Capacity freed" },
		{ metric: "Process throughput", before: "Expert-capped", after: "Scales on demand", change: "Unblocked" },
		{ metric: "Off-the-shelf tool fit", before: "Failed hard cases", after: "Purpose-built", change: "Solved" },
		{ metric: "Knowledge retention", before: "In experts' heads", after: "Captured in system", change: "De-risked" },
		{ metric: "System & data ownership", before: "—", after: "Fully client-owned", change: "Owned outright" }
	];

	const successFactors = [
		{
			title: "Discovery before building",
			desc: "The hardest part was capturing expert judgement that had never been written down. Investing weeks in discovery and a feasibility prototype de-risked the whole engagement—proving the problem was solvable before committing to a full build."
		},
		{
			title: "The right technique per sub-problem",
			desc: "Vision for images, a fine-tuned model for nuanced judgement, and a deterministic rules engine for non-negotiable logic—each chosen because it fit that part of the problem, then engineered to work together. That combination is precisely what no single product offers."
		},
		{
			title: "Experts in the loop, by design",
			desc: "Keeping human review meant the system removed the bottleneck without removing accountability—earning the experts' trust and capturing their corrections as a feedback loop that kept improving accuracy."
		},
		{
			title: "The client owns the result",
			desc: "Handover of the system, data, and know-how turned a one-off project into a durable asset—the client's competitive edge is now encoded in software they control, not rented from a vendor or locked in employees' heads."
		}
	];

	const faqs = [
		{
			q: "When do you need a custom AI solution instead of an off-the-shelf tool?",
			a: "A custom solution makes sense when your problem is specific to your domain, data, or workflow and no off-the-shelf product fits well. Signs include generic tools getting the cases that matter wrong, processes that depend on proprietary data or expert judgement, a need to combine several AI techniques, or a requirement to own the system and its data. Off-the-shelf tools win on common tasks; custom solutions win where the problem is your competitive edge."
		},
		{
			q: "How is a custom AI solution built end to end?",
			a: "It moves through discovery (understanding the problem, data, and success criteria), design (choose and combine the right techniques), iterative development with continuous evaluation against real data, and integration into existing systems and workflows. It is then deployed with monitoring and a path for ongoing improvement, with the client retaining ownership of the system and its data."
		}
	];

	return (
		<>
			<SEO
				title="Bespoke End-to-End AI Solutions | OpenGridLabs"
				description="How OpenGridLabs designed and built a bespoke AI solution combining computer vision, fine-tuning, and domain rules to save 4,200 expert hours annually."
				canonical="/services/ai-data/custom-ai-solutions"
				keywords="Bespoke AI development, Custom machine learning, Computer vision, Domain specific AI, Fine-tuning, Human-in-the-loop"
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
								How a Custom AI Solution Cracked a Problem No Off-the-Shelf Tool Could
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A company in a specialised domain had a costly, expert-dependent process that every generic AI tool got wrong. OpenGridLabs ran discovery, then designed and built a bespoke end-to-end solution—combining computer vision, a fine-tuned model, and hard-coded domain rules—that automated the work and saved an estimated 4,200 expert hours a year.
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
										<span className="text-base font-semibold text-foreground">Specialised Industry (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Type</span>
										<span className="text-base font-semibold text-foreground">Bespoke end-to-end build</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">16 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Computer Vision · Fine-tuning · Domain Logic</span>
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
								Our client operates in a specialised industry where a core, recurring process depended entirely on a small team of senior experts. Each case meant reviewing technical documents and images, applying years of hard-won domain judgement, cross-checking against rules and historical precedent, and producing a decision. It was accurate, but slow, expensive, and impossible to scale—and the expertise lived in just a few people's heads.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								They had tried the obvious route first: off-the-shelf AI tools and generic platforms. None fit. The documents were unusual, the images domain-specific, the judgement subtle, and the rules nowhere in any model's training data. Generic tools got the easy cases right and the cases that mattered wrong—worse than useless, because a confident wrong answer in their field carries real cost. The problem wasn't that AI couldn't help; it was that no product built for the general case could solve their specific one. They needed a custom AI solution designed around their problem, their data, and their experts' knowledge.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									When Do You Need a Custom AI Solution?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									A custom solution is the right call when your problem is specific to your domain, data, or workflow and no off-the-shelf product fits. Tell-tale signs: generic tools get the cases that matter wrong, the process depends on proprietary data or expert judgement, several AI techniques must work together, or you need to own the system and its data. Off-the-shelf wins on common tasks; custom wins where the problem is your competitive edge.
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
							Five Custom AI Integration Challenges Solved
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built a bespoke multi-technique orchestration pipeline to resolve specialist bottlenecks.
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
									No single technique could solve this problem—the breakthrough was combining several into one purpose-built system. OpenGridLabs designed an architecture where computer vision, a fine-tuned language model, and a deterministic rules engine each handle the part they do best, then converge into a single, explainable decision that an expert can review and approve.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>The right tools, combined—not one model to rule them all:</strong> The value of a custom solution was choosing the right technique for each sub-problem and making them work together: vision for the images, a fine-tuned model for nuanced judgement, and a deterministic rules engine for the non-negotiable logic that must never be "mostly right". Engineering the combination around the client's real problem is what off-the-shelf tools fundamentally cannot do.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Custom AI Solution Architecture
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
													{idx === 3 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
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
							The engagement ran across three phases over sixteen weeks, structured to reduce the biggest risk first—whether the problem was solvable at all—before committing to a full build. OpenGridLabs embedded a multidisciplinary team alongside the client's experts.
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
							Outcomes were measured across a 60-day post-deployment window against the prior expert-only process, using expert-labelled cases as the benchmark.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before (expert-only)</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400">After (custom AI)</th>
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
								"Every tool we tried was built for someone else's problem and broke on ours. OpenGridLabs built for our problem. The system does in minutes what took our experts days, gets the hard cases right, and the knowledge that used to walk out the door each evening now lives in something we own."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Chief Operating Officer</p>
								<p className="text-sm text-muted-foreground">Confidential specialised-industry company</p>
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
								Have a problem off-the-shelf AI can't solve?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs designs and builds custom, end-to-end AI solutions—around your problem, your data, and your domain—and hands you a system you own outright.
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

function AIPerformanceMonitoringCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	const stats = [
		{ value: "76%", label: "Faster incident detection & resolution", accent: "from-cyan-400 to-blue-500" },
		{ value: "Wks→hrs", label: "Time to notice model degradation", accent: "from-purple-500 to-fuchsia-400" },
		{ value: "100%", label: "Production models under live monitoring", accent: "from-pink-500 to-rose-400" },
		{ value: "8 wk", label: "From blind spots to full observability", accent: "from-emerald-400 to-teal-500" }
	];

	const challenges = [
		{ text: "Model accuracy could degrade silently for weeks with no alert—discovered only via complaints" },
		{ text: "Standard monitoring tracked uptime and errors but nothing about prediction quality" },
		{ text: "No detection of data drift or concept drift as real-world inputs shifted" },
		{ text: "No per-model visibility into latency, token cost, or output quality trends" },
		{ text: "Incidents took days to diagnose with no historical metrics to trace what changed" }
	];

	const solutions = [
		{ text: "Live accuracy and quality tracking using ground-truth feedback and proxy signals" },
		{ text: "Continuous drift detection on inputs and predictions, alerting before accuracy visibly drops" },
		{ text: "Smart alerting with thresholds and anomaly detection routed to the right team" },
		{ text: "Per-model dashboards for latency, throughput, token cost, and error rates" },
		{ text: "Historical metrics and traces so any incident can be diagnosed and explained quickly" }
	];

	const architectureStages = [
		{ title: "Instrument", items: ["Prediction logging", "Input & output capture", "Latency & cost telemetry", "Ground-truth & feedback collection"], color: "hsl(180,100%,50%)" },
		{ title: "Metrics & Drift", items: ["Accuracy & quality metrics", "Data & concept drift detection", "Distribution tracking", "Cost & latency aggregation"], color: "hsl(210,100%,50%)" },
		{ title: "Alerting", items: ["Threshold & anomaly detection", "Smart routing", "Severity & deduplication", "Retrain / rollback triggers"], color: "hsl(280,100%,65%)" },
		{ title: "Dashboards", items: ["Per-model dashboards", "Historical trends & traces", "Incident timelines", "Reports & SLAs"], color: "hsl(330,100%,60%)" }
	];

	const phases = [
		{
			number: "Phase 1",
			title: "Instrumentation & Baselines (Weeks 1–3)",
			desc: "OpenGridLabs instrumented production models to log inputs, outputs, latency, and cost, and set up ground-truth and feedback collection where available. The team established performance baselines for each model, so 'normal' was defined precisely and any deviation could be detected against it.",
			accent: "from-cyan-400 to-blue-500"
		},
		{
			number: "Phase 2",
			title: "Drift Detection & Alerting (Weeks 4–6)",
			desc: "Data and concept drift detection were added on inputs and predictions, alongside live accuracy and quality metrics. OpenGridLabs configured smart alerting—thresholds plus anomaly detection, with severity and deduplication—routed to the right team, so a drifting model now raises a timely, actionable alert instead of a silent decline.",
			accent: "from-purple-500 to-fuchsia-400"
		},
		{
			number: "Phase 3",
			title: "Dashboards, Response & Enablement (Weeks 7–8)",
			desc: "Per-model dashboards with historical trends and incident timelines were finalised, giving the team one place to see model health and trace what changed. Retrain and rollback triggers were wired to the alerts, and OpenGridLabs trained the client's engineers to extend monitoring to new models themselves—making observability a default part of every deployment.",
			accent: "from-pink-500 to-rose-400"
		}
	];

	const tableResults = [
		{ metric: "Time to detect model degradation", before: "Weeks", after: "Hours", change: "Drastically faster" },
		{ metric: "Incident detection & resolution time", before: "Baseline", after: "24% of baseline", change: "−76%" },
		{ metric: "Production models monitored", before: "Minimal", after: "100%", change: "Full coverage" },
		{ metric: "Drift detection", before: "None", after: "Continuous & alerted", change: "New capability" },
		{ metric: "Degradations found by customers", before: "Common", after: "Rare", change: "Caught earlier" },
		{ metric: "Per-model cost & latency visibility", before: "None", after: "Live dashboards", change: "New capability" },
		{ metric: "Incident root-cause analysis", before: "Days, guesswork", after: "Historical traces", change: "Explainable" }
	];

	const successFactors = [
		{
			title: "Monitor the model, not just the machine",
			desc: "Treating accuracy, drift, and output quality as first-class signals—on par with uptime—was the core shift. It closed the exact blind spot that let a model decay silently for weeks."
		},
		{
			title: "Baselines make deviation meaningful",
			desc: "Defining precisely what 'normal' looked like for each model meant alerts fired on real deviations, not noise—so the team learned to trust and act on them rather than tune them out."
		},
		{
			title: "Catch drift before accuracy drops",
			desc: "Watching input and prediction distributions surfaced trouble earlier than waiting for accuracy to visibly fall—turning many would-be incidents into routine, pre-emptive retrains."
		},
		{
			title: "From alert to action",
			desc: "Wiring alerts to retrain and rollback paths, with historical traces for root cause, meant detection led straight to a fast, confident response—shrinking resolution time instead of just raising the alarm sooner."
		}
	];

	const faqs = [
		{
			q: "What is AI performance monitoring?",
			a: "AI performance monitoring continuously tracks how machine learning models behave in production—their accuracy, latency, cost, inputs, and outputs. Unlike traditional software monitoring, it watches for model-specific problems like data drift, concept drift, and silent accuracy degradation, alerting teams before these issues reach users so models can be retrained or rolled back in time."
		},
		{
			q: "What is model drift and why does it matter?",
			a: "Model drift is the gradual decline in a model's performance after deployment as the world changes. Data drift happens when incoming data differs from training data; concept drift happens when the relationship the model learned no longer holds. It matters because a model can keep running without errors while quietly making worse predictions—so without monitoring, the damage is often found only after it has affected users or revenue."
		}
	];

	return (
		<>
			<SEO
				title="AI Performance Monitoring & ML Observability | OpenGridLabs"
				description="How OpenGridLabs designed and built a production AI performance monitoring platform to catch silent model drift and cut incident resolution times by 76%."
				canonical="/services/ai-data/ai-performance-monitoring"
				keywords="AI performance monitoring, ML observability, model drift detection, concept drift, data drift, LLMOps, MLOps"
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
								How AI Performance Monitoring Caught Silent Model Drift Before It Reached Users
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling company was flying blind once its models hit production—accuracy could quietly decay for weeks before anyone noticed. OpenGridLabs built an AI performance monitoring and observability platform that tracks drift, accuracy, latency, and cost in real time, turning silent degradation into early alerts and cutting incident resolution time by 76%.
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
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scope</span>
										<span className="text-base font-semibold text-foreground">50+ models in production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">8 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Drift Detection · Metrics · Alerting · Dashboards</span>
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
								Our client is a venture-backed AI company running more than fifty models in production across its product. The team was strong at building and shipping models—but once a model went live, visibility largely stopped. They knew the servers were up and the API was responding, yet they had almost no insight into whether the models were still making good predictions.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The wake-up call came when a key model's accuracy quietly declined for nearly three weeks before a customer complaint surfaced it. The infrastructure had been perfectly healthy the whole time; the model had simply drifted as real-world data shifted, and nothing was watching for it. Traditional application monitoring tracked uptime and errors but was blind to the metrics that actually matter for AI—accuracy, drift, and prediction quality. The company needed AI performance monitoring: observability built for models, not just servers, that would catch degradation before users ever felt it.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is AI Performance Monitoring?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									AI performance monitoring continuously tracks how models behave in production—accuracy, latency, cost, inputs, and outputs. Unlike traditional software monitoring, it watches for model-specific failures like data drift, concept drift, and silent accuracy decay, alerting teams before these reach users so models can be retrained or rolled back in time. It's the observability layer that keeps deployed AI trustworthy.
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
							Five Performance Blind Spots Overcome
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built a dedicated model-drift and latency observability pipeline.
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
									OpenGridLabs built a monitoring layer that instruments every model in production without changing how they serve predictions. It captures inputs, outputs, and metadata, computes model-specific metrics and drift signals, and surfaces everything through dashboards and alerts—so the team sees a model degrading in hours, not from a customer weeks later.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>A healthy server is not a healthy model:</strong> The most dangerous AI failures are silent: the system stays up, the API returns 200s, and the model quietly makes worse decisions. Traditional monitoring can't see this because it watches infrastructure, not intelligence. The shift that mattered here was treating model quality—accuracy, drift, output distribution—as a first-class signal to monitor and alert on, exactly like uptime or latency.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									AI Performance Monitoring Architecture
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
													{idx === 3 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
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
							The engagement ran across three structured phases designed to get the highest-risk models monitored first, then extend coverage across the fleet. OpenGridLabs embedded a cross-functional team alongside the client's ML team.
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
							Outcomes were measured across a 60-day post-deployment window against the prior monitoring gap.
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
								"We thought a green dashboard meant our AI was healthy. It only meant the servers were. Now we watch the things that actually matter—drift, accuracy, quality—and we catch a failing model in hours, before a single customer notices."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Head of ML</p>
								<p className="text-sm text-muted-foreground">Confidential AI company</p>
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
								Ready to see what your models are really doing in production?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds AI performance monitoring—drift detection, accuracy and quality tracking, alerting, and dashboards—so you catch model degradation in hours, not from your customers.
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

function RAGImplementationCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	const stats = [
		{ value: "89%", label: "Reduction in hallucinated answers", accent: "from-cyan-400 to-blue-500" },
		{ value: "94%", label: "Answers grounded in a cited source", accent: "from-purple-500 to-fuchsia-400" },
		{ value: "2.4×", label: "Improvement in retrieval precision", accent: "from-pink-500 to-rose-400" },
		{ value: "9 wk", label: "From prototype to production RAG", accent: "from-emerald-400 to-teal-500" }
	];

	const challenges = [
		{ text: "Naive fixed-size chunking split sentences and tables mid-thought, destroying meaning" },
		{ text: "Pure vector search missed exact terms, codes, and names that keyword search would catch" },
		{ text: "The most relevant passage was often buried below weaker matches in the results" },
		{ text: "Answers came with no citations, so customers couldn't verify or trust them" },
		{ text: "No way to measure retrieval quality—nobody could say why an answer was wrong" }
	];

	const solutions = [
		{ text: "Structure-aware chunking that respects sections, tables, and semantic boundaries" },
		{ text: "Hybrid search combining semantic embeddings with keyword matching for the best of both" },
		{ text: "A re-ranking stage that reorders candidates so the most relevant passage reaches the model" },
		{ text: "Answers grounded strictly in retrieved context, with inline citations to source documents" },
		{ text: "A retrieval evaluation harness measuring precision, recall, and grounding on every change" }
	];

	const architectureStages = [
		{ title: "Ingestion Path", items: ["Document parsing", "Structure-aware chunking", "Embedding", "Vector + keyword index", "Metadata & access control"], color: "hsl(180,100%,50%)" },
		{ title: "Retrieval Path", items: ["Query understanding", "Hybrid (semantic + keyword) search", "Re-ranking", "Top-k context assembly"], color: "hsl(210,100%,50%)" },
		{ title: "Generation Path", items: ["Context-grounded prompting", "Inline citations", "'I don't know' fallback", "Structured answer formatting"], color: "hsl(280,100%,65%)" },
		{ title: "Eval & Ops Path", items: ["Retrieval precision / recall", "Grounding & citation checks", "Drift monitoring", "Re-indexing pipeline"], color: "hsl(330,100%,60%)" }
	];

	const phases = [
		{
			number: "Phase 1",
			title: "Retrieval Evaluation & Ingestion (Weeks 1–3)",
			desc: "Before tuning anything, OpenGridLabs built a retrieval evaluation harness with golden question-and-passage sets, making precision, recall, and grounding measurable. The team then rebuilt ingestion with structure-aware chunking and stronger embeddings, so the index preserved the meaning of real documents rather than fragmenting it.",
			accent: "from-cyan-400 to-blue-500"
		},
		{
			number: "Phase 2",
			title: "Hybrid Search & Re-ranking (Weeks 4–7)",
			desc: "OpenGridLabs introduced hybrid search—blending semantic similarity with keyword matching—so exact terms, codes, and names were no longer missed. A re-ranking stage then reordered candidates to push the single most relevant passage to the top. Every change was validated on the evaluation harness, turning retrieval tuning into a measured, evidence-driven process.",
			accent: "from-purple-500 to-fuchsia-400"
		},
		{
			number: "Phase 3",
			title: "Grounding, Citations & Hardening (Weeks 8–9)",
			desc: "The generation step was constrained to answer only from retrieved context, attach inline citations, and say 'I don't know' when the documents didn't support an answer—ending confident fabrication. Continuous monitoring tracked grounding and retrieval quality in production, and a re-indexing pipeline kept the index fresh as customer documents changed.",
			accent: "from-pink-500 to-rose-400"
		}
	];

	const tableResults = [
		{ metric: "Hallucinated answers", before: "Baseline", after: "11% of baseline", change: "−89%" },
		{ metric: "Answers grounded with citation", before: "None", after: "94%", change: "New capability" },
		{ metric: "Retrieval precision @ top-k", before: "Baseline", after: "2.4× baseline", change: "+140%" },
		{ metric: "Answer accuracy (eval set)", before: "68%", after: "92%", change: "+35%" },
		{ metric: "Exact-term / code recall", before: "Weak", after: "Strong (hybrid)", change: "Improved" },
		{ metric: '"I don\'t know" on unsupported questions', before: "Rare", after: "Reliable", change: "Trustworthy" },
		{ metric: "Retrieval quality visibility", before: "None", after: "Measured & monitored", change: "New capability" }
	];

	const successFactors = [
		{
			title: "Measure retrieval, not just answers",
			desc: "Building a retrieval evaluation harness first meant the team could see whether the right passages were being found—separating retrieval failures from generation failures and making every improvement provable."
		},
		{
			title: "Chunking quietly decides everything",
			desc: "Structure-aware chunking that preserved sections and tables delivered some of the largest gains, because no clever search can retrieve meaning that was destroyed when the document was split."
		},
		{
			title: "Hybrid search beats either method alone",
			desc: "Semantic search captured meaning; keyword search caught exact codes and names. Combining them, then re-ranking the results, surfaced the right passage far more often than vector search by itself."
		},
		{
			title: "Grounding and 'I don't know' build trust",
			desc: "Forcing answers to come from retrieved context with citations—and to admit when the documents don't have the answer—turned a confident fabricator into a source customers could actually verify and rely on."
		}
	];

	const faqs = [
		{
			q: "What is retrieval-augmented generation (RAG)?",
			a: "RAG grounds a large language model in external knowledge. Instead of relying only on what the model learned in training, it retrieves relevant passages from a document collection at query time and supplies them as context. This produces accurate, up-to-date, verifiable answers, dramatically reducing hallucinations and letting the model cite its sources."
		},
		{
			q: "Why do RAG systems still hallucinate, and how do you fix it?",
			a: "Most RAG hallucinations come from poor retrieval, not the language model. If chunking is naive, embeddings are weak, or the wrong passages are retrieved, the model is forced to guess. Fixes include smarter chunking, hybrid search combining keyword and semantic matching, a re-ranking step to surface the best passages, and prompting the model to answer only from retrieved context and cite its sources."
		}
	];

	return (
		<>
			<SEO
				title="RAG Implementation Case Study | OpenGridLabs"
				description="How a production RAG pipeline cut hallucinations 89% and grounded 94% of answers in verified cited sources using hybrid search and re-ranking."
				canonical="/services/ai-data/rag-implementation"
				keywords="Retrieval-Augmented Generation, RAG implementation, hybrid search, document chunking, re-ranking, vector search, LLMOps"
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
								How a Production RAG Pipeline Cut Hallucinations 89% and Made Every Answer Cite Its Source
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling AI company partnered with OpenGridLabs to fix an assistant that sounded confident but made things up—rebuilding retrieval from the ground up with structure-aware chunking, hybrid search, and re-ranking.
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
										<span className="text-base font-semibold text-foreground">4M+ documents indexed</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">9 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Chunking · Embeddings · Hybrid Search · Re-ranking</span>
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
								Our client is a venture-backed AI company whose product answers questions over each customer's private knowledge base—policies, manuals, contracts, and support history. The promise was simple and compelling: ask anything, get an accurate answer drawn from your own documents. An early version wired a language model to a basic vector search and demoed beautifully on a handful of clean files.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								In production, against millions of messy real-world documents, the cracks were obvious. The assistant answered fluently but often wrongly—citing nothing, blending unrelated passages, or inventing details that were nowhere in the source material. Customers in regulated settings couldn't trust an answer they couldn't verify, and every confident-but-false response chipped away at credibility. The team had assumed the language model was the problem. It wasn't. The retrieval was: if the right passages never reached the model, no amount of prompting could save the answer. They needed a production-grade RAG pipeline built for real documents at scale.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is Retrieval-Augmented Generation (RAG)?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									RAG grounds a language model in external knowledge. Rather than relying only on what it learned in training, the system retrieves relevant passages from a document collection at query time and supplies them to the model as context. The result is accurate, up-to-date, verifiable answers that can cite their sources—dramatically reducing hallucination on questions about a specific body of knowledge.
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
							Five Retrieval Issues Overcome
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built a production-grade RAG pipeline to ensure accuracy and verifiability.
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
									OpenGridLabs built a two-path RAG pipeline: an offline ingestion path that turns raw documents into a high-quality searchable index, and an online query path that retrieves, re-ranks, and grounds each answer. Separating the two means the index can be improved and re-built independently of how queries are served.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Retrieval is where RAG is won or lost:</strong> Most RAG failures blamed on the language model are really retrieval failures—if the right passage never reaches the model, it is forced to guess. The biggest quality gains here came from upstream work: chunking that preserves meaning, hybrid search that catches both concepts and exact terms, and re-ranking that surfaces the single best passage. Fix retrieval, and hallucinations fall on their own.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Retrieval-Augmented Generation Pipeline
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
													{idx === 3 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
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
							The engagement ran across three structured phases designed to make retrieval measurable first, then systematically improve it. OpenGridLabs embedded a team of ML and search engineers and a retrieval-evaluation specialist alongside the client's product team.
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
							Outcomes were measured across a 60-day post-deployment window against pre-engagement baselines, using the same golden evaluation sets throughout.
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
								"We kept trying to fix our answers by changing the model. The real problem was that the right passage never reached it. Once retrieval was solid, the hallucinations vanished—and now every answer points to exactly where it came from."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Head of Product</p>
								<p className="text-sm text-muted-foreground">Confidential AI Company</p>
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
								Ready to build RAG that gives answers your users can trust?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds production RAG pipelines—structure-aware chunking, hybrid search, re-ranking, and grounded, cited answers—so your AI is accurate, verifiable, and reliable at scale.
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

function AgenticAICaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	const stats = [
		{ value: "62%", label: "Operational cost reduction in targeted workflows", accent: "from-cyan-400 to-blue-500" },
		{ value: "4×", label: "Faster SLA response times across departments", accent: "from-purple-500 to-fuchsia-400" },
		{ value: "91%", label: "Straight-through processing rate for routine tasks", accent: "from-pink-500 to-rose-400" },
		{ value: "14 wk", label: "From kickoff to full production deployment", accent: "from-emerald-400 to-teal-500" }
	];

	const challenges = [
		{ text: "Manual KYC and AML screening across siloed data sources causing 72-hour average review cycles" },
		{ text: "Fraud triage queues backlogged by up to 3,400 cases at peak, with analysts handling repetitive evidence gathering" },
		{ text: "Loan origination pre-approval workflows requiring 7–9 manual handoffs across credit, compliance, and legal teams" },
		{ text: "Regulatory reporting inconsistency leading to error-prone submissions and audit risk" },
		{ text: "No unified audit trail for AI-assisted decisions, creating explainability and accountability gaps" }
	];

	const solutions = [
		{ text: "LLM-powered document reasoning for KYC packet analysis, reducing review to under 4 hours" },
		{ text: "Autonomous fraud triage agent that pre-processes evidence, scores risk, and escalates only confirmed edge cases" },
		{ text: "AI-driven loan origination pipeline with configurable decision guardrails and human-in-the-loop checkpoints" },
		{ text: "Multi-agent orchestration layer with specialised compliance, fraud, and credit sub-agents operating in parallel" },
		{ text: "Immutable agent decision log with explainability summaries for every AI-assisted action" }
	];

	const architectureStages = [
		{ title: "Data Ingestion", items: ["Core banking feeds", "Customer documents", "Transaction streams", "External data APIs (credit bureaux, sanctions lists)"], color: "hsl(180,100%,50%)" },
		{ title: "Orchestrator", items: ["Central LLM agent", "Goal decomposition", "Sub-agent delegation", "Tool invocation", "Context memory management"], color: "hsl(210,100%,50%)" },
		{ title: "Specialist Agents", items: ["KYC/AML Agent", "Fraud Triage Agent", "Credit Underwriting Agent", "Regulatory Reporting Agent", "Document Intelligence Agent"], color: "hsl(280,100%,65%)" },
		{ title: "Enterprise Systems", items: ["Core banking system", "CRM", "Risk management platform", "Regtech reporting", "HRMS", "Audit & compliance logs"], color: "hsl(330,100%,60%)" }
	];

	const phases = [
		{
			number: "Phase 1",
			title: "Discovery & Agent Design (Weeks 1–3)",
			desc: "Deep process mapping across all three target domains. OpenGridLabs conducted over 40 stakeholder interviews to document edge cases, exception handling protocols, and the informal knowledge held by senior analysts. This became the foundational corpus for agent training and tool configuration.",
			accent: "from-cyan-400 to-blue-500"
		},
		{
			number: "Phase 2",
			title: "Build, Test & Shadow Mode (Weeks 4–10)",
			desc: "Agents were deployed in a shadow operating mode, running in parallel with human workflows and producing outputs that were compared against analyst decisions without any live system impact. Disagreement rates were reviewed weekly; agent logic was refined through iterative prompt engineering, fine-tuning, and guardrail adjustment until shadow accuracy consistently exceeded 94%.",
			accent: "from-purple-500 to-fuchsia-400"
		},
		{
			number: "Phase 3",
			title: "Staged Production Rollout (Weeks 11–14)",
			desc: "Production access was granted in a phased sequence—fraud triage first (lowest financial risk), then KYC, then lending pre-approval. Each phase included a 48-hour monitoring window before the next was activated. Rollback procedures and manual override paths were documented and tested by the client's operations team prior to go-live.",
			accent: "from-pink-500 to-rose-400"
		}
	];

	const tableResults = [
		{ metric: "KYC review cycle time", before: "72 hours avg.", after: "<4 hours avg.", change: "−94%" },
		{ metric: "Fraud triage backlog (peak)", before: "3,400 cases", after: "180 cases", change: "−95%" },
		{ metric: "Loan pre-approval handoffs", before: "7–9 steps", after: "1–2 steps", change: "−82%" },
		{ metric: "Analyst time on routine tasks", before: "~70% of day", after: "~18% of day", change: "−74%" },
		{ metric: "Regulatory report error rate", before: "4.2%", after: "0.3%", change: "−93%" },
		{ metric: "Operational cost (targeted workflows)", before: "Baseline", after: "38% of baseline", change: "−62%" },
		{ metric: "Projected 12-month ROI", before: "—", after: "340%", change: "340% ROI" }
	];

	const successFactors = [
		{
			title: "Domain-first agent design",
			desc: "Rather than adapting general-purpose AI to banking, OpenGridLabs built agents specifically around BFSI workflows. Each agent's tool set, reasoning prompts, and escalation logic were co-designed with the client's subject-matter experts."
		},
		{
			title: "Shadow mode as a trust accelerator",
			desc: "Running agents in parallel before production gave internal stakeholders the data needed to build confidence without risking live operations. By the time production rollout began, internal resistance was minimal—the accuracy data spoke for itself."
		},
		{
			title: "Explainability as a first-class feature",
			desc: "Every agent decision carries a natural-language reasoning summary. This proved critical for internal audit teams and, in one instance, was used to respond to a regulator's query about an automated credit decision—resolving it within hours rather than days."
		},
		{
			title: "Human-in-the-loop as architecture, not afterthought",
			desc: "Escalation gates were engineered into the system's core logic, not bolted on. This preserved human oversight for genuinely complex or high-stakes decisions while freeing the agents to act autonomously on routine cases."
		}
	];

	const faqs = [
		{
			q: "What is Agentic AI in Financial Services?",
			a: "Unlike traditional automation that executes fixed scripts, agentic AI systems can perceive context, set goals, orchestrate multiple tools or sub-agents, and adapt their approach in real time—enabling dynamic, multi-step reasoning across complex financial workflows such as KYC, credit decisioning, and regulatory reporting."
		},
		{
			q: "How does human-in-the-loop gating work in BFSI Agentic AI?",
			a: "Every agent action is logged with a reasoning trace, timestamp, and responsible-AI confidence score. Human-in-the-loop gates are enforced at defined risk thresholds—ensuring regulatory alignment with RBI guidelines, SEBI norms, and internal audit requirements. No autonomous action is taken on decisions above a configurable risk tier without human sign-off."
		},
		{
			q: "Why is domain-first design critical for banking agents?",
			a: "General-purpose AI is not suited for highly regulated, high-stakes financial operations. Banking agents require customized tools, strict reasoning prompts, deterministic escalation rules, and co-designing with subject-matter experts to operate accurately and within compliance boundaries."
		}
	];

	return (
		<>
			<SEO
				title="Agentic AI Case Study - Banking & Financial Services | OpenGridLabs"
				description="How OpenGridLabs' multi-agent AI platform transformed operations for a Tier-1 financial institution (BFSI), achieving a 62% operational cost reduction in 14 weeks."
				canonical="/services/ai-data/agentic-ai"
				keywords="Agentic AI, Multi-Agent Orchestration, BFSI Automation, Fraud Detection, KYC Compliance, Loan Underwriting, Regulatory AI"
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
									Case Study · Banking & Financial Services
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Agentic AI Transformed Operations for a Tier-1 Financial Institution
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A confidential BFSI enterprise deployed OpenGridLabs' multi-agent AI platform across compliance, fraud triage, and lending workflows—achieving outcomes that reframed what automation means in financial services.
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
										<span className="text-base font-semibold text-foreground">BFSI (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">AUM</span>
										<span className="text-base font-semibold text-foreground">$40B+</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">14 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Agentic AI · LLM Orchestration · RPA</span>
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
								Our client is a diversified financial services institution operating across retail banking, insurance underwriting, and asset management verticals. With over 4,000 employees and a customer base exceeding two million, the organisation had reached a scale where its legacy, rules-based automation stack was no longer keeping pace with regulatory complexity, fraud sophistication, or customer expectations.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Facing growing pressure from new compliance obligations and rising operational costs, leadership initiated a strategic review of AI readiness. The conclusion was clear: point solutions and RPA bots were not enough. What was required was an intelligent, goal-directed automation layer—one capable of reasoning, delegating sub-tasks, and taking autonomous action across interconnected systems. They needed agentic AI.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What is Agentic AI in Financial Services?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Unlike traditional automation that executes fixed scripts, agentic AI systems can perceive context, set goals, orchestrate multiple tools or sub-agents, and adapt their approach in real time—enabling dynamic, multi-step reasoning across complex financial workflows such as KYC, credit decisioning, and regulatory reporting.
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
							Five Operational Bottlenecks Resolved
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs deployed autonomous specialized agents to transform customer-facing and regulatory timelines.
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
									OpenGridLabs designed a layered agentic architecture that integrates with the client's existing core banking infrastructure without requiring a rip-and-replace of legacy systems. The platform is built for auditability, role-based access, and regulatory-grade data handling.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Compliance-first by design:</strong> Every agent action is logged with a reasoning trace, timestamp, and responsible-AI confidence score. Human-in-the-loop gates are enforced at defined risk thresholds—ensuring regulatory alignment with RBI guidelines, SEBI norms, and internal audit requirements. No autonomous action is taken on decisions above a configurable risk tier without human sign-off.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Agentic AI Platform Architecture Layers
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
													{idx === 3 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
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
							The engagement ran across three structured phases, designed to minimise operational disruption while building organisational confidence in agentic AI. OpenGridLabs embedded a cross-functional team comprising ML engineers, financial domain specialists, and a dedicated compliance architect.
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
							Outcomes were measured across a 90-day post-deployment window against pre-deployment baselines. The results demonstrated that agentic AI, properly implemented, can deliver enterprise-grade ROI well within a single financial quarter.
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
								"We had automated tasks before. This was the first time we automated thinking. The agents don't just execute—they reason, adapt, and escalate appropriately. That distinction is what made this transformation real."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Chief Operating Officer</p>
								<p className="text-sm text-muted-foreground">Confidential BFSI Client</p>
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
								Ready to deploy agentic AI in your financial operations?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds production-grade agentic AI systems tailored for BFSI compliance, risk, and customer operations.
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

	if (serviceId === "agentic-ai") {
		return <AgenticAICaseStudy />;
	}

	if (serviceId === "rag-implementation") {
		return <RAGImplementationCaseStudy />;
	}

	if (serviceId === "voice-to-text-converter") {
		return <VoiceToTextConverterCaseStudy />;
	}

	if (serviceId === "custom-ai-solutions") {
		return <CustomAISolutionsCaseStudy />;
	}

	if (serviceId === "ai-performance-monitoring") {
		return <AIPerformanceMonitoringCaseStudy />;
	}

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
