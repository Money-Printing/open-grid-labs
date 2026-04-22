interface PageTitleProps {
	label?: string;
	mainTitle?: string;
	subTitle?: string;
	description?: string;
}

export default function PageTitle({
	label,
	mainTitle,
	subTitle,
	description,
}: PageTitleProps) {
	return (
		<div className="relative text-center px-6 py-20 flex flex-col items-center w-full gap-6 bg-transparent border-y border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

			{label && (
				<span className="text-primary font-semibold tracking-widest uppercase opacity-80 z-10">{label}</span>
			)}

			{mainTitle && (
				<h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight uppercase z-10 drop-shadow-md">
					{mainTitle}
				</h1>
			)}

			{subTitle && (
				<h2 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-semibold z-10 uppercase tracking-wide">{subTitle}</h2>
			)}

			{description && (
				<p className="text-muted-foreground text-lg md:text-xl mt-4 max-w-3xl leading-relaxed z-10">{description}</p>
			)}
		</div>
	);
}
