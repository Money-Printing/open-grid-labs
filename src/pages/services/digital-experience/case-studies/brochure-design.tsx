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
	BookOpen
} from "lucide-react";
import SEO from "../../../../components/seo";

const STATS = [
	{ value: "19%", label: "Shorter consideration phase when brochure used", accent: "from-amber-500 to-orange-600" },
	{ value: "1st", label: "Highest-rated sales asset (team survey)", accent: "from-yellow-500 to-amber-600" },
	{ value: "10 wk", label: "Brief to print-ready and digital delivery", accent: "from-orange-500 to-red-600" },
	{ value: "94%", label: "Sales team now regularly using the brochure", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Company-centric narrative structure — history and milestones before client relevance" },
	{ text: "Stock photography communicating generic professionalism rather than real capability" },
	{ text: "Dense copy paragraphs with no visual hierarchy or scanning affordance" },
	{ text: "No grid system — layouts varied by page with no visual coherence across the brochure" },
	{ text: "Print-only format unsuitable for the 60% of prospects receiving it digitally" }
];

const SOLUTIONS = [
	{ text: "Client-perspective narrative: problem context, service response, evidence, credentials" },
	{ text: "Editorial photography brief and art direction for a custom shoot" },
	{ text: "A 12-column grid system with consistent layout logic across all pages" },
	{ text: "Typographic hierarchy making every spread scannable at 15 seconds before commitment to read" },
	{ text: "Dual format: 250gsm cover print brochure and an interactive PDF with hyperlinked navigation" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Strategy", items: ["Content Strategy", "Narrative arc", "Audience perspective", "Content audit", "Writing brief"], color: "hsl(45,100%,50%)" },
	{ title: "Layout", items: ["12-column grid", "Typographic hierarchy", "Spread logic", "Image-to-text ratios"], color: "hsl(35,100%,50%)" },
	{ title: "Design", items: ["Editorial layout", "Photography integration", "Colour application", "Brand system"], color: "hsl(20,100%,50%)" },
	{ title: "Production", items: ["Print specification", "Interactive PDF build", "Proof", "Print management"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Content Strategy & Structure (Weeks 1–3)",
		desc: "OpenGridLabs worked with the leadership and sales teams to rebuild the content structure from the client's perspective. The narrative arc was agreed in outline before any design began. A photography brief was written for a custom shoot commissioned as part of the project — specific scenes and subjects showing real work, real people, and real outcomes rather than stock imagery.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Design & Layout (Weeks 4–8)",
		desc: "The grid system was established and all 12 pages were designed. The editorial layout — generous white space, strong typographic hierarchy, full-bleed photography alternating with text-heavy spreads — was designed to read as a quality publication rather than a sales document. Every spread was reviewed by the sales team for relevance and by the design team for visual quality.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Print Production & Digital Format (Weeks 9–10)",
		desc: "The print brochure was produced: 250gsm soft-touch laminated cover, 170gsm silk inner pages, perfect binding. The interactive PDF was built with bookmarks, hyperlinked contents, and embedded video links to case study evidence. Both formats were delivered simultaneously.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Sales team brochure usage", before: "~20% (rarely sent)", after: "94% (regular use)", change: "94% (regular use)" },
	{ metric: "Consideration phase length (when brochure sent)", before: "Baseline", after: "-19%", change: "-19%" },
	{ metric: "Prospect engagement rating", before: "Poor (feedback)", after: "High (follow-up data)", change: "High (follow-up data)" },
	{ metric: "Photography quality perception", before: "Stock (perceived)", after: "Real work (perceived)", change: "Real work (perceived)" },
	{ metric: "Print vs digital format split", before: "Print only", after: "70% digital, 30% print", change: "70% digital, 30% print" },
	{ metric: "Content clarity (prospect survey)", before: "2.9/5", after: "4.4/5", change: "4.4/5" }
];

const SUCCESS_FACTORS = [
	{
		title: "Client perspective is the narrative strategy",
		desc: "A brochure written from the company's perspective is a company document. A brochure written from the client's perspective is a sales tool. The sequence change — leading with the client's problem rather than the company's history — was the most impactful single decision."
	},
	{
		title: "Editorial photography earns reading time",
		desc: "Stock photography is processed and dismissed. Custom photography showing real work, real people, and real outcomes earns a second look and communicates credibility that stock images structurally cannot. The photography brief was as important as the design brief."
	},
	{
		title: "The grid makes pages feel designed",
		desc: "A 12-column grid applied consistently across all pages is invisible when it works — the reader sees engaging layouts, not a grid. It makes the difference between pages that feel designed and pages that feel assembled."
	}
];

const FAQS = [
	{
		q: "What is the ideal length for a company capabilities brochure?",
		a: "8–16 pages is the most common range for capabilities brochures. The right length is determined by the depth of content the sales context requires — not by the amount of information the company wants to communicate. Most brochures should be edited significantly from their first draft. A well-edited 8-page brochure will always outperform a comprehensive 24-page one."
	},
	{
		q: "Should a brochure be designed for print or digital?",
		a: "Ideally both. A print-first design can be adapted into a digital PDF relatively easily; a digital-first design may require significant work to produce a high-quality printed version. Designing for print first — then adapting for digital with interactive elements — typically produces better results in both formats."
	}
];

export default function BrochureDesignCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Capabilities Brochure Design Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned a capabilities brochure with a client-first narrative and editorial grid system, shortening sales consideration by 19%."
				canonical="/services/digital-experience/brochure-design"
				keywords="Brochure Design, Capabilities Brochure, Sales Brochure, Editorial Design, Grid System, Print Brochure, Digital PDF, Corporate Brochure, B2B Marketing, Graphic Design"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Amber Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(45,100%,50%) 0%, hsl(35,100%,45%) 50%, transparent 100%)`
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
								<span className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 dark:text-amber-400 backdrop-blur-md">
									Case Study · Graphic Design
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How a Redesigned Capabilities Brochure Became the Sales Team's Most-Used Asset and Shortened the Consideration Phase 19%
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A company had a capabilities brochure that the sales team rarely sent and clients rarely read. It was twelve pages of dense copy, stock photography, and a timeline of company milestones that told the company's story in the order it happened rather than the order it was useful to a prospective client. OpenGridLabs redesigned it as a sales tool with a client-facing narrative, editorial photography direction, and a grid system that made the content genuinely engaging.
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
								<div className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full bg-amber-400" />
								<div className="flex items-center gap-3 border-b border-white/10 pb-4">
									<Terminal className="w-6 h-6 text-amber-500" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">Professional Services / B2B (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scope</span>
										<span className="text-base font-semibold text-foreground">12-page capabilities brochure — full redesign</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">10 weeks</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Format</span>
										<span className="text-base font-semibold text-foreground">Print (250gsm cover, 170gsm inner) and interactive PDF</span>
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
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-amber-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
								<div className="space-y-2 relative z-10">
									<p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground group-hover:text-amber-500 transition-colors">
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
								<BookOpen className="w-5 h-5 text-amber-500" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-amber-500">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-amber-500" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client had a 12-page capabilities brochure that was technically complete — it covered the company's history, services, team, and clients — and practically useless in a sales context. The company history started on page 2; clients' needs didn't appear until page 9. The photography was generic stock. The copy was written for the company, not for the reader. The sales team had largely stopped sending it because the feedback was that it 'didn't say anything interesting'.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								The redesign started from the same question as all effective sales communication: what does the prospect need to know, in what order, to move from consideration to confidence? The answer was almost exactly the reverse of the existing structure. OpenGridLabs rebuilt the narrative from the client's perspective: problem and context first, service capabilities second, evidence and case studies third, team and credentials last — supported by editorial photography that showed real work rather than stock confidence.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-amber-950/10 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-amber-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
									<Zap className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is a Brochure?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									A brochure is a multi-page printed or digital document used to communicate a company's capabilities, products, or services to a target audience. Unlike a website, a brochure is a fixed-sequence communication with a defined narrative arc — it tells a story from page 1 to the last page, with every element of design serving the goal of moving the reader from interest to confidence. Good brochure design combines editorial quality, clear hierarchy, and a grid system that makes pages visually engaging without sacrificing legibility.
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
							Replacing self-centric copy and generic stock layouts with a structured, client-first capabilities presentation.
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
								className="glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 hover:border-amber-500/20 transition-all duration-300 shadow-lg relative overflow-hidden"
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
										<ArrowRight className="w-6 h-6 text-amber-500" />
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
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
						
						<div className="grid lg:grid-cols-12 gap-12 items-center">
							<div className="lg:col-span-5 space-y-6">
								<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-amber-500" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-amber-500">Design Framework</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									Brochure Design Process
								</h2>
								<div className="w-16 h-1 rounded-full bg-amber-500" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									A thorough design strategy establishing narrative grids, layout structures, and high-quality printed outputs.
								</p>

								{/* Design Process Alert */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 text-amber-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Why this process:</strong> Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project.
									</p>
								</div>
							</div>

							{/* Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Brochure Pipeline Layers
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
							A ten-week capabilities brochure design roadmap from strategy and grid setups to final print production.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 opacity-20" />
						
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
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(45,100%,50%)" : idx === 1 ? "hsl(35,100%,50%)" : "hsl(20,100%,50%)"}, transparent)` }}
								/>
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
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
							Measuring team survey ratings, consideration timeline shifts, and layout clarity improvements.
						</p>
					</div>

					<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-white/5 border-b border-white/10">
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-amber-500">After</th>
										<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
									</tr>
								</thead>
								<tbody>
									{TABLE_RESULTS.map((row, idx) => (
										<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
											<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
											<td className="p-6 text-amber-500 dark:text-amber-400 font-bold text-base">{row.after}</td>
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
						<div className="absolute top-8 left-10 text-amber-500/10 opacity-20 pointer-events-none">
							<QuoteIcon className="w-36 h-36" />
						</div>
						<div className="space-y-8 relative z-10">
							<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
								"The old brochure told them about us. The new one tells them about themselves. It starts with the problem they have, not with us. That change alone — before the design, before the photography — was the reason it started working."
							</p>
							<div className="w-12 h-px bg-amber-500 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Head of Business Development</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential Professional Services Company</p>
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
								className="glass-panel p-8 md:p-10 rounded-[32px] border border-black/5 dark:border-white/5 hover:border-amber-500/20 transition-all duration-300 shadow-xl space-y-4"
							>
								<div className="flex items-center gap-3">
									<Activity className="w-5 h-5 text-amber-500" />
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
											<HelpCircle className="w-5 h-5 text-amber-500" />
											<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
										</div>
										<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-500' : ''}`} />
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
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none bg-amber-400"
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto text-amber-500 animate-pulse" />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Sales brochure the team doesn't send?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs designs capabilities brochures — client-first narrative, editorial photography, and a grid system — that become sales tools rather than storage liabilities.
							</p>
							<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
								<Link 
									to="/contact-us"
									className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:shadow-amber-500/20"
									style={{ 
										boxShadow: `0 10px 30px rgba(245,158,11,0.2)`
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
