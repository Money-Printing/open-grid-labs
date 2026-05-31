import { customServicesData } from "./customServicesData";

export interface ServiceDetail {
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


/**
 * Generates detailed specifications for a service, using high-fidelity pre-defined
 * custom profiles for featured services, or an automated schema generator for fallbacks.
 *
 * @param slug The slugified ID of the service (e.g. "agentic-ai").
 * @param title The human-readable title of the service.
 * @returns A ServiceDetail payload.
 */
export const generateServiceDetail = (slug: string, title: string): ServiceDetail => {
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
