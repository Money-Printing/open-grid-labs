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
	{ value: "34%", label: "Increase in competitive deal win rate", accent: "from-amber-500 to-orange-600" },
	{ value: "10 wk", label: "Research to validated positioning framework", accent: "from-yellow-500 to-amber-600" },
	{ value: "1", label: "Single articulation the whole company aligned on", accent: "from-orange-500 to-red-600" },
	{ value: "6 mo", label: "Implementation period before ROI measurement", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "No single positioning that differentiated the brand from well-funded competitors" },
	{ text: "Three different versions of the value proposition across sales, marketing, and product teams" },
	{ text: "Post-deal research showing prospects couldn't articulate why they chose or rejected the brand" },
	{ text: "Marketing messages leading with product features rather than buyer outcomes" },
	{ text: "No brand personality guidelines — the company's tone varied by channel and by writer" }
];

const SOLUTIONS = [
	{ text: "A positioning statement grounded in genuine competitive differentiation and buyer research" },
	{ text: "A value proposition framework mapping outcomes to specific buyer personas and use cases" },
	{ text: "A brand personality system — four character traits with tone examples for each" },
	{ text: "A messaging hierarchy giving every team a consistent story at the right level of detail" },
	{ text: "A competitive positioning map situating the brand clearly against the three main alternatives" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Discover", items: ["Stakeholder interviews", "Customer win/loss research", "Competitive audit", "Category analysis"], color: "hsl(45,100%,50%)" },
	{ title: "Define", items: ["Positioning territories", "Value proposition options", "Personality options", "Team workshop"], color: "hsl(35,100%,50%)" },
	{ title: "Articulate", items: ["Positioning statement", "Messaging hierarchy", "Personality framework", "Voice and tone"], color: "hsl(20,100%,50%)" },
	{ title: "Activate", items: ["Sales enablement materials", "Marketing brief", "Product narrative", "Internal alignment sessions"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Research & Discovery (Weeks 1–4)",
		desc: "OpenGridLabs conducted 18 stakeholder interviews across leadership, sales, marketing, and customer success, and 12 customer research conversations covering both wins and losses. A comprehensive competitive audit mapped the claims and positioning of all four main competitors, revealing significant unoccupied differentiated territory.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Strategy Development & Workshop (Weeks 5–7)",
		desc: "Three distinct positioning territories were developed and presented to the leadership team in a half-day workshop, evaluated against the research findings and the company's actual capabilities. The chosen territory was developed into a full positioning statement, value proposition framework, and personality system.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Articulation & Activation (Weeks 8–10)",
		desc: "The strategy was translated into a messaging hierarchy — from the one-sentence positioning claim to detailed sales talk tracks. Activation sessions were run with the sales and marketing teams. The positioning framework was embedded in the new sales deck, the website homepage, and the marketing campaign brief.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Competitive win rate", before: "Baseline", after: "+34%", change: "+34%" },
	{ metric: "Value prop consistency (team survey)", before: "31% agreement", after: "89% agreement", change: "89% agreement" },
	{ metric: "Prospect recall of brand differentiation", before: "Low (post-deal research)", after: "High", change: "High" },
	{ metric: "Sales deck 'why us' section clarity", before: "Rated 2.1/5", after: "Rated 4.4/5", change: "Rated 4.4/5" },
	{ metric: "Marketing campaign click-through", before: "Baseline", after: "+41% (positioned messages)", change: "+41% (positioned messages)" },
	{ metric: "Internal team alignment score", before: "Poor", after: "Strong (workshop output)", change: "Strong (workshop output)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Differentiation must be genuine",
		desc: "A positioning claim that isn't rooted in something the company actually does differently will be tested and disproved in every sales conversation. The strategy was built on real capability gaps the competitive audit revealed, not on aspirational language."
	},
	{
		title: "One story, not three",
		desc: "The value of a strategy workshop where sales, marketing, and product align on a single positioning is not philosophical — it is commercial. When three teams tell three slightly different stories, buyers construct their own, which is rarely the one that wins the deal."
	},
	{
		title: "Personality governs trust",
		desc: "A company that sounds different in an email, on a website, and in a demo creates cognitive dissonance that buyers interpret as inconsistency. A defined personality framework made the brand feel like a single, coherent entity across every touchpoint."
	}
];

const FAQS = [
	{
		q: "What is brand positioning?",
		a: "Brand positioning is the articulation of the specific space a brand occupies in its buyers' minds relative to alternatives — what it uniquely stands for, for whom, and why that matters. A well-defined positioning gives buyers a clear, memorable reason to choose one brand over another."
	},
	{
		q: "What is the difference between brand strategy and marketing strategy?",
		a: "Brand strategy defines what a company stands for — its positioning, personality, and value proposition. Marketing strategy defines how that positioning is communicated to specific audiences through specific channels and campaigns. Brand strategy is upstream of marketing strategy: it determines what is being said before marketing determines how and where it is said."
	}
];

export default function BrandStrategyCaseStudy() {
	return (
		<>
			<SEO
				title="Brand Strategy Case Study | OpenGridLabs"
				description="How OpenGridLabs developed a clear brand strategy and positioning framework, increasing competitive deal win rate by 34%."
				canonical="/services/digital-experience/brand-strategy"
				keywords="Brand Strategy, Brand Positioning, Value Proposition, Brand Framework, Competitive Positioning, Brand Personality, Brand Voice, Marketing Strategy, B2B Branding, Brand Identity"
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
					title="How a Clear Brand Strategy Increased Competitive Win Rate 34% by Giving the Company Something Specific to Stand For"
					description="A company was losing competitive deals despite having a demonstrably better product — sales calls ended with 'we'll think about it', not objections the team could answer. OpenGridLabs diagnosed the root cause as strategic, not tactical: the company had no clear positioning that differentiated it in buyers' minds before the demo. A rigorous brand strategy engagement produced a positioning framework that changed how the company was introduced, understood, and chosen."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B SaaS (anonymised)" },
						{ label: "Scope", value: "Full positioning and brand strategy" },
						{ label: "Timeline", value: "10 weeks" },
						{ label: "Methods", value: "Interviews · Research · Audit · Workshops" }
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
						"Our client was an 80-person B2B SaaS company with a strong product, a growing sales team, and a stubborn problem: they were losing competitive deals at a rate that didn't match their product's objective quality. Post-deal reviews revealed a consistent pattern — prospects couldn't clearly articulate why they would choose this company over the alternatives. The sales team was pitching features; no one was pitching a reason to choose.",
						"The root cause was the absence of a defined brand strategy. The company's positioning was a collection of honest but undifferentiated claims — 'powerful', 'easy to use', 'great support' — that every competitor also made. There was no single, ownable claim that could anchor the brand in a buyer's memory. The product team, the marketing team, and the sales team each had slightly different versions of what the company stood for, and none of them was the version buyers remembered.",
						"Brand strategy is the articulation of what a company stands for, who it is for, and why it is the right choice for those people — in terms that are ownable, defensible, and true. It encompasses positioning (the space the brand occupies in buyers' minds relative to alternatives), value proposition (the specific outcome delivered to a specific audience), brand personality (the character the brand expresses in all its communications), and the framework that connects all of these into a consistent message."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is Brand Strategy?"
					definitionText="Brand strategy is the articulation of what a company stands for, who it is for, and why it is the right choice for those people — in terms that are ownable, defensible, and true. It encompasses positioning (the space the brand occupies in buyers' minds relative to alternatives), value proposition (the specific outcome delivered to a specific audience), brand personality (the character the brand expresses in all its communications), and the framework that connects all of these into a consistent message."
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
					description={"Replacing fragmented value propositions with a unified, competitive positioning framework."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Brand Strategy Process"}
					description={"A standardized strategic pipeline aligning leadership workshops, competitive audits, and messaging rollout across sales channels."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Every stage produces a decision that makes the next stage faster. Strategy before design, research before concepts, concepts before execution — each gate eliminates the rework that comes from skipping it."}
					rightColumnTitle={"Strategy Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A rigorous 10-week strategy cycle mapping customer insights and defining ownable messaging frameworks."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="Deploying a single unified narrative framework and consistent voice attributes improved sales confidence and win rates."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We had a great product and a forgettable story. After the strategy work we had something specific to say — and 'specific' turned out to be the most powerful thing we could be. Buyers who got the positioning chose us faster and with more conviction."}
					author={"CMO"}
					subtitle={"Confidential B2B SaaS Company"}
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
					title={"Losing competitive deals despite having the better product?"}
					description={"OpenGridLabs develops brand strategies — positioning, value proposition, personality, and messaging hierarchy — that give your company something specific and ownable to stand for."}
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
