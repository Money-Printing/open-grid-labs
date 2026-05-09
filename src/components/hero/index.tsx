import { motion } from 'motion/react'
import { PhoneCall } from 'lucide-react';
import ButtonLink from '../ui/button-link.tsx';
import Button from '../ui/button';

// Declare Calendly type
declare global {
	interface Window {
		Calendly: {
			initPopupWidget: (options: { url: string }) => void;
		};
	}
}

export const brands = [
	{ href: '/clients/morphlelabs.png', alt: 'Morphle Labs' },
	{ href: '/clients/galen-data.png', alt: 'Galen Data' },
	{ href: '/clients/matrix-one-health.svg', alt: 'Matrix One Health' },
	{ href: '/clients/ETG-commodities.png', alt: 'ETG Commodities' },
	{ href: '/clients/jlabs-digital.png', alt: 'JLabs Digital' },
	{ href: '/clients/roni-analytics.png', alt: 'Roni Analytics' },
	{ href: '/clients/sg-analytics.svg', alt: 'SG Analytics' },
	{ href: '/clients/npci.png', alt: 'NPCI' },
	{ href: '/clients/ambassade-de-france.png', alt: 'Ambassade De France' },
	{ href: '/clients/united-health-group.png', alt: 'United Health Group' },
]

const WireframeSphere = () => {
	const meridians = Array.from({ length: 12 });

	return (
		<div className="relative w-full aspect-square max-w-[500px] preserve-3d animate-spin-y-slow mx-auto perspective-[2000px]">
			{/* Outer glow aura */}
			<div className="absolute inset-0 rounded-full shadow-[0_0_150px_hsla(210,100%,50%,0.15)] bg-transparent" />

			{/* Core solid light sphere */}
			<div className="absolute inset-[15%] rounded-full bg-gradient-to-tr from-primary/10 via-background to-accent/10 opacity-90 backdrop-blur-3xl border border-primary/20 shadow-[0_0_50px_hsla(210,100%,50%,0.2)]" style={{ transform: 'translateZ(0px)' }} />

			{/* Rings container */}
			<div className="absolute inset-0 preserve-3d animate-float-gentle">
				{meridians.map((_, i) => {
					const rotationAngle = (i * 360) / 24; // 12 meridians
					return (
						<div
							key={i}
							className="absolute inset-0 border border-primary/20 rounded-full preserve-3d transition-colors duration-1000"
							style={{
								transform: `rotateY(${rotationAngle}deg)`,
							}}
						/>
					);
				})}
				{/* Equator */}
				<div
					className="absolute inset-0 border border-accent/40 rounded-full preserve-3d shadow-[0_0_20px_hsla(280,100%,60%,0.3)]"
					style={{ transform: 'rotateX(90deg)' }}
				/>
				{/* Tropic rings */}
				<div
					className="absolute inset-[15%] border border-primary/20 rounded-full preserve-3d"
					style={{ transform: 'translateY(-30%) rotateX(90deg)' }}
				/>
				<div
					className="absolute inset-[15%] border border-primary/20 rounded-full preserve-3d"
					style={{ transform: 'translateY(30%) rotateX(90deg)' }}
				/>

				{/* Floating particles inside */}
				<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_hsla(210,100%,50%,0.8)] animate-pulse-glow" style={{ transform: 'translateZ(100px)' }} />
				<div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_12px_hsla(280,100%,60%,0.8)] animate-pulse-glow" style={{ transform: 'translateZ(-50px)' }} />
				<div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_hsla(210,100%,50%,0.8)] animate-pulse-glow" style={{ transform: 'translateZ(150px)' }} />
			</div>
		</div>
	);
};


const Hero = () => {
	const handleBookCall = () => {
		if (window.Calendly) {
			window.Calendly.initPopupWidget({
				url: 'https://calendly.com/opengridlabs/30min?hide_landing_page_details=1&hide_gdpr_banner=1'
			});
		}
	};

	return (
		<section id='home-hero' aria-label="Hero - Transform Your Digital Future" className="relative min-h-[85vh] w-[95%] max-w-[1600px] mx-auto  flex items-center justify-center overflow-hidden bg-background px-4 pt-4 pb-12 mt-16 mb-16">
			{/* Dynamic Background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full"/>
				<div className="absolute bottom-[0%] -right-[10%] w-[60%] h-[60%] rounded-full" />
			</div>

			<div className="container mx-auto z-10 relative">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full md:w-[90%] max-w-[1600px] mx-auto">

					{/* Text Content Container */}
					<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/20 bg-primary/5 backdrop-blur-md rounded-full mb-8 shadow-[0_0_15px_hsla(210,100%,50%,0.1)]"
						>
							<span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsla(210,100%,50%,0.8)]" />
							<span className="text-xs font-semibold uppercase tracking-widest text-primary">AI-First Product Engineering</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
							className="text-4xl md:text-6xl lg:text-8xl font-display font-bold mb-6 leading-[1.1] tracking-tight text-gradient block drop-shadow-sm break-words w-full"
						>
							AI &amp; Automation
							<br className="hidden sm:block" />
							<span className="block mt-2 text-foreground">Driving Real Impact</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
							className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl lg:max-w-md leading-relaxed font-poppins"
						>
							We architect, build, and scale intelligent software products that give your business a measurable competitive edge.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
							className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
						>
							<div className="relative group">
								<div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
								<Button
									onClick={handleBookCall}
									className='relative w-full sm:w-fit !bg-background border border-primary/50 !text-foreground hover:!bg-primary/10 h-14 px-8 text-base transition-all duration-300'
								>
									Build Your AI Product
									<PhoneCall size={20} className="ml-2 w-5 h-5 flex-shrink-0" />
								</Button>
							</div>

							<ButtonLink
								to='/services'
								outline={true}
								className='w-full sm:w-fit h-14 px-8'
							>
								Explore Services
							</ButtonLink>
						</motion.div>
					</div>

					{/* 3D Visual Container */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
						className="relative flex justify-center items-center h-full min-h-[400px] perspective-[2000px] w-full"
					>
						<WireframeSphere />

						{/* Floating info cards to enhance 3D feel */}
						<motion.div
							animate={{ y: [-10, 10, -10] }}
							transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
							className="absolute top-10 -left-4 md:left-10 glass-panel rounded-2xl p-4 shadow-xl dark:shadow-[0_10px_30px_hsla(0,0%,0%,0.5)] preserve-3d"
							style={{ transform: "translateZ(50px)" }}
						>
							<div className="text-sm font-semibold text-foreground mb-1">Global Scale</div>
							<div className="text-xs text-primary/80 dark:text-primary">Deployed across 10+ regions</div>
						</motion.div>

						<motion.div
							animate={{ y: [10, -10, 10] }}
							transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
							className="absolute bottom-10 -right-4 md:right-10 glass-panel rounded-2xl p-4 shadow-xl dark:shadow-[0_10px_30px_hsla(0,0%,0%,0.5)] preserve-3d"
							style={{ transform: "translateZ(80px)" }}
						>
							<div className="text-sm font-semibold text-foreground mb-1">99.99%</div>
							<div className="text-xs text-primary/80 dark:text-primary">System Uptime</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Brands Section */}
				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					viewport={{ once: true, margin: "-100px" }}
					className='w-full mt-24 lg:mt-32 max-w-[100vw] overflow-hidden'
				>
					<p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">Trusted by industry leaders</p>
					
					<div className="relative w-full flex items-center h-[120px] perspective-[1000px]">
						{/* Edge Fade Gradients */}
						<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
						<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

						<motion.div
							className="flex items-center gap-10 w-max"
							animate={{ x: ["0%", "-50%"] }}
							transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
						>
							{[...brands, ...brands].map((b, i) => (
								<div 
									key={i} 
									className='group relative px-6 py-4 flex items-center justify-center shrink-0 transition-all duration-500 rounded-2xl hover:-translate-y-2 hover:shadow-[0_10px_30px_hsla(210,100%,50%,0.2)] bg-white/50 dark:bg-foreground/5 border border-black/5 dark:border-transparent backdrop-blur-sm shadow-lg dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] w-[260px] h-[90px]'
								>
									<img src={b.href} alt={b.alt} className='w-full h-full dark:invert grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 object-contain relative z-10' />
								</div>
							))}
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
