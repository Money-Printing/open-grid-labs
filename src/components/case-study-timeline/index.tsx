import { motion } from "motion/react";

interface PhaseItem {
	number: string;
	title: string;
	desc: string;
}

interface CaseStudyTimelineProps {
	phases: PhaseItem[];
	tag?: string;
	title?: string;
	description?: string;
	phaseColors?: string[];
	axisGradientClass?: string;
	badgeColorClass?: string;
}

export default function CaseStudyTimeline({
	phases,
	tag = "The Roadmap",
	title = "Engagement Approach",
	description,
	phaseColors = ["hsl(230,80%,60%)", "hsl(260,80%,55%)", "hsl(280,80%,50%)"],
	axisGradientClass = "from-indigo-500 via-violet-500 to-purple-500",
	badgeColorClass = "text-indigo-400 bg-indigo-400/10 border-indigo-400/20"
}: CaseStudyTimelineProps) {
	return (
		<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
			<div className="text-center mb-20">
				<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{tag}</span>
				<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
					{title}
				</h2>
				{description && (
					<p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
						{description}
					</p>
				)}
			</div>

			<div className="relative border-l border-white/10 md:border-l-0 md:flex md:flex-row gap-8 space-y-12 md:space-y-0 md:justify-between items-stretch">
				{/* Vertical axis line for desktop */}
				<div className={`hidden md:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r ${axisGradientClass} opacity-20`} />
				
				{phases.map((phase, idx) => {
					const hslColor = phaseColors[idx] || phaseColors[phaseColors.length - 1] || "hsl(230,80%,60%)";
					return (
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
								style={{ backgroundImage: `linear-gradient(to right, ${hslColor}, transparent)` }}
							/>
							<div className="space-y-6">
								<div className="flex items-center justify-between">
									<span className={`text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border ${badgeColorClass}`}>
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
					);
				})}
			</div>
		</section>
	);
}
