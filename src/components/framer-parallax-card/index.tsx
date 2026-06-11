import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export interface FramerParallaxCardProps {
	children: React.ReactNode;
	highlight: string;
	index: number;
	tiltMax?: number;
	translateZ?: number;
	backdropBlurClass?: string;
	roundedClass?: string;
	shadowClass?: string;
	highlightOpacity?: string;
	radialRadius?: string;
	topGlareHeightClass?: string;
}

export default function FramerParallaxCard({
	children,
	highlight,
	index,
	tiltMax = 15,
	translateZ = 20,
	backdropBlurClass = "backdrop-blur-xl",
	roundedClass = "rounded-3xl",
	shadowClass = "shadow-lg",
	highlightOpacity = "30",
	radialRadius = "60%",
	topGlareHeightClass = "h-px",
}: FramerParallaxCardProps) {
	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);
	const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
	const rotateX = useSpring(useTransform(y, [0, 1], [tiltMax, -tiltMax]), springConfig);
	const rotateY = useSpring(useTransform(x, [0, 1], [-tiltMax, tiltMax]), springConfig);

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		const rect = e.currentTarget.getBoundingClientRect();
		x.set((e.clientX - rect.left) / rect.width);
		y.set((e.clientY - rect.top) / rect.height);
	}

	return (
		<motion.div
			initial={{ opacity: 0, rotateX: 45, y: 50 }}
			whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
			onMouseMove={handleMouseMove}
			onMouseLeave={() => { x.set(0.5); y.set(0.5); }}
			style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
			className={`relative group p-6 ${roundedClass} border border-black/5 dark:border-transparent bg-foreground/[0.01] ${backdropBlurClass} overflow-hidden hover:border-black/20 dark:border-transparent transition-colors ${shadowClass}`}
		>
			<motion.div
				className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
				style={{
					background: useTransform(
						[x, y],
						([latestX, latestY]: any) => `radial-gradient(circle at ${latestX * 100}% ${latestY * 100}%, ${highlight}${highlightOpacity}, transparent ${radialRadius})`
					)
				}}
			/>
			<div className={`absolute top-0 left-0 right-0 ${topGlareHeightClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-black/50 dark:via-white/50 to-transparent`} />
			<div style={{ transform: `translateZ(${translateZ}px)` }}>{children}</div>
		</motion.div>
	);
}
