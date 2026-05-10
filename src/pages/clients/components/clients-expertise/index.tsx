import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import {
	Car,
	Landmark,
	Briefcase,
	ShoppingCart,
	GraduationCap,
	Bolt,
	PartyPopper,
	Utensils,
	Cpu,
	Plane,
	HeartPulse,
	Building2,
} from "lucide-react";

const cards = [
	{ title: "Automobiles", icon: <Car size={32} strokeWidth={1.5} /> },
	{ title: "Capital", icon: <Landmark size={32} strokeWidth={1.5} /> },
	{ title: "Consulting", icon: <Briefcase size={32} strokeWidth={1.5} /> },
	{ title: "E-Commerce", icon: <ShoppingCart size={32} strokeWidth={1.5} /> },
	{ title: "Education", icon: <GraduationCap size={32} strokeWidth={1.5} /> },
	{ title: "Energy", icon: <Bolt size={32} strokeWidth={1.5} /> },
	{ title: "Events", icon: <PartyPopper size={32} strokeWidth={1.5} /> },
	{ title: "Food", icon: <Utensils size={32} strokeWidth={1.5} /> },
	{ title: "Hardware", icon: <Cpu size={32} strokeWidth={1.5} /> },
	{ title: "Travel", icon: <Plane size={32} strokeWidth={1.5} /> },
	{ title: "Healthcare", icon: <HeartPulse size={32} strokeWidth={1.5} /> },
	{ title: "Real-Estate", icon: <Building2 size={32} strokeWidth={1.5} /> },
];

const ExpertiseCard = ({ item, index }: { item: any; index: number }) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		setMousePosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	return (
		<motion.div
			ref={cardRef}
			initial={{ opacity: 0, y: 20, scale: 0.95 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="relative group rounded-3xl overflow-hidden cursor-pointer border border-black/5 dark:border-transparent bg-foreground/[0.02] backdrop-blur-sm"
			style={{
				transformStyle: "preserve-3d",
				transform: "perspective(1000px)",
			}}
			whileHover={{
				y: -5,
				rotateX: 2,
				rotateY: -2,
				borderColor: "rgba(255, 255, 255, 0.1)",
				transition: { duration: 0.2 },
			}}
		>
			{/* Hover glow effect tracking mouse */}
			<div
				className="absolute inset-0 pointer-events-none transition-opacity duration-300"
				style={{
					opacity: isHovered ? 1 : 0,
					background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(210, 100%, 50%, 0.15), transparent 40%)`,
				}}
			/>

			<div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-10 h-full">
				<div className="w-16 h-16 flex items-center justify-center mb-6 rounded-2xl bg-foreground/[0.03] border border-black/5 dark:border-transparent shadow-inner group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:shadow-[0_0_20px_hsla(210,100%,50%,0.2)] transition-all duration-300 relative">
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/10 dark:from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					<span className="text-foreground/70 group-hover:text-primary transition-colors duration-300 relative z-10">
						{item.icon}
					</span>
				</div>
				<h4 className="text-lg md:text-xl font-display font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300 text-center">
					{item.title}
				</h4>
			</div>
			
			{/* Bottom border accent on hover */}
			<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0" />
		</motion.div>
	);
};

export default function ClientsExpertise() {
	return (
		<div className="w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 md:gap-6 relative mt-12 z-10 perspective-[2000px]">
			{cards.map((item, i) => (
				<ExpertiseCard key={i} item={item} index={i} />
			))}
		</div>
	);
}
