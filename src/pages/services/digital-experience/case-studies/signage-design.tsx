import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Activity, 
	Database,
	Zap,
	PaintbrushIcon
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
	{ value: "91%", label: "Visitors: 'space communicates company's character'", accent: "from-amber-500 to-orange-600" },
	{ value: "10 wk", label: "Design completion before office move", accent: "from-yellow-500 to-amber-600" },
	{ value: "18", label: "Branded touchpoints across the new space", accent: "from-orange-500 to-red-600" },
	{ value: "0", label: "Generic 'EXIT' signs used in the wayfinding system", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Generic fit-out plan with no brand integration — signage planned as functional rather than expressive" },
	{ text: "Six-week timeline from engagement to office move requiring immediate scope definition" },
	{ text: "Interior design already complete — environmental branding needed to work within fixed architectural decisions" },
	{ text: "No wayfinding system defined — fire safety and meeting room identification not yet specified" },
	{ text: "Reception and entrance area had no visual identity treatment beyond the landlord's standard hoarding" }
];

const SOLUTIONS = [
	{ text: "A wayfinding system using the brand typeface and colour system throughout — no generic signage" },
	{ text: "A reception logo wall using dimensional letters in the brand mark with a feature lighting treatment" },
	{ text: "Eight meeting rooms named after brand-relevant concepts with illustrated name plates" },
	{ text: "Four feature walls with large-scale typographic and illustrative treatments expressing brand values" },
	{ text: "External building signage and entrance treatment establishing street-level brand presence" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Discovery", items: ["Space plan review", "Brand personality mapping", "Content strategy for walls", "Supplier scoping"], color: "hsl(45,100%,50%)" },
	{ title: "Design", items: ["Wayfinding system", "Reception identity", "Feature walls", "External signage", "Room naming"], color: "hsl(35,100%,50%)" },
	{ title: "Production", items: ["Supplier specification", "Materials selection", "Installation brief", "Phased delivery"], color: "hsl(20,100%,50%)" },
	{ title: "Experience", items: ["Space walk-through", "Photography", "Brand story integration", "Future-phase plan"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Scope & Content Strategy (Weeks 1–2)",
		desc: "OpenGridLabs walked the space plan with the leadership team, mapping every surface and identifying the 18 brand touchpoints with the highest impact. A content strategy was written for each feature wall — what it would say, show, and communicate, and how it would relate to the brand narrative.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Design & Specification (Weeks 3–8)",
		desc: "Each of the 18 touchpoints was designed: the wayfinding system (specification and artwork for all directional and identification signs), the reception wall (dimensional letter specification and lighting brief), the four feature walls (large-format artwork for vinyl and direct print), and the external signage (planning specification and installation brief).",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Production & Installation (Weeks 9–14)",
		desc: "Production was managed across three specialist suppliers — signage, vinyl, and the dimensional reception piece. Installation was phased to meet the office move date. OpenGridLabs was present on installation day to ensure quality and make real-time adjustments.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Visitor survey — space communicates brand character", before: "Not measured", after: "91%", change: "91%" },
	{ metric: "Branded touchpoints in space", before: "0 (generic fit-out planned)", after: "18", change: "18" },
	{ metric: "Meeting room identification", before: "Standard room numbers", after: "Named and illustrated", change: "Named and illustrated" },
	{ metric: "External street-level brand presence", before: "None (landlord standard)", after: "Full branded entrance", change: "Full branded entrance" },
	{ metric: "Employee brand pride (pulse survey)", before: "Pre-move baseline", after: "+38% post-move", change: "+38% post-move" },
	{ metric: "Recruiter/candidate first impression", before: "—", after: "Consistently positive feedback", change: "Consistently positive feedback" }
];

const SUCCESS_FACTORS = [
	{
		title: "Every surface is a brand touchpoint",
		desc: "Spaces communicate whether they are designed to or not. A space with generic signage and no brand presence communicates that the brand wasn't considered. A space where every wall has been thought about communicates intentionality — which is itself a brand quality."
	},
	{
		title: "Wayfinding can carry brand voice",
		desc: "A wayfinding system using the brand typeface, the brand colour, and the brand's tone of voice is a branding system. A wayfinding system using generic ISO symbols and Arial is a compliance exercise. Both get people to the right meeting room; only one does it in a way that reinforces the brand."
	},
	{
		title: "Named rooms > numbered rooms",
		desc: "Meeting rooms named after concepts relevant to the brand's history, values, or aspirations give employees a vocabulary for talking about the space that reflects the brand, and give visitors something distinctive to notice and remember."
	}
];

const FAQS = [
	{
		q: "What is the difference between signage design and environmental branding?",
		a: "Signage design focuses on functional wayfinding and identification — getting people to the right place and meeting safety requirements. Environmental branding is a broader discipline that uses physical space to express brand identity and values — encompassing signage, but also feature walls, material choices, spatial narrative, and the brand experience of moving through a space."
	},
	{
		q: "What is a wayfinding system?",
		a: "A wayfinding system is a set of signs, symbols, and spatial cues that help people navigate a physical environment. A branded wayfinding system applies the organisation's visual identity to all navigational touchpoints — directional arrows, room identification, floor levels, and emergency information — creating a consistent visual experience throughout the space."
	}
];

export default function SignageDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Signage Design Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a complete environmental branding system for a new HQ — wayfinding, reception, feature walls, and external signage — achieving 91% brand character recognition from visitors."
				canonical="/services/digital-experience/signage-design"
				keywords="Signage Design, Environmental Branding, Office Branding, Wayfinding, Feature Walls, Reception Design, Brand Experience, Interior Brand Design, Dimensional Signage, Brand Identity"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Amber Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(45,100%,50%) 0%, hsl(35,100%,45%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Brand Identity"
					title="How Environmental Branding Transformed a New Office into a Brand Immersion That 91% of Visitors Said Communicated the Company's Character"
					description="A company moving into a significant new headquarters had a choice: fill the space with generic signage and some framed mission statements, or design the environment as a brand experience. OpenGridLabs designed a complete environmental branding system — reception identity, wayfinding, feature walls, external signage, and meeting room naming — that turned the new office into a three-dimensional expression of the brand."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / Growth-stage (anonymised)" },
						{ label: "Scope", value: "Complete environmental branding for new HQ" },
						{ label: "Timeline", value: "10 weeks design + 4 weeks production" },
						{ label: "Deliverables", value: "Wayfinding · Reception · Feature walls · External · Meeting rooms" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-amber-500/30"
					hoverTextClass="group-hover:text-amber-500"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<PaintbrushIcon className="w-5 h-5" />}
					contextParagraphs={[
						"Our client was moving from a serviced office into a purpose-built headquarters — their first permanent space, and one large enough to accommodate their 200-person team with room to grow. The fit-out was being managed by an interior design firm. The brand had not been briefed into the space design until OpenGridLabs was engaged, six weeks before the move, to produce the signage and environmental graphics.",
						"OpenGridLabs argued for a broader brief than 'signs' — the opportunity of a new headquarters was to design a space where the brand was present everywhere, not just at the reception desk and the fire exits. Every surface, every wall, every room name was an opportunity to express the brand's values, its history, its culture, and its character. The result was a 200-person space that clients, recruits, and partners consistently described as unlike any tech company office they'd visited.",
						"Environmental branding (also called experiential branding or brand environment design) is the practice of expressing a brand's identity through physical spaces — signage, wall graphics, wayfinding systems, reception areas, and architectural interventions. It makes a brand's values and character tangible and immersive, giving employees, clients, and visitors a three-dimensional experience of the brand that no digital touchpoint can replicate."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Environmental Branding?"
					definitionText="Environmental branding (also called experiential branding or brand environment design) is the practice of expressing a brand's identity through physical spaces — signage, wall graphics, wayfinding systems, reception areas, and architectural interventions. It makes a brand's values and character tangible and immersive, giving employees, clients, and visitors a three-dimensional experience of the brand that no digital touchpoint can replicate."
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
					description={"Transforming a generic fit-out into a 200-person brand environment across 18 fully designed touchpoints — on time for the office move."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Environmental Branding Process"}
					description={"A discovery-led process mapping every surface, designing every touchpoint, and managing production across specialist suppliers to hit the office move date."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Every stage produces a decision that makes the next stage faster. Strategy before design, research before concepts, concepts before execution — each gate eliminates the rework that comes from skipping it."}
					rightColumnTitle={"Environmental Branding Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A 14-week engagement from space walk-through and content strategy through design, production management, and on-site installation."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="A 200-person headquarters transformed into a three-dimensional brand experience — 18 touchpoints, zero generic signage, 91% visitor recognition."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Every recruit we've brought in since the move comments on the office. Not 'nice office' — specifically on the walls, the feel, the sense that someone cared about this place. That's exactly what we wanted: a space that does our recruiting pitch before the interview starts."}
					author={"Chief People Officer"}
					subtitle={"Confidential Technology Company"}
					accentLineClass={"bg-amber-500"}
					iconColorClass={"text-amber-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-amber-500/20"}
					iconColorClass={"text-amber-500"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-amber-500"}
					activeChevronColorClass={"text-amber-500"}
				/>

				<CaseStudyCta 
					title={"New space with no brand in it?"}
					description={"OpenGridLabs designs environmental branding systems — wayfinding, reception identity, feature walls, and external signage — that turn physical spaces into three-dimensional brand experiences."}
					moreCaseStudiesLink={"/services/digital-experience"}
					glowBgClass={"bg-amber-400"}
					iconColorClass={"text-amber-500"}
					btnGradientClass={"from-amber-500 to-orange-500"}
					btnShadowColor={"245,158,11,0.2"}
				/>
			</div>
		</>
	);
}
