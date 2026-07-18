import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Layout, BarChart3, HelpCircle } from "lucide-react";
import { useCarousel } from "../../hooks/use-carousel";

interface CaseStudyCarouselProps {
	slug: string;
	title: string;
	accentColor?: string; // e.g. "cyan", "purple", "pink", "emerald", "blue", "orange"
	images?: string[];
	aspectRatioClass?: string;
}

export default function CaseStudyCarousel({
	slug,
	title,
	accentColor = "indigo",
	images,
	aspectRatioClass = "aspect-[16/9] md:aspect-[21/9]"
}: CaseStudyCarouselProps) {
	const config = getGradientConfig(accentColor);

	// Default images paths if not supplied
	const carouselItems = images || [
		`/images/case-studies/${slug}/1.png`,
		`/images/case-studies/${slug}/2.png`
	];

	const {
		currentIndex,
		setCurrentIndex,
		setIsHovered,
		handleNext,
		handlePrev
	} = useCarousel({
		itemsCount: carouselItems.length,
		autoplay: true,
		autoplayInterval: 6000
	});

	return (
		<section
			className="w-[90%] max-w-[1600px] mx-auto mt-16 relative z-10"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="glass-panel p-6 md:p-10 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden shadow-2xl">
				{/* Ambient glow behind carousel */}
				<div className={`absolute -bottom-24 -left-24 w-80 h-80 blur-[120px] opacity-10 pointer-events-none rounded-full ${config.glow}`} />
				<div className={`absolute -top-24 -right-24 w-80 h-80 blur-[120px] opacity-10 pointer-events-none rounded-full ${config.glow}`} />

				{/* Header */}
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
					<div>
						<span className={`text-xs md:text-sm font-bold tracking-widest uppercase px-3 py-1 rounded-full border backdrop-blur-md ${config.border} ${config.bgGradient} ${config.text}`}>
							Visual Showcase
						</span>
						<h2 className="text-2xl md:text-3xl font-extrabold text-foreground uppercase tracking-tight mt-2">
							Project Demonstration
						</h2>
					</div>

					{/* Slider Dots */}
					<div className="flex items-center gap-2">
						{carouselItems.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
										? `w-10 ${config.glow}`
										: "w-2 bg-white/20 dark:bg-white/10 hover:bg-white/30"
									}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>

				{/* Slider Area */}
				<div className={`relative ${aspectRatioClass} w-full rounded-2xl overflow-hidden bg-black/10 dark:bg-black/40 border border-white/5 flex items-center justify-center`}>
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 50, scale: 0.98 }}
							animate={{ opacity: 1, x: 0, scale: 1 }}
							exit={{ opacity: 0, x: -50, scale: 0.98 }}
							transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
							className="absolute inset-0 w-full h-full flex items-center justify-center"
						>
							<CarouselSlide
								src={carouselItems[currentIndex]}
								index={currentIndex}
								title={title}
								config={config}
								slug={slug}
							/>
						</motion.div>
					</AnimatePresence>

					{/* Left / Right Nav Arrows */}
					<button
						onClick={handlePrev}
						className="absolute left-4 p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group z-20"
						aria-label="Previous image"
					>
						<ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
					</button>
					<button
						onClick={handleNext}
						className="absolute right-4 p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group z-20"
						aria-label="Next image"
					>
						<ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
					</button>
				</div>
			</div>
		</section>
	);
}

interface CarouselSlideProps {
	src: string;
	index: number;
	title: string;
	config: ReturnType<typeof getGradientConfig>;
	slug: string;
}

interface GradientConfig {
	from: string;
	to: string;
	bgGradient: string;
	text: string;
	border: string;
	glow: string;
}

// Fallback Gradient Config function definition (declared locally since type helpers reference it)
function getGradientConfig(color: string): GradientConfig {
	switch (color.toLowerCase()) {
		case "cyan":
			return {
				from: "hsl(180, 100%, 50%)",
				to: "hsl(210, 100%, 50%)",
				bgGradient: "from-cyan-500/10 to-blue-500/10",
				text: "text-cyan-400",
				border: "border-cyan-500/30",
				glow: "bg-cyan-400"
			};
		case "purple":
			return {
				from: "hsl(280, 100%, 65%)",
				to: "hsl(220, 100%, 50%)",
				bgGradient: "from-purple-500/10 to-indigo-500/10",
				text: "text-purple-400",
				border: "border-purple-500/30",
				glow: "bg-purple-400"
			};
		case "pink":
		case "rose":
		case "fuchsia":
			return {
				from: "hsl(330, 100%, 60%)",
				to: "hsl(280, 100%, 65%)",
				bgGradient: "from-pink-500/10 to-purple-500/10",
				text: "text-pink-400",
				border: "border-pink-500/30",
				glow: "bg-pink-400"
			};
		case "emerald":
		case "teal":
		case "green":
			return {
				from: "hsl(150, 100%, 40%)",
				to: "hsl(180, 100%, 50%)",
				bgGradient: "from-emerald-500/10 to-teal-500/10",
				text: "text-emerald-400",
				border: "border-emerald-500/30",
				glow: "bg-emerald-400"
			};
		case "blue":
		case "indigo":
			return {
				from: "hsl(220, 100%, 50%)",
				to: "hsl(250, 100%, 55%)",
				bgGradient: "from-blue-500/10 to-indigo-500/10",
				text: "text-blue-400",
				border: "border-blue-500/30",
				glow: "bg-blue-400"
			};
		default:
			return {
				from: "hsl(250, 100%, 55%)",
				to: "hsl(180, 100%, 50%)",
				bgGradient: "from-indigo-500/10 to-cyan-500/10",
				text: "text-indigo-400",
				border: "border-indigo-500/30",
				glow: "bg-indigo-400"
			};
	}
}

function CarouselSlide({ src, index, title, config, slug }: CarouselSlideProps) {
	const [imageState, setImageState] = useState<"loading" | "loaded" | "error">("loading");

	// Reset imageState when source changes
	useEffect(() => {
		setImageState("loading");
	}, [src]);

	return (
		<div className="relative w-full h-full">
			{imageState === "loading" && (
				<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 z-10 gap-3">
					<div className={`animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white/30`}></div>
					<span className="text-xs text-muted-foreground uppercase tracking-widest">Loading Showcase...</span>
				</div>
			)}

			{/* Attempt to load user image */}
			{imageState !== "error" && (
				<img
					src={src}
					alt={`${title} Slide ${index + 1}`}
					className={`w-full h-full object-contain select-none transition-opacity duration-300 ${imageState === "loaded" ? "opacity-100" : "opacity-0 absolute invisible"
						}`}
					onLoad={() => setImageState("loaded")}
					onError={() => setImageState("error")}
				/>
			)}

			{/* Custom interactive visual mockup fallback */}
			{imageState === "error" && (
				<div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white select-none">
					{/* Gorgeous Grid Pattern overlay */}
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/50 via-neutral-950/90 to-black/10 z-0" />
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 z-0" />

					{/* Vector graphic fallbacks */}
					{index === 0 ? (
						<FallbackDashboard title={title} config={config} slug={slug} />
					) : (
						<FallbackArchitecture title={title} config={config} />
					)}

					{/* Fallback Overlay Notice */}
					<div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-muted-foreground uppercase tracking-widest font-mono z-20 hover:text-white transition-colors cursor-help group">
						<HelpCircle size={10} />
						<span>Interactive Mockup (Image Pending Upload)</span>
						<span className="absolute bottom-full right-0 mb-2 w-64 bg-black/90 text-[10px] normal-case text-white p-3 rounded-lg border border-white/10 hidden group-hover:block transition-all shadow-xl leading-normal">
							Save a custom image as <code className="text-cyan-300 font-mono text-[9px]">public/images/case-studies/{slug}/{index + 1}.png</code> to override this visual display.
						</span>
					</div>
				</div>
			)}
		</div>
	);
}

/* Beautiful SVG Vector Fallback for Slide 1 (Dashboard Mockup) */
function FallbackDashboard({ title, config, slug }: { title: string; config: any; slug: string }) {
	return (
		<div className="w-full h-full flex flex-col p-6 md:p-10 justify-between relative z-10">
			{/* Fake Window Chrome */}
			<div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
					<div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
					<div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
					<span className="text-[11px] font-mono text-muted-foreground ml-3 select-none">
						dashboard-view.app // {slug}
					</span>
				</div>
				<div className="flex gap-2">
					<div className="h-5 w-20 rounded bg-white/5 border border-white/10 flex items-center justify-center">
						<span className="text-[9px] font-mono text-muted-foreground">LIVE STATUS</span>
					</div>
				</div>
			</div>

			{/* Main Mock Dashboard Content */}
			<div className="grid grid-cols-12 gap-4 flex-1">
				{/* Left Column stats & controls */}
				<div className="col-span-4 flex flex-col gap-3 justify-center">
					<div className="glass-panel p-4 rounded-xl border border-white/5 bg-white/5 space-y-1">
						<div className="flex items-center gap-2">
							<Layout size={14} className={config.text} />
							<span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Metrics Scope</span>
						</div>
						<div className="text-lg md:text-xl font-black tracking-tight text-white line-clamp-1 truncate max-w-full">
							{title.split(" ").slice(0, 3).join(" ")}
						</div>
					</div>

					<div className="glass-panel p-4 rounded-xl border border-white/5 bg-white/5 space-y-1">
						<div className="flex items-center gap-2">
							<BarChart3 size={14} className="text-emerald-400" />
							<span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Performance Lift</span>
						</div>
						<div className="text-2xl md:text-3xl font-black text-emerald-400 tracking-tight flex items-baseline gap-1">
							+240%
							<span className="text-[10px] text-muted-foreground font-medium">Uplift</span>
						</div>
					</div>
				</div>

				{/* Right Column containing beautiful charts / graphs */}
				<div className="col-span-8 relative flex items-center justify-center">
					<svg viewBox="0 0 400 180" className="w-full h-full max-h-[160px]">
						<defs>
							<linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0%" stopColor={config.from} stopOpacity="0.4" />
								<stop offset="100%" stopColor={config.from} stopOpacity="0.0" />
							</linearGradient>
							<linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
								<stop offset="0%" stopColor={config.from} />
								<stop offset="100%" stopColor={config.to} />
							</linearGradient>
						</defs>

						{/* Grid Lines */}
						<line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
						<line x1="0" y1="70" x2="400" y2="70" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
						<line x1="0" y1="110" x2="400" y2="110" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
						<line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />

						{/* Area under curve */}
						<path
							d="M 10 150 C 60 140, 90 90, 130 95 C 170 100, 210 50, 250 40 C 290 30, 330 15, 390 10 L 390 150 Z"
							fill="url(#areaGrad)"
						/>

						{/* Main Curve */}
						<path
							d="M 10 150 C 60 140, 90 90, 130 95 C 170 100, 210 50, 250 40 C 290 30, 330 15, 390 10"
							fill="none"
							stroke="url(#strokeGrad)"
							strokeWidth="4"
							strokeLinecap="round"
						/>

						{/* Glowing Dots */}
						<circle cx="10" cy="150" r="5" fill="#fff" stroke={config.from} strokeWidth="2" />
						<circle cx="130" cy="95" r="5" fill="#fff" stroke={config.from} strokeWidth="2" />
						<circle cx="250" cy="40" r="5" fill="#fff" stroke={config.to} strokeWidth="2" />
						<circle cx="390" cy="10" r="6" fill="#fff" stroke={config.to} strokeWidth="3" />
					</svg>
				</div>
			</div>
		</div>
	);
}

/* Beautiful SVG Vector Fallback for Slide 2 (Architecture Diagram) */
function FallbackArchitecture({ title, config }: { title: string; config: any }) {
	return (
		<div className="w-full h-full flex flex-col p-6 md:p-10 justify-between relative z-10">
			{/* Fake Window Chrome */}
			<div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
					<div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
					<div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
					<span className="text-[11px] font-mono text-muted-foreground ml-3 select-none">
						architecture-blueprint.io // flow-diagram
					</span>
				</div>
				<span className="text-[9px] font-mono text-emerald-400 select-none flex items-center gap-1">
					<span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
					SECURE PIPELINE
				</span>
			</div>

			{/* Node Network Visualizer */}
			<div className="flex-1 flex items-center justify-center relative">
				<svg viewBox="0 0 600 180" className="w-full h-full max-h-[160px]">
					<defs>
						<linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
							<stop offset="0%" stopColor={config.from} />
							<stop offset="100%" stopColor={config.to} />
						</linearGradient>
					</defs>

					{/* Connecting lines */}
					<path d="M 80 90 L 220 90" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_10s_linear_infinite]" />
					<path d="M 220 90 L 380 90" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_10s_linear_infinite]" />
					<path d="M 380 90 L 520 90" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_10s_linear_infinite]" />

					{/* Node 1: Ingestion */}
					<g transform="translate(80, 90)">
						<circle r="36" fill="rgba(0,0,0,0.6)" stroke={config.from} strokeWidth="2" />
						<circle r="30" fill="rgba(255,255,255,0.03)" />
						<text textAnchor="middle" y="-2" fill="#fff" fontSize="10" fontWeight="bold">DATA</text>
						<text textAnchor="middle" y="10" fill="rgba(255,255,255,0.5)" fontSize="7" letterSpacing="1">SOURCE</text>
					</g>

					{/* Node 2: Processing */}
					<g transform="translate(220, 90)">
						<circle r="36" fill="rgba(0,0,0,0.6)" stroke={config.from} strokeWidth="2" />
						<circle r="30" fill="rgba(255,255,255,0.03)" />
						<text textAnchor="middle" y="-2" fill="#fff" fontSize="10" fontWeight="bold">ENGINE</text>
						<text textAnchor="middle" y="10" fill="rgba(255,255,255,0.5)" fontSize="7" letterSpacing="1">PROCESSING</text>
					</g>

					{/* Node 3: Analytics */}
					<g transform="translate(380, 90)">
						<circle r="36" fill="rgba(0,0,0,0.6)" stroke={config.to} strokeWidth="2" />
						<circle r="30" fill="rgba(255,255,255,0.03)" />
						<text textAnchor="middle" y="-2" fill="#fff" fontSize="10" fontWeight="bold">OPTIMISE</text>
						<text textAnchor="middle" y="10" fill="rgba(255,255,255,0.5)" fontSize="7" letterSpacing="1">ANALYTICS</text>
					</g>

					{/* Node 4: End Result */}
					<g transform="translate(520, 90)">
						<circle r="36" fill="rgba(0,0,0,0.6)" stroke={config.to} strokeWidth="2" />
						<circle r="30" fill="rgba(255,255,255,0.03)" />
						<text textAnchor="middle" y="-2" fill="#fff" fontSize="10" fontWeight="bold">DELIVERY</text>
						<text textAnchor="middle" y="10" fill="rgba(255,255,255,0.5)" fontSize="7" letterSpacing="1">END-POINT</text>
					</g>
				</svg>
			</div>

			{/* Subtitle / Caption */}
			<div className="text-[10px] text-muted-foreground font-mono text-center select-none truncate">
				{title} System Flow Overview
			</div>
		</div>
	);
}
