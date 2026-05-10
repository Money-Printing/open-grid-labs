import { CpuIcon, type LucideIcon } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";

interface PageHeadingProps {
	preTitle?: string;
	mainTitle: string;
	postTitle?: string;
	icon?: LucideIcon;
	hideIcon?: boolean;
	iconSize?: number;
}

export default function PageHeading({
	preTitle,
	mainTitle,
	postTitle,
	icon: Icon = CpuIcon,
	hideIcon = false,
	iconSize = 60,
}: PageHeadingProps) {
	const { scrollYProgress } = useScroll()

	const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

	return (
		<div className="relative mx-auto text-center px-4 flex flex-col items-center gap-4 py-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-[60px] pointer-events-none" />
			<div className="flex flex-col items-center gap-4 relative z-10">
				<h1 className="font-display font-bold text-foreground uppercase tracking-tight flex flex-col md:flex-row items-center gap-3 md:gap-4 text-4xl md:text-7xl text-center md:text-left">
					{preTitle && <span className="break-words text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{preTitle}</span>}

					{!hideIcon && (
						<motion.span
							className="md:inline-block hidden relative"
							style={{ rotate }}
						>
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
							<Icon size={iconSize} className="text-foreground dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] relative z-10" />
						</motion.span>
					)}

					{!hideIcon && (
						<motion.span
							className="inline-block md:hidden relative"
							style={{ rotate }}
						>
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
							<Icon size={Math.floor(iconSize / 2)} className="text-foreground dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] relative z-10" />
						</motion.span>
					)}

					<span className="break-words">{mainTitle}</span>
				</h1>


				{postTitle && (
					<h2 className="font-semibold text-muted-foreground text-2xl md:text-3xl uppercase tracking-widest mt-2">
						{postTitle}
					</h2>
				)}
			</div>
		</div>
	);
}
