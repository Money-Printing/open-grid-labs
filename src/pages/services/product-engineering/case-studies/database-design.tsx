import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { 
	ArrowLeft, 
	BrainCircuit, 
	ArrowRight, 
	CheckCircle2, 
	Terminal, 
	Layers, 
	ShieldCheck, 
	Workflow, 
	Cpu, 
	Quote as QuoteIcon, 
	Activity, 
	HelpCircle, 
	ChevronDown, 
	Sparkles,
	Database
} from "lucide-react";
import SEO from "../../../../components/seo";

const STATS = [
	{ value: "28", label: "Core database tables redesigned or normalized", accent: "from-blue-400 to-indigo-500" },
	{ value: "43%", label: "Reduction in slow query incidents", accent: "from-indigo-400 to-violet-500" },
	{ value: "51%", label: "Faster analytics query performance", accent: "from-violet-500 to-purple-500" },
	{ value: "12 wk", label: "From data sprawl to stable schema foundation", accent: "from-purple-400 to-blue-600" }
];

const CHALLENGES = [
	{ text: "Backend logic had grown organically, creating unclear ownership and duplicated service behavior" },
	{ text: "Client teams lacked consistent contracts, error handling, rate limits, and operational dashboards" },
	{ text: "Data flows and integrations were difficult to trace when incidents or performance issues occurred" },
	{ text: "Security, permissions, validation, and audit requirements were handled unevenly across endpoints" },
	{ text: "Release confidence was low because testing, rollback, monitoring, and runbooks were incomplete" }
];

const SOLUTIONS = [
	{ text: "A production backend blueprint with clear service boundaries, contracts, data ownership, and release paths" },
	{ text: "Reusable patterns for validation, authorization, error handling, rate limiting, logging, and retries" },
	{ text: "Data modeling, migrations, integration tests, and contract tests aligned to real product workflows" },
	{ text: "Observability dashboards for latency, throughput, errors, queue depth, dependency health, and usage" },
	{ text: "Documentation, runbooks, and team handoff practices so the backend could evolve safely after launch" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Clients", items: ["Web app", "Mobile app", "Admin tools", "Partner clients", "Internal services"], color: "hsl(210,100%,45%)" },
	{ title: "Services", items: ["API layer", "Service modules", "Validation", "Authorization", "Business logic"], color: "hsl(220,100%,45%)" },
	{ title: "Data", items: ["Databases", "Cache", "Queues", "Object storage", "External integrations"], color: "hsl(230,100%,45%)" },
	{ title: "Operate", items: ["Logs", "Metrics", "Tracing", "Alerts", "Runbooks"], color: "hsl(240,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Architecture, Contracts & Risk Review (Weeks 1-3)",
		desc: "OpenGridLabs audited the existing backend architecture, service dependencies, data flows, security controls, operational incidents, and release process. The team defined target contracts, ownership boundaries, quality gates, and rollout milestones.",
		accent: "from-blue-400 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "Build, Integrate & Validate (Weeks 4-8)",
		desc: "The team implemented the backend capability with service modules, data migrations, validation, authorization, integration tests, observability, and deployment automation. Critical paths were tested against real traffic patterns and failure modes.",
		accent: "from-indigo-400 to-violet-500"
	},
	{
		number: "Phase 3",
		title: "Launch, Monitoring & Handoff (Weeks 9-10)",
		desc: "The final phase covered production rollout, monitoring dashboards, alert thresholds, rollback plans, documentation, and team enablement. OpenGridLabs handed over runbooks and architecture notes so client engineers could extend the system safely.",
		accent: "from-violet-500 to-purple-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Core tables", before: "Legacy schema", after: "28 redesigned tables", change: "Stabilized" },
	{ metric: "Slow query incidents", before: "Baseline", after: "57% of baseline", change: "-43%" },
	{ metric: "Analytics query speed", before: "Baseline", after: "1.51x faster", change: "Faster" },
	{ metric: "Data integrity", before: "Application-only checks", after: "Constraints and validations", change: "Improved" },
	{ metric: "Migration process", before: "Manual scripts", after: "Versioned migrations", change: "Repeatable" }
];

const SUCCESS_FACTORS = [
	{
		title: "Contracts came first",
		desc: "The team defined clear request, response, error, permission, and ownership expectations before implementation, reducing ambiguity between clients and services."
	},
	{
		title: "Failure modes were designed intentionally",
		desc: "Retries, timeouts, idempotency, dead-letter handling, rollback paths, and alerts were part of the build instead of afterthoughts."
	},
	{
		title: "Observability matched business workflows",
		desc: "Dashboards connected technical signals to product flows, helping teams diagnose incidents and understand impact faster."
	},
	{
		title: "Documentation made the system extendable",
		desc: "Runbooks, architecture notes, and test patterns gave client engineers a safe path for future changes."
	}
];

const FAQS = [
	{
		q: "What is Database Design?",
		a: "Database Design is a backend development capability that supports server-side product behavior, data processing, integrations, security, reliability, or operational workflows. It can include APIs, databases, queues, authentication, caching, storage, admin tools, and real-time infrastructure depending on the system need."
	},
	{
		q: "Why do companies invest in Database Design?",
		a: "Companies invest in Database Design to improve scalability, reliability, security, developer velocity, data quality, and production visibility. The strongest results come when architecture, implementation, testing, observability, and operational ownership are planned together."
	}
];

export default function DatabaseDesignCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Database Design Case Study | OpenGridLabs"
				description="How OpenGridLabs designed database structures, indexes, constraints, migrations, and views — stabilizing core schemas and increasing analytics performance by 1.51x."
				canonical="/services/product-engineering/database-design"
				keywords="Database Design, Data Modeling, Schema Design, Database Optimization, SQL Architecture, Indexes, Migrations, Data Integrity"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(210,100%,40%) 0%, hsl(220,100%,35%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
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
					<div className="grid lg:grid-cols-12 gap-12 items-start">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							<div className="flex items-center gap-3">
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 backdrop-blur-md">
									Case Study · Backend Development
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Database Design Stabilized Core Data Models for Scale and Reporting
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A growing product had critical data spread across tables that were difficult to query, migrate, and reason about. OpenGridLabs redesigned database structures, indexes, constraints, migrations, and reporting-friendly views to support product growth and analytics.
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
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-blue-500" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-blue-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">Data-heavy SaaS platform (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scope</span>
										<span className="text-base font-semibold text-foreground">28 core tables redesigned</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">12 weeks to rollout</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Schema Design · Indexes · Migrations · Data Quality</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Floating Glowing Stats Grid */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-20 relative z-10">
					<div className="grid md:grid-cols-4 gap-6">
						{STATS.map((stat, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.08 }}
								whileHover={{ scale: 1.03, y: -5 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-blue-400 transition-colors">
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
								<BrainCircuit className="w-5 h-5 text-blue-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-blue-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The client had a growing product surface with more users, more integrations, more data movement, and more operational expectations than the original backend could comfortably support. Teams were dealing with slow releases, unclear service boundaries, duplicate logic, fragile jobs, and limited production visibility.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The company needed Database Design that could move beyond quick fixes and support real product growth. OpenGridLabs designed the backend architecture, contracts, data flows, security controls, deployment process, and observability needed to make the capability reliable in production.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-blue-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
									<Database className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is Database Design?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Database Design is a backend development capability focused on building reliable server-side systems, service contracts, data flows, integrations, security controls, and operational tooling. In production, it requires clear architecture, testing, observability, deployment discipline, and maintainable ownership patterns.
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
							Five Backend Engineering Gaps Resolved
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built database design to secure data integrity and improve query speeds.
						</p>
					</div>

					<div className="space-y-6">
						{CHALLENGES.map((challenge, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: idx * 0.05 }}
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-blue-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
							>
								<div className="grid lg:grid-cols-12 gap-8 items-center">
									<div className="lg:col-span-5 flex gap-4 items-start">
										<div className="w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0 flex items-center justify-center text-red-500 font-bold border border-red-500/20">
											{idx + 1}
										</div>
										<div>
											<span className="text-xs uppercase text-red-500 font-bold tracking-widest block mb-1">Challenge</span>
											<p className="text-foreground/90 font-medium text-base md:text-lg">{challenge.text}</p>
										</div>
									</div>

									<div className="hidden lg:flex lg:col-span-1 justify-center">
										<ArrowRight className="w-6 h-6 text-blue-400" />
									</div>

									<div className="lg:col-span-6 flex gap-4 items-start border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
										<div className="w-8 h-8 rounded-full bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-500 border border-green-500/20">
											<CheckCircle2 className="w-5 h-5" />
										</div>
										<div>
											<span className="text-xs uppercase text-green-500 font-bold tracking-widest block mb-1">Solution Delivered</span>
											<p className="text-foreground font-semibold text-base md:text-lg">{SOLUTIONS[idx].text}</p>
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
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-blue-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-400">Blueprint</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									System Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-blue-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs designed a backend architecture that connected application clients, service contracts, data models, infrastructure, security, and operational monitoring. The result was a maintainable foundation that could support current workloads and future product expansion.
								</p>

								<div className="flex items-start gap-4 p-5 rounded-2xl border border-blue-500/20 bg-blue-500/5 text-blue-350">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Design backend capabilities as operating foundations:</strong> The implementation focused on more than shipping endpoints. Each capability included contracts, data ownership, observability, failure handling, and team practices so the backend could support product growth after launch.
									</p>
								</div>
							</div>

							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Database Design Architecture Layers
								</h3>
								
								<div className="flex flex-col gap-3">
									{ARCHITECTURE_STAGES.map((stage, idx) => (
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
							The engagement ran across three phases, moving from architecture and contract design into implementation, hardening, launch, and operational enablement.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-20" />
						
						{PHASES.map((phase, idx) => (
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
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(210,100%,45%)" : idx === 1 ? "hsl(220,100%,45%)" : "hsl(230,100%,45%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3.5 py-1 rounded-full border border-blue-400/20">
											{phase.number}
										</span>
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-foreground">{phase.title}</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">{phase.desc}</p>
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
							Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from clearer service boundaries, more reliable data flows, automated checks, and better production visibility.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-blue-400">After</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{TABLE_RESULTS.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-blue-400 font-bold text-base">{row.after}</td>
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
						<div className="absolute top-8 left-10 text-blue-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"The work made database design feel like a real platform capability instead of a pile of backend fixes. We got clearer contracts, safer releases, and the visibility we needed to operate with confidence."
							</p>
							<div className="w-12 h-px bg-blue-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— VP of Engineering</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential Software Platform</p>
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
						{SUCCESS_FACTORS.map((factor, idx) => (
							<div 
								key={idx} 
								className="glass-panel p-8 md:p-12 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-blue-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-blue-400" />
									<h3 className="text-xl md:text-2xl font-bold text-foreground">{factor.title}</h3>
								</div>
								<p className="text-muted-foreground text-sm md:text-base leading-relaxed">{factor.desc}</p>
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
						{FAQS.map((faq, idx) => {
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
											<HelpCircle className="w-5 h-5 text-blue-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} />
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
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-blue-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-blue-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Ready to strengthen your database with Database Design?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs designs and builds backend systems for database design, combining architecture, secure service contracts, data design, integrations, testing, observability, and production rollout support.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-blue-400 to-indigo-500 hover:shadow-blue-400/20"
									style={{ boxShadow: `0 10px 30px rgba(59,130,246,0.2)` }}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/product-engineering"
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
