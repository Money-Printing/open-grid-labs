import type { ServiceDetail } from "./serviceDetailGenerator";

// Highly detailed custom data for featured services
export const customServicesData: Record<string, ServiceDetail> = {
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
