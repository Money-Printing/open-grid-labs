import type { ReactNode } from "react";

interface CaseStudyBackgroundProps {
	contextTag?: string;
	contextTitle?: string;
	contextIcon: ReactNode;
	contextParagraphs: string[];
	contextHighlightColorClass?: string;
	contextIconColorClass?: string;

	definitionTitle: string;
	definitionText: string;
	definitionIcon: ReactNode;
	definitionIconBgClass?: string;
	definitionIconBorderClass?: string;
	definitionIconColorClass?: string;
	glowColorClass?: string;
	gradientFromClass?: string;
}

export default function CaseStudyBackground({
	contextTag = "Context",
	contextTitle = "Background",
	contextIcon,
	contextParagraphs,
	contextHighlightColorClass = "bg-indigo-400",
	contextIconColorClass = "text-indigo-400",

	definitionTitle,
	definitionText,
	definitionIcon,
	definitionIconBgClass = "bg-indigo-500/10",
	definitionIconBorderClass = "border-indigo-500/20",
	definitionIconColorClass = "text-indigo-400",
	glowColorClass = "bg-indigo-400",
	gradientFromClass = "from-indigo-950/10"
}: CaseStudyBackgroundProps) {
	return (
		<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
			<div className="grid lg:grid-cols-12 gap-12 items-stretch">
				{/* Context Left Column */}
				<div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl space-y-6">
					<div className="flex items-center gap-2">
						<div className={contextIconColorClass}>
							{contextIcon}
						</div>
						<span className={`text-xs md:text-sm font-bold uppercase tracking-widest ${contextIconColorClass}`}>
							{contextTag}
						</span>
					</div>
					<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
						{contextTitle}
					</h2>
					<div className={`w-16 h-1 rounded-full ${contextHighlightColorClass}`} />
					{contextParagraphs.map((para, idx) => (
						<p key={idx} className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
							{para}
						</p>
					))}
				</div>

				{/* Definition Right Column */}
				<div className={`lg:col-span-5 glass-panel p-8 md:p-12 rounded-[40px] border border-black/5 dark:border-white/5 bg-gradient-to-br ${gradientFromClass} via-background to-background shadow-2xl flex flex-col justify-center relative overflow-hidden group`}>
					<div className={`absolute -top-12 -right-12 w-40 h-40 blur-3xl opacity-15 pointer-events-none rounded-full animate-pulse ${glowColorClass}`} />
					
					<div className="space-y-6 relative z-10">
						<div className={`w-12 h-12 rounded-full flex items-center justify-center border ${definitionIconBgClass} ${definitionIconBorderClass} ${definitionIconColorClass}`}>
							{definitionIcon}
						</div>
						<h3 className="text-2xl md:text-3xl font-bold text-foreground">
							{definitionTitle}
						</h3>
						<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
							{definitionText}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
