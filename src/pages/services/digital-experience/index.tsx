import React, { useRef } from "react";
import SEO from "../../../components/seo";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight, Palette, Shapes } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { Blender, Canva, Framer, FreePik, Sketch } from "../../../icons/tools";

const uiuxServices = [
  "User Research", "Wireframing", "Prototyping", "User Interface Design",
  "User Experience Design", "Design Systems", "Interaction Design", "Usability Testing",
  "Information Architecture", "Mobile App Design", "Web App Design", "Dashboard Design"
];

const brandServices = [
  "Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines",
  "Color Palette", "Typography", "Business Cards", "Letterhead Design",
  "Brand Collateral", "Package Design", "Signage Design", "Brand Refresh"
];

const graphicServices = [
  "Print Design", "Digital Graphics", "Marketing Materials", "Social Media Graphics",
  "Infographics", "Poster Design", "Brochure Design", "Flyer Design",
  "Banner Design", "Icon Design", "Illustration", "Motion Graphics"
];

const servicesData = [
  { title: 'UI/UX Design', items: uiuxServices, highlight: 'hsl(330,100%,60%)' }, // Pink
  { title: 'Brand Identity', items: brandServices, highlight: 'hsl(40,100%,60%)' }, // Amber
  { title: 'Graphic Design', items: graphicServices, highlight: 'hsl(180,100%,50%)' }, // Cyan
];

const steps = [
  { number: "01", title: "Discovery & Research", desc: "We explore your brand, target audience, competitors, and design goals to create a solid foundation for impactful visual solutions.", accent: "from-pink-500 to-rose-400" },
  { number: "02", title: "Concept Development", desc: "Our creative team brainstorms and develops multiple design concepts, exploring various visual directions that align with your objectives.", accent: "from-amber-400 to-orange-500" },
  { number: "03", title: "Design Creation", desc: "We craft detailed designs using industry-leading tools, focusing on aesthetics, usability, and brand consistency across all touchpoints.", accent: "from-cyan-400 to-blue-500" },
  { number: "04", title: "Feedback & Iteration", desc: "We present designs for your review, gather feedback, and refine the concepts through collaborative iterations until perfection is achieved.", accent: "from-purple-500 to-fuchsia-400" },
  { number: "05", title: "Finalization & Assets", desc: "We finalize all design elements, prepare various file formats, and deliver comprehensive design assets ready for implementation.", accent: "from-emerald-400 to-teal-500" },
  { number: "06", title: "Support & Maintenance", desc: "We provide ongoing design support, brand guideline assistance, and future design updates to maintain consistency and freshness.", accent: "from-pink-500 to-indigo-500" },
];

const tools = [
  { icon: faFigma, name: "Figma", isFa: true },
  { icon: <Sketch className="w-10 h-10" />, name: "Sketch", isFa: false },
  { icon: <Framer className="w-10 h-10" />, name: "Framer", isFa: false },
  { icon: <Blender className="w-10 h-10" />, name: "Blender", isFa: false },
  { icon: <Canva className="w-10 h-10" />, name: "Canva", isFa: false },
  { icon: <FreePik className="w-10 h-10" />, name: "FreePik", isFa: false },
  { icon: <Palette className="w-10 h-10" />, name: "Adobe CC", isFa: false },
  { icon: <Shapes className="w-10 h-10" />, name: "Spline", isFa: false },
];

// --- 3D Geometry Hero ---
function DesignHero() {
	const containerRef = useRef<HTMLDivElement>(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const springConfig = { damping: 30, stiffness: 100, mass: 1 };
	const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
	const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
		mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
	};

	return (
		<section
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
			className="relative w-full h-[100vh] min-h-[800px] overflow-hidden flex flex-col items-center justify-center bg-[#030303] perspective-[1500px]"
		>
			<div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_50%_50%,_rgba(236,72,153,0.1)_0%,_transparent_60%)]" />

			{/* Floating 3D Geometric Shapes */}
			<motion.div 
				className="absolute inset-0 pointer-events-none"
				style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
			>
				{/* Pink Sphere */}
				<motion.div
					className="absolute top-[20%] left-[20%] w-64 h-64 rounded-full bg-pink-500/10 backdrop-blur-3xl border border-pink-500/20 shadow-lg dark:shadow-[0_0_100px_rgba(236,72,153,0.3)_inset]"
					style={{ transform: "translateZ(-150px)" }}
					animate={{ y: [0, -50, 0], rotateX: [0, 180, 360], rotateY: [0, 180, 360] }}
					transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
				/>
				{/* Cyan Cube (Simulated) */}
				<motion.div
					className="absolute top-[60%] right-[15%] w-48 h-48 bg-cyan-500/10 backdrop-blur-2xl border border-cyan-500/30 shadow-lg dark:shadow-[0_0_50px_rgba(34,211,238,0.2)] rounded-3xl"
					style={{ transform: "translateZ(100px)" }}
					animate={{ y: [0, 60, 0], rotateX: [45, 225, 405], rotateY: [45, 225, 405] }}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
				/>
				{/* Amber Donut (Simulated) */}
				<motion.div
					className="absolute top-[30%] right-[35%] w-40 h-40 rounded-full bg-transparent border-[30px] border-amber-500/10 backdrop-blur-xl shadow-lg dark:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
					style={{ transform: "translateZ(50px)" }}
					animate={{ y: [0, -30, 0], rotateX: [0, -180, -360], rotateY: [0, -180, -360] }}
					transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
				/>
			</motion.div>

			{/* Floating Glassmorphic Content Card */}
			<motion.div
				className="relative z-10 flex flex-col items-center text-center p-8 md:p-16 rounded-[40px] border border-black/10 dark:border-transparent bg-foreground/[0.02] backdrop-blur-2xl shadow-lg dark:shadow-[0_0_120px_rgba(0,0,0,0.8)] max-w-[90%]"
				style={{ 
					rotateX: useTransform(tiltX, (v) => v * 0.4), 
					rotateY: useTransform(tiltY, (v) => v * 0.4),
					transformStyle: "preserve-3d" 
				}}
			>
				<div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />
				<div className="absolute bottom-0 left-[30%] right-[30%] h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

				<motion.div
					initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
					className="flex items-center gap-4 mb-8" style={{ transform: "translateZ(40px)" }}
				>
					<div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-pink-500" />
					<span className="text-xs md:text-sm font-bold tracking-[0.5em] uppercase px-4 md:px-6 py-2 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-300 backdrop-blur-xl shadow-lg dark:shadow-[0_0_30px_rgba(236,72,153,0.2)]">
						Digital Experience
					</span>
					<div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-cyan-500" />
				</motion.div>

				<motion.div 
					initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
					style={{ transformStyle: "preserve-3d" }}
				>
					<h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white to-black/60 dark:to-white/60 font-black uppercase tracking-tighter leading-none drop-shadow-lg dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)]" style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", transform: "translateZ(80px)" }}>
						Creative
					</h1>
					<h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-amber-400 to-cyan-400 font-black uppercase tracking-tighter leading-none drop-shadow-lg dark:shadow-[0_0_60px_rgba(236,72,153,0.4)] mt-2" style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", transform: "translateZ(100px)" }}>
						Visions.
					</h2>
				</motion.div>

				<motion.p 
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
					className="mt-10 text-lg md:text-2xl font-light leading-relaxed max-w-2xl text-foreground/80 dark:text-foreground/60" style={{ transform: "translateZ(60px)" }}
				>
					Crafting beautiful, functional, and impactful <strong className="text-foreground font-medium">Design Solutions</strong> that elevate brands and engage users through stunning visual experiences.
				</motion.p>
			</motion.div>
			
			<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
		</section>
	);
}

// --- Framer 3D Parallax Card ---
function FramerParallaxCard({ children, highlight, index }: { children: React.ReactNode, highlight: string, index: number }) {
	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);
	const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
	const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), springConfig);
	const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), springConfig);

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		const rect = e.currentTarget.getBoundingClientRect();
		x.set((e.clientX - rect.left) / rect.width);
		y.set((e.clientY - rect.top) / rect.height);
	}

	return (
		<motion.div
			initial={{ opacity: 0, rotateX: 45, y: 50 }}
			whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
			onMouseMove={handleMouseMove}
			onMouseLeave={() => { x.set(0.5); y.set(0.5); }}
			style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
			className="relative group p-6 rounded-3xl border border-black/5 dark:border-transparent bg-foreground/[0.01] backdrop-blur-xl overflow-hidden hover:border-black/20 dark:border-transparent transition-colors shadow-lg"
		>
			<motion.div 
				className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
				style={{ 
					background: useTransform(
						[x, y], 
						([latestX, latestY]: any) => `radial-gradient(circle at ${latestX * 100}% ${latestY * 100}%, ${highlight}30, transparent 70%)`
					)
				}} 
			/>
			<div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-black/50 dark:via-white/50 to-transparent" />
			<div style={{ transform: "translateZ(30px)" }}>{children}</div>
		</motion.div>
	);
}

function DesignServicesGrid() {
	return (
		<section className="w-full flex flex-col items-center py-32 relative z-10 bg-background overflow-hidden">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-pink-900/5 blur-[150px] pointer-events-none" />
			
			<div className="w-[90%] max-w-[1600px] flex flex-col gap-32 relative z-10 perspective-[2000px]">
				{servicesData.map((category, idx) => (
					<motion.div 
						key={idx} 
						className="w-full flex flex-col gap-12"
						initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
					>
						<div className="flex items-center gap-8">
							<div className="h-[2px] flex-1 bg-gradient-to-r from-transparent" style={{ backgroundImage: `linear-gradient(to right, transparent, ${category.highlight}60)` }} />
							<h3 className="text-4xl md:text-6xl font-display font-bold tracking-wide text-transparent bg-clip-text drop-shadow-2xl" style={{ backgroundImage: `linear-gradient(to right, #fff, ${category.highlight})` }}>
								{category.title}
							</h3>
							<div className="h-[2px] flex-1 bg-gradient-to-l from-transparent" style={{ backgroundImage: `linear-gradient(to left, transparent, ${category.highlight}60)` }} />
						</div>

						<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
							{category.items.map((item, index) => (
								<FramerParallaxCard key={index} index={index} highlight={category.highlight}>
									<div className="flex items-center gap-3">
										<div className="w-2 h-2 rounded-full" style={{ backgroundColor: category.highlight, boxShadow: `0 0 10px ${category.highlight}` }} />
										<h4 className="text-lg font-medium text-foreground/70 group-hover:text-foreground transition-colors">
											{item}
										</h4>
									</div>
								</FramerParallaxCard>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}

// --- Cinematic Timeline with Vertical Spine ---
function DesignProcess() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
	const spineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

	return (
		<section ref={containerRef} className="w-full flex flex-col items-center py-40 relative bg-background overflow-hidden">
			<div className="text-center mb-32 relative z-10">
				<motion.h2 
					initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
					className="text-5xl md:text-8xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-black/30 dark:to-white/30 drop-shadow-2xl"
				>
					Creative Pipeline
				</motion.h2>
				<motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-pink-300/50 mt-6 text-xl tracking-[0.3em] uppercase font-bold">
					From Concept to Masterpiece
				</motion.p>
			</div>

			<div className="relative w-[90%] max-w-[1600px] mx-auto perspective-[1500px]">
				<div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/50 dark:bg-foreground/5" style={{ transform: "translateZ(-50px)" }}>
					<motion.div className="absolute top-0 w-full bg-gradient-to-b from-cyan-400 via-pink-500 to-transparent" style={{ height: spineHeight, boxShadow: "0 0 20px 2px rgba(236,72,153,0.5)" }} />
				</div>

				<div className="flex flex-col gap-24 relative">
					{steps.map((step, i) => {
						const isLeft = i % 2 === 0;
						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: isLeft ? -100 : 100, rotateY: isLeft ? 15 : -15 }}
								whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
								className={`flex items-center w-full ${isLeft ? "flex-row" : "flex-row-reverse"}`}
								style={{ transformStyle: "preserve-3d" }}
							>
								<div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
									<motion.div 
										className={`w-16 h-16 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-lg dark:shadow-[0_0_30px_rgba(255,255,255,0.1)] bg-gradient-to-br ${step.accent}`}
										whileInView={{ scale: [0.8, 1.2, 1] }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-100px" }}
									>
										<span className="text-foreground font-bold text-xl drop-shadow-md">{step.number}</span>
									</motion.div>
								</div>

								<div className={`w-[calc(50%-60px)] ${isLeft ? "pr-10" : "pl-10 text-right"}`}>
									<div className="group relative p-10 glass-panel rounded-[32px] border border-black/10 dark:border-transparent hover:border-black/30 dark:border-transparent transition-all duration-500 hover:shadow-lg dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
										<div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 rounded-[32px] pointer-events-none`} />
										<h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-black/50 dark:to-white/50 transition-all">
											{step.title}
										</h3>
										<p className="text-lg text-foreground/80 dark:text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors">
											{step.desc}
										</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

// --- Floating Tech Matrix ---
function DesignTechStack() {
	return (
		<section className="w-full flex flex-col items-center py-40 relative bg-background overflow-hidden">
			<div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent dark:from-pink-900/20 via-background to-background pointer-events-none" />
			
			<div className="text-center mb-32 relative z-10">
				<motion.h2 
					initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
					className="text-5xl md:text-8xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-black/30 dark:to-white/30 drop-shadow-2xl"
				>
					Design Arsenal
				</motion.h2>
			</div>

			<div className="w-[90%] max-w-[1600px] flex flex-wrap justify-center gap-10 relative z-10 perspective-[1000px]">
				{tools.map((tool, i) => {
					const yOffset = i % 2 === 0 ? [0, -25, 0] : [0, 25, 0];

					return (
						<motion.div
							key={i}
							initial={{ opacity: 0, scale: 0 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
							whileHover={{ scale: 1.15, z: 60 }}
							className="group relative flex flex-col items-center justify-center w-40 h-40 rounded-full border border-black/10 dark:border-transparent bg-foreground/[0.01] backdrop-blur-xl hover:border-pink-500/50 hover:shadow-lg dark:shadow-[0_0_50px_rgba(236,72,153,0.4)] transition-colors cursor-pointer"
						>
							<motion.div 
								animate={{ y: yOffset }} 
								transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
								className="flex flex-col items-center justify-center w-full h-full"
							>
								<div className="text-foreground/80 dark:text-foreground/60 group-hover:text-pink-400 transition-colors duration-300 mb-3 drop-shadow-lg flex items-center justify-center">
									{tool.isFa ? <FontAwesomeIcon icon={tool.icon as any} className="w-12 h-12" /> : (tool.icon as React.ReactNode)}
								</div>
								<span className="text-sm font-semibold text-foreground/80 dark:text-foreground/60 dark:text-foreground/40 group-hover:text-foreground transition-colors text-center px-2">
									{tool.name}
								</span>
							</motion.div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}

// --- 3D Portal Cards (Next Steps) ---
function PortalCard({ title, desc, link, bgImage, color }: { title: string, desc: string, link: string, bgImage: string, color: string }) {
	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);
	const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
	const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);
	const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), springConfig);

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			onMouseMove={(e) => {
				const rect = e.currentTarget.getBoundingClientRect();
				x.set((e.clientX - rect.left) / rect.width);
				y.set((e.clientY - rect.top) / rect.height);
			}}
			onMouseLeave={() => { x.set(0.5); y.set(0.5); }}
			style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
			className="group relative h-[400px] rounded-[40px] overflow-hidden border border-black/10 dark:border-transparent flex flex-col justify-end p-12 cursor-pointer shadow-2xl"
		>
			<motion.div 
				className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 mix-blend-overlay"
				style={{ backgroundImage: `url(${bgImage})`, transform: "translateZ(-50px)" }}
				whileHover={{ scale: 1.1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			/>
			<div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent`} />
			<div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${color} mix-blend-color`} />
			
			<div className="relative z-10" style={{ transform: "translateZ(60px)" }}>
				<h3 className="text-5xl font-bold text-foreground mb-4 drop-shadow-xl">{title}</h3>
				<p className="text-foreground/80 text-xl mb-8">{desc}</p>
				<a href={link} className="inline-flex items-center gap-3 text-foreground font-semibold uppercase tracking-widest text-sm hover:text-foreground/70 transition-colors">
					Explore <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
				</a>
			</div>
		</motion.div>
	);
}

function ExperienceNextSteps() {
	return (
		<section className="w-full flex flex-col items-center py-40 relative bg-background overflow-hidden">
			<div className="w-[90%] max-w-[1600px] grid md:grid-cols-2 gap-16 relative z-10 perspective-[2000px]">
				<PortalCard 
					title="Software Engineering" 
					desc="Leverage the power of code." 
					link="/services/product-engineering" 
					bgImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
					color="from-blue-600 to-indigo-600"
				/>
				<PortalCard 
					title="Intelligent Systems" 
					desc="Connect the world with AI." 
					link="/services/ai-data" 
					bgImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
					color="from-purple-600 to-cyan-600"
				/>
			</div>
		</section>
	);
}

export default function ServicesDigitalExperience() {
	return (
		<div className="bg-background min-h-screen font-sans overflow-x-hidden">
			<SEO
				title="Design Services - UI/UX, Brand Identity & Graphic Design | OpenGridLabs"
				description="Professional design services including UI/UX design, brand identity, logo design, graphic design, and motion graphics. We create stunning visual experiences using Figma, Sketch, and more."
				canonical="/services/digital-experience"
				keywords="UI/UX design services, brand identity, logo design, graphic design, web design, mobile app design, Figma, visual identity, motion graphics"
			/>
			
			<DesignHero />
			<DesignServicesGrid />
			<DesignProcess />
			<DesignTechStack />
			<ExperienceNextSteps />
		</div>
	);
}
