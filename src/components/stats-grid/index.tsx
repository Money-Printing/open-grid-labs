import { motion } from "motion/react";

export interface StatItem {
	value: string;
	label: string;
	accent: string;
}

interface StatsGridProps {
	stats: StatItem[];
	hoverBorderClass?: string;
	hoverTextClass?: string;
}

export default function StatsGrid({
	stats,
	hoverBorderClass = "hover:border-indigo-500/30",
	hoverTextClass = "group-hover:text-indigo-400"
}: StatsGridProps) {
	return (
		<section className="w-[90%] max-w-[1600px] mx-auto mt-20 relative z-10">
			<div className="grid md:grid-cols-4 gap-6">
				{stats.map((stat, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: idx * 0.08 }}
						whileHover={{ scale: 1.03, y: -5 }}
						className={`glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 transition-all duration-300 shadow-xl relative overflow-hidden group ${hoverBorderClass}`}
					>
						<div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
						<div className="space-y-2 relative z-10">
							<p className={`text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground transition-colors ${hoverTextClass}`}>
								{stat.value}
							</p>
							<p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/90 transition-colors">
								{stat.label}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
