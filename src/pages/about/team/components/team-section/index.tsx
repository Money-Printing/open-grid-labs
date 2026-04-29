import React, { useState, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import PageHeading from "../../../../../components/page-heading";

const teamMembers = [
	{
		role: "Leader",
		title: "Co-Founder & CTO",
		name: "Priyanshu Dwivedi",
		img: '/team/Priyanshu_crop.jpg',
		imgPosition: "object-top",
		department: "Leadership",
		location: "India",
		expertise: ["Engineering", "Strategy", "Innovation"]
	},
	{
		role: "Strategic",
		title: "Co-Founder & CMO",
		name: "Rohan Sharma",
		img: '/team/rohan.jpg',
		imgPosition: "object-top",
		department: "Marketing",
		location: "India",
		expertise: ["Digital Marketing", "Brand Strategy", "Growth"]
	},
	{
		role: "Visionary",
		title: "Founding Team · Senior Developer",
		name: "Aman",
		img: '/team/aman.webp',
		imgPosition: "object-top",
		department: "Engineering",
		location: "India",
		expertise: ["Full Stack", "Architecture", "Development"]
	},
	{
		role: "Intelligence",
		title: "Founding Team · AI Head",
		name: "Ritilk Raushan",
		img: '/team/ritilk.jpg',
		imgPosition: "object-top",
		department: "AI & Research",
		location: "India",
		expertise: ["Machine Learning", "AI", "Data Science"]
	},
	{
		role: "Engaging",
		title: "Founding Team · SDET Lead",
		name: "Munesh Kushwah",
		img: '/team/Munesh_pro_pic.png',
		imgPosition: "object-top",
		department: "Quality Assurance",
		location: "India",
		expertise: ["Testing", "Automation", "Quality Control"]
	},
	{
		role: "Reliable",
		title: "Founding Team · Sales Head",
		name: "Abhinav",
		img: '/team/Abhinav.webp',
		imgPosition: "object-top",
		department: "Sales",
		location: "India",
		expertise: ["Sales", "Business Development", "Client Relations"]
	},
];

const departments = ["All", "Leadership", "Engineering", "Marketing", "AI & Research", "Quality Assurance", "Sales"];

function HoloCard({ member }: { member: typeof teamMembers[0] }) {
	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);

	const smoothX = useSpring(x, { stiffness: 300, damping: 30 });
	const smoothY = useSpring(y, { stiffness: 300, damping: 30 });

	const rotateX = useTransform(smoothY, [0, 1], [15, -15]);
	const rotateY = useTransform(smoothX, [0, 1], [-15, 15]);

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
		const rect = e.currentTarget.getBoundingClientRect();
		x.set((e.clientX - rect.left) / rect.width);
		y.set((e.clientY - rect.top) / rect.height);
	}

	function handleMouseLeave() {
		x.set(0.5);
		y.set(0.5);
	}

	return (
		<motion.div
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1000px" }}
			className="group relative flex flex-col glass-panel border border-black/5 dark:border-transparent rounded-[32px] overflow-hidden hover:border-primary/40 hover:shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500"
		>
			<div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
			
			<div style={{ transform: "translateZ(30px)" }} className="relative flex flex-col h-full">
				{/* Image Section */}
				<div className="relative h-[340px] w-full overflow-hidden bg-white/50 dark:bg-foreground/5 border-b border-black/10 dark:border-transparent rounded-t-[32px]">
					<div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
					<img
						alt={member.name}
						src={member.img}
						className={`object-cover w-full h-full transition duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale opacity-80 group-hover:opacity-100 ${member.imgPosition}`}
					/>
				</div>

				{/* Content Section */}
				<div className="flex flex-col gap-4 p-8 relative z-20 bg-background/40 backdrop-blur-md rounded-b-[32px]">
					<div className="flex flex-col gap-1">
						<h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
							{member.name}
						</h3>
						<p className="text-base text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-medium tracking-wide">
							{member.title}
						</p>
					</div>

					<div className="flex items-center gap-3 text-sm text-muted-foreground">
						<svg className="w-5 h-5 text-foreground/80 dark:text-foreground/60 dark:text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<span className="font-mono text-foreground/80 dark:text-foreground/60">{member.department}</span>
					</div>

					{/* Expertise Tags */}
					<div className="flex flex-wrap gap-2 mt-4">
						{member.expertise.slice(0, 3).map((exp, i) => (
							<span
								key={i}
								className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-white/50 dark:bg-foreground/5 border border-black/10 dark:border-transparent text-foreground/80 dark:text-foreground/60 rounded-full group-hover:border-primary/30 group-hover:text-foreground transition-colors"
							>
								{exp}
							</span>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default function TeamSection() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedDepartment, setSelectedDepartment] = useState("All");

	const filteredMembers = useMemo(() => {
		return teamMembers.filter(member => {
			const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				member.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				member.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase()));
			
			const matchesDepartment = selectedDepartment === "All" || member.department === selectedDepartment;
			
			return matchesSearch && matchesDepartment;
		});
	}, [searchQuery, selectedDepartment]);

	return (
		<section
			id="team-our-team"
			className="w-full flex flex-col items-center relative justify-center gap-12 py-32 overflow-hidden"
		>
            <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
			
			<PageHeading
				preTitle="Meet"
				mainTitle="Our"
				postTitle="Brilliant Team"
			/>

			{/* Search and Filter Section */}
			<div className="w-[90%] max-w-[1600px] mx-auto flex flex-col gap-8 mt-10 relative z-10 px-4">
				{/* Search Bar */}
				<div className="w-full max-w-2xl mx-auto relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
					<input
						type="text"
						placeholder="Search by name, role, or expertise..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="relative w-full px-8 py-5 rounded-3xl glass-panel border border-black/10 dark:border-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary shadow-lg dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all bg-background/40"
					/>
				</div>

				{/* Department Filters */}
				<div className="flex flex-wrap gap-4 justify-center">
					{departments.map((dept) => (
						<button
							key={dept}
							onClick={() => setSelectedDepartment(dept)}
							className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${
								selectedDepartment === dept
									? "bg-primary/20 border-primary text-foreground shadow-[0_0_20px_hsla(210,100%,50%,0.3)]"
									: "glass-panel border-black/5 dark:border-transparent text-muted-foreground hover:bg-white/50 dark:bg-foreground/10 hover:text-foreground"
							}`}
						>
							{dept}
						</button>
					))}
				</div>
			</div>

			{/* Results Count */}
			<div className="w-[90%] max-w-[1600px] mx-auto text-left px-4 mt-6 relative z-10">
				<p className="text-muted-foreground font-mono">
					Showing <span className="text-primary font-bold">{filteredMembers.length}</span> {filteredMembers.length === 1 ? 'member' : 'members'}
				</p>
			</div>

			{/* Team Grid */}
			<div className="w-[90%] max-w-[1600px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-4 mt-4 relative z-10">
				{filteredMembers.map((member, idx) => (
					<HoloCard key={idx} member={member} />
				))}
			</div>

			{/* No Results Message */}
			{filteredMembers.length === 0 && (
				<div className="w-full text-center py-24 glass-panel border gap-4 flex flex-col border-black/5 dark:border-transparent rounded-3xl max-w-2xl mx-auto relative z-10">
					<p className="text-2xl text-foreground font-display">No team members found.</p>
					<button
						onClick={() => {
							setSearchQuery("");
							setSelectedDepartment("All");
						}}
						className="mt-4 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/80 hover:shadow-[0_0_20px_hsla(210,100%,50%,0.4)] transition-all font-semibold mx-auto"
					>
						Clear Filters
					</button>
				</div>
			)}
		</section>
	);
}
