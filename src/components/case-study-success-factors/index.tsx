import { Activity } from "lucide-react";
import React from "react";

interface FactorItem {
	title: string;
	desc: string;
}

interface CaseStudySuccessFactorsProps {
	factors: FactorItem[];
	tag?: string;
	title?: string;
	icon?: React.ComponentType<{ className?: string }>;
	hoverBorderClass?: string;
	iconColorClass?: string;
}

export default function CaseStudySuccessFactors({
	factors,
	tag = "Key Drivers",
	title = "Why This Worked",
	icon: IconComponent = Activity,
	hoverBorderClass = "hover:border-indigo-500/20",
	iconColorClass = "text-indigo-400"
}: CaseStudySuccessFactorsProps) {
	return (
		<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
			<div className="text-center mb-16">
				<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{tag}</span>
				<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
					{title}
				</h2>
			</div>

			<div className="grid md:grid-cols-3 gap-6">
				{factors.map((factor, idx) => (
					<div 
						key={idx}
						className={`glass-panel p-8 md:p-10 rounded-[32px] border border-black/5 dark:border-white/5 transition-all duration-300 shadow-xl space-y-4 ${hoverBorderClass}`}
					>
						<div className="flex items-center gap-3">
							<IconComponent className={`w-5 h-5 ${iconColorClass}`} />
							<h3 className="text-lg md:text-xl font-bold text-foreground">
								{factor.title}
							</h3>
						</div>
						<p className="text-muted-foreground text-sm leading-relaxed">
							{factor.desc}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
