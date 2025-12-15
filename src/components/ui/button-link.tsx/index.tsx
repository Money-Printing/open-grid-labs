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
			className={`overflow-hidden inline-flex shrink-0 items-center justify-center font-semibold transition-colors relative select-none cursor-pointer h-12 px-6 ${outline ? 'animated-gradient-bg-hover bg-background text-foreground border border-border' : 'animated-gradient-bg'} rounded-[15px] w-fit ${className}`}
		>
			{children}
		</Link>
	)
}