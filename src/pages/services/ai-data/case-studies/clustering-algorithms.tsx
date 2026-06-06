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
	{ value: "6", label: "Distinct customer segments discovered", accent: "from-cyan-400 to-blue-500" },
	{ value: "44%", label: "Lift in engagement from targeted action", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "0.68", label: "Silhouette score — well-separated clusters", accent: "from-pink-500 to-rose-400" },
	{ value: "8 wk", label: "From raw data to actionable segments", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Every customer treated the same, with no segmentation to tailor strategy" },
	{ text: "No labels and no known segments—the right groups were genuinely unknown" },
	{ text: "No way to tell how many distinct segments existed, or what defined them" },
	{ text: "90+ behavioural signals made the data far too high-dimensional to eyeball" },
	{ text: "Past manual segments were arbitrary guesses that didn't reflect real behaviour" }
];

const SOLUTIONS = [
	{ text: "Unsupervised clustering on behavioural data to discover natural customer groups" },
	{ text: "Rigorous selection of the right number of clusters using validation metrics" },
	{ text: "Dimensionality reduction to make 90+ signals tractable and visualisable" },
	{ text: "Clear, named profiles describing who each discovered segment actually is" },
	{ text: "A repeatable model that assigns new and existing customers to their segment" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data", items: ["Behavioural signals", "Usage & engagement data", "Cleaning & scaling", "Feature selection"], color: "hsl(180,100%,50%)" },
	{ title: "Reduction", items: ["Dimensionality reduction (PCA / UMAP)", "Correlation pruning", "Visualisation of structure"], color: "hsl(210,100%,50%)" },
	{ title: "Clustering", items: ["K-means & hierarchical & DBSCAN", "Choosing k", "Silhouette & stability validation", "Comparison"], color: "hsl(280,100%,65%)" },
	{ title: "Profiling", items: ["Segment profiles & names", "Business interpretation", "Segment assignment model", "Activation in workflows"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Preparation & Reduction (Weeks 1–3)",
		desc: "OpenGridLabs cleaned and scaled the behavioural data—an essential step, since clustering is highly sensitive to how features are weighted—and selected the signals that genuinely described customer behaviour. Dimensionality reduction compressed ninety-plus signals into a tractable space, both to help the algorithms and to let the team visualise the structure hiding in the data.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Clustering & Validation (Weeks 4–6)",
		desc: "The team ran multiple clustering algorithms—k-means, hierarchical, and density-based—and compared them, systematically testing how many clusters best fit the data using silhouette scores and stability checks rather than a guess. Six well-separated, stable segments emerged consistently across methods, giving confidence the structure was real and not an artifact of one algorithm.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Profiling, Naming & Activation (Weeks 7–8)",
		desc: "Each segment was profiled and given a clear, business-friendly name and description, so 'Cluster 4' became a recognisable kind of customer the team could picture and discuss. OpenGridLabs delivered a model that assigns any customer to their segment, wired segment membership into the client's marketing and product workflows, and trained the team to re-run and refresh the analysis as behaviour evolves.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Customer segments identified", before: "0 (treated as one)", after: "6 distinct", change: "Discovered" },
	{ metric: "Engagement (segment-targeted)", before: "Baseline", after: "+44%", change: "+44%" },
	{ metric: "Cluster separation (silhouette)", before: "—", after: "0.68", change: "Well-separated" },
	{ metric: "Messaging & onboarding", before: "Identical for all", after: "Tailored per segment", change: "Targeted" },
	{ metric: "High-value segment", before: "Unidentified", after: "Found & prioritised", change: "Revenue focus" },
	{ metric: "At-risk segment", before: "Invisible", after: "Surfaced for retention", change: "Actionable" },
	{ metric: "Segment assignment for new customers", before: "Not possible", after: "Automatic", change: "Automatic" }
];

const SUCCESS_FACTORS = [
	{
		title: "Validate that the clusters are real",
		desc: "Any algorithm returns clusters; proving they are genuine took silhouette scores, stability checks, and agreement across multiple methods. Six segments appeared consistently—strong evidence the structure was real, not an artifact."
	},
	{
		title: "Preparation decides the outcome",
		desc: "Clustering is acutely sensitive to scaling and feature choice, so cleaning, scaling, and reducing dimensionality mattered more than the algorithm itself. Get the inputs wrong and the groups are meaningless, however sophisticated the method."
	},
	{
		title: "A segment must be recognisable to be useful",
		desc: "The breakthrough was translating statistical clusters into named, human profiles the business instantly recognised. A cluster nobody can picture never gets acted on; a vivid one reshapes strategy."
	},
	{
		title: "Discovery is only half the value—activation is the rest",
		desc: "Delivering a model that assigns customers to segments and wiring it into real workflows turned a one-shot deployment into a operational capability the company keeps using as its customer base evolves."
	}
];

const FAQS = [
	{
		q: "What are clustering algorithms?",
		a: "Clustering algorithms are unsupervised machine learning methods that group similar data points together without any predefined labels. Instead of predicting a known target, they discover natural structure in data—such as distinct customer segments, behaviour patterns, or anomalies. Common algorithms include k-means, hierarchical clustering, and DBSCAN, each suited to different data shapes and goals."
	},
	{
		q: "How is clustering different from classification?",
		a: "Classification is supervised: it learns from labelled examples to assign new items to known categories. Clustering is unsupervised: there are no labels and no predefined categories, so the algorithm discovers the groupings itself based on similarity. Classification answers 'which known bucket does this belong to?', while clustering answers 'what natural groups exist here that we didn't already know about?'."
	}
];

export default function ClusteringAlgorithmsCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Clustering Algorithms Case Study | OpenGridLabs"
				description="How OpenGridLabs applied clustering algorithms to uncover six distinct customer segments hidden in behavioral data, lifting engagement by 44%."
				canonical="/services/ai-data/clustering-algorithms"
				keywords="Clustering Algorithms, Customer Segmentation, Unsupervised Learning, K-Means Clustering, Hierarchical Clustering, DBSCAN, Dimensionality Reduction, Cluster Analysis, Pattern Discovery, Silhouette Score, Market Segmentation"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(280,100%,65%) 50%, transparent 100%)`
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
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 backdrop-blur-md">
									Case Study · Data Science & AI
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Clustering Algorithms Revealed Six Customer Segments Hidden in Plain Sight
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling company treated all its customers as one undifferentiated mass because it had no idea they weren't. OpenGridLabs applied clustering algorithms—unsupervised learning that finds structure without being told what to look for—to uncover six natural, distinct segments hidden in the data, turning one-size-fits-all into targeted strategy that lifted engagement 44%.
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
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-cyan-400" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-cyan-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">Technology / SaaS (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Data</span>
										<span className="text-base font-semibold text-foreground">80K+ customers, 90+ behavioural signals</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">8-week engagement</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Unsupervised Learning · K-Means · Profiling</span>
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
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-cyan-400 transition-colors">
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
								<BrainCircuit className="w-5 h-5 text-cyan-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-cyan-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client is a venture-backed company with more than eighty thousand customers and a wealth of behavioural data—how people signed up, what they used, how often, and how they engaged over time. Yet for all that data, the company operated as if its customers were a single, uniform group: the same onboarding, the same messaging, the same product nudges sent to everyone. It worked unevenly, and nobody could say why some customers thrived while others quietly drifted away.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The instinct was that different kinds of customers were hiding in the data, behaving in distinct ways—but they had no labels, no predefined segments, and no idea how many groups there might be or what defined them. This is precisely the problem clustering algorithms exist to solve: unsupervised learning that, without being told what to look for, discovers the natural groupings already present in data. The company didn't need a model to predict a known answer—it needed one to reveal an answer no one yet knew.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-950/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<Layers className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Are Clustering Algorithms?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Clustering algorithms are unsupervised machine learning methods that group similar data points together with no predefined labels. Rather than predicting a known target, they discover natural structure—distinct customer segments, behaviour patterns, or anomalies. Common algorithms include k-means, hierarchical clustering, and DBSCAN, each suited to different data shapes. The output is a set of groups the data formed on its own, ready to be understood and acted on.
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
							Five Customer Profiling Gaps Resolved
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built a customer segmentation pipeline using unsupervised learning.
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
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
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
										<ArrowRight className="w-6 h-6 text-cyan-400" />
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
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-cyan-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Pipeline</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									Analysis Pipeline
								</h2>
								<div className="w-16 h-1 rounded-full bg-cyan-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs built an end-to-end clustering pipeline that turns raw behavioural data into named, actionable segments. Because clustering has no "correct answer" to check against, the pipeline leans heavily on validation and human interpretation—making sure the groups it finds are both statistically sound and genuinely meaningful to the business.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Clustering's hardest question isn't "how" — it's "is this real?":</strong> Any algorithm will return clusters, even from noise; the discipline is proving the groups are genuine and useful. OpenGridLabs validated separation and stability with metrics like the silhouette score, tested how many clusters truly fit the data, and—crucially—worked with the business to confirm each segment described a real, recognisable kind of customer. A statistically tidy cluster that means nothing to the business is a failure; a well-separated one that the team instantly recognises is gold.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Clustering Analysis Pipeline Layers
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
							Engagement Approach
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							The engagement ran across three phases over eight weeks, structured to move from raw data to segments the business could name, trust, and act on. OpenGridLabs embedded a team of data scientists alongside the client's marketing, product, and customer-success teams.
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
										<span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3.5 py-1 rounded-full border border-cyan-400/20">
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
							Outcomes were measured across a 90-day window after the segments were activated, comparing segment-targeted treatment against the prior one-size-fits-all approach.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before (one-size-fits-all)</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400">After (segmented)</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{TABLE_RESULTS.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-cyan-400 font-bold text-base">{row.after}</td>
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
						<div className="absolute top-8 left-10 text-cyan-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"We'd been talking to eighty thousand people as if they were one person. Clustering showed us they were really six very different groups—including a high-value one and an at-risk one we'd never seen. The moment we tailored our approach to each, the numbers moved."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— VP of Growth</p>
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
								className="glass-panel p-8 md:p-12 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-cyan-400" />
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
											<HelpCircle className="w-5 h-5 text-cyan-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
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
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-cyan-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-cyan-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								What natural groups are hiding in your data?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs uses clustering algorithms—unsupervised learning, rigorous validation, and clear profiling—to discover the real segments in your data and turn them into targeted, operational strategy.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-cyan-400 to-purple-500 hover:shadow-cyan-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(34,211,238,0.2)`
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
