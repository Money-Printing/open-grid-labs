import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import React, { useRef, useState, useEffect } from "react";

interface ProjectCardProps {
	title: string;
	description: string;
	href: string;
	tag?: string;
}

interface ProjectsGridProps {
	projects: ProjectCardProps[];
}

const CARD_COLORS = [
	{ from: "hsl(210,100%,50%)", to: "hsl(280,100%,60%)" },
	{ from: "hsl(280,100%,60%)", to: "hsl(210,100%,50%)" },
	{ from: "hsl(170,100%,40%)", to: "hsl(210,100%,50%)" },
	{ from: "hsl(320,100%,55%)", to: "hsl(210,100%,50%)" },
	{ from: "hsl(40,100%,50%)", to: "hsl(280,100%,60%)" },
	{ from: "hsl(160,80%,40%)", to: "hsl(210,100%,50%)" },
];

function HoloCard({
	project,
	index,
}: {
	project: ProjectCardProps;
	index: number;
}) {
	const cardRef = useRef<HTMLDivElement>(null);
		const [isHovered, setIsHovered] = useState(false);
	const [tilt, setTilt] = useState({ x: 0, y: 0 });
	const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
	const [shimmerPos, setShimmerPos] = useState({ x: -100, y: -100 });
	const [isVisible, setIsVisible] = useState(false);
	const color = CARD_COLORS[index % CARD_COLORS.length];

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), index * 100);
		return () => clearTimeout(timer);
	}, [index]);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const cx = rect.width / 2;
		const cy = rect.height / 2;

		setTilt({
			x: ((y - cy) / cy) * -12,
			y: ((x - cx) / cx) * 12,
		});
		setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
		setShimmerPos({ x, y });
	};

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => {
		setIsHovered(false);
		setTilt({ x: 0, y: 0 });
		setShimmerPos({ x: -100, y: -100 });
	};

	return (
		<div
			style={{
				perspective: "1200px",
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? "translateY(0)" : "translateY(40px)",
				transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s`,
			}}
		>
			<div
				ref={cardRef}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				style={{
					transform: isHovered
						? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`
						: "rotateX(0deg) rotateY(0deg) scale(1)",
					transformStyle: "preserve-3d",
					transition: isHovered
						? "transform 0.12s ease-out"
						: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
				}}
				className="relative w-full h-full min-h-[320px] rounded-[28px] overflow-hidden cursor-pointer group"
			>
				{/* --- Base Layer: dark glass body --- */}
				<div
					className="absolute inset-0 rounded-[28px] transition-all duration-300 border border-black/5 dark:border-white/5 bg-white/90 dark:bg-[#0c0d16f5]"
					style={{
						backgroundImage: isHovered
							? `radial-gradient(ellipse at ${glowPos.x}% ${glowPos.y}%, rgba(120,130,255,0.1) 0%, transparent 70%)`
							: "none",
					}}
				/>

				{/* --- Holographic Shimmer Layer --- */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: `radial-gradient(circle 300px at ${shimmerPos.x}px ${shimmerPos.y}px,
							rgba(120,120,120,0.06) 0%,
							rgba(120,120,120,0.02) 30%,
							transparent 70%)`,
						transition: "opacity 0.2s ease",
						opacity: isHovered ? 1 : 0,
					}}
				/>

				{/* --- Gradient glow border (bottom + right on hover) --- */}
				<div
					className="absolute inset-0 rounded-[28px] pointer-events-none"
					style={{
						padding: "1px",
						background: isHovered
							? `linear-gradient(135deg, transparent 40%, ${color.from}55, ${color.to}55)`
							: "transparent",
						WebkitMask:
							"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
						WebkitMaskComposite: "xor",
						maskComposite: "exclude",
						transition: "background 0.4s ease",
					}}
				/>

				{/* --- Floating 3D accent orb (top right) --- */}
				<div
					className="absolute pointer-events-none"
					style={{
						top: "-40px",
						right: "-40px",
						width: "180px",
						height: "180px",
						borderRadius: "50%",
						background: `radial-gradient(circle, ${color.from}30, transparent 70%)`,
						transform: isHovered
							? `translateZ(30px) scale(1.3) translateX(-10px) translateY(10px)`
							: "translateZ(0) scale(1)",
						transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
						filter: "blur(20px)",
					}}
				/>
				{/* --- Second orb (bottom left) --- */}
				<div
					className="absolute pointer-events-none"
					style={{
						bottom: "-30px",
						left: "-30px",
						width: "130px",
						height: "130px",
						borderRadius: "50%",
						background: `radial-gradient(circle, ${color.to}25, transparent 70%)`,
						filter: "blur(16px)",
						transform: isHovered ? "scale(1.4)" : "scale(1)",
						transition: "transform 0.5s ease",
					}}
				/>

				{/* --- Scanline overlay for cyberpunk feel --- */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						backgroundImage:
							"repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(128,128,128,0.012) 3px, rgba(128,128,128,0.012) 4px)",
						opacity: isHovered ? 1 : 0,
						transition: "opacity 0.3s ease",
					}}
				/>

				{/* --- Index Tag --- */}
				<div
					className="absolute top-6 left-6 pointer-events-none"
					style={{
						transform: isHovered ? "translateZ(20px)" : "translateZ(0)",
						transition: "transform 0.4s ease",
					}}
				>
					<span
						className="text-xs font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full"
						style={{
							color: color.from,
							background: `${color.from}15`,
							border: `1px solid ${color.from}30`,
							boxShadow: isHovered ? `0 0 20px ${color.from}25` : "none",
							transition: "box-shadow 0.3s ease",
						}}
					>
						{project.tag ?? "Case Study"}
					</span>
				</div>

				{/* --- Arrow button (top right) --- */}
				<div
					className="absolute top-6 right-6 z-20"
					style={{
						transform: isHovered
							? "translateZ(25px) rotate(-45deg)"
							: "translateZ(0) rotate(0deg)",
						transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
					}}
				>
					<div
						className="w-12 h-12 rounded-full flex items-center justify-center"
						style={{
							background: isHovered
								? `linear-gradient(135deg, ${color.from}, ${color.to})`
								: "rgba(255,255,255,0.05)",
							border: `1px solid ${isHovered ? "transparent" : "rgba(255,255,255,0.1)"}`,
							boxShadow: isHovered ? `0 8px 30px ${color.from}55` : "none",
							transition: "all 0.4s ease",
						}}
					>
						<ArrowUpRight
							className="w-5 h-5 transition-colors duration-300"
							style={{
								color: isHovered ? "var(--color-background)" : "currentColor",
							}}
						/>
					</div>
				</div>

				{/* --- Main Content --- */}
				<div
					className="relative z-10 flex flex-col justify-end h-full p-8 pt-24"
					style={{
						transform: isHovered ? "translateZ(15px)" : "translateZ(0)",
						transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
					}}
				>
					{/* Divider line */}
					<div
						className="w-full h-px mb-6"
						style={{
							background: `linear-gradient(90deg, ${color.from}60, ${color.to}60, transparent)`,
							opacity: isHovered ? 1 : 0.2,
							transform: isHovered ? "scaleX(1)" : "scaleX(0.3)",
							transformOrigin: "left",
							transition: "opacity 0.4s ease, transform 0.4s ease",
						}}
					/>

					<h2
						className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-4 transition-all duration-300 text-foreground/90 group-hover:text-foreground"
						style={{
							textShadow: isHovered
								? `0 0 30px ${color.from}50`
								: "none",
						}}
					>
						{project.title}
					</h2>

					<p
						className="text-sm md:text-base leading-relaxed transition-all duration-400 text-foreground/60 group-hover:text-foreground/80"
						style={{
							maxHeight: isHovered ? "120px" : "60px",
							overflow: "hidden",
						}}
					>
						{project.description}
					</p>

					{/* CTA Row */}
					<div
						className="flex items-center gap-2 mt-5"
						style={{
							opacity: isHovered ? 1 : 0,
							transform: isHovered ? "translateY(0)" : "translateY(8px)",
							transition: "opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s",
						}}
					>
						<ExternalLink className="w-4 h-4" style={{ color: color.from }} />
						<span
							className="text-sm font-semibold tracking-wide"
							style={{ color: color.from }}
						>
							View full case study
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
	return (
		<section className="relative w-full px-4 pb-32 mt-16">
			{/* Subtle ambient background glow */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					background:
						"radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)",
				}}
			/>

			<div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
				{projects.map((project, idx) => (
					<Link key={idx} to={project.href} className="block h-full no-underline">
						<HoloCard project={project} index={idx} />
					</Link>
				))}
			</div>
		</section>
	);
}
