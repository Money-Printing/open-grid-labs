import type { ReactNode } from "react";
import PageHeading2 from "../../../../components/page-heading-2";
import { Monitor } from "lucide-react";

const ServiceSectionLayout = ({ children }: { children: ReactNode }) => {
	return (
		<section
			id="service-details-we-serve"
			className="w-full flex flex-col gap-12 relative max mt-20"
		>
			{children}
		</section>
	);
};

const ServiceHero = ({ title, description }: { title: Record<string, string>, description: string }) => {
	return (
		<div className="col-span-1 w-full flex flex-col gap-8 relative z-10">
			<div className="absolute -left-10 top-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
			<div className="w-full flex flex-col md:gap-7 gap-6">
				<PageHeading2
					preTitle={title.part1}
					mainTitle={title.part2}
				/>
			</div>

			<p className="text-muted-foreground text-xl md:text-2xl leading-relaxed">
				{description}
			</p>
		</div>
	);
};

const ServiceDiagram = () => {
	return (
		<div className="col-span-1 w-full flex md:justify-end justify-center relative">
			<div className="absolute right-10 top-10 w-48 h-48 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
			<div className="relative h-[340px] justify-center flex w-[400px] items-center text-primary drop-shadow-[0_0_20px_hsla(210,100%,50%,0.3)]">
				<Monitor size={200} className="relative z-10 font-thin" strokeWidth={1} />
			</div>
		</div>
	);
};


const ServiceCategory = ({ title, items }: { title: string, items: string[] }) => {
	const [part1, part2] = title.split(' ');

	return (
		<div className="w-full flex flex-col gap-8 mt-10">
			<h1 className="text-4xl md:text-5xl font-display font-bold tracking-wide flex flex-wrap">
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-md">{part1}</span>
				<span className="text-white ml-3">{part2}</span>
			</h1>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
				{items.map((item, index) => (
					<div
						key={index}
						className="p-8 rounded-2xl glass-panel border border-white/5 hover:border-primary/40 hover:shadow-[0_0_20px_hsla(210,100%,50%,0.15)] group transition-all duration-300 relative overflow-hidden"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
						<h3 className="text-xl md:text-2xl font-semibold text-white/90 group-hover:text-white transition-colors relative z-10">
							{item}
						</h3>
					</div>
				))}
			</div>
		</div>
	);
};


type ServiceDetailsWeServeProps = {
	description: string
	services: Record<string, string[]>
}


const ServiceDetailsWeServe = ({ description, services }: ServiceDetailsWeServeProps) => {
	return (
		<ServiceSectionLayout>
			<div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10 relative">
				<ServiceHero
					title={{ part1: "What Do", part2: "We Serve?" }}
					description={description}
				/>
				<ServiceDiagram />
			</div>

			<div className="w-full mt-16 flex flex-col gap-24">
				{
					Object.keys(services).map((k, i) => (
						<ServiceCategory
							key={i}
							title={k}
							items={services[k]}
						/>
					))
				}
			</div>
		</ServiceSectionLayout>
	);
};

export default ServiceDetailsWeServe;
