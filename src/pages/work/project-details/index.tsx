import { useState, useRef } from "react";
import { useParams, Navigate } from "react-router";
import PageHeading from "../../../components/page-heading";
import SEO from "../../../components/seo";
import { 
	CheckCircle2, Shield, Lock, Cpu, Activity, Clock, Server, Layers 
} from "lucide-react";
import Indicator from "../../../components/ui/indicator";
import Carousel from "../../../components/ui/carousel";

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
	videoUrl?: string;
	galleryImages?: string[];
	galleryGifs?: string[];
}

const projectsData: Record<string, ProjectDetail> = {
	"safeguard": {
		id: "safeguard",
		title: "Safeguard.sh — Software Supply Chain Security, From Zero to Platform",
		description: "A comprehensive software supply chain security platform built from the ground up — helping enterprises find, fix, and prevent vulnerabilities before they ever reach production.",
		category: "Cybersecurity · DevSecOps · Enterprise SaaS",
		client: "Safeguard.sh",
		duration: "18 months",
		technologies: ["React", "TypeScript", "Node.js", "Go", "Python", "PostgreSQL", "OpenSearch", "Redis", "Kubernetes", "AWS", "OCI", "Docker", "GraphQL"],
		overview: "OpenGridLabs partnered with Safeguard from day one to design, build, and scale a full software supply chain security platform. What started as a focused SBOM (Software Bill of Materials) management tool grew into an end-to-end platform spanning vulnerability detection, automated remediation, cloud and API security posture management, compliance automation, and AI-native risk analysis — built to serve security teams at organizations that can't afford blind spots in their software supply chain. We didn't just ship a product. We architected the system that today powers everything from dependency-tree scanning to autonomous fix generation, built to meet the compliance bar of the most demanding industries, including FedRAMP High, IL7, and SOC 2 Type II.",
		challenges: [
			"Making sense of a fractured security landscape: Security teams were juggling a dozen disconnected tools — one for SBOMs, another for cloud posture, another for API security, another for compliance evidence.",
			"Detecting vulnerabilities before they're public knowledge: Traditional vulnerability scanning only catches what's already been disclosed as a CVE. We needed a way to surface risk earlier.",
			"Remediation fatigue: Finding a vulnerability is only half the problem. Security teams were drowning in findings with no realistic path to fixing them, burning engineering time on false positives.",
			"Meeting the compliance bar of regulated industries: Enterprise and government customers required audit-ready evidence, tenant isolation, and certifications like SOC 2 Type II, FedRAMP High, and IL7.",
			"Scaling from single-tenant tool to multi-tenant platform: As the customer base grew, the architecture had to support strict tenant isolation, org hierarchies, and role-based access."
		],
		solutions: [
			"Built a unified data model connecting SBOMs, vulnerabilities, cloud assets, APIs, and compliance controls into a queryable graph to provide a single source of truth.",
			"Engineered deep dependency-tree scanning that goes beyond top-level packages to surface risk buried in transitive dependencies.",
			"Developed taint-analysis-based detection capable of surfacing zero-day-class risk before a CVE is ever assigned.",
			"Designed autonomous remediation workflows that generate fix pull requests automatically, cutting the manual triage-to-fix cycle from days to minutes.",
			"Cut false positives dramatically through smarter reachability and context-aware analysis.",
			"Built compliance automation from the ground up — automated evidence collection, control mapping, and audit-ready reporting for SOC 2 Type II, FedRAMP High, and IL7.",
			"Architected strict multi-tenant isolation, role-based access controls, and audit trails so the platform could scale to enterprise and government customers."
		],
		features: [
			"Full-depth SBOM generation and dependency-tree scanning (SCA)",
			"Pre-CVE / zero-day risk discovery via taint analysis",
			"Autonomous, AI-generated fix pull requests",
			"SAST, DAST, IaC, container, Kubernetes, and secrets scanning",
			"Cloud security posture management (CSPM) across AWS, Azure, GCP",
			"API security posture management (discovery, OWASP API Top 10 coverage)",
			"Compliance automation across SOC 2, ISO 27001, HIPAA, PCI-DSS, NIST, GDPR, FedRAMP",
			"AI-native security posture management (model inventory, prompt-injection check, LLM supply chain check)",
			"Vendor and third-party risk management (TPRM)",
			"Real-time alerting, incident workflows, and SOC-style investigation tooling",
			"Deep integrations: GitHub, GitLab, Bitbucket, Azure DevOps, Slack, Jira, ServiceNow",
			"MCP-based agentic access for conversational security operations querying"
		],
		results: [
			{ metric: "MTTR Reduction", value: "-85%" },
			{ metric: "False Positives Cut", value: "90%" },
			{ metric: "Vulnerability Depth", value: "Full Transitive" },
			{ metric: "Compliance Readiness", value: "FedRAMP High & IL7" },
			{ metric: "Time to Market", value: "18 Months" },
			{ metric: "Platform Scope", value: "Zero to Enterprise Suite" }
		],
		videoUrl: "",
		galleryImages: [],
		galleryGifs: []
	}
};

/* ── Custom Case Study 3D Hero Section ──────────────────────── */
function ProjectDetailsHero({ project }: { project: ProjectDetail }) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const containerRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		setMousePosition({ x, y });
	};

	const handleMouseLeave = () => {
		setMousePosition({ x: 0, y: 0 });
	};

	return (
		<section 
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="relative w-[95%] max-w-[1600px] mx-auto rounded-[36px] mt-2 mb-16 overflow-hidden p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border border-border/10 shadow-2xl transition-all duration-700 bg-transparent"
			style={{
				background: "var(--glass-bg)",
				backdropFilter: "blur(24px)",
				transform: `perspective(1000px) rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * 8}deg)`,
				willChange: "transform",
			}}
		>
			{/* Local 3D Cube & Grid Styles */}
			<style>{`
				@keyframes rotateCube {
					0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
					100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
				}
				.cube-container {
					perspective: 1200px;
					width: min(220px, 45vw);
					height: min(220px, 45vw);
					position: relative;
					transform-style: preserve-3d;
				}
				.cube-3d {
					width: 100%;
					height: 100%;
					position: absolute;
					transform-style: preserve-3d;
					animation: rotateCube 20s linear infinite;
				}
				.cube-face {
					position: absolute;
					width: 100%;
					height: 100%;
					border: 1.5px solid rgba(59, 130, 246, 0.35);
					background: rgba(59, 130, 246, 0.06);
					backdrop-filter: blur(6px);
					display: flex;
					align-items: center;
					justify-content: center;
					box-shadow: inset 0 0 40px rgba(59, 130, 246, 0.15);
					transition: border-color 0.3s ease, background-color 0.3s ease;
				}
				.dark .cube-face {
					border: 1.5px solid rgba(147, 51, 234, 0.4);
					background: rgba(147, 51, 234, 0.04);
					box-shadow: inset 0 0 40px rgba(147, 51, 234, 0.1);
				}
				.face-front  { transform: rotateY(  0deg) translateZ(min(110px, 22.5vw)); }
				.face-back   { transform: rotateY(180deg) translateZ(min(110px, 22.5vw)); }
				.face-right  { transform: rotateY( 90deg) translateZ(min(110px, 22.5vw)); }
				.face-left   { transform: rotateY(-90deg) translateZ(min(110px, 22.5vw)); }
				.face-top    { transform: rotateX( 90deg) translateZ(min(110px, 22.5vw)); }
				.face-bottom { transform: rotateX(-90deg) translateZ(min(110px, 22.5vw)); }

				.holo-ring-1 {
					position: absolute;
					width: 320px;
					height: 320px;
					border-radius: 50%;
					border: 1px dashed rgba(59, 130, 246, 0.25);
					transform: rotateX(75deg) rotateY(15deg);
					animation: spinRing 25s linear infinite;
				}
				.holo-ring-2 {
					position: absolute;
					width: 380px;
					height: 380px;
					border-radius: 50%;
					border: 1px dotted rgba(147, 51, 234, 0.2);
					transform: rotateX(75deg) rotateY(-15deg);
					animation: spinRingRev 30s linear infinite;
				}
				@keyframes spinRing {
					from { transform: rotateX(75deg) rotateY(15deg) rotateZ(0deg); }
					to { transform: rotateX(75deg) rotateY(15deg) rotateZ(360deg); }
				}
				@keyframes spinRingRev {
					from { transform: rotateX(70deg) rotateY(-10deg) rotateZ(360deg); }
					to { transform: rotateX(70deg) rotateY(-10deg) rotateZ(0deg); }
				}
			`}</style>

			{/* Perspective Grid Floor */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ perspective: "1000px" }}>
				<div
					className="absolute left-[-20%] right-[-20%] bottom-[-50%] h-[120%] opacity-40 dark:opacity-20"
					style={{ 
						transform: "rotateX(65deg)", 
						transformOrigin: "center bottom",
						backgroundImage: `linear-gradient(to right, rgba(59,130,246,0.1) 1px, transparent 1px),
										  linear-gradient(to bottom, rgba(59,130,246,0.1) 1px, transparent 1px)`,
						backgroundSize: "60px 60px"
					}}
				/>
			</div>

			{/* Glowing Background Ambience */}
			<div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
			<div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/80 dark:bg-accent/10 rounded-full blur-[150px] pointer-events-none z-0" />

			{/* Content Columns */}
			<div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
				{/* Left Side: Dynamic Balanced Text Area */}
				<div className="flex-1 text-left flex flex-col items-start">
					{/* Category Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
						<span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
						<span className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary">
							{project.category}
						</span>
					</div>

					{/* Optimized Balanced Heading */}
					<h1 
						className="font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.2] text-foreground"
						style={{
							fontFamily: '"Outfit", sans-serif'
						}}
					>
						<span className="block mb-2 text-foreground/45 text-lg font-bold tracking-widest uppercase">CASE STUDY</span>
						<span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary/80 bg-clip-text text-transparent dark:from-white dark:via-foreground/95 dark:to-primary/70">
							{project.title}
						</span>
					</h1>

					{/* Subtitle / Description */}
					<p className="text-foreground/60 dark:text-foreground/45 text-base md:text-lg mt-6 max-w-2xl leading-relaxed font-light">
						{project.description}
					</p>

					{/* Inline Metas Bar */}
					<div className="flex flex-wrap gap-4 mt-8 w-full border-t border-foreground/5 pt-6">
						<div className="flex items-center gap-3 bg-foreground/5 dark:bg-white/5 px-4 py-3 rounded-2xl border border-border/10">
							<Server className="w-4 h-4 text-primary" />
							<div>
								<span className="text-[9px] uppercase tracking-wider text-muted-foreground block font-bold">Client</span>
								<span className="text-xs font-semibold text-foreground">{project.client}</span>
							</div>
						</div>
						<div className="flex items-center gap-3 bg-foreground/5 dark:bg-white/5 px-4 py-3 rounded-2xl border border-border/10">
							<Clock className="w-4 h-4 text-accent" />
							<div>
								<span className="text-[9px] uppercase tracking-wider text-muted-foreground block font-bold">Duration</span>
								<span className="text-xs font-semibold text-foreground">{project.duration}</span>
							</div>
						</div>
						<div className="flex items-center gap-3 bg-foreground/5 dark:bg-white/5 px-4 py-3 rounded-2xl border border-border/10">
							<Activity className="w-4 h-4 text-green-500" />
							<div>
								<span className="text-[9px] uppercase tracking-wider text-muted-foreground block font-bold">Status</span>
								<span className="text-xs font-semibold text-foreground">Production Live</span>
							</div>
						</div>
					</div>
				</div>

				{/* Right Side: Simple Hardware-Accelerated 3D Centerpiece */}
				<div className="flex-shrink-0 w-full lg:w-auto flex items-center justify-center relative min-h-[340px] px-8">
					{/* Decorative Holographic Rings */}
					<div className="holo-ring-1" />
					<div className="holo-ring-2" />

					{/* 3D Cube Component */}
					<div className="cube-container">
						<div className="cube-3d">
							{/* Front: Shield */}
							<div className="cube-face face-front">
								<Shield className="w-12 h-12 text-blue-500 filter drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
							</div>
							{/* Back: Lock */}
							<div className="cube-face face-back">
								<Lock className="w-12 h-12 text-purple-500 filter drop-shadow-[0_0_15px_rgba(147,51,234,0.6)]" />
							</div>
							{/* Right: CPU */}
							<div className="cube-face face-right">
								<Cpu className="w-12 h-12 text-cyan-400 filter drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
							</div>
							{/* Left: Activity */}
							<div className="cube-face face-left">
								<Activity className="w-12 h-12 text-green-400 filter drop-shadow-[0_0_15px_rgba(74,222,128,0.6)]" />
							</div>
							{/* Top: Secure label */}
							<div className="cube-face face-top flex flex-col gap-1">
								<Layers className="w-6 h-6 text-yellow-500" />
								<span className="text-[9px] tracking-widest text-foreground/50 font-mono">SECURE</span>
							</div>
							{/* Bottom: Platform label */}
							<div className="cube-face face-bottom flex flex-col gap-1">
								<Server className="w-6 h-6 text-red-400" />
								<span className="text-[9px] tracking-widest text-foreground/50 font-mono">PLATFORM</span>
							</div>
						</div>
					</div>

					{/* Glowing base under the cube */}
					<div 
						className="absolute bottom-6 w-48 h-10 rounded-full blur-[8px] opacity-60 pointer-events-none"
						style={{
							background: "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.4), transparent 75%)"
						}}
					/>
				</div>
			</div>
		</section>
	);
}

export default function ProjectDetails() {
	const { projectId } = useParams<{ projectId: string }>();

	if (!projectId || !projectsData[projectId]) {
		return <Navigate to="/work" replace />;
	}

	const project = projectsData[projectId];

	return (
		<>
			<SEO
				title={`${project.title} - Case Study`}
				description={project.overview.slice(0, 160)}
				canonical={`/work/${projectId}`}
				keywords={project.technologies.join(", ")}
			/>
			<ProjectDetailsHero project={project} />

			<div className="w-[90%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
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
					</div>
				</section>

				{/* Media Section: Video -> Image Carousel -> GIF Carousel */}
				{(project.videoUrl || (project.galleryImages && project.galleryImages.length > 0) || (project.galleryGifs && project.galleryGifs.length > 0)) && (
					<section className="space-y-12">
						{/* Video Section */}
						{project.videoUrl && (
							<div>
								<PageHeading
									preTitle="Project"
									mainTitle="Video"
									postTitle="Demo"
								/>
								<div className="mt-8 rounded-xl border border-border bg-white/50 dark:bg-foreground/5 min-h-[500px] flex items-center justify-center">
									<video
										src={project.videoUrl}
										controls
										className="w-full h-full object-contain max-h-[600px]"
									>
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						)}

						{/* Image Carousel */}
						{project.galleryImages && project.galleryImages.length > 0 && (
							<div>
								<PageHeading
									preTitle="Project"
									mainTitle="Gallery"
									postTitle=""
								/>
								<div className="mt-8">
									<Carousel items={project.galleryImages} type="image" />
								</div>
							</div>
						)}

						{/* GIF Carousel */}
						{project.galleryGifs && project.galleryGifs.length > 0 && (
							<div>
								<PageHeading
									preTitle="Project"
									mainTitle="GIFs"
									postTitle=""
								/>
								<div className="mt-8">
									<Carousel items={project.galleryGifs} type="image" />
								</div>
							</div>
						)}
					</section>
				)}

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
								className="bg-white/50 dark:bg-foreground/10 border border-border rounded-lg px-4 py-2 text-foreground font-medium"
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
								className="bg-white/50 dark:bg-foreground/5 border border-border rounded-lg p-4 flex items-start gap-3"
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
					<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
						{project.results.map((result, idx) => (
							<div
								key={idx}
								className="relative bg-gradient-to-br from-foreground/10 to-foreground/5 border border-border rounded-xl p-6 overflow-hidden"
							>
								<div className="absolute -top-4 -right-4 w-20 h-20 bg-white/50 dark:bg-foreground/5 rounded-full"></div>
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
