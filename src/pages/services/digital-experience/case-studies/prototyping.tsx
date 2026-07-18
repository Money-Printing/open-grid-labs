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
	{ value: "4 wk", label: "Concept validated, not 4 months of dev", accent: "from-pink-500 to-rose-600" },
	{ value: "6 wk", label: "Estimated rework avoided post-development", accent: "from-purple-500 to-indigo-600" },
	{ value: "3", label: "Critical interaction assumptions disproven", accent: "from-blue-500 to-cyan-600" },
	{ value: "82%", label: "Task success rate after prototype iteration", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Four months of engineering commitment planned without any user validation of the core concept" },
	{ text: "Three critical interaction assumptions embedded in the design that had never been tested" },
	{ text: "No way to evaluate the concept without building it, in the team's current process" },
	{ text: "Previous product launched after full development had required 6-week post-launch redesign" },
	{ text: "Stakeholder pressure to start development immediately rather than spend time on research" }
];

const SOLUTIONS = [
	{ text: "High-fidelity Figma prototype covering the complete user journey for the new feature" },
	{ text: "Realistic enough detail — actual content, real interactions — to produce genuine user reactions" },
	{ text: "Six moderated usability sessions per prototype iteration, with real target users" },
	{ text: "Rapid iteration between sessions, updating the prototype within 24 hours of each session" },
	{ text: "Quantitative task-success tracking alongside qualitative observation to triangulate findings" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Concept", items: ["User journey definition", "Interaction hypothesis", "Fidelity decision", "Prototype scope"], color: "hsl(330,100%,60%)" },
	{ title: "Build", items: ["High-fidelity Figma", "Real content", "Realistic interactions", "Edge state coverage"], color: "hsl(280,100%,65%)" },
	{ title: "Test", items: ["Moderated sessions", "Task scenarios", "Think-aloud", "Maze supplement"], color: "hsl(200,100%,50%)" },
	{ title: "Iterate", items: ["Session synthesis", "Priority issues", "Prototype updates", "Re-testing critical paths"], color: "hsl(145,100%,45%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Prototype Build (Weeks 1–2)",
		desc: "OpenGridLabs built a high-fidelity Figma prototype covering the complete new feature flow, with realistic content and interactions. Three specific interaction hypotheses were embedded as testable assumptions from the start, giving each test session a clear evaluative focus.",
		accent: "from-pink-500 to-rose-500"
	},
	{
		number: "Phase 2",
		title: "Testing & Iteration Round 1 (Week 3)",
		desc: "Six moderated sessions were run with real target users. Two of the three interaction hypotheses were disproven. The critical navigation pattern users expected was fundamentally different from the one designed. The prototype was updated within 24 hours of identifying the pattern.",
		accent: "from-purple-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Re-test & Validation (Week 4)",
		desc: "The updated prototype was tested in four additional sessions. Task success rate rose from 34% to 82%. The validated design direction was documented as the specification for development, with the tested prototype serving as the design handoff.",
		accent: "from-blue-500 to-cyan-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "Task success rate", before: "34% (initial prototype)", after: "82% (iterated)", change: "82% (iterated)" },
	{ metric: "Core concept validation", before: "Untested", after: "Validated with evidence", change: "Validated with evidence" },
	{ metric: "Critical assumptions disproven", before: "Unknown", after: "3 identified, all corrected", change: "3 identified, all corrected" },
	{ metric: "Estimated post-dev rework avoided", before: "—", after: "6 weeks", change: "6 weeks" },
	{ metric: "Development confidence", before: "Low (unvalidated)", after: "High (tested)", change: "High (tested)" },
	{ metric: "Time to validated direction", before: "4 months (dev cycle)", after: "4 weeks (prototype)", change: "4 weeks (prototype)" }
];

const SUCCESS_FACTORS = [
	{
		title: "High fidelity earns real reactions",
		desc: "A low-fidelity prototype tells users they are looking at a sketch. A high-fidelity prototype produces the genuine reactions — including the wrong ones — that make testing valuable. Fidelity is not vanity; it is the investment that makes feedback actionable."
	},
	{
		title: "Test specific hypotheses",
		desc: "Open-ended usability testing produces open-ended feedback. Entering each session with three specific testable assumptions produces evidence that directly informs design decisions rather than a long list of opinions."
	},
	{
		title: "Iteration between sessions is non-negotiable",
		desc: "Testing six users and then synthesising is a study. Testing two, updating, testing two more, updating, and testing two more is a design process. The second approach produces a better prototype and a more confident design direction in the same time."
	}
];

const FAQS = [
	{
		q: "What is the difference between a wireframe prototype and a high-fidelity prototype?",
		a: "A wireframe prototype uses low-fidelity structural layouts to test flow logic and navigation. A high-fidelity prototype uses near-final visual design and realistic interactions to test specific UX assumptions and generate genuine user reactions closer to those they would have with the real product."
	},
	{
		q: "What is prototype testing?",
		a: "Prototype testing places a prototype in front of real users with specific task scenarios and observes how they interact. Moderated sessions involve a researcher guiding and questioning; unmoderated sessions use tools like Maze to collect data at scale. Both produce evidence for design decisions."
	}
];

export default function PrototypingCaseStudy() {
	return (
		<>
			<SEO
				title="Prototyping UI/UX Case Study | OpenGridLabs"
				description="How OpenGridLabs used high-fidelity interactive prototyping and usability testing to validate a product concept in 4 weeks, avoiding 6 weeks of rework."
				canonical="/services/digital-experience/prototyping"
				keywords="Prototyping, Interactive Prototype, High-Fidelity Prototype, Figma, Usability Testing, Design Validation, Rapid Prototyping, UX Research, User Testing, UI/UX"
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
					title="How Interactive Prototypes Validated a New Product Concept in 4 Weeks and Avoided 4 Months of Wasted Development"
					description="A company was about to commit four months of engineering time to building a new product feature. OpenGridLabs built a high-fidelity interactive prototype in two weeks and tested it with real users in the next two. The core concept was validated — but a critical interaction assumption was wrong. Fixing it in the prototype took two days. Fixing it after four months of development would have taken six weeks."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Consumer Tech (anonymised)" },
						{ label: "Scope", value: "New core feature — pre-development" },
						{ label: "Timeline", value: "4 weeks prototype → validated direction" },
						{ label: "Tools", value: "Figma · Maze · Moderated sessions" }
					]}
				/>

				<CaseStudyCarousel
					slug="prototyping"
					title="How Interactive Prototypes Validated a New Product Concept in 4 Weeks and Avoided 4 Months of Wasted Development"
					accentColor="pink"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/prototyping/1.jpg",
						"/images/case-studies/prototyping/2.jpg"
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
						"Our client was planning a significant new feature — a four-month engineering commitment. The product team felt confident about the concept based on competitive analysis and internal discussion. OpenGridLabs asked a single question: has anyone tried to use this with real users? The answer was no. The concept had never been tested outside the building.",
						"OpenGridLabs proposed a four-week prototype-and-test cycle before development started. Two weeks to build a high-fidelity interactive prototype realistic enough for genuine user reactions, two weeks to run moderated usability sessions and iterate. The argument was simple: if the concept was right, testing would confirm it with evidence that made the engineering commitment easy. If it was wrong, better to know now.",
						"UX prototyping creates a testable, interactive simulation of a product or feature before it is built. Prototypes range from low-fidelity click-through wireframes to high-fidelity designs indistinguishable from the finished product. The purpose is to create something realistic enough to generate genuine user reactions and test specific assumptions — without the cost and irreversibility of actual development."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is UX Prototyping?"
					definitionText="UX prototyping creates a testable, interactive simulation of a product or feature before it is built. Prototypes range from low-fidelity click-through wireframes to high-fidelity designs indistinguishable from the finished product. The purpose is to create something realistic enough to generate genuine user reactions and test specific assumptions — without the cost and irreversibility of actual development."
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
					description={"Avoiding months of design debt and engineering waste by validating structural layouts early."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Prototyping Framework"}
					description={"The prototyping workflow structures visual high-fidelity designs, moderated user testing, and rapid iterations to de-risk development."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage builds on validated evidence from the last. Decisions grounded in user data rather than assumptions reduce rework, compress iteration cycles, and produce outcomes the team can defend with confidence."}
					rightColumnTitle={"Prototyping Pipeline Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A compressed 4-week timeline validating core product directions with real target users."}
					phaseColors={["hsl(330,100%,60%)", "hsl(280,100%,65%)", "hsl(200,100%,50%)"]}
					axisGradientClass={"from-pink-500 via-purple-500 to-blue-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults
					description="Validating interface flows early prevented 6 weeks of engineering rework and dramatically lifted initial task success rates."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"The moment a user said 'I'd expect this button to be here' — pointing at exactly where we hadn't put it — we knew we had the right problem. Two days in the prototype. Six weeks in production. Easy call."}
					author={"CPO"}
					subtitle={"Confidential Consumer Technology Company"}
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
					title={"About to commit months of development to an untested concept?"}
					description={"OpenGridLabs builds interactive prototypes and tests them with real users — validating core assumptions before development starts so engineering effort goes to a design that works."}
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
