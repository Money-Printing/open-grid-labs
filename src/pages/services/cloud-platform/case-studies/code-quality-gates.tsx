import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { 
	ArrowLeft, 
	ArrowRight, 
	CheckCircle2, 
	Terminal, 
	Layers, 
	ShieldCheck, 
	Cpu, 
	Quote as QuoteIcon, 
	Activity, 
	HelpCircle, 
	ChevronDown, 
	Sparkles,
	Database,
	ShieldAlert
} from "lucide-react";
import SEO from "../../../../components/seo";

const STATS = [
	{ value: "60%", label: "Reduction in measurable technical debt", accent: "from-emerald-500 to-teal-600" },
	{ value: "0", label: "Security hotspots in new code since gates", accent: "from-purple-500 to-indigo-600" },
	{ value: "85%", label: "Average code coverage (from 41%)", accent: "from-blue-500 to-cyan-600" },
	{ value: "7 wk", label: "Unmeasured debt → enforced quality", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Technical debt concentrated in high-churn files, slowing every adjacent feature" },
	{ text: "No coverage enforcement — new features regularly shipped with 0% test coverage" },
	{ text: "Security hotspots in three services known but untracked, no gate preventing new ones" },
	{ text: "Inconsistent linting standards between services — some had ESLint, others nothing" },
	{ text: "No measurable baseline — 'we have a lot of debt' had no number attached to it" }
];

const SOLUTIONS = [
	{ text: "SonarQube connected to all eight repositories with quality profiles per language" },
	{ text: "Blocking quality gate: ≥80% coverage, ≤15 cyclomatic complexity, 0 new security hotspots, ≤3% duplication on new code" },
	{ text: "Legacy remediation backlog auto-generated from SonarQube issues, prioritised by churn frequency" },
	{ text: "ESLint and Pylint pre-commit hooks for instant local feedback before push" },
	{ text: "Technical debt dashboard tracking debt ratio per service over time" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Local", items: ["Pre-commit hooks (ESLint/Pylint)", "Fast format & lint", "No pipeline round-trip needed"], color: "hsl(145,100%,45%)" },
	{ title: "CI Analysis", items: ["SonarQube scan on every PR", "Coverage report ingestion", "Security hotspot detection", "Duplication analysis"], color: "hsl(200,100%,50%)" },
	{ title: "Gate Decision", items: ["Quality gate pass/fail → PR check", "Block merge on failure", "Annotated inline issues"], color: "hsl(280,100%,60%)" },
	{ title: "Dashboard", items: ["Technical debt trend", "Coverage history", "Hotspot ageing", "Sprint-level debt metrics"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Baseline & SonarQube Setup (Weeks 1–3)",
		desc: "OpenGridLabs connected SonarQube to all eight repositories and ran the first analysis to establish an actual debt baseline. Pre-commit hooks were installed across the team. The initial gate was set to the current baseline to avoid immediately blocking all PRs.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "Gate Tightening & Security (Weeks 4–6)",
		desc: "Quality gate thresholds were tightened incrementally over six weeks, each preceded by a one-sprint remediation window. The three known security hotspots were addressed and a zero-new-hotspots gate introduced.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Debt Backlog & Enablement (Week 7)",
		desc: "SonarQube issues were exported and prioritised by churn frequency. The prioritised backlog was added to the sprint board. OpenGridLabs documented the thresholds and override process.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Measured technical debt ratio", before: "Baseline", after: "40% of baseline", change: "-60%" },
	{ metric: "New security hotspots", before: "Untracked", after: "Zero since gate", change: "Zero since gate" },
	{ metric: "Average code coverage", before: "41%", after: "85%", change: "85%" },
	{ metric: "Linting enforced across services", before: "3 / 8", after: "8 / 8", change: "8 / 8" },
	{ metric: "Senior engineer debt triage time", before: "High", after: "Automated prioritisation", change: "Automated prioritisation" },
	{ metric: "PR merge rate with gate", before: "—", after: "~94% pass on first attempt", change: "~94% pass on first attempt" }
];

const SUCCESS_FACTORS = [
	{
		title: "Make debt visible before it is enforceable",
		desc: "Starting SonarQube in reporting mode before tightening the gate let the team see the baseline. Introducing enforcement against problems they'd already discussed created buy-in."
	},
	{
		title: "Incremental tightening prevents the 'big bang' quality push",
		desc: "Tightening one threshold per sprint spreads debt-reduction work across the normal engineering cycle rather than requiring a dedicated quality sprint."
	},
	{
		title: "Pre-commit hooks give sub-second feedback",
		desc: "A SonarQube analysis takes 3–5 minutes. A pre-commit lint check takes under a second. Engineers correct issues immediately when feedback is instant."
	}
];

const FAQS = [
	{
		q: "What is SonarQube?",
		a: "SonarQube is a static analysis platform that scans source code for bugs, security vulnerabilities, code smells, duplication, and coverage, integrating with CI to block merges below configured thresholds."
	},
	{
		q: "What is cyclomatic complexity?",
		a: "Cyclomatic complexity measures independent paths through a function. High complexity correlates with defects. Quality gates cap it on new code to prevent hard-to-maintain functions accumulating."
	}
];

export default function CodeQualityGatesCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Code Quality Gates Case Study | OpenGridLabs"
				description="How OpenGridLabs implemented SonarQube quality gates, reducing technical debt by 60% and enforcing quality standards in pull requests."
				canonical="/services/cloud-platform/code-quality-gates"
				keywords="Code Quality Gates, SonarQube, Static Analysis, Technical Debt, Code Coverage, Security Hotspots, ESLint, Pylint, Cyclomatic Complexity, CI/CD, DevOps, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous DevOps Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(145,100%,45%) 0%, hsl(200,100%,50%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/cloud-platform" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to Cloud & Platform Engineering
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
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 backdrop-blur-md">
									Case Study · DevOps & Engineering
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Automated Code Quality Gates Reduced Technical Debt 60% and Made Quality a Merge Requirement
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A company with four years of accumulated codebase had technical debt slowing every new feature. Engineers knew the problem areas but had no leverage to prevent new debt being introduced. OpenGridLabs implemented SonarQube quality gates — coverage thresholds, complexity limits, duplication caps, and security hotspot blocking — making quality a measurable, enforced property of every merge.
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
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-emerald-400" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-emerald-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">Technology / SaaS (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Team / Scale</span>
										<span className="text-base font-semibold text-foreground">40 engineers, 8 services</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">7 weeks</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">SonarQube · ESLint · Pylint · Pre-commit · CI Gates</span>
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
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-emerald-400 transition-colors">
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
								<Cpu className="w-5 h-5 text-emerald-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-emerald-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-emerald-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client had four years of product code and a universal engineering sentiment that certain parts of the codebase were places nobody wanted to work. Functions with cyclomatic complexity above 30, copy-pasted logic spread across twelve files, and a security hotspot three engineers knew about but nobody had prioritised fixing. Technical debt was not invisible — it was just unenforced.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The team had tried quality as a cultural initiative — code review norms, refactoring weeks. None stuck because there was no structural enforcement. Adding a feature was rewarded by shipping; cleaning up debt was not. OpenGridLabs changed the structural incentive: quality gates meant new debt could not be introduced without a deliberate override.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-emerald-950/10 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-emerald-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
									<ShieldAlert className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Are Code Quality Gates?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									A code quality gate is an automated check in the CI pipeline that blocks a merge unless the code meets defined quality thresholds — coverage above a minimum, cyclomatic complexity below a maximum, zero new security hotspots, duplication below a percentage. SonarQube integrates with CI to post gate results as pull request checks and block merges on failure.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Challenges vs Solutions Delivered */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Gap & The Solution</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							DevOps Challenges & Solutions
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs implemented SonarQube gate configurations, static linting checks, and legacy debt remediation pipelines.
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
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-emerald-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
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
										<ArrowRight className="w-6 h-6 text-emerald-400" />
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
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-emerald-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-emerald-400">Blueprint</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									System Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-emerald-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									The Code Quality Gate Pipeline integrates sub-second local lint checks with deep static analysis and PR gating checks inside CI/CD, feeding code complexity metrics into central dashboards.
								</p>

								{/* Why this architecture Alert */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Why this architecture:</strong> Each stage is independently observable and deployable. Failures surface at the earliest possible point, keeping feedback loops tight and mean time to detection measured in minutes rather than hours.
									</p>
								</div>
							</div>

							{/* Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Code Quality Gate Pipeline Stages
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
													{idx === 0 && <Cpu className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 1 && <Database className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 2 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 3 && <Activity className="w-4 h-4" style={{ color: stage.color }} />}
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
							A structured seven-week delivery plan tracking static baselines, incremental gate adjustments, and developer onboarding.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 opacity-20" />
						
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
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(145,100%,45%)" : idx === 1 ? "hsl(200,100%,50%)" : "hsl(280,100%,60%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-3.5 py-1 rounded-full border border-emerald-400/20">
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
							Installing the gates cut measurable technical debt ratio by 60% and successfully blocked any new security vulnerabilities.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-emerald-400">After</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{TABLE_RESULTS.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-emerald-400 font-bold text-base">{row.after}</td>
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
						<div className="absolute top-8 left-10 text-emerald-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"Before the gates, 'code quality' was a phrase in our engineering principles that nobody could measure. Now every service has a number, every sprint moves that number, and nobody can introduce a security hotspot without the pipeline stopping them."
							</p>
							<div className="w-12 h-px bg-emerald-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Principal Engineer</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential SaaS Company</p>
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

					<div className="grid md:grid-cols-3 gap-8">
						{SUCCESS_FACTORS.map((factor, idx) => (
							<div 
								key={idx}
								className="glass-panel p-8 md:p-12 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-emerald-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-emerald-400" />
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
											<HelpCircle className="w-5 h-5 text-emerald-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
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
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-emerald-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-emerald-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Technical debt nobody can measure or enforce?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs implements code quality gates — SonarQube, linting, coverage thresholds, and security hotspot blocking — so quality is measurable, enforceable, and trending in the right direction.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-emerald-400 to-teal-500 hover:shadow-emerald-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(16,185,129,0.2)`
									}}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/cloud-platform"
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
