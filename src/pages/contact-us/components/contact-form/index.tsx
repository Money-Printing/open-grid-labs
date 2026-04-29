import { useState } from "react";
import { motion } from "motion/react";
import { InputField } from "../../../../components/input-field";
import PageHeading2 from "../../../../components/page-heading-2";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Network, Send } from "lucide-react";

const services = ["UX-UI", "Web Apps", "Mobile Apps", "Web Design", "Web Flow", "Intelligence", "App UI", "Other"];
const budgets = ["10k - 30k", "30k - 50k", "50k - 100k", ">100k"];
const domains = [
	'Marketplace', 'Medical', 'Finance', 'Education', 'Real Estate',
	'Trading', 'Logistics', 'Hospitality', 'Entertainment', 'Government', 'Others'
];

type StyledPhoneInputProps = {
	label: string;
	value: string;
	onChange: (v: string) => void;
	error?: string
}

function StyledPhoneInput({
	label,
	value,
	onChange,
	error,
}: StyledPhoneInputProps) {
	return (
		<div className="flex flex-col gap-3 relative group">
			<label className="text-foreground/80 font-semibold text-lg md:text-xl tracking-wide group-focus-within:text-primary transition-colors">
				{label} <span className="text-primary">*</span>
			</label>

			<div className="border border-black/10 dark:border-transparent rounded-2xl px-2 py-2 bg-background/40 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary focus-within:shadow-[0_0_20px_hsla(210,100%,50%,0.2)] transition-all flex items-center gap-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
				<PhoneInput
					country="in"
					value={value}
					onChange={onChange}
					containerClass="!w-full relative z-10"
					inputClass="!w-full !text-base !bg-transparent !border-none !outline-none !shadow-none text-foreground placeholder:text-muted-foreground pl-12"
					buttonClass="!bg-transparent !border-none !outline-none"
					dropdownClass="!bg-gray-900 !text-foreground !border-black/10 dark:border-transparent custom-scrollbar"
				/>
			</div>

			{error && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-sm mt-1">
                    {error}
                </motion.p>
            )}
		</div>
	);
}

function RadioPills({ options, name, value, setValue }: { options: string[]; name: string; value: string; setValue: (val: string) => void }) {
	return (
		<div className="flex flex-wrap gap-4 mt-2">
			{options.map((option) => (
				<motion.label
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
					key={option}
					className={`relative px-6 py-3 rounded-2xl text-sm md:text-base cursor-pointer transition-all duration-300 font-bold tracking-wide border overflow-hidden
						${value === option 
                            ? "bg-primary/20 text-foreground border-primary shadow-[0_0_20px_hsla(210,100%,50%,0.4)]" 
                            : "bg-white/50 dark:bg-foreground/5 border-black/10 dark:border-transparent text-foreground/80 dark:text-foreground/60 hover:bg-white/50 dark:bg-foreground/10 hover:text-foreground"}`}
				>
                    {value === option && (
                        <motion.div layoutId={`pill-bg-${name}`} className="absolute inset-0 bg-primary opacity-20 pointer-events-none" />
                    )}
					<input
						type="radio"
						name={name}
						value={option}
						checked={value === option}
						onChange={() => setValue(option)}
						className="hidden"
					/>
					<span className="relative z-10">{option}</span>
				</motion.label>
			))}
		</div>
	);
}

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		company: '',
		domain: '',
		services: '',
		budget: '',
		comments: '',
	})
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		company: '',
		domain: '',
		services: '',
		budget: '',
		comments: '',
	})
	const [loading, setLoading] = useState(false)

	const handleSubmit = async () => {
		let newErrors: any = {};

		if (!formData.name) newErrors.name = "Name is required";
		if (!formData.email) newErrors.email = "Email is required";
		if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
		if (!formData.company) newErrors.company = "Company is required";
		if (!formData.domain) newErrors.domain = "Domain is required";
		if (!formData.services) newErrors.services = "Services are required";
		if (!formData.budget) newErrors.budget = "Budget is required";
		if (!formData.comments) newErrors.comments = "Comments are required";

		setErrors(newErrors);

		if (Object.keys(newErrors).length > 0) return;

		setLoading(true)
		const fd = new FormData();
		Object.entries(formData).forEach(([key, value]) => {
			fd.append(key, value);
		});
		fd.append("access_key", "7ce8502f-e86a-4944-a377-30c9e87456ad");

		try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: fd
            });
            const data = await response.json();
            if (data.success) {
                toast.success("Project inquiry submitted successfully!")
                setFormData({
                    name: '', email: '', phoneNumber: '', company: '',
                    domain: '', services: '', budget: '', comments: '',
                });
            } else {
                toast.error("Error submitting form (may be detected as spam)")
            }
        } catch (err) {
            toast.error("Network error. Please try again.")
        }
		setLoading(false)
	};

	return (
		<section id="contact-us-contact-form" className="w-full flex flex-col relative z-20 perspective-[1000px]">
			<div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
			
            <PageHeading2 mainTitle="Initialize Protocol" />

			<motion.div 
                initial={{ opacity: 0, rotateX: 10, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full relative mt-16"
            >
                {/* AI Control Panel Background */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-20 pointer-events-none rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl pointer-events-none" />
                
                <form className="w-full flex flex-col gap-12 glass-panel p-8 md:p-14 rounded-3xl border border-black/10 dark:border-transparent relative overflow-hidden shadow-lg dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform-style-3d backdrop-blur-xl">
                    
                    {/* Decorative Header */}
                    <div className="flex items-center gap-4 border-b border-black/10 dark:border-transparent pb-6 mb-2">
                        <Network className="w-8 h-8 text-primary animate-pulse" />
                        <div className="flex flex-col">
                            <span className="text-foreground/70 dark:text-foreground/50 font-mono text-sm tracking-widest uppercase">System Status: Online</span>
                            <span className="text-foreground font-display font-bold text-xl tracking-wide">Project Parameters Input</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="relative group">
                            <InputField value={formData.name}
                                onChange={(v) => {
                                    setFormData({ ...formData, name: v })
                                    if (errors.name) setErrors({ ...errors, name: "" });
                                }}
                                error={errors.name}
                                label="Operator Name" placeholder="John Doe" />
                        </div>
                        <div className="relative group">
                            <InputField value={formData.email}
                                onChange={(v) => {
                                    setFormData({ ...formData, email: v })
                                    if (errors.email) setErrors({ ...errors, email: "" });
                                }}
                                error={errors.email}
                                label="Secure Comm Link" placeholder="hello@example.com" type="email" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <StyledPhoneInput value={formData.phoneNumber}
                            onChange={(v) => {
                                setFormData({ ...formData, phoneNumber: v })
                                if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: "" });
                            }}
                            error={errors.phoneNumber}
                            label="Mobile Relay" />

                        <div className="relative group">
                            <InputField value={formData.company}
                                onChange={(v) => {
                                    setFormData({ ...formData, company: v })
                                    if (errors.company) setErrors({ ...errors, company: "" });
                                }}
                                error={errors.company}
                                label="Organization Identifier" placeholder="Your Company" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 bg-background/20 p-8 rounded-2xl border border-black/5 dark:border-transparent">
                        <h2 className="text-foreground/80 font-semibold text-lg md:text-xl tracking-wide">Target Sector <span className="text-primary">*</span></h2>
                        <RadioPills name="domain" options={domains} value={formData.domain}
                            setValue={(v) => {
                                setFormData({ ...formData, domain: v })
                                if (errors.domain) setErrors({ ...errors, domain: "" });
                            }}
                        />
                        {errors.domain && <p className="text-red-500 text-sm mt-1">{errors.domain}</p>}
                    </div>

                    <div className="flex flex-col gap-4 bg-background/20 p-8 rounded-2xl border border-black/5 dark:border-transparent">
                        <h2 className="text-foreground/80 font-semibold text-lg md:text-xl tracking-wide">Required Modules <span className="text-primary">*</span></h2>
                        <RadioPills name="service" options={services} value={formData.services}
                            setValue={(v) => {
                                setFormData({ ...formData, services: v })
                                if (errors.services) setErrors({ ...errors, services: "" });
                            }}
                        />
                        {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
                    </div>

                    <div className="flex flex-col gap-4 bg-background/20 p-8 rounded-2xl border border-black/5 dark:border-transparent">
                        <h2 className="text-foreground/80 font-semibold text-lg md:text-xl tracking-wide">Resource Allocation (USD) <span className="text-primary">*</span></h2>
                        <RadioPills name="budget" options={budgets} value={formData.budget}
                            setValue={(v) => {
                                setFormData({ ...formData, budget: v })
                                if (errors.budget) setErrors({ ...errors, budget: "" });
                            }}
                        />
                        {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                    </div>

                    <div className="relative group">
                        <InputField value={formData.comments}
                            onChange={(v) => {
                                setFormData({ ...formData, comments: v })
                                if (errors.comments) setErrors({ ...errors, comments: "" });
                            }}
                            error={errors.comments}
                            label="Mission Directives" placeholder="Specify your exact requirements, architectural needs, and expected outcomes..." type="textarea" rows={5} />
                    </div>

                    <div className="flex justify-end pt-6 border-t border-black/10 dark:border-transparent">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className={`w-full md:w-auto min-w-[240px] justify-center text-lg overflow-hidden inline-flex items-center gap-3 font-bold transition-all relative select-none cursor-pointer h-16 px-10 bg-gradient-to-r from-primary to-accent text-white rounded-2xl shadow-[0_0_30px_hsla(210,100%,50%,0.3)] hover:shadow-[0_0_50px_hsla(210,100%,50%,0.6)] disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            {loading ? (
                                <span className="w-6 h-6 border-2 border-black/30 dark:border-transparent border-t-white rounded-full animate-spin inline-block"></span>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    <span>Transmit Data</span>
                                </>
                            )}
                        </motion.button>
                    </div>

                </form>
            </motion.div>
		</section>
	);
}
