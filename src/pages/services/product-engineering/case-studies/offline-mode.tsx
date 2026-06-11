import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Database,
	WifiOff
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
	{ value: "7", label: "Offline-capable workflows supported", accent: "from-amber-400 to-orange-500" },
	{ value: "74%", label: "Reduction in failed submissions during poor connectivity", accent: "from-orange-400 to-amber-500" },
	{ value: "32%", label: "Increase in field task completion", accent: "from-yellow-500 to-orange-500" },
	{ value: "11 wk", label: "From online-only app to offline-first workflow", accent: "from-amber-500 to-yellow-600" }
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
	{ title: "Experience", items: ["Mobile journeys", "Design system", "Permissions", "Accessibility", "Analytics events"], color: "hsl(40,100%,55%)" },
	{ title: "App Layer", items: ["Navigation", "State management", "Networking", "Local storage", "Device APIs"], color: "hsl(30,100%,55%)" },
	{ title: "Services", items: ["Backend APIs", "Auth", "Push services", "Maps", "Cloud services"], color: "hsl(20,100%,55%)" },
	{ title: "Operate", items: ["Crash reporting", "Release tracks", "Performance metrics", "App analytics", "Support workflows"], color: "hsl(45,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Mobile Product Blueprint (Weeks 1-3)",
		desc: "OpenGridLabs audited the product requirements, target platforms, user journeys, device capabilities, API dependencies, analytics needs, and release constraints. The team defined the mobile architecture, success metrics, QA matrix, and rollout plan.",
		accent: "from-amber-400 to-orange-500"
	},
	{
		number: "Phase 2",
		title: "App Build, Integration & QA (Weeks 4-8)",
		desc: "The team implemented the mobile workflows with reusable screens, state handling, API integration, permission flows, local storage, analytics events, and error recovery. Critical journeys were tested across device profiles, app states, and connectivity conditions.",
		accent: "from-orange-400 to-amber-500"
	},
	{
		number: "Phase 3",
		title: "Release, Monitoring & Enablement (Weeks 9-10)",
		desc: "The final phase covered production release, monitoring, analytics verification, crash reporting, app store readiness, documentation, and team enablement. OpenGridLabs handed over runbooks and reusable patterns so future mobile features could ship faster.",
		accent: "from-yellow-500 to-orange-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Offline workflows", before: "Online-only", after: "7 workflows", change: "Enabled" },
	{ metric: "Failed submissions", before: "Baseline", after: "26% of baseline", change: "-74%" },
	{ metric: "Field task completion", before: "Baseline", after: "1.32x baseline", change: "+32%" },
	{ metric: "Sync conflicts", before: "Manual cleanup", after: "Conflict resolution rules", change: "Controlled" },
	{ metric: "User status clarity", before: "Unclear failures", after: "Sync indicators", change: "Improved" }
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
		q: "What is Offline Mode?",
		a: "Offline Mode is a mobile application capability that improves a specific part of the app experience, platform implementation, device integration, release process, or operational workflow. It can include native development, cross-platform development, UI/UX, notifications, offline support, maps, camera, Firebase, or app store delivery."
	},
	{
		q: "Why do companies invest in Offline Mode?",
		a: "Companies invest in Offline Mode to improve mobile usability, reliability, engagement, release speed, platform coverage, and operational visibility. The strongest results come when product, design, mobile engineering, backend services, QA, and analytics are planned together."
	}
];

export default function OfflineModeCaseStudy() {
	return (
		<>
			<SEO
				title="Offline Mode Case Study | OpenGridLabs"
				description="How OpenGridLabs built offline mode with local storage, sync queues, and conflict handling — reducing failed submissions by 74% and increasing field task completion by 32%."
				canonical="/services/product-engineering/offline-mode"
				keywords="Offline Mode, Offline First App, Mobile Sync, Local Storage, Field App, Offline Data Capture, Conflict Resolution, Mobile Reliability"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(40,100%,55%) 0%, hsl(25,100%,50%) 50%, transparent 100%)`
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
					title="How Offline Mode Kept Critical Mobile Workflows Running Without Reliable Connectivity"
					description="A field team needed to complete tasks in warehouses, remote areas, and customer sites with weak connectivity. OpenGridLabs built offline mode with local storage, sync queues, conflict handling, retry logic, and clear status indicators."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Field operations and mobile workforce (anonymised)" },
						{ label: "Scope", value: "7 offline workflows supported" },
						{ label: "Timeline", value: "11 weeks to production" },
						{ label: "Stack", value: "Offline Mode · Local Storage · Sync Queue · Conflict Handling" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-amber-500/30"
					hoverTextClass="group-hover:text-amber-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"The client had a mobile product roadmap with strong user demand, but the application needed stronger foundations before it could scale. Teams were managing platform differences, mobile UX constraints, device integrations, release requirements, offline behavior, notifications, analytics, and backend dependencies at the same time.",
						"The company needed Offline Mode that could move beyond a prototype and support real users across devices, connectivity conditions, app store requirements, and operational workflows. OpenGridLabs designed the mobile architecture, UX patterns, integrations, QA process, and launch plan needed to make the capability reliable in production.",
						"Offline Mode is a mobile application capability focused on improving how users access, interact with, or rely on a mobile product. In production, it requires platform-aware design, app architecture, device integration, API reliability, testing, release management, and analytics."
					]}
					contextHighlightColorClass="bg-amber-400"
					contextIconColorClass="text-amber-400"
					definitionTitle="What Is Offline Mode?"
					definitionText="Offline Mode is a mobile application capability focused on improving how users access, interact with, or rely on a mobile product. In production, it requires platform-aware design, app architecture, device integration, API reliability, testing, release management, and analytics."
					definitionIcon={<WifiOff className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-amber-500/10"
					definitionIconBorderClass="border-amber-500/20"
					definitionIconColorClass="text-amber-400"
					glowColorClass="bg-amber-400"
					gradientFromClass="from-amber-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Mobile Product & Engineering Gaps Resolved"}
					description={"How OpenGridLabs built reliable offline-first workflows for teams operating without consistent connectivity."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a mobile application architecture that connected native device capabilities, application logic, backend APIs, analytics, release management, and operational monitoring. The result was a reusable mobile foundation that supported the first launch and future product iterations."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Design for real mobile conditions, not only ideal demos"}
					alertText={"The implementation focused on the conditions users actually face: unreliable networks, app backgrounding, permissions, battery limits, store review rules, device differences, and the need for clear recovery paths when something fails."}
					rightColumnTitle={"Offline Mode Architecture Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases, moving from product discovery and mobile architecture into implementation, testing, release, and post-launch operations."}
					phaseColors={[ "hsl(40,100%,55%)", "hsl(30,100%,55%)", "hsl(20,100%,55%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-yellow-500"}
					badgeColorClass={"text-amber-400 bg-amber-400/10 border-amber-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from pairing mobile-first user experience with reliable device integration, release discipline, and production monitoring."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The work made offline mode feel like part of a real mobile product system. We got cleaner UX, fewer release surprises, and the visibility we needed to keep improving after launch."}
					author={"Head of Product"}
					subtitle={"Confidential Mobile Platform"}
					accentLineClass={"bg-amber-400"}
					iconColorClass={"text-amber-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-amber-500/20"}
					iconColorClass={"text-amber-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-amber-400"}
					activeChevronColorClass={"text-amber-400"}
				/>

				<CaseStudyCta 
					title={"Ready to improve your mobile application with Offline Mode?"}
					description={"OpenGridLabs designs and builds mobile application systems for offline mode, combining product strategy, mobile UX, app architecture, device integrations, QA, analytics, and release support."}
					moreCaseStudiesLink={"/services/product-engineering"}
					glowBgClass={"bg-amber-400"}
					iconColorClass={"text-amber-400"}
					btnGradientClass={"from-amber-400 to-orange-500"}
					btnShadowColor={"251,191,36,0.2"}
				/>
			</div>
		</>
	);
}
