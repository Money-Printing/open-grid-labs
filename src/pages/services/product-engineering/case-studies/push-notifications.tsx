import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Database,
	Bell
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
	{ value: "19", label: "Targeted notification journeys launched", accent: "from-rose-400 to-pink-500" },
	{ value: "22%", label: "Increase in re-engagement on priority segments", accent: "from-pink-400 to-rose-500" },
	{ value: "31%", label: "Reduction in notification opt-out rate", accent: "from-red-400 to-rose-500" },
	{ value: "8 wk", label: "From generic pushes to governed messaging", accent: "from-rose-500 to-pink-600" }
];

const CHALLENGES = [
	{ text: "Mobile workflows behaved differently across devices, OS versions, network conditions, and user contexts" },
	{ text: "The team lacked a repeatable architecture pattern for app features, data flow, and release readiness" },
	{ text: "Device capabilities, permissions, analytics, and error handling were not consistently implemented" },
	{ text: "QA required better coverage across real devices, simulators, app states, and edge cases" },
	{ text: "Post-launch visibility was limited, making it hard to diagnose crashes, adoption, and user friction" }
];

const SOLUTIONS = [
	{ text: "A production mobile architecture aligned to user journeys, platform requirements, and backend services" },
	{ text: "Reusable UI, state, networking, permission, analytics, and error-handling patterns" },
	{ text: "Device and platform QA coverage across critical flows, offline states, permissions, and releases" },
	{ text: "Integration with backend APIs, notifications, storage, maps, camera, or Firebase services as needed" },
	{ text: "Release dashboards, crash monitoring, usage analytics, and team runbooks for ongoing improvement" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Experience", items: ["Mobile journeys", "Design system", "Permissions", "Accessibility", "Analytics events"], color: "hsl(345,100%,60%)" },
	{ title: "App Layer", items: ["Navigation", "State management", "Networking", "Local storage", "Device APIs"], color: "hsl(330,100%,60%)" },
	{ title: "Services", items: ["Backend APIs", "Auth", "Push services", "Maps", "Cloud services"], color: "hsl(315,100%,60%)" },
	{ title: "Operate", items: ["Crash reporting", "Release tracks", "Performance metrics", "App analytics", "Support workflows"], color: "hsl(350,100%,55%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Mobile Product Blueprint (Weeks 1-3)",
		desc: "OpenGridLabs audited the product requirements, target platforms, user journeys, device capabilities, API dependencies, analytics needs, and release constraints. The team defined the mobile architecture, success metrics, QA matrix, and rollout plan.",
		accent: "from-rose-400 to-pink-500"
	},
	{
		number: "Phase 2",
		title: "App Build, Integration & QA (Weeks 4-8)",
		desc: "The team implemented the mobile workflows with reusable screens, state handling, API integration, permission flows, local storage, analytics events, and error recovery. Critical journeys were tested across device profiles, app states, and connectivity conditions.",
		accent: "from-pink-400 to-rose-500"
	},
	{
		number: "Phase 3",
		title: "Release, Monitoring & Enablement (Weeks 9-10)",
		desc: "The final phase covered production release, monitoring, analytics verification, crash reporting, app store readiness, documentation, and team enablement. OpenGridLabs handed over runbooks and reusable patterns so future mobile features could ship faster.",
		accent: "from-red-400 to-rose-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Notification journeys", before: "Broadcast pushes", after: "19 journeys", change: "Launched" },
	{ metric: "Re-engagement", before: "Baseline", after: "1.22x baseline", change: "+22%" },
	{ metric: "Opt-out rate", before: "Baseline", after: "69% of baseline", change: "-31%" },
	{ metric: "Preference controls", before: "Limited", after: "User-level controls", change: "Improved" },
	{ metric: "Delivery analytics", before: "Partial", after: "Journey dashboard", change: "Visible" }
];

const SUCCESS_FACTORS = [
	{
		title: "Mobile-first journeys shaped the build",
		desc: "The team designed around real usage contexts, including one-handed use, intermittent networks, permissions, backgrounding, and quick task completion."
	},
	{
		title: "Reusable app patterns reduced release risk",
		desc: "Shared navigation, state, API, storage, analytics, and error-handling patterns made features easier to test and extend."
	},
	{
		title: "QA covered real device behavior",
		desc: "Testing included device profiles, OS versions, permission states, offline modes, app lifecycle events, and release-track validation."
	},
	{
		title: "Monitoring continued after launch",
		desc: "Crash reporting, analytics, performance metrics, and user feedback loops helped the team improve the app after the first release."
	}
];

const FAQS = [
	{
		q: "What are Push Notifications?",
		a: "Push Notifications is a mobile application capability that improves a specific part of the app experience, platform implementation, device integration, release process, or operational workflow. It can include native development, cross-platform development, UI/UX, notifications, offline support, maps, camera, Firebase, or app store delivery."
	},
	{
		q: "Why do companies invest in Push Notifications?",
		a: "Companies invest in Push Notifications to improve mobile usability, reliability, engagement, release speed, platform coverage, and operational visibility. The strongest results come when product, design, mobile engineering, backend services, QA, and analytics are planned together."
	}
];

export default function PushNotificationsCaseStudy() {
	return (
		<>
			<SEO
				title="Push Notifications Case Study | OpenGridLabs"
				description="How OpenGridLabs built a governed push notification system with segmentation, preferences, and delivery analytics — reducing opt-out rates by 31% and increasing re-engagement by 22%."
				canonical="/services/product-engineering/push-notifications"
				keywords="Push Notifications, Mobile Messaging, Notification Strategy, Firebase Cloud Messaging, APNs, User Engagement, Mobile Retention, Notification Analytics"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(345,100%,60%) 0%, hsl(320,100%,55%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/product-engineering" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to Product Engineering
					</Link>
				</div>

				<CaseStudyHero 
					categoryTag="Case Study · Mobile Application"
					title="How Push Notifications Re-Engaged Mobile Users With Targeted, Governed Messaging"
					description="A product team wanted to improve retention and task completion, but notifications were generic, inconsistent, and hard to measure. OpenGridLabs built a push notification system with segmentation, preferences, triggers, delivery analytics, and quiet-hour controls."
					categoryBorderClass="border-rose-500/30"
					categoryBgClass="bg-rose-500/10"
					categoryTextClass="text-rose-400"
					glowBgClass="bg-rose-400"
					terminalIconClass="text-rose-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Consumer app and customer engagement platform (anonymised)" },
						{ label: "Scope", value: "19 notification journeys launched" },
						{ label: "Timeline", value: "8 weeks to production" },
						{ label: "Stack", value: "Push Notifications · Segmentation · Preferences · Analytics" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-rose-500/30"
					hoverTextClass="group-hover:text-rose-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"The client had a mobile product roadmap with strong user demand, but the application needed stronger foundations before it could scale. Teams were managing platform differences, mobile UX constraints, device integrations, release requirements, offline behavior, notifications, analytics, and backend dependencies at the same time.",
						"The company needed Push Notifications that could move beyond a prototype and support real users across devices, connectivity conditions, app store requirements, and operational workflows. OpenGridLabs designed the mobile architecture, UX patterns, integrations, QA process, and launch plan needed to make the capability reliable in production.",
						"Push Notifications is a mobile application capability focused on improving how users access, interact with, or rely on a mobile product. In production, it requires platform-aware design, app architecture, device integration, API reliability, testing, release management, and analytics."
					]}
					contextHighlightColorClass="bg-rose-400"
					contextIconColorClass="text-rose-400"
					definitionTitle="What Are Push Notifications?"
					definitionText="Push Notifications is a mobile application capability focused on improving how users access, interact with, or rely on a mobile product. In production, it requires platform-aware design, app architecture, device integration, API reliability, testing, release management, and analytics."
					definitionIcon={<Bell className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-rose-500/10"
					definitionIconBorderClass="border-rose-500/20"
					definitionIconColorClass="text-rose-400"
					glowColorClass="bg-rose-400"
					gradientFromClass="from-rose-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Mobile Product & Engineering Gaps Resolved"}
					description={"How OpenGridLabs transformed scattered pushes into a governed, segmented notification system."}
					hoverBorderClass={"hover:border-rose-500/20"}
					arrowColorClass={"text-rose-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a mobile application architecture that connected native device capabilities, application logic, backend APIs, analytics, release management, and operational monitoring. The result was a reusable mobile foundation that supported the first launch and future product iterations."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-rose-400"}
					highlightColorClass={"bg-rose-400"}
					gradientColorClass={"via-rose-400/50"}
					alertBorderClass={"border-rose-500/20"}
					alertBgClass={"bg-rose-500/5"}
					alertTextColorClass={"text-rose-300"}
					alertTitle={"Design for real mobile conditions, not only ideal demos"}
					alertText={"The implementation focused on the conditions users actually face: unreliable networks, app backgrounding, permissions, battery limits, store review rules, device differences, and the need for clear recovery paths when something fails."}
					rightColumnTitle={"Push Notifications Architecture Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases, moving from product discovery and mobile architecture into implementation, testing, release, and post-launch operations."}
					phaseColors={[ "hsl(345,100%,60%)", "hsl(330,100%,60%)", "hsl(315,100%,60%)" ]}
					axisGradientClass={"from-rose-500 via-pink-500 to-red-500"}
					badgeColorClass={"text-rose-400 bg-rose-400/10 border-rose-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from pairing mobile-first user experience with reliable device integration, release discipline, and production monitoring."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The work made push notifications feel like part of a real mobile product system. We got cleaner UX, fewer release surprises, and the visibility we needed to keep improving after launch."}
					author={"Head of Product"}
					subtitle={"Confidential Mobile Platform"}
					accentLineClass={"bg-rose-400"}
					iconColorClass={"text-rose-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-rose-500/20"}
					iconColorClass={"text-rose-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-rose-400"}
					activeChevronColorClass={"text-rose-400"}
				/>

				<CaseStudyCta 
					title={"Ready to improve engagement with push notifications?"}
					description={"OpenGridLabs designs and builds mobile application systems for push notifications, combining product strategy, mobile UX, app architecture, device integrations, QA, analytics, and release support."}
					moreCaseStudiesLink={"/services/product-engineering"}
					glowBgClass={"bg-rose-400"}
					iconColorClass={"text-rose-400"}
					btnGradientClass={"from-rose-400 to-pink-500"}
					btnShadowColor={"251,113,133,0.2"}
				/>
			</div>
		</>
	);
}
