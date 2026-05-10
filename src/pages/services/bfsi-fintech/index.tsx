import React, { useRef } from "react";
import SEO from "../../../components/seo";
import { faDocker, faJava, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	ArrowRight, BarChart3, CreditCard, Database, FileCheck,
	Lock, Network, Server, Shield, TrendingUp, Wallet, Zap
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";

// ── Data ─────────────────────────────────────────────────────────────────────

const bankingItems = [
	"Core Banking Systems", "Digital Wallet Integration", "Payment Gateway Development",
	"Open Banking APIs", "Real-Time Payments (UPI/SWIFT)", "Loan Origination Platforms",
	"Account Management Systems", "Omnichannel Banking", "BNPL Solutions", "Card Management Systems",
	"Treasury Management", "Banking-as-a-Service",
];

const insuranceItems = [
	"Policy Administration Systems", "Claims Processing Automation", "Underwriting Engines",
	"InsurTech Platforms", "Actuarial Modeling", "Risk Assessment Tools",
	"Customer Self-Service Portals", "Fraud Detection for Insurance", "Reinsurance Systems",
	"Digital Distribution Platforms", "IoT-Based Insurance", "Micro-Insurance Solutions",
];

const capitalMarketsItems = [
	"Algorithmic Trading Systems", "Portfolio Management Platforms", "Risk Analytics Engines",
	"Market Data Aggregation", "High-Frequency Trading (HFT)", "Derivatives Pricing",
	"Order Management Systems", "FIX Protocol Integration", "Trade Surveillance",
	"Backtesting Frameworks", "Wealth Management Portals", "Robo-Advisory Platforms",
];

const regtechItems = [
	"KYC / AML Automation", "Transaction Monitoring", "Fraud Detection & Prevention",
	"Regulatory Reporting (MiFID, Basel)", "Data Privacy Compliance (GDPR)", "Identity Verification",
	"Anti-Fraud ML Models", "Sanctions Screening", "Audit Trail Systems",
	"Risk Rating Engines", "Compliance Dashboards", "Digital Onboarding",
];

const servicesData = [
	{ title: "Banking & Payments",       items: bankingItems,        highlight: "hsl(45,100%,55%)"   },
	{ title: "InsurTech",                items: insuranceItems,      highlight: "hsl(160,100%,42%)"  },
	{ title: "Capital Markets & Trading",items: capitalMarketsItems, highlight: "hsl(210,100%,60%)"  },
	{ title: "RegTech & Compliance",     items: regtechItems,        highlight: "hsl(280,100%,65%)"  },
];

const steps = [
	{ number: "01", title: "Domain Discovery", desc: "Deep-dive into your business model, regulatory landscape, and existing infrastructure to map risk, compliance requirements, and opportunity areas.", accent: "from-yellow-400 to-amber-500" },
	{ number: "02", title: "Compliance Architecture", desc: "Design a security-first architecture that satisfies PCI-DSS, SOC2, ISO 27001, GDPR, and regional regulatory mandates from the ground up.", accent: "from-emerald-400 to-teal-500" },
	{ number: "03", title: "Core Platform Engineering", desc: "Build high-throughput, fault-tolerant systems — from real-time payment rails to event-driven microservices — capable of handling millions of transactions per day.", accent: "from-blue-400 to-cyan-500" },
	{ number: "04", title: "Risk & Fraud Integration", desc: "Embed ML-powered fraud detection, real-time transaction monitoring, AML screening, and behavioral analytics directly into the transaction pipeline.", accent: "from-purple-400 to-fuchsia-500" },
	{ number: "05", title: "Security Hardening & Audit", desc: "Penetration testing, vulnerability assessments, threat modelling, and third-party security audits to ensure zero-trust architecture standards.", accent: "from-rose-400 to-pink-500" },
	{ number: "06", title: "Go-Live & Scale", desc: "Phased rollout with real-time dashboards, alerting, SLA monitoring, and 24/7 incident response. Architected to scale to billions of transactions.", accent: "from-amber-400 to-orange-500" },
];

const tools = [
	{ icon: faJava,                                              name: "Java",       isFa: true  },
	{ icon: faPython,                                            name: "Python",     isFa: true  },
	{ icon: faReact,                                             name: "React",      isFa: true  },
	{ icon: <Database className="w-10 h-10" />,                  name: "PostgreSQL", isFa: false },
	{ icon: <Database className="w-10 h-10" />,                  name: "Apache Kafka",isFa: false},
	{ icon: <Server className="w-10 h-10" />,                    name: "Redis",      isFa: false },
	{ icon: faDocker,                                            name: "Docker",     isFa: true  },
	{ icon: <Network className="w-10 h-10" />,                   name: "Kubernetes", isFa: false },
	{ icon: <Shield className="w-10 h-10" />,                    name: "Vault",      isFa: false },
	{ icon: <BarChart3 className="w-10 h-10" />,                 name: "Grafana",    isFa: false },
	{ icon: <Lock className="w-10 h-10" />,                      name: "OAuth 2.0",  isFa: false },
	{ icon: <Zap className="w-10 h-10" />,                       name: "Spring Boot",isFa: false },
];

const stats = [
	{ value: "$2T+",  label: "Transactions Processed" },
	{ value: "99.99%",label: "Uptime SLA"             },
	{ value: "50ms",  label: "Avg Latency"             },
	{ value: "100%",  label: "PCI-DSS Compliant"       },
];

// ── Hero ─────────────────────────────────────────────────────────────────────

function BFSIHero() {
	const containerRef = useRef<HTMLDivElement>(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springCfg = { damping: 30, stiffness: 100, mass: 1 };
	const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springCfg);
	const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springCfg);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
		mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
	};

	// Floating finance nodes
	const nodes = Array.from({ length: 45 }).map((_, i) => ({
		x: Math.random() * 100,
		y: Math.random() * 100,
		z: Math.random() * 400 - 200,
		size: Math.random() * 5 + 2,
		delay: Math.random() * 5,
		duration: Math.random() * 4 + 3,
		color:
			i % 4 === 0 ? "rgba(251,191,36,0.7)"
			: i % 4 === 1 ? "rgba(52,211,153,0.6)"
			: i % 4 === 2 ? "rgba(99,102,241,0.5)"
			: "rgba(255,255,255,0.2)",
	}));

	return (
		<section
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
			className="relative w-full h-[100vh] min-h-[800px] overflow-hidden flex flex-col items-center justify-center bg-background perspective-[1500px]"
		>
			{/* Ambient glow */}
			<div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_50%_50%,_rgba(251,191,36,0.08)_0%,_transparent_60%)]" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(251,191,36,0.04)_0%,_transparent_60%)]" />

			{/* Floating node field */}
			<motion.div
				className="absolute inset-0 pointer-events-none"
				style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
			>
				{nodes.map((n, i) => (
					<motion.div
						key={i}
						className="absolute rounded-full"
						style={{
							left: `${n.x}%`, top: `${n.y}%`,
							width: n.size, height: n.size,
							backgroundColor: n.color,
							boxShadow: `0 0 ${n.size * 3}px ${n.color}`,
							transform: `translateZ(${n.z}px)`,
						}}
						animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
						transition={{ duration: n.duration, repeat: Infinity, delay: n.delay, ease: "easeInOut" }}
					/>
				))}

				{/* Subtle grid lines */}
				<svg className="absolute inset-0 w-full h-full opacity-[0.06]" style={{ transform: "translateZ(-80px)" }}>
					{nodes.slice(0, 18).map((n1, i) =>
						nodes.slice(i + 1, i + 3).map((n2, j) => (
							<motion.line
								key={`${i}-${j}`}
								x1={`${n1.x}%`} y1={`${n1.y}%`}
								x2={`${n2.x}%`} y2={`${n2.y}%`}
								stroke={n1.color} strokeWidth="1"
								animate={{ opacity: [0, 0.6, 0] }}
								transition={{ duration: 4, repeat: Infinity, delay: n1.delay, ease: "easeInOut" }}
							/>
						))
					)}
				</svg>
			</motion.div>

			{/* Glass content card */}
			<motion.div
				className="relative z-10 flex flex-col items-center text-center p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-transparent bg-foreground/[0.01] backdrop-blur-xl shadow-lg dark:shadow-[0_0_120px_rgba(0,0,0,0.6)] max-w-[90%]"
				style={{
					rotateX: useTransform(tiltX, (v) => v * 0.4),
					rotateY: useTransform(tiltY, (v) => v * 0.4),
					transformStyle: "preserve-3d",
				}}
			>
				<div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
				<div className="absolute bottom-0 left-[25%] right-[25%] h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

				<motion.div
					initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="flex items-center gap-4 mb-8"
					style={{ transform: "translateZ(40px)" }}
				>
					<div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-yellow-400" />
					<span className="text-xs md:text-sm font-bold tracking-[0.5em] uppercase px-4 md:px-6 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 backdrop-blur-xl shadow-lg dark:shadow-[0_0_30px_rgba(251,191,36,0.2)]">
						BFSI &amp; Fintech
					</span>
					<div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-emerald-500" />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
					style={{ transformStyle: "preserve-3d" }}
				>
					<h1
						className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 font-black uppercase tracking-tighter leading-none"
						style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", transform: "translateZ(80px)" }}
					>
						Financial
					</h1>
					<h2
						className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-emerald-400 font-black uppercase tracking-tighter leading-none mt-2"
						style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", transform: "translateZ(100px)", filter: "drop-shadow(0 0 50px rgba(251,191,36,0.3))" }}
					>
						Innovation.
					</h2>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }} animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.4 }}
					className="mt-10 text-lg md:text-2xl font-light leading-relaxed max-w-2xl text-foreground/80 dark:text-foreground/60"
					style={{ transform: "translateZ(60px)" }}
				>
					Building <strong className="text-foreground font-medium">mission-critical financial platforms</strong> — from real-time payment rails and{" "}
					<strong className="text-yellow-400 font-medium">algorithmic trading systems</strong> to fraud-resistant core banking and RegTech engines.
				</motion.p>

				{/* Stats bar */}
				<motion.div
					initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-3xl"
					style={{ transform: "translateZ(50px)" }}
				>
					{stats.map((s, i) => (
						<div key={i} className="flex flex-col items-center gap-1">
							<span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
								{s.value}
							</span>
							<span className="text-xs font-semibold uppercase tracking-widest text-foreground/50">{s.label}</span>
						</div>
					))}
				</motion.div>
			</motion.div>

			<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
		</section>
	);
}

// ── Why BFSI section ─────────────────────────────────────────────────────────

const pillars = [
	{ icon: <Shield className="w-8 h-8" />, title: "Security-First Architecture", desc: "Zero-trust design, end-to-end encryption, HSM integration, and layered access controls for every layer of your stack.", color: "from-yellow-400 to-amber-500" },
	{ icon: <TrendingUp className="w-8 h-8" />, title: "High-Throughput Systems", desc: "Event-driven microservices built on Kafka, capable of processing millions of transactions per second with sub-50ms latency.", color: "from-emerald-400 to-teal-500" },
	{ icon: <FileCheck className="w-8 h-8" />, title: "Regulatory Compliance", desc: "Deep expertise in PCI-DSS, SOC 2 Type II, ISO 27001, GDPR, MiFID II, Basel III, RBI, and SEBI frameworks.", color: "from-blue-400 to-indigo-500" },
	{ icon: <Wallet className="w-8 h-8" />, title: "Fintech Innovation", desc: "From open banking APIs and embedded finance to crypto infrastructure and AI-powered robo-advisors.", color: "from-purple-400 to-fuchsia-500" },
	{ icon: <CreditCard className="w-8 h-8" />, title: "Payments Engineering", desc: "Real-time payment integrations with UPI, SWIFT, SEPA, ACH, Visa/Mastercard network APIs and tokenisation.", color: "from-rose-400 to-pink-500" },
	{ icon: <Lock className="w-8 h-8" />, title: "Fraud & Risk Intelligence", desc: "ML-driven AML, transaction monitoring, behavioural biometrics, and real-time fraud scoring built into the core.", color: "from-cyan-400 to-blue-500" },
];

function BFSIPillars() {
	return (
		<section className="w-full flex flex-col items-center py-32 bg-background overflow-hidden relative">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-400/5 blur-[160px] pointer-events-none" />

			<div className="w-[90%] max-w-[1600px] relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }} transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<p className="text-xs font-bold tracking-[0.4em] uppercase text-yellow-400 mb-4">Why OpenGridLabs for Finance</p>
					<h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/40">
						Built for<br />Financial Grade.
					</h2>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{pillars.map((p, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{ duration: 0.6, delay: i * 0.08 }}
							className="group relative p-8 rounded-[28px] glass-panel border border-black/5 dark:border-transparent hover:border-black/20 dark:hover:border-transparent transition-all duration-500 overflow-hidden"
						>
							<div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-[28px] pointer-events-none`} />
							<div className="absolute top-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

							<div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
								{p.icon}
							</div>
							<h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors">{p.title}</h3>
							<p className="text-foreground/60 dark:text-foreground/50 leading-relaxed text-sm">{p.desc}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

// ── Services Grid ─────────────────────────────────────────────────────────────

function ParallaxCard({ children, highlight, index }: { children: React.ReactNode; highlight: string; index: number }) {
	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);
	const cfg = { damping: 20, stiffness: 300, mass: 0.5 };
	const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), cfg);
	const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), cfg);

	return (
		<motion.div
			initial={{ opacity: 0, rotateX: 45, y: 50 }}
			whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
			onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width); y.set((e.clientY - r.top) / r.height); }}
			onMouseLeave={() => { x.set(0.5); y.set(0.5); }}
			style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
			className="relative group p-6 rounded-3xl border border-black/5 dark:border-transparent bg-foreground/[0.01] backdrop-blur-xl overflow-hidden hover:border-black/20 dark:border-transparent transition-colors shadow-lg"
		>
			<motion.div
				className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
				style={{
					background: useTransform(
						[x, y],
						([lx, ly]: any) => `radial-gradient(circle at ${lx * 100}% ${ly * 100}%, ${highlight}30, transparent 70%)`
					),
				}}
			/>
			<div className="absolute top-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-black/30 dark:via-white/30 to-transparent" />
			<div style={{ transform: "translateZ(30px)" }}>{children}</div>
		</motion.div>
	);
}

function BFSIServicesGrid() {
	return (
		<section className="w-full flex flex-col items-center py-32 relative z-10 bg-background overflow-hidden">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-yellow-400/5 blur-[200px] pointer-events-none" />

			<div className="w-[90%] max-w-[1600px] flex flex-col gap-32 relative z-10 perspective-[2000px]">
				{servicesData.map((category, idx) => (
					<motion.div
						key={idx}
						className="w-full flex flex-col gap-12"
						initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
					>
						<div className="flex items-center gap-8">
							<div className="h-[2px] flex-1" style={{ backgroundImage: `linear-gradient(to right, transparent, ${category.highlight}60)` }} />
							<h3
								className="text-4xl md:text-6xl font-display font-bold tracking-wide text-transparent bg-clip-text text-center"
								style={{ backgroundImage: `linear-gradient(to right, var(--color-foreground), ${category.highlight})` }}
							>
								{category.title}
							</h3>
							<div className="h-[2px] flex-1" style={{ backgroundImage: `linear-gradient(to left, transparent, ${category.highlight}60)` }} />
						</div>

						<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
							{category.items.map((item, index) => (
								<ParallaxCard key={index} index={index} highlight={category.highlight}>
									<div className="flex items-center gap-3">
										<div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: category.highlight, boxShadow: `0 0 10px ${category.highlight}` }} />
										<h4 className="text-base font-medium text-foreground/70 group-hover:text-foreground transition-colors leading-snug">
											{item}
										</h4>
									</div>
								</ParallaxCard>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}

// ── Process / Timeline ────────────────────────────────────────────────────────

function BFSIProcess() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
	const spineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

	return (
		<section ref={containerRef} className="w-full flex flex-col items-center py-40 relative bg-background overflow-hidden">
			<div className="text-center mb-32 relative z-10 px-4">
				<motion.h2
					initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
					className="text-5xl md:text-8xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/40"
				>
					Delivery Pipeline
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
					className="text-foreground/50 mt-6 text-xl tracking-[0.3em] uppercase font-bold"
				>
					From Compliance Blueprint to Production
				</motion.p>
			</div>

			<div className="relative w-[90%] max-w-[1600px] mx-auto perspective-[1500px]">
				{/* Animated vertical spine */}
				<div
					className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-black/10 dark:bg-foreground/5"
					style={{ transform: "translateZ(-50px)" }}
				>
					<motion.div
						className="absolute top-0 w-full bg-gradient-to-b from-yellow-400 via-emerald-400 to-transparent"
						style={{ height: spineHeight, boxShadow: "0 0 20px 2px rgba(251,191,36,0.4)" }}
					/>
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
										className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border-4 border-background flex items-center justify-center bg-gradient-to-br ${step.accent}`}
										whileInView={{ scale: [0.8, 1.2, 1] }}
										transition={{ duration: 0.5 }}
										viewport={{ once: true, margin: "-100px" }}
									>
										<span className="text-white font-bold text-base md:text-xl drop-shadow-md">{step.number}</span>
									</motion.div>
								</div>

								<div className={`w-[calc(100%-4rem)] md:w-[calc(50%-60px)] pl-2 md:pl-0 ${isLeft ? "md:pr-10" : "md:pl-10 text-left md:text-right"}`}>
									<div className="group relative p-6 md:p-10 glass-panel rounded-[24px] md:rounded-[32px] border border-black/10 dark:border-transparent hover:border-black/20 dark:border-transparent transition-all duration-500 hover:shadow-lg dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
										<div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 rounded-[24px] md:rounded-[32px] pointer-events-none`} />
										<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{step.title}</h3>
										<p className="text-base md:text-lg text-foreground/70 dark:text-foreground/55 leading-relaxed">{step.desc}</p>
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

// ── Tech Stack ────────────────────────────────────────────────────────────────

function BFSITechStack() {
	return (
		<section className="w-full flex flex-col items-center py-40 relative bg-background overflow-hidden">
			<div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.06)_0%,_transparent_60%)] pointer-events-none" />

			<div className="text-center mb-32 relative z-10 px-4">
				<motion.h2
					initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
					className="text-5xl md:text-8xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/40"
				>
					Technology Stack
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}
					className="text-foreground/50 mt-6 text-lg tracking-[0.3em] uppercase font-semibold"
				>
					Enterprise-Grade. Battle-Tested. Secure.
				</motion.p>
			</div>

			<div className="w-[90%] max-w-[1600px] flex flex-wrap justify-center gap-10 relative z-10 perspective-[1000px]">
				{tools.map((tool, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
						whileHover={{ scale: 1.15, z: 60 }}
						className="group relative flex flex-col items-center justify-center w-40 h-40 rounded-full border border-black/10 dark:border-transparent bg-foreground/[0.01] backdrop-blur-xl hover:border-yellow-400/50 hover:shadow-lg dark:hover:shadow-[0_0_50px_rgba(251,191,36,0.3)] transition-all cursor-pointer"
					>
						<motion.div
							animate={{ y: i % 2 === 0 ? [0, -20, 0] : [0, 20, 0] }}
							transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
							className="flex flex-col items-center justify-center w-full h-full"
						>
							<div className="text-foreground/70 group-hover:text-yellow-400 transition-colors duration-300 mb-3">
								{tool.isFa
									? <FontAwesomeIcon icon={tool.icon as any} className="w-10 h-10" />
									: (tool.icon as React.ReactNode)}
							</div>
							<span className="text-sm font-semibold text-foreground/60 group-hover:text-foreground transition-colors text-center px-2">
								{tool.name}
							</span>
						</motion.div>
					</motion.div>
				))}
			</div>
		</section>
	);
}

// ── Next Steps (Portal Cards) ─────────────────────────────────────────────────

function PortalCard({ title, desc, link, color }: { title: string; desc: string; link: string; color: string }) {
	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);
	const cfg = { damping: 20, stiffness: 200, mass: 0.5 };
	const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), cfg);
	const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), cfg);

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width); y.set((e.clientY - r.top) / r.height); }}
			onMouseLeave={() => { x.set(0.5); y.set(0.5); }}
			style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
			className="group relative h-[400px] rounded-[40px] overflow-hidden border border-black/10 dark:border-transparent flex flex-col justify-end p-12 cursor-pointer glass-panel"
		>
			<div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
			<div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

			<div className="relative z-10" style={{ transform: "translateZ(60px)" }}>
				<h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h3>
				<p className="text-foreground/70 text-lg mb-8">{desc}</p>
				<a href={link} className="inline-flex items-center gap-3 text-foreground font-semibold uppercase tracking-widest text-sm hover:text-foreground/70 transition-colors group/link">
					Explore <ArrowRight className="w-5 h-5 group-hover/link:translate-x-3 transition-transform" />
				</a>
			</div>
		</motion.div>
	);
}

function BFSINextSteps() {
	return (
		<section className="w-full flex flex-col items-center py-40 relative bg-background overflow-hidden">
			<div className="w-[90%] max-w-[1600px] flex flex-col gap-12 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }} className="text-center"
				>
					<h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/40">
						Explore More Services
					</h2>
				</motion.div>
				<div className="grid md:grid-cols-2 gap-10 perspective-[2000px]">
					<PortalCard
						title="AI & Data Intelligence"
						desc="Power your financial models with GenAI and predictive analytics."
						link="/services/ai-data"
						color="from-cyan-500 to-purple-600"
					/>
					<PortalCard
						title="Cloud & Platform"
						desc="Scalable, compliant cloud infrastructure for financial workloads."
						link="/services/cloud-platform"
						color="from-blue-500 to-indigo-600"
					/>
				</div>
			</div>
		</section>
	);
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesBFSIFintech() {
	return (
		<div className="bg-background min-h-screen font-sans overflow-x-hidden">
			<SEO
				title="BFSI & Fintech Engineering Services | OpenGridLabs"
				description="Mission-critical financial platform engineering — core banking, payment gateways, algorithmic trading, InsurTech, AML/KYC compliance, and fraud detection systems built to PCI-DSS and SOC2 standards."
				canonical="/services/bfsi-fintech"
				keywords="BFSI technology, fintech development, core banking software, payment gateway, algorithmic trading, KYC AML compliance, fraud detection, InsurTech, open banking API, regtech, PCI DSS, SOC2"
			/>

			<BFSIHero />
			<BFSIPillars />
			<BFSIServicesGrid />
			<BFSIProcess />
			<BFSITechStack />
			<BFSINextSteps />
		</div>
	);
}
