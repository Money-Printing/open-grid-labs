import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import PageHeading from "../../../../components/page-heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";


type Tool = {
	icon: IconDefinition | ReactNode;
	name: string;
};

type ToolsWeUseProps = {
	tools: Tool[];
};

export default function ToolsWeUse({ tools }: ToolsWeUseProps) {
	const isFA = (value: any): value is IconDefinition =>
		value &&
		typeof value === "object" &&
		"iconName" in value &&
		"prefix" in value;

	return (
		<section id="service-details-tools" className="w-full flex flex-col items-center py-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-primary/5 blur-[120px] pointer-events-none" />
			<PageHeading preTitle="Tools" mainTitle="That" postTitle="We Use" />

			<div className="w-full w-[90%] max-w-[1400px] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 mt-16 z-10 relative">
				{tools.map((tool, i) => {
					return (
						<div key={i} className="group glass-panel relative border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden hover:border-primary/40 hover:shadow-[0_0_25px_hsla(210,100%,50%,0.2)] hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
							<div className="w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10 rounded-full mb-4 shadow-inner group-hover:border-primary/30 group-hover:shadow-[0_0_15px_hsla(210,100%,50%,0.3)] transition-all duration-300 relative z-10">
								{
									isFA(tool.icon) ? (
										<FontAwesomeIcon icon={tool.icon} size={'2xl'} className="text-white group-hover:text-primary transition-colors duration-300" />
									) : (
										tool.icon
									)
								}
							</div>
							<span className="text-lg font-semibold text-muted-foreground group-hover:text-white transition-colors duration-300 relative z-10">
								{tool.name}
							</span>
						</div>
					);
				})}
			</div>
		</section>
	);
}
