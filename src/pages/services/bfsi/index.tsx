import React, { useRef } from "react";
import { Link } from "react-router";
import SEO from "../../../components/seo";
import { slugify } from "../../../utils/slugify";
import { faAws, faJava, faPython } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	ArrowRight, BarChart2, CreditCard, Database, FileText,
	Landmark, Lock, Server, Shield, TrendingUp
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";

const bankingItems = [
	"Core Banking Systems", "Digital Banking Portals", "Payment Processing", "Open Banking APIs",
	"Trade Finance", "Loan Origination", "Treasury Management", "Fraud Detection",
	"Real-time Settlements", "Mobile Banking Apps", "SWIFT Integration", "Card Management"
];

const financialServicesItems = [
	"Wealth Management Platforms", "Investment Analytics", "Algorithmic Trading", "Risk Management",
	"Portfolio Optimization", "Regulatory Reporting", "KYC / AML Compliance", "ESG Analytics",
	"Fund Accounting", "Derivatives Pricing", "Market Data Feeds", "Financial Dashboards"
];

const insuranceTechItems = [
	"Policy Management Systems", "Claims Processing", "Underwriting Automation", "Actuarial Analytics",
	"Customer Self-Service Portals", "Premium Calculation Engines", "Reinsurance Platforms", "Document OCR & AI",
	"Loss Forecasting", "Agent & Broker Portals", "Compliance Reporting", "Telematics Integration"
];

const servicesData = [
	{ title: 'Banking', items: bankingItems, highlight: '#F59E0B' },
	{ title: 'Financial Services', items: financialServicesItems, highlight: '#10B981' },
	{ title: 'Insurance Tech', items: insuranceTechItems, highlight: '#6366F1' },
];

const steps = [
	{ number: "01", title: "Regulatory Assessment", desc: "We begin by analysing your compliance landscape — PCI-DSS, GDPR, Basel III, IRDAI — to map every regulatory constraint before a single line of code is written.", accent: "from-amber-400 to-yellow-300" },
	{ number: "02", title: "Solution Architecture", desc: "Our architects design secure, cloud-native, event-driven systems purpose-built for high-throughput financial workloads and zero-downtime requirements.", accent: "from-emerald-400 to-teal-400" },
	{ number: "03", title: "Core Engineering", desc: "We build robust transaction engines, real-time data pipelines, and compliant APIs using battle-tested financial-grade technology stacks.", accent: "from-indigo-500 to-blue-400" },
	{ number: "04", title: "Security & Compliance", desc: "End-to-end encryption, role-based access control, audit trails, and penetration testing ensure your platform meets the strictest regulatory standards.", accent: "from-rose-400 to-pink-500" },
	{ number: "05", title: "Integration & QA", desc: "Rigorous system integration testing — covering edge cases, peak loads, and failure scenarios — to guarantee data integrity across every financial flow.", accent: "from-violet-500 to-fuchsia-400" },
	{ number: "06", title: "Go-Live & Monitoring", desc: "Smooth production deployment with 24/7 observability, real-time alerting, and SLA-backed support to protect your customers and your brand.", accent: "from-amber-500 to-orange-400" },
];

const tools = [
	{ icon: faJava, name: "Java / Spring", isFa: true },
	{ icon: faPython, name: "Python", isFa: true },
	{ icon: faAws, name: "AWS", isFa: true },
	{ icon: <Database className="w-8 h-8" />, name: "Oracle DB", isFa: false },
	{ icon: <Database className="w-8 h-8" />, name: "PostgreSQL", isFa: false },
	{ icon: <Server className="w-8 h-8" />, name: "Kafka", isFa: false },
	{ icon: <Server className="w-8 h-8" />, name: "Kubernetes", isFa: false },
	{ icon: <Database className="w-8 h-8" />, name: "Redis", isFa: false },
	{ icon: <BarChart2 className="w-8 h-8" />, name: "Power BI", isFa: false },
	{ icon: <BarChart2 className="w-8 h-8" />, name: "Tableau", isFa: false },
	{ icon: <Shield className="w-8 h-8" />, name: "PCI-DSS", isFa: false },
	{ icon: <Lock className="w-8 h-8" />, name: "OAuth 2.0", isFa: false },
];

// --- Hero ---
function BFSIHero() {
	const containerRef = useRef<HTMLDivElement>(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springConfig = { damping: 30, stiffness: 100, mass: 1 };
	const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
	const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

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
			<div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,11,0.1)_0%,_transparent_60%)]" />

			{/* Floating financial shapes */}
			<motion.div
				className="absolute inset-0 pointer-events-none"
				style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
			>
				{/* Gold ring */}
				<motion.div
					className="absolute top-[15%] left-[15%] w-72 h-72 rounded-full border-[40px] border-amber-400/10 backdrop-blur-xl"
					style={{ transform: "translateZ(-120px)" }}
					animate={{ rotateX: [0, 360], rotateY: [0, 180, 360] }}
					transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
				/>
				{/* Emerald block */}
				<motion.div
					className="absolute top-[55%] right-[12%] w-52 h-52 bg-emerald-400/5 border border-emerald-400/20 rounded-3xl backdrop-blur-2xl"
					style={{ transform: "translateZ(80px)" }}
					animate={{ y: [0, 60, 0], rotateZ: [0, 45, 0] }}
					transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
				/>
				{/* Indigo sphere */}
				<motion.div
					className="absolute top-[25%] right-[30%] w-36 h-36 rounded-full bg-indigo-500/8 border border-indigo-400/20 backdrop-blur-xl"
					style={{ transform: "translateZ(40px)" }}
					animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
					transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
				/>
				{/* Animated bar chart shapes */}
				{[40, 65, 50, 80, 55].map((h, i) => (
					<motion.div
						key={i}
						className="absolute bottom-[20%] rounded-t-lg bg-amber-400/10 border border-amber-400/20"
						style={{
							left: `${25 + i * 6}%`,
							width: "3%",
							transform: `translateZ(${30 + i * 10}px)`,
						}}
						animate={{ height: [`${h * 0.4}px`, `${h}px`, `${h * 0.4}px`] }}
						transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
					/>
				))}
			</motion.div>

			{/* Glassmorphic content card */}
			<motion.div
				className="relative z-10 flex flex-col items-center text-center p-8 md:p-16 rounded-[40px] border border-black/10 dark:border-transparent bg-foreground/[0.01] backdrop-blur-2xl shadow-lg dark:shadow-[0_0_120px_rgba(0,0,0,0.7)] max-w-[90%]"
				style={{
					rotateX: useTransform(tiltX, (v) => v * 0.4),
					rotateY: useTransform(tiltY, (v) => v * 0.4),
					transformStyle: "preserve-3d"
				}}
			>
				<div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
				<div className="absolute bottom-0 left-[30%] right-[30%] h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

				<motion.div
					initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
					className="flex items-center gap-4 mb-8" style={{ transform: "translateZ(40px)" }}
				>
					<div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-amber-500" />
					<span className="text-xs md:text-sm font-bold tracking-[0.5em] uppercase px-4 md:px-6 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 backdrop-blur-xl">
						BFSI & Fintech
					</span>
					<div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-emerald-500" />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
					style={{ transformStyle: "preserve-3d" }}
				>
					<h1 className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 font-black uppercase tracking-tighter leading-none" style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", transform: "translateZ(80px)" }}>
						Finance
					</h1>
					<h2 className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-indigo-400 font-black uppercase tracking-tighter leading-none drop-shadow-lg mt-2" style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", transform: "translateZ(100px)" }}>
						Reimagined.
					</h2>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
					className="mt-10 text-lg md:text-2xl font-light leading-relaxed max-w-2xl text-foreground/80 dark:text-foreground/60" style={{ transform: "translateZ(60px)" }}
				>
					Building compliant, high-performance platforms for <strong className="text-foreground font-medium">Banking, Financial Services & Insurance</strong> — engineered for trust, speed, and scale.
				</motion.p>
			</motion.div>

			<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
		</section>
	);
}

// --- 3D Parallax Card ---
function FramerParallaxCard({ children, highlight, index }: { children: React.ReactNode, highlight: string, index: number }) {
	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);
	const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
	const rotateX = useSpring(useTransform(y, [0, 1], [12, -12]), springConfig);
	const rotateY = useSpring(useTransform(x, [0, 1], [-12, 12]), springConfig);

	return (
		<motion.div
			initial={{ opacity: 0, rotateX: 45, y: 50 }}
			whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
			onMouseMove={(e) => {
				const rect = e.currentTarget.getBoundingClientRect();
				x.set((e.clientX - rect.left) / rect.width);
				y.set((e.clientY - rect.top) / rect.height);
			}}
			onMouseLeave={() => { x.set(0.5); y.set(0.5); }}
			style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
			className="relative group p-6 rounded-3xl border border-black/5 dark:border-transparent bg-foreground/[0.01] backdrop-blur-xl overflow-hidden hover:border-black/20 transition-colors shadow-sm"
		>
			<motion.div
				className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
				style={{
					background: useTransform(
						[x, y],
						([latestX, latestY]: any) => `radial-gradient(circle at ${latestX * 100}% ${latestY * 100}%, ${highlight}30, transparent 70%)`
					)
				}}
			/>
			<div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-black/50 dark:via-white/50 to-transparent" />
			<div style={{ transform: "translateZ(25px)" }}>{children}</div>
		</motion.div>
	);
}

function BFSIServicesGrid() {
	return (
		<section className="w-full flex flex-col items-center py-32 relative z-10 bg-background overflow-hidden">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-amber-500/5 blur-[150px] pointer-events-none" />

			<div className="w-[90%] max-w-[1600px] flex flex-col gap-32 relative z-10 perspective-[2000px]">
				{servicesData.map((category, idx) => (
					<motion.div
						key={idx}
						className="w-full flex flex-col gap-12"
						initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
					>
						<div className="flex items-center gap-8">
							<div className="h-[2px] flex-1" style={{ backgroundImage: `linear-gradient(to right, transparent, ${category.highlight}60)` }} />
							<h3 className="text-4xl md:text-6xl font-display font-bold tracking-wide text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, var(--color-foreground), ${category.highlight})` }}>
								{category.title}
							</h3>
							<div className="h-[2px] flex-1" style={{ backgroundImage: `linear-gradient(to left, transparent, ${category.highlight}60)` }} />
						</div>

						<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
							{category.items.map((item, index) => (
								<Link key={index} to={`/services/bfsi/${slugify(item)}`} className="block cursor-pointer">
									<FramerParallaxCard index={index} highlight={category.highlight}>
										<div className="flex items-center gap-3">
											<div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: category.highlight, boxShadow: `0 0 8px ${category.highlight}` }} />
											<h4 className="text-base font-medium text-foreground/70 group-hover:text-foreground transition-colors">
												{item}
											</h4>
										</div>
									</FramerParallaxCard>
								</Link>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}

// --- Cinematic Timeline ---
function BFSIProcess() {
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
					Delivery Framework
				</motion.h2>
				<motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-foreground/50 mt-6 text-xl tracking-[0.3em] uppercase font-bold">
					Compliant. Secure. On Time.
				</motion.p>
			</div>

			<div className="relative w-[90%] max-w-[1600px] mx-auto perspective-[1500px]">
				<div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-black/10 dark:bg-foreground/5" style={{ transform: "translateZ(-50px)" }}>
					<motion.div className="absolute top-0 w-full bg-gradient-to-b from-amber-400 via-emerald-400 to-transparent" style={{ height: spineHeight, boxShadow: "0 0 20px 2px rgba(245,158,11,0.5)" }} />
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
								<div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
									<motion.div
										className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-lg dark:shadow-[0_0_30px_rgba(255,255,255,0.1)] bg-gradient-to-br ${step.accent}`}
										whileInView={{ scale: [0.8, 1.2, 1] }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-100px" }}
									>
										<span className="text-foreground font-bold text-base md:text-xl drop-shadow-md">{step.number}</span>
									</motion.div>
								</div>

								<div className={`w-[calc(100%-4rem)] md:w-[calc(50%-60px)] pl-2 md:pl-0 ${isLeft ? "md:pr-10 text-left" : "md:pl-10 text-left md:text-right"}`}>
									<div className="group relative p-6 md:p-10 glass-panel rounded-[24px] md:rounded-[32px] border border-black/10 dark:border-transparent hover:border-black/30 transition-all duration-500">
										<div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-[24px] md:rounded-[32px] pointer-events-none`} />
										<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
											{step.title}
										</h3>
										<p className="text-base md:text-lg text-foreground/80 dark:text-foreground/60 leading-relaxed">
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

// --- Tech Stack ---
function BFSITechStack() {
	return (
		<section className="w-full flex flex-col items-center py-40 relative bg-background overflow-hidden">
			<div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent dark:from-amber-900/10 via-background to-background pointer-events-none" />

			<div className="text-center mb-32 relative z-10">
				<motion.h2
					initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
					className="text-5xl md:text-8xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/40"
				>
					Fintech Stack
				</motion.h2>
			</div>

			<div className="w-[90%] max-w-[1600px] flex flex-wrap justify-center gap-8 relative z-10 perspective-[1000px]">
				{tools.map((tool, i) => {
					const yOffset = i % 2 === 0 ? [0, -20, 0] : [0, 20, 0];
					return (
						<motion.div
							key={i}
							initial={{ opacity: 0, scale: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
							whileHover={{ scale: 1.1, z: 50 }}
							className="group relative flex flex-col items-center justify-center w-36 h-36 rounded-full border border-black/10 dark:border-transparent bg-foreground/[0.02] backdrop-blur-xl hover:border-amber-400/50 hover:shadow-lg dark:shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-colors cursor-pointer"
						>
							<motion.div
								animate={{ y: yOffset }}
								transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
								className="flex flex-col items-center justify-center w-full h-full"
							>
								<div className="text-foreground/80 dark:text-foreground/60 group-hover:text-amber-400 transition-colors duration-300 mb-3 drop-shadow-md">
									{tool.isFa
										? <FontAwesomeIcon icon={tool.icon as any} size="2xl" />
										: (tool.icon as React.ReactNode)}
								</div>
								<span className="text-sm font-semibold text-foreground/80 dark:text-foreground/40 group-hover:text-foreground transition-colors text-center px-2">
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

// --- Stats Strip ---
function BFSIStats() {
	const stats = [
		{ icon: <Landmark className="w-7 h-7" />, value: "50+", label: "Financial Institutions Served" },
		{ icon: <CreditCard className="w-7 h-7" />, value: "$2B+", label: "Transaction Volume Processed" },
		{ icon: <TrendingUp className="w-7 h-7" />, value: "99.99%", label: "Platform Uptime Guaranteed" },
		{ icon: <FileText className="w-7 h-7" />, value: "15+", label: "Regulatory Frameworks Covered" },
	];

	return (
		<section className="w-full flex flex-col items-center py-24 relative bg-background overflow-hidden">
			<div className="w-[90%] max-w-[1600px] grid grid-cols-2 lg:grid-cols-4 gap-8">
				{stats.map((stat, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: i * 0.1 }}
						className="flex flex-col items-center text-center p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-foreground/[0.01] backdrop-blur-xl"
					>
						<div className="text-amber-400 mb-4">{stat.icon}</div>
						<span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400 mb-2">
							{stat.value}
						</span>
						<span className="text-sm text-foreground/60 font-medium text-center leading-snug">{stat.label}</span>
					</motion.div>
				))}
			</div>
		</section>
	);
}

// --- Portal Cards ---
function PortalCard({ title, desc, link, color }: { title: string, desc: string, link: string, color: string }) {
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
			className="group relative h-[360px] rounded-[40px] overflow-hidden border border-black/10 dark:border-white/5 flex flex-col justify-end p-12 cursor-pointer"
		>
			<div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
			<div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

			<div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
				<h3 className="text-4xl font-bold text-foreground mb-3 drop-shadow-xl">{title}</h3>
				<p className="text-foreground/70 text-lg mb-8">{desc}</p>
				<a href={link} className="inline-flex items-center gap-3 text-foreground font-semibold uppercase tracking-widest text-sm hover:text-foreground/70 transition-colors">
					Explore <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
				</a>
			</div>
		</motion.div>
	);
}

function BFSINextSteps() {
	return (
		<section className="w-full flex flex-col items-center py-40 relative bg-background overflow-hidden">
			<div className="w-[90%] max-w-[1600px] grid md:grid-cols-2 gap-16 relative z-10 perspective-[2000px]">
				<PortalCard
					title="AI & Data Intelligence"
					desc="Predictive models and data pipelines for smarter financial decisions."
					link="/services/ai-data"
					color="from-violet-600 to-fuchsia-600"
				/>
				<PortalCard
					title="Cloud & Platform"
					desc="Scalable, compliant cloud infrastructure for regulated industries."
					link="/services/cloud-platform"
					color="from-orange-500 to-amber-500"
				/>
			</div>
		</section>
	);
}

export default function ServicesBFSI() {
	return (
		<div className="bg-background min-h-screen font-sans overflow-x-hidden">
			<SEO
				title="BFSI & Fintech Solutions — Banking, Financial Services & Insurance | OpenGridLabs"
				description="Enterprise-grade technology solutions for Banking, Financial Services, and Insurance. We build compliant, high-performance platforms covering core banking, wealth management, InsurTech, and regulatory reporting."
				canonical="/services/bfsi"
				keywords="BFSI technology, banking software, fintech solutions, insurance tech, core banking, payment processing, wealth management platform, KYC AML, regulatory compliance, OpenGridLabs"
			/>

			<BFSIHero />
			<BFSIServicesGrid />
			<BFSIStats />
			<BFSIProcess />
			<BFSITechStack />
			<BFSINextSteps />
		</div>
	);
}
