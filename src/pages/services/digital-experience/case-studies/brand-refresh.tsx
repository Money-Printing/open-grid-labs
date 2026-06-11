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
	{ value: "42%", label: "Lift in brand perception scores", accent: "from-amber-500 to-orange-600" },
	{ value: "91%", label: "Existing customer recognition maintained", accent: "from-yellow-500 to-amber-600" },
	{ value: "12 yr", label: "Brand equity preserved through evolutionary approach", accent: "from-orange-500 to-red-600" },
	{ value: "14 wk", label: "Audit to fully refreshed brand in market", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Logo designed in 2013 predating flat design — gradients and drop shadows that aged poorly" },
	{ text: "Colour palette based on heavy, saturated hues that dated against modern, refined brand standards" },
	{ text: "Typography using a typeface that had been retired by its foundry and was no longer supported" },
	{ text: "Brand performing poorly in digital contexts — logo not crisp at retina resolutions, colours bleeding on screen" },
	{ text: "Risk of losing recognition equity if any refresh change was perceived as a rebrand by existing customers" }
];

const SOLUTIONS = [
	{ text: "Logo evolution: removed gradients and shadow, rebalanced proportions, refined letterforms — mark clearly the same" },
	{ text: "Colour evolution: shifted palette to refined, slightly lighter interpretations of the original hues — familiar, modernised" },
	{ text: "Typography: replaced retired typeface with a contemporary equivalent pairing with the existing mark's geometry" },
	{ text: "Digital-first master files: SVG and high-res PNG replacing legacy EPS files not suited to retina displays" },
	{ text: "A before/after recognition test with 80 existing customers before any public launch" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Audit", items: ["Equity mapping", "Dating analysis", "Digital performance review", "Competitive freshness audit"], color: "hsl(45,100%,50%)" },
	{ title: "Preserve", items: ["Recognition equity identification", "Elements to retain", "Evolution boundaries"], color: "hsl(35,100%,50%)" },
	{ title: "Evolve", items: ["Logo refinement", "Colour evolution", "Typography update", "System modernisation"], color: "hsl(20,100%,50%)" },
	{ title: "Validate", items: ["Recognition test (existing customers)", "Perception test (prospects)", "A/B deployment"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Equity Audit & Evolution Brief (Weeks 1–3)",
		desc: "OpenGridLabs conducted a rigorous audit of the existing brand to map its equity — which elements had the most recognition, which carried the most positive associations, and which were simply dated without being valued. The evolution brief specified exactly how far each element could be changed before recognition risk was triggered.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Design Evolution (Weeks 4–10)",
		desc: "Each brand element was evolved according to the brief: the logo was refined over three rounds, with each round tested against the recognition boundary defined in the audit. The colour palette, typography, and visual language were updated to feel contemporary while remaining recognisably connected to the existing brand.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Recognition Testing & Launch (Weeks 11–14)",
		desc: "The refreshed brand was tested with 80 existing customers before any public launch — measuring whether they recognised it as an evolution of the brand they knew. 91% correctly identified the refreshed brand as the same company. The refreshed brand was launched with a 'same company, evolved' communication to existing customers, and a full launch to prospects and media.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Brand perception score", before: "Baseline", after: "+42%", change: "+42%" },
	{ metric: "Existing customer recognition", before: "Baseline", after: "91% maintained", change: "91% maintained" },
	{ metric: "Brand 'freshness' rating (survey)", before: "Baseline", after: "+61%", change: "+61%" },
	{ metric: "Digital rendering quality", before: "Poor (legacy files)", after: "Retina-optimised", change: "Retina-optimised" },
	{ metric: "Logo across all applications", before: "Inconsistent (dated)", after: "Consistent (modern)", change: "Consistent (modern)" },
	{ metric: "Internal pride (employee survey)", before: "Baseline", after: "+44%", change: "+44%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Map the equity before you touch anything",
		desc: "A brand refresh without an equity audit is a rebrand with good intentions. Knowing which elements carried recognition and value before changing anything meant every decision had a risk assessment attached — how far can this element move before it stops being recognised?"
	},
	{
		title: "Test recognition before launch",
		desc: "The recognition test with 80 existing customers before the public launch was not a nice-to-have — it was the evidence that the refresh had achieved its brief. It also gave the team the confidence to launch without the anxiety of discovering the recognition impact after the fact."
	},
	{
		title: "Evolution, not revolution, requires more discipline",
		desc: "It is easier to design something new than to refine something existing while preserving its identity. Every refinement decision — how much lighter, how much simpler, how much more geometric — required a rationale grounded in the equity audit. The constraint of preservation produces better, more considered design decisions."
	}
];

const FAQS = [
	{
		q: "What is the difference between a brand refresh and a rebrand?",
		a: "A brand refresh evolves an existing identity — refining elements that have dated while preserving recognition cues that carry equity. A rebrand replaces the existing identity with a new one. A refresh is appropriate when there is genuine recognition equity to preserve; a rebrand is appropriate when the existing identity is a liability or when the company's positioning has changed fundamentally."
	},
	{
		q: "How do you know if a brand needs a refresh or a rebrand?",
		a: "If existing customers recognise and positively associate with the brand but the visual identity feels dated or performs poorly in digital contexts, a refresh is usually appropriate. If the brand has negative associations, is unrecognised in its category, or the company's positioning has changed significantly since the identity was created, a rebrand is likely necessary."
	}
];

export default function BrandRefreshCaseStudy() {
	return (
		<>
			<SEO
				title="Brand Refresh Design Case Study | OpenGridLabs"
				description="How OpenGridLabs conducted a surgical, evolutionary brand refresh, lifting brand perception scores 42% while preserving 91% customer recognition."
				canonical="/services/digital-experience/brand-refresh"
				keywords="Brand Refresh, Brand Evolution, Brand Modernisation, Logo Refresh, Visual Identity Refresh, Brand Update, Brand Equity, Brand Recognition, Logo Evolution, Brand Identity"
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
					title="How an Evolutionary Brand Refresh Modernised a 12-Year Brand While Preserving 91% of Its Customer Recognition"
					description="A 12-year-old company had built real brand equity — customers recognised and trusted the brand, the logo was widely known in the category, and the visual identity had genuine heritage value. It had also dated. The logo felt of its era. The colour palette was heavy by modern standards. The typography was a decade behind. OpenGridLabs conducted a surgical brand refresh — evolving every element intentionally rather than replacing it — lifting brand perception scores 42% while maintaining 91% existing customer recognition."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Professional Services / B2B (anonymised)" },
						{ label: "Scope", value: "Brand refresh — evolution of all visual identity elements" },
						{ label: "Timeline", value: "14 weeks" },
						{ label: "Approach", value: "Evolutionary refinement — no element changed beyond recognition" }
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
						"Our client had a brand that had served them well for twelve years. The logo — a stylised mark with a bold wordmark — had become genuinely recognisable in their category. The company's colours and visual language were associated with them in their market. This was valuable equity that a rebrand — a clean-slate replacement — would have destroyed. The brief was not 'design us a new brand'. The brief was 'make our brand feel like it belongs in 2025, not 2013, without making our customers wonder if we've been acquired'.",
						"The distinction between a rebrand and a brand refresh is not semantic. A rebrand replaces a visual identity. A brand refresh evolves it — resolving the specific elements that have dated while preserving the recognition cues that carry the equity. This requires a more careful, considered process than a rebrand: identifying which elements have equity worth preserving, which elements are simply dated, and how far each can be evolved before recognition is compromised.",
						"A brand refresh is an evolutionary update to an existing brand identity — refining the logo, modernising the colour palette, updating the typography, and strengthening the overall visual system — without replacing the fundamental elements that customers recognise. It differs from a rebrand, which creates a new identity from scratch. A brand refresh preserves brand equity while ensuring the visual identity feels contemporary and performs across modern digital contexts."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is a Brand Refresh?"
					definitionText="A brand refresh is an evolutionary update to an existing brand identity — refining the logo, modernising the colour palette, updating the typography, and strengthening the overall visual system — without replacing the fundamental elements that customers recognise. It differs from a rebrand, which creates a new identity from scratch. A brand refresh preserves brand equity while ensuring the visual identity feels contemporary and performs across modern digital contexts."
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
					description={"Resolving dated legacy formats to improve digital performance and maintain high customer recognition."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Brand Refresh Process"}
					description={"An evolutionary framework designed to preserve brand recognition equity while modernising logo, palette, and overall typography."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Every stage produces a decision that makes the next stage faster. Strategy before design, research before concepts, concepts before execution — each gate eliminates the rework that comes from skipping it."}
					rightColumnTitle={"Refresh Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A structured 14-week timeline covering equity mapping, iterative design, and before/after verification tests."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="Surgical refinement across all touchpoints modernised the brand voice while maintaining a high customer recognition rate."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We were terrified of losing what we'd built. The refresh gave us exactly what we needed — a brand that looked like it was designed this year, not ten years ago, with customers still recognising it immediately. That's a difficult thing to do. OpenGridLabs did it."}
					author={"CEO"}
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
					title={"Brand equity worth preserving but visual identity that's dated?"}
					description={"OpenGridLabs conducts brand refreshes — evolutionary, evidence-based, and recognition-tested — that modernise your visual identity without losing the equity you've spent years building."}
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
