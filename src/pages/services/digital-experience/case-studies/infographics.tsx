import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Activity, 
	Database,
	Zap
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
	{ value: "3×", label: "Increase in report download rate", accent: "from-amber-500 to-orange-600" },
	{ value: "47%", label: "Reduction in average reading time", accent: "from-yellow-500 to-amber-600" },
	{ value: "12", label: "Infographics across the full report", accent: "from-orange-500 to-red-600" },
	{ value: "8 wk", label: "Data to designed and distributed", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "60-page report of tables and text accessible only to specialists who committed significant reading time" },
	{ text: "Key findings buried in pages 22–31 — the report's most significant insights had no visual prominence" },
	{ text: "No visual hierarchy — every data point presented with equal prominence" },
	{ text: "Charts using default software styling with no design intention" },
	{ text: "Report format unsuitable for social sharing — no single-screen excerpt capturing the key message" }
];

const SOLUTIONS = [
	{ text: "12 infographics distilling the report's 12 key findings into visually led, immediately graspable communications" },
	{ text: "A visual story arc across the infographic sequence guiding the reader through the report's narrative" },
	{ text: "Chart type selection prioritising the most appropriate visualisation for each data relationship" },
	{ text: "A colour system encoding the report's thematic categories consistently across all 12 infographics" },
	{ text: "Social-format exports of each infographic enabling sharing of individual findings independently" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Data", items: ["Key findings", "Story arc", "Data accuracy", "Simplification"], color: "hsl(45,100%,50%)" },
	{ title: "Strategy", items: ["Chart type selection", "Visual hierarchy", "Colour encoding", "Typography density"], color: "hsl(35,100%,50%)" },
	{ title: "Design", items: ["Infographic design", "Layout grid", "Icon & illustration", "Brand application"], color: "hsl(20,100%,50%)" },
	{ title: "Distribution", items: ["Digital PDF", "Social exports", "Print posters", "Sharing assets"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Data Audit & Story Arc (Weeks 1–2)",
		desc: "OpenGridLabs worked with the research team to identify the 12 most significant findings and arrange them into a narrative arc — the story the data told when presented in the right sequence. The simplification decisions (what to show, what to move to the appendix) were agreed with the research team before any design began.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Visual Strategy & Design (Weeks 3–6)",
		desc: "The visual strategy was established: chart type selection for each finding, the colour encoding system, and the infographic grid. All 12 infographics were designed, with each reviewed for accuracy by the research team and for clarity by a non-specialist test reader before finalisation.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Production & Distribution Formats (Weeks 7–8)",
		desc: "The infographics were integrated into the redesigned report PDF and exported in social-sharing formats. Four were produced as standalone A1 print posters for conference and event use. Social-format versions were produced for all 12 for the LinkedIn distribution campaign.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Report download rate", before: "Baseline", after: "3× baseline", change: "+200%" },
	{ metric: "Average reading time", before: "60+ pages / 2+ hours", after: "Key findings / 30 min", change: "-47%" },
	{ metric: "Social shares of report", before: "Low", after: "Measurably higher", change: "Measurably higher" },
	{ metric: "Citation rate (trade press)", before: "Below benchmark", after: "Above benchmark", change: "Above benchmark" },
	{ metric: "Non-specialist readership", before: "Low", after: "High (accessible format)", change: "High (accessible format)" },
	{ metric: "Conference poster requests", before: "0 (not produced)", after: "4 posters in demand", change: "4 posters in demand" }
];

const SUCCESS_FACTORS = [
	{
		title: "Data storytelling is a sequence decision",
		desc: "The same data communicated in a different order tells a different story. The infographic sequence was designed as a narrative — establishing context, revealing the key finding, providing supporting evidence — rather than presenting data in the order it was collected."
	},
	{
		title: "Chart type is a communication choice",
		desc: "A bar chart, a line chart, and a scatter plot can all display the same data. Each communicates a different relationship. Choosing the chart type that most clearly shows the relationship the finding is about is a design decision, not a default."
	},
	{
		title: "Visual hierarchy makes findings scannable",
		desc: "An infographic where everything has equal prominence has the same problem as the dense text report it replaced. A visual hierarchy — a headline number, a supporting visualisation, a brief explanatory note — allows scanning to extract the key finding in seconds."
	}
];

const FAQS = [
	{
		q: "What makes a good infographic?",
		a: "A good infographic has a clear story (a sequence of information that builds to a meaningful conclusion), appropriate chart types (matched to the data relationship being shown), visual hierarchy (the most important information most prominent), and sufficient simplification (the minimum data needed to communicate the finding, not all available data)."
	},
	{
		q: "What software is used to design infographics?",
		a: "Professional infographics are typically designed in Adobe Illustrator (for complex, publication-quality designs with precise control), Figma (for web-optimised, collaborative design), or specialised tools like Datawrapper or Flourish (for data-driven charts that update from spreadsheets). The choice depends on the complexity of the data, the output format, and the update frequency required."
	}
];

export default function InfographicsCaseStudy() {
	return (
		<>
			<SEO
				title="Data Storytelling Infographics Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned an annual research report's data visualization strategy with 12 infographics, lifting download rates by 3×."
				canonical="/services/digital-experience/infographics"
				keywords="Infographics, Data Visualisation, Data Storytelling, Chart Design, Visual Data, Information Design, Research Infographic, Business Infographic, Social Infographic, Graphic Design"
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
					title="How Data Storytelling Infographics Increased Report Downloads 3× and Made Complex Research Accessible to Non-Specialists"
					description="A company producing an annual industry research report was seeing strong data quality but weak distribution. The report was 60 pages of tables and text — authoritative but inaccessible to the busy executives it was trying to reach. OpenGridLabs redesigned the data communication strategy: the report's key findings became a series of infographics that told the story visually, making the insights immediately graspable and dramatically more shareable."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Research / Professional Services (anonymised)" },
						{ label: "Scope", value: "Annual research report — infographic redesign" },
						{ label: "Timeline", value: "8 weeks" },
						{ label: "Deliverables", value: "12 infographics · Digital PDF · Social graphics · Standalone print posters" }
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
					contextIcon={<Activity className="w-5 h-5" />}
					contextParagraphs={[
						"Our client produces an annual research report used to establish thought leadership in their industry. The data quality was excellent — the research methodology was rigorous and the findings were genuinely significant. But the report's distribution and engagement numbers consistently underperformed: it was downloaded less than comparable reports from competitors, shared infrequently on social media, and cited less than its quality warranted. The problem was accessibility, not quality.",
						"The report communicated to specialists. Its tables were precise, its methodology was documented, its footnotes were detailed. Executives and non-specialists who would have found the insights valuable encountered a format that required significant commitment to extract the value. OpenGridLabs translated the key findings into a set of infographics that communicated the most important conclusions visually — with the full data available in the appendix for those who wanted it.",
						"An infographic is a visual representation of information, data, or knowledge — using charts, diagrams, icons, illustrations, and concise text to communicate complex or large-volume information in a form that is faster to understand than unformatted data or prose. Good infographic design is not decoration on data — it is a communication decision: choosing what to show, how to show it, and in what sequence to tell the story the data contains."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Is an Infographic?"
					definitionText="An infographic is a visual representation of information, data, or knowledge — using charts, diagrams, icons, illustrations, and concise text to communicate complex or large-volume information in a form that is faster to understand than unformatted data or prose. Good infographic design is not decoration on data — it is a communication decision: choosing what to show, how to show it, and in what sequence to tell the story the data contains."
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
					description={"Replacing flat data tables and dense prose with structured narrative charts and category color encodings."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Infographic Design Process"}
					description={"A systematic translation workflow spanning data audit, visual strategy mapping, layout grids, and multi-format exports."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project."}
					rightColumnTitle={"Infographics Production Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"An eight-week visual data translation roadmap from narrative workshops and layout design to poster print management."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="Deploying narrative-led visual charts lifted downloads, citations, and non-specialist readability."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We'd been producing the same dense, text-heavy report for six years and wondering why nobody was reading it. The infographics told the same story in a tenth of the space. Downloads tripled in the first week of release."}
					author={"Head of Thought Leadership"}
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
					title={"Research findings nobody is reading?"}
					description={"OpenGridLabs turns complex data into visual stories — infographics that communicate findings immediately, generate shares, and reach the audiences dense reports never do."}
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
