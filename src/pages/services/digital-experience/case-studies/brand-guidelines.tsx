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
	{ value: "82%", label: "Reduction in off-brand materials produced", accent: "from-amber-500 to-orange-600" },
	{ value: "30%", label: "Design team time reclaimed from corrections", accent: "from-yellow-500 to-amber-600" },
	{ value: "400", label: "Employees with consistent brand access", accent: "from-orange-500 to-red-600" },
	{ value: "10 wk", label: "Fragmented conventions to published standards", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "No authoritative brand document — brand knowledge existed only in individual designers' heads" },
	{ text: "Design team spending 30% of time correcting off-brand materials produced by other teams" },
	{ text: "Every new agency or freelancer required extensive briefing with inconsistent results" },
	{ text: "No specified tone of voice — written communications varied dramatically in character" },
	{ text: "Brand colours existed in multiple conflicting versions across different file types and systems" }
];

const SOLUTIONS = [
	{ text: "A comprehensive brand guidelines document covering strategy, visual identity, voice, and applications" },
	{ text: "Interactive digital brand portal with searchable content and directly downloadable assets" },
	{ text: "A do/don't misuse guide with real examples making correct application concrete" },
	{ text: "Tone of voice section with before/after rewrites for common communication types" },
	{ text: "A quick-start guide for non-designers covering the five most common application scenarios" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Brand Story", items: ["Vision & mission", "Positioning", "Personality", "Our audience", "What we believe"], color: "hsl(45,100%,50%)" },
	{ title: "Visual Identity", items: ["Logo system", "Colour", "Typography", "Imagery", "Icons", "Motion", "Clear space rules"], color: "hsl(35,100%,50%)" },
	{ title: "Voice & Tone", items: ["Brand voice attributes", "Tone by channel", "Writing principles", "Do/don't examples"], color: "hsl(20,100%,50%)" },
	{ title: "Applications", items: ["Digital templates", "Print templates", "Social media", "Email", "Presentation", "Partner co-brand"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Content Inventory & Structure (Weeks 1–3)",
		desc: "OpenGridLabs audited all existing brand decisions across files, Slack messages, emails, and tribal knowledge. Every rule that existed was extracted, validated, and catalogued. The guidelines structure was designed to answer the questions that came in most frequently — the document was organised around how it would be used, not how a designer would think about brand.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Writing, Design & Portal Build (Weeks 4–8)",
		desc: "The guidelines were written and designed simultaneously — the formatting of the document was itself an expression of the brand it was describing. The interactive brand portal was built with direct asset download, section navigation, and a search function. The misuse guide was produced using real examples collected during the audit phase.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Internal Launch & Enablement (Weeks 9–10)",
		desc: "The brand guidelines were launched internally with a company-wide presentation, a department-by-department 'how this affects you' summary, and a recorded walkthrough available asynchronously. Agency and freelance partners were briefed in dedicated sessions. A quarterly brand review cadence was established to keep the guidelines current.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Off-brand materials produced", before: "Baseline", after: "-82%", change: "-82%" },
	{ metric: "Design team correction time", before: "30% of capacity", after: "<5%", change: "<5%" },
	{ metric: "Agency first-round approval rate", before: "~30%", after: "~85%", change: "~85%" },
	{ metric: "Partner brand compliance", before: "Low", after: "High (portal-guided)", change: "High (portal-guided)" },
	{ metric: "Brand colour consistency", before: "3 conflicting versions", after: "1 authoritative system", change: "1 authoritative system" },
	{ metric: "New-joiner brand onboarding time", before: "Ad hoc", after: "Self-service (2 hrs)", change: "Self-service (2 hrs)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Written for the user, not the designer",
		desc: "Brand guidelines written as a designer's reference document use terminology and assume knowledge that non-designers don't have. Writing the guidelines for their actual primary audience — the team member creating a presentation, the social media manager making a post — produced a document that was genuinely used rather than consulted occasionally."
	},
	{
		title: "A portal changes the access pattern",
		desc: "A PDF brand guidelines document gets saved, lost, and outdated. An interactive portal with search, direct downloads, and a version date is how a brand document becomes a brand system. The access pattern determines the usage pattern."
	},
	{
		title: "Real misuse examples prevent real misuse",
		desc: "Showing a stretched logo or an off-brand colour application — with a clear explanation of why it's wrong — is more instructive than a list of rules. Real examples make the standards concrete and the mistakes recognisable before they happen."
	}
];

const FAQS = [
	{
		q: "What should brand guidelines include?",
		a: "Comprehensive brand guidelines should include: brand story and positioning, logo system and usage rules, colour system with exact values, typography hierarchy, imagery and photography guidelines, tone of voice with examples, and application examples for all common touchpoints. The depth of each section should reflect how often it is used and how commonly it is misapplied."
	},
	{
		q: "How often should brand guidelines be updated?",
		a: "Brand guidelines should be reviewed at minimum annually and updated whenever a significant brand decision is made — a new product sub-brand, a visual identity evolution, or a change in positioning. Guidelines that drift out of date become ignored; a defined update cadence keeps them authoritative."
	}
];

export default function BrandGuidelinesCaseStudy() {
	return (
		<>
			<SEO
				title="Brand Guidelines Design Case Study | OpenGridLabs"
				description="How OpenGridLabs produced comprehensive brand book guidelines and a brand portal, reducing off-brand materials 82% for a 400-person enterprise."
				canonical="/services/digital-experience/brand-guidelines"
				keywords="Brand Guidelines, Brand Book, Brand Standards, Brand Manual, Brand Style Guide, Brand Consistency, Brand Portal, Brand Documentation, Brand Governance, Brand Identity"
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
					title="How a Comprehensive Brand Book Reduced Off-Brand Materials 82% and Let the Design Team Scale Without Adding Headcount"
					description="A 400-person company had a brand — a logo, some colours, a rough sense of who they were — but no authoritative document that specified how to apply any of it. The design team spent 30% of their time correcting materials produced by non-designers. Every new agency, freelancer, and partner started from scratch. OpenGridLabs produced brand guidelines that made the brand self-service: complete enough to answer almost any question without asking a designer."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / Enterprise (anonymised)" },
						{ label: "Scope", value: "Comprehensive brand guidelines — strategy through application" },
						{ label: "Timeline", value: "10 weeks" },
						{ label: "Format", value: "PDF guidelines + interactive brand portal + asset library" }
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
					contextIcon={<Paintbrush className="w-5 h-5" />}
					contextParagraphs={[
						"Our client had a 400-person organisation spread across four offices and a network of agency and freelance partners. The brand had been built over five years through an accumulation of individual decisions, and while there was a general visual direction that people recognised as 'the brand', there were no documented rules. A logo file existed on an internal drive that most people didn't know about. The brand colours were listed in a Slack message from 2021.",
						"The cost was measurable. The design team tracked that 30% of their time was spent correcting materials produced by non-designers — presentations, social posts, event materials — that misused colours, applied the logo incorrectly, or used off-brand typefaces. Every new agency partner required a two-hour briefing that still produced a first round of work that needed significant correction. The brand existed; the instructions for using it did not.",
						"Brand guidelines (also called a brand book, brand manual, or brand standards) are the authoritative reference document that specifies how every element of a brand should be applied — the correct logo files and usage rules, the exact colour values, the typographic hierarchy, the imagery style, the tone of voice, and examples of correct and incorrect application. Good brand guidelines are specific enough to answer real questions and accessible enough to be used by non-designers."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Are Brand Guidelines?"
					definitionText="Brand guidelines (also called a brand book, brand manual, or brand standards) are the authoritative reference document that specifies how every element of a brand should be applied — the correct logo files and usage rules, the exact colour values, the typographic hierarchy, the imagery style, the tone of voice, and examples of correct and incorrect application. Good brand guidelines are specific enough to answer real questions and accessible enough to be used by non-designers."
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
					description={"Replacing fragmented brand visual guidelines with an authoritative self-service documentation system."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Brand Guidelines Structure"}
					description={"An authoritative guidelines structure organizing brand narrative, logo clear-space rules, written voice style, and print/digital application setups."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Every stage produces a decision that makes the next stage faster. Strategy before design, research before concepts, concepts before execution — each gate eliminates the rework that comes from skipping it."}
					rightColumnTitle={"Guidelines Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A structured 10-week cycle collecting tribal knowledge, drafting portals, and onboarding team channels."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="Deploying a searchable interactive portal and do/don't visual rules reduced corrections and improved partner alignment."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We spent a year correcting things that should never have been wrong. The brand book didn't just document the brand — it gave 400 people the instructions they'd never had. The correction queue went from a daily reality to an occasional exception."}
					author={"Brand Director"}
					subtitle={"Confidential Enterprise Company"}
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
					title={"Brand knowledge living in one designer's head?"}
					description={"OpenGridLabs produces brand guidelines — comprehensive, portal-accessible, and written for real users — that make the brand self-service and the design team's corrections unnecessary."}
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
