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
	{ value: "3 days", label: "Quarterly reserving cycle, from 3 weeks", accent: "from-indigo-500 to-violet-600" },
	{ value: "12 mo", label: "Platform live", accent: "from-indigo-500 to-violet-600" },
	{ value: "7", label: "Classes of business automated", accent: "from-indigo-500 to-violet-600" },
	{ value: "100%", label: "Reproducible calculations with full audit trail", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "3-week quarterly reserving cycle dominated by data extraction and reconciliation" },
	{ text: "Spreadsheet-based models with key-person dependency — only one actuary understood the full model" },
	{ text: "Pricing models updated quarterly because the data pipeline was too slow for monthly cycles" },
	{ text: "No automated data quality checks — errors in source data discovered mid-process" },
	{ text: "Reserve calculations not reproducible — same data producing different results run to run" }
];

const SOLUTIONS = [
	{ text: "Automated actuarial data pipeline — claims, exposure, and premium data prepared daily" },
	{ text: "Run-off triangle generation for all 7 classes automated — updated daily rather than quarterly" },
	{ text: "Chain-ladder, Bornhuetter-Ferguson, and Cape Cod IBNR methods automated and parameterisable" },
	{ text: "GLM pricing model infrastructure enabling monthly model updates from current data" },
	{ text: "Full audit trail — every input, parameter, and output versioned and reproducible" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data Pipeline", items: ["Claims", "Exposure", "Premium", "Policy data", "Daily refresh", "Data quality checks", "Reconciliation"], color: "hsl(230,80%,60%)" },
	{ title: "Triangle Engine", items: ["Run-off triangles (paid/incurred)", "Development factors", "Tail factors", "Diagnostic visualisations"], color: "hsl(230,80%,60%)" },
	{ title: "Reserving Models", items: ["Chain-ladder", "Bornhuetter-Ferguson", "Cape Cod", "IBNR calculation", "Reserve range", "Best estimate"], color: "hsl(230,80%,60%)" },
	{ title: "Pricing & Reporting", items: ["GLM model infrastructure", "Pricing diagnostics", "Solvency II triangles", "Board reserve pack"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Pipeline & Triangle Automation (Months 1–5)",
		desc: "OpenGridLabs built the automated data pipeline integrating claims, policy, and finance source systems with daily data quality checks and automated reconciliation. The first run-off triangles were generated automatically within 90 days — the team saw quarterly triangle output within minutes of a pipeline run for the first time.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "Reserving Model Infrastructure (Months 6–9)",
		desc: "The chain-ladder, Bornhuetter-Ferguson, and Cape Cod reserving methods were implemented as parameterisable models alongside the actuarial team, who retained full control of assumptions and parameter choices. The models were validated against the prior year's manual spreadsheet results before live use.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "GLM Pricing & Audit Trail (Months 10–12)",
		desc: "GLM pricing model infrastructure was built enabling the pricing team to run monthly model refreshes. The audit trail was implemented — every reserving run versioned, every input and output archived, every parameter change recorded with the author and timestamp — eliminating the key-person model transparency risk.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Quarterly reserving cycle", before: "3 weeks", after: "3 days", change: "3 days" },
	{ metric: "Data preparation proportion of cycle", before: "~70% of cycle", after: "~10% (automated)", change: "Automated" },
	{ metric: "Pricing model update frequency", before: "Quarterly", after: "Monthly", change: "Monthly" },
	{ metric: "Reserve calculation reproducibility", before: "Variable (spreadsheet)", after: "100% (automated, versioned)", change: "100% versioned" },
	{ metric: "Key-person model risk", before: "Critical", after: "Eliminated (documented platform)", change: "Eliminated" },
	{ metric: "Actuarial capacity for analysis", before: "~30% of cycle", after: "~90% of cycle", change: "90% of cycle" }
];

const SUCCESS_FACTORS = [
	{
		title: "Data pipeline automation is the highest-leverage actuarial investment",
		desc: "An actuarial team spending 70% of its time on data preparation is a team where 70% of the value is being left unrealised. Automating the pipeline does not change the actuarial methods — it makes them available for analysis rather than buried under data engineering."
	},
	{
		title: "Reproducibility is a governance requirement, not just a convenience",
		desc: "A reserving calculation that cannot be exactly reproduced — because it was run in a spreadsheet that has since been modified — fails the governance standards expected by boards, regulators, and external auditors. A versioned, automated platform where every run is archived and every parameter is recorded provides the audit trail that governance requires."
	},
	{
		title: "Monthly pricing model updates improve the loss ratio",
		desc: "A pricing model calibrated on data 90 days old is pricing risks based on a claims and exposure picture that is three months out of date. Monthly updates provide a pricing signal that is six times more current, enabling faster response to emerging trends in claims frequency, severity, or mix."
	}
];

const FAQS = [
	{
		q: "What is IBNR in actuarial reserving?",
		a: "IBNR (Incurred But Not Reported) is the estimated liability for claims that have occurred but have not yet been reported to the insurer. It is a key component of the total insurance reserve, estimated using development triangle methods applied to historical claims data. Common IBNR estimation methods include the chain-ladder, Bornhuetter-Ferguson, and Cape Cod methods."
	},
	{
		q: "What is a GLM pricing model in insurance?",
		a: "A GLM (Generalised Linear Model) is a statistical model used in insurance pricing to estimate the expected claim frequency and severity for different risk segments. GLMs model the relationship between policyholder characteristics (age, location, vehicle type, claims history) and expected loss, enabling risk-differentiated pricing. They are the standard pricing methodology for personal and commercial lines insurance."
	}
];

export default function ActuarialAnalyticsCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Actuarial Analytics & Triangle Automation Case Study | OpenGridLabs"
				description="How an Actuarial Analytics Platform Reduced the Quarterly Reserving Cycle from 3 Weeks to 3 Days."
				canonical="/services/bfsi/actuarial-analytics"
				keywords="Actuarial Analytics, IBNR, Reserving, Loss Development Triangles, GLM Pricing, Actuarial Automation, Chain-Ladder, Bornhuetter-Ferguson, Insurance Pricing, Insurance Technology, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Indigo Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(230,80%,60%) 0%, hsl(240,80%,55%) 50%, transparent 100%)`
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
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 backdrop-blur-md">
									Case Study · Insurance Technology
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How an Actuarial Analytics Platform Reduced the Quarterly Reserving Cycle from 3 Weeks to 3 Days
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A general insurer's actuarial team was spending three weeks each quarter extracting data, running development triangles, and calculating IBNR reserves in spreadsheets — with the last week of each quarter dominated by data reconciliation rather than actuarial analysis. OpenGridLabs built an automated actuarial analytics platform: reproducible loss development, automated triangle calculation, GLM pricing model infrastructure, and a reserve audit trail — reducing the reserving cycle to 3 days and freeing the team for genuine actuarial work.
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
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-indigo-400" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-indigo-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">General insurer (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Lines</span>
										<span className="text-base font-semibold text-foreground">Motor, home, liability — 7 classes</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">12 months</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Actuarial data pipeline · Triangle automation · GLM platform · Reserve audit trail</span>
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
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-indigo-400 transition-colors">
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
								<Cpu className="w-5 h-5 text-indigo-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-indigo-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-indigo-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client is a general insurer writing across motor, home, and liability classes — seven distinct books of business requiring separate reserve calculations each quarter. The actuarial team of eight was spending the majority of each quarter on data extraction and preparation: pulling claims data from the claims system, exposure data from the policy system, and premium data from finance, reconciling the three, and preparing the run-off triangles that fed the reserving calculations. By the time the data was ready, the team had one week to do the actuarial work.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The data preparation problem was compounding. Different source systems produced data in different formats, requiring manual reconciliation that consumed disproportionate actuarial time. The spreadsheet-based triangle and IBNR models had grown complex enough that only the senior actuary fully understood them — a key-person risk that the board had flagged. And pricing model updates were running on a quarterly cycle because the data pipeline was too slow to support monthly updates, meaning the pricing team was making decisions on data that was up to 90 days old.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-indigo-950/10 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-indigo-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
									<Zap className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is Actuarial Analytics?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Actuarial analytics in general insurance encompasses the statistical and quantitative methods used to estimate future claim costs — reserving (estimating the cost of claims already incurred but not yet fully settled), pricing (estimating the expected cost of future claims for new and renewed policies), and capital modelling (estimating the capital required to meet extreme loss scenarios). Modern actuarial analytics platforms automate the data pipelines feeding these calculations, making results reproducible, auditable, and faster to produce.
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
							Replacing slow Excel reconciliations with daily data refresh rates, version control audit trails, and GLM modeling updates.
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
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-indigo-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
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
										<ArrowRight className="w-6 h-6 text-indigo-400" />
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
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-indigo-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-indigo-400">Technical Design</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									Actuarial Analytics Platform Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-indigo-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Daily claiming and policy databases passing through automated run-off triangle generators, statistical reserving models, and Solvency II dashboards.
								</p>

								{/* Regulatory Alert */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 text-indigo-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Regulatory & Compliance Governance:</strong> All InsurTech solutions are built with FCA/PRA regulatory compliance, data privacy (GDPR), and actuarial governance as first-class design requirements. Audit trails, model validation, and data lineage are embedded from day one — not retrofitted before examination.
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
							A systematic 3-phase roadmap leading from baseline automated pipelines to parameterisable model deployment and audit validation.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 opacity-20" />
						
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
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(230,80%,60%)" : idx === 1 ? "hsl(260,80%,55%)" : "hsl(280,80%,50%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-400/10 px-3.5 py-1 rounded-full border border-indigo-400/20">
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
							Reducing reserve close cycles, eliminating key-person code risk, and maximizing reproducible calculations.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-indigo-400">After</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{TABLE_RESULTS.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-indigo-400 font-bold text-base">{row.after}</td>
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
						<div className="absolute top-8 left-10 text-indigo-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"We were actuaries doing data engineering. Three weeks of the quarter, eight people, and we spent most of it making spreadsheets talk to each other. The platform gave us our time back. Now the data is ready on day one and we spend three days doing actuarial work."
							</p>
							<div className="w-12 h-px bg-indigo-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Chief Actuary</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential General Insurer</p>
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
								className="glass-panel p-8 md:p-10 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-indigo-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-indigo-400" />
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
											<HelpCircle className="w-5 h-5 text-indigo-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-400' : ''}`} />
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
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-indigo-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-indigo-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Actuaries spending three weeks on data preparation for one week of analysis?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds actuarial analytics platforms — automated data pipelines, triangle engines, reproducible reserving models, and GLM infrastructure — that give actuaries their time back.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:shadow-indigo-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(99,102,241,0.2)`
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
