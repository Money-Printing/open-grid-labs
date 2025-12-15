import type { ReactNode } from "react"

const variants = {
	default: 'animated-gradient-bg',
	outline: 'hover:bg-primary hover:text-secondary border-border'
}

type ButtonProps = {
	variant?: keyof typeof variants
	onClick?: () => void,
	className?: string,
	children: ReactNode
}

export default function Button({
	variant = 'default',
	className = '',
	onClick,
	children
}: ButtonProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`px-4 py-2 rounded-xl cursor-pointer transition ${className} ${variants[variant]} inline-flex items-center justify-center`}
		>
			{children}
		</button>
	)
}