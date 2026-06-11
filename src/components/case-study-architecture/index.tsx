import { motion } from "motion/react";
import { Layers, ShieldCheck } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

interface ArchitectureStage {
	title: string;
	items: string[];
	color: string;
}

interface CaseStudyArchitectureProps {
	stages: ArchitectureStage[];
	stageIcons: ComponentType<any>[];
	tag?: string;
	title: string;
	description: string;
	tagColorClass?: string;
	tagIcon?: ReactNode;
	highlightColorClass?: string;
	gradientColorClass?: string;
	alertBorderClass?: string;
	alertBgClass?: string;
	alertTextColorClass?: string;
	alertTitle: string;
	alertText: string;
	rightColumnTitle?: string;
}

export default function CaseStudyArchitecture({
	stages,
	stageIcons,
	tag = "Technical Design",
	title,
	description,
	tagColorClass = "text-indigo-400",
	tagIcon = <Layers className="w-5 h-5" />,
	highlightColorClass = "bg-indigo-400",
	gradientColorClass = "via-indigo-400/50",
	alertBorderClass = "border-indigo-500/20",
	alertBgClass = "bg-indigo-500/5",
	alertTextColorClass = "text-indigo-300",
	alertTitle,
	alertText,
	rightColumnTitle = "Architecture Layers"
}: CaseStudyArchitectureProps) {
	return (
		<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
			<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
				<div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${gradientColorClass} to-transparent`} />
				
				<div className="grid lg:grid-cols-12 gap-12 items-center">
					<div className="lg:col-span-5 space-y-6">
						<div className="flex items-center gap-2">
							<div className={tagColorClass}>
								{tagIcon}
							</div>
							<span className={`text-xs md:text-sm font-bold uppercase tracking-widest ${tagColorClass}`}>
								{tag}
							</span>
						</div>
						<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-tight">
							{title}
						</h2>
						<div className={`w-16 h-1 rounded-full ${highlightColorClass}`} />
						<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
							{description}
						</p>

						{/* Alert Section */}
						<div className={`flex items-start gap-4 p-5 rounded-2xl border ${alertBorderClass} ${alertBgClass} ${alertTextColorClass}`}>
							<ShieldCheck className="w-6 h-6 flex-shrink-0" />
							<p className="text-sm font-medium leading-relaxed">
								<strong>{alertTitle}:</strong> {alertText}
							</p>
						</div>
					</div>

					{/* Interactive Visual Map of the Architecture */}
					<div className="lg:col-span-7 space-y-4">
						<h3 className="text-xs uppercase text-muted-foreground font-bold tracking-widest mb-4 text-center lg:text-left">
							{rightColumnTitle}
						</h3>
						
						<div className="flex flex-col gap-3">
							{stages.map((stage, idx) => {
								const IconComponent = stageIcons[idx];
								return (
									<motion.div 
										key={idx}
										whileHover={{ x: 10 }}
										transition={{ type: "spring", stiffness: 300, damping: 20 }}
										className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg group relative overflow-hidden"
									>
										<div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ backgroundColor: stage.color }} />
										<div className="md:w-1/4">
											<h4 className="font-bold uppercase tracking-wider text-sm text-foreground flex items-center gap-2">
												{IconComponent && <IconComponent className="w-4 h-4" style={{ color: stage.color }} />}
												{stage.title}
											</h4>
										</div>
										<div className="md:w-3/4 flex flex-wrap gap-2">
											{stage.items.map((item, itemIdx) => (
												<span key={itemIdx} className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-muted-foreground group-hover:text-foreground transition-colors">
													{item}
												</span>
											))}
										</div>
									</motion.div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
