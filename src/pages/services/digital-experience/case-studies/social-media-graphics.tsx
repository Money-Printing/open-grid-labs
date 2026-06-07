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
	Paintbrush
} from "lucide-react";
import SEO from "../../../../components/seo";

const STATS = [
	{ value: "3×", label: "Posting frequency with same design headcount", accent: "from-cyan-500 to-blue-600" },
	{ value: "58%", label: "Lift in average post engagement rate", accent: "from-teal-500 to-cyan-600" },
	{ value: "72", label: "Branded templates across all platforms", accent: "from-blue-500 to-cyan-600" },
	{ value: "6 wk", label: "Brief to live template system", accent: "from-cyan-400 to-blue-500" }
];

const CHALLENGES = [
	{ text: "Every social post requiring a designer, limiting frequency to 6–8 posts per month" },
	{ text: "No visual consistency between posts — different team members using different approaches" },
	{ text: "Platform specifications (correct sizes, safe zones) not known to the marketing team" },
	{ text: "Engagement low partly because inconsistent design prevented brand recognition across the feed" },
	{ text: "No scalable system for seasonal content, product launches, and campaign adaptations" }
];

const SOLUTIONS = [
	{ text: "72 branded Figma templates covering 8 content types across 4 platforms and 3 format sizes" },
	{ text: "Locked brand elements (logo, colours, typefaces) with clearly labelled editable content zones" },
	{ text: "Platform size guide and safe zone documentation for the marketing team" },
	{ text: "Seasonal template packs for the top 6 annual campaign moments" },
	{ text: "A 30-minute onboarding workshop enabling the team to use the full system independently" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Foundation", items: ["Platform colour system", "Typography at social scale", "Logo lockup variants", "Photography style"], color: "hsl(180,100%,50%)" },
	{ title: "Architecture", items: ["Content type taxonomy", "Format per platform", "Locked vs editable zones", "Grid system"], color: "hsl(195,100%,50%)" },
	{ title: "Production", items: ["72 Figma templates", "Platform-specific testing", "Accessibility-checked contrast"], color: "hsl(210,100%,50%)" },
	{ title: "Handoff", items: ["Team onboarding", "Usage guide", "Seasonal packs", "Expansion framework"], color: "hsl(225,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Audit, Architecture & Brand Application (Weeks 1–2)",
		desc: "OpenGridLabs audited all existing social content, interviewed the marketing team about their most common content types, and designed the template architecture: 8 content categories (announcement, thought leadership, product, event, stat, quote, team, seasonal) × 3 platform formats × 4 platforms. The brand system was adapted for social scale — font sizes that work at mobile thumbnail, colours that pop in a crowded feed.",
		accent: "from-cyan-500 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Template Production (Weeks 3–5)",
		desc: "All 72 templates were produced in Figma with locked brand elements, clearly labelled editable zones, and placeholder content demonstrating how each template should be used. Every template was exported at the correct dimensions for its platform and verified on the actual platform interface.",
		accent: "from-blue-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "Onboarding, Seasonal Packs & Handoff (Week 6)",
		desc: "A 30-minute Figma onboarding workshop walked the marketing team through the full system. Seasonal template packs for the next six campaign moments were delivered at launch. An expansion framework documented how to add new content types to the system as needs evolved.",
		accent: "from-teal-500 to-cyan-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Posting frequency", before: "6–8 / month", after: "20+ / month", change: "3× more" },
	{ metric: "Average engagement rate", before: "Baseline", after: "+58%", change: "+58%" },
	{ metric: "Post production time", before: "45–60 min (designer)", after: "<15 min (self-service)", change: "<15 min" },
	{ metric: "Brand consistency across posts", before: "Low", after: "High (template-enforced)", change: "High (template-enforced)" },
	{ metric: "Design team time on social", before: "~30% of capacity", after: "<5%", change: "<5%" },
	{ metric: "New post type production time", before: "Days (new brief)", after: "Hours (new template)", change: "Hours (new template)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Template design is system design",
		desc: "Designing 72 templates is not 72 individual design tasks — it is one design task repeated with systematic variation. The investment is in the system architecture and the brand application at social scale; each template is an instance of that system."
	},
	{
		title: "Locked elements protect the brand",
		desc: "A template where the logo can be moved, the colours can be changed, or the font can be swapped is not a branded template — it's a blank canvas with brand assets nearby. Locking brand elements while exposing content zones makes on-brand production structurally guaranteed."
	},
	{
		title: "Fifteen minutes changes the behaviour",
		desc: "A post that takes 45 minutes to produce through a design brief happens occasionally. A post that takes 15 minutes with a template happens routinely. The speed improvement is not just efficiency — it is the behaviour change that enables a three-times increase in posting frequency."
	}
];

const FAQS = [
	{
		q: "What size should social media graphics be?",
		a: "Key sizes: Instagram feed 1080×1080px (square) or 1080×1350px (portrait); Instagram/Facebook stories 1080×1920px; LinkedIn feed 1200×627px; LinkedIn stories 1080×1920px; Facebook feed 1200×630px; X (Twitter) 1600×900px. All platforms support additional formats — always check the current platform documentation as requirements change."
	},
	{
		q: "Should social media graphics be designed in Figma or Canva?",
		a: "Figma is preferred for template systems used by teams with design access and higher brand fidelity requirements — locked components and design system integration make it more robust. Canva is preferred when the content team has no design access and needs a more accessible tool — the trade-off is less precise brand control. Both can deliver good results with the right system design."
	}
];

export default function SocialMediaGraphicsCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Social Media Graphics Template System Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a complete social media graphics template system that tripled posting frequency and lifted engagement 58%."
				canonical="/services/digital-experience/social-media-graphics"
				keywords="Social Media Graphics, Figma Templates, Social Media Design, Brand Templates, LinkedIn Graphics, Instagram Design, Template System, Graphic Design"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Cyan Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(200,100%,45%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/digital-experience" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to Digital Experience Design
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
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 backdrop-blur-md">
									Case Study · Graphic Design
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How a Social Media Graphics Template System Tripled Posting Frequency and Lifted Engagement 58%
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A company wanted to increase its social media presence significantly but couldn't afford to send every post to a designer. Posting frequency was being throttled by design bandwidth. OpenGridLabs designed a complete branded template system — Figma templates for every post format across every platform the company used — that enabled the marketing team to produce on-brand, visually consistent social content independently, tripling posting frequency and lifting engagement 58%.
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
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-cyan-500" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-cyan-500" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">B2B SaaS (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Platforms</span>
										<span className="text-base font-semibold text-foreground">LinkedIn · Instagram · X · Facebook</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">6 weeks</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Templates</span>
										<span className="text-base font-semibold text-foreground">72 branded templates across all platforms</span>
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
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-cyan-500 transition-colors">
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
								<Paintbrush className="w-5 h-5 text-cyan-500" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-500">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-cyan-500" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client's marketing team wanted to post 5 times per week across four social platforms. Their actual posting frequency was 6–8 times per month — not for lack of content ideas or distribution strategy, but because every post required a designer, and the designer's time was limited. Each post meant a brief, a design round, a review, and a delivery. Most posts didn't get made.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The answer was not more designers — it was a template system that moved the design work from per-post production to system design. OpenGridLabs designed the system: 72 branded templates covering every post format and content type the marketing team regularly needed, built in Figma with locked brand elements and editable content zones. The team could produce any post in under 15 minutes without opening a design brief.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-950/10 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-500 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-500">
									<Zap className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Are Social Media Graphics Templates?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Social media graphics templates are pre-designed, branded frames for social media posts that maintain visual consistency while allowing content to be customised by non-designers. A well-designed template system locks brand elements — logo placement, colour application, typography — while exposing editable text and image zones. The result is on-brand social content produced at the speed of content writing rather than the speed of design.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Challenges vs Solutions Delivered */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-16">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Gap & The Solution</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Challenges & Solutions
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							Resolving bottlenecked postings and lack of visual alignment by implementing a secure components framework.
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
										<ArrowRight className="w-6 h-6 text-cyan-500" />
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
									<Layers className="w-5 h-5 text-cyan-500" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-500">Design Framework</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									Social Media Template System
								</h2>
								<div className="w-16 h-1 rounded-full bg-cyan-500" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									A four-stage system designed to take the team from foundational brand specs to onboarding and expansion.
								</p>

								{/* Design Process Alert */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-cyan-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Why this process:</strong> Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project.
									</p>
								</div>
							</div>

							{/* Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Template Pipeline Layers
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
													{idx === 1 && <Database className="w-4 h-4" style={{ color: stage.color }} />}
													{idx === 2 && <Layers className="w-4 h-4" style={{ color: stage.color }} />}
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

				{/* Engagement Approach Timeline */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="text-center mb-20">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Roadmap</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Engagement Approach
						</h2>
						<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
							A six-week design timeline structured into strategic phases of audit, production, and handoff.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 opacity-20" />
						
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
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(180,100%,50%)" : idx === 1 ? "hsl(200,100%,50%)" : "hsl(220,100%,50%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
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
							Deploying templates allowed the team to post three times more frequently while lowering production overheads.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-500">After</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{TABLE_RESULTS.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-cyan-500 dark:text-cyan-400 font-bold text-base">{row.after}</td>
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
								"We had content to post and no way to post it without waiting three days for a design. The templates changed the maths entirely. Now posting is a fifteen-minute task for the writer. The design is already done."
							</p>
							<div className="w-12 h-px bg-cyan-500 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Content Marketing Manager</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential SaaS Company</p>
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
								className="glass-panel p-8 md:p-10 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-cyan-500" />
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
											<HelpCircle className="w-5 h-5 text-cyan-500" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-500' : ''}`} />
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
							<Sparkles className="w-10 h-10 mx-auto text-cyan-500 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Designer bottleneck limiting your posting frequency?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs builds social media graphics template systems — 72 branded templates, locked brand elements, and editable content zones — that let your team post on-brand in 15 minutes.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-cyan-500/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(6,182,212,0.2)`
									}}
								>
									Talk to our team
								</Link>
								<Link 
									to="/services/digital-experience"
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
