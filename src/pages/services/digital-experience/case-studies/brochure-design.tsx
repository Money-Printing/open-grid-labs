import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Activity, 
	Database,
	Zap,
	BookOpen
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
	{ value: "19%", label: "Shorter consideration phase when brochure used", accent: "from-amber-500 to-orange-600" },
	{ value: "1st", label: "Highest-rated sales asset (team survey)", accent: "from-yellow-500 to-amber-600" },
	{ value: "10 wk", label: "Brief to print-ready and digital delivery", accent: "from-orange-500 to-red-600" },
	{ value: "94%", label: "Sales team now regularly using the brochure", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Company-centric narrative structure — history and milestones before client relevance" },
	{ text: "Stock photography communicating generic professionalism rather than real capability" },
	{ text: "Dense copy paragraphs with no visual hierarchy or scanning affordance" },
	{ text: "No grid system — layouts varied by page with no visual coherence across the brochure" },
	{ text: "Print-only format unsuitable for the 60% of prospects receiving it digitally" }
];

const SOLUTIONS = [
	{ text: "Client-perspective narrative: problem context, service response, evidence, credentials" },
	{ text: "Editorial photography brief and art direction for a custom shoot" },
	{ text: "A 12-column grid system with consistent layout logic across all pages" },
	{ text: "Typographic hierarchy making every spread scannable at 15 seconds before commitment to read" },
	{ text: "Dual format: 250gsm cover print brochure and an interactive PDF with hyperlinked navigation" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Strategy", items: ["Content Strategy", "Narrative arc", "Audience perspective", "Content audit", "Writing brief"], color: "hsl(45,100%,50%)" },
	{ title: "Layout", items: ["12-column grid", "Typographic hierarchy", "Spread logic", "Image-to-text ratios"], color: "hsl(35,100%,50%)" },
	{ title: "Design", items: ["Editorial layout", "Photography integration", "Colour application", "Brand system"], color: "hsl(20,100%,50%)" },
	{ title: "Production", items: ["Print specification", "Interactive PDF build", "Proof", "Print management"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Content Strategy & Structure (Weeks 1–3)",
		desc: "OpenGridLabs worked with the leadership and sales teams to rebuild the content structure from the client's perspective. The narrative arc was agreed in outline before any design began. A photography brief was written for a custom shoot commissioned as part of the project — specific scenes and subjects showing real work, real people, and real outcomes rather than stock imagery.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Design & Layout (Weeks 4–8)",
		desc: "The grid system was established and all 12 pages were designed. The editorial layout — generous white space, strong typographic hierarchy, full-bleed photography alternating with text-heavy spreads — was designed to read as a quality publication rather than a sales document. Every spread was reviewed by the sales team for relevance and by the design team for visual quality.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Print Production & Digital Format (Weeks 9–10)",
		desc: "The print brochure was produced: 250gsm soft-touch laminated cover, 170gsm silk inner pages, perfect binding. The interactive PDF was built with bookmarks, hyperlinked contents, and embedded video links to case study evidence. Both formats were delivered simultaneously.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Sales team brochure usage", before: "~20% (rarely sent)", after: "94% (regular use)", change: "94% (regular use)" },
	{ metric: "Consideration phase length (when brochure sent)", before: "Baseline", after: "-19%", change: "-19%" },
	{ metric: "Prospect engagement rating", before: "Poor (feedback)", after: "High (follow-up data)", change: "High (follow-up data)" },
	{ metric: "Photography quality perception", before: "Stock (perceived)", after: "Real work (perceived)", change: "Real work (perceived)" },
	{ metric: "Print vs digital format split", before: "Print only", after: "70% digital, 30% print", change: "70% digital, 30% print" },
	{ metric: "Content clarity (prospect survey)", before: "2.9/5", after: "4.4/5", change: "4.4/5" }
];

const SUCCESS_FACTORS = [
	{
		title: "Client perspective is the narrative strategy",
		desc: "A brochure written from the company's perspective is a company document. A brochure written from the client's perspective is a sales tool. The sequence change — leading with the client's problem rather than the company's history — was the most impactful single decision."
	},
	{
		title: "Editorial photography earns reading time",
		desc: "Stock photography is processed and dismissed. Custom photography showing real work, real people, and real outcomes earns a second look and communicates credibility that stock images structurally cannot. The photography brief was as important as the design brief."
	},
	{
		title: "The grid makes pages feel designed",
		desc: "A 12-column grid applied consistently across all pages is invisible when it works — the reader sees engaging layouts, not a grid. It makes the difference between pages that feel designed and pages that feel assembled."
	}
];

const FAQS = [
	{
		q: "What is the ideal length for a company capabilities brochure?",
		a: "8–16 pages is the most common range for capabilities brochures. The right length is determined by the depth of content the sales context requires — not by the amount of information the company wants to communicate. Most brochures should be edited significantly from their first draft. A well-edited 8-page brochure will always outperform a comprehensive 24-page one."
	},
	{
		q: "Should a brochure be designed for print or digital?",
		a: "Ideally both. A print-first design can be adapted into a digital PDF relatively easily; a digital-first design may require significant work to produce a high-quality printed version. Designing for print first — then adapting for digital with interactive elements — typically produces better results in both formats."
	}
];

export default function BrochureDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Capabilities Brochure Design Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned a capabilities brochure with a client-first narrative and editorial grid system, shortening sales consideration by 19%."
				canonical="/services/digital-experience/brochure-design"
				keywords="Brochure Design, Capabilities Brochure, Sales Brochure, Editorial Design, Grid System, Print Brochure, Digital PDF, Corporate Brochure, B2B Marketing, Graphic Design"
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
					categoryTag="Case Study · Graphic Design"
					title="How a Redesigned Capabilities Brochure Became the Sales Team's Most-Used Asset and Shortened the Consideration Phase 19%"
					description="A company had a capabilities brochure that the sales team rarely sent and clients rarely read. It was twelve pages of dense copy, stock photography, and a timeline of company milestones that told the company's story in the order it happened rather than the order it was useful to a prospective client. OpenGridLabs redesigned it as a sales tool with a client-facing narrative, editorial photography direction, and a grid system that made the content genuinely engaging."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Professional Services / B2B (anonymised)" },
						{ label: "Scope", value: "12-page capabilities brochure — full redesign" },
						{ label: "Timeline", value: "10 weeks" },
						{ label: "Format", value: "Print (250gsm cover, 170gsm inner) and interactive PDF" }
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
					contextIcon={<BookOpen className="w-5 h-5" />}
					contextParagraphs={[
						"Our client had a 12-page capabilities brochure that was technically complete — it covered the company's history, services, team, and clients — and practically useless in a sales context. The company history started on page 2; clients' needs didn't appear until page 9. The photography was generic stock. The copy was written for the company, not for the reader. The sales team had largely stopped sending it because the feedback was that it 'didn't say anything interesting'.",
						"The redesign started from the same question as all effective sales communication: what does the prospect need to know, in what order, to move from consideration to confidence? The answer was almost exactly the reverse of the existing structure. OpenGridLabs rebuilt the narrative from the client's perspective: problem and context first, service capabilities second, evidence and case studies third, team and credentials last — supported by editorial photography that showed real work rather than stock confidence.",
						"A brochure is a multi-page printed or digital document used to communicate a company's capabilities, products, or services to a target audience. Unlike a website, a brochure is a fixed-sequence communication with a defined narrative arc — it tells a story from page 1 to the last page, with every element of design serving the goal of moving the reader from interest to confidence. Good brochure design combines editorial quality, clear hierarchy, and a grid system that makes pages visually engaging without sacrificing legibility."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is a Brochure?"
					definitionText="A brochure is a multi-page printed or digital document used to communicate a company's capabilities, products, or services to a target audience. Unlike a website, a brochure is a fixed-sequence communication with a defined narrative arc — it tells a story from page 1 to the last page, with every element of design serving the goal of moving the reader from interest to confidence. Good brochure design combines editorial quality, clear hierarchy, and a grid system that makes pages visually engaging without sacrificing legibility."
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
					description={"Replacing self-centric copy and generic stock layouts with a structured, client-first capabilities presentation."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Brochure Design Process"}
					description={"A thorough design strategy establishing narrative grids, layout structures, and high-quality printed outputs."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project."}
					rightColumnTitle={"Brochure Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A ten-week capabilities brochure design roadmap from strategy and grid setups to final print production."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="Measuring team survey ratings, consideration timeline shifts, and layout clarity improvements."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The old brochure told them about us. The new one tells them about themselves. It starts with the problem they have, not with us. That change alone — before the design, before the photography — was the reason it started working."}
					author={"Head of Business Development"}
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
					title={"Sales brochure the team doesn't send?"}
					description={"OpenGridLabs designs capabilities brochures — client-first narrative, editorial photography, and a grid system — that become sales tools rather than storage liabilities."}
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
