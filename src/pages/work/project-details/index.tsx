import { useParams, Navigate } from "react-router";
import PageTitle from "../../../components/page-title";
import PageHeading from "../../../components/page-heading";
import SEO from "../../../components/seo";
import { CheckCircle2 } from "lucide-react";
import Indicator from "../../../components/ui/indicator";
import Carousel from "../../../components/ui/carousel";
import { projectsData } from "./data";
import type { ArchitectureLayer } from "./data";


const ARCH_COLORS = [
	{ bg: "rgba(59,130,246,0.08)",  border: "rgba(59,130,246,0.25)",  text: "hsl(210,100%,62%)" },
	{ bg: "rgba(139,92,246,0.08)",  border: "rgba(139,92,246,0.25)",  text: "hsl(270,80%,70%)" },
	{ bg: "rgba(16,185,129,0.08)",  border: "rgba(16,185,129,0.25)",  text: "hsl(160,75%,50%)" },
	{ bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.25)",  text: "hsl(38,100%,58%)" },
	{ bg: "rgba(6,182,212,0.08)",   border: "rgba(6,182,212,0.25)",   text: "hsl(190,90%,52%)" },
	{ bg: "rgba(236,72,153,0.08)",  border: "rgba(236,72,153,0.25)",  text: "hsl(330,80%,65%)" },
	{ bg: "rgba(249,115,22,0.08)",  border: "rgba(249,115,22,0.25)",  text: "hsl(24,100%,58%)" },
	{ bg: "rgba(124,58,237,0.08)",  border: "rgba(124,58,237,0.25)",  text: "hsl(258,80%,68%)" },
	{ bg: "rgba(244,63,94,0.08)",   border: "rgba(244,63,94,0.25)",   text: "hsl(350,85%,65%)" },
];

function ArchitectureDiagram({ layers }: { layers: ArchitectureLayer[] }) {
	return (
		<div className="flex flex-col items-center w-full gap-0">
			{layers.map((layer, li) => {
				const c = ARCH_COLORS[li % ARCH_COLORS.length];
				return (
					<div key={li} className="w-full flex flex-col items-center">
						{/* Layer card */}
						<div className="w-full rounded-2xl overflow-hidden" style={{ border: `1px solid ${c.border}` }}>
							{/* Header */}
							<div className="px-4 sm:px-5 py-2.5" style={{ background: c.bg, borderBottom: `1px solid ${c.border}` }}>
								<span className="text-xs sm:text-sm font-bold tracking-widest uppercase" style={{ color: c.text }}>
									{layer.title}
								</span>
							</div>
							{/* Items */}
							<div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
								{layer.items.map((item, ii) => (
									<div key={ii} className="rounded-xl px-3 sm:px-4 py-2.5 sm:py-3" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
										<p className="text-xs sm:text-sm font-semibold text-foreground">{item.name}</p>
										{item.detail && (
											<p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">{item.detail}</p>
										)}
									</div>
								))}
							</div>
						</div>

						{/* Connector */}
						{li < layers.length - 1 && (
							<div className="flex flex-col items-center my-2 gap-1">
								{layer.connector && (
									<span className="text-[11px] text-muted-foreground font-medium tracking-wide px-2 py-0.5 rounded-full bg-foreground/5 border border-border">
										{layer.connector}
									</span>
								)}
								<svg width="16" height="20" viewBox="0 0 16 20" className="text-muted-foreground/40">
									<path d="M8 0 L8 14 M3 9 L8 14 L13 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}

export default function ProjectDetails() {
	const { projectId } = useParams<{ projectId: string }>();

	if (!projectId || !projectsData[projectId]) {
		return <Navigate to="/work" replace />;
	}

	const project = projectsData[projectId];

	return (
		<>
			<SEO
				title={`${project.title} - Case Study`}
				description={project.overview.slice(0, 160)}
				canonical={`/work/${projectId}`}
				keywords={project.technologies.join(", ")}
			/>
			<PageTitle
				label={project.category}
				mainTitle={project.title}
				subTitle="Project Detail"
				description={project.description}
			/>

			<div className="w-[90%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-16">
				{/* Project Overview */}
				<section>
					<PageHeading
						preTitle="Project"
						mainTitle="Overview"
						postTitle=""
					/>
					<div className="mt-8 space-y-6">
						<p className="text-lg text-muted-foreground leading-relaxed">
							{project.overview}
						</p>

						<div className={`grid grid-cols-1 gap-6 mt-8 ${project.teamSize ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
							<div className="bg-white/50 dark:bg-foreground/5 border border-border rounded-xl p-6">
								<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">Client</h3>
								<p className="text-xl font-semibold text-foreground">{project.client}</p>
							</div>
							<div className="bg-white/50 dark:bg-foreground/5 border border-border rounded-xl p-6">
								<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">Duration</h3>
								<p className="text-xl font-semibold text-foreground">{project.duration}</p>
							</div>
							{project.teamSize && (
								<div className="bg-white/50 dark:bg-foreground/5 border border-border rounded-xl p-6">
									<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">Team</h3>
									<p className="text-xl font-semibold text-foreground">{project.teamSize}</p>
								</div>
							)}
							<div className="bg-white/50 dark:bg-foreground/5 border border-border rounded-xl p-6">
								<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">Category</h3>
								<p className="text-xl font-semibold text-foreground">{project.category}</p>
							</div>
						</div>
					</div>
				</section>

				{/* Media Section: Video -> Image Carousel -> GIF Carousel */}
				{(project.videoUrl || (project.galleryImages && project.galleryImages.length > 0) || (project.galleryGifs && project.galleryGifs.length > 0)) && (
					<section className="space-y-12">
						{/* Video Section */}
						{project.videoUrl && (
							<div>
								<PageHeading
									preTitle="Project"
									mainTitle="Video"
									postTitle="Demo"
								/>
								<div className="mt-8 rounded-xl border border-border bg-white/50 dark:bg-foreground/5 min-h-[220px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center">
									<video
										src={project.videoUrl}
										controls
										className="w-full h-full object-contain max-h-[600px]"
									>
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						)}

						{/* Image Carousel */}
						{project.galleryImages && project.galleryImages.length > 0 && (
							<div>
								<PageHeading
									preTitle="Project"
									mainTitle="Gallery"
									postTitle=""
								/>
								<div className="mt-8">
									<Carousel items={project.galleryImages} captions={project.galleryImageCaptions} />
								</div>
							</div>
						)}

						{/* GIF Carousel */}
						{project.galleryGifs && project.galleryGifs.length > 0 && (
							<div>
								<PageHeading
									preTitle="Project"
									mainTitle="GIFs"
									postTitle=""
								/>
								<div className="mt-8">
									<Carousel items={project.galleryGifs} />
								</div>
							</div>
						)}
					</section>
				)}

				{/* Architecture */}
				{project.architecture && (
					<section>
						<PageHeading preTitle="System" mainTitle="Architecture" postTitle="" />
						<div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
							<p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
								{project.architecture.description}
							</p>
							<ArchitectureDiagram layers={project.architecture.layers} />
						</div>
					</section>
				)}

				{/* Technologies */}
				<section>
					<PageHeading
						preTitle="Technologies"
						mainTitle="Used"
						postTitle=""
					/>
					<div className="mt-8 flex flex-wrap gap-3">
						{project.technologies.map((tech, idx) => (
							<div
								key={idx}
								className="bg-white/50 dark:bg-foreground/10 border border-border rounded-lg px-4 py-2 text-foreground font-medium"
							>
								{tech}
							</div>
						))}
					</div>
				</section>

				{/* Challenges & Solutions */}
				<section className="grid md:grid-cols-2 grid-cols-1 gap-8">
					<div>
						<div className="mb-6">
							<Indicator />
							<h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-3">Challenges</h2>
						</div>
						<ul className="space-y-4">
							{project.challenges.map((challenge, idx) => (
								<li key={idx} className="flex gap-3">
									<div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-sm font-bold mt-1">
										{idx + 1}
									</div>
									<p className="text-muted-foreground flex-1">{challenge}</p>
								</li>
							))}
						</ul>
					</div>

					<div>
						<div className="mb-6">
							<Indicator />
							<h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-3">Solutions</h2>
						</div>
						<ul className="space-y-4">
							{project.solutions.map((solution, idx) => (
								<li key={idx} className="flex gap-3">
									<CheckCircle2 className="flex-shrink-0 w-6 h-6 text-green-500 mt-1" />
									<p className="text-muted-foreground flex-1">{solution}</p>
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* Key Features */}
				<section>
					<PageHeading
						preTitle="Key"
						mainTitle="Features"
						postTitle=""
					/>
					<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
						{project.features.map((feature, idx) => (
							<div
								key={idx}
								className="bg-white/50 dark:bg-foreground/5 border border-border rounded-lg p-4 flex items-start gap-3"
							>
								<CheckCircle2 className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
								<p className="text-foreground">{feature}</p>
							</div>
						))}
					</div>
				</section>

				{/* Results & Impact */}
				<section>
					<PageHeading
						preTitle="Results"
						mainTitle="& Impact"
						postTitle=""
					/>
					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{project.results.map((result, idx) => (
							<div
								key={idx}
								className="relative bg-gradient-to-br from-foreground/10 to-foreground/5 border border-border rounded-xl p-6 overflow-hidden"
							>
								<div className="absolute -top-4 -right-4 w-20 h-20 bg-white/50 dark:bg-foreground/5 rounded-full"></div>
								<div className="relative z-10">
									<h3 className="text-sm uppercase text-muted-foreground font-semibold mb-2">
										{result.metric}
									</h3>
									<p className="text-3xl font-bold text-foreground">{result.value}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</>
	);
}
