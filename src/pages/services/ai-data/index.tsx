import React, { useRef } from "react";
import SEO from "../../../components/seo";
import { faOpenai, faPython } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight, BrainCircuit, Database, Cpu } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { Anaconda, Jupyter, PyTorch, Tensorflow } from "../../../icons/tools";
import { Link } from "react-router";
import { slugify } from "../../../utils/slugify";

const aiServices = [
	"Agentic AI", "Large Language Models", "Voice to Text Converter", "AI Strategy Consulting",
	"Explainable AI", "AI Ethics & Governance", "Prompt Engineering", "AI Model Fine-tuning",
	"RAG Implementation", "AI Integration Services", "Custom AI Solutions", "AI Performance Monitoring"
];

const mlServices = [
	"Predictive Modeling", "Classification Systems", "Regression Analysis", "Clustering Algorithms",
	"Recommendation Engines", "Anomaly Detection", "Time Series Forecasting", "Feature Engineering",
	"Model Optimization", "A/B Testing ML", "AutoML Solutions", "MLOps Pipeline"
];

const dlServices = [
	"Neural Networks", "Computer Vision", "Image Recognition", "Object Detection",
	"Face Recognition", "OCR Solutions", "Video Analytics", "Generative AI",
	"Style Transfer", "CNN Models", "RNN/LSTM", "Transfer Learning"
];

const nlpServices = [
	"Text Analytics", "Sentiment Analysis", "Chatbots & Virtual Assistants", "Language Translation",
	"Named Entity Recognition", "Topic Modeling", "Text Summarization", "Question Answering",
	"Intent Recognition", "Content Generation", "Speech Recognition", "Voice Synthesis"
];

const servicesData = [
	{ title: 'Artificial Intelligence', items: aiServices, highlight: 'hsl(180,100%,50%)' }, // Cyan
	{ title: 'Machine Learning', items: mlServices, highlight: 'hsl(280,100%,65%)' }, // Purple
	{ title: 'Deep Learning', items: dlServices, highlight: 'hsl(330,100%,60%)' }, // Pink
	{ title: 'Natural Language', items: nlpServices, highlight: 'hsl(150,100%,45%)' } // Emerald
];

const steps = [
	{ number: "01", title: "Data Discovery", desc: "We analyze your existing data sources, quality, and structure to identify opportunities for AI-driven automation.", accent: "from-cyan-400 to-blue-500" },
	{ number: "02", title: "AI Strategy", desc: "We create a complete AI roadmap, define metrics, choose algorithms, and build a scalable architecture aligned with your goals.", accent: "from-purple-500 to-fuchsia-400" },
	{ number: "03", title: "Data Engineering", desc: "We clean, transform, and engineer features from your data to build strong, dependable datasets.", accent: "from-pink-500 to-rose-400" },
	{ number: "04", title: "Model Training", desc: "We design, train, and refine AI models using advanced techniques to achieve high accuracy and performance.", accent: "from-emerald-400 to-teal-500" },
	{ number: "05", title: "Testing & Validation", desc: "We perform extensive testing with real-world scenarios to ensure reliability, stability, and robustness.", accent: "from-amber-400 to-orange-500" },
	{ number: "06", title: "MLOps Deployment", desc: "We deploy models with robust monitoring systems, enabling continuous tracking, retraining, and improvement.", accent: "from-cyan-400 to-indigo-500" },
];

const tools = [
	{ icon: faPython, name: "Python", isFa: true },
	{ icon: <Tensorflow className="w-10 h-10" />, name: "Tensorflow", isFa: false },
	{ icon: <PyTorch className="w-10 h-10" />, name: "PyTorch", isFa: false },
	{ icon: <Jupyter className="w-10 h-10" />, name: "Jupyter", isFa: false },
	{ icon: faOpenai, name: "OpenAI", isFa: true },
	{ icon: <Anaconda className="w-10 h-10" />, name: "Anaconda", isFa: false },
	{ icon: <BrainCircuit className="w-10 h-10" />, name: "Hugging Face", isFa: false },
	{ icon: <Database className="w-10 h-10" />, name: "Pinecone", isFa: false },
	{ icon: <Cpu className="w-10 h-10" />, name: "CUDA", isFa: false },
];

// --- Neural Network 3D Hero ---
function IntelligentHero() {
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

	// Generate nodes for the neural network background
	const nodes = Array.from({ length: 40 }).map((_, i) => ({
		x: Math.random() * 100,
		y: Math.random() * 100,
		z: Math.random() * 400 - 200,
		size: Math.random() * 6 + 2,
		delay: Math.random() * 5,
		duration: Math.random() * 4 + 3,
		color: i % 3 === 0 ? "rgba(34,211,238,0.6)" : i % 3 === 1 ? "rgba(168,85,247,0.6)" : "rgba(255,255,255,0.3)"
	}));

	return (
		<section
			ref={containerRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
			className="relative w-full h-[100vh] min-h-[800px] overflow-hidden flex flex-col items-center justify-center bg-background perspective-[1500px]"
		>
			<div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.1)_0%,_transparent_60%)]" />

			{/* 3D Neural Network Background */}
			<motion.div 
				className="absolute inset-0 pointer-events-none"
				style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
			>
				{nodes.map((node, i) => (
					<motion.div
						key={i}
						className="absolute rounded-full"
						style={{
							left: `${node.x}%`,
							top: `${node.y}%`,
							width: node.size,
							height: node.size,
							backgroundColor: node.color,
							boxShadow: `0 0 ${node.size * 3}px ${node.color}`,
							transform: `translateZ(${node.z}px)`
						}}
						animate={{
							y: [0, -30, 0],
							opacity: [0.3, 1, 0.3]
						}}
						transition={{
							duration: node.duration,
							repeat: Infinity,
							delay: node.delay,
							ease: "easeInOut"
						}}
					/>
				))}
				
				{/* Simulated Connections */}
				<svg className="absolute inset-0 w-full h-full opacity-20" style={{ transform: "translateZ(-100px)" }}>
					{nodes.slice(0, 15).map((n1, i) => 
						nodes.slice(i + 1, i + 3).map((n2, j) => (
							<motion.line
								key={`${i}-${j}`}
								x1={`${n1.x}%`} y1={`${n1.y}%`}
								x2={`${n2.x}%`} y2={`${n2.y}%`}
								stroke={n1.color}
								strokeWidth="1"
								animate={{ opacity: [0, 0.5, 0] }}
								transition={{ duration: 4, repeat: Infinity, delay: n1.delay, ease: "easeInOut" }}
							/>
						))
					)}
				</svg>
			</motion.div>

			{/* Floating Glassmorphic Content Card */}
			<motion.div
				className="relative z-10 flex flex-col items-center text-center p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-transparent bg-foreground/[0.01] backdrop-blur-xl shadow-lg dark:shadow-[0_0_120px_rgba(0,0,0,0.6)] max-w-[90%]"
				style={{ 
					rotateX: useTransform(tiltX, (v) => v * 0.4), 
					rotateY: useTransform(tiltY, (v) => v * 0.4),
					transformStyle: "preserve-3d" 
				}}
			>
				<div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
				<div className="absolute bottom-0 left-[30%] right-[30%] h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />

				<motion.div
					initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
					className="flex items-center gap-4 mb-8" style={{ transform: "translateZ(40px)" }}
				>
					<div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-cyan-400" />
					<span className="text-xs md:text-sm font-bold tracking-[0.5em] uppercase px-4 md:px-6 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 backdrop-blur-xl shadow-lg dark:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
						Artificial Intelligence
					</span>
					<div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-purple-500" />
				</motion.div>

				<motion.div 
					initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
					style={{ transformStyle: "preserve-3d" }}
				>
					<h1 className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 font-black uppercase tracking-tighter leading-none" style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", transform: "translateZ(80px)" }}>
						Intelligent
					</h1>
					<h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 font-black uppercase tracking-tighter leading-none drop-shadow-lg dark:shadow-[0_0_60px_rgba(168,85,247,0.4)] mt-2" style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)", transform: "translateZ(100px)" }}>
						Systems.
					</h2>
				</motion.div>

				<motion.p 
					initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
					className="mt-10 text-lg md:text-2xl font-light leading-relaxed max-w-2xl text-foreground/80 dark:text-foreground/60" style={{ transform: "translateZ(60px)" }}
				>
					Harnessing the power of <strong className="text-foreground font-medium">Machine Learning</strong> and <strong className="text-cyan-300 font-medium">Agentic AI</strong> to build automated, data-driven solutions that transform raw data into unprecedented intelligence.
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

function IntelligentServicesGrid() {
	return (
		<section className="w-full flex flex-col items-center py-32 relative z-10 bg-background overflow-hidden">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-purple-900/5 blur-[150px] pointer-events-none" />
			
			<div className="w-[90%] max-w-[1600px] flex flex-col gap-32 relative z-10 perspective-[2000px]">
				{servicesData.map((category, idx) => (
					<motion.div 
						key={idx} 
						className="w-full flex flex-col gap-12"
						initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
					>
						<div className="flex items-center gap-8">
							<div className="h-[2px] flex-1 bg-gradient-to-r from-transparent" style={{ backgroundImage: `linear-gradient(to right, transparent, ${category.highlight}60)` }} />
						<h3 className="text-4xl md:text-6xl font-display font-bold tracking-wide text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, var(--color-foreground), ${category.highlight})` }}>
								{category.title}
							</h3>
							<div className="h-[2px] flex-1 bg-gradient-to-l from-transparent" style={{ backgroundImage: `linear-gradient(to left, transparent, ${category.highlight}60)` }} />
						</div>

						<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
							{category.items.map((item, index) => (
								<Link key={index} to={`/services/ai-data/${slugify(item)}`} className="block cursor-pointer">
									<FramerParallaxCard index={index} highlight={category.highlight}>
										<div className="flex items-center gap-3">
											<div className="w-2 h-2 rounded-full" style={{ backgroundColor: category.highlight, boxShadow: `0 0 10px ${category.highlight}` }} />
											<h4 className="text-lg font-medium text-foreground/70 group-hover:text-foreground transition-colors">
												{item}
											</h4>
										</div>
									</FramerParallaxCard>
								</Link>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}

// --- Cinematic Timeline with Vertical Spine ---
function IntelligentProcess() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
	const spineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

	return (
		<section ref={containerRef} className="w-full flex flex-col items-center py-40 relative bg-background overflow-hidden">
			<div className="text-center mb-32 relative z-10">
				<motion.h2 
					initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
					className="text-5xl md:text-8xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/40"
				>
					Machine Learning Pipeline
				</motion.h2>
				<motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-foreground/50 mt-6 text-xl tracking-[0.3em] uppercase font-bold">
					From Raw Data to Autonomous Action
				</motion.p>
			</div>

			<div className="relative w-[90%] max-w-[1600px] mx-auto perspective-[1500px]">
				<div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-black/10 dark:bg-foreground/5" style={{ transform: "translateZ(-50px)" }}>
					<motion.div className="absolute top-0 w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent" style={{ height: spineHeight, boxShadow: "0 0 20px 2px rgba(168,85,247,0.5)" }} />
				</div>

				<div className="flex flex-col gap-12 md:gap-24 relative">
					{steps.map((step, i) => {
						const isLeft = i % 2 === 0;
						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: isLeft ? -50 : 50, rotateY: isLeft ? 15 : -15 }}
								whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
								className={`flex items-center w-full justify-end ${isLeft ? "md:justify-start" : "md:justify-end"}`}
								style={{ transformStyle: "preserve-3d" }}
							>
								<div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
									<motion.div 
										className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-lg dark:shadow-[0_0_30px_rgba(255,255,255,0.1)] bg-gradient-to-br ${step.accent}`}
										whileInView={{ scale: [0.8, 1.2, 1] }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: "-100px" }}
									>
										<span className="text-foreground font-bold text-base md:text-xl drop-shadow-md">{step.number}</span>
									</motion.div>
								</div>

								<div className={`w-[calc(100%-4rem)] md:w-[calc(50%-60px)] ${isLeft ? "md:pr-10 text-left" : "md:pl-10 text-left md:text-right"}`}>
									<div className="group relative p-6 md:p-10 glass-panel rounded-[24px] md:rounded-[32px] border border-black/10 dark:border-transparent hover:border-black/30 dark:border-transparent transition-all duration-500 hover:shadow-lg dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
										<div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 rounded-[24px] md:rounded-[32px] pointer-events-none`} />
										<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 transition-all">
											{step.title}
										</h3>
										<p className="text-base md:text-lg text-foreground/80 dark:text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors">
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
function IntelligentTechStack() {
	return (
		<section className="w-full flex flex-col items-center py-40 relative bg-background overflow-hidden">
			<div className="absolute inset-0 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent dark:from-purple-900/20 via-background to-background pointer-events-none" />
			
			<div className="text-center mb-32 relative z-10">
				<motion.h2 
					initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
					className="text-5xl md:text-8xl font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/40"
				>
					Data & AI Matrix
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
							className="group relative flex flex-col items-center justify-center w-40 h-40 rounded-full border border-black/10 dark:border-transparent bg-foreground/[0.01] backdrop-blur-xl hover:border-purple-500/50 hover:shadow-lg dark:shadow-[0_0_50px_rgba(168,85,247,0.4)] transition-colors cursor-pointer"
						>
							<motion.div 
								animate={{ y: yOffset }} 
								transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
								className="flex flex-col items-center justify-center w-full h-full"
							>
								<div className="text-foreground/80 dark:text-foreground/60 group-hover:text-purple-400 transition-colors duration-300 mb-3 drop-shadow-lg flex items-center justify-center">
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

function AIDataNextSteps() {
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
					title="Digital Design" 
					desc="Design the future of tomorrow." 
					link="/services/digital-experience" 
					bgImage="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop"
					color="from-emerald-600 to-cyan-600"
				/>
			</div>
		</section>
	);
}

export default function ServicesAIData() {
	return (
		<div className="bg-background min-h-screen font-sans overflow-x-hidden">
			<SEO
				title="AI & Machine Learning Services - Intelligent Solutions | OpenGridLabs"
				description="AI, machine learning, deep learning, and NLP services. We build intelligent solutions including agentic AI, LLMs, computer vision, sentiment analysis, and predictive analytics."
				canonical="/services/ai-data"
				keywords="AI services, machine learning, deep learning, NLP, artificial intelligence, computer vision, sentiment analysis, predictive analytics, LLM, agentic AI, RAG"
			/>
			
			<IntelligentHero />
			<IntelligentServicesGrid />
			<IntelligentProcess />
			<IntelligentTechStack />
			<AIDataNextSteps />
		</div>
	);
}
