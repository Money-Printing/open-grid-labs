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
	{ title: "Automobiles", icon: <Car size={40} /> },
	{ title: "Capital", icon: <Landmark size={40} /> },
	{ title: "Consulting", icon: <Briefcase size={40} /> },
	{ title: "E-Commerce", icon: <ShoppingCart size={40} /> },
	{ title: "Education", icon: <GraduationCap size={40} /> },
	{ title: "Energy", icon: <Bolt size={40} /> },
	{ title: "Events", icon: <PartyPopper size={40} /> },
	{ title: "Food", icon: <Utensils size={40} /> },
	{ title: "Hardware", icon: <Cpu size={40} /> },
	{ title: "Travel", icon: <Plane size={40} /> },
	{ title: "Healthcare", icon: <HeartPulse size={40} /> },
	{ title: "Real-Estate", icon: <Building2 size={40} /> },
];

export default function ClientsExpertise() {
	return (
		<div className="w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 mt-16 relative">
			{cards.map((item, i) => (
				<div
					key={i}
					className="group flex flex-col items-center justify-center p-8 rounded-3xl glass-panel border border-white/5 hover:border-primary/40 hover:shadow-[0_0_20px_hsla(210,100%,50%,0.2)] transition-all duration-300 relative overflow-hidden"
				>
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
					<div className="w-20 h-20 flex items-center justify-center mb-6 bg-white/5 border border-white/10 rounded-full group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors shadow-inner relative z-10">
						<span className="text-white group-hover:text-primary transition-colors">{item.icon}</span>
					</div>
					<h4 className="text-lg md:text-xl font-display font-semibold text-white/90 group-hover:text-white transition-colors relative z-10">
						{item.title}
					</h4>
				</div>
			))}
		</div>
	);
}
