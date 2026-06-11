import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Activity, 
	Database,
	Zap,
	Paintbrush
} from "lucide-react";
import SEO from "../../../../components/seo";
import MeasurableResults from "../../../../components/measurable-results";
import StatsGrid from "../../../../components/stats-grid";
import CaseStudyHero from "../../../../components/case-study-hero";
import ChallengesSolutions from "../../../../components/challenges-solutions";
import CaseStudyTimeline from "../../../../components/case-study-timeline";
import CaseStudyArchitecture from "../../../../components/case-study-architecture";
import CaseStudyBackground from "../../../../components/case-study-background";
import CaseStudyQuote from "../../../../components/case-study-quote";
import CaseStudySuccessFactors from "../../../../components/case-study-success-factors";
import CaseStudyFaq from "../../../../components/case-study-faq";
import CaseStudyCta from "../../../../components/case-study-cta";

const STATS = [
	{ value: "67%", label: "Increase in event registration year-on-year", accent: "from-cyan-500 to-blue-600" },
	{ value: "8", label: "Poster formats across the campaign series", accent: "from-blue-500 to-indigo-600" },
	{ value: "5 wk", label: "Brief to print-ready campaign", accent: "from-indigo-500 to-purple-600" },
	{ value: "41%", label: "Attendees who kept the conference poster", accent: "from-rose-500 to-pink-500" }
];

const CHALLENGES = [
	{ text: "Prior poster design was visually unremarkable in a context full of competing visual communication" },
	{ text: "Information-first hierarchy meant event details were prominent and visual impact was absent" },
	{ text: "No consistent poster series identity — each format looked like a different campaign" },
	{ text: "Posters were discarded immediately — zero takeaway value or collectibility" },
	{ text: "Digital versions performed poorly on social — design designed for print, not for screen sharing" }
];

const SOLUTIONS = [
	{ text: "A bold typographic-led concept with the conference name as the primary visual element at display scale" },
	{ text: "A design system for the poster series creating visual consistency across 8 formats" },
	{ text: "Colour usage as emotional rather than informational — a single bold palette choice per series" },
	{ text: "Speaker and detail hierarchy placing information where the eye arrives after the concept" },
	{ text: "Digital-optimised variants with the same concept adapted for social sharing dimensions" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Concept", items: ["Visual exploration", "Hierarchy strategy", "Typography scale", "Mood & energy"], color: "hsl(180,100%,50%)" },
	{ title: "System", items: ["Poster series identity", "Colour system", "Format adaptations", "Campaign consistency"], color: "hsl(200,100%,45%)" },
	{ title: "Production", items: ["Typographic refinement", "Layout precision", "Image integration", "Print & digital specs"], color: "hsl(220,100%,55%)" },
	{ title: "Distribution", items: ["Print-ready PDFs", "Digital social formats", "OOH specifications", "Venue dressing files"], color: "hsl(240,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Concept Development (Weeks 1–2)",
		desc: "OpenGridLabs explored three distinct visual concepts — each leading with a different visual strategy — before presenting to the event team. The chosen concept led with the conference name at maximum typographic scale, using the poster's entire surface as a typographic canvas. Supporting information was layered in smaller, clearly legible type.",
		accent: "from-cyan-500 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Series Design & System (Weeks 3–4)",
		desc: "The winning concept was developed into an 8-format poster series: A0, A1, and A3 print posters, a 6-sheet OOH format, venue dressing banners, and three social media formats. The series identity — consistent visual language with format-specific adaptations — was designed to work as a cohesive campaign across all distribution contexts.",
		accent: "from-blue-500 to-indigo-500"
	},
	{
		number: "Phase 3",
		title: "Production & Distribution (Week 5)",
		desc: "All formats were produced to press-ready and digital-export standards. OOH specifications were prepared for the outdoor print supplier. Venue dressing files were delivered in the format required by the venue's production team.",
		accent: "from-indigo-500 to-purple-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Event registration year-on-year", before: "Baseline", after: "+67%", change: "+67%" },
	{ metric: "Posters kept by attendees", before: "~5% (no data)", after: "41%", change: "41%" },
	{ metric: "Social shares of poster creative", before: "Low", after: "High (digital design optimised)", change: "High (digital design optimised)" },
	{ metric: "'Didn't hear about it' non-attendee response", before: "Top response", after: "Not in top 5", change: "Not in top 5" },
	{ metric: "Press coverage of event promotion", before: "Minimal", after: "3 trade press pickups", change: "3 trade press pickups" },
	{ metric: "Internal event team satisfaction", before: "3.1/5", after: "4.7/5", change: "4.7/5" }
];

const SUCCESS_FACTORS = [
	{
		title: "Attention before information",
		desc: "A poster no one stops to look at communicates nothing, regardless of how clearly the information is presented. The design brief was reversed: earn the glance first, then deliver the message. The typography at display scale earns the glance; the hierarchy delivers the information."
	},
	{
		title: "A series compounds the campaign",
		desc: "Eight consistently designed formats that look like the same campaign have more cumulative impact than eight independently designed materials that each start from zero. The series identity made the campaign feel larger than any individual format."
	},
	{
		title: "Collectibility is shareability",
		desc: "A poster well-designed enough that someone keeps it continues promoting the event beyond the event itself. The 41% retention figure was not predicted or planned — it was a consequence of designing for intrinsic value rather than purely informational communication."
	}
];

const FAQS = [
	{
		q: "What makes an effective event poster?",
		a: "An effective event poster prioritises visual impact over information density. The design should earn attention at a distance — through bold typography, strong colour, or a striking graphic concept — before delivering the event details. Information hierarchy should direct the eye from the attention-earning element to the essential details (event name, date, location, URL) in order of importance."
	},
	{
		q: "What resolution should a poster be designed at?",
		a: "Print posters should be designed at 300dpi at the final output size, or as vector artwork scalable to any size. Large format posters (A0 and above) are commonly accepted at 100–150dpi at final size due to their viewing distance. Digital poster formats should be designed at 72–96dpi in RGB at the correct pixel dimensions for their display context."
	}
];

export default function PosterDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Poster Design Campaign Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned a technology conference's poster campaign around bold typography, lifting registrations 67%."
				canonical="/services/digital-experience/poster-design"
				keywords="Poster Design, Event Poster, Typographic Poster, Print Poster, Poster Series, Bold Design, Conference Design, Campaign Design, OOH Design, Graphic Design"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Cyan Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(330,100%,45%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/digital-experience" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to Digital Experience Design
					</Link>
				</div>

				<CaseStudyHero 
					categoryTag="Case Study · Graphic Design"
					title="How a Bold Poster Campaign Increased Event Registration 67% and Produced Posters Attendees Actually Kept"
					description="A company running an annual conference had been producing promotional posters that communicated the event details clearly and attracted nobody's attention. The design was functional, professional, and forgettable. OpenGridLabs redesigned the conference poster campaign around a single principle: a poster must earn attention before it earns engagement. Bold typography, a strong visual concept, and a cohesive series increased registration 67% year-on-year."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / Events (anonymised)" },
						{ label: "Scope", value: "Conference poster series — 8 formats" },
						{ label: "Timeline", value: "5 weeks" },
						{ label: "Distribution", value: "Digital, OOH, venue dressing, print collateral" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-cyan-500/30"
					hoverTextClass="group-hover:text-cyan-500"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Paintbrush className="w-5 h-5" />}
					contextParagraphs={[
						"Our client runs an annual technology conference that had been growing in quality but not in registration numbers. The event was excellent once people were there; getting them to register was the problem. Post-event surveys had flagged 'didn't hear about it' as the top reason non-attendees gave — which, for a company with a strong industry presence, pointed to a communication problem rather than an awareness problem. The promotional materials, including the poster campaign, were not creating attention.",
						"The prior year's posters were typical professional conference design: the logo at the top, the event date and location in the middle, a list of headline speakers at the bottom, and a website URL below that. It contained all the necessary information and generated none of the visual impact needed to make someone stop and look. OpenGridLabs designed from the opposite brief: earn attention first, communicate information second.",
						"Poster design is the discipline of communicating a message on a single printed or digital surface in a way that earns attention from a passing audience. Unlike brochures or websites, a poster has one chance to stop someone who is not looking for it. Effective poster design prioritises visual impact — typically through bold typography, strong imagery, or a striking graphic concept — over information density, using hierarchy to direct the eye to the most important element first."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Poster Design?"
					definitionText="Poster design is the discipline of communicating a message on a single printed or digital surface in a way that earns attention from a passing audience. Unlike brochures or websites, a poster has one chance to stop someone who is not looking for it. Effective poster design prioritises visual impact — typically through bold typography, strong imagery, or a striking graphic concept — over information density, using hierarchy to direct the eye to the most important element first."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-indigo-500/10"
					definitionIconBorderClass="border-indigo-500/20"
					definitionIconColorClass="text-indigo-400"
					glowColorClass="bg-indigo-400"
					gradientFromClass="from-indigo-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Challenges & Solutions"}
					description={"Reversing the hierarchy to earn the audience's glance first and deliver the details second."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Poster Design Process"}
					description={"A standardized layout system mapping visual concept exploration, format adaptation rules, and typographic precision."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project."}
					rightColumnTitle={"Poster Production Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A five-week design discovery, series layout mapping, and final press delivery timeline."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(195,100%,45%)", "hsl(210,100%,40%)" ]}
					axisGradientClass={"from-cyan-500 via-blue-500 to-indigo-500"}
					badgeColorClass={"text-cyan-500 bg-cyan-500/10 border-cyan-500/20"}
				/>

				<MeasurableResults 
					description="Prioritizing typographic impact and visual series consistency lifted registrations and brand recall."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The first time I saw it full-size on the display board I just stopped. It looked like the poster for the biggest event of the year. Which is exactly what it is — we just never looked like it before."}
					author={"Event Director"}
					subtitle={"Confidential Technology Company"}
					accentLineClass={"bg-cyan-500"}
					iconColorClass={"text-cyan-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-cyan-500/20"}
					iconColorClass={"text-cyan-500"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-cyan-500"}
					activeChevronColorClass={"text-cyan-500"}
				/>

				<CaseStudyCta 
					title={"Posters that communicate everything and attract nobody?"}
					description={"OpenGridLabs designs poster campaigns — bold concepts, typographic impact, and cohesive series — that earn attention first and communicate brilliantly second."}
					moreCaseStudiesLink={"/services/digital-experience"}
					glowBgClass={"bg-cyan-400"}
					iconColorClass={"text-cyan-500"}
					btnGradientClass={"from-cyan-500 to-blue-500"}
					btnShadowColor={"6,182,212,0.2"}
				/>
			</div>
		</>
	);
}
