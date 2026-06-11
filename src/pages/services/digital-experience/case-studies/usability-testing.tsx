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
	{ value: "14/18", label: "Critical usability issues resolved pre-launch", accent: "from-pink-500 to-rose-600" },
	{ value: "3×", label: "First-week activation vs. company average", accent: "from-purple-500 to-indigo-600" },
	{ value: "77", label: "SUS score post-iteration (from 52)", accent: "from-blue-500 to-cyan-600" },
	{ value: "4 wk", label: "Three testing rounds and fixes before launch", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "No structured usability testing in the product development process — issues found post-launch only" },
	{ text: "Design reviews were internal — only people who built the product evaluated it" },
	{ text: "No baseline SUS measurement to track usability improvement over time" },
	{ text: "Four weeks to launch with six months of development to protect from avoidable failures" },
	{ text: "Team confidence based on internal demos, not observed user behaviour" }
];

const SOLUTIONS = [
	{ text: "Three rounds of 5-user moderated usability testing with task scenarios targeting known risk areas" },
	{ text: "SUS scoring after each round to track improvement quantitatively across iterations" },
	{ text: "Think-aloud protocol capturing user reasoning, not just outcomes" },
	{ text: "Same-day synthesis and priority scoring allowing fixes to begin within 24 hours of each session" },
	{ text: "Final unmoderated Maze study on 40 users to validate fixes at scale before launch" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Plan", items: ["Research questions", "Task scenario design", "Participant recruitment", "SUS baseline"], color: "hsl(330,100%,60%)" },
	{ title: "Test", items: ["Moderated think-aloud", "Task completion tracking", "Error logging", "SUS measurement"], color: "hsl(280,100%,65%)" },
	{ title: "Synthesise", items: ["Issue severity scoring", "Root cause analysis", "Fix prioritisation", "Team debrief"], color: "hsl(200,100%,50%)" },
	{ title: "Iterate", items: ["High-priority fixes", "Re-test critical paths", "SUS re-measurement", "Launch readiness"], color: "hsl(145,100%,45%)" }
];

const PHASES = [
	{
		number: "Round 1",
		title: "Discovery Testing (Week 1)",
		desc: "Five moderated sessions identified 18 critical issues. Issues were categorised by severity — blocking, serious, minor — and root cause type. High-severity fixes were handed to the team within 24 hours of the last session.",
		accent: "from-pink-500 to-rose-500"
	},
	{
		number: "Round 2",
		title: "Validation Testing (Week 2)",
		desc: "Five sessions re-tested the fixed flows and explored two previously untested areas. 11 of the 14 fixes were confirmed resolved. Three new serious issues were identified in the untested areas. SUS score rose from 52 to 67.",
		accent: "from-purple-500 to-indigo-600"
	},
	{
		number: "Round 3",
		title: "Pre-Launch Validation (Week 3–4)",
		desc: "Five sessions on the near-final product confirmed 14 resolved issues. An unmoderated Maze study with 40 users validated that the fixes held at scale. SUS reached 77. Four remaining known issues were documented for the post-launch roadmap.",
		accent: "from-blue-500 to-cyan-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "SUS score", before: "52 (Round 1)", after: "77 (Round 3)", change: "+25 pts" },
	{ metric: "Critical issues resolved", before: "0 / 18", after: "14 / 18", change: "14 / 18" },
	{ metric: "First-week activation rate", before: "Company avg baseline", after: "3× company average", change: "3× company average" },
	{ metric: "Post-launch usability tickets (Week 1)", before: "Est. high", after: "Low", change: "-71% vs. prev. launch" },
	{ metric: "Issue detection per session", before: "—", after: "3.6 issues / user", change: "3.6 issues / user" },
	{ metric: "Team usability awareness", before: "Low", after: "High (participated)", change: "High (participated)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Five users are enough",
		desc: "Five users in a well-designed moderated study reliably surface 80% of critical usability issues. The goal is not statistical representation; it is issue discovery. Once the same pattern appears across three users, you have a problem worth fixing."
	},
	{
		title: "Rapid iteration between rounds",
		desc: "A usability study that takes three weeks to report and then informs next quarter's design is not a testing programme — it is a research project. Same-day synthesis and 24-hour fix handoff turned each round into a design iteration."
	},
	{
		title: "SUS gives you a number to move",
		desc: "Qualitative findings are compelling in the debrief room and easy to deprioritise in the sprint meeting. A SUS score that goes from 52 to 77 is a business outcome that competes effectively for prioritisation."
	}
];

const FAQS = [
	{
		q: "What is the System Usability Scale (SUS)?",
		a: "The SUS is a 10-question standardised questionnaire that produces a single score from 0–100 measuring the perceived usability of a product. Scores above 68 are considered above average. It provides a simple, comparable measure of usability improvement over iterations."
	},
	{
		q: "How many users do you need for usability testing?",
		a: "Five users in a well-designed moderated study surface approximately 80% of a product's critical usability issues. For issue discovery — identifying what is wrong — five is sufficient. For statistical validation of a design change, a larger quantitative study is required."
	}
];

export default function UsabilityTestingCaseStudy() {
	return (
		<>
			<SEO
				title="Usability Testing UI/UX Case Study | OpenGridLabs"
				description="How OpenGridLabs ran rapid rounds of moderated usability testing to find 80% of critical problems before launch and 3x the first-week activation rate."
				canonical="/services/digital-experience/usability-testing"
				keywords="Usability Testing, UX Testing, SUS Score, Moderated Testing, Think-Aloud, Task-Based Testing, Rapid Iteration, Pre-Launch Testing, User Research, UI/UX"
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
					title="How Usability Testing Found 80% of Critical Problems Before Launch and Contributed to a First-Week Activation Rate 3× the Average"
					description="A company was four weeks from launching a significant new product area. OpenGridLabs ran three rapid rounds of moderated usability testing — five users per round, issues fixed between rounds — identifying and resolving 14 of 18 critical usability problems before launch. The product launched with a first-week activation rate three times the company's historical average."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Consumer / SaaS (anonymised)" },
						{ label: "Scope", value: "Pre-launch usability programme" },
						{ label: "Timeline", value: "4 weeks, 3 testing rounds" },
						{ label: "Methods", value: "Moderated sessions · SUS · Think-aloud · Rapid iteration" }
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
						"Our client was four weeks from launching a new product area they had been building for six months. The team was confident — internal demos had gone well, the engineering was solid, and the visual design had received positive feedback in design reviews. OpenGridLabs asked to run usability testing before launch. The request was met with some resistance: the team felt they knew their product.",
						"The first round of five moderated sessions identified eighteen critical issues — interaction patterns that consistently caused failure across participants. Fourteen were fixed in the three weeks before launch. The four that remained were known and understood. The launch activation rate was three times the company's historical average for new product areas — a result the team attributed directly to the pre-launch testing programme.",
						"Usability testing places real users in front of a product with specific task scenarios and observes how they interact, where they struggle, and where they succeed. Moderated testing involves a researcher guiding and questioning; unmoderated testing collects data at scale without a facilitator. The System Usability Scale (SUS) provides a standardised score for comparing usability over time. Five users in a well-designed moderated study can surface 80% of a product's critical issues."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is Usability Testing?"
					definitionText="Usability testing places real users in front of a product with specific task scenarios and observes how they interact, where they struggle, and where they succeed. Moderated testing involves a researcher guiding and questioning; unmoderated testing collects data at scale without a facilitator. The System Usability Scale (SUS) provides a standardised score for comparing usability over time. Five users in a well-designed moderated study can surface 80% of a product's critical issues."
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
					description={"Bridging the gap between internal product assumptions and real user behaviours before public release."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Usability Testing Programme"}
					description={"The diagnostic testing pipeline structured research baseline tasks, error analysis, and quantitative validation studies."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage builds on validated evidence from the last. Decisions grounded in user data rather than assumptions reduce rework, compress iteration cycles, and produce outcomes the team can defend with confidence."}
					rightColumnTitle={"Testing Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"Three sequential diagnostic testing sprints executed rapidly over a 4-week window."}
					phaseColors={[ "hsl(330,100%,60%)", "hsl(280,100%,65%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-pink-500 via-purple-500 to-blue-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults 
					description="Running iterative moderated studies yielded significant user validation metrics and directly drove adoption rate increases."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We thought we knew the product. The first user in the first session went somewhere we'd never expected and got completely stuck. By user three we knew we had a serious problem. By user five we knew exactly what to fix. That's the test paying for itself."}
					author={"Head of Product Design"}
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
					title={"About to launch without ever watching a real user try to use it?"}
					description={"OpenGridLabs runs usability testing programmes — moderated sessions, SUS scoring, and rapid iteration cycles — that find and fix critical problems before they reach your users."}
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
