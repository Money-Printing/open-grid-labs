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
	{ value: "40%", label: "Reduction in perceived wait time (user study)", accent: "from-pink-500 to-rose-600" },
	{ value: "+22%", label: "Lift in product satisfaction scores", accent: "from-purple-500 to-indigo-600" },
	{ value: "0", label: "Server optimisations required", accent: "from-blue-500 to-cyan-600" },
	{ value: "8 wk", label: "Interaction audit to shipped patterns", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Users describing the product as 'slow' despite excellent server response times" },
	{ text: "No visual acknowledgement of user actions between click and system response" },
	{ text: "Abrupt state transitions with no visual continuity between screens" },
	{ text: "Silent loading states providing no feedback during data fetches" },
	{ text: "Interaction patterns inconsistent across the product — same actions behaving differently in different contexts" }
];

const SOLUTIONS = [
	{ text: "Optimistic UI patterns providing immediate visual feedback before server confirmation" },
	{ text: "Skeleton screens and progressive loading replacing blank loading states" },
	{ text: "Micro-animation system for state transitions — enter, exit, and change — communicating continuity" },
	{ text: "Interaction pattern library documenting consistent behaviour for every common action type" },
	{ text: "Perceived performance testing framework measuring subjective speed alongside objective metrics" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Audit", items: ["Gap mapping", "Latency review", "Perception study", "Competitor benchmark"], color: "hsl(330,100%,60%)" },
	{ title: "Principles", items: ["IxD guidelines", "Timing rules", "Motion values", "Feedback hierarchy"], color: "hsl(280,100%,65%)" },
	{ title: "Design", items: ["Micro-interaction specs", "Skeleton patterns", "Optimistic UI", "Transition library"], color: "hsl(200,100%,50%)" },
	{ title: "Measure", items: ["Perceived speed study", "Satisfaction delta", "A/B testing on key flows"], color: "hsl(145,100%,45%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Interaction Audit & Perception Study (Weeks 1–2)",
		desc: "OpenGridLabs audited every interaction in the three key flows, mapping every action-response pair and the feedback provided at each step. A perception study with 12 users confirmed that users were interpreting feedback-less interactions as system failures rather than normal processing.",
		accent: "from-pink-500 to-rose-500"
	},
	{
		number: "Phase 2",
		title: "Interaction System Design (Weeks 3–6)",
		desc: "The interaction system was designed: optimistic UI patterns for the most frequent actions, skeleton screens for data-loading states, a motion system for transitions, and a feedback hierarchy governing when and how much feedback each action type warranted.",
		accent: "from-purple-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Implementation & Measurement (Weeks 7–8)",
		desc: "OpenGridLabs worked with engineering during implementation, specifying timing curves and durations precisely. A perception test was run with 20 users against the updated product, measuring perceived wait time alongside server metrics. A satisfaction survey was run four weeks post-ship.",
		accent: "from-blue-500 to-cyan-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "Perceived wait time (user study)", before: "Baseline", after: "-40%", change: "-40%" },
	{ metric: "Product satisfaction score", before: "Baseline", after: "+22%", change: "+22%" },
	{ metric: "Users citing 'slowness' as issue", before: "42% of detractors", after: "8% of detractors", change: "8% of detractors" },
	{ metric: "Actions with feedback", before: "~30%", after: "100%", change: "100%" },
	{ metric: "Loading states with skeleton screens", before: "0%", after: "100%", change: "100%" },
	{ metric: "Server optimisations required", before: "—", after: "Zero", change: "Zero" }
];

const SUCCESS_FACTORS = [
	{
		title: "Feedback is the product",
		desc: "From the user's perspective, an action that produces no visible response hasn't happened. Immediate feedback — even a simple state change on the element touched — is not polish; it is the interaction."
	},
	{
		title: "Perception is the metric",
		desc: "Optimising server response time while ignoring interaction feedback is optimising the wrong variable. Users experience the interaction layer, not the network trace. Both matter; the interaction layer was the gap."
	},
	{
		title: "Consistency reduces cognitive load",
		desc: "When the same action behaves differently in different contexts, users can't build a mental model of how the product responds. Consistent interaction patterns allow users to learn and generalise, building confidence."
	}
];

const FAQS = [
	{
		q: "What is interaction design?",
		a: "Interaction design is the practice of designing how users interact with a product — the feedback, transitions, and micro-interactions that communicate system state and acknowledge user actions, making the product feel responsive and in control."
	},
	{
		q: "What is perceived performance in UX?",
		a: "Perceived performance is how fast a product feels to users, as distinct from its objective technical performance. It is governed by interaction design decisions — feedback loops, skeleton screens, optimistic UI, and transition design — and can be improved significantly without changing server infrastructure."
	}
];

export default function InteractionDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Interaction Design UI/UX Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned an interaction layer with micro-interactions and skeleton screens, reducing perceived wait time by 40%."
				canonical="/services/digital-experience/interaction-design"
				keywords="Interaction Design, Micro-Interactions, Motion Design, UX Feedback, State Transitions, Optimistic UI, Skeleton Screens, Perceived Performance, UX Animation, UI/UX"
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
					title="How Intentional Micro-Interactions Reduced Perceived Wait Time 40% and Made the Product Feel Faster Without Touching the Server"
					description="A company's product had good server response times but users consistently described it as 'slow' and 'unresponsive'. OpenGridLabs diagnosed the problem as an interaction design gap — not a performance problem. Feedback-less interactions, abrupt state transitions, and silent loading states were making a fast product feel slow. Redesigning the interaction layer reduced perceived wait time 40% without a single server optimisation."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Productivity SaaS (anonymised)" },
						{ label: "Scope", value: "Core interaction layer across 3 key flows" },
						{ label: "Timeline", value: "8 weeks" },
						{ label: "Methods", value: "Interaction audit · Motion design · Feedback loops · Perceived performance testing" }
					]}
				/>

				<CaseStudyCarousel
									slug="interaction-design"
									title="How Interaction Design Made a Slow-Feeling Product Feel 40% Faster Without Touching the Server"
									accentColor="pink"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/interaction-design/1.jpg",
										"/images/case-studies/interaction-design/2.jpg"
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
						"Our client had invested heavily in infrastructure performance — their P95 server response times were excellent by any objective measure. But user satisfaction surveys consistently surfaced 'slowness' as a top complaint. NPS detractors cited speed as their primary reason. The engineering team was frustrated: the data said the product was fast; users kept saying it wasn't.",
						"OpenGridLabs diagnosed a perception gap. Technical performance and perceived performance are different things. A fast server response with no visual acknowledgement feels like nothing happened. An abrupt DOM update with no transition feels jarring. A blank screen during a 200ms load feels like a broken product. The product's interaction layer was providing no feedback between user action and system response — and users were interpreting silence as failure.",
						"Interaction design (IxD) is the practice of designing how users interact with a product — the feedback, responses, transitions, and micro-interactions that communicate system state, acknowledge user actions, and guide users through tasks. Good interaction design makes a product feel responsive, alive, and in control, reducing the anxiety that comes from uncertainty about whether an action registered or a process is progressing."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is Interaction Design?"
					definitionText="Interaction design (IxD) is the practice of designing how users interact with a product — the feedback, responses, transitions, and micro-interactions that communicate system state, acknowledge user actions, and guide users through tasks. Good interaction design makes a product feel responsive, alive, and in control, reducing the anxiety that comes from uncertainty about whether an action registered or a process is progressing."
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
					description={"Five interaction gaps were identified and resolved to make the UI feel instantaneous."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Interaction Design Architecture"}
					description={"The interaction redesign maps each phase of feedback—from initial trigger to final resolution—to minimize subjective wait times."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage builds on validated evidence from the last. Decisions grounded in user data rather than assumptions reduce rework, compress iteration cycles, and produce outcomes the team can defend with confidence."}
					rightColumnTitle={"Interaction Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"An 8-week structured roadmap from initial action-response audits to production rollout."}
					phaseColors={[ "hsl(330,100%,60%)", "hsl(280,100%,65%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-pink-500 via-purple-500 to-blue-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults 
					description="Objective measurements confirmed that perceived wait times dropped 40% with zero backend database or network adjustments."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The product wasn't slow. It just wasn't talking. Every change we made was about giving users a signal that something was happening. The perceived speed improvement came entirely from communication, not computation."}
					author={"Head of Design"}
					subtitle={"Confidential Productivity Company"}
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
					title={"Users saying your product feels slow when the data says otherwise?"}
					description={"OpenGridLabs designs interaction systems — feedback loops, micro-animations, optimistic UI, and skeleton screens — that make products feel responsive, alive, and in control."}
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
