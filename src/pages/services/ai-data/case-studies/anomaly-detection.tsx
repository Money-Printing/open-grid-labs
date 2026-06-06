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
	Database,
	ShieldAlert
} from "lucide-react";
import SEO from "../../../../components/seo";

const STATS = [
	{ value: "4.7×", label: "More fraud caught vs. rule-based", accent: "from-cyan-400 to-blue-500" },
	{ value: "−62%", label: "Fewer false positives bothering customers", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "<80ms", label: "Median scoring latency on live events", accent: "from-pink-500 to-rose-400" },
	{ value: "11 wk", label: "From brittle rules to live detection", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Anomalies were less than 1% of events—extreme class imbalance broke naive models" },
	{ text: "Brittle hand-tuned rules missed novel fraud and over-flagged legitimate customers" },
	{ text: "Few confirmed labels: most 'bad' events were never investigated or labelled" },
	{ text: "Decisions had to happen in milliseconds, on a 12M-events-per-day stream" },
	{ text: "Patterns shifted constantly as fraudsters adapted—yesterday's signals quietly stopped working" }
];

const SOLUTIONS = [
	{ text: "Unsupervised anomaly models (isolation forest, autoencoders) learning what normal looks like" },
	{ text: "A supervised model trained on the small set of confirmed labels, layered on top" },
	{ text: "Combined risk score blending unsupervised and supervised signals into one number" },
	{ text: "Real-time stream processing scoring every event in under 80 milliseconds" },
	{ text: "Investigation feedback loop turning analyst decisions into fresh labels and retraining" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Stream", items: ["Event ingestion", "Real-time feature computation", "Entity profiles & history", "Context enrichment"], color: "hsl(180,100%,50%)" },
	{ title: "Detection", items: ["Isolation forest", "Autoencoder reconstruction", "Time-series anomaly checks", "Supervised classifier on confirmed labels"], color: "hsl(210,100%,50%)" },
	{ title: "Decision", items: ["Combined risk score", "Allow / challenge / block thresholds", "Reason codes", "Analyst review queue"], color: "hsl(280,100%,65%)" },
	{ title: "Feedback", items: ["Analyst decisions captured", "New labels for retraining", "Drift & performance monitoring", "Threshold tuning"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Stream & Unsupervised Models (Weeks 1–4)",
		desc: "OpenGridLabs built the event ingestion and real-time feature pipeline, including entity profiles that capture each user's recent behaviour. Unsupervised anomaly models—isolation forest and an autoencoder—were trained on historical normal data, with explicit handling of the extreme class imbalance, so the system could flag novel deviations even without any labels.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Supervised Layer & Calibration (Weeks 5–8)",
		desc: "Using the small but trusted set of confirmed-fraud labels, a supervised classifier was trained to recognise known patterns, with techniques suited to severe imbalance. Outputs from the unsupervised and supervised models were blended into a single risk score, and thresholds were tuned per decision tier against the dollar cost of false positives versus missed fraud—rather than a single aggregate metric.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Real-Time Decisioning & Feedback (Weeks 9–11)",
		desc: "The full pipeline was deployed for real-time scoring with reason codes, allow/challenge/block decisioning, and an analyst review queue for ambiguous cases. Analyst decisions were captured as fresh labels feeding retraining, drift monitoring watched for shifting fraud patterns, and OpenGridLabs trained the client's risk and engineering teams to operate, tune, and extend the system independently.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Fraud caught (recall)", before: "Baseline", after: "4.7× baseline", change: "+370%" },
	{ metric: "False positives on real customers", before: "Baseline", after: "38% of baseline", change: "−62%" },
	{ metric: "Novel fraud patterns surfaced", before: "None until a rule was written", after: "Flagged on first appearance", change: "New capability" },
	{ metric: "Real-time scoring latency", before: "Rule scan (variable)", after: "<80 ms median", change: "Production-ready" },
	{ metric: "Analyst time on false alarms", before: "Majority of workload", after: "Sharply reduced", change: "Focus restored" },
	{ metric: "Adaptation to shifting patterns", before: "Manual rule edits", after: "Feedback loop & retraining", change: "Self-improving" },
	{ metric: "Combined fraud + friction cost", before: "—", after: "Materially lower", change: "ROI positive" }
];

const SUCCESS_FACTORS = [
	{
		title: "Unsupervised plus supervised, not one or the other",
		desc: "Unsupervised models caught what had never been seen; the supervised layer recognised what had. Combining them into a single risk score was what allowed the system to handle both known and emerging fraud—something neither approach delivers alone."
	},
	{
		title: "Cost-aware thresholds, not vanity metrics",
		desc: "Modelling the dollar cost of false positives and missed fraud—and tuning thresholds to minimise total loss—mattered more than chasing a high overall score. It is the difference between a metric that looks good and an outcome that is good."
	},
	{
		title: "Real-time was non-negotiable",
		desc: "Fraud decisions made in batches lose most of their value. Building for sub-100ms scoring on a streaming pipeline meant the system could allow, challenge, or block at the moment that matters, not after the fact."
	},
	{
		title: "Analyst feedback as the engine",
		desc: "The investigation queue did double duty—handling ambiguous cases and producing fresh labels that fed retraining. As fraudsters adapted, so did the system, turning a one-shot deployment into a self-improving capability."
	}
];

const FAQS = [
	{
		q: "What is anomaly detection?",
		a: "Anomaly detection is a machine learning approach that identifies data points, events, or behaviour that deviate significantly from normal patterns. It's used to spot fraud, security intrusions, equipment failures, and other rare but high-impact events. Unlike classification, which needs many examples of every category, anomaly detection typically learns what 'normal' looks like and flags whatever doesn't fit—making it well suited to problems where the unusual is rare and constantly evolving."
	},
	{
		q: "What is the difference between anomaly detection and classification?",
		a: "Classification assigns items to predefined categories using many labelled examples of each. Anomaly detection focuses on rare, unusual cases where labels are scarce and the patterns keep changing. It learns what normal looks like and flags deviations, often combining unsupervised methods with supervised models trained on the small set of confirmed anomalies—so it can catch new fraud or failures that no classifier has ever seen before."
	}
];

export default function AnomalyDetectionCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Real-Time Anomaly Detection Case Study | OpenGridLabs"
				description="How OpenGridLabs built a real-time anomaly detection system combining unsupervised and supervised models — catching 4.7x more fraud and cutting false positives by 62%."
				canonical="/services/ai-data/anomaly-detection"
				keywords="Anomaly Detection, Outlier Detection, Fraud Detection, Real-Time Monitoring, Isolation Forest, Autoencoders, Time Series Anomaly, Novelty Detection, Class Imbalance, Stream Processing, Intrusion Detection"
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
								How Real-Time Anomaly Detection Caught 4.7× More Fraud and Stopped Pestering Real Customers
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling company's brittle fraud rules were doing the worst of both worlds: missing real fraud while flagging legitimate customers. OpenGridLabs built a real-time anomaly detection system combining unsupervised models, supervised learning, and stream processing—catching 4.7× more fraud, cutting false alarms 62%, and making each decision in milliseconds.
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
										<span className="text-base font-semibold text-foreground">Fintech / SaaS (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scale</span>
										<span className="text-base font-semibold text-foreground">12M+ events / day</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">11 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Unsupervised · Supervised · Streaming · Real-time</span>
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
								Our client is a venture-backed fintech-adjacent company processing more than twelve million events a day—each one a potential opportunity, and each one a potential attack vector. Fraud was a real and growing problem: the small fraction of events that mattered most were rare, costly, and constantly shape-shifting. The defence in place was a tangle of hand-tuned rules built up over years, layered with one-off thresholds added every time a new fraud pattern surfaced.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The rules did the worst of both worlds. They missed most genuinely new fraud because nobody had written a rule for it yet, and they flagged a large volume of perfectly legitimate customers whose only sin was looking slightly unusual. Operations spent its time chasing false alarms while real losses kept leaking through, and every false flag pushed away a good customer. The team didn't need another rule. They needed a system designed for the actual problem: anomaly detection—learning what normal looks like and catching what doesn't fit, even patterns no one has seen before.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-950/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400">
									<ShieldAlert className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is Anomaly Detection?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Anomaly detection identifies data points, events, or behaviour that deviate significantly from normal patterns. It is used to spot fraud, security intrusions, equipment failures, and other rare but high-impact events. Unlike classification, which needs many examples of every category, anomaly detection typically learns what "normal" looks like and flags whatever doesn't fit—making it well suited to problems where the unusual is rare, costly, and constantly evolving.
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
							Five Anomaly Detection Gaps Resolved
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built real-time anomaly detection combining unsupervised and supervised learning.
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
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-400">Blueprint</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									System Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-cyan-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs built a real-time anomaly detection pipeline that ingests every event, scores it against models of normal and known-bad behaviour, and decides in milliseconds whether to allow, challenge, or block.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Both false alarms and missed fraud cost real money:</strong> The classic anomaly-detection mistake is optimising for one error at the expense of the other—catching more fraud while annoying customers into leaving, or smoothing the experience while losses bleed through. The design centred the trade-off explicitly: tuned thresholds per decision tier (allow, challenge, block), modelled the dollar cost of each error type, and chose operating points that minimised total loss rather than maximising a single statistic.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Anomaly Detection Architecture Layers
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
							The engagement ran across three structured phases designed to put a usable signal in front of analysts early, then sharpen it with their feedback. OpenGridLabs embedded a team of ML and streaming engineers and a fraud-analytics specialist alongside the client's risk team.
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
							Outcomes were measured across a 90-day window against the prior rule-based system, using analyst-confirmed labels as the ground truth for fraud and a controlled comparison for customer impact.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before (rules)</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400">After (anomaly detection)</th>
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
								"Our old system caught the easy stuff and made enemies of our best customers. Now the model flags real fraud—including patterns we'd never seen before—and waves our genuine users through. The analysts finally spend their day on cases that actually matter."
							</p>
							<div className="w-12 h-px bg-cyan-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Head of Risk</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential Fintech-Adjacent Company</p>
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
								Looking for the needle in your event stream?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds real-time anomaly detection—unsupervised plus supervised models, stream processing, cost-aware decisioning, and a feedback loop—so you catch what matters and leave the rest alone.
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
