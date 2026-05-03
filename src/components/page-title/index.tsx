import { motion } from "motion/react";

interface PageTitleProps {
	label?: string;
	mainTitle?: string;
	subTitle?: string;
	description?: string;
}

/* ── 3D Grid Floor ──────────────────────────────────────── */
function PerspectiveGrid() {
	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: "800px" }}>
			<div
				className="absolute left-[-20%] right-[-20%] bottom-[-50%] h-[100%]"
				style={{ transform: "rotateX(60deg)", transformOrigin: "center bottom" }}
			>
				{/* Horizontal lines */}
				{[...Array(12)].map((_, i) => (
					<motion.div
						key={`h-${i}`}
						className="absolute left-0 right-0 h-[1px]"
						style={{
							top: `${i * (100 / 11)}%`,
							background: `linear-gradient(90deg, transparent 0%, hsla(210,100%,50%,${0.1 + i * 0.02}) 50%, transparent 100%)`,
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 + i * 0.05 }}
					/>
				))}
				{/* Vertical lines */}
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={`v-${i}`}
						className="absolute top-0 bottom-0 w-[1px]"
						style={{
							left: `${i * (100 / 19)}%`,
							background: `linear-gradient(180deg, transparent 0%, hsla(280,100%,60%,${0.1 - Math.abs(i - 9.5) * 0.01}) 100%)`,
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.1 + i * 0.02 }}
					/>
				))}
				{/* Scanning beam */}
				<motion.div
					className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[2px]"
					animate={{ top: ["-10%", "110%"] }}
					transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
				/>
			</div>
		</div>
	);
}

export default function PageTitle({
	label,
	mainTitle,
	subTitle,
	description,
}: PageTitleProps) {
	return (
		<section className="relative text-center px-4 py-24 md:py-32 flex flex-col items-center w-[90%] max-w-[1600px] mx-auto gap-6 bg-transparent border border-black/5 dark:border-transparent rounded-[40px] mt-24 mb-16 overflow-hidden glass-panel shadow-lg dark:shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
			
			<PerspectiveGrid />

			{/* Core Glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
			<div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

			{/* Floating Neural Particles */}
			{[...Array(15)].map((_, i) => (
				<motion.div
					key={`p-${i}`}
					className="absolute rounded-full pointer-events-none bg-foreground shadow-[0_0_10px_currentColor]"
					style={{
						width: 2 + Math.random() * 3,
						height: 2 + Math.random() * 3,
						left: `${10 + Math.random() * 80}%`,
						top: `${10 + Math.random() * 80}%`,
						color: i % 2 === 0 ? "hsl(210,100%,60%)" : "hsl(280,100%,60%)",
					}}
					animate={{
						y: [0, -30 - Math.random() * 50, 0],
						x: [0, (Math.random() - 0.5) * 40, 0],
						opacity: [0, 0.8, 0],
						scale: [0.5, 1.5, 0.5],
					}}
					transition={{
						duration: 4 + Math.random() * 4,
						repeat: Infinity,
						delay: Math.random() * 2,
						ease: "easeInOut",
					}}
				/>
			))}

			<div className="relative z-10 flex flex-col items-center">
				{label && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-6 shadow-[0_0_20px_hsla(210,100%,50%,0.15)]"
					>
						<span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
						<span className="text-xs font-semibold tracking-widest uppercase text-primary">
							{label}
						</span>
					</motion.div>
				)}

				{(mainTitle || subTitle) && (
					<motion.h1 
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
						className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[1.1]"
					>
						{mainTitle && <span className="text-foreground mr-4">{mainTitle}</span>}
						{subTitle && (
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:drop-shadow-[0_0_30px_hsla(280,100%,60%,0.3)]">
								{subTitle}
							</span>
						)}
					</motion.h1>
				)}

				{description && (
					<motion.p 
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-foreground/70 dark:text-foreground/50 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed font-light"
					>
						{description}
					</motion.p>
				)}
			</div>
		</section>
	);
}
