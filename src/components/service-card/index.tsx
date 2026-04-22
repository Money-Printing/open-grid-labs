import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Indicator from "../ui/indicator";

type ServiceCardProps = {
	link: string;
	name: string;
	description?: string;
};

export default function ServiceCard({ link, name, description }: ServiceCardProps) {
	return (
		<Link
			to={link}
			className="flex-1 group"
		>
			<div className="relative w-full h-full glass-panel bg-card/40 rounded-2xl overflow-hidden p-6 flex flex-col justify-between gap-4 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsla(210,100%,50%,0.15)] hover:-translate-y-1">
				<Indicator />

				<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-md">
						<ArrowRight className="text-primary" size={20} />
					</div>
				</div>

				<div className="flex flex-col gap-2 mt-8 z-10">
					<h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{name}</h3>
					{description && (
						<p className="text-muted-foreground line-clamp-3">
							{description}
						</p>
					)}
				</div>
				
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
			</div>
		</Link>
	);
}
