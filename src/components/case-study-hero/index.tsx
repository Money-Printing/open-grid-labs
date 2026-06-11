import { motion } from "motion/react";
import { Terminal } from "lucide-react";

export interface ProjectDetailItem {
	label: string;
	value: string;
}

interface CaseStudyHeroProps {
	categoryTag: string;
	title: string;
	description: string;
	categoryBorderClass?: string;
	categoryBgClass?: string;
	categoryTextClass?: string;
	glowBgClass?: string;
	terminalIconClass?: string;
	detailsTitle?: string;
	details: ProjectDetailItem[];
}

export default function CaseStudyHero({
	categoryTag,
	title,
	description,
	categoryBorderClass = "border-indigo-500/30",
	categoryBgClass = "bg-indigo-500/10",
	categoryTextClass = "text-indigo-400",
	glowBgClass = "bg-indigo-400",
	terminalIconClass = "text-indigo-400",
	detailsTitle = "Project Scope",
	details
}: CaseStudyHeroProps) {
	return (
		<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
			<div className="grid lg:grid-cols-12 gap-12 items-start">
				<motion.div 
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="lg:col-span-8 space-y-6"
				>
					<div className="flex items-center gap-3">
						<span className={`text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border backdrop-blur-md ${categoryBorderClass} ${categoryBgClass} ${categoryTextClass}`}>
							{categoryTag}
						</span>
					</div>

					<h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
						{title}
					</h1>

					<p className="text-lg md:text-2xl font-light text-foreground/80 leading-relaxed max-w-3xl">
						{description}
					</p>
				</motion.div>

				{/* Project Overview Details Panel */}
				<motion.div 
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
					className="lg:col-span-4 w-full"
				>
					<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl space-y-6">
						<div className={`absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full ${glowBgClass}`} />
						<div className="flex items-center gap-3 border-b border-white/10 pb-4">
							<Terminal className={`w-6 h-6 ${terminalIconClass}`} />
							<h3 className="text-lg font-bold text-foreground">{detailsTitle}</h3>
						</div>
						
						<div className="space-y-4">
							{details.map((detail, idx) => (
								<div key={idx}>
									<span className="text-xs uppercase text-muted-foreground block font-bold tracking-wider">{detail.label}</span>
									<span className="text-base font-semibold text-foreground">{detail.value}</span>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
