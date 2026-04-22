import PageHeading from "../../../../components/page-heading";

type Step = {
	number: string;
	title: string;
	desc: string;
};

type WorkingStepProps = {
	steps: Step[];
};

export default function WorkingStep({ steps }: WorkingStepProps) {
	return (
		<section id="service-details-working-step" className="w-full flex flex-col items-center relative py-20">
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
			<PageHeading preTitle="How" mainTitle="We" postTitle="Do It?" />

			<div className="w-full w-[90%] max-w-[1400px] grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 px-4 md:px-8 z-10">
				{steps.map((step, idx) => (
					<div
						key={idx}
						className="relative glass-panel group border-l-4 border-primary rounded-xl p-8 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 shadow-md"
					>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-r-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
						<div className="absolute -left-6 top-8 w-12 h-12 flex items-center justify-center bg-primary text-white font-display font-bold text-xl rounded-full shadow-[0_0_15px_hsla(210,100%,50%,0.5)] border-4 border-background">
							{step.number}
						</div>
						<h2 className="font-bold text-2xl mt-2 ml-4 text-white drop-shadow-sm">{step.title}</h2>
						<p className="text-muted-foreground text-lg ml-4 leading-relaxed group-hover:text-white/80 transition-colors">{step.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
