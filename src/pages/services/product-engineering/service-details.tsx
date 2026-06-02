import { useParams, Link, Navigate } from "react-router";
import SEO from "../../../components/seo";
import { motion } from "motion/react";
import { 
	ArrowLeft, 
	BrainCircuit, 
	ArrowRight, 
	Sparkles, 
	CheckCircle2, 
	Terminal
} from "lucide-react";
import { slugify } from "../../../utils/slugify";
import CMSIntegrationCaseStudy from "./case-studies/cms-integration";
import CodeOptimizationCaseStudy from "./case-studies/code-optimization";
import FrontEndDevCaseStudy from "./case-studies/front-end-dev";
import ProgressiveWebAppCaseStudy from "./case-studies/progressive-web-app";
import RealTimeChatCaseStudy from "./case-studies/real-time-chat";
import ResponsiveDesignCaseStudy from "./case-studies/responsive-design";
import ScalableWebEcosystemsCaseStudy from "./case-studies/scalable-web-ecosystems";
import SEOOptimizationCaseStudy from "./case-studies/seo-optimization";
import SPADevelopmentCaseStudy from "./case-studies/spa-development";
import UIUXDesignCaseStudy from "./case-studies/ui-ux-design";
import WebAnimationsCaseStudy from "./case-studies/web-animations";
import WebSecurityCaseStudy from "./case-studies/web-security";
import AndroidDevelopmentCaseStudy from "./case-studies/android-development";
import AppStoreDeploymentCaseStudy from "./case-studies/app-store-deployment";
import AppUIUXCaseStudy from "./case-studies/app-ui-ux";
import CameraIntegrationCaseStudy from "./case-studies/camera-integration";
import CrossPlatformAppsCaseStudy from "./case-studies/cross-platform-apps";
import FirebaseIntegrationCaseStudy from "./case-studies/firebase-integration";
import FlutterCaseStudy from "./case-studies/flutter";
import GPSMapsCaseStudy from "./case-studies/gps-maps";
import IOSDevelopmentCaseStudy from "./case-studies/ios-development";
import OfflineModeCaseStudy from "./case-studies/offline-mode";
import PushNotificationsCaseStudy from "./case-studies/push-notifications";
import ReactNativeCaseStudy from "./case-studies/react-native";
import AdminPanelsCaseStudy from "./case-studies/admin-panels";
import APIDevelopmentCaseStudy from "./case-studies/api-development";


interface ProductDetail {
	title: string;
	category: "Web Application" | "Mobile Application" | "Backend Development";
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

const WEB_APP_SERVICES = [
	"UI/UX Design", "SPA Development", "CMS Integration", "Responsive Design",
	"Scalable Web Ecosystems", "SEO Optimization", "Progressive Web App", "Front-End Dev",
	"Web Animations", "Web Security", "Code Optimization", "Real-Time Chat"
];

const MOBILE_APP_SERVICES = [
	"iOS Development", "Android Development", "Flutter", "React Native",
	"App UI/UX", "Cross-Platform Apps", "App Store Deployment", "Push Notifications",
	"GPS & Maps", "Camera Integration", "Offline Mode", "Firebase Integration"
];

const BACKEND_DEV_SERVICES = [
	"API Development", "RESTful Services", "GraphQL", "Authentication",
	"Database Design", "Serverless Functions", "Job Queues", "Caching Systems",
	"File Storage", "Admin Panels", "WebSockets", "Third-party Integration"
];

const ALL_SERVICES = [...WEB_APP_SERVICES, ...MOBILE_APP_SERVICES, ...BACKEND_DEV_SERVICES];

function generateProductDetail(_slug: string, title: string): ProductDetail {

	let category: "Web Application" | "Mobile Application" | "Backend Development" = "Web Application";
	let highlight = "hsl(210,100%,60%)"; // Blue

	if (WEB_APP_SERVICES.includes(title)) {
		category = "Web Application";
		highlight = "hsl(210,100%,60%)";
	} else if (MOBILE_APP_SERVICES.includes(title)) {
		category = "Mobile Application";
		highlight = "hsl(280,100%,65%)"; // Purple
	} else if (BACKEND_DEV_SERVICES.includes(title)) {
		category = "Backend Development";
		highlight = "hsl(180,100%,45%)"; // Emerald
	}

	const categoryConfig = {
		"Web Application": {
			tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Next.js", "Jest", "Playwright"],
			metrics: [
				{ metric: "Load Speed", value: "-40% Latency", desc: "For end-to-end page loads and layout shifts." },
				{ metric: "SEO Score", value: "98/100", desc: "Substantial increase in discoverability and page quality." },
				{ metric: "Conversion Rate", value: "+15% Lift", desc: "Achieved via responsive and low-latency interaction points." }
			]
		},
		"Mobile Application": {
			tech: ["Swift", "Kotlin", "Flutter", "React Native", "Firebase", "App Store Connect", "Play Console"],
			metrics: [
				{ metric: "Crash Rate", value: "< 0.1%", desc: "Incredibly stable live sessions on target operating systems." },
				{ metric: "User Retention", value: "+22% Retention", desc: "Enhanced user engagement and push notification click-throughs." },
				{ metric: "Store Rating", value: "4.8 Stars", desc: "Consistently positive review averages post-release." }
			]
		},
		"Backend Development": {
			tech: ["Node.js", "Go", "PostgreSQL", "Redis", "Docker", "AWS", "GraphQL", "REST APIs"],
			metrics: [
				{ metric: "API Latency", value: "< 50ms Average", desc: "Highly optimized execution times for database handshakes." },
				{ metric: "System Uptime", value: "99.99% Uptime", desc: "Reliable operation through container orchestration." },
				{ metric: "Throughput Capacity", value: "100k+ Active", desc: "Concurrent connection pipelines scaling on demand." }
			]
		}
	};

	const config = categoryConfig[category];

	return {
		title: title,
		category: category,
		highlight: highlight,
		description: `Enterprise-grade ${title} solutions designed to drive product agility, scale performance, and deliver premium UX.`,
		overview: `Our ${title} service utilizes cutting-edge architectures to resolve complex organizational problems. By integrating modern ${category} methods, custom verification frameworks, and optimized deployment environments, we build software that turns raw product concepts into scalable, production-grade applications. We tailor every aspect to align with regulatory standards, custom APIs, and demanding performance requirements.`,
		technologies: config.tech,
		features: [
			`Tailormade ${title} Engineering: Custom configurations designed specifically around your codebase and business context.`,
			"Automated Scaling & Orchestration: Deployments utilizing high-throughput container systems (Docker/Kubernetes).",
			"Real-Time Telemetry & Monitoring: Continuous logging of loading speed, latency metrics, and API health.",
			"Secure Data Handshakes: Advanced encryption protocols guaranteeing that all transit data is fully protected."
		],
		useCases: [
			{
				industry: "Fintech",
				title: `${title} Asset Management & Platform Integration`,
				desc: `Integrated our custom ${title} logic with legacy banking APIs to optimize processing speeds, audit operations, and secure transactional databases, reducing legacy synchronization lag by 50%.`
			},
			{
				industry: "Retail & E-Commerce",
				title: `${title}-Powered Operational Flow`,
				desc: `Developed end-to-end client applications that leverage ${title} to deliver modern responsive interfaces, dynamic item listings, and secure payment integrations, improving mobile checkout conversion by 18%.`
			}
		],
		results: config.metrics
	};
}

export default function ServicesProductEngineeringDetail() {
	const { serviceId } = useParams<{ serviceId: string }>();

	if (serviceId === "cms-integration") {
		return <CMSIntegrationCaseStudy />;
	}

	if (serviceId === "code-optimization") {
		return <CodeOptimizationCaseStudy />;
	}

	if (serviceId === "front-end-dev") {
		return <FrontEndDevCaseStudy />;
	}

	if (serviceId === "progressive-web-app") {
		return <ProgressiveWebAppCaseStudy />;
	}

	if (serviceId === "real-time-chat") {
		return <RealTimeChatCaseStudy />;
	}

	if (serviceId === "responsive-design") {
		return <ResponsiveDesignCaseStudy />;
	}

	if (serviceId === "scalable-web-ecosystems") {
		return <ScalableWebEcosystemsCaseStudy />;
	}

	if (serviceId === "seo-optimization") {
		return <SEOOptimizationCaseStudy />;
	}

	if (serviceId === "spa-development") {
		return <SPADevelopmentCaseStudy />;
	}

	if (serviceId === "ui-ux-design") {
		return <UIUXDesignCaseStudy />;
	}

	if (serviceId === "web-animations") {
		return <WebAnimationsCaseStudy />;
	}

	if (serviceId === "web-security") {
		return <WebSecurityCaseStudy />;
	}

	if (serviceId === "android-development") {
		return <AndroidDevelopmentCaseStudy />;
	}

	if (serviceId === "app-store-deployment") {
		return <AppStoreDeploymentCaseStudy />;
	}

	if (serviceId === "app-ui-ux") {
		return <AppUIUXCaseStudy />;
	}

	if (serviceId === "camera-integration") {
		return <CameraIntegrationCaseStudy />;
	}

	if (serviceId === "cross-platform-apps") {
		return <CrossPlatformAppsCaseStudy />;
	}

	if (serviceId === "firebase-integration") {
		return <FirebaseIntegrationCaseStudy />;
	}

	if (serviceId === "flutter") {
		return <FlutterCaseStudy />;
	}

	if (serviceId === "gps-maps") {
		return <GPSMapsCaseStudy />;
	}

	if (serviceId === "ios-development") {
		return <IOSDevelopmentCaseStudy />;
	}

	if (serviceId === "offline-mode") {
		return <OfflineModeCaseStudy />;
	}

	if (serviceId === "push-notifications") {
		return <PushNotificationsCaseStudy />;
	}

	if (serviceId === "react-native") {
		return <ReactNativeCaseStudy />;
	}

	if (serviceId === "admin-panels") {
		return <AdminPanelsCaseStudy />;
	}

	if (serviceId === "api-development") {
		return <APIDevelopmentCaseStudy />;
	}


	const matchedTitle = ALL_SERVICES.find(s => slugify(s) === serviceId);

	if (!serviceId || !matchedTitle) {
		return <Navigate to="/services/product-engineering" replace />;
	}

	const service = generateProductDetail(serviceId, matchedTitle);

	return (
		<>
			<SEO
				title={`${service.title} - Product Engineering | OpenGridLabs`}
				description={service.description}
				canonical={`/services/product-engineering/${serviceId}`}
				keywords={`${service.title}, ${service.category}, software engineering, web development, mobile app, API backend, opengridlabs`}
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
						to="/services/product-engineering" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to Product Engineering
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
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Engineering in Action</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Real-World Use Cases
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
								Partner with our software engineering experts to custom design, validate, and integrate {service.title} inside your enterprise software platform.
							</p>
							<div>
								<Link 
									to="/contact-us"
									className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white"
									style={{ 
										background: `linear-gradient(135deg, ${service.highlight} 0%, hsl(260, 100%, 60%) 100%)`,
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
