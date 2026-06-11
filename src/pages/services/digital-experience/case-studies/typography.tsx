import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Activity, 
	Database,
	Zap,
	Type
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
	{ value: "51%", label: "Lift in brand distinctiveness scores", accent: "from-amber-500 to-orange-600" },
	{ value: "2", label: "Purposeful typefaces replacing 5 ad hoc fonts", accent: "from-yellow-500 to-amber-600" },
	{ value: "6 wk", label: "Font audit to full typographic system", accent: "from-orange-500 to-red-600" },
	{ value: "100%", label: "Web and print specifications for every use case", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Five different fonts in active use across website, product, sales materials, and presentations" },
	{ text: "Primary typeface (system default) indistinguishable from thousands of other brands" },
	{ text: "No typographic hierarchy defined — heading sizes, weights, and spacing chosen ad hoc per document" },
	{ text: "Typography performing poorly at small sizes in the product and in mobile contexts" },
	{ text: "No specifications for print — digital fonts used in print contexts without CMYK consideration" }
];

const SOLUTIONS = [
	{ text: "A primary display typeface selected for brand character — expressive, distinctive, on-strategy" },
	{ text: "A secondary workhorse typeface selected for readability and versatility across all sizes and contexts" },
	{ text: "A six-level typographic hierarchy: display, H1–H4, body, caption — with size, weight, and spacing defined" },
	{ text: "Web font loading specifications minimising performance impact while preserving typographic intent" },
	{ text: "Print specifications with fallback typefaces for contexts where primary fonts are unavailable" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Audit", items: ["Existing font inventory", "Usage context mapping", "Readability assessment", "Brand personality gap"], color: "hsl(45,100%,50%)" },
	{ title: "Selection", items: ["Typeface candidates", "Shortlist evaluation", "Pairing testing", "Licensing review"], color: "hsl(35,100%,50%)" },
	{ title: "Hierarchy", items: ["Scale definition", "Weight usage rules", "Line height & tracking", "Responsive behaviour"], color: "hsl(20,100%,50%)" },
	{ title: "Specs", items: ["Web font specs", "Print specs", "App specs", "Fallback fonts", "Guidelines chapter"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Audit & Selection Brief (Weeks 1–2)",
		desc: "OpenGridLabs audited all existing font usage and mapped the brand personality attributes that the typography needed to express. A longlist of 20+ candidate typefaces was evaluated against the brief, narrowed to a shortlist of 6, and presented with pairings and real-content examples for stakeholder selection.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Hierarchy & System Design (Weeks 3–4)",
		desc: "The typographic hierarchy was designed: six levels from display to caption, with precise specifications for size, weight, line height, letter spacing, and maximum line length. The hierarchy was tested across the most common use cases — website headers, body copy, sales deck titles, product UI — before being finalised.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Specifications & Guidelines (Weeks 5–6)",
		desc: "Full specifications were written for web (font loading, fallback stack, CSS variables), print (CMYK considerations, minimum sizes, bleed), and app (native fallbacks, accessibility size requirements). The typography chapter of the brand guidelines was produced with visual examples of correct hierarchy application in context.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Brand distinctiveness score", before: "Baseline", after: "+51%", change: "+51%" },
	{ metric: "Fonts in active use", before: "5 (ad hoc)", after: "2 (system-defined)", change: "2 (system-defined)" },
	{ metric: "Typographic hierarchy adherence", before: "Inconsistent", after: "Specified and enforced", change: "Specified and enforced" },
	{ metric: "Web font performance impact", before: "Variable", after: "Optimised (subsetting)", change: "Optimised (subsetting)" },
	{ metric: "Print vs digital consistency", before: "Poor", after: "Specified for both", change: "Specified for both" },
	{ metric: "Design time per document", before: "High (font decisions)", after: "Low (hierarchy lookup)", change: "Low (hierarchy lookup)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Personality in the display typeface, performance in the body",
		desc: "A display typeface earns its distinctiveness by being expressive and occasionally demanding. A body typeface earns its place by being invisible — the reader notices the content, not the container. Choosing each typeface for its role, rather than applying one font to everything, is the whole discipline."
	},
	{
		title: "Hierarchy before aesthetics",
		desc: "A typeface that looks beautiful but produces an unclear hierarchy is failing at its job. Every hierarchy decision — size ratios, weight contrasts, spacing rules — was validated by setting real content from the client's actual materials before being confirmed."
	},
	{
		title: "Licensing is part of the decision",
		desc: "A typeface that looks exactly right but has a licensing structure that makes web, print, and app use expensive or contractually complex is not the right choice. Evaluating licensing alongside aesthetics and performance produced a system the company could sustain."
	}
];

const FAQS = [
	{
		q: "How do you choose a brand typeface?",
		a: "Typeface selection evaluates three things: personality fit (does it express the brand's character?), technical performance (does it work at all required sizes and in all required contexts?), and licensing (can it be used on web, in print, and in products within a sustainable budget?). Shortlisting candidates and testing them with real content is essential."
	},
	{
		q: "What is the difference between a font and a typeface?",
		a: "A typeface is a design — the visual form of a set of characters (e.g. 'Garamond' or 'Helvetica'). A font is a specific instance of a typeface — a particular weight, style, or file (e.g. 'Garamond Bold Italic' or 'Helvetica 12pt'). In common usage the terms are often used interchangeably."
	}
];

export default function TypographyCaseStudy() {
	return (
		<>
			<SEO
				title="Brand Typography System Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a purposeful typeface system and typographic hierarchy, boosting brand distinctiveness by 51%."
				canonical="/services/digital-experience/typography"
				keywords="Typography, Brand Typeface, Typographic Hierarchy, Font Selection, Brand Typography System, Display Typeface, Web Typography, Print Typography, Type Design, Brand Identity"
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
					title="How a Purposeful Typeface System Transformed a Generic Brand Voice into a Distinctive One"
					description="A company had been using system fonts and free web fonts chosen for availability rather than character, producing a brand that read as typographically anonymous — competent but unmemorable. OpenGridLabs selected and specified a primary and secondary typeface system that expressed the brand's character, established a clear typographic hierarchy, and produced specifications for web, app, and print applications that made the brand's voice distinctively its own."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Professional Services / B2B (anonymised)" },
						{ label: "Scope", value: "Brand typeface selection, hierarchy, and specifications" },
						{ label: "Timeline", value: "6 weeks" },
						{ label: "Deliverables", value: "Typeface system · Hierarchy · Web/print specs · Guidelines" }
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
					contextIcon={<Type className="w-5 h-5" />}
					contextParagraphs={[
						"Our client was a professional services company whose brand communicated expertise and rigour through its content — but whose typographic choices undermined that message. The website used a generic system-safe sans-serif. Sales materials used a different sans. Presentations used a third. The premium character the team worked hard to communicate in words was contradicted by the generic fonts that carried them.",
						"Typography is the silent carrier of brand character. A company that communicates authority through every other brand element and then sets its copy in a generic system font sends a mixed signal. Our client had strong written content, a clear brand voice, and fonts that could have belonged to anyone. A purposeful typeface system was the correction — two fonts chosen for what they communicated, not just what they supported, and a hierarchy that made every piece of copy feel designed.",
						"Brand typography is the selection and specification of typefaces that express a brand's character and create a consistent reading experience across all applications. A brand typography system typically includes a primary typeface for headlines and display — chosen for its personality and distinctiveness — and a secondary typeface for body copy — chosen for readability at small sizes. Together they create a typographic voice that is as much a part of the brand as its colour or logo."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Brand Typography?"
					definitionText="Brand typography is the selection and specification of typefaces that express a brand's character and create a consistent reading experience across all applications. A brand typography system typically includes a primary typeface for headlines and display — chosen for its personality and distinctiveness — and a secondary typeface for body copy — chosen for readability at small sizes. Together they create a typographic voice that is as much a part of the brand as its colour or logo."
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
					description={"Replacing ad hoc font usage with a unified, high-performance typographic voice."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Typography System Design Process"}
					description={"Our strategic approach maps brand personality gaps to typeface candidates, establishes size Scales, and writes guidelines."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Every stage produces a decision that makes the next stage faster. Strategy before design, research before concepts, concepts before execution — each gate eliminates the rework that comes from skipping it."}
					rightColumnTitle={"Typography Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A systematic 6-week timeline from typography audits and typeface selection to specifications and brand guidelines."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="A structured typographic standard solved visual inconsistency and improved document creation times."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We never thought of our fonts as part of our brand. After the typography work, they were — and the brand felt immediately more intentional, more premium. Two fonts, chosen well, did more for our perceived quality than anything else we changed that year."}
					author={"Managing Director"}
					subtitle={"Confidential Professional Services Company"}
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
					title={"Generic system fonts carrying a premium brand message?"}
					description={"OpenGridLabs designs brand typography systems — purposeful typeface selection, clear hierarchy, and full web/print specifications — that make your brand's voice as distinctive as its logo."}
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
