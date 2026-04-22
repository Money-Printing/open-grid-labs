import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";

/* ── Review Data ────────────────────────────────────────── */
const reviews = [
	{
		name: "Rohit Hiwale",
		role: "CEO, Morphle Labs",
		image: "founders/rohit-hiwale.jpeg",
		rating: 5,
		comment:
			"The web application for our microscopic scanner is phenomenally intuitive — it completely transformed our workflow and pushed accuracy to levels we didn't think possible.",
		accent: "from-blue-400 to-cyan-400",
		glow: "hsla(200, 100%, 55%, 0.3)",
		tag: "HealthTech",
	},
	{
		name: "Salim Boutaleb",
		role: "Head of Quants, ETG",
		image: "clients/ETG-commodities.png",
		rating: 5,
		comment:
			"AirTrader is everything we needed — a robust, lightning‑fast trading simulator that elevated our strategy testing and gave us an undeniable competitive edge.",
		accent: "from-violet-400 to-fuchsia-400",
		glow: "hsla(280, 100%, 60%, 0.3)",
		tag: "FinTech",
	},
	{
		name: "Benjamin Zeimis",
		role: "Founder, Jlabs Digital",
		image: "clients/jlabs-digital.png",
		rating: 5,
		comment:
			"Their crypto analytics suite delivers institutional‑grade insights in an interface so clean it feels effortless. A game‑changer for our investment decisions.",
		accent: "from-amber-300 to-orange-400",
		glow: "hsla(35, 100%, 55%, 0.3)",
		tag: "Web3",
	},
	{
		name: "Rahul Pandey",
		role: "AVP, SG Analytics",
		image: "founders/rahul-pandey.jpeg",
		rating: 5,
		comment:
			"The tread‑pattern monitoring system and analytical dashboard they built cut our analysis time in half while surfacing insights we used to miss entirely.",
		accent: "from-emerald-400 to-teal-400",
		glow: "hsla(160, 80%, 50%, 0.3)",
		tag: "Analytics",
	},
];

/* ── Main Component ─────────────────────────────────────── */
export default function HomeTestimonials() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
	const [active, setActive] = useState(0);

	const goNext = () => setActive((p) => (p + 1) % reviews.length);
	const goPrev = () => setActive((p) => (p - 1 + reviews.length) % reviews.length);

	return (
		<section
			id="home-testimonials"
			ref={sectionRef}
			className="w-full relative py-28 md:py-36 overflow-hidden"
			style={{ perspective: "1400px" }}
		>
			{/* ── Background Effects ────────────────────────── */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Center radial */}
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
					style={{
						background:
							"radial-gradient(circle, hsla(210,100%,50%,0.04) 0%, hsla(280,100%,60%,0.02) 40%, transparent 70%)",
					}}
				/>
				{/* Accent blobs */}
				<div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[180px]" />
				<div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-accent/4 rounded-full blur-[160px]" />
			</div>

			{/* Subtle grid overlay */}
			<div
				className="absolute inset-0 pointer-events-none opacity-[0.03]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>

			{/* ── Section Header ────────────────────────────── */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
				className="relative z-10 flex flex-col items-center gap-6 px-4 mb-16 md:mb-20"
			>
				{/* Icon badge */}
				<motion.div
					initial={{ scale: 0, rotate: -180 }}
					animate={isInView ? { scale: 1, rotate: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 150 }}
					className="relative"
				>
					<div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full scale-150" />
					<div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_30px_hsla(280,100%,60%,0.3)]">
						<MessageSquareQuote size={24} className="text-white" />
					</div>
				</motion.div>

				<div className="flex flex-col items-center gap-3">
					<h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight text-center leading-tight">
						Voices That{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
							Validate.
						</span>
					</h2>
					<p className="text-base md:text-lg text-white/35 max-w-lg font-light text-center leading-relaxed">
						Real results from real partnerships — hear it straight from the people who trusted us with their vision.
					</p>
				</div>
			</motion.div>

			{/* ── Featured Testimonial (Spotlight) ──────────── */}
			<div className="relative z-10 w-[90%] max-w-[1600px] mx-auto" style={{ perspective: "1200px" }}>
				<AnimatePresence mode="wait">
					<motion.div
						key={active}
						initial={{ opacity: 0, rotateY: 8, x: 60, scale: 0.96 }}
						animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
						exit={{ opacity: 0, rotateY: -8, x: -60, scale: 0.96 }}
						transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
						className="relative"
						style={{ transformStyle: "preserve-3d" }}
					>
						{/* Outer glow */}
						<div
							className="absolute -inset-1 rounded-[32px] blur-xl pointer-events-none opacity-40"
							style={{
								background: `radial-gradient(ellipse at 30% 20%, ${reviews[active].glow}, transparent 70%)`,
							}}
						/>

						{/* Card */}
						<div
							className="relative rounded-[32px] border border-white/[0.06] overflow-hidden"
							style={{
								background: "linear-gradient(165deg, rgba(25,25,35,0.75) 0%, rgba(12,12,18,0.85) 100%)",
								backdropFilter: "blur(24px)",
								boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 30px 80px rgba(0,0,0,0.5)",
							}}
						>
							{/* Shine sweep */}
							<motion.div
								className="absolute inset-0 pointer-events-none"
								style={{
									background:
										"linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.02) 45%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.02) 55%, transparent 60%)",
								}}
								animate={{ x: ["-100%", "200%"] }}
								transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
							/>

							{/* Top accent line */}
							<div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${reviews[active].accent} opacity-40`} />

							<div className="relative z-10 flex flex-col md:flex-row items-stretch">
								{/* Left: Quote content */}
								<div className="flex-1 p-8 md:p-12 lg:p-14 flex flex-col justify-center">
									{/* Quote icon */}
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 }}
									>
										<Quote
											size={40}
											className="text-primary/20 mb-6 -ml-1"
											strokeWidth={1.5}
										/>
									</motion.div>

									{/* Stars */}
									<div className="flex items-center gap-1.5 mb-6">
										{Array.from({ length: reviews[active].rating }).map((_, idx) => (
											<motion.div
												key={idx}
												initial={{ opacity: 0, scale: 0, rotate: -90 }}
												animate={{ opacity: 1, scale: 1, rotate: 0 }}
												transition={{ delay: 0.3 + idx * 0.08, type: "spring", stiffness: 300 }}
											>
												<Star
													size={16}
													className="fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_hsla(40,100%,55%,0.6)]"
												/>
											</motion.div>
										))}
									</div>

									{/* Quote text */}
									<motion.blockquote
										initial={{ opacity: 0, y: 15 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.35, duration: 0.6 }}
										className="text-lg md:text-xl lg:text-2xl text-white/85 font-light leading-relaxed mb-8 italic"
									>
										"{reviews[active].comment}"
									</motion.blockquote>

									{/* Author */}
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.5 }}
										className="flex items-center gap-4"
									>
										<div className="relative">
											<div
												className={`absolute -inset-1 rounded-full bg-gradient-to-r ${reviews[active].accent} opacity-50 blur-sm`}
											/>
											<div className="relative w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center p-2 overflow-hidden">
												<img
													alt={reviews[active].name}
													loading="lazy"
													className="object-contain w-full h-full grayscale opacity-80"
													src={reviews[active].image}
												/>
											</div>
										</div>
										<div>
											<p className={`font-display font-semibold text-base text-transparent bg-clip-text bg-gradient-to-r ${reviews[active].accent}`}>
												{reviews[active].name}
											</p>
											<p className="text-sm text-white/40 font-light">
												{reviews[active].role}
											</p>
										</div>
										{/* Tag */}
										<span
											className={`ml-auto hidden md:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide border border-white/[0.06]`}
											style={{
												background: `linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))`,
											}}
										>
											<span className={`text-transparent bg-clip-text bg-gradient-to-r ${reviews[active].accent}`}>
												{reviews[active].tag}
											</span>
										</span>
									</motion.div>
								</div>

								{/* Right: Giant quote watermark */}
								<div className="hidden md:flex items-center justify-center w-[280px] lg:w-[320px] relative overflow-hidden">
									{/* Background pattern */}
									<div className="absolute inset-0 opacity-[0.03]"
										style={{
											backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
											backgroundSize: "20px 20px",
										}}
									/>
									{/* Large quote mark */}
									<motion.div
										initial={{ opacity: 0, scale: 0.5, rotateY: 30 }}
										animate={{ opacity: 1, scale: 1, rotateY: 0 }}
										transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
										style={{ transformStyle: "preserve-3d" }}
									>
										<Quote
											size={180}
											className={`text-transparent`}
											strokeWidth={0.5}
											style={{
												stroke: "url(#quoteGrad)",
												filter: "drop-shadow(0 0 30px hsla(210,100%,50%,0.15))",
											}}
										/>
										<svg width="0" height="0" className="absolute">
											<defs>
												<linearGradient id="quoteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
													<stop offset="0%" stopColor="hsl(210, 100%, 50%)" stopOpacity="0.2" />
													<stop offset="100%" stopColor="hsl(280, 100%, 60%)" stopOpacity="0.1" />
												</linearGradient>
											</defs>
										</svg>
									</motion.div>

									{/* Decorative ring */}
									<motion.div
										className="absolute w-[220px] h-[220px] rounded-full border border-white/[0.03]"
										animate={{ rotate: 360 }}
										transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
									>
										<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/30 shadow-[0_0_8px_hsla(210,100%,50%,0.5)]" />
									</motion.div>
								</div>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>

				{/* ── Navigation ──────────────────────────────── */}
				<div className="flex items-center justify-between mt-8 px-2">
					{/* Dots */}
					<div className="flex items-center gap-2">
						{reviews.map((_, i) => (
							<button
								key={i}
								onClick={() => setActive(i)}
								className="relative p-1 group/dot"
								aria-label={`Go to testimonial ${i + 1}`}
							>
								<motion.div
									className="w-2 h-2 rounded-full transition-colors duration-300"
									animate={{
										scale: i === active ? 1 : 0.75,
										backgroundColor: i === active ? "hsl(210, 100%, 50%)" : "rgba(255,255,255,0.15)",
									}}
								/>
								{i === active && (
									<motion.div
										layoutId="activeDot"
										className="absolute inset-0 m-auto w-5 h-5 rounded-full border border-primary/30"
										transition={{ type: "spring", stiffness: 300, damping: 25 }}
									/>
								)}
							</button>
						))}
					</div>

					{/* Arrow buttons */}
					<div className="flex items-center gap-3">
						<button
							onClick={goPrev}
							className="w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_0_20px_hsla(210,100%,50%,0.15)] transition-all duration-300"
							aria-label="Previous testimonial"
						>
							<ChevronLeft size={18} />
						</button>
						<button
							onClick={goNext}
							className="w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_0_20px_hsla(210,100%,50%,0.15)] transition-all duration-300"
							aria-label="Next testimonial"
						>
							<ChevronRight size={18} />
						</button>
					</div>
				</div>
			</div>

			{/* ── Mini Cards Row ────────────────────────────── */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
				className="relative z-10 w-[90%] max-w-[1600px] mx-auto mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
				style={{ perspective: "1000px" }}
			>
				{reviews.map((review, i) => (
					<motion.button
						key={i}
						onClick={() => setActive(i)}
						initial={{ opacity: 0, y: 30, rotateX: 10 }}
						animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
						transition={{ delay: 0.8 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						whileHover={{ y: -5, rotateX: -2, transition: { duration: 0.3 } }}
						className={`group/card relative text-left rounded-[18px] border overflow-hidden transition-all duration-500 cursor-pointer ${
							i === active
								? "border-primary/20 shadow-[0_0_30px_hsla(210,100%,50%,0.1)]"
								: "border-white/[0.04] hover:border-white/[0.08]"
						}`}
						style={{
							transformStyle: "preserve-3d",
							background:
								i === active
									? "linear-gradient(165deg, rgba(30,30,45,0.8) 0%, rgba(15,15,22,0.9) 100%)"
									: "linear-gradient(165deg, rgba(20,20,28,0.5) 0%, rgba(12,12,18,0.6) 100%)",
							backdropFilter: "blur(16px)",
						}}
					>
						{/* Active indicator line */}
						{i === active && (
							<motion.div
								layoutId="activeCard"
								className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${review.accent}`}
								transition={{ type: "spring", stiffness: 300, damping: 30 }}
							/>
						)}

						<div className="relative z-10 p-5 flex flex-col gap-3">
							<div className="flex items-center gap-3">
								<div
									className={`w-9 h-9 rounded-lg flex items-center justify-center p-1.5 border border-white/[0.06] overflow-hidden ${
										i === active ? "bg-white/10" : "bg-white/[0.03]"
									}`}
								>
									<img
										alt={review.name}
										loading="lazy"
										className={`object-contain w-full h-full ${i === active ? "grayscale-0 opacity-100" : "grayscale opacity-50"} transition-all duration-500`}
										src={review.image}
									/>
								</div>
								<div className="min-w-0">
									<p
										className={`font-display font-semibold text-sm truncate transition-colors duration-300 ${
											i === active ? "text-white" : "text-white/50"
										}`}
									>
										{review.name}
									</p>
									<p className="text-xs text-white/25 truncate">{review.role}</p>
								</div>
							</div>

							{/* Mini stars */}
							<div className="flex items-center gap-1">
								{Array.from({ length: review.rating }).map((_, idx) => (
									<Star
										key={idx}
										size={10}
										className={`transition-colors duration-300 ${
											i === active
												? "fill-amber-400 text-amber-400"
												: "fill-white/15 text-white/15"
										}`}
									/>
								))}
							</div>

							<p
								className={`text-xs leading-relaxed line-clamp-2 transition-colors duration-300 ${
									i === active ? "text-white/50" : "text-white/25"
								}`}
							>
								{review.comment}
							</p>
						</div>

						{/* Hover glow */}
						<div
							className="absolute inset-0 rounded-[18px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"
							style={{
								background: `radial-gradient(ellipse at 50% 0%, ${review.glow.replace("0.3", "0.08")}, transparent 70%)`,
							}}
						/>
					</motion.button>
				))}
			</motion.div>

			{/* ── Bottom accent ─────────────────────────────── */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={isInView ? { scaleX: 1 } : {}}
				transition={{ delay: 1.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
				className="mx-auto mt-16 h-[1px] w-48 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
			/>

			{/* ── Floating Particles ────────────────────────── */}
			{[...Array(10)].map((_, i) => (
				<motion.div
					key={i}
					className="absolute rounded-full pointer-events-none"
					style={{
						width: 2 + Math.random() * 2,
						height: 2 + Math.random() * 2,
						left: `${10 + Math.random() * 80}%`,
						top: `${10 + Math.random() * 80}%`,
						background: i % 2 === 0 ? "hsl(210, 100%, 65%)" : "hsl(280, 100%, 70%)",
						boxShadow: `0 0 5px ${i % 2 === 0 ? "hsla(210,100%,60%,0.5)" : "hsla(280,100%,65%,0.5)"}`,
					}}
					animate={{
						y: [0, -(10 + Math.random() * 25), 0],
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
