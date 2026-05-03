import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import PageTitle from "../../../components/page-title";
import SEO from "../../../components/seo";
import PageHeading from "../../../components/page-heading";
import { Briefcase, GraduationCap, MapPin, Clock, ChevronDown, Send, X, Network } from "lucide-react";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface JobPosition {
	id: string;
	title: string;
	department: string;
	type: "Full-time" | "Intern";
	location: string;
	experience: string;
	description: string;
	responsibilities: string[];
	requirements: string[];
	niceToHave?: string[];
	icon: React.ReactNode;
}

const jobPositions: JobPosition[] = [
	{
		id: "software-developer-intern",
		title: "Software Developer Intern",
		department: "Engineering",
		type: "Intern",
		location: "Remote / On-site",
		experience: "Fresher / Students",
		description: "Kickstart your career in software development! Join our team as an intern and gain hands-on experience building real-world applications.",
		responsibilities: [
			"Assist in developing web and mobile applications",
			"Learn and apply modern development practices",
			"Participate in code reviews and team meetings",
			"Write unit tests and documentation",
			"Collaborate with senior developers on projects",
			"Complete assigned tasks and mini-projects"
		],
		requirements: [
			"Currently pursuing or recently completed degree in CS/IT",
			"Basic knowledge of programming (JavaScript, Python, or similar)",
			"Familiarity with HTML, CSS, and web fundamentals",
			"Eagerness to learn and grow",
			"Good communication skills",
			"Ability to work 20-40 hours per week"
		],
		icon: <GraduationCap className="w-6 h-6" />
	},
];

// Application Form Modal
function ApplicationModal({
	isOpen,
	onClose,
	selectedPosition
}: {
	isOpen: boolean;
	onClose: () => void;
	selectedPosition: string;
}) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		position: selectedPosition,
		experience: '',
		coverLetter: ''
	});
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setFormData(prev => ({ ...prev, position: selectedPosition }));
	}, [selectedPosition]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		let newErrors: Record<string, string> = {};

		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.email.trim()) newErrors.email = "Email is required";
		if (!formData.phone) newErrors.phone = "Phone number is required";
		if (!formData.position) newErrors.position = "Position is required";
		if (!formData.experience) newErrors.experience = "Experience is required";

		setErrors(newErrors);

		if (Object.keys(newErrors).length > 0) return;

		setLoading(true);

		const fd = new FormData();
		fd.append("access_key", "7ce8502f-e86a-4944-a377-30c9e87456ad");
		fd.append("subject", `Job Application: ${formData.position} - ${formData.name}`);
		fd.append("from_name", formData.name);

		fd.append("Name", formData.name);
		fd.append("Email", formData.email);
		fd.append("Phone", formData.phone);
		fd.append("Position Applied", formData.position);
		fd.append("Experience", formData.experience);
		if (formData.coverLetter) {
			fd.append("Cover Letter", formData.coverLetter);
		}

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: fd
			});
			const data = await response.json();

			if (data.success) {
				toast.success("Application submitted successfully!");
				setFormData({
					name: '',
					email: '',
					phone: '',
					position: '',
					experience: '',
					coverLetter: ''
				});
				onClose();
			} else {
				toast.error(data.message || "Error submitting application. Please try again.");
			}
		} catch (error) {
			toast.error("Network error. Please check your connection and try again.");
		}

		setLoading(false);
	};

	if (!isOpen) return null;

	const allPositions = jobPositions.map(job => job.title);

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 perspective-[1000px]">
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="absolute inset-0 bg-background/80 backdrop-blur-md"
						onClick={onClose}
					/>

					{/* Modal */}
					<motion.div 
						initial={{ opacity: 0, rotateX: 10, y: 50, scale: 0.9 }}
						animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
						exit={{ opacity: 0, rotateX: -10, y: 20, scale: 0.95 }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						className="relative glass-panel border border-primary/30 shadow-[0_0_50px_hsla(210,100%,50%,0.3)] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 custom-scrollbar transform-style-3d"
					>
						{/* Header */}
						<div className="sticky top-0 glass-panel border-b border-black/10 dark:border-transparent p-6 flex items-center justify-between shadow-md z-20">
							<h2 className="text-2xl font-bold font-display text-foreground flex items-center gap-3">
								<Network className="text-primary w-6 h-6" />
								Apply for Position
							</h2>
							<button
								onClick={onClose}
								className="p-2 hover:bg-white/50 dark:bg-foreground/10 rounded-lg transition-colors text-foreground/70 hover:text-foreground"
							>
								<X className="w-5 h-5" />
							</button>
						</div>

						{/* Form */}
						<form onSubmit={handleSubmit} className="p-8 space-y-6">
							{/* Name & Email */}
							<div className="grid md:grid-cols-2 gap-6">
								<div className="flex flex-col gap-2">
									<label className="text-foreground/80 font-semibold text-sm tracking-wide">
										Full Name <span className="text-primary">*</span>
									</label>
									<input
										type="text"
										value={formData.name}
										onChange={(e) => {
											setFormData({ ...formData, name: e.target.value });
											if (errors.name) setErrors({ ...errors, name: '' });
										}}
										placeholder="John Doe"
										className="w-full px-5 py-4 bg-background/40 border border-black/10 dark:border-transparent rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsla(210,100%,50%,0.3)] transition-all"
									/>
									{errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
								</div>

								<div className="flex flex-col gap-2">
									<label className="text-foreground/80 font-semibold text-sm tracking-wide">
										Email <span className="text-primary">*</span>
									</label>
									<input
										type="email"
										value={formData.email}
										onChange={(e) => {
											setFormData({ ...formData, email: e.target.value });
											if (errors.email) setErrors({ ...errors, email: '' });
										}}
										placeholder="john@example.com"
										className="w-full px-5 py-4 bg-background/40 border border-black/10 dark:border-transparent rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsla(210,100%,50%,0.3)] transition-all"
									/>
									{errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
								</div>
							</div>

							{/* Phone */}
							<div className="flex flex-col gap-2">
								<label className="text-foreground/80 font-semibold text-sm tracking-wide">
									Phone Number <span className="text-primary">*</span>
								</label>
								<div className="border border-black/10 dark:border-transparent rounded-xl px-2 py-2 bg-background/40 focus-within:border-primary focus-within:shadow-[0_0_15px_hsla(210,100%,50%,0.3)] transition-all">
									<PhoneInput
										country="in"
										value={formData.phone}
										onChange={(v) => {
											setFormData({ ...formData, phone: v });
											if (errors.phone) setErrors({ ...errors, phone: '' });
										}}
										containerClass="!w-full"
										inputClass="!w-full !text-base !bg-transparent !border-none !outline-none !shadow-none text-foreground placeholder:text-muted-foreground pl-12"
										buttonClass="!bg-transparent !border-none !outline-none"
										dropdownClass="!bg-gray-900 !text-foreground !border-black/10 dark:border-transparent"
									/>
								</div>
								{errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
							</div>

							{/* Position Selection */}
							<div className="flex flex-col gap-2">
								<label className="text-foreground/80 font-semibold text-sm tracking-wide">
									Position Applying For <span className="text-primary">*</span>
								</label>
								<select
									value={formData.position}
									onChange={(e) => {
										setFormData({ ...formData, position: e.target.value });
										if (errors.position) setErrors({ ...errors, position: '' });
									}}
									className="w-full px-5 py-4 bg-background/40 border border-black/10 dark:border-transparent rounded-xl text-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsla(210,100%,50%,0.3)] transition-all appearance-none"
								>
									<option value="" className="bg-gray-900 text-foreground">Select a position</option>
									{allPositions.map((pos) => (
										<option key={pos} value={pos} className="bg-gray-900 text-foreground">{pos}</option>
									))}
								</select>
								{errors.position && <p className="text-red-500 text-xs">{errors.position}</p>}
							</div>

							{/* Experience */}
							<div className="flex flex-col gap-2">
								<label className="text-foreground/80 font-semibold text-sm tracking-wide">
									Years of Experience <span className="text-primary">*</span>
								</label>
								<select
									value={formData.experience}
									onChange={(e) => {
										setFormData({ ...formData, experience: e.target.value });
										if (errors.experience) setErrors({ ...errors, experience: '' });
									}}
									className="w-full px-5 py-4 bg-background/40 border border-black/10 dark:border-transparent rounded-xl text-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsla(210,100%,50%,0.3)] transition-all appearance-none"
								>
									<option value="" className="bg-gray-900 text-foreground">Select experience</option>
									<option value="Fresher" className="bg-gray-900 text-foreground">Fresher (0-1 years)</option>
									<option value="1-2 years" className="bg-gray-900 text-foreground">1-2 years</option>
									<option value="2-4 years" className="bg-gray-900 text-foreground">2-4 years</option>
									<option value="4-6 years" className="bg-gray-900 text-foreground">4-6 years</option>
									<option value="6+ years" className="bg-gray-900 text-foreground">6+ years</option>
								</select>
								{errors.experience && <p className="text-red-500 text-xs">{errors.experience}</p>}
							</div>

							{/* Cover Letter */}
							<div className="flex flex-col gap-2">
								<label className="text-foreground/80 font-semibold text-sm tracking-wide">
									Cover Letter / Message (Optional)
								</label>
								<textarea
									value={formData.coverLetter}
									onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
									placeholder="Tell us about yourself and why you're interested in this position..."
									rows={4}
									className="w-full px-5 py-4 bg-background/40 border border-black/10 dark:border-transparent rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsla(210,100%,50%,0.3)] resize-none transition-all"
								/>
							</div>

							{/* Submit Button */}
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								type="submit"
								disabled={loading}
								className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_hsla(210,100%,50%,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_10px_hsla(210,100%,50%,0.2)]"
							>
								{loading ? (
									<span className="w-5 h-5 border-2 border-black/30 dark:border-transparent border-t-white rounded-full animate-spin" />
								) : (
									<>
										<Send className="w-5 h-5" />
										Submit Application
									</>
								)}
							</motion.button>
						</form>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}

function JobCard({ job, isExpanded, onToggle, onApply }: { job: JobPosition; isExpanded: boolean; onToggle: () => void; onApply: (position: string) => void }) {
	return (
		<motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-panel border-black/10 dark:border-transparent rounded-3xl overflow-hidden transition-all duration-500 group relative ${isExpanded ? 'border-primary/50 shadow-[0_0_40px_hsla(210,100%,50%,0.15)] bg-foreground/[0.05]' : 'hover:border-primary/30 hover:shadow-[0_0_30px_hsla(210,100%,50%,0.1)] hover:bg-foreground/[0.03]'}`}
        >
            {/* Glowing border effect */}
            {isExpanded && <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl pointer-events-none animate-pulse" />}
			
			<div
				className="p-8 cursor-pointer transition-colors duration-300 relative z-10"
				onClick={onToggle}
			>
				<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
					<div className="flex items-start gap-5">
						<div className={`p-4 rounded-2xl transition-colors duration-500 shadow-inner ${isExpanded ? 'bg-primary/20 text-foreground border border-primary/40' : 'bg-white/50 dark:bg-foreground/5 border border-black/10 dark:border-transparent text-primary group-hover:bg-primary/10'}`}>
							{job.icon}
						</div>
						<div className="flex flex-col gap-1">
							<h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
							<p className="text-primary/70 font-mono text-sm">{job.department}</p>
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-4">
						<span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border ${job.type === "Intern" ? "bg-accent/10 text-accent border-accent/20" : "bg-primary/10 text-primary border-primary/20"}`}>
							{job.type}
						</span>
						<span className="flex items-center gap-2 text-sm text-foreground/70">
							<MapPin className="w-4 h-4 text-primary" /> {job.location}
						</span>
						<span className="flex items-center gap-2 text-sm text-foreground/70">
							<Clock className="w-4 h-4 text-accent" /> {job.experience}
						</span>
						<motion.div 
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            className={`p-2 rounded-full border border-black/10 dark:border-transparent transition-colors duration-300 ${isExpanded ? 'bg-primary/20 text-primary border-primary/30' : 'group-hover:bg-white/50 dark:bg-foreground/10'}`}
                        >
                            <ChevronDown className="w-5 h-5 text-current" />
                        </motion.div>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{isExpanded && (
					<motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="px-8 overflow-hidden relative z-10"
                    >
						<div className="pb-8 border-t border-black/10 dark:border-transparent pt-8 space-y-8 bg-background/20 rounded-b-3xl mt-2">
                            <div>
                                <p className="text-muted-foreground leading-relaxed text-lg">{job.description}</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary" /> Responsibilities
                                    </h4>
                                    <ul className="space-y-3 pl-4">
                                        {job.responsibilities.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-muted-foreground hover:text-foreground/90 transition-colors">
                                                <span className="text-primary mt-1 text-sm font-bold">»</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-accent" /> Requirements
                                    </h4>
                                    <ul className="space-y-3 pl-4">
                                        {job.requirements.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-muted-foreground hover:text-foreground/90 transition-colors">
                                                <span className="text-accent mt-1 text-sm font-bold">»</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {job.niceToHave && (
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500" /> Nice to Have
                                    </h4>
                                    <ul className="space-y-3 pl-4">
                                        {job.niceToHave.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-muted-foreground hover:text-foreground/90 transition-colors">
                                                <span className="text-green-500 mt-1 text-sm font-bold">»</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="pt-6 border-t border-black/10 dark:border-transparent flex justify-end">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onApply(job.title);
                                    }}
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_hsla(210,100%,50%,0.4)] transition-all shadow-[0_0_10px_hsla(210,100%,50%,0.2)]"
                                >
                                    <Send className="w-5 h-5" />
                                    Apply Now
                                </motion.button>
                            </div>
                        </div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export default function Career() {
	const [expandedJob, setExpandedJob] = useState<string | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedPosition, setSelectedPosition] = useState("");

	const handleApply = (position: string) => {
		setSelectedPosition(position);
		setIsModalOpen(true);
	};

	return (
		<>
			<SEO
				title="Careers at OpenGridLabs - Join Our Team"
				description="Join OpenGridLabs and work on cutting-edge software, AI, and design projects. Explore open positions for developers, interns, and tech professionals. Remote and on-site opportunities available."
				canonical="/about/career"
				keywords="OpenGridLabs careers, software developer jobs, tech jobs, internship, remote jobs, AI engineer jobs, developer internship"
			/>
			<PageTitle
				label="Join Our Team"
				mainTitle="Career"
				subTitle="At"
				description="Join our dynamic team to innovate, grow, and shape the future with exciting opportunities, continuous learning, and meaningful impact."
			/>

			<div className="w-[90%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16 relative">
                <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
				<section className="relative z-10">
					<PageHeading
						preTitle="Open"
						mainTitle="Positions"
						postTitle=""
						icon={Briefcase}
					/>

					{/* Job Listings */}
					<div className="mt-16 space-y-6">
						{jobPositions.map((job) => (
							<JobCard
								key={job.id}
								job={job}
								isExpanded={expandedJob === job.id}
								onToggle={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
								onApply={handleApply}
							/>
						))}
					</div>
				</section>
			</div>

			{/* Application Modal */}
			<ApplicationModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				selectedPosition={selectedPosition}
			/>
		</>
	);
}
