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
	{ value: "71%", label: "Reduction in per-query inference cost", accent: "from-cyan-400 to-blue-500" },
	{ value: "3.2×", label: "Faster median response latency", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "38%", label: "Increase in answer accuracy on eval sets", accent: "from-pink-500 to-rose-400" },
	{ value: "12 wk", label: "From prototype to full production deployment", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Every request—trivial or complex—hit a single frontier model, making inference cost the largest line item in COGS" },
	{ text: "Responses occasionally fabricated facts not present in the customer's own documents, undermining enterprise trust" },
	{ text: "P95 latency exceeded 9 seconds during peak load, hurting user experience and retention" },
	{ text: "No systematic evaluation harness—quality regressions shipped silently with each prompt change" },
	{ text: "Zero observability into token spend, cache behaviour, or per-customer cost attribution" }
];

const SOLUTIONS = [
	{ text: "Intelligent model-routing layer directing simple queries to small fine-tuned models and reserving frontier models for hard cases" },
	{ text: "Retrieval-augmented generation grounding every answer in the customer's own indexed knowledge base" },
	{ text: "Semantic caching that returns vetted answers for repeated and near-duplicate queries instantly" },
	{ text: "An automated evaluation harness with golden datasets gating every model and prompt change before release" },
	{ text: "Full LLMOps observability dashboard with token spend, latency, and per-customer cost attribution" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Ingestion", items: ["Document Loaders", "Chunking & Embedding Pipeline", "Vector Database", "Metadata & Access-Control Indexing"], color: "hsl(180,100%,50%)" },
	{ title: "Orchestration", items: ["Intent Classification", "Model Router", "Prompt Templating", "Semantic Cache", "Token Budgeting & Rate Limiting"], color: "hsl(210,100%,50%)" },
	{ title: "Model Layer", items: ["Fine-Tuned Small Models", "Frontier Model Fallback", "RAG Retriever", "Re-Ranker", "Structured Output & Guardrails"], color: "hsl(280,100%,65%)" },
	{ title: "Eval & Ops", items: ["Automated Eval Harness", "Golden Datasets", "Cost & Latency Telemetry", "Hallucination & Drift Monitoring", "Human Feedback Loop"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Evaluation Baseline & RAG Foundation (Weeks 1–4)",
		desc: "Before changing anything, OpenGridLabs built an evaluation harness with golden datasets drawn from real customer queries and expert-labelled answers. This made quality measurable for the first time. In parallel, the team stood up the retrieval pipeline—chunking, embedding, and indexing customer documents—so the model could be grounded in trusted data rather than relying on parametric memory.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Fine-tuning & Model Routing (Weeks 5–9)",
		desc: "Using the labelled data, OpenGridLabs fine-tuned compact open models to match frontier-model quality on the most common query types at a fraction of the cost. An intent classifier and router were introduced to send each request to the cheapest model that could answer it correctly, escalating to the frontier model only when confidence was low. Every routing rule was validated against the eval harness before going live.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Caching, Observability & Hardening (Weeks 10–12)",
		desc: "Semantic caching was layered in to eliminate redundant inference on repeated queries. A full observability dashboard exposed token spend, latency percentiles, cache hit rates, and per-customer cost. Guardrails for structured output and hallucination detection were finalised, and the client's engineers were trained to run the eval harness themselves so quality gates would outlast the engagement.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Per-query inference cost", before: "Baseline", after: "29% of baseline", change: "−71%" },
	{ metric: "Median response latency", before: "4.8 s", after: "1.5 s", change: "−69%" },
	{ metric: "P95 latency (peak load)", before: "9.2 s", after: "3.1 s", change: "−66%" },
	{ metric: "Answer accuracy (eval set)", before: "61%", after: "84%", change: "+38%" },
	{ metric: "Hallucination rate", before: "9.4%", after: "1.2%", change: "−87%" },
	{ metric: "Cache hit rate (repeat queries)", before: "0%", after: "41%", change: "+41 pts" },
	{ metric: "Gross margin on AI features", before: "—", after: "+34 points", change: "Margin restored" }
];

const SUCCESS_FACTORS = [
	{
		title: "Evaluation before optimisation",
		desc: "By building a measurable eval harness in week one, every subsequent change could be judged on evidence rather than intuition. This turned a subjective 'does it feel better?' debate into a quantifiable quality gate."
	},
	{
		title: "Right-sizing the model to the task",
		desc: "Most queries did not need a frontier model. Routing the easy majority to small fine-tuned models—and reserving expensive capacity for genuinely hard cases—was the single largest driver of the cost reduction."
	},
	{
		title: "RAG for truth, fine-tuning for behaviour",
		desc: "By combining them: retrieval grounded answers in the customer's real data, while fine-tuning shaped tone, format, and domain reasoning. The combination cut hallucinations sharply."
	},
	{
		title: "Observability as a first-class feature",
		desc: "Per-customer cost and latency telemetry meant the client could finally price, forecast, and optimise with confidence—turning their LLM from an unpredictable expense into a managed, profitable capability."
	}
];

const FAQS = [
	{
		q: "What is the difference between RAG and fine-tuning?",
		a: "Retrieval-augmented generation grounds a model in external, up-to-date knowledge at query time, making it ideal for factual accuracy and frequently changing data. Fine-tuning adjusts the model's weights to specialise its tone, format, and reasoning. In production, the two are complementary—fine-tuning shapes behaviour while RAG supplies current, trusted knowledge."
	},
	{
		q: "How do you reduce LLM inference costs at scale?",
		a: "The biggest levers are intelligent model routing (sending simple queries to smaller, cheaper models), semantic caching of repeated work, prompt compression, and substituting compact fine-tuned models for large general-purpose ones wherever accuracy allows. Together these can reduce per-query costs by well over half without sacrificing quality."
	}
];

export default function LargeLanguageModelsCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};


	return (
		<>
			<SEO
				title="LLM Cost & Latency Optimization Case Study | OpenGridLabs"
				description="How OpenGridLabs cut LLM inference costs by 71% and sped up response latency by 3.2x for an enterprise knowledge assistant product."
				canonical="/services/ai-data/large-language-models"
				keywords="Large Language Models, LLM inference cost, RAG, Fine-tuning, Small Language Models, LLMOps"
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
									Case Study · Artificial Intelligence
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Production-Grade LLMs Cut Inference Costs 71% for a High-Growth AI Company
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling AI product company partnered with OpenGridLabs to take large language models from promising prototype to reliable production—combining fine-tuning, retrieval-augmented generation, and intelligent model routing to deliver accuracy and economics that finally made sense at scale.
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
										<span className="text-base font-semibold text-foreground">AI / SaaS (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scale</span>
										<span className="text-base font-semibold text-foreground">8M+ queries / month</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">12 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">LLM Fine-tuning · RAG · Model Routing · LLMOps</span>
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
								Our client is a venture-backed AI company building a knowledge-assistant product used by enterprise customers across legal, financial, and technical-support teams. After an early version built on a single large general-purpose model proved the concept, adoption grew faster than the infrastructure could economically support. By the time they engaged OpenGridLabs, the product was serving more than eight million queries per month—and the unit economics were heading in the wrong direction.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Every query, simple or complex, was routed to the same expensive frontier model. Latency was inconsistent, responses occasionally hallucinated facts that weren't in the customer's own data, and the cost of goods sold was eroding gross margin to the point where leadership feared it would threaten the next funding round. The team didn't need a better demo. They needed large language models that were accurate, fast, observable, and economically sustainable in production.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-purple-950/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-purple-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Does It Mean to Productionize an LLM?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									A working prompt is not a production system. Productionizing a large language model means grounding it in trusted data (RAG), specialising its behaviour where needed (fine-tuning), routing each request to the right-sized model, caching repeated work, and wrapping the whole pipeline in evaluation, monitoring, and guardrails so quality and cost stay predictable at scale.
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
							Five Optimization Challenges Overcome
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs transformed an expensive, hallucinating prototype into a fast, predictable enterprise system.
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
									OpenGridLabs designed a layered LLM platform that sits between the client's application and the underlying model providers. The architecture is provider-agnostic—models can be swapped or added without application changes—and is built for evaluation, cost control, and regulatory-grade data handling from the ground up.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-purple-500/20 bg-purple-500/5 text-purple-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Privacy-first by design:</strong> Customer data stays isolated per tenant, with retrieval scoped by access controls so no answer can leak across organisations. Prompts and completions are logged but redacted of PII, and no customer data is used to train shared models.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Production LLM Platform Architecture
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
							OpenGridLabs embedded a cross-functional team of ML engineers, an LLM evaluation specialist, and a platform architect alongside the client's team.
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
							Outcomes were measured across a 60-day post-deployment window against pre-engagement baselines, demonstrating massive quality and cost optimization.
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
								"We thought scaling our LLM meant spending more. OpenGridLabs showed us it meant architecting smarter. We serve better answers, faster, for a fraction of the cost—and for the first time we can actually see where every token goes."
							</p>
							<div className="w-12 h-px bg-purple-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— VP of Engineering</p>
								<p className="text-sm text-muted-foreground">Confidential venture-backed AI Company</p>
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
								Ready to take your LLM from prototype to production?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds production-grade LLM platforms—fine-tuning, RAG, model routing, and LLMOps—tuned for accuracy, latency, and cost at scale.
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
