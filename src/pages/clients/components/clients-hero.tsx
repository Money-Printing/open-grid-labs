import { motion } from "motion/react";
import { brands } from "../../../components/hero";

const FloatingNode = ({ delay, duration, size, x, y, z, color }: any) => (
	<motion.div
		className="absolute rounded-full shadow-[0_0_15px_currentColor]"
		style={{
			width: size,
			height: size,
			left: x,
			top: y,
			color: color,
			backgroundColor: color,
			transform: `translateZ(${z}px)`,
		}}
		animate={{
			y: ["-20%", "20%", "-20%"],
			x: ["-10%", "10%", "-10%"],
			opacity: [0.4, 0.8, 0.4],
			scale: [0.9, 1.1, 0.9],
		}}
		transition={{
			duration: duration,
			repeat: Infinity,
			ease: "easeInOut",
			delay: delay,
		}}
	/>
);

export default function ClientsHero() {
	return (
		<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
			{/* Background ambient light */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[150px] mix-blend-screen" />
				<div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" />
				<div
					className="absolute inset-0 opacity-[0.03]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
						backgroundSize: "60px 60px",
					}}
				/>
			</div>

			<div className="w-[90%] max-w-[1600px] mx-auto relative z-10">
				<div className="flex flex-col items-center text-center mb-20">
					<motion.div
						initial={{ opacity: 0, scale: 0.8, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8 shadow-[0_0_20px_hsla(210,100%,50%,0.15)]"
					>
						<span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsla(210,100%,50%,0.8)]" />
						<span className="text-xs font-semibold uppercase tracking-widest text-primary">Global Network</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
						className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground tracking-tight leading-[1.1] mb-6"
					>
						Trusted by{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent drop-shadow-[0_0_30px_hsla(210,100%,50%,0.3)]">
							Pioneers
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						className="text-lg md:text-xl text-foreground/70 dark:text-foreground/50 max-w-2xl font-light leading-relaxed"
					>
						We proudly collaborate with visionaries and leading enterprises worldwide, delivering tailored digital solutions that foster trust and long-term success.
					</motion.p>
				</div>

				{/* 3D Brands Matrix */}
				<div className="relative w-full aspect-[2/1] md:aspect-[3/1] perspective-[2000px] flex items-center justify-center">
					{/* Central core energy */}
					<motion.div
						className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl"
						animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
						transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
					/>

					{/* 3D Network nodes */}
					<div className="absolute inset-0 pointer-events-none transform-style-3d">
						<FloatingNode delay={0} duration={6} size={8} x="20%" y="30%" z={100} color="hsl(210, 100%, 60%)" />
						<FloatingNode delay={1} duration={7} size={12} x="80%" y="20%" z={-50} color="hsl(280, 100%, 60%)" />
						<FloatingNode delay={2} duration={5} size={6} x="70%" y="70%" z={150} color="hsl(210, 100%, 50%)" />
						<FloatingNode delay={0.5} duration={8} size={10} x="30%" y="80%" z={-100} color="hsl(280, 100%, 50%)" />
					</div>

					{/* Brands floating in 3D Carousel */}
					<div className="absolute inset-0 flex items-center justify-center overflow-hidden w-[100vw] left-1/2 -translate-x-1/2">
						{/* Edge Fade Gradients */}
						<div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
						<div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

						<motion.div
							className="flex items-center gap-6 md:gap-10 w-max"
							animate={{ x: ["0%", "-50%"] }}
							transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
						>
							{[...brands, ...brands, ...brands].map((brand, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, scale: 0.8, y: 50 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.2 + (i % brands.length) * 0.1, ease: "easeOut" }}
									whileHover={{ 
										scale: 1.05, 
										y: -10,
										rotateX: 10,
										rotateY: -10,
										transition: { duration: 0.3 } 
									}}
									className="group relative flex items-center justify-center p-6 md:p-8 rounded-[24px] border border-black/5 dark:border-transparent bg-foreground/[0.02] backdrop-blur-md hover:bg-foreground/[0.05] hover:border-primary/30 transition-all duration-500 overflow-hidden w-[220px] md:w-[280px] h-[90px] md:h-[110px] shrink-0"
									style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
								>
									{/* Hover Glow */}
									<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
									
									<img
										src={brand.href}
										alt={brand.alt}
										className="w-auto h-10 md:h-14 object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
										style={{ transform: "translateZ(30px)" }}
									/>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
