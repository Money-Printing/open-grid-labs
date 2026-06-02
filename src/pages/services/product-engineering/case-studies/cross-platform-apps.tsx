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
	{ value: "2", label: "iOS and Android stores supported", accent: "from-purple-400 to-indigo-500" },
	{ value: "44%", label: "Reduction in duplicated platform work", accent: "from-pink-400 to-purple-500" },
	{ value: "26", label: "Reusable mobile components shipped", accent: "from-fuchsia-500 to-pink-500" },
	{ value: "12 wk", label: "From separate plans to cross-platform release", accent: "from-violet-400 to-purple-600" }
];

const CHALLENGES = [
	{ text: "Mobile workflows behaved differently across devices, OS versions, network conditions, and user contexts" },
	{ text: "The team lacked a repeatable architecture pattern for app features, data flow, and release readiness" },
	{ text: "Device capabilities, permissions, analytics, and error handling were not consistently implemented" },
	{ text: "QA required better coverage across real devices, simulators, app states, and edge cases" },
	{ text: "Post-launch visibility was limited, making it hard to diagnose crashes, adoption, and user friction" }
];

const SOLUTIONS = [
	{ text: "A production mobile architecture aligned to user journeys, platform requirements, and backend services" },
	{ text: "Reusable UI, state, networking, permission, analytics, and error-handling patterns" },
	{ text: "Device and platform QA coverage across critical flows, offline states, permissions, and releases" },
	{ text: "Integration with backend APIs, notifications, storage, maps, camera, or Firebase services as needed" },
	{ text: "Release dashboards, crash monitoring, usage analytics, and team runbooks for ongoing improvement" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Experience", items: ["Mobile journeys", "Design system", "Permissions", "Accessibility", "Analytics events"], color: "hsl(180,100%,50%)" },
	{ title: "App Layer", items: ["Navigation", "State management", "Networking", "Local storage", "Device APIs"], color: "hsl(280,100%,65%)" },
	{ title: "Services", items: ["Backend APIs", "Auth", "Push services", "Maps", "Cloud services"], color: "hsl(210,100%,50%)" },
	{ title: "Operate", items: ["Crash reporting", "Release tracks", "Performance metrics", "App analytics", "Support workflows"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Mobile Product Blueprint (Weeks 1-3)",
		desc: "OpenGridLabs audited the product requirements, target platforms, user journeys, device capabilities, API dependencies, analytics needs, and release constraints. The team defined the mobile architecture, success metrics, QA matrix, and rollout plan.",
		accent: "from-purple-400 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "App Build, Integration & QA (Weeks 4-8)",
		desc: "The team implemented the mobile workflows with reusable screens, state handling, API integration, permission flows, local storage, analytics events, and error recovery. Critical journeys were tested across device profiles, app states, and connectivity conditions.",
		accent: "from-pink-400 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Release, Monitoring & Enablement (Weeks 9-10)",
		desc: "The final phase covered production release, monitoring, analytics verification, crash reporting, app store readiness, documentation, and team enablement. OpenGridLabs handed over runbooks and reusable patterns so future mobile features could ship faster.",
		accent: "from-fuchsia-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "App stores supported", before: "One platform plan", after: "2 stores", change: "Expanded" },
	{ metric: "Duplicated platform work", before: "Baseline", after: "56% of baseline", change: "-44%" },
	{ metric: "Shared components", before: "0", after: "26 components", change: "Built" },
	{ metric: "Platform-specific features", before: "One-off spikes", after: "Native bridge pattern", change: "Controlled" },
	{ metric: "Release coordination", before: "Manual", after: "Shared release calendar", change: "Scalable" }
];

const SUCCESS_FACTORS = [
	{
		title: "Mobile-first journeys shaped the build",
		desc: "The team designed around real usage contexts, including one-handed use, intermittent networks, permissions, backgrounding, and quick task completion."
	},
	{
		title: "Reusable app patterns reduced release risk",
		desc: "Shared navigation, state, API, storage, analytics, and error-handling patterns made features easier to test and extend."
	},
	{
		title: "QA covered real device behavior",
		desc: "Testing included device profiles, OS versions, permission states, offline modes, app lifecycle events, and release-track validation."
	},
	{
		title: "Monitoring continued after launch",
		desc: "Crash reporting, analytics, performance metrics, and user feedback loops helped the team improve the app after the first release."
	}
];

const FAQS = [
	{
		q: "What are Cross-Platform Apps?",
		a: "Cross-Platform Apps is a mobile application capability focused on improving how users access, interact with, or rely on a mobile product. In production, it requires platform-aware design, app architecture, device integration, API reliability, testing, release management, and analytics."
	},
	{
		q: "Why do companies invest in Cross-Platform Apps?",
		a: "Companies invest in Cross-Platform Apps to improve mobile usability, reliability, engagement, release speed, platform coverage, and operational visibility. The strongest results come when product, design, mobile engineering, backend services, QA, and analytics are planned together."
	}
];

export default function CrossPlatformAppsCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Cross-Platform Apps Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a cross-platform mobile architecture with shared UI and codebase to support iOS and Android stores."
				canonical="/services/product-engineering/cross-platform-apps"
				keywords="Cross-Platform Apps, Mobile App Development, iOS Android App, Shared Codebase, Flutter React Native, Mobile Architecture, Native Bridges, App Release"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(280,100%,65%) 0%, hsl(320,100%,60%) 50%, transparent 100%)`
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
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 backdrop-blur-md">
									Case Study · Mobile Application
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Cross-Platform Apps Reduced Delivery Cost While Supporting iOS and Android
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A company needed mobile coverage across iOS and Android without running two separate product teams. OpenGridLabs designed a cross-platform app architecture with shared UI, shared business logic, platform-specific integrations, and coordinated releases.
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
										<span className="text-base font-semibold text-foreground">B2B SaaS and field operations app (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scope</span>
										<span className="text-base font-semibold text-foreground">2 app stores supported</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">12 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Cross-Platform · Shared Codebase · Native Bridges · Release Automation</span>
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
								The client had a mobile product roadmap with strong user demand, but the application needed stronger foundations before it could scale. Teams were managing platform differences, mobile UX constraints, device integrations, release requirements, offline behavior, notifications, analytics, and backend dependencies at the same time.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The company needed Cross-Platform Apps that could move beyond a prototype and support real users across devices, connectivity conditions, app store requirements, and operational workflows. OpenGridLabs designed the mobile architecture, UX patterns, integrations, QA process, and launch plan needed to make the capability reliable in production.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-purple-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-purple-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Are Cross-Platform Apps?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Cross-Platform Apps is a mobile application capability focused on improving how users access, interact with, or rely on a mobile product. In production, it requires platform-aware design, app architecture, device integration, API reliability, testing, release management, and analytics.
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
							Five Mobile Product & Engineering Gaps Resolved
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs unified iOS and Android development under a single cross-platform codebase.
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
												{SOLUTIONS[idx].text}
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
									OpenGridLabs designed a mobile application architecture that connected native device capabilities, application logic, backend APIs, analytics, release management, and operational monitoring. The result was a reusable mobile foundation that supported the first launch and future product iterations.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-purple-500/20 bg-purple-500/5 text-purple-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Design for real mobile conditions, not only ideal demos:</strong> The implementation focused on the conditions users actually face: unreliable networks, app backgrounding, permissions, battery limits, store review rules, device differences, and the need for clear recovery paths when something fails.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Cross-Platform Apps Architecture Stages
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
							The engagement ran across three phases, moving from product discovery and mobile architecture into implementation, testing, release, and post-launch operations.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 opacity-20" />
						
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
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(280,100%,65%)" : idx === 1 ? "hsl(320,100%,60%)" : "hsl(340,100%,60%)"}, transparent)` }}
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
							Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from pairing mobile-first user experience with reliable device integration, release discipline, and production monitoring.
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
									{TABLE_RESULTS.map((row, idx) => (
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
								"The work made cross-platform apps feel like part of a real mobile product system. We got cleaner UX, fewer release surprises, and the visibility we needed to keep improving after launch."
							</p>
							<div className="w-12 h-px bg-purple-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Head of Product</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential Mobile Platform</p>
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
								Ready to build production-ready cross-platform apps?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs designs and builds mobile application systems for cross-platform apps, combining product strategy, mobile UX, app architecture, device integrations, QA, analytics, and release support.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-purple-400 to-pink-500 hover:shadow-purple-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(168,85,247,0.2)`
									}}
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
