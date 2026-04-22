type InputFieldProps = {
	label: string;
	placeholder: string;
	value: string;
	onChange: (v: string) => void;
	type?: string;
	prefix?: string;
	rows?: number;
	pattern?: string
	error?: string
};

export function InputField({ label, placeholder, value, onChange, type = "text", prefix, rows, pattern, error }: InputFieldProps) {
	if (type === "textarea") {
		return (
			<div className="flex flex-col gap-3 group relative">
				<label className="text-white/80 font-semibold text-sm tracking-wide transition-colors group-focus-within:text-white uppercase">{label}</label>
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none mt-6" />
				<textarea
					onChange={(e) => onChange(e.target.value)}
					value={value}
					rows={rows || 4}
					placeholder={placeholder}
					className="relative w-full text-white placeholder:text-white/30 bg-black/40 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary/50 focus:ring-1 focus:ring-primary outline-none transition-all resize-none shadow-[0_0_15px_rgba(0,0,0,0.5)]"
				/>
				{
					error && (
						<p className="text-red-500 text-sm mt-1">{error}</p>
					)
				}
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-3 group relative">
			<label className="text-white/80 font-semibold text-sm tracking-wide transition-colors group-focus-within:text-white uppercase">{label}</label>
			<div className={`relative flex items-center gap-2 ${prefix ? "bg-black/40 border border-white/10 rounded-2xl px-5 py-4 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all" : ""}`}>
                {prefix && <span className="text-primary font-medium">{prefix}</span>}
                {!prefix && <div className="absolute inset-0 bg-primary/20 blur-xl rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none mt-6" />}
				<input
					onChange={(e) => onChange(e.target.value)}
					value={value}
					type={type}
					placeholder={placeholder}
					className={`relative w-full ${prefix ? "bg-transparent" : "bg-black/40 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary/50 focus:ring-1 focus:ring-primary shadow-[0_0_15px_rgba(0,0,0,0.5)]"} text-white placeholder:text-white/30 outline-none transition-all`}
					pattern={pattern}
				/>

			</div>
			{
				error && (
					<p className="text-red-500 text-sm mt-1">{error}</p>
				)
			}
		</div>
	);
}
