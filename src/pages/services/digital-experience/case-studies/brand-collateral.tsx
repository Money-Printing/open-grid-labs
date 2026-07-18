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
import CaseStudyCarousel from "../../../../components/case-study-carousel";

const STATS = [
	{ value: "22%", label: "Shorter average sales cycle post-launch", accent: "from-amber-500 to-orange-600" },
	{ value: "7", label: "Collateral items in the complete suite", accent: "from-yellow-500 to-amber-600" },
	{ value: "12 wk", label: "Brief to full suite in production", accent: "from-orange-500 to-red-600" },
	{ value: "100%", label: "Sales team on consistent materials within 3 weeks", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Pitch deck updated by multiple people with inconsistent formatting, fonts, and layout" },
	{ text: "One-pager and brochure using old brand before the recent visual identity update" },
	{ text: "No consistent email signature across the 30-person team" },
	{ text: "Salespeople spending 2–3 hours per week customising inadequate materials for specific meetings" },
	{ text: "Different visual impression at each touchpoint undermining trust across multi-touchpoint buying cycles" }
];

const SOLUTIONS = [
	{ text: "A new pitch deck with locked master template and 12 modular content slides" },
	{ text: "A two-page, print-and-digital one-pager carrying the core positioning message" },
	{ text: "An eight-page brand brochure for leave-behind and digital distribution" },
	{ text: "Standardised email signature with three variants (standard, minimal, with meeting link)" },
	{ text: "Event materials: pull-up banner, table card, and branded folder for conferences" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Audit", items: ["Current materials audit", "Message audit", "Sales process mapping", "Touchpoint inventory"], color: "hsl(45,100%,50%)" },
	{ title: "Strategy", items: ["Collateral architecture", "Message hierarchy per item", "Audience and context per item"], color: "hsl(35,100%,50%)" },
	{ title: "Design", items: ["Visual identity application", "Layout system", "Template structure", "Modular content"], color: "hsl(20,100%,50%)" },
	{ title: "Production", items: ["Print-ready files", "Digital formats", "Locked templates", "Staff rollout"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Audit & Collateral Architecture (Weeks 1–3)",
		desc: "OpenGridLabs audited all existing collateral, mapped the sales process from first contact to close, and identified each touchpoint where a collateral item was used. A collateral architecture was designed specifying which item served which purpose, which audience, and which point in the buying journey.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Design & Template Build (Weeks 4–9)",
		desc: "All seven collateral items were designed in sequence, starting with the pitch deck as the item used most frequently and with the most impact. Each item was reviewed against the brand guidelines and against the collateral architecture to ensure message consistency. Modular templates were built for the pitch deck and one-pager allowing sales to customise content within locked brand constraints.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Production, Templates & Rollout (Weeks 10–12)",
		desc: "Print-ready files were produced for all print items. Fully locked Figma and PowerPoint templates were built for the pitch deck and one-pager. A 90-minute sales team rollout session walked each rep through the new materials, the template customisation workflow, and the message hierarchy. All 30 staff were on consistent materials within three weeks.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Average sales cycle", before: "Baseline", after: "-22%", change: "-22%" },
	{ metric: "Visual consistency across touchpoints", before: "Low (fragmented)", after: "High (system-driven)", change: "High (system-driven)" },
	{ metric: "Sales team material creation time", before: "2–3 hrs/week", after: "<30 min/week", change: "<30 min/week" },
	{ metric: "Prospect brand recognition between touches", before: "Low", after: "High", change: "High" },
	{ metric: "Collateral items on new brand", before: "0 / 7", after: "7 / 7", change: "7 / 7" },
	{ metric: "Rep confidence in materials (survey)", before: "2.8/5", after: "4.5/5", change: "4.5/5" }
];

const SUCCESS_FACTORS = [
	{
		title: "Collateral architecture before design",
		desc: "Designing each item independently produces a collection. Designing them as a system — each with a defined role in the buying journey — produces collateral that compounds rather than repeats."
	},
	{
		title: "Locked templates balance consistency and flexibility",
		desc: "A pitch deck template where every element is locked prevents customisation but also prevents localisation. Locking brand elements while unlocking content areas gave reps the flexibility they needed without the brand risk."
	},
	{
		title: "The rollout is the ROI",
		desc: "Beautifully designed collateral that sales reps don't trust or don't know how to use doesn't change anything. The 90-minute rollout session — showing how to use the templates and why the new materials were better — was the step that made the design investment pay."
	}
];

const FAQS = [
	{
		q: "What should a brand collateral suite include?",
		a: "A core brand collateral suite typically includes: a pitch/presentation deck, a one-pager or capabilities summary, a detailed brochure, an email signature, and event materials. More comprehensive suites add case study templates, data sheets, and co-branded partner materials. The specific items depend on the sales process and the touchpoints where prospects encounter the brand."
	},
	{
		q: "What is the difference between a one-pager and a brochure?",
		a: "A one-pager is a concise, typically A4 or US Letter document presenting the core value proposition, key benefits, and a clear call to action in a format designed for quick scanning or leaving at the end of a meeting. A brochure is a longer document — typically 4–12 pages — providing more detail, context, and credibility for later-stage consideration."
	}
];

export default function BrandCollateralCaseStudy() {
	return (
		<>
			<SEO
				title="Brand Collateral Design Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a complete B2B sales collateral suite (pitch deck, brochure, one-pager), shortening the sales cycle 22%."
				canonical="/services/digital-experience/brand-collateral"
				keywords="Brand Collateral, Sales Collateral, Pitch Deck Design, One-Pager Design, Brochure Design, Email Signature, Event Materials, Sales Enablement, Marketing Materials, Brand Identity"
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
					title="How a Consistent Brand Collateral Suite Shortened the Sales Cycle 22% by Making Every Touchpoint Reinforce the Same Message"
					description="A 30-person company had good salespeople and a confusing collateral situation: a pitch deck from 2022, a one-pager made by a freelancer, a brochure the founder designed himself, and email signatures that were each individual. Prospects encountered a different brand at every touchpoint. OpenGridLabs designed a complete, consistent collateral suite — every item expressing the same visual identity and the same core message — reducing visual fragmentation and shortening the average sales cycle 22%."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B / Professional Services (anonymised)" },
						{ label: "Scope", value: "Complete sales collateral suite" },
						{ label: "Timeline", value: "12 weeks" },
						{ label: "Deliverables", value: "Pitch deck · One-pager · Brochure · Email sig · Event materials" }
					]}
				/>

				<CaseStudyCarousel
					slug="brand-collateral"
					title="How a Consistent Brand Collateral Suite Shortened the Sales Cycle 22% by Making Every Touchpoint Reinforce the Same Message"
					accentColor="purple"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/brand-collateral/1.jpg",
						"/images/case-studies/brand-collateral/2.jpg"
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
						"Our client had a 30-person company with a sales team that had each assembled their own version of the brand. The pitch deck had been updated by three different people and showed it — inconsistent fonts, different slide layouts, and a narrative structure that varied between reps. The one-pager was from a year earlier and didn't reflect the current positioning. The company brochure had been designed before the recent rebrand and used the old logo.",
						"The fragmentation had a real sales cost. Prospects who received multiple materials before or after a meeting encountered a different visual impression each time — undermining the consistent brand experience that builds confidence and trust over a long buying cycle. The sales team was also spending time creating and modifying materials rather than selling. A complete, cohesive collateral suite solved both problems: the brand became consistent and the team became faster.",
						"Brand collateral is the collection of physical and digital materials a company uses to communicate its brand and support its sales and marketing activities — pitch decks, brochures, one-pagers, data sheets, email signatures, event materials, and merchandise. Effective brand collateral applies the visual identity consistently, carries the core message coherently, and gives every team member the materials they need to represent the brand confidently at any touchpoint."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Brand Collateral?"
					definitionText="Brand collateral is the collection of physical and digital materials a company uses to communicate its brand and support its sales and marketing activities — pitch decks, brochures, one-pagers, data sheets, email signatures, event materials, and merchandise. Effective brand collateral applies the visual identity consistently, carries the core message coherently, and gives every team member the materials they need to represent the brand confidently at any touchpoint."
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
					description={"Reducing visual layout fragmentation to streamline sales velocity and build buyer confidence."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Brand Collateral Design Process"}
					description={"A standardized layout system applying visual identity elements to print, digital templates, and staff rollouts."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Every stage produces a decision that makes the next stage faster. Strategy before design, research before concepts, concepts before execution — each gate eliminates the rework that comes from skipping it."}
					rightColumnTitle={"Collateral Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A cohesive 12-week design discovery, strategy build, and template production rollout."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="Deploying locked templates and structured collateral architecture shortened the average sales cycle and saved salesperson hours."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Before, every rep was using different versions of everything. Now when a prospect hears from us three times in a week, they see the same brand three times. That consistency is doing work that our old materials weren't."}
					author={"Head of Sales"}
					subtitle={"Confidential B2B Company"}
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
					title={"Every rep using a different version of everything?"}
					description={"OpenGridLabs designs complete brand collateral suites — pitch decks, one-pagers, brochures, and event materials — that give every touchpoint the same confident, consistent brand."}
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
