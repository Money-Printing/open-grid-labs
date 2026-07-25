import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router";
import SEO from "../../components/seo";
import {
	Rocket,
	ArrowRight,
	Lightbulb,
	Code2,
	Zap,
	TrendingUp,
	Shield,
	Clock,
	Server,
} from "lucide-react";

/* ═══════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════ */

const JOURNEY_PHASES = [
	{
		phase: "01",
		title: "Discovery",
		subtitle: "Idea → Blueprint",
		description:
			"Deep-dive into the founders' vision for software supply chain security. We ran 40+ user interviews, mapped the competitive DevSecOps landscape, and distilled a razor-sharp MVP scope in just 3 weeks.",
		icon: Lightbulb,
		color: "hsl(210,100%,60%)",
		duration: "3 Weeks",
		highlights: ["User Research", "Market Analysis", "MVP Scope"],
	},
	{
		phase: "02",
		title: "Build",
		subtitle: "Blueprint → Product",
		description:
			"A crack squad of engineers built the core engine: deep dependency-tree scanning, taint-analysis-based detection, autonomous remediation workflows, and multi-tenant isolation.",
		icon: Code2,
		color: "hsl(170,100%,45%)",
		duration: "8 Months",
		highlights: ["Dependency Scan", "Taint Analysis", "Auto-Remediation"],
	},
	{
		phase: "03",
		title: "Launch",
		subtitle: "Product → Market",
		description:
			"Deployed on Kubernetes across AWS and OCI, integrated with major git providers, automated compliance evidence collection, and successfully onboarding early design partners.",
		icon: Zap,
		color: "hsl(280,100%,65%)",
		duration: "3 Months",
		highlights: ["Cloud Security", "Git Integration", "SOC 2 Readiness"],
	},
	{
		phase: "04",
		title: "Scale",
		subtitle: "Market → Dominance",
		description:
			"Expanded the platform into Cloud and API security posture management, finalized FedRAMP High/IL7 compliance readiness, and transitioned to a fully scaling enterprise suite.",
		icon: TrendingUp,
		color: "hsl(40,100%,55%)",
		duration: "Ongoing",
		highlights: ["CSPM / ASPM", "FedRAMP High", "Enterprise Scale"],
	},
];

const IMPACT_STATS = [
	{ value: "-85%", label: "MTTR Reduction", icon: Clock, color: "hsl(210,100%,60%)" },
	{ value: "90%", label: "False Positives Cut", icon: Shield, color: "hsl(170,100%,45%)" },
	{ value: "Full", label: "Transitive Scan", icon: Zap, color: "hsl(280,100%,65%)" },
	{ value: "IL7", label: "Compliance Ready", icon: Shield, color: "hsl(40,100%,55%)" },
];

const TECH_STACK = [
	{ name: "React", color: "hsl(193,95%,68%)" },
	{ name: "TypeScript", color: "hsl(211,60%,48%)" },
	{ name: "Node.js", color: "hsl(120,40%,55%)" },
	{ name: "Go", color: "hsl(193,60%,50%)" },
	{ name: "Python", color: "hsl(207,51%,46%)" },
	{ name: "PostgreSQL", color: "hsl(210,80%,55%)" },
	{ name: "OpenSearch", color: "hsl(28,100%,53%)" },
	{ name: "Redis", color: "hsl(0,68%,42%)" },
	{ name: "Kubernetes", color: "hsl(210,100%,56%)" },
	{ name: "AWS", color: "hsl(28,100%,53%)" },
	{ name: "OCI", color: "hsl(0,0%,40%)" },
	{ name: "Docker", color: "hsl(207,100%,48%)" },
];

/* ═══════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════ */

function StartupHero() {
	const heroRef = useRef<HTMLDivElement>(null);
	const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleMouseMove = useCallback((e: MouseEvent) => {
		if (!heroRef.current) return;
		const rect = heroRef.current.getBoundingClientRect();
		setMousePos({
			x: (e.clientX - rect.left) / rect.width,
			y: (e.clientY - rect.top) / rect.height,
		});
	}, []);

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [handleMouseMove]);

	const tiltX = (mousePos.y - 0.5) * -10;
	const tiltY = (mousePos.x - 0.5) * 10;

	return (
		<section
			ref={heroRef}
			className="relative w-[90%] max-w-[1600px] mx-auto overflow-hidden flex flex-col items-center justify-center mt-2 mb-8"
			style={{ minHeight: "85vh" }}
		>
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage: `
						linear-gradient(rgba(0,157,220,0.08) 1px, transparent 1px),
						linear-gradient(90deg, rgba(0,157,220,0.08) 1px, transparent 1px)
					`,
					backgroundSize: "50px 50px",
					transform: "perspective(600px) rotateX(60deg) translateY(50%)",
					transformOrigin: "bottom center",
					maskImage: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)",
				}}
			/>
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				{Array.from({ length: 30 }).map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full"
						style={{
							width: `${2 + Math.random() * 3}px`,
							height: `${2 + Math.random() * 3}px`,
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							background: "rgba(0,157,220,0.5)",
							animation: `float-3d ${4 + Math.random() * 6}s ease-in-out infinite`,
							animationDelay: `${Math.random() * 5}s`,
						}}
					/>
				))}
			</div>
			<div
				className="absolute pointer-events-none"
				style={{
					inset: 0,
					background: `
						radial-gradient(ellipse 60% 45% at ${mousePos.x * 100}% ${mousePos.y * 100}%,
							rgba(0,157,220,0.14) 0%, transparent 60%)
					`,
					transition: "background 0.15s ease",
				}}
			/>
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage:
						"repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(128,128,128,0.04) 3px, rgba(128,128,128,0.04) 4px)",
				}}
			/>
			<div
				className="absolute top-0 left-0 right-0 h-px pointer-events-none"
				style={{
					background:
						"linear-gradient(90deg, transparent, rgba(0,157,220,0.7), transparent)",
				}}
			/>
			<div className="absolute top-8 left-8 opacity-25 pointer-events-none">
				<div className="w-16 h-16 border-l-2 border-t-2 border-primary/60 rounded-tl-lg" />
			</div>
			<div className="absolute top-8 right-8 opacity-25 pointer-events-none">
				<div className="w-16 h-16 border-r-2 border-t-2 border-primary/60 rounded-tr-lg" />
			</div>
			<div className="absolute bottom-8 left-8 opacity-25 pointer-events-none">
				<div className="w-16 h-16 border-l-2 border-b-2 border-primary/60 rounded-bl-lg" />
			</div>
			<div className="absolute bottom-8 right-8 opacity-25 pointer-events-none">
				<div className="w-16 h-16 border-r-2 border-b-2 border-primary/60 rounded-br-lg" />
			</div>
			<div
				className="absolute pointer-events-none"
				style={{
					top: "10%",
					right: "8%",
					width: "200px",
					height: "200px",
					borderRadius: "50%",
					background: "radial-gradient(circle, rgba(0,157,220,0.15), transparent 70%)",
					filter: "blur(30px)",
					animation: "float-3d 8s ease-in-out infinite",
				}}
			/>
			<div
				className="absolute pointer-events-none"
				style={{
					bottom: "15%",
					left: "5%",
					width: "150px",
					height: "150px",
					borderRadius: "50%",
					background: "radial-gradient(circle, rgba(0,157,220,0.12), transparent 70%)",
					filter: "blur(25px)",
					animation: "float-3d 10s ease-in-out infinite",
					animationDelay: "2s",
				}}
			/>
			<div
				className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-16"
				style={{
					transform: `perspective(1200px) rotateX(${tiltX * 0.3}deg) rotateY(${tiltY * 0.3}deg)`,
					transition: "transform 0.1s ease-out",
					transformStyle: "preserve-3d",
				}}
			>
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
						style={{ background: "linear-gradient(90deg, transparent, rgba(0,157,220,0.8))" }}
					/>
					<span className="text-xs font-bold tracking-[0.35em] uppercase px-4 py-1.5 rounded-full text-primary bg-primary/10 border border-primary/25 flex items-center gap-2">
						<Rocket className="w-3.5 h-3.5" />
						Startup Co-Builder
					</span>
					<div
						className="h-px w-10"
						style={{ background: "linear-gradient(90deg, rgba(0,157,220,0.8), transparent)" }}
					/>
				</div>
				<div
					style={{
						opacity: mounted ? 1 : 0,
						transform: mounted ? "translateY(0)" : "translateY(30px)",
						transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
						transformStyle: "preserve-3d",
					}}
				>
					<h1
						className="absolute font-bold uppercase tracking-tight leading-none select-none pointer-events-none"
						style={{
							fontSize: "clamp(3rem, 10vw, 9rem)",
							color: "transparent",
							WebkitTextStroke: "1px rgba(0,157,220,0.12)",
							transform: "translateZ(-30px) translateX(4px) translateY(6px)",
							filter: "blur(2px)",
							top: 0,
							left: 0,
							right: 0,
						}}
					>
						Building
					</h1>
					<h1
						className="relative font-bold uppercase tracking-tight leading-none text-foreground"
						style={{
							fontSize: "clamp(3rem, 10vw, 9rem)",
						}}
					>
						Building
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
						className="font-bold uppercase tracking-tight leading-none mt-1 text-primary"
						style={{
							fontSize: "clamp(3rem, 10vw, 9rem)",
						}}
					>
						Startups.
					</h2>
				</div>
				<p
					className="mt-8 text-base md:text-xl font-light leading-relaxed max-w-2xl text-foreground/50"
					style={{
						opacity: mounted ? 1 : 0,
						transform: mounted ? "translateY(0)" : "translateY(20px)",
						transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
					}}
				>
					We don't just write code — we{" "}
					<span className="text-foreground/85 font-medium">co-build startups</span>{" "}
					from zero to product-market fit. One founder's vision. Our engineering firepower.{" "}
					<span className="text-foreground/85 font-medium">Real outcomes.</span>
				</p>
				<div
					className="mt-10 h-px"
					style={{
						width: "clamp(120px, 30vw, 300px)",
						background: "linear-gradient(90deg, transparent, rgba(0,157,220,0.5), transparent)",
						opacity: mounted ? 1 : 0,
						transition: "opacity 0.6s ease 0.45s",
					}}
				/>
			</div>
			<div
				className="relative z-10 w-full border-t border-black/5 dark:border-white/5 bg-foreground/[0.02] backdrop-blur-md"
				style={{
					opacity: mounted ? 1 : 0,
					transform: mounted ? "translateY(0)" : "translateY(30px)",
					transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
				}}
			>
				<div className="w-[90%] max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4">
					{IMPACT_STATS.map((stat, i) => (
						<div
							key={i}
							className={`flex flex-col items-center justify-center py-7 group cursor-default ${i < IMPACT_STATS.length - 1 ? "border-r border-black/5 dark:border-white/5" : ""}`}
						>
							<span
								className="text-3xl md:text-4xl font-bold tracking-tight text-primary"
							>
								{stat.value}
							</span>
							<span className="text-xs font-semibold tracking-[0.2em] uppercase mt-1 text-foreground/35">
								{stat.label}
							</span>
						</div>
					))}
				</div>
			</div>
			<div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-b from-transparent to-background" />
		</section>
	);
}

/* ═══════════════════════════════════════════
   CASE STUDY SHOWCASE
   ═══════════════════════════════════════════ */

function CaseStudyShowcase() {
	const cardRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const [tilt, setTilt] = useState({ x: 0, y: 0 });
	const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setIsVisible(true);
			},
			{ threshold: 0.15 }
		);
		if (cardRef.current) observer.observe(cardRef.current);
		return () => observer.disconnect();
	}, []);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		setTilt({
			x: ((y - rect.height / 2) / (rect.height / 2)) * -6,
			y: ((x - rect.width / 2) / (rect.width / 2)) * 6,
		});
		setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
	};

	return (
		<section className="w-[90%] max-w-[1600px] mx-auto py-16">
			<div className="text-center mb-16">
				<div className="flex items-center justify-center gap-3 mb-4">
					<div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, rgba(0,157,220,0.6))" }} />
					<span className="text-xs font-bold tracking-[0.35em] uppercase text-primary/80">
						Featured Case Study
					</span>
					<div className="h-px w-12" style={{ background: "linear-gradient(90deg, rgba(0,157,220,0.6), transparent)" }} />
				</div>
				<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
					<span className="text-foreground">From </span>
					<span
						style={{
							color: "var(--color-primary)",
						}}
					>
						Napkin Sketch
					</span>
					<span className="text-foreground"> to </span>
					<span
						style={{
							color: "var(--color-primary)",
						}}
					>
						Security Platform
					</span>
				</h2>
			</div>
			<div style={{ perspective: "1500px" }}>
				<Link to="/work/safeguard" className="block no-underline">
					<div
						ref={cardRef}
						onMouseMove={handleMouseMove}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => {
							setIsHovered(false);
							setTilt({ x: 0, y: 0 });
						}}
						className="relative rounded-[32px] overflow-hidden cursor-pointer group"
						style={{
							minHeight: "500px",
							transform: isHovered
								? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.01)`
								: "rotateX(0) rotateY(0) scale(1)",
							transformStyle: "preserve-3d",
							transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
							opacity: isVisible ? 1 : 0,
						}}
					>
						<div
							className="absolute inset-0 rounded-[32px] border border-black/5 dark:border-white/[0.08]"
							style={{
								background: isHovered
									? `radial-gradient(ellipse at ${glowPos.x}% ${glowPos.y}%, rgba(0,157,220,0.08) 0%, transparent 60%)`
									: "none",
								backgroundColor: "var(--glass-bg)",
								backdropFilter: "blur(24px)",
							}}
						/>
						<div
							className="absolute inset-0 rounded-[32px] pointer-events-none"
							style={{
								padding: "1.5px",
								background: isHovered
									? "linear-gradient(135deg, var(--color-primary), var(--color-primary))"
									: "linear-gradient(135deg, rgba(0,157,220,0.15), rgba(0,157,220,0.15))",
								WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
								WebkitMaskComposite: "xor",
								maskComposite: "exclude",
								transition: "background 0.4s ease",
							}}
						/>
						<div
							className="absolute pointer-events-none"
							style={{
								top: "-60px",
								right: "-60px",
								width: "280px",
								height: "280px",
								borderRadius: "50%",
								background: "radial-gradient(circle, rgba(0,157,220,0.15), transparent 70%)",
								filter: "blur(30px)",
								transform: isHovered ? "translateZ(20px) scale(1.2)" : "scale(1)",
								transition: "transform 0.5s ease",
							}}
						/>
						<div
							className="absolute pointer-events-none"
							style={{
								bottom: "-40px",
								left: "-40px",
								width: "200px",
								height: "200px",
								borderRadius: "50%",
								background: "radial-gradient(circle, rgba(0,157,220,0.12), transparent 70%)",
								filter: "blur(25px)",
								transform: isHovered ? "translateZ(15px) scale(1.3)" : "scale(1)",
								transition: "transform 0.5s ease",
							}}
						/>
						<div
							className="absolute inset-0 pointer-events-none"
							style={{
								backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(128,128,128,0.015) 3px, rgba(128,128,128,0.015) 4px)",
								opacity: isHovered ? 1 : 0,
								transition: "opacity 0.3s ease",
							}}
						/>
						<div
							className="relative z-10 flex flex-col lg:flex-row gap-8 p-8 md:p-12 lg:p-16"
							style={{
								transform: isHovered ? "translateZ(20px)" : "translateZ(0)",
								transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
							}}
						>
							<div className="flex-1 flex flex-col justify-center">
								<div className="flex items-center gap-3 mb-6">
									<span
										className="text-xs font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full"
										style={{
											color: "var(--color-primary)",
											background: "rgba(0,157,220,0.1)",
											border: "1px solid rgba(0,157,220,0.25)",
										}}
									>
										Cybersecurity · DevSecOps
									</span>
									<span
										className="text-xs font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full"
										style={{
											color: "var(--color-secondary)",
											background: "rgba(0,44,70,0.08)",
											border: "1px solid rgba(0,44,70,0.2)",
										}}
									>
										Enterprise SaaS
									</span>
								</div>
								<h3
									className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-2"
									style={{
										textShadow: isHovered ? "0 0 40px rgba(0,157,220,0.3)" : "none",
										transition: "text-shadow 0.3s ease",
									}}
								>
									<span className="text-foreground">Safeguard.sh</span>
								</h3>
								<p
									className="text-lg md:text-xl font-light leading-relaxed mb-6 italic"
									style={{
										color: "var(--color-primary)",
									}}
								>
									Software Supply Chain Security, From Zero to Platform
								</p>
								<p className="text-base md:text-lg leading-relaxed text-foreground/55 mb-8 max-w-xl">
									A comprehensive software supply chain security platform built from the ground up — helping enterprises find, fix, and prevent vulnerabilities before they ever reach production.
								</p>
								<div className="flex flex-wrap gap-6 mb-8">
									{[
										{ label: "Client", value: "Safeguard.sh" },
										{ label: "Duration", value: "18 Months" },
										{ label: "Team Size", value: "8 Engineers" },
									].map((item, i) => (
										<div key={i}>
											<span className="text-xs uppercase tracking-[0.2em] text-foreground/30 block mb-1">
												{item.label}
											</span>
											<span className="text-sm font-semibold text-foreground/80">{item.value}</span>
										</div>
									))}
								</div>
								<div
									className="flex items-center gap-3 group/cta"
									style={{
										opacity: isHovered ? 1 : 0.7,
										transform: isHovered ? "translateX(4px)" : "translateX(0)",
										transition: "all 0.3s ease",
									}}
								>
									<span
										className="text-sm font-bold tracking-wide"
										style={{ color: "var(--color-primary)" }}
									>
										Read the full case study
									</span>
									<ArrowRight
										className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1"
										style={{ color: "var(--color-primary)" }}
									/>
								</div>
							</div>
							<div className="flex-1 flex items-center justify-center lg:justify-end">
								<div
									className="relative"
									style={{
										width: "min(380px, 100%)",
										height: "380px",
										perspective: "800px",
									}}
								>
									<div
										className="absolute inset-0 rounded-full border border-foreground/5"
										style={{
											transform: "rotateX(60deg) rotateZ(0deg)",
											animation: "spin-y-slow 30s linear infinite",
										}}
									/>
									<div
										className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
										style={{
											background: "radial-gradient(circle, rgba(0,157,220,0.4), rgba(0,157,220,0.1), transparent)",
											boxShadow: "0 0 60px rgba(0,157,220,0.3)",
											animation: "pulse-glow 4s ease-in-out infinite",
										}}
									/>
									{[
										{ top: "5%", left: "10%", val: "-85%", lbl: "MTTR", delay: "0s" },
										{ top: "5%", right: "5%", val: "90%", lbl: "Accuracy", delay: "1s" },
										{ bottom: "15%", left: "5%", val: "FedRAMP", lbl: "Ready", delay: "2s" },
										{ bottom: "10%", right: "10%", val: "IL7", lbl: "Compliant", delay: "0.5s" },
									].map((panel, i) => (
										<div
											key={i}
											className="absolute px-4 py-3 rounded-2xl backdrop-blur-md"
											style={{
												top: panel.top,
												left: panel.left,
												right: panel.right,
												bottom: panel.bottom,
												background: "var(--glass-bg)",
												border: "1px solid var(--glass-border)",
												boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
												animation: `float-3d 5s ease-in-out infinite`,
												animationDelay: panel.delay,
											}}
										>
											<div
												className="text-lg font-bold"
												style={{
													color: "var(--color-primary)",
												}}
											>
												{panel.val}
											</div>
											<div className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-semibold">
												{panel.lbl}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</section>
	);
}

/* ═══════════════════════════════════════════
   JOURNEY TIMELINE
   ═══════════════════════════════════════════ */

function JourneyTimeline() {
	const [activePhase, setActivePhase] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setIsVisible(true);
			},
			{ threshold: 0.1 }
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section ref={sectionRef} className="w-[90%] max-w-[1600px] mx-auto py-20">
			<div className="text-center mb-16">
				<div className="flex items-center justify-center gap-3 mb-4">
					<div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, rgba(0,157,220,0.6))" }} />
					<span className="text-xs font-bold tracking-[0.35em] uppercase text-primary/80">
						The Journey
					</span>
					<div className="h-px w-12" style={{ background: "linear-gradient(90deg, rgba(0,157,220,0.6), transparent)" }} />
				</div>
				<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
					<span className="text-foreground">How We </span>
					<span
						style={{
							color: "var(--color-primary)",
						}}
					>
						Built It
					</span>
				</h2>
			</div>
			<div className="relative mb-12">
				<div className="absolute top-1/2 left-0 right-0 h-px bg-foreground/5 -translate-y-1/2 hidden md:block" />
				<div
					className="absolute top-1/2 left-0 h-px -translate-y-1/2 hidden md:block"
					style={{
						width: `${((activePhase + 1) / JOURNEY_PHASES.length) * 100}%`,
						background: "var(--color-primary)",
						transition: "width 0.5s cubic-bezier(0.16,1,0.3,1)",
						boxShadow: "0 0 20px rgba(0,157,220,0.4)",
					}}
				/>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
					{JOURNEY_PHASES.map((phase, i) => {
						const Icon = phase.icon;
						const isActive = i === activePhase;
						return (
							<button
								key={i}
								onClick={() => setActivePhase(i)}
								className="flex flex-col items-center gap-3 py-4 group cursor-pointer bg-transparent border-none"
								style={{
									opacity: isVisible ? 1 : 0,
									transform: isVisible ? "translateY(0)" : "translateY(20px)",
									transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
								}}
							>
								<div
									className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300"
									style={{
										background: isActive ? `${phase.color}20` : "var(--glass-bg)",
										border: `1.5px solid ${isActive ? `${phase.color}50` : "var(--glass-border)"}`,
										boxShadow: isActive ? `0 0 30px ${phase.color}30` : "none",
										backdropFilter: "blur(12px)",
									}}
								>
									<Icon
										className="w-6 h-6 transition-colors duration-300"
										style={{ color: isActive ? phase.color : "var(--color-foreground)" }}
									/>
								</div>
								<div className="text-center">
									<div
										className="text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-300"
										style={{ color: isActive ? phase.color : "var(--color-muted-foreground)" }}
									>
										Phase {phase.phase}
									</div>
									<div
										className="text-sm font-bold mt-0.5 transition-colors duration-300"
										style={{ color: isActive ? "var(--color-foreground)" : "var(--color-muted-foreground)" }}
									>
										{phase.title}
									</div>
								</div>
							</button>
						);
					})}
				</div>
			</div>
			{JOURNEY_PHASES.map((phase, i) => {
				if (i !== activePhase) return null;
				const Icon = phase.icon;
				return (
					<div
						key={phase.phase}
						className="relative rounded-[28px] overflow-hidden"
						style={{
							background: "var(--glass-bg)",
							backdropFilter: "blur(20px)",
							border: `1px solid ${phase.color}20`,
						}}
					>
						<div
							className="absolute top-0 left-0 right-0 h-px"
							style={{
								background: `linear-gradient(90deg, transparent, ${phase.color}80, transparent)`,
							}}
						/>
						<div className="relative z-10 p-8 md:p-12 flex flex-col lg:flex-row gap-8">
							<div className="flex-1">
								<div className="flex items-center gap-4 mb-6">
									<div
										className="w-16 h-16 rounded-2xl flex items-center justify-center"
										style={{
											background: `${phase.color}15`,
											border: `1px solid ${phase.color}30`,
											boxShadow: `0 0 40px ${phase.color}20`,
										}}
									>
										<Icon className="w-8 h-8" style={{ color: phase.color }} />
									</div>
									<div>
										<span
											className="text-xs font-bold tracking-[0.3em] uppercase"
											style={{ color: phase.color }}
										>
											Phase {phase.phase} &middot; {phase.duration}
										</span>
										<h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
											{phase.title}
										</h3>
										<p className="text-sm text-foreground/50">{phase.subtitle}</p>
									</div>
								</div>
								<p className="text-base md:text-lg leading-relaxed text-foreground/60 mb-8 max-w-xl">
									{phase.description}
								</p>
								<div className="flex flex-wrap gap-3">
									{phase.highlights.map((h, hi) => (
										<span
											key={hi}
											className="px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase"
											style={{
												color: phase.color,
												background: `${phase.color}10`,
												border: `1px solid ${phase.color}25`,
											}}
										>
											{h}
										</span>
									))}
								</div>
							</div>
							<div className="flex-shrink-0 flex-col items-center gap-4 py-4 hidden lg:flex">
								{[0, 1, 2, 3].map((dot) => (
									<div
										key={dot}
										className="w-2 h-2 rounded-full"
										style={{
											background: dot <= i ? phase.color : "var(--color-border)",
											boxShadow: dot <= i ? `0 0 12px ${phase.color}50` : "none",
											transition: "all 0.3s ease",
										}}
									/>
								))}
								<div className="flex-1 w-px" style={{ background: `linear-gradient(to bottom, ${phase.color}30, transparent)` }} />
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
}

/* ═══════════════════════════════════════════
   IMPACT DASHBOARD
   ═══════════════════════════════════════════ */

function ImpactDashboard() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setIsVisible(true);
			},
			{ threshold: 0.2 }
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section ref={sectionRef} className="w-[90%] max-w-[1600px] mx-auto py-20">
			<div className="text-center mb-16">
				<div className="flex items-center justify-center gap-3 mb-4">
					<div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, rgba(0,157,220,0.6))" }} />
					<span className="text-xs font-bold tracking-[0.35em] uppercase text-primary/80">
						The Impact
					</span>
					<div className="h-px w-12" style={{ background: "linear-gradient(90deg, rgba(0,157,220,0.6), transparent)" }} />
				</div>
				<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
					<span className="text-foreground">Results That </span>
					<span
						style={{
							color: "var(--color-primary)",
						}}
					>
						Speak
					</span>
				</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{IMPACT_STATS.map((stat, i) => {
					const Icon = stat.icon;
					return (
						<div
							key={i}
							className="relative rounded-[24px] overflow-hidden group cursor-default"
							style={{
								opacity: isVisible ? 1 : 0,
								transform: isVisible ? "translateY(0)" : "translateY(30px)",
								transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
							}}
						>
							<div
								className="absolute inset-0 rounded-[24px] transition-all duration-300"
								style={{
									background: "var(--glass-bg)",
									backdropFilter: "blur(16px)",
									border: "1px solid var(--glass-border)",
								}}
							/>
							<div
								className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
								style={{
									background: `radial-gradient(circle at 50% 50%, rgba(0,157,220,0.1), transparent 70%)`,
									border: `1px solid var(--color-primary)`,
								}}
							/>
							<div
								className="absolute top-0 left-[20%] right-[20%] h-px pointer-events-none group-hover:left-[10%] group-hover:right-[10%] transition-all duration-500"
								style={{
									background: `linear-gradient(90deg, transparent, rgba(0,157,220,0.8), transparent)`,
								}}
							/>
							<div className="relative z-10 p-8 flex flex-col items-center text-center">
								<div
									className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
									style={{
										background: `${stat.color}12`,
										border: `1px solid ${stat.color}25`,
									}}
								>
									<Icon className="w-6 h-6" style={{ color: stat.color }} />
								</div>
								<span
									className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-primary"
								>
									{stat.value}
								</span>
								<span className="text-xs font-bold tracking-[0.25em] uppercase text-foreground/35">
									{stat.label}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

/* ═══════════════════════════════════════════
   TECH STACK ORBIT
   ═══════════════════════════════════════════ */

function TechStackOrbit() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setIsVisible(true);
			},
			{ threshold: 0.15 }
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section ref={sectionRef} className="w-[90%] max-w-[1600px] mx-auto py-20">
			<div className="text-center mb-16">
				<div className="flex items-center justify-center gap-3 mb-4">
					<div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, rgba(0,157,220,0.6))" }} />
					<span className="text-xs font-bold tracking-[0.35em] uppercase text-primary/80">
						Arsenal
					</span>
					<div className="h-px w-12" style={{ background: "linear-gradient(90deg, rgba(0,157,220,0.6), transparent)" }} />
				</div>
				<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
					<span className="text-foreground">Tech </span>
					<span
						style={{
							color: "var(--color-primary)",
						}}
					>
						Stack
					</span>
				</h2>
				<p className="mt-4 text-foreground/40 max-w-md mx-auto text-sm">
					The cutting-edge technologies that powered Safeguard.sh from prototype to production.
				</p>
			</div>
			<div
				className="relative mx-auto flex items-center justify-center"
				style={{
					width: "min(600px, 90vw)",
					height: "min(600px, 90vw)",
					opacity: isVisible ? 1 : 0,
					transition: "opacity 0.8s ease",
				}}
			>
				{[180, 250, 320].map((radius, ri) => (
					<div
						key={ri}
						className="absolute rounded-full"
						style={{
							width: radius * 2,
							height: radius * 2,
							top: `calc(50% - ${radius}px)`,
							left: `calc(50% - ${radius}px)`,
							border: `1px solid rgba(0,157,220,${0.08 + ri * 0.03})`,
						}}
					/>
				))}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
					<div
						className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
						style={{
							background: "radial-gradient(circle, rgba(0,157,220,0.2), transparent)",
							boxShadow: "0 0 50px rgba(0,157,220,0.2)",
							animation: "pulse-glow 4s ease-in-out infinite",
						}}
					>
						<Server className="w-8 h-8 text-primary" />
					</div>
					<span className="text-xs font-bold tracking-[0.3em] uppercase text-foreground/40">
						Safeguard
					</span>
				</div>
				{TECH_STACK.map((tech, i) => {
					const angle = (i / TECH_STACK.length) * 360;
					const radius = i % 3 === 0 ? 180 : i % 3 === 1 ? 250 : 320;
					const x = Math.cos((angle * Math.PI) / 180) * radius;
					const y = Math.sin((angle * Math.PI) / 180) * radius;

					return (
						<div
							key={i}
							className="absolute group cursor-default"
							style={{
								top: `calc(50% + ${y}px - 32px)`,
								left: `calc(50% + ${x}px - 32px)`,
								opacity: isVisible ? 1 : 0,
								transform: isVisible ? "scale(1)" : "scale(0)",
								transition: `opacity 0.5s ease ${0.3 + i * 0.08}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.08}s`,
								zIndex: 10,
							}}
						>
							<div
								className="w-16 h-16 rounded-full flex items-center justify-center text-xs font-extrabold tracking-wide uppercase transition-all duration-300 group-hover:scale-125"
								style={{
									background: "var(--glass-bg)",
									border: `2px solid ${tech.color}`,
									color: tech.color,
									boxShadow: `0 8px 32px -8px rgba(0,0,0,0.12), 0 0 15px ${tech.color}25`,
									backdropFilter: "blur(12px)",
								}}
								title={tech.name}
							>
								{tech.name.slice(0, 3)}
							</div>
							<div
								className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
								style={{
									background: "var(--glass-bg)",
									border: "1px solid var(--glass-border)",
									backdropFilter: "blur(8px)",
									color: tech.color,
								}}
							>
								{tech.name}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

/* ═══════════════════════════════════════════
   CTA SECTION
   ═══════════════════════════════════════════ */

function StartupCTA() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setIsVisible(true);
			},
			{ threshold: 0.2 }
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section ref={sectionRef} className="w-[90%] max-w-[1600px] mx-auto py-20 mb-16">
			<div
				className="relative rounded-[32px] overflow-hidden"
				style={{
					opacity: isVisible ? 1 : 0,
					transform: isVisible ? "translateY(0)" : "translateY(30px)",
					transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)",
				}}
			>
				<div
					className="absolute inset-0"
					style={{
						background: "rgba(0,157,220,0.08)",
						backdropFilter: "blur(24px)",
					}}
				/>
				<div
					className="absolute inset-0 rounded-[32px]"
					style={{
						border: "1px solid rgba(0,157,220,0.15)",
					}}
				/>
				<div
					className="absolute pointer-events-none"
					style={{
						top: "-80px",
						left: "-80px",
						width: "300px",
						height: "300px",
						borderRadius: "50%",
						background: "radial-gradient(circle, rgba(0,157,220,0.15), transparent 70%)",
						filter: "blur(40px)",
					}}
				/>
				<div
					className="absolute pointer-events-none"
					style={{
						bottom: "-60px",
						right: "-60px",
						width: "250px",
						height: "250px",
						borderRadius: "50%",
						background: "radial-gradient(circle, rgba(0,157,220,0.12), transparent 70%)",
						filter: "blur(35px)",
					}}
				/>
				<div className="relative z-10 p-12 md:p-20 text-center">
					<div
						className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-8"
						style={{
							background: "rgba(0,157,220,0.12)",
							border: "1px solid rgba(0,157,220,0.25)",
							boxShadow: "0 0 40px rgba(0,157,220,0.2)",
						}}
					>
						<Rocket className="w-8 h-8 text-primary" />
					</div>
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
						<span className="text-foreground">Ready to Build </span>
						<span
							style={{
								color: "var(--color-primary)",
							}}
						>
							Your Startup?
						</span>
					</h2>
					<p className="text-foreground/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
						Whether you're a first-time founder with a napkin sketch or a Series A company
						ready to scale — we're the engineering partner you've been looking for.
					</p>
					<Link
						to="/contact-us"
						className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold tracking-wide uppercase no-underline transition-all duration-300 group hover:scale-105"
						style={{
							background: "var(--color-primary)",
							color: "white",
							boxShadow: "0 8px 40px rgba(0,157,220,0.4), 0 0 0 1px rgba(0,157,220,0.2)",
						}}
					>
						Let's Talk
						<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</section>
	);
}

/* ═══════════════════════════════════════════
   MAIN PAGE EXPORT
   ═══════════════════════════════════════════ */

export default function Work() {
	return (
		<>
			<SEO
				title="Our Work - Building Startups from Zero to Scale"
				description="See how OpenGridLabs co-builds startups from idea to product-market fit. Explore our featured case study: Safeguard.sh — Software Supply Chain Security, From Zero to Platform."
				canonical="/work"
				keywords="startup builder, case study, startup co-builder, MVP development, SaaS platform, Cybersecurity, DevSecOps, supply chain security, FedRAMP, SOC 2"
			/>

			<StartupHero />
			<CaseStudyShowcase />
			<JourneyTimeline />
			<ImpactDashboard />
			<TechStackOrbit />
			<StartupCTA />
		</>
	);
}
