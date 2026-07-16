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
	{ value: "48%", label: "Reduction in decision time for operations team", accent: "from-pink-500 to-rose-600" },
	{ value: "60→15 min", label: "Daily operations meeting shortened", accent: "from-purple-500 to-indigo-600" },
	{ value: "92%", label: "Of daily decisions now made from dashboard alone", accent: "from-blue-500 to-cyan-600" },
	{ value: "12 wk", label: "From data dump to actionable operations centre", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Dashboard showing all available data with no visual hierarchy — everything equally prominent" },
	{ text: "Critical alerts buried in tables alongside routine data, indistinguishable at a glance" },
	{ text: "No summary layer — users had to calculate and compare numbers mentally before acting" },
	{ text: "60-minute daily meeting required to extract actionable insight from the dashboard data" },
	{ text: "Different user roles (team lead vs. analyst vs. executive) served by the same undifferentiated view" }
];

const SOLUTIONS = [
	{ text: "Three-tier visual hierarchy: status (now) → trends (today) → detail (on demand)" },
	{ text: "Alert system surfacing anomalies and threshold breaches at the top of every view automatically" },
	{ text: "Role-based views: operations (real-time status), management (trend + performance), executive (KPI summary)" },
	{ text: "Progressive disclosure — summary cards linking to drill-down detail rather than showing all data at once" },
	{ text: "Actionable design: every alert includes a direct link to the relevant detailed view and action" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Understand", items: ["Decision audit", "User roles", "Information hierarchy"], color: "hsl(330,100%,60%)" },
	{ title: "Hierarchy", items: ["Status layer", "Trend layer", "Detail layer"], color: "hsl(280,100%,65%)" },
	{ title: "Visual Design", items: ["Visual selection", "Status colours", "Density calibration", "White space"], color: "hsl(200,100%,50%)" },
	{ title: "Validate", items: ["Decision-time study", "Usability testing", "Alert accuracy testing", "Stakeholder review"], color: "hsl(145,100%,45%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Decision Audit & Role Mapping (Weeks 1–3)",
		desc: "OpenGridLabs conducted a decision audit: for each role using the dashboard, what decisions does it need to enable, in what time frame, with what confidence? This produced an information hierarchy for each role — the three to five things each person needed to know at a glance — that drove the design.",
		accent: "from-pink-500 to-rose-500"
	},
	{
		number: "Phase 2",
		title: "Dashboard Architecture & Visual System (Weeks 4–9)",
		desc: "The dashboard architecture was designed around three tiers: status (what needs attention now), trends (how is performance moving), and detail (what explains the pattern). Role-based views were built for operations, management, and executive audiences. The visual system applied colour only for status communication — red, amber, green — never decoratively.",
		accent: "from-purple-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Alert Design, Testing & Rollout (Weeks 10–12)",
		desc: "The alert system was designed with threshold-based triggers and directly actionable links. A decision-time study was run with 12 operations team members comparing the old and new dashboards on realistic scenarios. The new dashboard was rolled out with a two-week overlap period, after which the daily meeting was shortened to 15 minutes for exception handling only.",
		accent: "from-blue-500 to-cyan-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "Decision time (operations scenarios)", before: "Baseline", after: "-48%", change: "-48%" },
	{ metric: "Daily operations meeting", before: "60 minutes", after: "15 minutes", change: "15 minutes" },
	{ metric: "Decisions made from dashboard alone", before: "~40%", after: "92%", change: "92%" },
	{ metric: "Alert false-positive rate", before: "High (manual triage)", after: "<5%", change: "<5%" },
	{ metric: "Executive dashboard satisfaction", before: "2.8/5", after: "4.4/5", change: "4.4/5" },
	{ metric: "Time spent in 'detail' view", before: "~60% of session", after: "~20%", change: "~20% (summary layer works)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Hierarchy over decoration",
		desc: "A dashboard that shows everything surfaces nothing. Visual hierarchy is not aesthetic preference — it is the mechanism that makes the most important information visible before the user searches for it."
	},
	{
		title: "Decision-driven briefs",
		desc: "The decision audit replaces data availability as the design brief. Starting with 'what decisions does this enable, for whom, on what time horizon?' produces a dashboard rather than a data dump."
	},
	{
		title: "Progressive disclosure",
		desc: "Progressive disclosure reduces cognitive load without reducing capability. Summary cards that link to drill-down detail let users access full depth only when they need it."
	}
];

const FAQS = [
	{
		q: "What makes a good dashboard design?",
		a: "A good dashboard design applies visual hierarchy to make the most important information immediately visible without searching, calibrates data density to the user's context and cognitive capacity, and matches the level of detail to the decision being made. It answers the question 'what do I need to do?' before the user asks it."
	},
	{
		q: "What is progressive disclosure in dashboard design?",
		a: "Progressive disclosure in dashboards presents summary information by default and makes detail available on demand. Summary cards with drill-down links allow users to get the headline they need in seconds and access the supporting detail only when required, reducing cognitive load without reducing analytical capability."
	}
];

export default function DashboardDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Dashboard Design UI/UX Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned an operations dashboard around visual hierarchy and progressive disclosure, cutting decision time by 48% and reducing daily meetings."
				canonical="/services/digital-experience/dashboard-design"
				keywords="Dashboard Design, Data Dashboard, Data Visualisation, KPI Dashboard, Operations Dashboard, Progressive Disclosure, Alert Design, Role-Based Views, UX Design, UI/UX"
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
					title="How a Data-Dense Dashboard Redesign Reduced Decision Time 48% and Cut the Daily Meeting from 60 Minutes to 15"
					description="A 200-person operations team was starting every day with a 60-minute meeting to discuss what was in their dashboard — because the dashboard showed everything but surfaced nothing. OpenGridLabs redesigned it around a single principle: a dashboard should make the most important thing obvious before the user looks for it. The result was a dashboard that reduced decision time 48% and made the daily meeting unnecessary for routine operations."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Logistics / Operations (anonymised)" },
						{ label: "Team", value: "200-person operations team" },
						{ label: "Timeline", value: "12 weeks" },
						{ label: "Tools", value: "Figma · Data visualisation · Progressive disclosure · Alert design" }
					]}
				/>


				<CaseStudyCarousel
					slug="dashboard-design"
					title="How a Data-Dense Dashboard Redesign Reduced Decision Time 48% and Cut the Daily Meeting from 60 Minutes to 15"
					accentColor="pink"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/dashboard-design/1.jpg",
						"/images/case-studies/dashboard-design/2.jpg"
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
						"Our client's operations team had a dashboard that showed everything. Every KPI, every metric, every data point available was visible on the main screen — the implicit theory being that more data is better data. The practical reality was a screen so dense that the most important signals were invisible. The team had adapted by scheduling a daily 60-minute meeting where a senior analyst talked through what the dashboard should have communicated automatically.",
						"The dashboard wasn't failing because it lacked data. It was failing because it treated all data as equally important. Good dashboard design is not about showing everything — it is about showing the right thing to the right person at the right time, with the most important information making itself known without requiring the user to hunt for it. OpenGridLabs redesigned the dashboard around the hierarchy of decisions the operations team actually needed to make.",
						"Dashboard design is the practice of creating visual displays of information that enable users to monitor, analyse, and act on data relevant to a goal or process. Good dashboard design applies visual hierarchy to make the most important information immediately visible, calibrates data density to the user's context and cognitive capacity, and provides the level of detail appropriate to each decision — surfacing the signal without burying it in noise."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is Dashboard Design?"
					definitionText="Dashboard design is the practice of creating visual displays of information that enable users to monitor, analyse, and act on data relevant to a goal or process. Good dashboard design applies visual hierarchy to make the most important information immediately visible, calibrates data density to the user's context and cognitive capacity, and provides the level of detail appropriate to each decision — surfacing the signal without burying it in noise."
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
					tag={"Visual Friction & Solutions"}
					title={"Challenges & Solutions"}
					description={"Five distinct interface challenges were limiting decision speed, clarity, and operations throughput."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Dashboard Architecture"}
					description={"OpenGridLabs structured the design pipeline to map decision requirements directly to visual layouts, ensuring the information depth strictly matches the user's operational role."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage builds on validated evidence from the last. Decisions grounded in user data rather than assumptions reduce rework, compress iteration cycles, and produce outcomes the team can defend with confidence."}
					rightColumnTitle={"Design Pipeline Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A 12-week design iteration from client discovery to production-ready design assets."}
					phaseColors={["hsl(330,100%,60%)", "hsl(280,100%,65%)", "hsl(200,100%,50%)"]}
					axisGradientClass={"from-pink-500 via-purple-500 to-blue-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults
					description="A systematic decision-time study showed rapid task completion, higher user satisfaction, and minimized meeting durations."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"The old dashboard showed us everything and told us nothing. The new one shows us the three things we need to act on today — and they're there before we look for them. The meeting that used to decode the dashboard is now just for exceptions."}
					author={"VP of Operations"}
					subtitle={"Confidential Logistics Company"}
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
					title={"Dashboard that shows everything but tells you nothing?"}
					description={"OpenGridLabs designs operational dashboards — visual hierarchy, alert systems, role-based views, and progressive disclosure — that make the most important thing obvious before you look for it."}
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
