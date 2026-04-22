import Indicator from "../ui/indicator";

interface PageHeading2Props {
	preTitle?: string;
	mainTitle: string;
}

export default function PageHeading2({ preTitle, mainTitle }: PageHeading2Props) {
	return (
		<div className="w-full flex flex-col gap-6 relative">
      <div className="absolute -left-10 top-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
			<Indicator />

			<div className="flex flex-col relative z-10">
				{preTitle && (
					<span className="text-sm md:text-base tracking-widest text-primary uppercase font-medium mb-2">
						{preTitle}
					</span>
				)}

				<h1 className="font-bold md:text-5xl text-4xl leading-tight text-white drop-shadow-md">
					{mainTitle}
				</h1>
			</div>
		</div>
	);
}
