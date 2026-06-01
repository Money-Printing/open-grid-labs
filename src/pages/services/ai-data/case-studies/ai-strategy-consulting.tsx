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
	{ value: "5×", label: "Projected ROI on prioritized initiatives", accent: "from-cyan-400 to-blue-500" },
	{ value: "34", label: "Use cases scored and sequenced", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "3", label: "Quick-win pilots greenlit within 90 days", accent: "from-pink-500 to-rose-400" },
	{ value: "8 wk", label: "From kickoff to board-approved strategy", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "Dozens of unscored AI ideas competing for attention with no objective way to compare them" },
	{ text: "Disconnected pilots running in silos, with no shared metrics or business cases" },
	{ text: "No view of organisational AI readiness—data, skills, infrastructure, or culture" },
	{ text: "No governance, risk, or responsible-AI policy, raising client-confidentiality and reputational concerns" },
	{ text: "Leadership unable to commit budget without a defensible, sequenced plan and clear ROI" }
];

const SOLUTIONS = [
	{ text: "A structured AI maturity assessment scoring readiness across data, talent, technology, and governance" },
	{ text: "A value-versus-feasibility prioritization of 34 use cases into quick wins and strategic bets" },
	{ text: "A responsible-AI governance framework covering risk tiers, data handling, and human oversight" },
	{ text: "A phased three-year roadmap with funding gates, owners, and success metrics per initiative" },
	{ text: "A board-ready business case quantifying cost, benefit, and projected ROI for the portfolio" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Assess", items: ["AI maturity scoring", "Data & infrastructure audit", "Skills & culture review", "Competitive benchmarking"], color: "hsl(180,100%,50%)" },
	{ title: "Prioritize", items: ["Use-case discovery", "Value-vs-feasibility scoring", "Quick wins vs. strategic bets", "Portfolio shortlist"], color: "hsl(210,100%,50%)" },
	{ title: "Govern", items: ["Responsible-AI policy", "Risk tiering", "Data & client-confidentiality rules", "Human-oversight gates"], color: "hsl(280,100%,65%)" },
	{ title: "Roadmap", items: ["Phased 3-year plan", "Funding gates", "Initiative owners", "Success metrics & ROI model"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Discovery & Maturity Assessment (Weeks 1–3)",
		desc: "OpenGridLabs conducted structured interviews across leadership and delivery teams, audited data and infrastructure readiness, and benchmarked the firm against competitors. The output was an objective AI maturity score with clear strengths and gaps—giving leadership a shared, honest starting point rather than anecdote-driven debate.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Use-Case Prioritization & Governance (Weeks 4–6)",
		desc: "Through facilitated workshops, the team surfaced and scored 34 candidate use cases on business value and feasibility, plotting them on a prioritization matrix. In parallel, OpenGridLabs drafted a responsible-AI governance framework tailored to the firm's client-confidentiality obligations, so that prioritized initiatives arrived with guardrails already defined.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Roadmap & Business Case (Weeks 7–8)",
		desc: "The prioritized portfolio was sequenced into a phased three-year roadmap with funding gates, named owners, and success metrics. A board-ready business case modelled cost, benefit, and ROI for each phase. Three low-risk, high-value quick wins were greenlit immediately to build momentum and validate the approach within 90 days.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "AI use cases scored & sequenced", before: "0 (ad hoc)", after: "34", change: "Prioritized" },
	{ metric: "Approved AI investment budget", before: "Stalled", after: "Board-approved", change: "Unlocked" },
	{ metric: "Projected portfolio ROI (3-year)", before: "—", after: "5×", change: "5× ROI" },
	{ metric: "Quick-win pilots launched", before: "0", after: "3 within 90 days", change: "In motion" },
	{ metric: "Responsible-AI governance policy", before: "None", after: "Adopted firm-wide", change: "New capability" },
	{ metric: "AI maturity score", before: "2.1 / 5", after: "Roadmap to 4.0 / 5", change: "Clear path" },
	{ metric: "Disconnected pilots", before: "7 siloed", after: "Consolidated", change: "Aligned" }
];

const SUCCESS_FACTORS = [
	{
		title: "Honest assessment before ambition",
		desc: "Starting with an objective maturity score replaced wishful thinking with a shared, evidence-based view of where the firm actually stood—making every subsequent prioritization decision defensible."
	},
	{
		title: "Value and feasibility, scored together",
		desc: "Plotting use cases on both axes prevented the two classic traps: chasing exciting-but-impractical ideas, and shipping easy-but-pointless ones. Quick wins were chosen to fund and de-risk the bigger bets."
	},
	{
		title: "Governance as an enabler, not a brake",
		desc: "For a firm built on client confidentiality, defining responsible-AI guardrails up front meant initiatives could move fast with confidence—rather than stalling later under risk and compliance objections."
	},
	{
		title: "A roadmap owned by the client",
		desc: "Every framework stage produced an artifact the firm controls—maturity score, prioritized portfolio, governance policy, and funded roadmap—so execution could continue independently long after the engagement closed."
	}
];

const FAQS = [
	{
		q: "What is an AI strategy and why does a company need one?",
		a: "An AI strategy is a structured plan that aligns artificial intelligence investment with business goals. It defines which problems AI should solve, prioritizes use cases by value and feasibility, establishes the data and governance foundations required, and lays out a phased roadmap. Without one, organisations tend to fund disconnected pilots that rarely reach production or deliver measurable return."
	},
	{
		q: "How do you prioritize AI use cases?",
		a: "Use cases are usually prioritized on two axes: business value—revenue, cost, risk, or experience impact—and feasibility, covering data readiness, technical complexity, and the organisational change required. Plotting candidates on a value-versus-feasibility matrix surfaces quick wins that build momentum and larger strategic bets to sequence over time."
	}
];

export default function AIStrategyConsultingCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="AI Strategy & Advisory Case Study | OpenGridLabs"
				description="How a mid-sized professional services firm turned AI ambition into a 3-year board-approved strategy, achieving a 5x projected ROI and greenlighting quick-win pilots."
				canonical="/services/ai-data/ai-strategy-consulting"
				keywords="AI Strategy, AI Roadmap, AI Maturity Assessment, Use Case Prioritization, AI Governance, responsible AI"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(210,100%,50%) 0%, hsl(260,100%,60%) 50%, transparent 100%)`
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
									Case Study · AI Strategy & Advisory
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How a Professional Services Firm Turned AI Ambition into a 3-Year Roadmap
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A mid-sized consulting and professional services firm engaged OpenGridLabs to cut through AI hype and build a grounded strategy—an AI maturity assessment, a prioritized use-case portfolio, a governance framework, and a phased roadmap that turned scattered experiments into a focused plan with a 5× projected ROI.
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
										<span className="text-base font-semibold text-foreground">Professional Services (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Size</span>
										<span className="text-base font-semibold text-foreground">1,200+ employees</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">8-week engagement</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Focus</span>
										<span className="text-base font-semibold text-foreground">Assessment · Prioritization · Governance · Roadmap</span>
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
								Our client is a mid-sized professional services firm delivering advisory, audit, and managed services to enterprise customers. With over 1,200 employees and intense pressure from larger competitors already marketing AI-enabled offerings, leadership knew that standing still was not an option. The board had approved a discretionary budget for AI—but had no agreed view on where to spend it.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The symptoms were familiar. Individual teams had spun up disconnected experiments: a chatbot here, a document-summarization tool there, a partner quietly trialling a coding assistant. None were measured, none were governed, and none connected to a coherent business case. Enthusiasm was high and direction was absent. What the firm needed was not another tool—it was an AI strategy: a clear, defensible plan tying AI investment to business outcomes, sequenced so that early wins would fund and de-risk the larger bets.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-purple-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-purple-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is an AI Strategy—and Why Does It Matter?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									An AI strategy aligns artificial intelligence investment with business goals. It defines which problems AI should solve, prioritizes use cases by value and feasibility, establishes the data and governance foundations required, and lays out a phased roadmap. Without one, organisations fund disconnected pilots that rarely reach production or deliver measurable return.
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
							Five Strategic Challenges Overcome
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs transformed scattered experiments and pilot hesitation into a board-approved implementation plan.
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
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-purple-400">Framework</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									AI Strategy Framework
								</h2>
								<div className="w-16 h-1 rounded-full bg-purple-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs applied a four-stage framework that takes an organisation from an honest assessment of where it stands to a funded, sequenced plan of action. Each stage produces a concrete artifact the client owns and can act on independently—no dependency on the consultant to move forward.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-purple-500/20 bg-purple-500/5 text-purple-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Governance built in, not bolted on:</strong> For a firm handling confidential client data, responsible AI was non-negotiable. The framework defined risk tiers, data-handling and confidentiality rules, and human-oversight requirements before any pilot launched—ensuring every initiative could pass client, regulatory, and internal-audit scrutiny from day one rather than retrofitting controls later.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									AI Strategy Engagement Artifacts & Stages
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
							The engagement ran across three phases over eight weeks, designed to build executive alignment as the work progressed rather than presenting conclusions at the end. OpenGridLabs worked alongside a steering group of partners, the CIO, and operational leads.
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
							Strategy engagements are measured by the clarity and commitment they produce, not just systems deployed. Within eight weeks, the firm moved from indecision to a funded, governed, and sequenced plan.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Outcome</th>
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
								"We came in with a budget and a hundred opinions. We left with a plan the whole board could stand behind. The difference wasn't more AI—it was knowing exactly where to start, what to ignore, and how to govern it responsibly."
							</p>
							<div className="w-12 h-px bg-purple-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Managing Partner</p>
								<p className="text-sm text-muted-foreground">Confidential Professional Services Firm</p>
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
								Ready to turn AI ambition into an executable strategy?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs helps organisations assess readiness, prioritize use cases, govern responsibly, and build phased AI roadmaps with a clear business case.
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
