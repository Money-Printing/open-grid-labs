import { useParams, Navigate } from "react-router";
import PageTitle from "../../../components/page-title";
import PageHeading from "../../../components/page-heading";
import { CheckCircle2 } from "lucide-react";
import Indicator from "../../../components/ui/indicator";

interface ProjectDetail {
	id: string;
	title: string;
	description: string;
	category: string;
	client: string;
	duration: string;
	technologies: string[];
	overview: string;
	challenges: string[];
	solutions: string[];
	features: string[];
	results: {
		metric: string;
		value: string;
	}[];
	images?: string[];
}

const projectsData: Record<string, ProjectDetail> = {
	"frontend-microscopic-scanner": {
		id: "frontend-microscopic-scanner",
		title: "Frontend Microscopic Scanner",
		description: "A highly intuitive frontend microscopic scanner that streamlines workflows and improves accuracy.",
		category: "Medical Technology",
		client: "Medical Research Lab",
		duration: "6 months",
		technologies: ["React", "TypeScript", "WebGL", "Node.js", "Express", "MongoDB"],
		overview: "Developed a cutting-edge frontend microscopic scanner application that enables medical professionals to analyze microscopic images with enhanced precision. The application features real-time image processing, advanced zoom capabilities, and automated detection algorithms.",
		challenges: [
			"Processing high-resolution medical images in real-time without performance degradation",
			"Creating an intuitive interface for complex medical image analysis",
			"Implementing accurate automated detection algorithms",
			"Ensuring HIPAA compliance and data security"
		],
		solutions: [
			"Implemented WebGL-based rendering for smooth, high-performance image processing",
			"Designed a user-centric interface with customizable workflows",
			"Integrated machine learning models for automated detection and analysis",
			"Built a secure backend with encryption and access controls"
		],
		features: [
			"Real-time image processing and analysis",
			"Advanced zoom and pan controls",
			"Automated cell detection and counting",
			"Annotation and measurement tools",
			"Report generation and export",
			"Multi-user collaboration features",
			"Cloud-based image storage and retrieval"
		],
		results: [
			{ metric: "Processing Speed", value: "3x faster" },
			{ metric: "Accuracy Improvement", value: "25%" },
			{ metric: "User Satisfaction", value: "95%" },
			{ metric: "Time Saved", value: "40%" }
		]
	},
	"cloud-medical-devices": {
		id: "cloud-medical-devices",
		title: "Cloud Frontend/Backend for Medical Devices",
		description: "A reliable cloud platform for managing and analyzing medical device data efficiently.",
		category: "Healthcare Cloud",
		client: "Healthcare Technology Company",
		duration: "8 months",
		technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "Kubernetes", "Redis"],
		overview: "Built a comprehensive cloud platform for managing medical device data, enabling healthcare providers to monitor patient vitals, track device performance, and analyze trends. The platform supports real-time data streaming, alerts, and comprehensive reporting.",
		challenges: [
			"Handling real-time data streams from thousands of medical devices",
			"Ensuring 99.99% uptime for critical healthcare operations",
			"Managing large volumes of sensitive patient data securely",
			"Creating scalable architecture for growing device ecosystem"
		],
		solutions: [
			"Implemented microservices architecture with containerization",
			"Deployed on AWS with auto-scaling and load balancing",
			"Built real-time data pipeline using WebSockets and message queues",
			"Implemented comprehensive security measures and compliance protocols"
		],
		features: [
			"Real-time device monitoring and alerts",
			"Historical data analysis and reporting",
			"Device management and configuration",
			"Patient vitals dashboard",
			"Automated alert system",
			"Data export and integration APIs",
			"Role-based access control"
		],
		results: [
			{ metric: "Uptime", value: "99.99%" },
			{ metric: "Devices Supported", value: "10,000+" },
			{ metric: "Response Time", value: "<100ms" },
			{ metric: "Data Processed", value: "5TB/day" }
		]
	},
	"airtrader-trading-simulator": {
		id: "airtrader-trading-simulator",
		title: "AirTrader – Trading Simulator Application",
		description: "A robust and user-friendly trading simulator for strategy testing and decision-making.",
		category: "Fintech",
		client: "Financial Education Platform",
		duration: "5 months",
		technologies: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "Chart.js"],
		overview: "Developed a comprehensive trading simulator that allows users to practice trading strategies with real-time market data without risking real money. Features include portfolio management, technical analysis tools, and performance analytics.",
		challenges: [
			"Simulating realistic market conditions and order execution",
			"Handling real-time market data feeds efficiently",
			"Creating accurate backtesting capabilities",
			"Building intuitive charting and analysis tools"
		],
		solutions: [
			"Integrated real-time market data APIs with caching mechanisms",
			"Implemented realistic order matching engine",
			"Built comprehensive backtesting framework with historical data",
			"Developed interactive charts with technical indicators"
		],
		features: [
			"Real-time market data simulation",
			"Portfolio management and tracking",
			"Technical analysis tools and indicators",
			"Backtesting capabilities",
			"Performance analytics and reports",
			"Risk management tools",
			"Educational resources and tutorials"
		],
		results: [
			{ metric: "Active Users", value: "50,000+" },
			{ metric: "Trades Simulated", value: "1M+" },
			{ metric: "User Engagement", value: "45 min/session" },
			{ metric: "Skill Improvement", value: "60%" }
		]
	},
	"crypto-analytical-tools": {
		id: "crypto-analytical-tools",
		title: "Crypto Analytical Tools",
		description: "Comprehensive crypto analysis tools providing actionable insights for investments.",
		category: "Cryptocurrency",
		client: "Crypto Investment Firm",
		duration: "7 months",
		technologies: ["React", "TypeScript", "Python", "Django", "MongoDB", "WebSocket", "D3.js"],
		overview: "Created a sophisticated cryptocurrency analysis platform with real-time market data, advanced charting, sentiment analysis, and automated trading signals. The platform aggregates data from multiple exchanges and provides comprehensive market insights.",
		challenges: [
			"Aggregating data from multiple cryptocurrency exchanges",
			"Processing high-frequency market data updates",
			"Implementing accurate technical analysis algorithms",
			"Creating real-time sentiment analysis from social media"
		],
		solutions: [
			"Built scalable data aggregation pipeline with WebSocket connections",
			"Implemented efficient data processing with Python and caching",
			"Developed custom technical indicators and signals",
			"Integrated NLP models for sentiment analysis"
		],
		features: [
			"Real-time multi-exchange market data",
			"Advanced charting with 50+ indicators",
			"Sentiment analysis from social media",
			"Automated trading signals",
			"Portfolio tracking and analytics",
			"Price alerts and notifications",
			"Historical data analysis"
		],
		results: [
			{ metric: "Markets Tracked", value: "500+" },
			{ metric: "Data Points/Second", value: "10,000+" },
			{ metric: "Prediction Accuracy", value: "75%" },
			{ metric: "User ROI Improvement", value: "35%" }
		]
	},
	"tread-pattern-dashboard": {
		id: "tread-pattern-dashboard",
		title: "Tread Pattern Monitoring System POC & Analytical Dashboard",
		description: "Advanced monitoring system and analytics dashboard to simplify complex data and enhance efficiency.",
		category: "Industrial IoT",
		client: "Automotive Manufacturer",
		duration: "6 months",
		technologies: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "MQTT", "Grafana"],
		overview: "Developed a proof-of-concept monitoring system that uses computer vision and IoT sensors to analyze tire tread patterns, predict wear, and provide maintenance recommendations. The analytical dashboard visualizes complex data and provides actionable insights.",
		challenges: [
			"Processing high-resolution tire images in real-time",
			"Developing accurate tread wear prediction models",
			"Integrating with existing manufacturing systems",
			"Visualizing complex 3D tread pattern data"
		],
		solutions: [
			"Implemented computer vision models using TensorFlow",
			"Built edge computing solution for on-site processing",
			"Created API integrations with manufacturing systems",
			"Developed custom 3D visualization components"
		],
		features: [
			"Real-time tread pattern analysis",
			"Predictive maintenance alerts",
			"3D pattern visualization",
			"Historical trend analysis",
			"Quality control dashboard",
			"Automated reporting system",
			"Integration with ERP systems"
		],
		results: [
			{ metric: "Detection Accuracy", value: "98%" },
			{ metric: "Maintenance Cost Reduction", value: "30%" },
			{ metric: "Processing Time", value: "5 sec/tire" },
			{ metric: "Defect Detection", value: "95%" }
		]
	}
};

export default function ProjectDetails() {
	const { projectId } = useParams<{ projectId: string }>();

	if (!projectId || !projectsData[projectId]) {
		return <Navigate to="/work" replace />;
	}

	const project = projectsData[projectId];

	return (
		<>
			<PageTitle
				label={project.category}
				mainTitle={project.title}
				subTitle="Project Details"
				description={project.description}
			/>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
				{/* Project Overview */}
				<section>
					<PageHeading
						preTitle="Project"
						mainTitle="Overview"
						postTitle=""
					/>
					<div className="mt-8 space-y-6">
						<p className="text-lg text-muted-foreground leading-relaxed">
							{project.overview}
						</p>

						<div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-8">
							<div className="bg-foreground/5 border border-border rounded-xl p-6">
								<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">Client</h3>
								<p className="text-xl font-semibold text-foreground">{project.client}</p>
							</div>
							<div className="bg-foreground/5 border border-border rounded-xl p-6">
								<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">Duration</h3>
								<p className="text-xl font-semibold text-foreground">{project.duration}</p>
							</div>
							<div className="bg-foreground/5 border border-border rounded-xl p-6">
								<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">Category</h3>
								<p className="text-xl font-semibold text-foreground">{project.category}</p>
							</div>
						</div>
					</div>
				</section>

				{/* Technologies */}
				<section>
					<PageHeading
						preTitle="Technologies"
						mainTitle="Used"
						postTitle=""
					/>
					<div className="mt-8 flex flex-wrap gap-3">
						{project.technologies.map((tech, idx) => (
							<div
								key={idx}
								className="bg-foreground/10 border border-border rounded-lg px-4 py-2 text-foreground font-medium"
							>
								{tech}
							</div>
						))}
					</div>
				</section>

				{/* Challenges & Solutions */}
				<section className="grid md:grid-cols-2 grid-cols-1 gap-8">
					<div>
						<div className="mb-6">
							<Indicator />
							<h2 className="text-3xl font-bold text-foreground mt-3">Challenges</h2>
						</div>
						<ul className="space-y-4">
							{project.challenges.map((challenge, idx) => (
								<li key={idx} className="flex gap-3">
									<div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-sm font-bold mt-1">
										{idx + 1}
									</div>
									<p className="text-muted-foreground flex-1">{challenge}</p>
								</li>
							))}
						</ul>
					</div>

					<div>
						<div className="mb-6">
							<Indicator />
							<h2 className="text-3xl font-bold text-foreground mt-3">Solutions</h2>
						</div>
						<ul className="space-y-4">
							{project.solutions.map((solution, idx) => (
								<li key={idx} className="flex gap-3">
									<CheckCircle2 className="flex-shrink-0 w-6 h-6 text-green-500 mt-1" />
									<p className="text-muted-foreground flex-1">{solution}</p>
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* Key Features */}
				<section>
					<PageHeading
						preTitle="Key"
						mainTitle="Features"
						postTitle=""
					/>
					<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
						{project.features.map((feature, idx) => (
							<div
								key={idx}
								className="bg-foreground/5 border border-border rounded-lg p-4 flex items-start gap-3"
							>
								<CheckCircle2 className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
								<p className="text-foreground">{feature}</p>
							</div>
						))}
					</div>
				</section>

				{/* Results & Impact */}
				<section>
					<PageHeading
						preTitle="Results"
						mainTitle="& Impact"
						postTitle=""
					/>
					<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
						{project.results.map((result, idx) => (
							<div
								key={idx}
								className="relative bg-gradient-to-br from-foreground/10 to-foreground/5 border border-border rounded-xl p-6 overflow-hidden"
							>
								<div className="absolute -top-4 -right-4 w-20 h-20 bg-foreground/5 rounded-full"></div>
								<div className="relative z-10">
									<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">
										{result.metric}
									</h3>
									<p className="text-3xl font-bold text-foreground">{result.value}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</>
	);
}
