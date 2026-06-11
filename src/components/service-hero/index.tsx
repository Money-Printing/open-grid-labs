import React, { useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "motion/react";

export interface ServiceHeroProps {
	tag: string;
	tagClass?: string;
	tagLeftLineClass?: string;
	tagRightLineClass?: string;
	titleWord1: string;
	titleWord2: string;
	titleWord2Class?: string;
	description: React.ReactNode;
	ambientGlowClass?: string;
	cardBorderClass?: string;
	cardBlurClass?: string;
	cardGlowClass?: string;
	topGlareClass?: string;
	bottomGlareClass?: string;
	tiltMax?: number;
	contentTiltFactor?: number;
	renderBackground?: (tiltX: any, tiltY: any) => React.ReactNode;
}

export default function ServiceHero({
	tag,
	tagClass = "",
	tagLeftLineClass = "",
	tagRightLineClass = "",
	titleWord1,
	titleWord2,
	titleWord2Class = "",
	description,
	ambientGlowClass = "",
	cardBorderClass = "border-black/5 dark:border-transparent",
	cardBlurClass = "backdrop-blur-xl",
	cardGlowClass = "dark:shadow-[0_0_120px_rgba(0,0,0,0.6)]",
	topGlareClass = "",
	bottomGlareClass = "",
	tiltMax = 15,
	contentTiltFactor = 0.4,
	renderBackground,
}: ServiceHeroProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springConfig = { damping: 30, stiffness: 100, mass: 1 };
	const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltMax, -tiltMax]), springConfig);
	const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltMax, tiltMax]), springConfig);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
		mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
	};

	return (
		<section
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
			className="relative w-full h-[100vh] min-h-[800px] overflow-hidden flex flex-col items-center justify-center bg-background perspective-[1500px]"
		>
			{/* Ambient Deep Space Glow */}
			{ambientGlowClass && (
				<div className={`absolute inset-0 ${ambientGlowClass}`} />
			)}

			{/* Custom Background Shapes / Particles */}
			{renderBackground && renderBackground(tiltX, tiltY)}

			{/* Floating Glassmorphic Content Card */}
			<motion.div
				className={`relative z-10 flex flex-col items-center text-center p-8 md:p-16 rounded-[40px] border ${cardBorderClass} bg-foreground/[0.01] ${cardBlurClass} shadow-lg ${cardGlowClass} max-w-[90%]`}
				style={{
					rotateX: useTransform(tiltX, (v) => v * contentTiltFactor),
					rotateY: useTransform(tiltY, (v) => v * contentTiltFactor),
					transformStyle: "preserve-3d"
				}}
			>
				{/* Top Glare Line */}
				{topGlareClass && (
					<div className={`absolute top-0 left-[10%] right-[10%] h-px ${topGlareClass}`} />
				)}

				{/* Bottom Glare Line */}
				{bottomGlareClass && (
					<div className={`absolute bottom-0 left-[30%] right-[30%] h-px ${bottomGlareClass}`} />
				)}

				{/* Pill Tag Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="flex items-center gap-4 mb-8"
					style={{ transform: "translateZ(40px)" }}
				>
					{tagLeftLineClass && (
						<div className={`h-px w-8 md:w-16 bg-gradient-to-r from-transparent ${tagLeftLineClass}`} />
					)}
					<span className={`text-xs md:text-sm font-bold tracking-[0.5em] uppercase px-4 md:px-6 py-2 rounded-full border ${tagClass}`}>
						{tag}
					</span>
					{tagRightLineClass && (
						<div className={`h-px w-8 md:w-16 bg-gradient-to-l from-transparent ${tagRightLineClass}`} />
					)}
				</motion.div>

				{/* Title Section */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
					style={{ transformStyle: "preserve-3d" }}
				>
					<h1
						className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 font-black uppercase tracking-tighter leading-none"
						style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", transform: "translateZ(80px)" }}
					>
						{titleWord1}
					</h1>
					<h2
						className={`font-black uppercase tracking-tighter leading-none mt-2 ${titleWord2Class}`}
						style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", transform: "translateZ(100px)" }}
					>
						{titleWord2}
					</h2>
				</motion.div>

				{/* Description Paragraph */}
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.4 }}
					className="mt-10 text-lg md:text-2xl font-light leading-relaxed max-w-2xl text-foreground/80 dark:text-foreground/60"
					style={{ transform: "translateZ(60px)" }}
				>
					{description}
				</motion.p>
			</motion.div>

			{/* Fade to background gradient */}
			<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
		</section>
	);
}
