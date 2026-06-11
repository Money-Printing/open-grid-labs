import { CheckCircle2 } from "lucide-react";

export interface ResultRow {
	metric: string;
	before: string;
	after: string;
	change: string;
}

interface MeasurableResultsProps {
	tagline?: string;
	title?: string;
	description: string;
	results: ResultRow[];
}

export default function MeasurableResults({
	tagline = "Proven Impact",
	title = "Measurable Results",
	description,
	results
}: MeasurableResultsProps) {
	return (
		<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
			<div className="mb-12 text-center lg:text-left">
				<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{tagline}</span>
				<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
					{title}
				</h2>
				<p className="text-muted-foreground mt-4 text-lg max-w-2xl">
					{description}
				</p>
			</div>

			<div className="glass-panel rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl">
				<div className="overflow-x-auto">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="bg-white/5 border-b border-white/10">
								<th className="p-6 text-sm font-bold uppercase tracking-wider text-foreground">Metric</th>
								<th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">Before</th>
								<th className="p-6 text-sm font-bold uppercase tracking-wider text-indigo-400">After</th>
								<th className="p-6 text-sm font-bold uppercase tracking-wider text-green-400">Change</th>
							</tr>
						</thead>
						<tbody>
							{results.map((row, idx) => (
								<tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
									<td className="p-6 font-semibold text-foreground text-base">{row.metric}</td>
									<td className="p-6 text-muted-foreground text-sm">{row.before}</td>
									<td className="p-6 text-indigo-400 font-bold text-base">{row.after}</td>
									<td className="p-6 text-green-400 font-bold text-base flex items-center gap-1.5">
										<CheckCircle2 className="w-4 h-4 text-green-500" />
										{row.change}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}
