import { useState } from "react";
import { InputField } from "../../../../components/input-field";
import PageHeading2 from "../../../../components/page-heading-2";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const services = ["UX-UI", "Web Apps", "Mobile Apps", "Web Design", "Web Flow", "Intelligence", "App UI", "Other"];
const budgets = ["10k - 30k", "30k - 50k", "50k - 100k", ">100k"];
const domains = [
	'Marketplace',
	'Medical',
	'Finance',
	'Education',
	'Real Estate',
	'Trading',
	'Logistics',
	'Hospitality',
	'Entertainment',
	'Government',
	'Others'
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
		<div className="flex flex-col gap-3">
			<label className="text-white/80 font-semibold text-lg md:text-xl tracking-wide">
				{label}
			</label>

			<div className="border border-white/10 rounded-xl px-2 py-2 bg-black/40 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary transition-all flex items-center gap-2">
				<PhoneInput
					country="in"
					value={value}
					onChange={onChange}
					containerClass="!w-full"
					inputClass="!w-full !text-base !bg-transparent !border-none !outline-none !shadow-none text-white placeholder:text-muted-foreground pl-12"
					buttonClass="!bg-transparent !border-none !outline-none"
					dropdownClass="!bg-gray-900 !text-white !border-white/10"
				/>
			</div>

			{error && <p className="text-red-500 text-sm mt-1">{error}</p>}
		</div>
	);
}


function RadioPills({ options, name, value, setValue }: { options: string[]; name: string; value: string; setValue: (val: string) => void }) {
	return (
		<div className="flex flex-wrap gap-4 mt-2">
			{options.map((option) => (
				<label
					key={option}
					className={`px-5 py-3 rounded-full text-sm md:text-base cursor-pointer transition-all duration-300 font-medium tracking-wide border
						${value === option 
                            ? "bg-primary text-white border-primary shadow-[0_0_15px_hsla(210,100%,50%,0.3)]" 
                            : "bg-white/5 border-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"}`}
				>
					<input
						type="radio"
						name={name}
						value={option}
						checked={value === option}
						onChange={() => setValue(option)}
						className="hidden"
					/>
					{option}
				</label>
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

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: fd
		});
		const data = await response.json();
		if (data.success) {
			toast.success("Form submitted successfully!")
			// Reset form after successful submission
			setFormData({
				name: '',
				email: '',
				phoneNumber: '',
				company: '',
				domain: '',
				services: '',
				budget: '',
				comments: '',
			});
		} else {
			toast.error("Error submitting form (may be detected as spam)")
		}
		setLoading(false)
	};


	return (
		<section id="contact-us-contact-form" className="w-full flex flex-col relative z-20">
			<PageHeading2 mainTitle="Let's Talk!" />

			<form className="w-full flex flex-col gap-12 mt-12 glass-panel p-8 md:p-12 rounded-3xl border border-white/5">
				<div className="grid md:grid-cols-2 gap-10">
					<InputField value={formData.name}
						onChange={(v) => {
							setFormData({ ...formData, name: v })
							if (errors.name) setErrors({ ...errors, name: "" });
						}}
						error={errors.name}
						label="Hi! I am" placeholder="John Doe" />
					<InputField value={formData.email}
						onChange={(v) => {
							setFormData({ ...formData, email: v })
							if (errors.email) setErrors({ ...errors, email: "" });
						}}
						error={errors.email}
						label="Reach me at" placeholder="hello@gmail.com" type="email" />
				</div>

				<div className="grid md:grid-cols-2 gap-10">
					<StyledPhoneInput value={formData.phoneNumber}
						onChange={(v) => {
							setFormData({ ...formData, phoneNumber: v })
							if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: "" });
						}}
						error={errors.phoneNumber}
						label="Mobile No" />


					<InputField value={formData.company}
						onChange={(v) => {
							setFormData({ ...formData, company: v })
							if (errors.company) setErrors({ ...errors, company: "" });
						}}
						error={errors.company}
						label="Company Name" placeholder="Your Company" />
				</div>

				<div className="flex flex-col gap-3">
					<h2 className="text-white/80 font-semibold text-lg md:text-xl tracking-wide">Domain <span className="text-red-500 text-base">*</span></h2>
					<RadioPills name="domain" options={domains} value={formData.domain}
						setValue={(v) => {
							setFormData({ ...formData, domain: v })
							if (errors.domain) setErrors({ ...errors, domain: "" });
						}}
					/>
					{
						errors.domain && (
							<p className="text-red-500 text-sm mt-1">{errors.domain}</p>
						)
					}
				</div>

				<div className="flex flex-col gap-3">
					<h2 className="text-white/80 font-semibold text-lg md:text-xl tracking-wide">Services <span className="text-red-500 text-base">*</span></h2>
					<RadioPills name="service" options={services} value={formData.services}
						setValue={(v) => {
							setFormData({ ...formData, services: v })
							if (errors.services) setErrors({ ...errors, services: "" });
						}}
					/>
					{
						errors.services && (
							<p className="text-red-500 text-sm mt-1">{errors.services}</p>
						)
					}
				</div>

				<div className="flex flex-col gap-3">
					<h2 className="text-white/80 font-semibold text-lg md:text-xl tracking-wide">Budget In USD <span className="text-red-500 text-base">*</span></h2>
					<RadioPills name="budget" options={budgets} value={formData.budget}
						setValue={(v) => {
							setFormData({ ...formData, budget: v })
							if (errors.budget) setErrors({ ...errors, budget: "" });
						}}
					/>
					{
						errors.budget && (
							<p className="text-red-500 text-sm mt-1">{errors.budget}</p>
						)
					}
				</div>

				<InputField value={formData.comments}
					onChange={(v) => {
						setFormData({ ...formData, comments: v })
						if (errors.comments) setErrors({ ...errors, comments: "" });
					}}
					error={errors.comments}
					label="Comments" placeholder="Tell us about your project requirements..." type="textarea" rows={5} />

				<button
					type="button"
					onClick={handleSubmit}
					disabled={loading}
					className={`md:w-48 w-full justify-center text-xl overflow-hidden inline-flex items-center gap-2 font-bold transition-all relative select-none cursor-pointer h-14 px-8 bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-[0_0_20px_hsla(210,100%,50%,0.3)] hover:shadow-[0_0_30px_hsla(210,100%,50%,0.5)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
				>
					{
						loading ? (
							<span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></span>
						) : (
							<span>Send Message</span>
						)
					}
				</button>

			</form>
		</section>
	);
}
