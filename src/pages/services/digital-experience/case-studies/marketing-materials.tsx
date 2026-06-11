import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Activity, 
	Database,
	Zap,
	Megaphone
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
	{ value: "44%", label: "Lift in event lead generation", accent: "from-cyan-500 to-blue-600" },
	{ value: "1st", label: "Best stand award at primary trade show", accent: "from-blue-500 to-indigo-600" },
	{ value: "23", label: "Individual materials in the unified suite", accent: "from-indigo-500 to-purple-600" },
	{ value: "8 wk", label: "Brief to full campaign production", accent: "from-cyan-400 to-indigo-500" }
];

const CHALLENGES = [
	{ text: "No campaign concept connecting pre-event, event, and post-event materials visually" },
	{ text: "Different agencies producing different materials with inconsistent visual treatments" },
	{ text: "Booth graphics not connected to the pre-event email campaign, losing recognition benefit" },
	{ text: "Post-event follow-up materials that felt generic rather than experience-extending" },
	{ text: "23 materials required across the campaign with no consistent template or brief" }
];

const SOLUTIONS = [
	{ text: "A single campaign concept and visual language applied across all 23 materials" },
	{ text: "Pre-event: email graphics, social media assets, digital ads with the campaign concept" },
	{ text: "Event: booth backdrop, pull-up banners, table graphics, lanyard cards, printed handouts" },
	{ text: "Post-event: follow-up email templates, nurture sequence graphics, sales leave-behind PDF" },
	{ text: "Scalable campaign template system for internal production of future campaign assets" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Campaign Concept", items: ["Positioning brief", "Campaign idea", "Visual concept", "Headline & messaging hierarchy"], color: "hsl(180,100%,50%)" },
	{ title: "Design System", items: ["Campaign colour & typography", "Photographic treatment", "Graphic device", "Template grid"], color: "hsl(190,100%,45%)" },
	{ title: "Production", items: ["All 23 materials designed & produced", "Print and digital specifications", "Asset delivery"], color: "hsl(200,100%,40%)" },
	{ title: "Deployment", items: ["Pre-event assets", "Event materials", "Post-event follow-up", "Performance tracking"], color: "hsl(210,100%,35%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Campaign Concept & Visual Identity (Weeks 1–3)",
		desc: "OpenGridLabs developed the campaign concept — a single idea and visual language that could carry the brand's core message across every touchpoint. Three concept directions were presented before the campaign visual identity was established. The concept was tested against all 23 materials in sketch form to ensure it scaled before full production began.",
		accent: "from-cyan-500 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Production (Weeks 4–7)",
		desc: "All 23 materials were produced: digital assets (email headers, social graphics, display ads), print materials (booth graphics, pull-ups, handouts, leave-behinds), and post-event materials (email sequence graphics, follow-up PDF). Each material was reviewed against the campaign visual identity before sign-off.",
		accent: "from-blue-500 to-indigo-500"
	},
	{
		number: "Phase 3",
		title: "Delivery & Template System (Week 8)",
		desc: "All materials were delivered in production-ready formats. A campaign template system was built in Figma, allowing the internal team to produce future campaign assets within the established visual language without external design support for routine adaptations.",
		accent: "from-indigo-500 to-purple-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Event lead generation", before: "Baseline", after: "+44%", change: "+44%" },
	{ metric: "Trade show award", before: "None previously", after: "Best Stand (primary show)", change: "Best Stand (primary show)" },
	{ metric: "Visual consistency across touchpoints", before: "Low (produced separately)", after: "High (unified campaign)", change: "High (unified campaign)" },
	{ metric: "Pre-event email open rate", before: "Baseline", after: "+28%", change: "+28%" },
	{ metric: "Post-event follow-up response rate", before: "Baseline", after: "+31%", change: "+31%" },
	{ metric: "Campaign asset production (next event)", before: "8 weeks from scratch", after: "2 weeks (template system)", change: "2 weeks (template system)" }
];

const SUCCESS_FACTORS = [
	{
		title: "The concept is the campaign",
		desc: "A visual system without a concept is decoration. The campaign concept — a single idea that made the brand's value proposition vivid and memorable — was what made 23 different materials feel like one campaign rather than a collection of assets."
	},
	{
		title: "Recognition compounds across touchpoints",
		desc: "When the pre-event email and the event booth look like the same campaign, every person who saw the email recognises the booth and gets a recognition bonus. The cumulative effect of five consistent touchpoints is greater than the sum of five independent impressions."
	},
	{
		title: "Template systems extend the investment",
		desc: "A campaign concept strong enough to support future iterations — and a template system that enables them — turns a single campaign investment into a long-lived visual platform. The second event required two weeks of production rather than eight."
	}
];

const FAQS = [
	{
		q: "What should a trade show marketing materials suite include?",
		a: "A comprehensive trade show suite includes: large-format booth graphics (backdrop, banner stands), table materials (table covers, display stands), printed handouts (brochures, flyers, business cards), digital pre-event promotion (emails, social graphics, paid ads), and post-event follow-up materials (email sequence, leave-behind PDF). The visual connection between all items is as important as any individual item."
	},
	{
		q: "How far in advance should marketing materials be designed for a trade show?",
		a: "For trade shows with print materials, design should begin 8–12 weeks before the event to allow for design, review, print production (4–6 weeks for large format), and delivery. Digital materials can be produced more quickly but should begin no less than 4 weeks before the event to allow for review cycles and campaign launch before the show."
	}
];

export default function MarketingMaterialsCaseStudy() {
	return (
		<>
			<SEO
				title="Marketing Materials Campaign Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a complete trade show campaign materials suite, lifting lead generation by 44% and winning a best-stand award."
				canonical="/services/digital-experience/marketing-materials"
				keywords="Marketing Materials, Campaign Design, Trade Show Graphics, Event Marketing, Marketing Collateral, Campaign Assets, Unified Campaign, Print and Digital, Graphic Design"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Cyan Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(195,100%,45%) 50%, transparent 100%)`
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
					title="How a Unified Campaign Materials Suite Lifted Lead Generation 44% and Made the Brand Unmissable at Trade Shows"
					description="A company attending three major trade shows a year had been producing marketing materials event-by-event with no overarching campaign concept connecting them. The booth looked different from the pre-event emails, which looked different from the post-event follow-up. OpenGridLabs designed a complete, unified campaign materials suite — from digital pre-event promotion through physical booth presence to post-event nurture — producing a campaign so visually cohesive it won a trade show best-stand award and lifted lead generation 44%."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B Technology (anonymised)" },
						{ label: "Scope", value: "Full event campaign materials suite" },
						{ label: "Timeline", value: "8 weeks" },
						{ label: "Deliverables", value: "Digital · Print · Booth · Post-event · Digital ads" }
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
					contextIcon={<Megaphone className="w-5 h-5" />}
					contextParagraphs={[
						"Our client attends three major industry trade shows a year — their primary lead generation channel, representing a significant marketing budget. The creative had been produced reactively: a new design for each event, with no persistent campaign concept and no visual connection between the pre-event promotion, the event presence, and the post-event follow-up. Attendees who received a pre-event email and then visited the booth were encountering two different visual impressions.",
						"The fragmentation had a measurable cost: the brand wasn't building recognition across the event cycle, and follow-up materials felt disconnected from the experience at the event itself. OpenGridLabs proposed a different approach: a single campaign concept that expressed the core message with a distinctive visual identity, deployed consistently from the first pre-event email to the last post-event nurture — so every touchpoint reinforced the same impression.",
						"Marketing materials are the designed communications a company uses to promote its products or services — event collateral, campaign graphics, trade show materials, sales leave-behinds, promotional print, and digital campaign assets. Effective marketing materials apply a consistent campaign concept across all touchpoints, so each material reinforces the others and builds cumulative brand recognition rather than starting from scratch."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Are Marketing Materials?"
					definitionText="Marketing materials are the designed communications a company uses to promote its products or services — event collateral, campaign graphics, trade show materials, sales leave-behinds, promotional print, and digital campaign assets. Effective marketing materials apply a consistent campaign concept across all touchpoints, so each material reinforces the others and builds cumulative brand recognition rather than starting from scratch."
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
					description={"Unifying disjointed touchpoints into a unified marketing suite that scales lead conversion."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Marketing Materials Campaign Process"}
					description={"Our process starts with messaging mapping, establishes styling parameters, executes asset production, and builds template systems."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project."}
					rightColumnTitle={"Campaign Materials Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"An 8-week visual identity and production roadmap from sketch layouts to template deployment."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(195,100%,45%)", "hsl(210,100%,40%)" ]}
					axisGradientClass={"from-cyan-500 via-blue-500 to-indigo-500"}
					badgeColorClass={"text-cyan-500 bg-cyan-500/10 border-cyan-500/20"}
				/>

				<MeasurableResults 
					description="Unifying campaign concepts achieved lead increases, higher open rates, and lower campaign production turnaround."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We'd been at this event for five years and never stood out. With the new campaign we had people coming to the booth saying they'd seen our pre-event emails and come specifically to find us. That had never happened before."}
					author={"Head of Demand Generation"}
					subtitle={"Confidential B2B Company"}
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
					title={"Marketing materials that look like they came from different companies?"}
					description={"OpenGridLabs designs unified marketing materials suites — a single campaign concept across every touchpoint from pre-event through post-event — that build recognition rather than starting over."}
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
