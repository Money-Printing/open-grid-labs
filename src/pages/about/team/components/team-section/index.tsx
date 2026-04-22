import { useState, useMemo } from "react";
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
			className="w-full flex flex-col items-center relative justify-center gap-12 py-20"
		>
            <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
			<PageHeading
				preTitle="Meet"
				mainTitle="Our"
				postTitle="Brilliant Team"
			/>

			{/* Search and Filter Section */}
			<div className="w-full w-[90%] max-w-[1400px] mx-auto flex flex-col gap-8 mt-10 relative z-10 px-4">
				{/* Search Bar */}
				<div className="w-full max-w-2xl mx-auto relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
					<input
						type="text"
						placeholder="Search by name, role, or expertise..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="relative w-full px-8 py-5 rounded-2xl glass-panel border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all bg-black/40"
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
									? "bg-primary/20 border-primary text-white shadow-[0_0_15px_hsla(210,100%,50%,0.3)]"
									: "bg-white/5 border-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
							}`}
						>
							{dept}
						</button>
					))}
				</div>
			</div>

			{/* Results Count */}
			<div className="w-full w-[90%] max-w-[1400px] mx-auto text-left px-4 mt-6">
				<p className="text-muted-foreground font-mono">
					Showing <span className="text-primary font-bold">{filteredMembers.length}</span> {filteredMembers.length === 1 ? 'member' : 'members'}
				</p>
			</div>

			{/* Team Grid */}
			<div className="w-full w-[90%] max-w-[1400px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-4 mt-4">
				{filteredMembers.map((member, idx) => (
					<div
						key={idx}
						className="group relative flex flex-col glass-panel border border-white/5 rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-[0_0_30px_hsla(210,100%,50%,0.15)] transition-all duration-500 hover:-translate-y-2"
					>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
						{/* Image Section */}
						<div className="relative h-[340px] w-full overflow-hidden bg-white/5 border-b border-white/10">
							<div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                            <img
								alt={member.name}
								src={member.img}
								className={`object-cover w-full h-full transition duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale-[20%] ${member.imgPosition}`}
							/>
						</div>

						{/* Content Section */}
						<div className="flex flex-col gap-4 p-8 relative z-20">
							<div className="flex flex-col gap-1">
								<h3 
									className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors cursor-pointer"
								>
									{member.name}
								</h3>
								<p className="text-base text-primary/80 font-medium tracking-wide">{member.title}</p>
							</div>

							<div className="flex items-center gap-3 text-sm text-muted-foreground">
								<svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								<span className="font-mono">{member.department}</span>
							</div>

							{/* Expertise Tags */}
							<div className="flex flex-wrap gap-2 mt-4">
								{member.expertise.slice(0, 3).map((exp, i) => (
									<span
										key={i}
										className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-white/5 border border-white/10 text-white/80 rounded-full group-hover:border-primary/30 group-hover:text-white transition-colors"
									>
										{exp}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			{/* No Results Message */}
			{filteredMembers.length === 0 && (
				<div className="w-full text-center py-24 glass-panel border gap-4 flex flex-col border-white/5 rounded-3xl max-w-2xl mx-auto">
					<p className="text-2xl text-white font-display">No team members found.</p>
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
