import { useEffect, useRef, useState } from "react";
import PageHeading from "../../components/page-heading";
import SEO from "../../components/seo";
import { ProjectsGrid } from "./components/projects-grid";

const projects = [
	{
		title: "Nexus - Microscopic Analysis Web Engine",
		description:
			"A highly intuitive web application for microscopic scanners that streamlines complex workflows and dramatically improves analytical accuracy.",
		href: "/work/frontend-microscopic-scanner",
	},
	{
		title: "Aether - Medical Cloud Architecture",
		description:
			"A reliable, mission-critical cloud platform engineered for managing, analyzing, and securing real-time medical device telemetry.",
		href: "/work/cloud-medical-devices",
	},
	{
		title: "AirTrader – Algorithmic Trading Simulator",
		description:
			"A robust, hyper-realistic trading simulator designed for high-frequency strategy testing and split-second decision-making.",
		href: "/work/airtrader-trading-simulator",
	},
	{
		title: "Cipher - Crypto Analytics Matrix",
		description:
			"Comprehensive cryptographic analysis tools providing real-time, actionable insights for high-stakes digital investments.",
		href: "/work/crypto-analytical-tools",
	},
	{
		title: "Tread - Predictive Telemetry Dashboard",
		description:
			"Advanced monitoring system and predictive analytics dashboard designed to simplify complex mechanical data and enhance operational efficiency.",
		href: "/work/tread-pattern-dashboard",
	},
	{
		title: "Deribit - High-Frequency Option Trader",
		description:
			"Bespoke trading infrastructure engineered to execute complex option strategies with microsecond latency on the Deribit exchange.",
		href: "/work/crypto-deribit-option-trader",
	},
	{
		title: "Champspace - Learn-to-Earn Ecosystem",
		description:
			"A decentralized EdTech platform where knowledge meets economy. Students learn through interactive courses and earn rewards upon completion.",
		href: "/work/champspace",
	},
	{
		title: "OmniAd - Unified Campaign Matrix",
		description:
			"A centralized ad agency command center providing seamless management for all campaigns across Meta, Google, Amazon, and emerging networks.",
		href: "/work/adnow",
	},
	{
		title: "Curiote - Neural Sentiment Analyzer",
		description:
			"Advanced NLP-powered sentiment analysis tool enabling real-time global market insights for equities and cryptocurrency.",
		href: "/work/curiote",
	},
	{
		title: "DataHub - Scalable ML Pipeline",
		description:
			"End-to-end data engineering and machine learning solution powering hyperscale pipelines and delivering predictive, data-driven insights.",
		href: "/work/data-engineering-datascience",
	},
];

const STATS = [
	{ value: "10+", label: "Products Shipped" },
	{ value: "5+", label: "Industries Served" },
	{ value: "99%", label: "Client Satisfaction" },
	{ value: "3M+", label: "Users Impacted" },
];

function WorkHero() {
	const heroRef = useRef<HTMLDivElement>(null);
	const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!heroRef.current) return;
			const rect = heroRef.current.getBoundingClientRect();
			setMousePos({
				x: (e.clientX - rect.left) / rect.width,
				y: (e.clientY - rect.top) / rect.height,
			});
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const tiltX = (mousePos.y - 0.5) * -14;
	const tiltY = (mousePos.x - 0.5) * 14;

	return (
		<section
			ref={heroRef}
			className="relative w-full overflow-hidden flex flex-col items-center justify-center bg-background"
			style={{ minHeight: "80vh" }}
		>
			{/* ── Layered 3D grid floor ── */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage: `
						linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
						linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)
					`,
					backgroundSize: "60px 60px",
					transform: `perspective(800px) rotateX(55deg) translateY(40%)`,
					transformOrigin: "bottom center",
					maskImage: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
				}}
			/>

			{/* ── Radial ambient glows ── */}
			<div
				className="absolute pointer-events-none"
				style={{
					inset: 0,
					background: `
						radial-gradient(ellipse 70% 50% at ${mousePos.x * 100}% ${mousePos.y * 100}%,
							rgba(59,130,246,0.12) 0%, transparent 65%),
						radial-gradient(ellipse 40% 30% at 80% 20%, rgba(147,51,234,0.10) 0%, transparent 60%)
					`,
					transition: "background 0.15s ease",
				}}
			/>

			{/* ── Scanline overlay ── */}
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage:
						"repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(128,128,128,0.05) 3px, rgba(128,128,128,0.05) 4px)",
				}}
			/>

			{/* ── Top border glow line ── */}
			<div
				className="absolute top-0 left-0 right-0 h-px pointer-events-none"
				style={{
					background:
						"linear-gradient(90deg, transparent, rgba(59,130,246,0.6), rgba(147,51,234,0.6), transparent)",
				}}
			/>

			{/* ── Floating corner decorations ── */}
			<div className="absolute top-8 left-8 opacity-30 pointer-events-none">
				<div className="w-16 h-16 border-l-2 border-t-2 border-blue-500/60 rounded-tl-lg" />
			</div>
			<div className="absolute top-8 right-8 opacity-30 pointer-events-none">
				<div className="w-16 h-16 border-r-2 border-t-2 border-purple-500/60 rounded-tr-lg" />
			</div>
			<div className="absolute bottom-8 left-8 opacity-30 pointer-events-none">
				<div className="w-16 h-16 border-l-2 border-b-2 border-blue-500/60 rounded-bl-lg" />
			</div>
			<div className="absolute bottom-8 right-8 opacity-30 pointer-events-none">
				<div className="w-16 h-16 border-r-2 border-b-2 border-purple-500/60 rounded-br-lg" />
			</div>

			{/* ── Main 3D Text Block ── */}
			<div
				className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-16"
				style={{
					transform: `perspective(1200px) rotateX(${tiltX * 0.4}deg) rotateY(${tiltY * 0.4}deg)`,
					transition: "transform 0.1s ease-out",
					transformStyle: "preserve-3d",
				}}
			>
				{/* Eyebrow badge */}
				<div
					className="flex items-center gap-2 mb-8"
					style={{
						opacity: mounted ? 1 : 0,
						transform: mounted ? "translateY(0)" : "translateY(20px)",
						transition: "opacity 0.6s ease, transform 0.6s ease",
					}}
				>
					<div
						className="h-px w-10"
						style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.8))" }}
					/>
					<span
						className="text-xs font-bold tracking-[0.35em] uppercase px-4 py-1.5 rounded-full text-primary bg-primary/10 border border-primary/25"
					>
						OpenGridLabs · Selected Works
					</span>
					<div
						className="h-px w-10"
						style={{ background: "linear-gradient(90deg, rgba(147,51,234,0.8), transparent)" }}
					/>
				</div>

				{/* Giant 3D headline */}
				<div
					style={{
						opacity: mounted ? 1 : 0,
						transform: mounted ? "translateY(0)" : "translateY(30px)",
						transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
						transformStyle: "preserve-3d",
					}}
				>
					{/* Shadow layer for 3D depth */}
					<h1
						className="absolute font-bold uppercase tracking-tight leading-none select-none pointer-events-none"
						style={{
							fontSize: "clamp(3.5rem, 12vw, 11rem)",
							color: "transparent",
							WebkitTextStroke: "1px rgba(59,130,246,0.15)",
							transform: "translateZ(-30px) translateX(4px) translateY(6px)",
							filter: "blur(2px)",
							top: 0,
							left: 0,
							right: 0,
						}}
					>
						Engineering
					</h1>

					<h1
						className="relative font-bold uppercase tracking-tight leading-none text-transparent bg-clip-text"
						style={{
							fontSize: "clamp(3.5rem, 12vw, 11rem)",
							backgroundImage:
								"linear-gradient(135deg, currentColor 0%, currentColor 40%, hsl(210,100%,60%) 70%, hsl(280,100%,60%) 100%)",
							textShadow: "none",
							filter: "drop-shadow(0 0 60px rgba(59,130,246,0.35))",
						}}
					>
						Engineering
					</h1>
				</div>

				<div
					style={{
						opacity: mounted ? 1 : 0,
						transform: mounted ? "translateY(0)" : "translateY(30px)",
						transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
					}}
				>
					<h2
						className="font-bold uppercase tracking-tight leading-none mt-1"
						style={{
							fontSize: "clamp(3.5rem, 12vw, 11rem)",
							background:
								"linear-gradient(135deg, hsl(210,100%,60%) 0%, hsl(280,100%,65%) 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
							filter: "drop-shadow(0 0 40px rgba(147,51,234,0.4))",
						}}
					>
						The Future.
					</h2>
				</div>

				{/* Sub-description */}
				<p
					className="mt-8 text-base md:text-xl font-light leading-relaxed max-w-2xl text-foreground/50 dark:text-foreground/50"
					style={{
						opacity: mounted ? 1 : 0,
						transform: mounted ? "translateY(0)" : "translateY(20px)",
						transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
					}}
				>
					A curated archive of{" "}
					<span className="text-foreground/85 font-medium">
						high-performance digital products
					</span>{" "}
					built for visionary teams — from medtech to fintech, AI to EdTech.
				</p>

				{/* Thin separator */}
				<div
					className="mt-10 h-px"
					style={{
						width: "clamp(120px, 30vw, 300px)",
						background:
							"linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(147,51,234,0.5), transparent)",
						opacity: mounted ? 1 : 0,
						transition: "opacity 0.6s ease 0.45s",
					}}
				/>
			</div>

			{/* ── Stats Bar ── */}
			<div
				className="relative z-10 w-full border-t border-black/5 dark:border-white/5 bg-foreground/[0.02] backdrop-blur-md"
				style={{
					opacity: mounted ? 1 : 0,
					transform: mounted ? "translateY(0)" : "translateY(30px)",
					transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
				}}
			>
				<div className="w-[90%] max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4">
					{STATS.map((stat, i) => (
						<div
							key={i}
							className={`flex flex-col items-center justify-center py-7 group cursor-default ${i < STATS.length - 1 ? "border-r border-black/5 dark:border-white/5" : ""}`}
							style={{
								transition: "background 0.3s ease",
							}}
						>
							<span
								className="text-3xl md:text-4xl font-bold tracking-tight"
								style={{
									background:
										"linear-gradient(135deg, hsl(210,100%,65%), hsl(280,100%,70%))",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
									filter: "drop-shadow(0 0 20px rgba(59,130,246,0.4))",
								}}
							>
								{stat.value}
							</span>
							<span
								className="text-xs font-semibold tracking-[0.2em] uppercase mt-1 text-foreground/35"
							>
								{stat.label}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* ── Bottom fade-out ── */}
			<div
				className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-b from-transparent to-background"
			/>
		</section>
	);
}

export default function Work() {
	return (
		<>
			<SEO
				title="Our Work - Portfolio & Case Studies"
				description="Explore OpenGridLabs' portfolio of innovative projects including medical technology, fintech trading platforms, crypto analytics, EdTech, and AdTech solutions built with modern technologies."
				canonical="/work"
				keywords="software portfolio, case studies, web app projects, medical technology, fintech, crypto analytics, trading platforms, EdTech platform"
			/>

			<WorkHero />

			<div className="w-full">
				<PageHeading
					preTitle="Selected"
					mainTitle="Case"
					postTitle="Studies"
				/>
				<ProjectsGrid projects={projects} />
			</div>
		</>
	);
}
