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
	{ value: "3.2×", label: "Response rate increase on same audience", accent: "from-amber-500 to-orange-600" },
	{ value: "50K", label: "Flyers per quarter — production-efficient spec", accent: "from-yellow-500 to-amber-600" },
	{ value: "3 wk", label: "Brief to print-ready delivery", accent: "from-orange-500 to-red-600" },
	{ value: "38%", label: "Reduction in design and print cost per response", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Six visual elements competing for the reader's attention with no clear hierarchy" },
	{ text: "Logo and brand name as the largest element — already known to the recipient and least decision-relevant" },
	{ text: "QR code and website URL smaller than decorative elements — the action buried by the aesthetics" },
	{ text: "Terms and conditions in unreadable 6pt type taking up 20% of the flyer's surface" },
	{ text: "No visual distinction between the offer and the action — both communicated in the same size type" }
];

const SOLUTIONS = [
	{ text: "A three-element hierarchy: action (largest) → offer summary (medium) → brand + details (small)" },
	{ text: "QR code at the largest practically useful size — 25mm × 25mm minimum — central to the design" },
	{ text: "Offer summary in a single sentence supporting the action without competing with it" },
	{ text: "Brand mark at confidence-building scale — present but not dominant" },
	{ text: "A production-efficient specification reducing unit print cost by 22% through paper weight optimisation" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Brief", items: ["CTA definition", "Offer hierarchy", "Audience context", "Distribution channel"], color: "hsl(45,100%,50%)" },
	{ title: "Hierarchy", items: ["3-element hierarchy", "CTA size & placement", "QR code sizing", "Information sequence"], color: "hsl(35,100%,50%)" },
	{ title: "Design", items: ["Visual execution", "Typography", "Colour contrast", "CMYK production spec"], color: "hsl(20,100%,50%)" },
	{ title: "Production", items: ["Print-ready PDF", "Preflight", "Print liaison", "QC on delivery"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Hierarchy Brief & Concept (Week 1)",
		desc: "OpenGridLabs wrote a hierarchy brief before opening a design file: what is the one thing this flyer must communicate? What is the second? What is the third? Everything else was classified as supporting detail. The hierarchy decision was agreed with the client before design began — preventing the most common flyer design failure of trying to communicate too much.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Design & Refinement (Week 2)",
		desc: "Two design approaches were developed and presented: both built around the agreed hierarchy, each with a distinct visual character. The chosen direction was refined — typography, colour, QR code sizing, white space — with a specific check that the most important element remained most prominent at arm's length distance.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Production & Delivery (Week 3)",
		desc: "The print specification was reviewed: paper weight (130gsm silk rather than the prior 170gsm — adequate for distribution, lower cost per unit), CMYK colour management, and bleed. Press-ready PDFs were delivered and print-managed by OpenGridLabs.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Campaign response rate", before: "Baseline", after: "3.2× baseline", change: "3.2× baseline" },
	{ metric: "Cost per response", before: "Baseline", after: "-38%", change: "-38%" },
	{ metric: "QR code scan-through rate", before: "Baseline", after: "+2.9×", change: "+2.9×" },
	{ metric: "Recipient action within 24h", before: "Low", after: "Measurably higher", change: "Measurably higher" },
	{ metric: "Design elements competing for attention", before: "6 (undifferentiated)", after: "3 (clear hierarchy)", change: "3 (clear hierarchy)" },
	{ metric: "Print cost per unit", before: "Baseline", after: "-22% (paper optimisation)", change: "-22% (paper optimisation)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Hierarchy is the brief",
		desc: "Before opening a design file, agreeing the hierarchy in writing — 'the most important element is the action, the second is the offer, the third is the brand' — is the single most valuable thing in flyer design. A hierarchy agreed before design begins produces better results than any design choice made during it."
	},
	{
		title: "The QR code is the product",
		desc: "If the flyer's goal is to get a QR code scanned, the QR code should be the most visually prominent interactive element on the flyer. Decorating around a small QR code signals that the design was led by aesthetics rather than function."
	},
	{
		title: "3 seconds is the creative brief",
		desc: "Every flyer design decision should be evaluated at arm's length for 3 seconds. If the most important element has not communicated in that time, the hierarchy is wrong. This is a simple test that eliminates the most common flyer design failures before they go to print."
	}
];

const FAQS = [
	{
		q: "What size should a promotional flyer be?",
		a: "A5 (148×210mm) is the most common promotional flyer size — large enough for visual impact, small enough for easy distribution and handling. DL (99×210mm) is preferred for door-drop distribution and fits standard letter boxes. A4 (210×297mm) is used when more information is genuinely needed. Larger flyers are used for posters and point-of-sale displays."
	},
	{
		q: "How many elements should a flyer have?",
		a: "A maximum of three primary elements: the offer or action (the reason to respond), the benefit or incentive (the reason to act), and the brand (the source). Supporting details (terms, dates, URL) can be present but should be clearly secondary in visual hierarchy. Flyers with more than three primary elements typically produce poor response rates."
	}
];

export default function FlyerDesignCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Promotional Flyer Design Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned a promotional flyer with a CTA-led hierarchy, lifting response rates by 3.2× on the same audience."
				canonical="/services/digital-experience/flyer-design"
				keywords="Flyer Design, Promotional Flyer, Print Flyer, CTA Design, Response Rate, A5 Flyer, QR Code Design, Marketing Flyer, Direct Mail Design, Graphic Design"
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
								How a CTA-Led Flyer Redesign Increased Campaign Response Rate 3.2× on the Same Audience Without Changing the Offer
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A company distributing 50,000 promotional flyers per quarter was getting a response rate that barely justified the print and distribution spend. The flyer had a clear design, a reasonable offer, and a complete set of information. What it lacked was a hierarchy that made the call to action — the one thing it needed the reader to do — visually dominant. OpenGridLabs redesigned the flyer around the CTA as the primary visual element, and response rate tripled on the next run.
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
										<span className="text-base font-semibold text-foreground">Retail / Consumer Services (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scope</span>
										<span className="text-base font-semibold text-foreground">Quarterly promotional flyer redesign</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Print Volume</span>
										<span className="text-base font-semibold text-foreground">50,000 per quarter</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">3 weeks design + production</span>
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
								<Paintbrush className="w-5 h-5 text-amber-500" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-amber-500">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-amber-500" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client distributes 50,000 A5 promotional flyers per quarter in a retail setting. The flyer communicates a promotional offer and asks the recipient to take a specific action — scan a QR code, visit a website, or call a number. The previous design was typical of its type: logo at the top, offer description in the middle, terms and conditions at the bottom, and a QR code somewhere in between. Professional, clear, and ineffective.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								A flyer has approximately 3 seconds to communicate one thing. The prior design was attempting to communicate six. The hierarchy placed the logo — which the recipient already knew — at the largest size, and the call to action — the one thing the flyer needed them to do — at the smallest. OpenGridLabs redesigned the hierarchy in the opposite direction: the action first, the offer supporting it, the brand confirming it, the details below that.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-amber-950/10 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-amber-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
									<Zap className="w-6 h-6 animate-pulse" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Is Flyer Design?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Flyer design is the creation of a single-sheet printed promotional communication — typically A5, A4, or DL format — designed to generate a specific response (visit, call, scan, redeem) from a recipient who has not sought out the communication. Because flyer recipients are typically in motion and not actively reading, effective flyer design operates on a 3-second hierarchy: the most important element (the action or the benefit) must communicate before anything else. A flyer that requires reading to understand is a flyer that doesn't work.
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
							Improving flyer response rates by shifting visual emphasis from the logo to the QR code and call-to-action.
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
									Flyer Design Process
								</h2>
								<div className="w-16 h-1 rounded-full bg-amber-500" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									A strategic approach across hierarchy briefs, CTA sizing, color contrast, and print validation checks.
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
									Flyer Production Pipeline Layers
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
							A rapid three-week timeline from hierarchy briefs to final design refinement and print-ready delivery.
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
							Measuring response rate uplifts, cost reductions, scan metrics, and print efficiency.
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
								"We changed nothing except the design and got three times the response. Same offer, same audience, same distribution. The hierarchy was the whole answer — the old flyer wasn't bad, it just wasn't asking anyone to do anything clearly."
							</p>
							<div className="w-12 h-px bg-amber-500 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Marketing Director</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential Retail Company</p>
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
								50,000 flyers with a response rate that barely pays for itself?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs designs flyers — CTA-led hierarchy, production-efficient specifications, and 3-second impact — that give your audience one clear thing to do and make it obvious.
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
