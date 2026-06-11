import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Database,
	Code2
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
	{ value: "18", label: "Shared React Native screens delivered", accent: "from-cyan-400 to-teal-500" },
	{ value: "36%", label: "Reduction in duplicate mobile implementation effort", accent: "from-teal-400 to-cyan-500" },
	{ value: "2", label: "iOS and Android release tracks supported", accent: "from-cyan-500 to-teal-400" },
	{ value: "11 wk", label: "From web-first team to mobile release", accent: "from-teal-500 to-cyan-600" }
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
	{ title: "Experience", items: ["Mobile journeys", "Design system", "Permissions", "Accessibility", "Analytics events"], color: "hsl(185,100%,45%)" },
	{ title: "App Layer", items: ["Navigation", "State management", "Networking", "Local storage", "Device APIs"], color: "hsl(175,100%,40%)" },
	{ title: "Services", items: ["Backend APIs", "Auth", "Push services", "Maps", "Cloud services"], color: "hsl(195,100%,45%)" },
	{ title: "Operate", items: ["Crash reporting", "Release tracks", "Performance metrics", "App analytics", "Support workflows"], color: "hsl(180,100%,42%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Mobile Product Blueprint (Weeks 1-3)",
		desc: "OpenGridLabs audited the product requirements, target platforms, user journeys, device capabilities, API dependencies, analytics needs, and release constraints. The team defined the mobile architecture, success metrics, QA matrix, and rollout plan.",
		accent: "from-cyan-400 to-teal-500"
	},
	{
		number: "Phase 2",
		title: "App Build, Integration & QA (Weeks 4-8)",
		desc: "The team implemented the mobile workflows with reusable screens, state handling, API integration, permission flows, local storage, analytics events, and error recovery. Critical journeys were tested across device profiles, app states, and connectivity conditions.",
		accent: "from-teal-400 to-cyan-500"
	},
	{
		number: "Phase 3",
		title: "Release, Monitoring & Enablement (Weeks 9-10)",
		desc: "The final phase covered production release, monitoring, analytics verification, crash reporting, app store readiness, documentation, and team enablement. OpenGridLabs handed over runbooks and reusable patterns so future mobile features could ship faster.",
		accent: "from-cyan-500 to-teal-400"
	}
];

const TABLE_RESULTS = [
	{ metric: "Shared screens", before: "Separate plans", after: "18 screens", change: "Delivered" },
	{ metric: "Duplicate effort", before: "Baseline", after: "64% of baseline", change: "-36%" },
	{ metric: "Platforms supported", before: "None", after: "iOS and Android", change: "Launched" },
	{ metric: "Native module integration", before: "Unclear", after: "Reusable bridge pattern", change: "Standardized" },
	{ metric: "Release analytics", before: "Partial", after: "Event coverage", change: "Visible" }
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
		q: "What is React Native?",
		a: "React Native is a mobile application capability that improves a specific part of the app experience, platform implementation, device integration, release process, or operational workflow. It can include native development, cross-platform development, UI/UX, notifications, offline support, maps, camera, Firebase, or app store delivery."
	},
	{
		q: "Why do companies invest in React Native?",
		a: "Companies invest in React Native to improve mobile usability, reliability, engagement, release speed, platform coverage, and operational visibility. The strongest results come when product, design, mobile engineering, backend services, QA, and analytics are planned together."
	}
];

export default function ReactNativeCaseStudy() {
	return (
		<>
			<SEO
				title="React Native Case Study | OpenGridLabs"
				description="How OpenGridLabs unified mobile delivery with React Native and TypeScript — reducing duplicate implementation effort by 36% and shipping iOS and Android from a shared codebase."
				canonical="/services/product-engineering/react-native"
				keywords="React Native, React Native App, Cross Platform Apps, TypeScript Mobile, Mobile App Development, Native Modules, iOS Android App, JavaScript Mobile"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(185,100%,45%) 0%, hsl(170,100%,40%) 50%, transparent 100%)`
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
					title="How React Native Unified Mobile Delivery With Shared Product Logic"
					description="A web-first product team wanted mobile apps without abandoning its JavaScript expertise. OpenGridLabs built a React Native app that reused product logic, integrated native modules, and shipped reliable iOS and Android experiences from a shared codebase."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "SaaS and customer portal platform (anonymised)" },
						{ label: "Scope", value: "18 shared screens delivered" },
						{ label: "Timeline", value: "11 weeks to release" },
						{ label: "Stack", value: "React Native · TypeScript · Native Modules · App Analytics" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-cyan-500/30"
					hoverTextClass="group-hover:text-cyan-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"The client had a mobile product roadmap with strong user demand, but the application needed stronger foundations before it could scale. Teams were managing platform differences, mobile UX constraints, device integrations, release requirements, offline behavior, notifications, analytics, and backend dependencies at the same time.",
						"The company needed React Native that could move beyond a prototype and support real users across devices, connectivity conditions, app store requirements, and operational workflows. OpenGridLabs designed the mobile architecture, UX patterns, integrations, QA process, and launch plan needed to make the capability reliable in production.",
						"React Native is a mobile application capability focused on improving how users access, interact with, or rely on a mobile product. In production, it requires platform-aware design, app architecture, device integration, API reliability, testing, release management, and analytics."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="What Is React Native?"
					definitionText="React Native is a mobile application capability focused on improving how users access, interact with, or rely on a mobile product. In production, it requires platform-aware design, app architecture, device integration, API reliability, testing, release management, and analytics."
					definitionIcon={<Code2 className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-cyan-500/10"
					definitionIconBorderClass="border-cyan-500/20"
					definitionIconColorClass="text-cyan-400"
					glowColorClass="bg-cyan-400"
					gradientFromClass="from-cyan-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Mobile Product & Engineering Gaps Resolved"}
					description={"How OpenGridLabs unified mobile delivery for a web-first team with React Native and TypeScript."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a mobile application architecture that connected native device capabilities, application logic, backend APIs, analytics, release management, and operational monitoring. The result was a reusable mobile foundation that supported the first launch and future product iterations."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Design for real mobile conditions, not only ideal demos"}
					alertText={"The implementation focused on the conditions users actually face: unreliable networks, app backgrounding, permissions, battery limits, store review rules, device differences, and the need for clear recovery paths when something fails."}
					rightColumnTitle={"React Native Architecture Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases, moving from product discovery and mobile architecture into implementation, testing, release, and post-launch operations."}
					phaseColors={[ "hsl(185,100%,45%)", "hsl(175,100%,40%)", "hsl(195,100%,45%)" ]}
					axisGradientClass={"from-cyan-500 via-teal-500 to-cyan-400"}
					badgeColorClass={"text-cyan-400 bg-cyan-400/10 border-cyan-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from pairing mobile-first user experience with reliable device integration, release discipline, and production monitoring."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The work made react native feel like part of a real mobile product system. We got cleaner UX, fewer release surprises, and the visibility we needed to keep improving after launch."}
					author={"Head of Product"}
					subtitle={"Confidential Mobile Platform"}
					accentLineClass={"bg-cyan-400"}
					iconColorClass={"text-cyan-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-cyan-500/20"}
					iconColorClass={"text-cyan-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-cyan-400"}
					activeChevronColorClass={"text-cyan-400"}
				/>

				<CaseStudyCta 
					title={"Ready to improve your mobile application with React Native?"}
					description={"OpenGridLabs designs and builds mobile application systems for react native, combining product strategy, mobile UX, app architecture, device integrations, QA, analytics, and release support."}
					moreCaseStudiesLink={"/services/product-engineering"}
					glowBgClass={"bg-cyan-400"}
					iconColorClass={"text-cyan-400"}
					btnGradientClass={"from-cyan-400 to-teal-500"}
					btnShadowColor={"34,211,238,0.2"}
				/>
			</div>
		</>
	);
}
