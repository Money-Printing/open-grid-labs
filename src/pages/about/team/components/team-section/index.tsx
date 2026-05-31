import { useEffect, useRef, useState } from "react";
import PageHeading from "../../../../../components/page-heading";

const WHAT_THEY_DO = [
	{ label: "Engineering & Development", count: 3, color: "hsl(210,100%,60%)" },
	{ label: "Strategy & Leadership", count: 2, color: "hsl(270,80%,65%)" },
	{ label: "AI & Research", count: 1, color: "hsl(160,75%,50%)" },
	{ label: "Marketing & Growth", count: 1, color: "hsl(38,100%,55%)" },
	{ label: "Sales & Business Dev", count: 1, color: "hsl(330,80%,62%)" },
	{ label: "Quality Assurance", count: 1, color: "hsl(190,85%,52%)" },
];

const SKILLS = [
	{ label: "Full Stack Engineering", count: 2, color: "hsl(210,100%,60%)" },
	{ label: "System Architecture", count: 2, color: "hsl(250,90%,65%)" },
	{ label: "Machine Learning / AI", count: 1, color: "hsl(270,80%,65%)" },
	{ label: "Test Automation / SDET", count: 1, color: "hsl(160,75%,50%)" },
	{ label: "Digital Marketing", count: 1, color: "hsl(38,100%,55%)" },
	{ label: "Business Development", count: 1, color: "hsl(330,80%,62%)" },
	{ label: "Data Science", count: 1, color: "hsl(190,85%,52%)" },
	{ label: "Brand & Growth Strategy", count: 1, color: "hsl(38,100%,55%)" },
];

const SENIORITY = [
	{ label: "Co-Founders", count: 2, color: "hsl(210,100%,60%)" },
	{ label: "Senior / Lead Engineers", count: 2, color: "hsl(270,80%,65%)" },
	{ label: "Functional Leads", count: 2, color: "hsl(160,75%,50%)" },
];

const SUMMARY_STATS = [
	{ value: "6", label: "Team Members" },
	{ value: "6", label: "Domains Covered" },
	{ value: "18+", label: "Combined Skills" },
	{ value: "100%", label: "India-Based" },
];

function AnimatedBar({ pct, color, delay = 0 }: { pct: number; color: string; delay?: number }) {
	const [width, setWidth] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let timeoutId: number | null = null;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && timeoutId === null) {
					timeoutId = window.setTimeout(() => setWidth(pct), delay);
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => {
			observer.disconnect();
			if (timeoutId !== null) {
				window.clearTimeout(timeoutId);
			}
		};
	}, [pct, delay]);

	const shadowColor = color.startsWith("hsl")
		? color.replace("hsl", "hsla").replace(")", ", 0.375)")
		: `${color}60`;

	return (
		<div ref={ref} className="h-2 rounded-full bg-foreground/8 overflow-hidden">
			<div
				className="h-full rounded-full"
				style={{
					width: `${width}%`,
					background: color,
					transition: "width 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
					boxShadow: `0 0 10px ${shadowColor}`,
				}}
			/>
		</div>
	);
}

function StatPanel({
	title,
	description,
	rows,
	maxCount,
	accentColor,
}: {
	title: string;
	description?: string;
	rows: { label: string; count: number; color: string }[];
	maxCount: number;
	accentColor: string;
}) {
	return (
		<div
			className="flex flex-col gap-6 p-6 sm:p-8 rounded-[28px] border border-black/5 dark:border-white/5 bg-white/60 dark:bg-foreground/[0.03] backdrop-blur-md"
		>
			{/* Panel header */}
			<div className="flex flex-col gap-1 pb-4 border-b border-black/5 dark:border-white/5">
				<div className="flex items-center gap-3">
					<div className="w-1 h-6 rounded-full" style={{ background: accentColor }} />
					<h3 className="text-sm font-bold tracking-[0.25em] uppercase text-foreground/60">{title}</h3>
				</div>
				{description && (
					<p className="text-xs text-muted-foreground mt-1 font-medium">{description}</p>
				)}
			</div>

			{/* Rows */}
			<div className="flex flex-col gap-5">
				{rows.map((row, i) => (
					<div key={i} className="flex flex-col gap-2">
						<div className="flex items-center justify-between">
							<span className="text-sm font-semibold text-foreground/80">{row.label}</span>
							<span
								className="text-sm font-bold tabular-nums"
								style={{ color: row.color }}
							>
								{row.count}
							</span>
						</div>
						<AnimatedBar
							pct={(row.count / maxCount) * 100}
							color={row.color}
							delay={i * 80}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default function TeamSection() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => setMounted(true), 100);
		return () => clearTimeout(t);
	}, []);

	const maxWhatTheyDo = Math.max(...WHAT_THEY_DO.map(r => r.count));
	const maxSkills = Math.max(...SKILLS.map(r => r.count));
	const maxSeniority = Math.max(...SENIORITY.map(r => r.count));

	return (
		<section className="relative w-full flex flex-col items-center gap-16 py-24 overflow-hidden">
			{/* Ambient glows */}
			<div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
			<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

			{/* Heading */}
			<PageHeading preTitle="Meet" mainTitle="Our" postTitle="Brilliant Team" />

			{/* Summary stats bar */}
			<div
				className="w-[90%] max-w-[1600px] mx-auto"
				style={{
					opacity: mounted ? 1 : 0,
					transform: mounted ? "translateY(0)" : "translateY(24px)",
					transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
				}}
			>
				<div
					className="w-full rounded-[28px] border border-black/5 dark:border-white/5 bg-white/60 dark:bg-foreground/[0.03] backdrop-blur-md"
				>
					<div className="grid grid-cols-2 md:grid-cols-4">
						{SUMMARY_STATS.map((stat, i) => (
							<div
								key={i}
								className={`flex flex-col items-center justify-center py-8 sm:py-10 gap-1 ${i < SUMMARY_STATS.length - 1
										? "border-r border-black/5 dark:border-white/5"
										: ""
									}`}
							>
								<span
									className="text-4xl sm:text-5xl font-bold tracking-tight"
									style={{
										background: "linear-gradient(135deg, hsl(210,100%,65%), hsl(280,100%,70%))",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										backgroundClip: "text",
										filter: "drop-shadow(0 0 20px rgba(59,130,246,0.4))",
									}}
								>
									{stat.value}
								</span>
								<span className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/40 mt-1">
									{stat.label}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* 3-column stat panels */}
			<div
				className="w-[90%] max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
				style={{
					opacity: mounted ? 1 : 0,
					transform: mounted ? "translateY(0)" : "translateY(24px)",
					transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
				}}
			>
				<StatPanel
					title="What They Do"
					description="Roles allocated (members span multiple operational functions)"
					rows={WHAT_THEY_DO}
					maxCount={maxWhatTheyDo}
					accentColor="hsl(210,100%,60%)"
				/>
				<StatPanel
					title="What They Are Skilled At"
					description="Core expertise mapped across engineering & business domains"
					rows={SKILLS}
					maxCount={maxSkills}
					accentColor="hsl(270,80%,65%)"
				/>
				<StatPanel
					title="Team Seniority"
					description="Headcount distribution by tier (strictly totals to 6 members)"
					rows={SENIORITY}
					maxCount={maxSeniority}
					accentColor="hsl(160,75%,50%)"
				/>
			</div>
		</section>
	);
}