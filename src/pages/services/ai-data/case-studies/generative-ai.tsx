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
	{ value: "10K", label: "On-brand creative assets per day", accent: "from-emerald-400 to-teal-500" },
	{ value: "−73%", label: "Cost per production-ready asset", accent: "from-cyan-400 to-blue-500" },
	{ value: "89%", label: "Pass rate through quality & brand filters", accent: "from-purple-500 to-fuchsia-400" },
	{ value: "10 wk", label: "From brief to production pipeline", accent: "from-pink-500 to-rose-400" }
];

const CHALLENGES = [
	{ text: "Off-the-shelf models generated visually generic output with no brand consistency" },
	{ text: "No quality guarantee — model outputs varied wildly and required heavy manual review" },
	{ text: "No safeguard against off-brand, inappropriate, or legally risky content" },
	{ text: "No integration with the creative team's brief and approval workflow" },
	{ text: "Output at scale meant volume decisions were needed before quality filters existed" }
];

const SOLUTIONS = [
	{ text: "A diffusion model fine-tuned on the brand's visual library using LoRA" },
	{ text: "A structured prompt-engineering layer encoding brand guidelines, style, and restrictions" },
	{ text: "Automated quality and brand-compliance filters scoring and triaging every output" },
	{ text: "A human-review queue for edge cases, with approvals feeding back into the fine-tune" },
	{ text: "An API-connected brief intake and asset-delivery workflow for the creative team" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Brief", items: ["Creative brief intake", "Structured prompt assembly", "Brand-guideline encoding", "Negative prompt constraints"], color: "hsl(180,100%,50%)" },
	{ title: "Generate", items: ["LoRA-fine-tuned diffusion model", "Multi-seed batch generation", "Style conditioning", "Resolution & aspect control"], color: "hsl(210,100%,50%)" },
	{ title: "Filter", items: ["Aesthetic quality scoring", "Brand-consistency classifier", "Safety & compliance checks", "Edge-case review queue"], color: "hsl(280,100%,65%)" },
	{ title: "Deliver", items: ["Approved asset delivery", "DAM integration", "Reviewer feedback loop", "Fine-tune improvement cycle"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Brand Fine-Tuning (Weeks 1–4)",
		desc: "OpenGridLabs curated a training set from the brand's existing visual library, cleaned and annotated it for style and subject consistency, and fine-tuned the diffusion model using LoRA. The fine-tune was evaluated against the brand team's own quality ratings on a held-out set until outputs were consistently on-brand without prompting.",
		accent: "from-cyan-400 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Filters, Guardrails & Prompt Layer (Weeks 5–8)",
		desc: "Automated quality and brand-compliance scoring was built and calibrated against brand-team ratings, reducing manual review to a triage queue rather than an exhaustive check. A structured prompt-engineering layer encoded brand guidelines and content restrictions, and negative prompts were refined to suppress off-brand outputs before they reached the filter.",
		accent: "from-purple-500 to-fuchsia-400"
	},
	{
		number: "Phase 3",
		title: "Workflow Integration & Enablement (Weeks 9–10)",
		desc: "The pipeline was connected to the creative team's brief intake and digital asset management system, with a lightweight approval workflow for the review queue. OpenGridLabs trained the creative team to write effective briefs and the technical team to retrain and extend the fine-tune as the brand evolves.",
		accent: "from-pink-500 to-rose-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Assets produced per day", before: "~200 (agency-limited)", after: "10,000+", change: "50× volume" },
	{ metric: "Cost per production-ready asset", before: "Baseline", after: "27% of baseline", change: "−73%" },
	{ metric: "Brand consistency", before: "Variable", after: "Filter-enforced", change: "Consistent" },
	{ metric: "Asset pass rate (quality + brand)", before: "—", after: "89%", change: "High-yield" },
	{ metric: "Time from brief to assets", before: "Days–weeks", after: "Minutes–hours", change: "Same-day" },
	{ metric: "Creative team capacity", before: "Bottleneck", after: "Freed for strategy", change: "Unlocked" }
];

const SUCCESS_FACTORS = [
	{
		title: "Fine-tuning beats prompting for brand identity",
		desc: "A general model prompted to be \"on-brand\" guesses at what that means. A model fine-tuned on the brand's own images has absorbed the specific visual identity — colours, composition, aesthetic — that words can't fully specify."
	},
	{
		title: "Quality filters make scale trustworthy",
		desc: "Volume without quality control produces noise. Automated scoring and a calibrated pass threshold meant the ten thousand daily outputs were genuinely production-ready, not a pile requiring exhaustive human triage."
	},
	{
		title: "Guardrails protect the brand and the business",
		desc: "Safety and compliance checks were not bolted on — they were built into the pipeline from the start. Off-brand or legally risky outputs were caught before reaching the review queue, not discovered after publication."
	},
	{
		title: "Human review stays in the loop where it matters",
		desc: "The edge-case queue preserved human judgement on genuinely ambiguous outputs, and reviewers' decisions fed directly back into fine-tune improvements — so the model kept learning the brand's evolving standards rather than drifting from them."
	}
];

const FAQS = [
	{
		q: "What is generative AI?",
		a: "Generative AI models create new content — images, text, audio, video, or code — by learning the statistical patterns of a training dataset. For images, diffusion models learn to iteratively denoise random noise into coherent images guided by text prompts. Fine-tuning on domain-specific data enables brand-consistent, high-volume generation."
	},
	{
		q: "What is a diffusion model and how does it generate images?",
		a: "A diffusion model learns to generate images by learning the reverse of a noise-adding process. During training, clean images are progressively corrupted with noise. The model learns to predict and remove that noise step by step. At generation time it starts from pure noise and iteratively denoises it into a coherent image, guided by a text prompt or other conditioning signal."
	}
];

export default function GenerativeAICaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Generative AI Case Study | OpenGridLabs"
				description="How OpenGridLabs built a custom generative AI pipeline with diffusion model fine-tuning, prompt guardrails, and automated brand quality filters."
				canonical="/services/ai-data/generative-ai"
				keywords="Generative AI, Diffusion Models, Image Generation, LoRA Fine-tuning, Brand-Consistent Generation, AI Content Pipeline, Prompt Engineering, Quality Filtering, Creative AI, Content Automation"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(330,100%,60%) 0%, hsl(280,100%,65%) 50%, transparent 100%)`
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
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 backdrop-blur-md">
									Case Study · Artificial Intelligence
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Generative AI Produced 10,000 On-Brand Creative Assets a Day — and Cut Content Costs 73%
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A fast-scaling company's creative operation couldn't keep pace with the volume of content its marketing and product teams needed. OpenGridLabs built a generative AI content pipeline — fine-tuning a diffusion model on the brand's visual identity, combining it with prompt-engineering guardrails and quality filtering — to produce ten thousand on-brand assets a day at a fraction of the previous cost.
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
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-pink-500" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-pink-400" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">Media / E-commerce (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scale</span>
										<span className="text-base font-semibold text-foreground">10K+ assets / day</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">10 weeks to production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Stack</span>
										<span className="text-base font-semibold text-foreground">Diffusion Fine-tuning · Prompt Engineering · Quality Filters</span>
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
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-pink-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-pink-400 transition-colors">
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
								<BrainCircuit className="w-5 h-5 text-pink-400" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pink-400">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-pink-400" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client is a fast-scaling company in a visually driven category — their marketing, product, and commerce surfaces are all image-heavy, and the volume of creative assets they need keeps growing faster than any agency or in-house team could deliver. Commissioning photography or illustration for every use case was expensive, slow, and logistically complex; stock imagery looked generic; and the team trying to keep pace was stretched thin.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The opportunity was obvious: generative AI had reached a point where a well-configured model could produce photorealistic, varied, on-brand images at scale. But the off-the-shelf tools generated generic output rather than brand-consistent work, produced no reliable quality guarantees, and had no safeguards against off-brand or inappropriate content slipping through. What the team needed was a purpose-built generative AI pipeline: fine-tuned on their brand identity, guardrailed with prompt and quality controls, and integrated into the workflow where creative teams could direct it.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-pink-955/20 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-pink-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center border border-pink-500/20 text-pink-400">
									<Sparkles className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is Generative AI?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Generative AI models create new content — images, text, audio, video, or code — by learning the statistical patterns of a training dataset. For image generation, diffusion models now dominate: they learn to iteratively denoise random noise into coherent images, guided by text prompts or other conditioning signals. Fine-tuning on brand-specific data teaches the model a company's visual identity, enabling high-volume generation of on-brand original content rather than generic stock imagery.
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
							Five Production Gaps Resolved
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							How OpenGridLabs built a controlled, scalable image generation pipeline.
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
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-pink-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
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
										<ArrowRight className="w-6 h-6 text-pink-400" />
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
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-pink-400" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pink-400">Blueprint</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									Pipeline Architecture
								</h2>
								<div className="w-16 h-1 rounded-full bg-pink-400" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									OpenGridLabs built a generation pipeline that takes a creative brief from the team, generates a batch of candidates from the fine-tuned model, scores them against quality and brand criteria, and delivers the passing set to an approval queue — with the whole loop feeding back into ongoing model improvement.
								</p>

								{/* Shield Warning */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-pink-500/20 bg-pink-500/5 text-pink-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Fine-tuning teaches the model the brand — prompts alone cannot:</strong> Prompting a general diffusion model to stay on-brand produces inconsistent results because the model has no deep knowledge of the brand's specific visual identity. Fine-tuning on the brand's own curated image library using LoRA taught the model the particular colour palette, composition style, and aesthetic that words struggle to specify precisely — cutting the manual correction work dramatically compared to prompt-only approaches.
									</p>
								</div>
							</div>

							{/* Interactive Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Generative AI Content Pipeline Layers
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
							The engagement ran across three phases over ten weeks, starting with brand fine-tuning and ending with a fully integrated creative workflow. OpenGridLabs embedded a team of generative AI engineers and a brand specialist alongside the client's creative and product teams.
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
										<span className="text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-400/10 px-3.5 py-1 rounded-full border border-pink-400/20">
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
							Outcomes were measured over 60 days post-deployment against the prior agency and stock-imagery baseline.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before (agency/stock)</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-pink-400">After (generative AI)</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{TABLE_RESULTS.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-pink-400 font-bold text-base">{row.after}</td>
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
						<div className="absolute top-8 left-10 text-pink-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"The model learned our brand in a way we couldn't get from prompting alone. We now produce in a day what used to take a week, and our creative team spends its time on the work that actually needs human judgement — not on churning out variants."
							</p>
							<div className="w-12 h-px bg-pink-400 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Head of Creative</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential Media Company</p>
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
								className="glass-panel p-8 md:p-12 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-pink-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-pink-400" />
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
											<HelpCircle className="w-5 h-5 text-pink-400" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-pink-400' : ''}`} />
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
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-pink-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-pink-400 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Need generative AI that actually knows your brand?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds generative AI pipelines — diffusion fine-tuning, brand-consistent generation, quality filters, and workflow integration — so your creative output scales without drifting off-brand.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-pink-400 to-cyan-500 hover:shadow-pink-400/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(244,63,94,0.2)`
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
