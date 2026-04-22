import type { ReactNode } from "react";
import { Link } from "react-router";

export default function ButtonLink({
	to,
	className = '',
	outline = false,
	children
}: { to: string, className?: string, outline?: boolean, children: ReactNode }) {
	return (
		<Link
			to={to}
			className={`overflow-hidden inline-flex shrink-0 items-center justify-center font-medium tracking-wide transition-all duration-300 relative select-none cursor-pointer h-12 px-6 rounded-xl w-fit ${
				outline 
					? 'border border-primary text-primary bg-transparent hover:bg-primary/10 shadow-[inset_0_0_10px_hsla(210,100%,50%,0.2)]'
					: 'bg-primary text-white shadow-glow hover:bg-primary/90 hover:shadow-[0_0_30px_hsla(210,100%,50%,0.6)]'
			} ${className}`}
		>
			{children}
		</Link>
	)
}
