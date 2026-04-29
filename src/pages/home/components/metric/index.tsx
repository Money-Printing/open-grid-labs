import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Sparkles, Users, ShieldCheck, Rocket } from 'lucide-react';

/* ── Metric Data ────────────────────────────────────────── */
const metrics = [
	{
		value: 100,
		suffix: "+",
		label: "Projects Shipped",
		sub: "Production-grade digital products",
		icon: Rocket,
		accent: "from-blue-400 via-cyan-400 to-blue-500",
		glow: "hsla(200, 100%, 55%, 0.35)",
	},
	{
		value: 80,
		suffix: "+",
		label: "Clients Worldwide",
		sub: "Across 12+ countries",
		icon: Users,
		accent: "from-violet-400 via-fuchsia-400 to-purple-500",
		glow: "hsla(280, 100%, 60%, 0.35)",
	},
	{
		value: 99.9,
		suffix: "%",
		label: "Uptime Guaranteed",
		sub: "Enterprise-grade infrastructure",
		icon: ShieldCheck,
		accent: "from-emerald-400 via-green-400 to-teal-500",
		glow: "hsla(155, 90%, 50%, 0.35)",
	},
	{
		value: 4.9,
		suffix: "★",
		label: "Client Rating",
		sub: "Average across all engagements",
		icon: Sparkles,
		accent: "from-amber-300 via-yellow-400 to-orange-400",
		glow: "hsla(40, 100%, 55%, 0.35)",
	},
];

/* ── Counter Hook ───────────────────────────────────────── */
function useAnimatedCounter(target: number, inView: boolean, duration = 2200) {
	const [val, setVal] = useState(0);
	const isFloat = target % 1 !== 0;

	useEffect(() => {
		if (!inView) return;
		const start = performance.now();
		let raf: number;

		function tick(now: number) {
			const t = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - t, 4); // quartic ease-out
			const current = eased * target;
			setVal(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
			if (t < 1) raf = requestAnimationFrame(tick);
		}
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, target, duration, isFloat]);

	return val;
}

/* ── Grid Line Component ────────────────────────────────── */
function PerspectiveGrid() {
	return (
		<div
			className="absolute inset-0 overflow-hidden pointer-events-none"
			style={{ perspective: "600px" }}
		>
			<div
				className="absolute left-[-10%] right-[-10%] bottom-[-20%] h-[70%]"
				style={{
					transform: "rotateX(55deg)",
					transformOrigin: "center bottom",
				}}
			>
				{/* Horizontal lines */}
				{[...Array(16)].map((_, i) => (
					<motion.div
						key={`h-${i}`}
						className="absolute left-0 right-0 h-[1px]"
						style={{
							top: `${i * (100 / 15)}%`,
							background: `linear-gradient(90deg, transparent 0%, hsla(210,100%,50%,${0.06 + i * 0.01}) 30%, hsla(280,100%,60%,${0.04 + i * 0.008}) 70%, transparent 100%)`,
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 + i * 0.04 }}
					/>
				))}
				{/* Vertical lines */}
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={`v-${i}`}
						className="absolute top-0 bottom-0 w-[1px]"
						style={{
							left: `${i * (100 / 19)}%`,
							background: `linear-gradient(180deg, transparent 0%, hsla(210,100%,50%,${0.08 - Math.abs(i - 9.5) * 0.006}) 50%, hsla(210,100%,50%,0.02) 100%)`,
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 + i * 0.03 }}
					/>
				))}
				{/* Scan line */}
				<motion.div
					className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-[1px]"
					animate={{ top: ["-5%", "105%"] }}
					transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
				/>
			</div>
		</div>
	);
}

/* ── Holographic Ring ───────────────────────────────────── */
function HoloRing({ size, duration, delay, thickness, color }: {
	size: number; duration: number; delay: number; thickness: number; color: string;
}) {
	return (
		<motion.div
			className="absolute top-1/2 left-1/2 rounded-full"
			style={{
				width: size,
				height: size,
				marginLeft: -size / 2,
				marginTop: -size / 2,
				border: `${thickness}px solid transparent`,
				borderImage: `linear-gradient(135deg, ${color}, transparent 60%) 1`,
				transformStyle: "preserve-3d",
			}}
			animate={{ rotateX: [70, 70], rotateZ: [0, 360] }}
			transition={{ duration, repeat: Infinity, ease: "linear", delay }}
		/>
	);
}

/* ── Main Component ─────────────────────────────────────── */
const HomeMetric = () => {
	const ref = useRef<HTMLElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-120px" });
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const parallaxY = useTransform(scrollYProgress, [0, 1], [80, -80]);

	return (
		<section
			id="home-metric"
			ref={ref}
			className="w-full relative py-32 md:py-44 overflow-hidden"
			style={{ perspective: "1400px" }}
		>
			{/* ── Background Layers ─────────────────────────── */}
			<PerspectiveGrid />

			{/* Radial glow center */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
				style={{ background: "radial-gradient(circle, hsla(210,100%,50%,0.06) 0%, hsla(280,100%,60%,0.03) 40%, transparent 70%)" }}
			/>

			{/* Side glows */}
			<div className="absolute top-0 left-0 w-[400px] h-[600px] blur-[200px] pointer-events-none" />
			<div className="absolute bottom-0 right-0 w-[350px] h-[500px] blur-[180px] pointer-events-none" />

			{/* ── Central Hero Block ───────────────────────── */}
			<motion.div
				style={{ y: parallaxY }}
				className="relative z-10 flex flex-col items-center"
			>
				{/* Holographic rings */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[400px] h-[400px] pointer-events-none" style={{ perspective: "800px", transformStyle: "preserve-3d" }}>
					<HoloRing size={280} duration={10} delay={0} thickness={1} color="hsla(210,100%,60%,0.3)" />
					<HoloRing size={340} duration={14} delay={0.5} thickness={1} color="hsla(280,100%,60%,0.2)" />
					<HoloRing size={200} duration={8} delay={1} thickness={1} color="hsla(200,100%,70%,0.25)" />
				</div>

				{/* ── Big Number ────────────────────────────── */}
				<motion.div
					initial={{ opacity: 0, scale: 0.5, rotateX: 30 }}
					animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
					className="relative flex flex-col items-center"
				>
					{/* Glow behind number */}
					<div className="absolute -inset-16 bg-gradient-to-b from-primary/15 via-accent/10 to-transparent rounded-full blur-3xl pointer-events-none" />

					<BigCounter inView={isInView} />

					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.8, duration: 0.6 }}
						className="text-sm md:text-base tracking-[0.35em] uppercase text-foreground/70 dark:text-foreground/50 dark:text-foreground/30 font-light mt-3"
					>
						Digital Products Engineered
					</motion.p>
				</motion.div>

				{/* ── Heading ───────────────────────────────── */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					className="mt-14 md:mt-16 flex flex-col items-center gap-4 px-4"
				>
					<h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-foreground tracking-tight leading-tight text-center">
						We Don't Build Websites.
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
							We Engineer Experiences.
						</span>
					</h2>
					<p className="text-base md:text-lg text-foreground/60 dark:text-foreground/35 max-w-lg font-light text-center leading-relaxed mt-2">
						Every pixel, every interaction, every deployment — obsessively crafted to perform at scale.
					</p>
				</motion.div>

				{/* ── Metrics Cards ─────────────────────────── */}
				<div
					className="w-[90%] max-w-[1600px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-20 md:mt-24"
					style={{ perspective: "1000px" }}
				>
					{metrics.map((m, i) => (
						<MetricCard key={m.label} metric={m} index={i} inView={isInView} />
					))}
				</div>

				{/* ── Bottom Accent ─────────────────────────── */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={isInView ? { scaleX: 1 } : {}}
					transition={{ delay: 1.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
					className="mt-16 md:mt-20 h-[1px] w-64 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
				/>
				<motion.p
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ delay: 1.8, duration: 0.6 }}
					className="mt-6 text-foreground/50 dark:text-foreground/20 text-xs tracking-[0.3em] uppercase font-light"
				>
					Trusted by founders who refuse to settle
				</motion.p>
			</motion.div>

			{/* ── Floating Particles ────────────────────────── */}
			{[...Array(20)].map((_, i) => {
				const isBlue = i % 3 !== 0;
				return (
					<motion.div
						key={i}
						className="absolute rounded-full pointer-events-none"
						style={{
							width: 2 + Math.random() * 3,
							height: 2 + Math.random() * 3,
							left: `${5 + Math.random() * 90}%`,
							top: `${5 + Math.random() * 90}%`,
							background: isBlue ? "hsl(210, 100%, 65%)" : "hsl(280, 100%, 70%)",
							boxShadow: `0 0 ${4 + Math.random() * 6}px ${isBlue ? "hsla(210,100%,60%,0.6)" : "hsla(280,100%,65%,0.6)"}`,
						}}
						animate={{
							y: [0, -(15 + Math.random() * 40), 0],
							x: [0, (Math.random() - 0.5) * 30, 0],
							opacity: [0, 0.7, 0],
						}}
						transition={{
							duration: 4 + Math.random() * 5,
							repeat: Infinity,
							delay: Math.random() * 3,
							ease: "easeInOut",
						}}
					/>
				);
			})}
		</section>
	);
};

/* ── Big Counter Display ────────────────────────────────── */
function BigCounter({ inView }: { inView: boolean }) {
	const count = useAnimatedCounter(100, inView, 2500);

	return (
		<div className="relative flex items-baseline gap-2 select-none">
			{/* Shadow layer for depth */}
			<span
				className="absolute inset-0 text-[120px] md:text-[180px] lg:text-[220px] font-display font-black text-transparent blur-2xl bg-clip-text bg-gradient-to-b from-primary/40 to-accent/30 pointer-events-none"
				aria-hidden
			>
				{count}+
			</span>
			{/* Main number */}
			<span className="relative text-[120px] md:text-[180px] lg:text-[220px] font-display font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-black/95 dark:via-white/95 to-black/40 dark:to-white/40">
				{count}
			</span>
			<span className="relative text-[50px] md:text-[70px] lg:text-[90px] font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-accent leading-none mb-4">
				+
			</span>
		</div>
	);
}

/* ── Metric Card ────────────────────────────────────────── */
function MetricCard({ metric, index, inView }: {
	metric: typeof metrics[0]; index: number; inView: boolean;
}) {
	const Icon = metric.icon;
	const count = useAnimatedCounter(metric.value, inView, 2000 + index * 300);
	const isFloat = metric.value % 1 !== 0;
	const display = isFloat ? count.toFixed(1) : count;

	return (
		<motion.div
			initial={{ opacity: 0, y: 50, rotateX: 15 }}
			animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
			transition={{
				duration: 0.7,
				delay: 0.8 + index * 0.12,
				ease: [0.22, 1, 0.36, 1],
			}}
			whileHover={{
				y: -8,
				rotateX: -3,
				rotateY: index < 2 ? 3 : -3,
				transition: { duration: 0.35, ease: "easeOut" },
			}}
			className="group relative cursor-default"
			style={{ transformStyle: "preserve-3d" }}
		>
			{/* Outer glow on hover */}
			<div
				className="absolute -inset-[1px] rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg pointer-events-none"
				style={{ background: `radial-gradient(circle, ${metric.glow}, transparent 70%)` }}
			/>

			{/* Card body */}
			<div className="relative rounded-[22px] border border-black/5 dark:border-transparent overflow-hidden transition-all duration-500 group-hover:border-black/5 dark:border-transparent group-hover:shadow-lg dark:shadow-[0_25px_50px_rgba(0,0,0,0.5)] bg-white/50 dark:bg-card/80"
				style={{
					backdropFilter: "blur(20px)",
					boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.04)",
				}}
			>
				{/* Shine sweep */}
				<motion.div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)",
					}}
					animate={{ x: ["-100%", "200%"] }}
					transition={{ duration: 4, repeat: Infinity, delay: 2 + index * 0.8, ease: "easeInOut", repeatDelay: 6 }}
				/>

				{/* Hover radial glow */}
				<div
					className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
					style={{ background: `radial-gradient(ellipse at 50% 0%, ${metric.glow}, transparent 70%)` }}
				/>

				<div className="relative z-10 p-6 md:p-7 flex flex-col items-center gap-3 text-center">
					{/* Icon */}
					<motion.div
						whileHover={{ rotate: 15, scale: 1.15 }}
						transition={{ type: "spring", stiffness: 300, damping: 15 }}
						className={`w-11 h-11 rounded-xl bg-gradient-to-br ${metric.accent} flex items-center justify-center shadow-lg`}
						style={{ transform: "translateZ(30px)" }}
					>
						<Icon size={20} className="text-foreground drop-shadow-sm" />
					</motion.div>

					{/* Number */}
					<div className="flex items-baseline gap-0.5 mt-1">
						<span className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
							{display}
						</span>
						<span className={`text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${metric.accent}`}>
							{metric.suffix}
						</span>
					</div>

					{/* Label */}
					<h4 className="text-sm md:text-base font-display font-semibold text-foreground/80 tracking-wide">
						{metric.label}
					</h4>

					{/* Sub text */}
					<p className="text-xs text-foreground/70 dark:text-foreground/50 dark:text-foreground/30 group-hover:text-foreground/70 dark:text-foreground/50 transition-colors duration-500 font-light leading-relaxed">
						{metric.sub}
					</p>

					{/* Bottom accent line */}
					<motion.div
						className={`h-[2px] rounded-full bg-gradient-to-r ${metric.accent} mt-1`}
						initial={{ width: 0 }}
						animate={inView ? { width: "50%" } : {}}
						transition={{ delay: 1.4 + index * 0.12, duration: 0.6 }}
					/>
				</div>

				{/* Watermark */}
				<div className="absolute -bottom-3 -right-2 text-[80px] font-display font-black leading-none select-none pointer-events-none">
					<span className={`bg-gradient-to-b ${metric.accent} text-transparent bg-clip-text opacity-[0.025] group-hover:opacity-[0.06] transition-opacity duration-700`}>
						{metric.value}
					</span>
				</div>
			</div>
		</motion.div>
	);
}

export default HomeMetric;
