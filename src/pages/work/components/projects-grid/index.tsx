import { ArrowRight } from "lucide-react";
import Indicator from "../../../../components/ui/indicator";
import ButtonLink from "../../../../components/ui/button-link.tsx/index.tsx"; // using index.tsx is optional but safe

interface ProjectCardProps {
	title: string;
	description: string;
	href: string;
}

interface ProjectsGridProps {
	projects: ProjectCardProps[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
	return (
		<div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8 mt-16 text-left relative z-10 w-[90%] max-w-[1400px] mx-auto px-4 pb-20">
			{projects.map((project, idx) => (
				<div
					key={idx}
					className="relative glass-panel rounded-3xl p-8 w-full flex flex-col justify-between gap-6 overflow-hidden group hover:border-primary/40 hover:shadow-[0_0_30px_hsla(210,100%,50%,0.2)] hover:-translate-y-2 transition-all duration-500"
				>
                    {/* Decorative Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
					<div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full rotate-12 z-0 group-hover:bg-accent/20 transition-colors duration-500 blur-xl"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

					<div className="relative z-10 flex flex-col gap-5">
						<Indicator />

						<h2 className="text-2xl md:text-3xl text-white font-display font-semibold transition-colors duration-300 group-hover:text-primary pt-2 line-clamp-3 leading-snug">
							{project.title}
						</h2>

						<p className="text-base md:text-lg text-muted-foreground line-clamp-4 leading-relaxed">
							{project.description}
						</p>
					</div>

					<ButtonLink
						to={project.href}
						className="relative z-10 w-fit flex items-center gap-3 mt-4"
                        outline={true}
					>
						View Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</ButtonLink>
				</div>
			))}
		</div>
	)
}
