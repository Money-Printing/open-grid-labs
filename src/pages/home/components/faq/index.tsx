import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import Button from "../../../../components/ui/button";
import Logo from "../../../../icons/logo";

type FaqItem = {
	id: number;
	question: string;
	answer: string;
};

type HomeFaqProps = {
	faqs?: FaqItem[];
};

const faqsData: FaqItem[] = [
	{
		id: 1,
		question: "How long does a typical project take to complete?",
		answer:
			"Most projects ship in 4–8 weeks, depending on scope and complexity. After an initial discovery call we give you a precise timeline with clearly defined milestones — so there are no surprises, ever.",
	},
	{
		id: 2,
		question: "Can you work with my existing brand and design system?",
		answer:
			"Absolutely. We integrate seamlessly into your established design language, component libraries, and brand guidelines. If you have something good, we build on it. If you need a refresh, we'll propose options.",
	},
	{
		id: 3,
		question: "What sets your engineering process apart?",
		answer:
			"We treat every product like it's going to scale to millions of users from day one — because it might. Clean architecture, rigorous testing pipelines, code reviews, and performance budgets are non-negotiable on every engagement.",
	},
	{
		id: 4,
		question: "Do you offer support and maintenance after launch?",
		answer:
			"Yes. We offer flexible post-launch retainers covering monitoring, updates, feature iterations, and hotfixes. Most clients stay with us long-term — we're invested in your growth, not just the delivery.",
	},
	{
		id: 5,
		question: "How do you handle communication and project updates?",
		answer:
			"You get a dedicated Slack channel, weekly async updates, and live demos at every major milestone. You're never left wondering — transparency is part of our process by design.",
	},
];

export default function HomeFaq({ faqs = faqsData }: HomeFaqProps) {
	const [openId, setOpenId] = useState<number | null>(1);
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

	const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

	const handleBookCall = () => {
		if ((window as any).Calendly) {
			(window as any).Calendly.initPopupWidget({
				url: "https://calendly.com/opengridlabs/30min?hide_landing_page_details=1&hide_gdpr_banner=1",
			});
		}
	};

	return (
		<section
			id="home-faq"
			ref={sectionRef}
			className="w-full relative py-28 md:py-36 overflow-hidden"
			style={{ perspective: "1400px" }}
		>
			{/* ── Background ────────────────────────────────── */}
			<div className="absolute inset-0 pointer-events-none">
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
					style={{
						background:
							"radial-gradient(circle, hsla(280,100%,60%,0.04) 0%, hsla(210,100%,50%,0.02) 40%, transparent 70%)",
					}}
				/>
				<div className="absolute top-[5%] right-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[200px]" />
				<div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-primary/4 rounded-full blur-[160px]" />
				{/* Subtle dot grid */}
				<div
					className="absolute inset-0 opacity-5 dark:opacity-[0.025] pointer-events-none text-foreground"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
						backgroundSize: "40px 40px",
					}}
				/>
			</div>

			{/* ── Section Header ────────────────────────────── */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
				className="relative z-10 flex flex-col items-center gap-6 px-4 mb-16 md:mb-20"
			>
				<motion.div
					initial={{ scale: 0, rotate: -180 }}
					animate={isInView ? { scale: 1, rotate: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 150 }}
					className="relative"
				>
					<div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150" />
					<div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_30px_hsla(210,100%,50%,0.35)]">
						<HelpCircle size={24} className="text-foreground" />
					</div>
				</motion.div>

				<div className="flex flex-col items-center gap-3">
					<h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-foreground tracking-tight text-center leading-tight">
						Got{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
							Questions?
						</span>
						<br />
						We've Got Answers.
					</h2>
					<p className="text-base md:text-lg text-foreground/60 dark:text-foreground/35 max-w-lg font-light text-center leading-relaxed">
						Everything you need to know before we start building together.
					</p>
				</div>
			</motion.div>

			{/* ── Content: FAQ + CTA ────────────────────────── */}
			<div className="relative z-10 w-[90%] max-w-[1600px]  mx-auto flex flex-col lg:flex-row gap-6 md:gap-8">

				{/* ── FAQ Accordion ─────────────────────────── */}
				<div className="flex-1 flex flex-col gap-3">
					{faqs.map((faq, i) => {
						const isOpen = openId === faq.id;
						return (
							<motion.div
								key={faq.id}
								initial={{ opacity: 0, y: 30, rotateX: 8 }}
								animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
								transition={{
									duration: 0.6,
									delay: 0.3 + i * 0.1,
									ease: [0.22, 1, 0.36, 1],
								}}
								style={{ transformStyle: "preserve-3d" }}
							>
								<motion.div
									animate={{
										y: isOpen ? -2 : 0,
									}}
									transition={{ duration: 0.3, ease: "easeOut" }}
									className={`relative rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-xl border ${
										isOpen
											? "bg-white/90 dark:bg-[#151522e6] border-primary/20 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_0_1px_hsla(210,100%,50%,0.15)]"
											: "bg-white/50 dark:bg-[#14141e99] border-black/5 dark:border-white/5 hover:bg-white/70 dark:hover:bg-[#14141ecc] shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
									}`}
								>
									{/* Top accent line — only visible when open */}
									<AnimatePresence>
										{isOpen && (
											<motion.div
												initial={{ scaleX: 0 }}
												animate={{ scaleX: 1 }}
												exit={{ scaleX: 0 }}
												transition={{ duration: 0.4 }}
												className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-primary via-blue-400 to-accent origin-left"
											/>
										)}
									</AnimatePresence>

									{/* Glow when open */}
									{isOpen && (
										<div
											className="absolute inset-0 pointer-events-none rounded-2xl"
											style={{
												background:
													"radial-gradient(ellipse at 50% 0%, hsla(210,100%,50%,0.05), transparent 70%)",
											}}
										/>
									)}

									{/* Question button */}
									<button
										onClick={() => toggle(faq.id)}
										className="flex justify-between items-center w-full px-6 py-5 text-left cursor-pointer group gap-4"
									>
										<div className="flex items-center gap-4">
											{/* Number */}
											<span
												className={`font-mono text-sm font-semibold transition-colors duration-300 shrink-0 ${
													isOpen ? "text-primary" : "text-foreground/50 dark:text-foreground/20"
												}`}
											>
												{String(i + 1).padStart(2, "0")}
											</span>
											{/* Question text */}
											<span
												className={`text-base md:text-lg font-medium transition-colors duration-300 ${
													isOpen
														? "text-foreground"
														: "text-foreground/65 group-hover:text-foreground/90"
												}`}
											>
												{faq.question}
											</span>
										</div>

										{/* Icon toggle */}
										<motion.div
											animate={{ rotate: isOpen ? 180 : 0 }}
											transition={{ duration: 0.3 }}
											className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center shadow-sm transition-colors duration-300 ${
												isOpen 
													? "bg-primary border-primary shadow-[0_0_16px_hsla(210,100%,50%,0.45)] text-foreground" 
													: "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-foreground/70 dark:text-foreground/50 group-hover:text-primary group-hover:dark:text-primary group-hover:border-primary/50 group-hover:bg-primary/10"
											}`}
										>
											{isOpen ? (
												<Minus size={14} className="text-foreground" />
											) : (
												<Plus size={14} className="currentColor" />
											)}
										</motion.div>
									</button>

									{/* Answer */}
									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div
												key="answer"
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
												className="overflow-hidden"
											>
												<div className="px-6 pb-6 ml-10">
													<div className="h-[1px] bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent mb-5" />
													<p className="text-base text-foreground/70 dark:text-foreground/50 leading-relaxed font-light">
														{faq.answer}
													</p>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							</motion.div>
						);
					})}
				</div>

				{/* ── CTA Card ──────────────────────────────── */}
				<motion.div
					initial={{ opacity: 0, x: 40, rotateY: -8 }}
					animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
					className="lg:w-[360px] shrink-0"
					style={{ transformStyle: "preserve-3d" }}
				>
					<div
						className="relative rounded-[28px] overflow-hidden h-full bg-white/90 dark:bg-[#161624e6] backdrop-blur-xl border border-black/5 dark:border-white/5 shadow-xl dark:shadow-[0_30px_80px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.05)]"
					>
						{/* Top gradient line */}
						<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent opacity-60" />

						{/* Corner glow */}
						<div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
						<div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

						{/* Dot grid overlay */}
						<div
							className="absolute inset-0 opacity-5 dark:opacity-[0.03] text-foreground pointer-events-none"
							style={{
								backgroundImage:
									"radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
								backgroundSize: "24px 24px",
							}}
						/>

						{/* Rotating ring decoration */}
						<motion.div
							className="absolute top-6 right-6 w-24 h-24 rounded-full border border-black/5 dark:border-transparent"
							animate={{ rotate: 360 }}
							transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
						>
							<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_8px_hsla(210,100%,50%,0.6)]" />
						</motion.div>

						<div className="relative z-10 p-8 md:p-10 flex flex-col gap-7 h-full">
							{/* Logo */}
							<div className="w-12 h-12 opacity-70 mix-blend-screen">
								<Logo />
							</div>

							{/* Headline */}
							<div className="flex flex-col gap-3">
								<div className="flex items-center gap-2">
									<Sparkles size={14} className="text-primary/60" />
									<span className="text-xs tracking-[0.2em] uppercase text-primary/60 font-medium">
										Free 30-min session
									</span>
								</div>
								<h3 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
									Still Have{" "}
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
										Doubts?
									</span>
									<br />
									Let's Talk.
								</h3>
								<p className="text-sm md:text-base text-foreground/60 dark:text-foreground/35 font-light leading-relaxed">
									Jump on a no-pressure call and we'll map out exactly how we can move your vision forward — no fluff, no sales pitch.
								</p>
							</div>

							{/* Feature list */}
							<ul className="flex flex-col gap-3">
								{[
									"Custom project scoping",
									"Tech stack recommendations",
									"Transparent pricing breakdown",
								].map((item, i) => (
									<motion.li
										key={i}
										initial={{ opacity: 0, x: -10 }}
										animate={isInView ? { opacity: 1, x: 0 } : {}}
										transition={{ delay: 0.9 + i * 0.1 }}
										className="flex items-center gap-3 text-sm text-foreground/45"
									>
										<div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shrink-0">
											<div className="w-1.5 h-1.5 rounded-full bg-foreground" />
										</div>
										{item}
									</motion.li>
								))}
							</ul>

							{/* CTA Button */}
							<motion.div
								whileHover={{ scale: 1.02, y: -2 }}
								whileTap={{ scale: 0.98 }}
								transition={{ duration: 0.2 }}
								className="mt-auto"
							>
								<Button
									onClick={handleBookCall}
									className="w-full h-14 text-base font-semibold tracking-wide shadow-[0_0_30px_hsla(210,100%,50%,0.3)] hover:shadow-[0_0_45px_hsla(210,100%,50%,0.5)] transition-shadow duration-300 group"
								>
									<span>Schedule a Call</span>
									<motion.div
										className="ml-2"
										animate={{ x: [0, 4, 0] }}
										transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
									>
										<ArrowRight size={18} />
									</motion.div>
								</Button>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>

			{/* ── Floating particles ────────────────────────── */}
			{[...Array(8)].map((_, i) => (
				<motion.div
					key={i}
					className="absolute rounded-full pointer-events-none"
					style={{
						width: 2 + Math.random() * 2,
						height: 2 + Math.random() * 2,
						left: `${10 + Math.random() * 80}%`,
						top: `${10 + Math.random() * 80}%`,
						background:
							i % 2 === 0 ? "hsl(210, 100%, 65%)" : "hsl(280, 100%, 70%)",
						boxShadow: `0 0 5px ${
							i % 2 === 0
								? "hsla(210,100%,60%,0.5)"
								: "hsla(280,100%,65%,0.5)"
						}`,
					}}
					animate={{
						y: [0, -(12 + Math.random() * 25), 0],
						opacity: [0, 0.6, 0],
					}}
					transition={{
						duration: 4 + Math.random() * 4,
						repeat: Infinity,
						delay: Math.random() * 3,
						ease: "easeInOut",
					}}
				/>
			))}
		</section>
	);
}
