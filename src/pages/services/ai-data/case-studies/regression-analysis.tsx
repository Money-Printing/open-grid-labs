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
	{ value: "52%", label: "Lower estimate error (MAPE) vs. manual", accent: "from-emerald-400 to-teal-500" },
	{ value: "0.93", label: "R² — variance explained by the model", accent: "from-cyan-400 to-blue-500" },
	{ value: "60+", label: "Drivers quantified by their effect on the value", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "9 wk", label: "From spreadsheets to a production model", accent: "from-pink-500 to-rose-400" }
];

const CHALLENGES = [
	{ text: "A critical value estimated by gut feel, rules of thumb, and inconsistent spreadsheets" },
	{ text: "Errors cost real money—too high lost deals, too low eroded margin" },
	{ text: "No one could fully explain or defend why a given figure had been chosen" },
	{ text: "The reasoning lived in experienced staff's heads, creating risk and bottlenecks" },
	{ text: "Five years of relevant data sat unused, never turned into a predictive tool" }
];

const SOLUTIONS = [
	{ text: "A regression model predicting the target value from historical data and deal attributes" },
	{ text: "Quantified driver effects—how much each factor raises or lowers the estimate" },
	{ text: "Honest error metrics (MAE, MAPE, RMSE) and prediction ranges, not false precision" },
	{ text: "An interpretable output so every estimate comes with the reasons behind it" },
	{ text: "Delivery into the team's workflow as a suggested value with its key drivers" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data", items: ["Historical values", "Deal & item attributes", "Market & context variables", "Cleaning & outlier handling"], color: "hsl(180,100%,50%)" },
	{ title: "Features", items: ["Transformations", "Interaction terms", "Multicollinearity checks", "Train / validation / test splits"], color: "hsl(210,100%,50%)" },
	{ title: "Modeling", items: ["Linear & regularised regression", "Gradient-boosted regression", "Cross-validation", "Error & residual analysis"], color: "hsl(280,100%,65%)" },
	{ title: "Estimate", items: ["Predicted value", "Confidence range", "Driver contributions", "Workflow delivery & monitoring"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data & Target Definition (Weeks 1–3)",
		desc: "OpenGridLabs consolidated five years of records into one clean dataset, handled outliers and missing values, and defined the target value precisely with the business. Exploratory analysis surfaced the relationships and distributions in the data, and a careful split set aside untouched test data so accuracy could be measured honestly later.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Feature Engineering & Regression (Weeks 4–7)",
		desc: "The team engineered features and interaction terms, checked for multicollinearity that would distort driver effects, and trained a range of regression models—from regularised linear regression to gradient-boosted regression. Models were compared on held-out error (MAE, MAPE, RMSE) and residual behaviour, choosing the option that best balanced accuracy with the interpretability the business needed.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Estimates, Drivers & Enablement (Weeks 8–9)",
		desc: "The model was deployed to produce a suggested value with a confidence range and the top drivers behind each estimate, delivered into the team's existing workflow as decision support rather than a black box. Monitoring tracked live error against actuals, a retraining path kept the model current, and OpenGridLabs trained the client's team to maintain and extend it to other estimation problems.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Estimate error (MAPE)", before: "Baseline", after: "48% of baseline", change: "−52%" },
	{ metric: "Variance explained (R²)", before: "Not measured", after: "0.93", change: "Strong fit" },
	{ metric: "Drivers quantified", before: "Intuition only", after: "60+ with effect sizes", change: "Explainable" },
	{ metric: "Consistency between staff", before: "Varied widely", after: "Standardised", change: "Uniform" },
	{ metric: "Time to produce an estimate", before: "Manual, slow", after: "Instant", change: "Faster" },
	{ metric: "Ability to defend a number", before: "Low", after: "Driver-backed", change: "Justifiable" },
	{ metric: "Margin & win-rate impact", before: "—", after: "Measurable uplift", change: "ROI positive" }
];

const SUCCESS_FACTORS = [
	{
		title: "Accuracy and interpretability together",
		desc: "The value had to be defended, so the model was chosen to be both accurate and explainable. Where a simpler regression nearly matched a complex one, the interpretable option won—because a number people understand is a number they will use."
	},
	{
		title: "Respect the method's assumptions",
		desc: "Checking for multicollinearity, examining residuals, and handling outliers kept the driver effects honest. Skipping these is how regressions produce confident coefficients that quietly mislead."
	},
	{
		title: "Honest error, not false precision",
		desc: "Reporting MAE, MAPE, and prediction ranges set realistic expectations—an estimate with a stated range is far more useful and trustworthy than a single number pretending to be exact."
	},
	{
		title: "Drivers turn prediction into insight",
		desc: "Quantifying how each factor moved the value did more than predict—it taught the business what actually drove its numbers, informing strategy well beyond the individual estimate."
	}
];

const FAQS = [
	{
		q: "What is regression analysis?",
		a: "Regression analysis is a machine learning and statistical method for predicting a continuous numeric value—a price, quantity, duration, or score—from input variables. Unlike classification, which assigns items to categories, regression estimates an actual number. It also quantifies how each input influences the result, making it useful both for accurate prediction and for understanding which factors drive an outcome and by how much."
	},
	{
		q: "What is the difference between regression and classification?",
		a: "Classification predicts a category or label—whether a customer will churn, or which team a request belongs to. Regression predicts a continuous number—how much something will cost, how long a task will take, or how much demand to expect. The choice depends on the target: a discrete class calls for classification, while a real-valued quantity calls for regression."
	}
];

export default function RegressionAnalysisCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Regression Analysis Case Study | OpenGridLabs"
				description="How OpenGridLabs built a regression analysis solution combining feature engineering and explainable modeling — cutting pricing estimation error by 52%."
				canonical="/services/ai-data/regression-analysis"
				keywords="Regression Analysis, Regression Models, Value Estimation, Predictive Pricing, Linear Regression, Multiple Regression, Gradient Boosting, Feature Coefficients, Error Metrics, Demand Estimation, Explainable Models"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(280,100%,65%) 0%, hsl(180,100%,50%) 50%, transparent 100%)`
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
									Case Study · Data Science & AI
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Regression Analysis Replaced Pricing Guesswork with Numbers the Team Could Trust
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling company was estimating a critical value—pricing—by gut feel and stale spreadsheets, and the errors were costing real margin. OpenGridLabs built a regression model that predicts the right figure from data and, just as importantly, quantifies exactly which factors move it and by how much—cutting estimate error by 52% and making every number explainable.
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
										<span className="text-base font-semibold text-foreground">Technology / SaaS (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Data</span>
										<span className="text-base font-semibold text-foreground">5 yrs history, 60+ variables</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">9 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Feature Engineering · Regression · Interpretation</span>
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
								Our client is a venture-backed company whose business depends on getting a single number right, over and over: the value—pricing—attached to each deal. That figure drove revenue on one side and competitiveness on the other, and it was being produced largely by experienced staff applying judgement, rules of thumb, and a tangle of spreadsheets built up over years.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The estimates were often reasonable and sometimes badly off. Set too high, deals were lost; set too low, margin evaporated—and because the logic lived in people's heads and inconsistent formulas, nobody could fully explain why a given number had been chosen or defend it when challenged. With five years of historical data on hand, the opportunity was clear: replace guesswork with a model that predicts the right value from evidence and shows its reasoning. This is the natural home of regression analysis—predicting a precise number and quantifying what drives it.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-purple-950/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-purple-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is Regression Analysis?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Regression analysis predicts a continuous numeric value—a price, quantity, duration, or score—from input variables. Unlike classification, which sorts items into categories, regression estimates an actual number. It also measures how each input influences the result, so it serves two purposes at once: producing accurate estimates and revealing which factors drive an outcome, and by how much.
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
							Five Pricing Challenges Overcome
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built a regression pipeline to replace manual estimation sheets.
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
									Modeling Pipeline
								</h2>
								<div className="w-16 h-1 rounded-full bg-purple-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs built a regression pipeline that turns historical records into an accurate, explainable estimate of the target value. The design deliberately balanced two goals that often pull apart—predictive accuracy and interpretability—so the team gets both a trustworthy number and a clear account of how it was reached.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-purple-500/20 bg-purple-500/5 text-purple-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>A number you can trust is a number you can explain:</strong> For a value the business must defend to customers and leadership, a black-box estimate would never have been adopted. The design paired an accurate model with clear driver contributions—showing how much each factor pushed the figure up or down. Where a simpler regression was nearly as accurate as a complex one, the interpretable choice won, because an estimate people understand is an estimate people act on.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Regression Analysis Pipeline Layers
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
							The engagement ran across three structured phases designed to prove predictive accuracy on real history, then deliver it as a tool the team trusts. OpenGridLabs embedded a team of data scientists and a data engineer alongside the client's commercial and analytics teams.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20" />
						
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
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(180,100%,50%)" : idx === 1 ? "hsl(280,100%,65%)" : "hsl(330,100%,60%)"}, transparent)` }}
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
							Outcomes were measured across a 90-day post-deployment window against the prior manual estimates, using untouched test data for model metrics and a controlled comparison for business impact.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before (manual)</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-purple-400">After (regression)</th>
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
								"We were pricing on instinct and hoping. Now we get a number backed by five years of data, with the reasons laid out—how much each factor moved it. Our estimates are tighter, our team agrees on them, and for the first time we can actually defend the figure."
							</p>
							<div className="w-12 h-px bg-purple-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Chief Revenue Officer</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential Technology Company</p>
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
								Need a number you can trust—and defend?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds regression analysis solutions—accurate value prediction, quantified drivers, honest error ranges, and in-workflow delivery—so your estimates are sharp, consistent, and explainable.
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
