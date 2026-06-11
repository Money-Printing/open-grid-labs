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
	{ value: "24", label: "User interviews conducted and synthesised", accent: "from-pink-500 to-rose-600" },
	{ value: "2×", label: "Task completion after research-led redesign", accent: "from-purple-500 to-indigo-600" },
	{ value: "6 mo", label: "Of misdirected design effort avoided", accent: "from-blue-500 to-cyan-600" },
	{ value: "12 wk", label: "Discovery to validated design direction", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Six months of redesign work built on unvalidated assumptions about user needs" },
	{ text: "No direct contact with users — all insight came from support tickets and analytics" },
	{ text: "Three critical tasks with high failure rates and no understanding of why" },
	{ text: "Design team and product team had conflicting theories about the root cause" },
	{ text: "Stakeholders reluctant to slow down to research when the team felt behind schedule" }
];

const SOLUTIONS = [
	{ text: "24 in-depth interviews with users spanning novice to power-user profiles" },
	{ text: "8 contextual inquiry sessions observing users working in their real environment" },
	{ text: "Jobs-to-be-Done framework to understand the outcomes users were actually trying to achieve" },
	{ text: "Affinity mapping workshop synthesising 400+ observations into actionable themes" },
	{ text: "Presented findings as user needs statements, not persona posters, directly driving design decisions" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Plan", items: ["Research questions", "Participant recruitment", "Method selection", "Discussion guide"], color: "hsl(330,100%,60%)" },
	{ title: "Gather", items: ["In-depth interviews", "Contextual inquiry", "Screen recordings", "Think-aloud sessions"], color: "hsl(280,100%,65%)" },
	{ title: "Synthesise", items: ["Affinity mapping", "Theme extraction", "JTBD statements", "Mental model mapping"], color: "hsl(200,100%,50%)" },
	{ title: "Apply", items: ["Design principles from data", "Validated problem statements", "Prioritised opportunity areas"], color: "hsl(145,100%,45%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Research Planning & Recruitment (Weeks 1–2)",
		desc: "OpenGridLabs defined the research questions the team most urgently needed answered, designed the discussion guide, and recruited 24 participants spanning the full range of user types — from first-week users to three-year power users — with a deliberate over-representation of users who had contacted support.",
		accent: "from-pink-500 to-rose-500"
	},
	{
		number: "Phase 2",
		title: "Fieldwork (Weeks 3–7)",
		desc: "Interviews and contextual inquiry sessions were conducted, recorded, and transcribed. The contextual sessions observed users completing the failing tasks in their actual work environment, revealing the environmental and workflow context that interviews alone would have missed.",
		accent: "from-purple-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Synthesis & Direction (Weeks 8–12)",
		desc: "OpenGridLabs ran a two-day affinity mapping workshop with the full product and design team, transforming 400+ observations into eight core user need themes. The findings reframed the problem entirely: users weren't confused by the interface — they were managing a mental model the product had never addressed.",
		accent: "from-blue-500 to-cyan-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "Task completion rate (key flow)", before: "38%", after: "76%", change: "+100%" },
	{ metric: "User assumptions validated by research", before: "0 of 6", after: "4 of 6 revised", change: "4 of 6 revised" },
	{ metric: "Support tickets (top 3 tasks)", before: "Baseline", after: "-54%", change: "-54%" },
	{ metric: "Design rework after research", before: "Extensive", after: "Minimal (evidence-led)", change: "Minimal (evidence-led)" },
	{ metric: "Stakeholder alignment on problem", before: "Low", after: "High (shared evidence base)", change: "High (shared evidence base)" },
	{ metric: "Time to confident design direction", before: "Months of debate", after: "12 weeks", change: "12 weeks" }
];

const SUCCESS_FACTORS = [
	{
		title: "Contextual inquiry finds what interviews miss",
		desc: "People describe what they think they do, not what they actually do. Observing users in their real environment revealed workarounds, environmental constraints, and workflow integrations that no interview would have surfaced."
	},
	{
		title: "Synthesis as a team sport",
		desc: "Running the affinity mapping workshop with product, design, and engineering together meant findings weren't handed over — they were co-discovered. Shared understanding replaced competing theories."
	},
	{
		title: "JTBD reframes the problem",
		desc: "Framing user needs as Jobs-to-be-Done — the outcomes users are hiring the product to achieve — shifted the design conversation from 'what should the UI look like?' to 'what does success look like for the user?'"
	}
];

const FAQS = [
	{
		q: "What is user research in UX?",
		a: "User research is the systematic study of users — their goals, behaviours, and pain points — using methods like interviews, contextual inquiry, and surveys. It replaces assumptions with evidence so design decisions are grounded in real human needs."
	},
	{
		q: "What is contextual inquiry?",
		a: "Contextual inquiry is a UX research method where a researcher observes and interviews a user in their actual working environment while they do real work. It reveals the environmental context, workarounds, and behaviours that participants would never volunteer in a formal interview."
	}
];

export default function UserResearchCaseStudy() {
	return (
		<>
			<SEO
				title="User Research UI/UX Case Study | OpenGridLabs"
				description="How OpenGridLabs conducted comprehensive user research (interviews, contextual inquiry) to validate assumptions and direct B2B SaaS product redesign."
				canonical="/services/digital-experience/user-research"
				keywords="User Research, UX Research, User Interviews, Contextual Inquiry, Affinity Mapping, Jobs-to-be-Done, Qualitative Research, User Needs, Design Discovery, UI/UX"
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
					title="How User Research Replaced Six Months of Wrong Assumptions with the Right Problem to Solve"
					description="A company had spent six months redesigning its core product flow and was about to ship it when usability testing revealed users were still failing at the same tasks. The assumptions the redesign was built on had never been validated. OpenGridLabs conducted comprehensive user research — interviews, contextual inquiry, and synthesis — that uncovered the real problem and redirected the product in twelve weeks."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B SaaS (anonymised)" },
						{ label: "Research", value: "24 interviews, 8 contextual sessions" },
						{ label: "Timeline", value: "12 weeks" },
						{ label: "Methods", value: "Interviews · Contextual Inquiry · Affinity Mapping · JTBD" }
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
						"Our client had a core product flow that was struggling. Activation rates were below benchmark, support tickets clustered around the same three tasks, and the team had been redesigning the flow for six months based on what they assumed users needed. The assumptions felt reasonable — they were made by smart people who cared about the product. But they had never been tested against actual users doing actual work.",
						"When OpenGridLabs ran a round of usability testing before the redesign shipped, users failed at the same tasks in the new design as the old one. The interface had changed; the underlying mental model mismatch had not. The team needed to stop designing and start learning — to understand why users struggled before deciding how to fix it.",
						"User research is the systematic study of the people who use a product — their goals, behaviours, mental models, and pain points — using methods including interviews, contextual inquiry, surveys, and diary studies. It replaces assumptions about users with evidence, ensuring that design decisions are grounded in real human needs rather than internal intuitions that may never have been tested."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is User Research?"
					definitionText="User research is the systematic study of the people who use a product — their goals, behaviours, mental models, and pain points — using methods including interviews, contextual inquiry, surveys, and diary studies. It replaces assumptions about users with evidence, ensuring that design decisions are grounded in real human needs rather than internal intuitions that may never have been tested."
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
					description={"Avoiding misdirected design iterations by uncovering workflow and mental model alignments."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"User Research Process"}
					description={"A thorough qualitative research strategy bridging discovery interviews, contextual inquiries, and thematic affinity mapping."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage builds on validated evidence from the last. Decisions grounded in user data rather than assumptions reduce rework, compress iteration cycles, and produce outcomes the team can defend with confidence."}
					rightColumnTitle={"Research Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A rigorous 12-week design discovery that gathered field observations and aligned stakeholder groups."}
					phaseColors={[ "hsl(330,100%,60%)", "hsl(280,100%,65%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-pink-500 via-purple-500 to-blue-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults 
					description="Contextual inquiry and JTBD research aligned stakeholders and doubled flow task completion rates."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We thought we knew what users needed. Research showed us we were solving a symptom, not the problem. The affinity mapping session was the first time the whole team looked at the same evidence and agreed on what to build."}
					author={"Head of Product"}
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
					title={"Building on assumptions nobody has tested?"}
					description={"OpenGridLabs conducts user research — interviews, contextual inquiry, and synthesis — that replaces internal assumptions with user evidence so your design effort goes to the right problem."}
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
