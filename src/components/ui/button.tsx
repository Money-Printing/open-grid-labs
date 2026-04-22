import type { ReactNode } from "react"

const variants = {
	default: 'bg-primary text-white shadow-glow hover:bg-primary/90 hover:shadow-[0_0_30px_hsla(210,100%,50%,0.6)]',
	outline: 'border border-primary text-primary bg-transparent hover:bg-primary/10 shadow-[inset_0_0_10px_hsla(210,100%,50%,0.2)]',
    ghost: 'hover:bg-primary/10 text-muted-foreground hover:text-primary',
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
			className={`px-6 py-3 rounded-xl font-medium tracking-wide cursor-pointer transition-all duration-300 ${variants[variant]} ${className} inline-flex items-center justify-center`}
		>
			{children}
		</button>
	)
}
