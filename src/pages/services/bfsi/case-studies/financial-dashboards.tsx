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
	Zap,
	Server
} from "lucide-react";
import SEO from "../../../../components/seo";

const STATS = [
	{ value: "68%", label: "Reduction in reporting preparation time", accent: "from-emerald-500 to-teal-600" },
	{ value: "Real-time", label: "P&L and risk data, from morning email pack", accent: "from-emerald-500 to-teal-600" },
	{ value: "8 mo", label: "Full dashboard suite live", accent: "from-emerald-500 to-teal-600" },
	{ value: "2.8 FTE", label: "Reporting capacity returned to analysis", accent: "from-emerald-500 to-teal-600" }
];

const CHALLENGES = [
	{ text: "48-page PowerPoint management pack taking 3 analyst-days to produce each week" },
	{ text: "Data presented to management 18–24 hours old — stale for intraday decision-making" },
	{ text: "No single dashboard for any metric — each metric requiring navigation to a different system" },
	{ text: "2.8 FTE consumed in data extraction, reconciliation, and formatting rather than analysis" },
	{ text: "No alerting — managers only aware of metric changes when the weekly pack arrived" }
];

const SOLUTIONS = [
	{ text: "Real-time P&L dashboard — intraday position-level and strategy-level P&L updated on market ticks" },
	{ text: "Risk dashboard — live VaR, factor exposures, limit utilisation, and scenario P&L" },
	{ text: "Fund performance dashboard — daily NAV, attribution, and peer benchmark comparison" },
	{ text: "Executive MI dashboard — consolidated key metrics across all functions for management committee" },
	{ text: "Automated distribution — daily email digest and weekly PDF pack generated automatically, eliminating manual production" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data Layer", items: ["7 source integrations", "Real-time feeds", "Daily batch feeds", "Historical warehouse"], color: "hsl(145,100%,40%)" },
	{ title: "Processing Engine", items: ["Metric calculations", "Aggregation rules", "Alert thresholds", "Data quality checks"], color: "hsl(145,100%,40%)" },
	{ title: "Presentation", items: ["Real-time dashboards", "Drill-down analytics", "Scenario tools", "Historical trends"], color: "hsl(145,100%,40%)" },
	{ title: "Distribution", items: ["Automated digests", "Weekly PDF packs", "Mobile-optimised views", "Alert notifications"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Integration & P&L (Months 1–3)",
		desc: "OpenGridLabs built the data integration layer connecting all seven source systems and delivered the real-time P&L dashboard — the highest-priority item for the management team. The P&L dashboard provided intraday position-level and strategy-level P&L views that the management team had never had access to between morning reports.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "Risk & Fund Performance (Months 4–6)",
		desc: "The risk dashboard was built with live VaR, factor exposure, and limit utilisation views. The fund performance dashboard provided daily NAV, performance attribution, and peer benchmark comparison for each fund. Both were reviewed by senior risk and investment management before going live.",
		accent: "from-teal-500 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "Executive MI & Automation (Months 7–8)",
		desc: "The executive MI dashboard aggregated key metrics across all functions into a single view designed for the management committee. The automated daily email digest and weekly PDF pack were configured, eliminating the manual production process. An alert framework was implemented for key metric thresholds — immediately notifying relevant managers of limit breaches or significant P&L moves.",
		accent: "from-cyan-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Reporting preparation time", before: "3 analyst-days/week", after: "<1 day (automated)", change: "-68%" },
	{ metric: "P&L data currency", before: "18–24 hours old", after: "Real-time intraday", change: "Real-time intraday" },
	{ metric: "Management committee data quality", before: "Prior-day only", after: "Real-time available", change: "Real-time available" },
	{ metric: "Analyst time on data production", before: "2.8 FTE", after: "<0.5 FTE", change: "Capacity returned" },
	{ metric: "Metric alert coverage", before: "Weekly pack only", after: "Real-time alerts", change: "Threshold alerts" },
	{ metric: "FCA MI review finding", before: "Observations expected", after: "Zero findings", change: "Zero findings" }
];

const SUCCESS_FACTORS = [
	{
		title: "Real-time data changes the category of decision available",
		desc: "A management team reviewing daily reports can make daily decisions. A management team with real-time dashboards can make intraday decisions. These are different categories of decisions — and in a financial services firm, the intraday category frequently contains the highest-value decisions."
	},
	{
		title: "Design around decisions, not around data",
		desc: "A management dashboard designed around what data is available produces a data dump that managers don't use. A dashboard designed around what decisions managers need to make produces a tool they check before every significant action. The design process started with 'what decisions does this enable?' rather than 'what data can we show?'"
	},
	{
		title: "Automated distribution eliminates the reporting bottleneck permanently",
		desc: "Manual reporting processes re-introduce themselves after automation: analysts start adding new metrics, new tabs, new breakdowns. Automated distribution with a defined metric set and a structured change process prevents the accretion of manual work over time — the 2.8 FTE saving is maintained rather than slowly recaptured."
	}
];

const FAQS = [
	{
		q: "What is the difference between a financial dashboard and a financial report?",
		a: "A financial report is a document — static, produced periodically, designed for retrospective review. A financial dashboard is a real-time, interactive display of live metrics designed for ongoing monitoring and decision support. Reports tell you what happened; dashboards show you what is happening."
	},
	{
		q: "What is P&L attribution in financial services?",
		a: "P&L attribution is the decomposition of a portfolio's or strategy's profit and loss into its contributing factors — market movements, currency effects, trading activity, management fees, and other components. Attribution allows management to understand the sources of P&L, distinguish between structural returns and trading activity, and compare performance across strategies on a consistent basis."
	}
];

export default function FinancialDashboardsCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Real-Time Financial Dashboards Case Study | OpenGridLabs"
				description="How Real-Time Financial Dashboards Reduced Senior Management Reporting Time 68% and Enabled Intraday Decisions."
				canonical="/services/bfsi/financial-dashboards"
				keywords="Financial Dashboards, Real-Time P&L, Risk Dashboard, Fund Performance, Executive MI, Management Information, BI Financial Services, Intraday Analytics, Financial Reporting, Financial Services, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Emerald Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(145,100%,40%) 0%, hsl(155,100%,35%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/bfsi" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to BFSI & Fintech
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
									Case Study · Financial Services
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Real-Time Financial Dashboards Reduced Senior Management Reporting Time 68% and Enabled Intraday Decisions
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A financial services firm was producing its senior management information through a manual process — analysts extracting data from multiple systems, building PowerPoint packs, and emailing them to the management committee the morning before each meeting. The information was accurate but stale, and the preparation was consuming 2.8 FTEs. OpenGridLabs built real-time financial dashboards for P&L, risk, fund performance, and operational metrics — replacing the manual pack with live data and reducing preparation time 68%.
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
										<span className="text-base font-semibold text-foreground">Financial services firm (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scope</span>
										<span className="text-base font-semibold text-foreground">Executive MI · P&L · Risk · Fund performance · Operations</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">8 months</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Real-time data · BI platform · Custom dashboards · Automated distribution</span>
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
								Our client's senior management committee met weekly and received a management information pack — a 48-page PowerPoint document covering P&L by strategy, fund performance, risk metrics, operational KPIs, and compliance indicators. The pack was produced by a team of analysts who spent three days extracting data from seven source systems, reconciling, and formatting. The result was accurate and comprehensive, but represented a snapshot of data from the previous day — and by the time it was presented, market conditions might have moved significantly.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The 2.8 FTE cost of producing the pack was the operational problem; the data staleness was the strategic problem. In a financial services firm, a management committee reviewing P&L data from the previous day's close cannot make intraday decisions about risk, exposure, or resource allocation. The management information was useful for retrospective review but not for the proactive management that the firm's risk profile required. The dashboard programme addressed both problems simultaneously.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-emerald-950/10 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-emerald-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
									<Zap className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Are Dashboards?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Financial management dashboards are real-time, interactive visual displays of an organisation's key financial and operational metrics — P&L, risk exposures, fund performance, liquidity, and operational KPIs. Unlike static reports produced periodically, dashboards draw live data.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Challenges vs Solutions Delivered */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Challenge & Solution</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Challenges & Solutions
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							Replacing weekly manual PowerPoint updates with real-time aggregated metrics and threshold alerting.
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
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-emerald-400">Technical Design</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									Financial Dashboard Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-emerald-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Consolidated source integrations supplying aggregate metric engines, interactive reports, and automated notification scripts.
								</p>

								{/* Regulatory Alert */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Regulatory & Data Governance Core:</strong> All financial services solutions are designed with regulatory compliance, data lineage, and audit-readiness as first-class requirements. Every data point is traceable to source, every calculation is reproducible, and every system is designed for examination by regulators and auditors.
									</p>
								</div>
							</div>

							{/* Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Architecture Layers
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
													{idx === 1 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 2 && <Database className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 3 && <Server className="w-4 h-4" style={{ color: stage.color }} />}
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

				{/* Engagement Approach Timeline */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-20">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Roadmap</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Engagement Approach
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							A systematic 3-phase roadmap leading from initial database mappings to core risk reports and automated distributions.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-20" />
						
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
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(145,100%,40%)" : idx === 1 ? "hsl(175,100%,35%)" : "hsl(200,100%,40%)"}, transparent)` }}
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
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Proven Impact</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Measurable Results
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl">
							Minimizing manual reporting overheads, ensuring fresh daily metrics, and freeing analyst capacity.
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
								"The management committee went from reviewing yesterday's data to monitoring today's. That sounds like an obvious improvement, but the decisions it changed — cutting a losing position at 11am instead of the next morning — had direct financial impact. The 68% reduction in reporting time was almost secondary."
							</p>
							<div className="w-12 h-px bg-emerald-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Chief Operating Officer</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential Financial Services Firm</p>
							</div>
						</div>
					</div>
				</section>

				{/* Success Factors Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Key Drivers</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Why This Worked
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{SUCCESS_FACTORS.map((factor, idx) => (
							<div 
								key={idx}
								className="glass-panel p-8 md:p-10 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-emerald-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-emerald-400" />
									<h3 className="text-lg md:text-xl font-bold text-foreground">
										{factor.title}
									</h3>
								</div>
								<p className="text-muted-foreground text-sm leading-relaxed">
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
								Management committee reviewing yesterday's data for today's decisions?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds financial management dashboards — real-time P&L, risk, fund performance, and executive MI — that make intraday decisions possible and eliminate manual pack production.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-emerald-400 to-indigo-500 hover:shadow-emerald-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(16,185,129,0.2)`
									}}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/bfsi"
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
