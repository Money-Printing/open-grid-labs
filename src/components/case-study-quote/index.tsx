import { Quote as QuoteIcon } from "lucide-react";

interface CaseStudyQuoteProps {
	quote: string;
	author: string;
	subtitle: string;
	accentLineClass?: string;
	iconColorClass?: string;
}

export default function CaseStudyQuote({
	quote,
	author,
	subtitle,
	accentLineClass = "bg-indigo-400",
	iconColorClass = "text-indigo-500/10"
}: CaseStudyQuoteProps) {
	// Clean up any double quotes from start/end if they were passed
	const cleanQuote = quote.replace(/^["“”]/, "").replace(/["“”]$/, "");
	// Clean up leading dashes/em-dashes from author name
	const cleanAuthor = author.replace(/^[—\-\s\u2013\u2014]+/, "");

	return (
		<section className="w-[90%] max-w-[1200px] mx-auto mt-32 relative z-10 text-center">
			<div className="glass-panel p-12 md:p-20 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
				<div className={`absolute top-8 left-10 opacity-20 pointer-events-none ${iconColorClass}`}>
					<QuoteIcon className="w-36 h-36" />
				</div>
				<div className="space-y-8 relative z-10">
					<p className="text-xl md:text-3xl italic font-light leading-relaxed text-foreground max-w-4xl mx-auto">
						"{cleanQuote}"
					</p>
					<div className={`w-12 h-px mx-auto ${accentLineClass}`} />
					<div>
						<p className="font-bold text-lg text-foreground">— {cleanAuthor}</p>
						<p className="text-sm text-muted-foreground font-medium">{subtitle}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
