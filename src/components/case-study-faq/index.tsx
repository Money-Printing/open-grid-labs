import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FaqItem {
	q: string;
	a: string;
}

interface CaseStudyFaqProps {
	faqs: FaqItem[];
	tag?: string;
	title?: string;
	iconColorClass?: string;
	activeChevronColorClass?: string;
}

export default function CaseStudyFaq({
	faqs,
	tag = "Learning Center",
	title = "Frequently Asked Questions",
	iconColorClass = "text-indigo-400",
	activeChevronColorClass = "text-indigo-400"
}: CaseStudyFaqProps) {
	const [activeFaq, setActiveFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setActiveFaq(activeFaq === index ? null : index);
	};

	return (
		<section className="w-[90%] max-w-[1000px] mx-auto mt-32 relative z-10">
			<div className="text-center mb-12">
				<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{tag}</span>
				<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mt-2">
					{title}
				</h2>
			</div>

			<div className="space-y-4">
				{faqs.map((faq, idx) => {
					const isOpen = activeFaq === idx;
					return (
						<div 
							key={idx} 
							className="glass-panel rounded-2xl border border-black/5 dark:border-white/5 shadow-md overflow-hidden transition-all duration-300"
						>
							<button 
								onClick={() => toggleFaq(idx)}
								className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.01] transition-colors focus:outline-none"
							>
								<div className="flex gap-3 items-center">
									<HelpCircle className={`w-5 h-5 ${iconColorClass}`} />
									<span className="font-bold text-base md:text-lg text-foreground">{faq.q}</span>
								</div>
								<ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? `rotate-180 ${activeChevronColorClass}` : ""}`} />
							</button>
							
							<AnimatePresence initial={false}>
								{isOpen && (
									<motion.div 
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className="overflow-hidden border-t border-white/5"
									>
										<div className="p-6 text-muted-foreground text-sm md:text-base leading-relaxed bg-white/[0.005]">
											{faq.a}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					);
				})}
			</div>
		</section>
	);
}
