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
	{ value: "29%", label: "Reduction in 90-day churn", accent: "from-pink-500 to-rose-600" },
	{ value: "18 pt", label: "NPS improvement", accent: "from-purple-500 to-indigo-600" },
	{ value: "7", label: "High-friction moments identified and redesigned", accent: "from-blue-500 to-cyan-600" },
	{ value: "16 wk", label: "Journey mapping to shipped experience", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Churn concentrated at 30 and 90 days with no clear understanding of why at those specific points" },
	{ text: "Seven identifiable transition moments nobody had designed — each a potential drop-off" },
	{ text: "NPS 12 points below benchmark despite strong satisfaction scores in interviews" },
	{ text: "Product team improving individual screens without addressing the journey-level problems" },
	{ text: "No shared model of the complete user journey — different teams owned different parts with no handoff design" }
];

const SOLUTIONS = [
	{ text: "Complete journey map across three user phases: activation, habit formation, and collaboration" },
	{ text: "Friction audit at all seven transition moments using session recordings, cohort analysis, and exit interviews" },
	{ text: "Experience redesign of each transition with specific 'success criteria' per transition" },
	{ text: "Longitudinal tracking measuring whether the redesigned transitions improved 30 and 90-day retention" },
	{ text: "A shared journey map as a permanent product artefact used by product, design, and CS teams" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Understand", items: ["Current journey mapping", "Cohort analysis", "Exit interviews", "Session replay review"], color: "hsl(330,100%,60%)" },
	{ title: "Define", items: ["Transition moment identification", "Friction severity scoring", "Experience principles"], color: "hsl(280,100%,65%)" },
	{ title: "Design", items: ["Transition experience redesign", "Onboarding redesign", "Habit-formation mechanics", "Collaboration entry"], color: "hsl(200,100%,50%)" },
	{ title: "Measure", items: ["30/90-day cohort tracking", "NPS monitoring", "Transition completion rates", "Longitudinal testing"], color: "hsl(145,100%,45%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Journey Mapping & Friction Audit (Weeks 1–5)",
		desc: "OpenGridLabs mapped the complete journey for three user archetypes, triangulating session recordings, cohort retention data, and exit interviews. Seven transition moments with measurable drop-off were identified and scored by severity and addressability.",
		accent: "from-pink-500 to-rose-500"
	},
	{
		number: "Phase 2",
		title: "Experience Design (Weeks 6–12)",
		desc: "Each of the seven transitions was redesigned with explicit success criteria: what does a successful transition look, feel, and measure like? The first-login experience, the 'aha moment' path, the habit formation mechanics, and the collaboration entry were each redesigned as complete experiences, not as screen updates.",
		accent: "from-purple-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Ship, Measure & Iterate (Weeks 13–16)",
		desc: "The redesigned experience was shipped to 20% of new users with full instrumentation. 30-day retention improvement was confirmed in week 10 post-launch. 90-day retention data confirmed the improvement at week 14. Successful transitions were rolled to 100%; the one that hadn't improved was redesigned for a second round.",
		accent: "from-blue-500 to-cyan-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "90-day churn", before: "Baseline", after: "-29%", change: "-29%" },
	{ metric: "NPS", before: "Benchmark -12 pts", after: "Benchmark +6 pts", change: "+18 pts" },
	{ metric: "30-day activation rate", before: "Baseline", after: "+34%", change: "+34%" },
	{ metric: "Transition completion (avg 7 moments)", before: "Baseline", after: "+41%", change: "+41%" },
	{ metric: "CS team escalations", before: "Baseline", after: "-44%", change: "-44%" },
	{ metric: "User-reported ease of use (survey)", before: "3.2/5", after: "4.1/5", change: "4.1/5" }
];

const SUCCESS_FACTORS = [
	{
		title: "Journey-level problems need journey-level solutions",
		desc: "Improving individual screens in isolation cannot fix problems that occur at transitions between states. The journey map made the transition moments visible — and designable — for the first time."
	},
	{
		title: "Success criteria before design",
		desc: "Defining what a successful transition looks like before designing it — 'the user sets up their first recurring task' rather than 'the user sees the setup screen' — changed what the design was optimising for and made measurement straightforward."
	},
	{
		title: "The shared journey map changed the organisation",
		desc: "Beyond the design outcomes, the journey map as a persistent artefact gave product, design, and customer success a shared language for the same journey. Handoffs between teams improved because everyone finally had the same model of what users experienced."
	}
];

const FAQS = [
	{
		q: "What is UX design?",
		a: "UX design is the practice of designing the complete experience a user has with a product — the entire journey from discovery through onboarding to long-term engagement, encompassing the emotional quality, cognitive load, and moment-to-moment feeling of using the product."
	},
	{
		q: "What is a user journey map?",
		a: "A user journey map is a visualisation of the complete experience a user has with a product over time — the steps they take, their emotional state at each step, the moments of friction, and the gaps between what they need and what the product provides. It makes the full experience visible and designable."
	}
];

export default function UserExperienceDesignCaseStudy() {
	return (
		<>
			<SEO
				title="User Experience Design UI/UX Case Study | OpenGridLabs"
				description="How OpenGridLabs designed end-to-end B2B SaaS user experiences, reducing 90-day churn 29% and lifting NPS 18 points by resolving transition friction."
				canonical="/services/digital-experience/user-experience-design"
				keywords="User Experience Design, UX Design, Journey Mapping, UX Strategy, Churn Reduction, NPS, Friction Audit, Onboarding Design, Experience Design, UI/UX"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Pink/Rose Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(330,100%,50%) 0%, hsl(320,100%,45%) 50%, transparent 100%)`
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
					categoryTag="Case Study · UI/UX Design"
					title="How End-to-End UX Design Reduced Churn 29% by Fixing the Moments That Actually Determined Whether Users Stayed"
					description="A SaaS company had strong product-market fit on paper — users signed up, paid, and said they liked the product — but churn was persistently high and NPS lagged competitors. OpenGridLabs mapped the complete user experience, identified the seven moments where users most commonly disengaged, and redesigned the experience from first login to mature usage — reducing churn 29% and lifting NPS 18 points."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B SaaS (anonymised)" },
						{ label: "Scope", value: "End-to-end experience across 3 user phases" },
						{ label: "Timeline", value: "16 weeks" },
						{ label: "Methods", value: "Journey Mapping · Friction Audit · Experience Design · Longitudinal Testing" }
					]}
				/>

				
								<CaseStudyCarousel
													slug="user-experience-design"
													title="How Journey Mapping Uncovered the Hidden Moments That Drove Churn"
													accentColor="pink"
													aspectRatioClass="aspect-[3/2]"
													images={[
														"/images/case-studies/user-experience-design/1.jpg",
														"/images/case-studies/user-experience-design/2.jpg"
													]}
												/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-pink-500/30"
					hoverTextClass="group-hover:text-pink-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Paintbrush className="w-5 h-5" />}
					contextParagraphs={[
						"Our client had a product that worked and a customer base that said they liked it. Churn was nevertheless high — particularly at 30 and 90 days — and NPS trailed what the satisfaction scores suggested it should be. The team had been fixing individual screens in response to support tickets and heatmap data, but the needle wasn't moving. Individual screen improvements weren't addressing the problem because the problem wasn't on individual screens.",
						"The experience was failing at specific transition moments — the points where users moved from one phase of the journey to another: from signed up to genuinely activated, from occasional use to habit, from solo use to collaborative. Each transition was a friction point nobody had designed intentionally. OpenGridLabs mapped the complete journey from the user's perspective, identified the seven moments that most predicted disengagement, and redesigned the experience holistically around making those transitions succeed.",
						"User experience design is the practice of designing the complete experience a user has with a product — not just individual screens but the entire journey from discovery through first use to long-term engagement. It encompasses the emotional quality of interactions, the cognitive load of decisions, and the moment-to-moment feeling of progress and control. UX design asks 'what is the user experiencing?' rather than 'what does this screen look like?'"
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is User Experience Design?"
					definitionText="User experience design is the practice of designing the complete experience a user has with a product — not just individual screens but the entire journey from discovery through first use to long-term engagement. It encompasses the emotional quality of interactions, the cognitive load of decisions, and the moment-to-moment feeling of progress and control. UX design asks 'what is the user experiencing?' rather than 'what does this screen look like?'"
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-pink-500/10"
					definitionIconBorderClass="border-pink-500/20"
					definitionIconColorClass="text-pink-400"
					glowColorClass="bg-pink-400"
					gradientFromClass="from-pink-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Challenges & Solutions"}
					description={"Resolving systemic churn bottlenecks by intentionally designing journey-level transition points."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"UX Design Process"}
					description={"An end-to-end framework starting with journey mapping and progressing to transition metrics tracking and cohort auditing."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage builds on validated evidence from the last. Decisions grounded in user data rather than assumptions reduce rework, compress iteration cycles, and produce outcomes the team can defend with confidence."}
					rightColumnTitle={"UX Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A systematic 16-week timeline resolving onboarding, habit-formation, and collaborative transition states."}
					phaseColors={[ "hsl(330,100%,60%)", "hsl(280,100%,65%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-pink-500 via-purple-500 to-blue-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults 
					description="Holistic journey improvements decreased customer churn and boosted core NPS relative to historical baselines."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We'd been treating churn as a product problem. It turned out to be a journey problem — specifically, seven moments we'd never designed at all. Designing them intentionally moved metrics we'd been trying to move for two years."}
					author={"CEO"}
					subtitle={"Confidential SaaS Company"}
					accentLineClass={"bg-pink-400"}
					iconColorClass={"text-pink-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-pink-500/20"}
					iconColorClass={"text-pink-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-pink-400"}
					activeChevronColorClass={"text-pink-400"}
				/>

				<CaseStudyCta 
					title={"Users like your product but don't stick around?"}
					description={"OpenGridLabs designs end-to-end user experiences — journey mapping, friction audits, and transition redesign — so the moments that determine retention are designed intentionally."}
					moreCaseStudiesLink={"/services/digital-experience"}
					glowBgClass={"bg-pink-400"}
					iconColorClass={"text-pink-400"}
					btnGradientClass={"from-pink-400 to-indigo-500"}
					btnShadowColor={"236,72,153,0.2"}
				/>
			</div>
		</>
	);
}
