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
	Play,
	Film
} from "lucide-react";
import SEO from "../../../../components/seo";

const STATS = [
	{ value: "52%", label: "Increase in trial sign-up rate", accent: "from-cyan-500 to-blue-600" },
	{ value: "90 sec", label: "Product value communicated without a sales call", accent: "from-blue-500 to-indigo-600" },
	{ value: "10 wk", label: "Brief to final delivery", accent: "from-indigo-500 to-purple-600" },
	{ value: "6", label: "Social motion graphics in the distribution suite", accent: "from-purple-500 to-pink-500" }
];

const CHALLENGES = [
	{ text: "Complex product value proposition not communicable through static homepage text and screenshots" },
	{ text: "Poor conversion from website visit to demo booking — comprehension gap before the sales conversation" },
	{ text: "No motion content in the marketing mix — all content was static text and images" },
	{ text: "Prospects who needed to understand the product before committing to a demo had no self-service option" },
	{ text: "Social media content performing poorly — static graphics not competitive in a motion-dominated feed" }
];

const SOLUTIONS = [
	{ text: "A 90-second animated explainer video communicating the core value proposition with product demonstration" },
	{ text: "Script developed around the prospect's problem → solution journey, not the product's feature list" },
	{ text: "Character animation and UI screencast integration showing the product working, not just talking about it" },
	{ text: "A social motion graphic suite — 6 short-form animations for LinkedIn and social distribution" },
	{ text: "Style consistent with the brand illustration system for visual coherence across all content" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Script", items: ["Problem-solution narrative", "Value proposition distillation", "Scene brief", "Voiceover script"], color: "hsl(180,100%,50%)" },
	{ title: "Storyboard", items: ["Scene-by-scene visual plan", "Transition logic", "Timing", "Motion style direction"], color: "hsl(200,100%,45%)" },
	{ title: "Animation", items: ["Character motion", "UI recording integration", "Typography animation", "Sound design brief"], color: "hsl(240,100%,55%)" },
	{ title: "Distribution", items: ["Master export", "Social format cuts", "Captions", "Thumbnail design", "A/B headline test"], color: "hsl(280,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Script & Storyboard (Weeks 1–3)",
		desc: "OpenGridLabs wrote the script from a single brief: what does the ideal prospect need to understand in 90 seconds to sign up for a trial? The problem-solution structure was agreed before any visual work began. A scene-by-scene storyboard was produced and reviewed for narrative logic and timing before animation started.",
		accent: "from-cyan-500 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Animation Production (Weeks 4–8)",
		desc: "The explainer was animated: character motion using the brand illustration system, UI screencasts integrated into the animation as product demonstration, typography animation, and a professional voiceover. The animation style was developed to feel energetic and clear — the brand's personality expressed through motion.",
		accent: "from-blue-500 to-indigo-500"
	},
	{
		number: "Phase 3",
		title: "Delivery, Social Suite & Launch (Weeks 9–10)",
		desc: "The master explainer was delivered in all required formats. Six social motion graphics were cut from the explainer content — 15-30 second social-optimised versions with captions — for LinkedIn and other social distribution. The explainer was embedded on the homepage above the fold. A/B testing measured the impact on trial sign-up rate within the first two weeks.",
		accent: "from-indigo-500 to-purple-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Trial sign-up rate", before: "Baseline", after: "+52%", change: "+52%" },
	{ metric: "Demo booking rate (unchanged)", before: "Baseline", after: "Unchanged (not the goal)", change: "Unchanged (not the goal)" },
	{ metric: "Time on website (explainer page)", before: "Baseline", after: "+340% (video watched)", change: "+340% (video watched)" },
	{ metric: "Social video engagement", before: "0 (no motion content)", after: "High (new format)", change: "High (new format)" },
	{ metric: "Prospect comprehension (survey)", before: "Baseline", after: "+61%", change: "+61%" },
	{ metric: "Sales call 'understood before they arrived'", before: "~20%", after: "~65%", change: "~65%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Show, don't describe",
		desc: "A complex product that can be understood by watching it work should be shown working, not described. Motion graphics can demonstrate a product in 90 seconds in a way that requires no prior knowledge and no commitment beyond pressing play — the exact brief for pre-demo conversion."
	},
	{
		title: "Script first, always",
		desc: "An animated video produced from a weak script is expensive to fix and ineffective to distribute. The script — the narrative logic of problem, solution, product demonstration, and call to action — determines whether the video works. The animation makes it watchable; the script makes it effective."
	},
	{
		title: "Social motion extends the investment",
		desc: "A 90-second explainer video can produce 6–10 social motion graphics: 15-30 second cuts optimised for social distribution that bring the same visual quality to social feeds. The social suite amortises the animation production investment across multiple channels and distribution opportunities."
	}
];

const FAQS = [
	{
		q: "How long should an animated explainer video be?",
		a: "60–90 seconds is the optimal range for product explainer videos aimed at website visitors. Under 60 seconds often cannot communicate enough context for a complex product. Over 2 minutes sees significant drop-off in completion rate. The optimal length is the minimum time needed to communicate the value proposition clearly enough to prompt the desired action."
	},
	{
		q: "What is the difference between motion graphics and animation?",
		a: "Motion graphics is the movement of graphic design elements — typography, shapes, icons, illustrations — in service of a message. Animation (including character animation) involves creating the illusion of life and movement in drawn or modelled figures. Most explainer videos combine both: motion graphics for transitions, data visualisation, and UI demonstration, and character animation for human representation and narrative."
	}
];

export default function MotionGraphicsCaseStudy() {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<>
			<SEO
				title="Motion Graphics Explainer Case Study | OpenGridLabs"
				description="How OpenGridLabs produced a 90-second animated explainer video and motion suite that increased B2B SaaS trial sign-ups by 52%."
				canonical="/services/digital-experience/motion-graphics"
				keywords="Motion Graphics, Animated Explainer Video, Brand Animation, Product Explainer, Motion Design, 2D Animation, Kinetic Typography, Social Motion, Video Production"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Cyan-Purple Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(260,100%,60%) 50%, transparent 100%)`
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
								How an Animated Explainer Video Increased Trial Sign-Up Rate 52% by Communicating the Product's Value in 90 Seconds
							</h1>

							<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								A company with a powerful but complex product was losing prospects who visited the website, read the homepage, and still didn't understand what the product did or who it was for. The complexity required a demonstration — but demonstrations required a sales call, and many prospects weren't ready to book one. OpenGridLabs produced a 90-second animated explainer video and a suite of motion graphics for social distribution that communicated the product's value clearly enough to prompt a trial without human intervention.
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
									<Terminal className="w-6 h-6 text-cyan-500" />
									<h3 className="text-lg font-bold text-foreground">Project Scope</h3>
								</div>
								
								<div className="space-y-4">
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Sector</span>
										<span className="text-base font-semibold text-foreground">B2B SaaS (anonymised)</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Scope</span>
										<span className="text-base font-semibold text-foreground">90-sec explainer + 6 social motion graphics</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Timeline</span>
										<span className="text-base font-semibold text-foreground">10 weeks</span>
									</div>
									<div>
										<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">Deliverables</span>
										<span className="text-base font-semibold text-foreground">Script · Storyboard · Animation · Social motion suite</span>
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
								<Film className="w-5 h-5 text-cyan-500" />
								<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-cyan-500">Context</span>
							</div>
							<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
								Background
							</h2>
							<div className="w-16 h-1 rounded-full bg-cyan-500" />
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								Our client had a product that consistently impressed people who saw a live demo — the conversion rate from demo to trial was excellent. The problem was earlier in the funnel: website visitors who hadn't booked a demo couldn't understand what the product did from the static homepage, and the conversion from website visit to demo booking was poor. The product's complexity was creating a comprehension gap that the written content couldn't bridge.
							</p>
							<p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
								A 90-second animated explainer was the answer to a specific problem: how do you communicate a complex value proposition clearly enough to prompt a trial sign-up, to someone who hasn't yet committed to a sales call, in the time they're willing to give a website? Motion graphics are uniquely well-suited to this problem — they can show a product working, not just describe it, in a format that is more engaging than text and more accessible than a recorded demo.
							</p>
						</div>

						<div className="lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br from-cyan-950/10 via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group">
							<div className="absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full bg-cyan-400 animate-pulse" />
							
							<div className="space-y-6 relative z-10">
								<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-500">
									<Play className="w-5 h-5 animate-pulse text-cyan-400" />
								</div>
								<h3 className="text-2xl md:text-3xl font-bold text-foreground">
									What Are Motion Graphics?
								</h3>
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									Motion graphics are animated graphic design — using typography, illustration, icons, and UI recordings in motion to communicate information, tell stories, or express brand identity. Unlike film or live-action video, motion graphics are fully designed and produced digitally. They are used for product explainer videos, brand animations, social media motion content, UI transitions, and title sequences. A well-produced explainer video is often the most efficient communication investment for a complex product: it communicates what text cannot and requires less commitment than a sales call.
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
							Bridging the comprehension gap with clear, high-energy animated storytelling.
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
									Motion Graphics Production Process
								</h2>
								<div className="w-16 h-1 rounded-full bg-cyan-500" />
								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									A structured animation pipeline spanning scriptwriting, visual storyboards, timeline animation, and multi-format distribution.
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
									Motion Production Pipeline Layers
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
							A ten-week campaign roadmap from script workshops and storyboards to final social media cut exports.
						</p>
					</div>

					<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
						{/* Vertical axis line for desktop */}
						<div className="hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-20" />
						
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
									style={{ backgroundImage: `linear-gradient(to right, ${idx === 0 ? "hsl(180,100%,50%)" : idx === 1 ? "hsl(195,100%,45%)" : "hsl(210,100%,40%)"}, transparent)` }}
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
							Deploying the animated explainer video directly boosted sign-ups, web session duration, and inbound prospect readiness.
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
								"People kept booking demos and saying 'I watched your video and I think I already get it — I just want to see it in my context'. That's exactly the problem we were trying to solve. The video did the pre-qualification work that our homepage copy never could."
							</p>
							<div className="w-12 h-px bg-cyan-500 mx-auto" />
							<div>
								<p className="font-bold text-lg text-foreground">— Head of Growth</p>
								<p className="text-sm text-muted-foreground font-medium">Confidential B2B SaaS Company</p>
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
								Complex product that website visitors can't understand without a demo?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								OpenGridLabs produces motion graphics and animated explainers — script, storyboard, character animation, and social suite — that communicate your product's value in 90 seconds without a sales call.
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
