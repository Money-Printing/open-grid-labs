import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ChallengeSolutionItem {
	text: string;
}

interface ChallengesSolutionsProps {
	challenges: ChallengeSolutionItem[];
	solutions: ChallengeSolutionItem[];
	tag?: string;
	title?: string;
	description?: string;
	hoverBorderClass?: string;
	arrowColorClass?: string;
}

export default function ChallengesSolutions({
	challenges,
	solutions,
	tag = "The Challenge & Solution",
	title = "Challenges & Solutions",
	description,
	hoverBorderClass = "hover:border-indigo-500/20",
	arrowColorClass = "text-indigo-400"
}: ChallengesSolutionsProps) {
	return (
		<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
			<div className="text-center mb-16">
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

			<div className="space-y-6">
				{challenges.map((challenge, idx) => (
					<motion.div 
						key={idx}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: idx * 0.05 }}
						className={`glass-panel p-8 rounded-[28px] border border-black/5 dark:border-white/5 ${hoverBorderClass} transition-all duration-300 shadow-lg relative overflow-hidden`}
					>
						<div className="grid lg:grid-cols-12 gap-8 items-center">
							{/* Challenge Left Column */}
							<div className="lg:col-span-5 flex gap-4 items-start">
								<div className="w-8 h-8 rounded-full bg-red-500/10 flex-shrink-0 flex items-center justify-center text-red-500 font-bold border border-red-500/20">
									{idx + 1}
								</div>
								<div>
									<span className="text-xs uppercase text-red-500 font-bold tracking-widest block mb-1">Challenge</span>
									<p className="text-foreground/90 font-medium text-base md:text-lg">
										{challenge.text}
									</p>
								</div>
							</div>

							{/* Connector arrow */}
							<div className="hidden lg:flex lg:col-span-1 justify-center">
								<ArrowRight className={`w-6 h-6 ${arrowColorClass}`} />
							</div>

							{/* Solution Right Column */}
							<div className="lg:col-span-6 flex gap-4 items-start border-t lg:border-t-0 pt-4 lg:pt-0 border-white/10">
								<div className="w-8 h-8 rounded-full bg-green-500/10 flex-shrink-0 flex items-center justify-center text-green-500 border border-green-500/20">
									<CheckCircle2 className="w-5 h-5" />
								</div>
								<div>
									<span className="text-xs uppercase text-green-500 font-bold tracking-widest block mb-1">Solution Delivered</span>
									<p className="text-foreground font-semibold text-base md:text-lg">
										{solutions[idx]?.text}
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
