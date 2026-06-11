import { Link } from "react-router";
import { Sparkles } from "lucide-react";

interface CaseStudyCtaProps {
	title: string;
	description: string;
	moreCaseStudiesLink: string;
	glowBgClass?: string;
	iconColorClass?: string;
	btnGradientClass?: string;
	btnShadowColor?: string; // e.g. "99,102,241,0.2"
}

export default function CaseStudyCta({
	title,
	description,
	moreCaseStudiesLink,
	glowBgClass = "bg-indigo-400",
	iconColorClass = "text-indigo-400",
	btnGradientClass = "from-indigo-500 to-violet-500",
	btnShadowColor = "99,102,241,0.2"
}: CaseStudyCtaProps) {
	return (
		<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
			<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
				<div 
					className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none ${glowBgClass}`}
				/>
				<div className="max-w-3xl mx-auto space-y-8 relative z-10">
					<Sparkles className={`w-10 h-10 mx-auto animate-pulse ${iconColorClass}`} />
					<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
						{title}
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
						{description}
					</p>
					<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
						<Link 
							to="/contact-us"
							className={`px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white bg-gradient-to-r ${btnGradientClass}`}
							style={{ 
								boxShadow: `0 10px 30px rgba(${btnShadowColor})`
							}}
						>
							Talk to our team
						</Link>
						<Link 
							to={moreCaseStudiesLink}
							className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 border border-white/10 hover:border-white/20 text-foreground"
						>
							More case studies
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
