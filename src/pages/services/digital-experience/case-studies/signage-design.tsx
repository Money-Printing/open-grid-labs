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
	PaintbrushIcon
} from "lucide-react";
import SEO from "../../../../components/seo";

const STATS = [
	{ value: "91%", label: "Visitors: 'space communicates company's character'", accent: "from-amber-500 to-orange-600" },
	{ value: "10 wk", label: "Design completion before office move", accent: "from-yellow-500 to-amber-600" },
	{ value: "18", label: "Branded touchpoints across the new space", accent: "from-orange-500 to-red-600" },
	{ value: "0", label: "Generic 'EXIT' signs used in the wayfinding system", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Generic fit-out plan with no brand integration — signage planned as functional rather than expressive" },
	{ text: "Six-week timeline from engagement to office move requiring immediate scope definition" },
	{ text: "Interior design already complete — environmental branding needed to work within fixed architectural decisions" },
	{ text: "No wayfinding system defined — fire safety and meeting room identification not yet specified" },
	{ text: "Reception and entrance area had no visual identity treatment beyond the landlord's standard hoarding" }
];

const SOLUTIONS = [
	{ text: "A wayfinding system using the brand typeface and colour system throughout — no generic signage" },
	{ text: "A reception logo wall using dimensional letters in the brand mark with a feature lighting treatment" },
	{ text: "Eight meeting rooms named after brand-relevant concepts with illustrated name plates" },
	{ text: "Four feature walls with large-scale typographic and illustrative treatments expressing brand values" },
	{ text: "External building signage and entrance treatment establishing street-level brand presence" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Discovery", items: ["Space plan review", "Brand personality mapping", "Content strategy for walls", "Supplier scoping"], color: "hsl(45,100%,50%)" },
	{ title: "Design", items: ["Wayfinding system", "Reception identity", "Feature walls", "External signage", "Room naming"], color: "hsl(35,100%,50%)" },
	{ title: "Production", items: ["Supplier specification", "Materials selection", "Installation brief", "Phased delivery"], color: "hsl(20,100%,50%)" },
	{ title: "Experience", items: ["Space walk-through", "Photography", "Brand story integration", "Future-phase plan"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Scope & Content Strategy (Weeks 1–2)",
		desc: "OpenGridLabs walked the space plan with the leadership team, mapping every surface and identifying the 18 brand touchpoints with the highest impact. A content strategy was written for each feature wall — what it would say, show, and communicate, and how it would relate to the brand narrative.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Design & Specification (Weeks 3–8)",
		desc: "Each of the 18 touchpoints was designed: the wayfinding system (specification and artwork for all directional and identification signs), the reception wall (dimensional letter specification and lighting brief), the four feature walls (large-format artwork for vinyl and direct print), and the external signage (planning specification and installation brief).",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Production & Installation (Weeks 9–14)",
		desc: "Production was managed across three specialist suppliers — signage, vinyl, and the dimensional reception piece. Installation was phased to meet the office move date. OpenGridLabs was present on installation day to ensure quality and make real-time adjustments.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Visitor survey — space communicates brand character", before: "Not measured", after: "91%", change: "91%" },
	{ metric: "Branded touchpoints in space", before: "0 (generic fit-out planned)", after: "18", change: "18" },
	{ metric: "Meeting room identification", before: "Standard room numbers", after: "Named and illustrated", change: "Named and illustrated" },
	{ metric: "External street-level brand presence", before: "None (landlord standard)", after: "Full branded entrance", change: "Full branded entrance" },
	{ metric: "Employee brand pride (pulse survey)", before: "Pre-move baseline", after: "+38% post-move", change: "+38% post-move" },
	{ metric: "Recruiter/candidate first impression", before: "—", after: "Consistently positive feedback", change: "Consistently positive feedback" }
];

const SUCCESS_FACTORS = [
	{
		title: "Every surface is a brand touchpoint",
		desc: "Spaces communicate whether they are designed to or not. A space with generic signage and no brand presence communicates that the brand wasn't considered. A space where every wall has been thought about communicates intentionality — which is itself a brand quality."
	},
	{
		title: "Wayfinding can carry brand voice",
		desc: "A wayfinding system using the brand typeface, the brand colour, and the brand's tone of voice is a branding system. A wayfinding system using generic ISO symbols and Arial is a compliance exercise. Both get people to the right meeting room; only one does it in a way that reinforces the brand."
	},
	{
		title: "Named rooms > numbered rooms",
		desc: "Meeting rooms named after concepts relevant to the brand's history, values, or aspirations give employees a vocabulary for talking about the space that reflects the brand, and give visitors something distinctive to notice and remember."
	}
];

const FAQS = [
	{
		q: "What is the difference between signage design and environmental branding?",
		a: "Signage design focuses on functional wayfinding and identification — getting people to the right place and meeting safety requirements. Environmental branding is a broader discipline that uses physical space to express brand identity and values — encompassing signage, but also feature walls, material choices, spatial narrative, and the brand experience of moving through a space."
	},
	{
		q: "What is a wayfinding system?",
		a: "A wayfinding system is a set of signs, symbols, and spatial cues that help people navigate a physical environment. A branded wayfinding system applies the organisation's visual identity to all navigational touchpoints — directional arrows, room identification, floor levels, and emergency information — creating a consistent visual experience throughout the space."
	}
];

export default function SignageDesignCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Signage Design Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a complete environmental branding system for a new HQ — wayfinding, reception, feature walls, and external signage — achieving 91% brand character recognition from visitors."
				canonical="/services/digital-experience/signage-design"
				keywords="Signage Design, Environmental Branding, Office Branding, Wayfinding, Feature Walls, Reception Design, Brand Experience, Interior Brand Design, Dimensional Signage, Brand Identity"
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
									Case Study · Brand Identity
								</span>
							</div>

							<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								How Environmental Branding Transformed a New Office into a Brand Immersion That 91% of Visitors Said Communicated the Company's Character
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A company moving into a significant new headquarters had a choice: fill the space with generic signage and some framed mission statements, or design the environment as a brand experience. OpenGridLabs designed a complete environmental branding system — reception identity, wayfinding, feature walls, external signage, and meeting room naming — that turned the new office into a three-dimensional expression of the brand.
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
										<span className="text-base font-semibold text-foreground">Technology / Growth-stage (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scope</span>
										<span className="text-base font-semibold text-foreground">Complete environmental branding for new HQ</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">10 weeks design + 4 weeks production</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Deliverables</span>
										<span className="text-base font-semibold text-foreground">Wayfinding · Reception · Feature walls · External · Meeting rooms</span>
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
								<PaintbrushIcon className="w-5 h-5 text-amber-500" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-amber-500">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-amber-500" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client was moving from a serviced office into a purpose-built headquarters — their first permanent space, and one large enough to accommodate their 200-person team with room to grow. The fit-out was being managed by an interior design firm. The brand had not been briefed into the space design until OpenGridLabs was engaged, six weeks before the move, to produce the signage and environmental graphics.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								OpenGridLabs argued for a broader brief than 'signs' — the opportunity of a new headquarters was to design a space where the brand was present everywhere, not just at the reception desk and the fire exits. Every surface, every wall, every room name was an opportunity to express the brand's values, its history, its culture, and its character. The result was a 200-person space that clients, recruits, and partners consistently described as unlike any tech company office they'd visited.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-amber-950/10 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-amber-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
									<Zap className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is Environmental Branding?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Environmental branding (also called experiential branding or brand environment design) is the practice of expressing a brand's identity through physical spaces — signage, wall graphics, wayfinding systems, reception areas, and architectural interventions. It makes a brand's values and character tangible and immersive, giving employees, clients, and visitors a three-dimensional experience of the brand that no digital touchpoint can replicate.
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
							Transforming a generic fit-out into a 200-person brand environment across 18 fully designed touchpoints — on time for the office move.
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
								<div className="flex items-center gap-2">
									<Layers className="w-5 h-5 text-amber-500" />
									<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-amber-500">Design Framework</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
									Environmental Branding Process
								</h2>
								<div className="w-16 h-1 rounded-full bg-amber-500" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									A discovery-led process mapping every surface, designing every touchpoint, and managing production across specialist suppliers to hit the office move date.
								</p>

								{/* Design Process Alert */}
								<div className="flex items-start gap-4 p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 text-amber-300">
									<ShieldCheck className="w-6 h-6 flex-shrink-0" />
									<p className="text-sm font-medium leading-relaxed">
										<strong>Why this process:</strong> Every stage produces a decision that makes the next stage faster. Strategy before design, research before concepts, concepts before execution — each gate eliminates the rework that comes from skipping it.
									</p>
								</div>
							</div>

							{/* Visual Map of the Architecture */}
							<div className="lg:col-span-7 space-y-4">
								<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
									Environmental Branding Pipeline Layers
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
							A 14-week engagement from space walk-through and content strategy through design, production management, and on-site installation.
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
							A 200-person headquarters transformed into a three-dimensional brand experience — 18 touchpoints, zero generic signage, 91% visitor recognition.
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
								"Every recruit we've brought in since the move comments on the office. Not 'nice office' — specifically on the walls, the feel, the sense that someone cared about this place. That's exactly what we wanted: a space that does our recruiting pitch before the interview starts."
							</p>
							<div className="w-12 h-px bg-amber-500 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Chief People Officer</p>
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
								New space with no brand in it?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs designs environmental branding systems — wayfinding, reception identity, feature walls, and external signage — that turn physical spaces into three-dimensional brand experiences.
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
