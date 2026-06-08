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
	{ value: "58%", label: "Claims settled without human intervention", accent: "from-indigo-500 to-violet-600" },
	{ value: "3.2 days", label: "Average settlement time, from 18 days", accent: "from-indigo-500 to-violet-600" },
	{ value: "180K", label: "Annual claims on the platform", accent: "from-indigo-500 to-violet-600" },
	{ value: "11 mo", label: "From legacy to production STP", accent: "from-indigo-500 to-violet-600" }
];

const CHALLENGES = [
	{ text: "Every claim manually handled regardless of complexity — handler time misallocated" },
	{ text: "18-day average settlement time for claims many customers waited the same as complex ones" },
	{ text: "No automated fraud detection at FNOL — fraud signals reviewed manually only when flagged" },
	{ text: "No FNOL automation — customers required to call a contact centre even for simple claims" },
	{ text: "Claims team unable to focus on complex, high-value cases due to volume of low-complexity claims" }
];

const SOLUTIONS = [
	{ text: "Digital FNOL via app, web, and SMS with structured data capture replacing phone intake" },
	{ text: "ML-based complexity and fraud triage scoring each claim at FNOL — STP eligible vs. handler route" },
	{ text: "Straight-through processing engine handling low-complexity claims from intake to payment" },
	{ text: "Fraud scoring model with 200+ features including claims history, policy data, and network analysis" },
	{ text: "Optimised handler workflow for complex claims — pre-populated with all available claim data" }
];

const ARCHITECTURE_STAGES = [
	{ title: "FNOL", items: ["Digital intake (app/web/SMS)", "Structured data capture", "Image upload", "Telematics data"], color: "hsl(230,80%,60%)" },
	{ title: "Triage", items: ["Complexity score", "Fraud score", "Coverage verification", "STP eligibility decision"], color: "hsl(230,80%,60%)" },
	{ title: "STP Engine", items: ["Value assessment", "Authorisation rules", "Payment instruction", "Customer notification"], color: "hsl(230,80%,60%)" },
	{ title: "Handler Workflow", items: ["Complex claim routing", "Pre-populated data", "Reserve recommendation", "Litigation flags"], color: "hsl(230,80%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Digital FNOL and Coverage Verification (Months 1–4)",
		desc: "OpenGridLabs built the digital FNOL intake across app, web, and SMS channels, replacing the phone-first intake process. Automated coverage verification was built — checking policy validity, covered perils, and excess application at the moment of FNOL, with immediate customer confirmation of coverage status.",
		accent: "from-indigo-500 to-violet-500"
	},
	{
		number: "Phase 2",
		title: "ML Triage and Fraud Scoring (Months 5–8)",
		desc: "The ML complexity and fraud scoring models were built and trained on 3 years of claims and outcome data. The triage engine was deployed in shadow mode — scoring every claim without affecting routing — to validate accuracy before live triage decisions were made. The STP engine was built for the first STP-eligible claim categories.",
		accent: "from-violet-500 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Full STP Rollout and Handler Workflow (Months 9–11)",
		desc: "STP was expanded to all eligible claim categories. The handler workflow was rebuilt to consume the triage scores and pre-populated claim data — handlers were no longer starting from a blank record. Average handler handling time for complex claims decreased 34% because data gathering was automated.",
		accent: "from-purple-500 to-fuchsia-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Claims settled without human intervention", before: "0%", after: "58%", change: "58%" },
	{ metric: "Average settlement time", before: "18 days", after: "3.2 days", change: "3.2 days" },
	{ metric: "Fraud detection rate at FNOL", before: "~20% (post-assignment)", after: "Systematic scoring at intake", change: "Systematic scoring" },
	{ metric: "Customer satisfaction (NPS)", before: "Baseline", after: "+31 points", change: "+31 points" },
	{ metric: "Cost per claim (fully loaded)", before: "Baseline", after: "-38%", change: "-38%" },
	{ metric: "Handler capacity on complex claims", before: "~40% of time", after: "~85% of time", change: "~85% of time" }
];

const SUCCESS_FACTORS = [
	{
		title: "Complexity-based routing is the foundational design decision",
		desc: "A claims platform that routes all claims to handlers will always produce high handling costs and poor experience for simple claims. Segmenting claims by complexity at FNOL — before a handler sees them — changes everything downstream: cost, speed, and customer experience."
	},
	{
		title: "Digital FNOL produces better data than phone FNOL",
		desc: "A structured digital FNOL captures more complete and more accurate data than a call centre conversation, because the data fields are defined, the images are attached at submission, and the customer has time to provide accurate information. Better input data produces better triage decisions."
	},
	{
		title: "STP requires fraud detection, not fraud assumption",
		desc: "STP is only viable when fraud detection is systematic. A claims platform that processes STP claims without fraud scoring is exposed to organised fraud. Embedding a fraud score in the triage decision — and routing high-score claims to specialist handlers regardless of complexity — made STP commercially safe."
	}
];

const FAQS = [
	{
		q: "What is FNOL in insurance claims?",
		a: "FNOL (First Notice of Loss) is the initial report made by a policyholder to their insurer following an insured event — an accident, theft, or damage claim. FNOL captures the basic facts of the claim and initiates the claims process. Digital FNOL channels (app, web, SMS) improve data quality, reduce contact centre load, and enable faster automated processing compared to phone-only intake."
	},
	{
		q: "What percentage of insurance claims can be straight-through processed?",
		a: "The proportion of claims suitable for STP varies by product and insurer. For motor insurance, well-implemented STP systems typically achieve 50–70% STP rates for comprehensive claims. The STP-eligible population includes low-value, single-vehicle, covered-peril claims with low fraud scores and no litigation indicators. Complex, high-value, disputed, or fraud-suspected claims are always routed to handlers."
	}
];

export default function ClaimsProcessingCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Automated Claims Processing & STP Case Study | OpenGridLabs"
				description="How Automated Claims Processing Settled 58% of Motor Claims Without a Human Touch."
				canonical="/services/bfsi/claims-processing"
				keywords="Claims Processing, Straight-Through Processing, FNOL Automation, Motor Claims, Claims Triage, Fraud Detection, Digital Claims, Claims Automation, InsurTech, Insurance Technology, OpenGridLabs"
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
								How Automated Claims Processing Settled 58% of Motor Claims Without a Human Touch
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A motor insurer processing 180,000 claims annually was routing every claim through a manual handler regardless of complexity — a leaky bucket approach where a dented bumper received the same human attention as a total loss. OpenGridLabs built an intelligent claims platform: automated FNOL intake, ML-based complexity and fraud triage, straight-through processing for low-complexity claims, and an optimised handler workflow for complex cases — settling 58% of claims automatically and cutting average settlement time from 18 days to 3.2 days.
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
										<span className="text-base font-semibold text-foreground">Motor insurer (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scale</span>
										<span className="text-base font-semibold text-foreground">180,000 claims per year</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">11 months</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">FNOL automation · ML triage · STP engine · Fraud scoring · Handler workflow</span>
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
								Our client is a personal lines motor insurer processing approximately 180,000 claims per year across comprehensive, third-party fire and theft, and third-party only policies. Every claim — from a windscreen chip requiring a £60 repair to a total loss worth £35,000 — was assigned to a human claims handler from the moment of FNOL. The handler triage process was manual, inconsistent, and created a queue that meant even simple claims waited 3–5 days before a handler first reviewed them.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The consequence was a combination of high handling cost per claim and poor customer satisfaction — customers with simple claims waiting days for a decision that could have been made automatically at FNOL. The claims team was highly skilled but was applying that skill to a mix of low-complexity and high-complexity claims indiscriminately. OpenGridLabs built a triage system that applied human expertise where it was needed and automation where it wasn't.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-indigo-950/10 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-indigo-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
									<Zap className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is Straight-Through Processing?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Straight-through processing (STP) in insurance claims is the automated processing of a claim from FNOL to settlement without human intervention. STP is appropriate for claims meeting defined criteria — low value, low complexity, no fraud indicators, covered peril, valid policy — and uses automated rules and ML models to verify coverage, assess the claim, determine the settlement value, and authorise payment.
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
							Eliminating manual bottlenecks by deploying automated digital intake models, ML scoring engines, and targeted handler queues.
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
									Claims Processing Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-indigo-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Multi-channel digital intake structures streaming directly into real-time triage servers, straight-through assessment models, and pre-populated expert workflows.
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
							A systematic 3-phase roadmap leading from digital FNOL platforms to triage configurations and full straight-through processing.
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
							Decimating average claim lifetimes, reducing handling overheads, and maximizing fraud identification rates.
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
								"Our best claims handlers were spending half their time on claims that a system could settle better and faster. Moving them to complex claims exclusively did not just reduce costs — it improved outcomes on the cases that actually needed expertise."
							</p>
							<div className="w-12 h-px bg-indigo-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Head of Claims</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential Motor Insurer</p>
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
								Claims handlers spending time on £60 windscreen chips alongside £30,000 total losses?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds intelligent claims processing platforms — digital FNOL, ML triage, straight-through processing, and fraud scoring — that settle simple claims automatically and focus expert capacity where it matters.
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
