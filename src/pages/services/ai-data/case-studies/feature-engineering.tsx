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
	{ value: "18%", label: "Improvement in model lift on priority use cases", accent: "from-purple-500 to-indigo-500" },
	{ value: "134", label: "Reusable, documented features in production", accent: "from-cyan-400 to-blue-500" },
	{ value: "-42%", label: "Reduction in feature prep & training cycles", accent: "from-pink-500 to-rose-400" },
	{ value: "8 wk", label: "From ad hoc notebooks to governed pipelines", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Important features lived in notebooks, spreadsheets, and SQL fragments with no shared source of truth" },
	{ text: "Training transformations did not always match production transformations, creating prediction drift" },
	{ text: "Aggregation windows were inconsistent, which introduced hidden leakage into several experiments" },
	{ text: "Missing values, outliers, and categorical encodings were handled differently across models" },
	{ text: "Feature quality issues were found late, after failed training runs or poor production predictions" }
];

const SOLUTIONS = [
	{ text: "A governed feature catalog with definitions, owners, freshness rules, and usage notes" },
	{ text: "Reusable feature pipelines that generate the same logic for offline training and online inference" },
	{ text: "Time-aware aggregation design to prevent leakage and align features to prediction moments" },
	{ text: "Standard preprocessing patterns for missing values, outliers, categorical variables, and scaling" },
	{ text: "Automated validation checks for freshness, distribution shifts, null rates, and schema changes" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Source Data", items: ["Product events", "CRM records", "Billing data", "Support tickets", "Usage logs", "Customer attributes"], color: "hsl(180,100%,50%)" },
	{ title: "Transform", items: ["Time-windowed aggregations", "Encodings", "Normalisation", "Missing-value handling", "Leakage-safe joins"], color: "hsl(210,100%,50%)" },
	{ title: "Feature Layer", items: ["Feature catalog", "Offline/online parity", "Validation tests", "Freshness rules", "Lineage & ownership"], color: "hsl(280,100%,65%)" },
	{ title: "ML Use", items: ["Training datasets", "Batch scoring", "Real-time inference", "Monitoring dashboards", "Model explainability"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Feature Audit & Signal Design (Weeks 1-2)",
		desc: "The team audited existing notebooks, SQL queries, and production scoring code to identify duplicated logic, leakage risks, and inconsistent definitions. We then designed a feature taxonomy across customer behavior, account health, product adoption, billing patterns, and support intensity, prioritising features with clear business meaning and predictive value.",
		accent: "from-purple-500 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "Reusable Pipelines & Validation (Weeks 3-6)",
		desc: "OpenGridLabs built reusable feature pipelines with time-aware joins, stable aggregation windows, missing-value strategies, categorical encodings, and outlier handling. Validation checks were added for schema changes, freshness, null rates, distribution shifts, and value ranges so broken features were caught before training or inference.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 3",
		title: "Production Rollout & Team Enablement (Weeks 7-8)",
		desc: "The final phase connected the feature layer to model training and batch scoring workflows, documented the feature catalog, and trained the client team on how to add new features safely. The result was a repeatable feature engineering process that supported both experimentation and production ML operations.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Reusable production features", before: "Fragmented logic", after: "134 cataloged features", change: "Reusable" },
	{ metric: "Model lift on priority use cases", before: "Baseline", after: "1.18x baseline", change: "+18%" },
	{ metric: "Feature preparation cycle time", before: "Baseline", after: "58% of baseline", change: "-42%" },
	{ metric: "Training-production feature parity", before: "Manual rewrites", after: "Shared pipeline logic", change: "Aligned" },
	{ metric: "Data leakage incidents found in review", before: "7 risks", after: "0 active risks", change: "Resolved" },
	{ metric: "Feature quality checks", before: "Ad hoc", after: "Automated coverage", change: "New capability" },
	{ metric: "Time to add a new approved feature", before: "Several days", after: "Same-day path", change: "Faster iteration" }
];

const SUCCESS_FACTORS = [
	{
		title: "Time-aware design from the start",
		desc: "Every feature was aligned to the prediction moment, which prevented future information from leaking into training data and made offline evaluation more trustworthy."
	},
	{
		title: "One definition for training and production",
		desc: "Shared transformation logic removed the common gap where a feature behaves one way in a notebook and another way in production scoring."
	},
	{
		title: "Validation before modeling",
		desc: "Freshness, null-rate, schema, and distribution checks caught data quality problems before they consumed model development time or affected customers."
	},
	{
		title: "Business meaning, not only statistical signal",
		desc: "Features were documented in language product and operations teams could understand, making model explanations easier and improving stakeholder confidence."
	}
];

const FAQS = [
	{
		q: "What is feature engineering design?",
		a: "Feature engineering design is the process of planning and building the transformations that turn raw data into useful machine learning inputs. It includes feature definitions, aggregation windows, encodings, scaling, missing-value handling, leakage prevention, validation, and reuse across training and production."
	},
	{
		q: "Why does feature engineering matter for machine learning projects?",
		a: "Machine learning models learn from the signals they are given. Strong feature design can improve predictive performance, make models easier to explain, speed up experimentation, and prevent production failures caused by inconsistent transformation logic or poor data quality."
	}
];

export default function FeatureEngineeringCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Feature Engineering Case Study | OpenGridLabs"
				description="How OpenGridLabs designed reusable feature pipelines, validation rules, and a governed feature store layer to improve model lift by 18%."
				canonical="/services/ai-data/feature-engineering"
				keywords="Feature Engineering, Machine Learning Features, Feature Store, Data Preprocessing, Feature Validation, MLOps, Data Transformation"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(280,100%,65%) 0%, hsl(220,100%,50%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/ai-data" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to AI & Data Intelligence
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
									Case Study · Feature Engineering
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Feature Engineering Design Turned Messy Operational Data Into High-Performing ML Signals
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A growth-stage company partnered with OpenGridLabs to design reusable feature pipelines, validation rules, and a governed feature layer—improving model lift by 18%, reducing training cycles by 42%, and securing absolute offline-online parity.
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
										<span className="text-base font-semibold text-foreground">Data-rich SaaS platform (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scope</span>
										<span className="text-base font-semibold text-foreground">134 production features</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">8 weeks to rollout</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Feature Pipelines · Validation · Feature Store · ML Ops</span>
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
								The client operated a data-rich SaaS platform with millions of product events, customer actions, billing records, and support interactions. The data science team had already built churn, upsell, and risk prediction models, but performance changed from experiment to experiment. Features were created inside notebooks, rewritten for production, and interpreted differently by each team.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The problem was not a lack of data or modeling talent. It was weak feature engineering design: no consistent feature definitions, no clear aggregation windows, limited validation, and no reliable way to ensure that training data matched production data. OpenGridLabs was brought in to design the feature layer that would turn raw operational data into trusted, reusable machine learning signals.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-purple-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-purple-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is Feature Engineering Design?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Feature engineering design is the structured process of defining, transforming, validating, and operating model inputs. It covers how raw data becomes features, how time windows are chosen, how missing values and categorical variables are handled, how leakage is prevented, and how the same logic is reused consistently during training and inference.
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
							Five Feature Engineering Bottlenecks Overcome
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built a unified governed feature layer for reliable pipeline orchestration.
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
									Feature Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-purple-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs designed a feature engineering layer between raw operational data and machine learning models. The architecture made feature logic reusable, testable, and traceable, with validation built into every stage so data problems could be caught before they affected model training or production predictions.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-purple-500/20 bg-purple-500/5 text-purple-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Design features as production assets, not experiment leftovers:</strong> The key shift was treating features like maintained software components. Each high-value feature had a definition, owner, test coverage, freshness expectation, and lineage trail. That made model development faster because teams could reuse trusted signals instead of rebuilding transformations from scratch.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Feature Engineering Design Architecture Stages
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
							The engagement ran across three phases over eight weeks. OpenGridLabs worked with data engineering, data science, and product analytics teams to convert repeated transformation work into reliable feature pipelines.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 opacity-20" />
						
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
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(280,100%,65%)" : idx === 1 ? "hsl(180,100%,50%)" : "hsl(330,100%,60%)"}, transparent)` }}
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
							Results were measured across priority churn, upsell, and account-risk models after the new feature layer was used in production scoring.
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
								"Our models did not need another month of tuning. They needed cleaner, more consistent signals. Once the feature layer was in place, experimentation became faster and production predictions became much easier to trust."
							</p>
							<div className="w-12 h-px bg-purple-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Head of Data Science</p>
								<p className="text-sm text-muted-foreground">Confidential SaaS Platform</p>
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
								Ready to turn raw data into reliable ML signals?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs designs feature engineering systems, reusable feature pipelines, validation checks, and production-ready data layers that help machine learning teams move faster with more confidence.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-purple-400 to-cyan-500 hover:shadow-purple-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(168,85,247,0.2)`
									}}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/ai-data"
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
