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
	{ value: "44%", label: "Improvement in brand colour recognition", accent: "from-amber-500 to-orange-600" },
	{ value: "11→4", label: "Colours reduced to a purposeful system", accent: "from-yellow-500 to-amber-600" },
	{ value: "100%", label: "WCAG AA compliance across colour combinations", accent: "from-orange-500 to-red-600" },
	{ value: "6 wk", label: "Colour strategy to production-ready token system", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Eleven different colour values in use across touchpoints, with no defined primary or secondary palette" },
	{ text: "Brand orange appearing in four different hex values, preventing any colour from becoming ownable" },
	{ text: "No functional colour system — success, error, and warning states designed ad hoc in the product" },
	{ text: "Brand colours failing WCAG AA contrast requirements when used for text — an accessibility risk" },
	{ text: "No documentation of colour values or rules — anyone creating new materials chose their own" }
];

const SOLUTIONS = [
	{ text: "A four-colour primary palette with a single, unmistakably ownable signature brand colour" },
	{ text: "A six-colour secondary palette for variety within brand constraints" },
	{ text: "A functional colour system — success, warning, error, info — distinct from brand colours" },
	{ text: "A neutral palette from near-white to near-black supporting all text and background applications" },
	{ text: "A full semantic token system mapping every colour to its approved use case, deployable in code" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Strategy", items: ["Brand personality audit", "Competitive colour audit", "Category conventions", "Colour psychology brief"], color: "hsl(45,100%,50%)" },
	{ title: "Design", items: ["Signature colour selection", "Palette construction", "Tint/shade scales", "Functional colours"], color: "hsl(35,100%,50%)" },
	{ title: "Accessibility", items: ["WCAG AA contrast testing", "All text combinations", "Interactive state testing", "Dark mode"], color: "hsl(20,100%,50%)" },
	{ title: "Tokens", items: ["Semantic naming", "Figma variables", "CSS/design tokens", "Documentation"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Colour Strategy & Competitive Audit (Weeks 1–2)",
		desc: "OpenGridLabs audited the colour landscape of the category — identifying the colours owned by competitors and the conventions that existed — and mapped the brand's personality attributes to colour psychology research. The strategy brief specified what the signature colour needed to communicate and the white space it could occupy.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Palette Design & Accessibility (Weeks 3–4)",
		desc: "The colour palette was designed systematically: the signature primary colour was selected and developed into a full tonal scale. Secondary, functional, and neutral palettes were built to complement it. Every colour combination intended for text or interactive elements was tested against WCAG AA contrast requirements.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Token System & Documentation (Weeks 5–6)",
		desc: "The complete palette was documented with exact values in HEX, RGB, CMYK, and Pantone. A semantic token system was built in Figma variables and CSS custom properties, mapping every colour to its specific use case. The colour system chapter of the brand guidelines was written and designed.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Brand colour recognition", before: "Baseline", after: "+44%", change: "+44%" },
	{ metric: "Colour values in active use", before: "11", after: "4 (system-defined)", change: "4 (system-defined)" },
	{ metric: "WCAG AA compliance", before: "~45% of combinations", after: "100%", change: "100%" },
	{ metric: "Colour consistency across touchpoints", before: "Low", after: "High (token-driven)", change: "High (token-driven)" },
	{ metric: "Time to correct off-brand colours", before: "Ongoing", after: "Near-zero (tokens prevent it)", change: "Near-zero (tokens prevent it)" },
	{ metric: "Design team colour decisions per project", before: "Many (no system)", after: "Zero (lookup)", change: "Zero (lookup)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Fewer colours, more recognition",
		desc: "Colour recognition is inversely related to palette size. A brand that consistently uses one signature colour owns it in the category; a brand that uses eleven colours owns none. The discipline of reduction was the whole strategy."
	},
	{
		title: "Accessibility is not a constraint — it is quality",
		desc: "Designing for WCAG AA contrast compliance did not compromise the palette — it improved it. Colours that work accessibly are colours that work for everyone, in every context, including low-light and imperfect display conditions."
	},
	{
		title: "Tokens make consistency automatic",
		desc: "A colour system documented as a PDF requires humans to look up and apply the correct value. A colour system published as design tokens and CSS variables makes it structurally impossible for designers and engineers to use the wrong colour without explicitly overriding the system."
	}
];

const FAQS = [
	{
		q: "How do you choose a brand colour?",
		a: "Brand colour selection considers three things: the brand's personality and the emotional associations of different colour families, the competitive landscape and what colours are already owned by others in the category, and practical considerations including contrast ratios for accessibility. A strategic colour choice occupies distinct territory from competitors and expresses the brand's character."
	},
	{
		q: "What are semantic colour tokens?",
		a: "Semantic colour tokens are named variables that specify the correct colour for a specific purpose — 'colour.action.primary' rather than '#c9922a'. They make colour system implementation consistent in design tools and code, and allow global palette changes to propagate everywhere simultaneously without manual updates."
	}
];

export default function ColorPaletteCaseStudy() {
	return (
		<>
			<SEO
				title="Brand Colour System Case Study | OpenGridLabs"
				description="How OpenGridLabs replaced 11 accidental colours with a strategic, accessible colour system, improving brand colour recognition by 44%."
				canonical="/services/digital-experience/color-palette"
				keywords="Color Palette, Brand Colours, Colour System, Semantic Tokens, WCAG Accessibility, Brand Colour Psychology, Colour Design, Primary Colour, Colour Strategy, Brand Identity"
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
					title="How a Strategic Colour System Replaced 11 Ad Hoc Colours and Made the Brand Instantly Recognisable"
					description="A company's brand had accumulated eleven different colours across its website, product, sales materials, and social channels — not through bad intent but through the natural accumulation of individual decisions made without a system. No single colour was ownable. OpenGridLabs replaced the accidental palette with a strategic colour system — primary, secondary, functional, and neutral — grounded in brand psychology, built for accessibility, and deployed through semantic tokens that made consistency automatic."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Consumer / DTC (anonymised)" },
						{ label: "Scope", value: "Brand colour system — strategy through tokens" },
						{ label: "Timeline", value: "6 weeks" },
						{ label: "Deliverables", value: "Colour strategy · Palette · Audit · Tokens" }
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
						"Our client had a growing consumer brand with a visual presence that had been assembled over three years of individual decisions. The brand had a rough direction — warm, energetic, premium — but no defined colour system. The website used one orange. The app used a slightly different orange. Social media used a third. The sales deck used a fourth. None was wrong, but none was right, and the cumulative effect was a brand that felt loosely assembled rather than intentionally designed.",
						"Colour is one of the most powerful tools in brand recognition — the right colour, consistently applied, becomes as identifying as a logo. But colour's power is proportional to its consistency. A brand that uses four shades of the same hue in different contexts isn't using colour; it's using colours. OpenGridLabs designed a colour system that replaced the accidental palette with an intentional one, and ensured that every context — digital product, print, social, environmental — used the same answer.",
						"A brand colour system is a defined, purposeful set of colours used consistently across all brand applications — primary colours for brand expression, secondary colours for range and variety, functional colours for UI states and communication, and neutral colours for backgrounds and text. A well-designed colour system is hierarchical — each colour has a role — and accessible, meeting WCAG contrast requirements for text and interactive elements."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is a Colour System?"
					definitionText="A brand colour system is a defined, purposeful set of colours used consistently across all brand applications — primary colours for brand expression, secondary colours for range and variety, functional colours for UI states and communication, and neutral colours for backgrounds and text. A well-designed colour system is hierarchical — each colour has a role — and accessible, meeting WCAG contrast requirements for text and interactive elements."
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
					description={"Reconciling multiple conflicting colour values to establish single, accessible brand standards."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Colour System Design Process"}
					description={"A systematic design workflow establishing signature colours, checking contrast compliance, and naming token groups."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Every stage produces a decision that makes the next stage faster. Strategy before design, research before concepts, concepts before execution — each gate eliminates the rework that comes from skipping it."}
					rightColumnTitle={"Colour Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A structured 6-week palette design, accessibility audit, and semantic token rollout mapping."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="Deploying semantic naming conventions and a structured system resolved contrast issues and boosted recognition."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We had a colour that was supposed to be ours but came in four shades. Nobody could tell which was right. Now there's one — one HEX, one Pantone, one answer everywhere. That's what an ownable colour feels like."}
					author={"Head of Brand"}
					subtitle={"Confidential Consumer Company"}
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
					title={"Using five shades of the same colour with no system?"}
					description={"OpenGridLabs designs brand colour systems — strategic palette, WCAG accessibility, and semantic token implementation — that make your brand colour ownable and your consistency automatic."}
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
