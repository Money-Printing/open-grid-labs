import React, { useRef } from "react";
import SEO from "../../../components/seo";
import { faAws, faDocker, faGitlab, faGithub, faGoogle, faJava, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Brain, Code, Database, FileCode, LineChart, Network, PieChart, Server, Webhook, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";

const awsItems = [
	"EC2 Instances", "S3 Storage", "AWS Lambda", "Amazon RDS",
	"Elastic Kubernetes (EKS)", "CloudFront CDN", "Auto Scaling", "Load Balancing",
	"VPC Networking", "AWS IAM", "CloudWatch", "Database Migration"
];

const gcpItems = [
	"Compute Engine", "Cloud Run", "BigQuery", "Google Kubernetes (GKE)",
	"Pub/Sub Messaging", "Cloud Storage", "Cloud Functions", "Cloud SQL",
	"Vertex AI", "Cloud Armor", "Data Pipeline", "Multi-cloud Integration"
];

const azureItems = [
	"Azure Virtual Machines", "Azure Kubernetes (AKS)", "Azure Functions", "Cosmos DB",
	"Azure DevOps", "Container Apps", "Azure SQL Database", "App Service",
	"Azure Active Directory", "Infrastructure as Code", "Azure Storage", "Azure Monitor"
];

const cicdItems = [
	"GitHub Actions", "Jenkins Pipelines", "GitLab CI/CD", "ArgoCD GitOps",
	"Terraform IaC", "Ansible Automation", "Docker Builds", "Kubernetes Deployment",
	"Automated Testing", "Release Management", "Code Quality Gates", "Artifact Registry"
];

const servicesData = [
	{ title: 'AWS', items: awsItems, highlight: '#FF9900' },
	{ title: 'GCP', items: gcpItems, highlight: '#4285F4' },
	{ title: 'Azure', items: azureItems, highlight: '#0089D6' },
	{ title: 'CI/CD', items: cicdItems, highlight: '#00D084' },
];

const steps = [
	{ number: "01", title: "Architectural Blueprinting", desc: "Deep analytical discussions to define your business goals, user needs, and the foundational technical requirements.", accent: "from-blue-500 to-cyan-400" },
	{ number: "02", title: "Strategic Roadmap", desc: "Crafting a highly detailed tech stack architecture, strict timelines, and prioritized feature delivery systems.", accent: "from-violet-500 to-fuchsia-400" },
	{ number: "03", title: "Immersive UI/UX", desc: "Designing intuitive, futuristic, and highly responsive interfaces that perfectly align with your brand's digital identity.", accent: "from-amber-400 to-orange-400" },
	{ number: "04", title: "Agile Engineering", desc: "High-velocity iterative development, ensuring robust flexibility, continuous collaboration, and premium code quality.", accent: "from-emerald-400 to-teal-400" },
	{ number: "05", title: "Quality Assurance", desc: "Rigorous stress-testing through automated and manual pipelines to ensure maximum security, stability, and zero-latency performance.", accent: "from-rose-400 to-pink-500" },
	{ number: "06", title: "Deployment & Scaling", desc: "Seamless launch execution followed by continuous 24/7 monitoring, maintenance, and infrastructure scaling.", accent: "from-blue-500 to-indigo-500" },
];

const tools = [
	{ icon: faReact, name: "React" },
	{ icon: <FileCode className="w-8 h-8" />, name: "TypeScript" },
	{ icon: faPython, name: "Python" },
	{ icon: <FileCode className="w-8 h-8" />, name: "Django" },
	{ icon: faJava, name: "Java" },
	{ icon: <Code className="w-8 h-8" />, name: "C++" },
	{ icon: <Database className="w-8 h-8" />, name: "PostgreSQL" },
	{ icon: <Database className="w-8 h-8" />, name: "MongoDB" },
	{ icon: <Database className="w-8 h-8" />, name: "Redis" },
	{ icon: faAws, name: "AWS" },
	{ icon: faGoogle, name: "GCP" },
	{ icon: <Server className="w-8 h-8" />, name: "Azure" },
	{ icon: faDocker, name: "Docker" },
	{ icon: <Server className="w-8 h-8" />, name: "Kubernetes" },
	{ icon: <Server className="w-8 h-8" />, name: "Nginx" },
	{ icon: faGithub, name: "GitHub Actions" },
	{ icon: faGitlab, name: "GitLab CI" },
	{ icon: <Network className="w-8 h-8" />, name: "Terraform" },
	{ icon: <LineChart className="w-8 h-8" />, name: "ChartIQ" },
	{ icon: <Brain className="w-8 h-8" />, name: "TensorFlow" },
	{ icon: <PieChart className="w-8 h-8" />, name: "Grafana" },
	{ icon: <Webhook className="w-8 h-8" />, name: "REST APIs" },
];

// --- Simple Immersive 3D Hero ---
function SoftwareHero() {
	const containerRef = useRef<HTMLDivElement>(null);

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springConfig = { damping: 30, stiffness: 100, mass: 1 };
	const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig);
	const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
		mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
	};

	return (
		<section
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
			className="relative w-full h-[100vh] min-h-[800px] overflow-hidden flex flex-col items-center justify-center bg-background perspective-[1500px]"
		>
			{/* Ambient Deep Space Glow */}
			<div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_50%_50%,_rgba(29,78,216,0.15)_0%,_transparent_60%)]" />

			{/* 3D Rotating Core Engine */}
			<motion.div 
				className="absolute top-1/2 left-1/2 w-[600px] h-[600px] pointer-events-none"
				style={{ x: "-50%", y: "-50%", rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
			>
				{/* Outer Ring */}
				<motion.div 
					className="absolute inset-0 rounded-full border border-blue-500/20"
					animate={{ rotateZ: 360, rotateX: [60, 70, 60], rotateY: [0, 20, 0] }}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
					style={{ transformStyle: "preserve-3d" }}
				/>
				{/* Inner Ring */}
				<motion.div 
					className="absolute inset-[10%] rounded-full border-2 border-purple-500/20 shadow-lg dark:shadow-[0_0_50px_rgba(168,85,247,0.2)_inset]"
					animate={{ rotateZ: -360, rotateX: [40, 20, 40], rotateY: [20, -20, 20] }}
					transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
					style={{ transformStyle: "preserve-3d" }}
				/>
				{/* Core Glow */}
				<motion.div 
					className="absolute inset-[30%] rounded-full bg-blue-500/5 blur-[100px]"
					animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
					transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
				/>
			</motion.div>

			{/* Floating Data Particles */}
			{Array.from({ length: 20 }).map((_, i) => (
				<motion.div
					key={i}
					className="absolute w-2 h-2 rounded-full bg-foreground/30 blur-[1px]"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						transform: `translateZ(${Math.random() * 200 - 100}px)`
					}}
					animate={{
						y: [0, -500],
						opacity: [0, 1, 0],
					}}
					transition={{
						duration: Math.random() * 5 + 5,
						repeat: Infinity,
						delay: Math.random() * 5,
						ease: "linear"
					}}
				/>
			))}

			{/* Floating Glassmorphic Content Card */}
			<motion.div
				className="relative z-10 flex flex-col items-center text-center p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-transparent bg-foreground/[0.01] backdrop-blur-md shadow-lg dark:shadow-[0_0_100px_rgba(0,0,0,0.5)] max-w-[90%]"
				style={{ 
					rotateX: useTransform(tiltX, (v) => v * 0.5), 
					rotateY: useTransform(tiltY, (v) => v * 0.5),
					transformStyle: "preserve-3d" 
				}}
			>
				{/* Top Glare */}
				<div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="flex items-center gap-4 mb-8"
					style={{ transform: "translateZ(40px)" }}
				>
					<div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-blue-500" />
					<span className="text-xs md:text-sm font-bold tracking-[0.5em] uppercase px-4 md:px-6 py-2 rounded-full border border-black/10 dark:border-transparent bg-white/50 dark:bg-foreground/5 text-foreground backdrop-blur-xl shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
						Cloud & Platform Engineering
					</span>
					<div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-purple-500" />
				</motion.div>

				<motion.div 
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
					style={{ transformStyle: "preserve-3d" }}
				>
					<h1 className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 font-black uppercase tracking-tighter leading-none" style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", transform: "translateZ(80px)" }}>
						Digital
					</h1>
					<h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-black uppercase tracking-tighter leading-none drop-shadow-lg dark:shadow-[0_0_60px_rgba(59,130,246,0.3)] mt-2" style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", transform: "translateZ(100px)" }}>
						Ecosystems.
					</h2>
				</motion.div>

				<motion.p 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.4 }}
					className="mt-10 text-lg md:text-2xl font-light leading-relaxed max-w-2xl text-foreground/70 dark:text-foreground/50"
					style={{ transform: "translateZ(60px)" }}
				>
					Architecting hyper-scalable applications and mission-critical backend infrastructure for the <strong className="text-foreground font-medium">next generation of the web.</strong>
				</motion.p>
			</motion.div>
			
			<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
		</section>
	);
}

// --- Framer 3D Parallax Card ---
function FramerParallaxCard({ children, highlight, index }: { children: React.ReactNode, highlight: string, index: number }) {
	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);
	const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
	const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);
	const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), springConfig);

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		const rect = e.currentTarget.getBoundingClientRect();
		x.set((e.clientX - rect.left) / rect.width);
		y.set((e.clientY - rect.top) / rect.height);
	}

	function handleMouseLeave() {
		x.set(0.5);
		y.set(0.5);
	}

	return (
		<motion.div
			initial={{ opacity: 0, rotateX: 45, y: 50 }}
			whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
			className="relative group p-6 rounded-2xl border border-black/5 dark:border-transparent bg-foreground/[0.01] backdrop-blur-md overflow-hidden hover:border-black/20 dark:border-transparent transition-colors"
		>
			<motion.div 
				className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
				style={{ 
					background: useTransform(
						[x, y], 
						([latestX, latestY]: any) => `radial-gradient(circle at ${latestX * 100}% ${latestY * 100}%, ${highlight}30, transparent 60%)`
					)
				}} 
			/>
			<div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-black/50 dark:via-white/50 to-transparent" />
			<div style={{ transform: "translateZ(20px)" }}>{children}</div>
		</motion.div>
	);
}

function SoftwareServicesGrid() {
	return (
		<section className="w-full flex flex-col items-center py-32 relative z-10 bg-background overflow-hidden">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-primary/5 blur-[150px] pointer-events-none" />
			
			<div className="w-[90%] max-w-[1600px] flex flex-col gap-32 relative z-10 perspective-[2000px]">
				{servicesData.map((category, idx) => (
					<motion.div 
						key={idx} 
						className="w-full flex flex-col gap-12"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						<div className="flex items-center gap-8">
							<div className="h-[2px] flex-1 bg-gradient-to-r from-transparent" style={{ backgroundImage: `linear-gradient(to right, transparent, ${category.highlight}60)` }} />
							<h3 className="text-4xl md:text-6xl font-display font-bold tracking-wide text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, var(--color-foreground), ${category.highlight})` }}>
								{category.title}
							</h3>
							<div className="h-[2px] flex-1 bg-gradient-to-l from-transparent" style={{ backgroundImage: `linear-gradient(to left, transparent, ${category.highlight}60)` }} />
						</div>

						<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
							{category.items.map((item, index) => (
								<FramerParallaxCard key={index} index={index} highlight={category.highlight}>
									<h4 className="text-lg font-medium text-foreground/70 group-hover:text-foreground transition-colors">
										{item}
									</h4>
								</FramerParallaxCard>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}

// --- Cinematic Timeline with Vertical Spine ---
function SoftwareProcess() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
	const spineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

	return (
		<section ref={containerRef} className="w-full flex flex-col items-center py-40 relative bg-background overflow-hidden">
			<div className="text-center mb-32 relative z-10">
				<motion.h2 
					initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
					className="text-5xl md:text-8xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/40"
				>
					The Engineering Pipeline
				</motion.h2>
				<motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-foreground/70 dark:text-foreground/50 mt-6 text-xl tracking-[0.3em] uppercase">
					Precision from Concept to Code
				</motion.p>
			</div>

			<div className="relative w-[90%] max-w-[1600px] mx-auto perspective-[1500px]">
				{/* 3D Vertical Spine */}
				<div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-black/10 dark:bg-foreground/5" style={{ transform: "translateZ(-50px)" }}>
					<motion.div className="absolute top-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" style={{ height: spineHeight, boxShadow: "0 0 20px 2px rgba(59,130,246,0.5)" }} />
				</div>

				<div className="flex flex-col gap-12 md:gap-24 relative">
					{steps.map((step, i) => {
						const isLeft = i % 2 === 0;
						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: isLeft ? -50 : 50, rotateY: isLeft ? 15 : -15 }}
								whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
								className={`flex items-center w-full justify-end ${isLeft ? "md:justify-start" : "md:justify-end"}`}
								style={{ transformStyle: "preserve-3d" }}
							>
								{/* Center Node */}
								<div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
									<motion.div 
										className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-lg dark:shadow-[0_0_30px_rgba(255,255,255,0.1)] bg-gradient-to-br ${step.accent}`}
										whileInView={{ scale: [0.8, 1.2, 1] }}
										transition={{ duration: 0.5 }}
										viewport={{ once: true, margin: "-100px" }}
									>
										<span className="text-foreground font-bold text-base md:text-xl drop-shadow-md">{step.number}</span>
									</motion.div>
								</div>

								{/* Content Card */}
								<div className={`w-[calc(100%-4rem)] md:w-[calc(50%-60px)] pl-2 md:pl-0 ${isLeft ? "md:pr-10 text-left" : "md:pl-10 text-left md:text-right"}`}>
									<div className="group relative p-6 md:p-10 glass-panel rounded-[24px] md:rounded-[32px] border border-black/10 dark:border-transparent hover:border-black/30 dark:border-transparent transition-all duration-500 hover:shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
										<div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 rounded-[24px] md:rounded-[32px] pointer-events-none`} />
										<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 transition-all">
											{step.title}
										</h3>
										<p className="text-base md:text-lg text-foreground/80 dark:text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors">
											{step.desc}
										</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

// --- Floating Tech Matrix ---
function SoftwareTechStack() {
	return (
		<section className="w-full flex flex-col items-center py-40 relative bg-background overflow-hidden">
			<div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent dark:from-blue-900/20 via-background to-background pointer-events-none" />
			
			<div className="text-center mb-32 relative z-10">
				<motion.h2 
					initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
					className="text-5xl md:text-8xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/40"
				>
					Technology Matrix
				</motion.h2>
			</div>

			<div className="w-[90%] max-w-[1600px] flex flex-wrap justify-center gap-8 relative z-10 perspective-[1000px]">
				{tools.map((tool, i) => {
					const isFA = (value: any) => value && typeof value === "object" && "iconName" in value;
					const yOffset = i % 2 === 0 ? [0, -20, 0] : [0, 20, 0];

					return (
						<motion.div
							key={i}
							initial={{ opacity: 0, scale: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
							whileHover={{ scale: 1.1, z: 50 }}
							className="group relative flex flex-col items-center justify-center w-36 h-36 rounded-full border border-black/10 dark:border-transparent bg-foreground/[0.02] backdrop-blur-xl hover:border-blue-500/50 hover:shadow-lg dark:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-colors cursor-pointer"
						>
							<motion.div 
								animate={{ y: yOffset }} 
								transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
								className="flex flex-col items-center justify-center w-full h-full"
							>
								<div className="text-foreground/80 dark:text-foreground/60 group-hover:text-blue-400 transition-colors duration-300 mb-3 drop-shadow-md">
									{isFA(tool.icon) ? <FontAwesomeIcon icon={tool.icon as any} size="2xl" /> : (tool.icon as React.ReactNode)}
								</div>
								<span className="text-sm font-semibold text-foreground/80 dark:text-foreground/60 dark:text-foreground/40 group-hover:text-foreground transition-colors text-center px-2">
									{tool.name}
								</span>
							</motion.div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}

// --- 3D Portal Cards (Next Steps) ---
function PortalCard({ title, desc, link, bgImage, color }: { title: string, desc: string, link: string, bgImage: string, color: string }) {
	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);
	const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
	const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), springConfig);
	const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), springConfig);

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			onMouseMove={(e) => {
				const rect = e.currentTarget.getBoundingClientRect();
				x.set((e.clientX - rect.left) / rect.width);
				y.set((e.clientY - rect.top) / rect.height);
			}}
			onMouseLeave={() => { x.set(0.5); y.set(0.5); }}
			style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
			className="group relative h-[400px] rounded-[40px] overflow-hidden border border-black/10 dark:border-transparent flex flex-col justify-end p-12 cursor-pointer shadow-2xl"
		>
			<motion.div 
				className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 mix-blend-overlay"
				style={{ backgroundImage: `url(${bgImage})`, transform: "translateZ(-50px)" }}
				whileHover={{ scale: 1.1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			/>
			<div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent`} />
			<div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${color} mix-blend-color`} />
			
			<div className="relative z-10" style={{ transform: "translateZ(60px)" }}>
				<h3 className="text-5xl font-bold text-foreground mb-4 drop-shadow-xl">{title}</h3>
				<p className="text-foreground/80 text-xl mb-8">{desc}</p>
				<a href={link} className="inline-flex items-center gap-3 text-foreground font-semibold uppercase tracking-widest text-sm hover:text-foreground/70 transition-colors">
					Explore <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
				</a>
			</div>
		</motion.div>
	);
}

function CloudNextSteps() {
	return (
		<section className="w-full flex flex-col items-center py-40 relative bg-background overflow-hidden">
			<div className="w-[90%] max-w-[1600px] grid md:grid-cols-2 gap-16 relative z-10 perspective-[2000px]">
				<PortalCard 
					title="Intelligent Systems" 
					desc="Connect the world with advanced AI." 
					link="/services/ai-data" 
					bgImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
					color="from-indigo-600 to-purple-600"
				/>
				<PortalCard 
					title="Digital Design" 
					desc="Design the future of tomorrow." 
					link="/services/product-engineering" 
					bgImage="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop"
					color="from-emerald-600 to-cyan-600"
				/>
			</div>
		</section>
	);
}

export default function ServicesCloudPlatform() {
	return (
		<div className="bg-background min-h-screen font-sans overflow-x-hidden">
			<SEO
				title="Cloud & Platform Engineering - Web, Mobile & Backend | OpenGridLabs"
				description="Architecting high-performance digital infrastructure including scalable web applications, native mobile apps, and mission-critical backend systems."
				canonical="/services/cloud-platform"
				keywords="software engineering, web architecture, mobile app development, backend systems, scalable infrastructure, OpenGridLabs software"
			/>
			
			<SoftwareHero />
			<SoftwareServicesGrid />
			<SoftwareProcess />
			<SoftwareTechStack />
			<CloudNextSteps />
		</div>
	);
}
