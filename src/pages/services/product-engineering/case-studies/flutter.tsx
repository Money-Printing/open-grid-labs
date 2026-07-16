import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Sparkles,
	Database
} from "lucide-react";
import SEO from "../../../../components/seo";
import MeasurableResults from "../../../../components/measurable-results";
import StatsGrid from "../../../../components/stats-grid";
import CaseStudyHero from "../../../../components/case-study-hero";
import CaseStudyCarousel from "../../../../components/case-study-carousel";
import ChallengesSolutions from "../../../../components/challenges-solutions";
import CaseStudyTimeline from "../../../../components/case-study-timeline";
import CaseStudyArchitecture from "../../../../components/case-study-architecture";
import CaseStudyBackground from "../../../../components/case-study-background";
import CaseStudyQuote from "../../../../components/case-study-quote";
import CaseStudySuccessFactors from "../../../../components/case-study-success-factors";
import CaseStudyFaq from "../../../../components/case-study-faq";
import CaseStudyCta from "../../../../components/case-study-cta";

const STATS = [
	{ value: "2", label: "iOS and Android launched from one codebase", accent: "from-purple-400 to-indigo-500" },
	{ value: "39%", label: "Faster delivery versus separate native builds", accent: "from-pink-400 to-purple-500" },
	{ value: "24", label: "Reusable Flutter screens shipped", accent: "from-fuchsia-500 to-pink-500" },
	{ value: "10 wk", label: "From prototype to cross-platform release", accent: "from-violet-400 to-purple-600" }
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
	{ title: "Experience", items: ["Mobile journeys", "Design system", "Permissions", "Accessibility", "Analytics events"], color: "hsl(180,100%,50%)" },
	{ title: "App Layer", items: ["Navigation", "State management", "Networking", "Local storage", "Device APIs"], color: "hsl(280,100%,65%)" },
	{ title: "Services", items: ["Backend APIs", "Auth", "Push services", "Maps", "Cloud services"], color: "hsl(210,100%,50%)" },
	{ title: "Operate", items: ["Crash reporting", "Release tracks", "Performance metrics", "App analytics", "Support workflows"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Mobile Product Blueprint (Weeks 1-3)",
		desc: "OpenGridLabs audited the product requirements, target platforms, user journeys, device capabilities, API dependencies, analytics needs, and release constraints. The team defined the mobile architecture, success metrics, QA matrix, and rollout plan.",
		accent: "from-purple-400 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "App Build, Integration & QA (Weeks 4-8)",
		desc: "The team implemented the mobile workflows with reusable screens, state handling, API integration, permission flows, local storage, analytics events, and error recovery. Critical journeys were tested across device profiles, app states, and connectivity conditions.",
		accent: "from-pink-400 to-purple-500"
	},
	{
		number: "Phase 3",
		title: "Release, Monitoring & Enablement (Weeks 9-10)",
		desc: "The final phase covered production release, monitoring, analytics verification, crash reporting, app store readiness, documentation, and team enablement. OpenGridLabs handed over runbooks and reusable patterns so future mobile features could ship faster.",
		accent: "from-fuchsia-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Platforms launched", before: "Prototype only", after: "iOS and Android", change: "Released" },
	{ metric: "Delivery speed", before: "Separate builds estimate", after: "39% faster", change: "Accelerated" },
	{ metric: "Reusable screens", before: "0", after: "24 screens", change: "Built" },
	{ metric: "Native integrations", before: "Manual spikes", after: "Plugin pattern", change: "Standardized" },
	{ metric: "Release workflow", before: "Ad hoc", after: "Dual-store pipeline", change: "Scalable" }
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
		q: "What is Flutter?",
		a: "Flutter is a mobile application capability focused on improving how users access, interact with, or rely on a mobile product. In production, it requires platform-aware design, app architecture, device integration, API reliability, testing, release management, and analytics."
	},
	{
		q: "Why do companies invest in Flutter?",
		a: "Companies invest in Flutter to improve mobile usability, reliability, engagement, release speed, platform coverage, and operational visibility. The strongest results come when product, design, mobile engineering, backend services, QA, and analytics are planned together."
	}
];

export default function FlutterCaseStudy() {
	return (
		<>
			<SEO
				title="Flutter Case Study | OpenGridLabs"
				description="How OpenGridLabs designed a robust cross-platform mobile application with Flutter and Dart, reducing delivery cost by 39%."
				canonical="/services/product-engineering/flutter"
				keywords="Flutter, Flutter App Development, Dart, Cross Platform Mobile, iOS Android App, Mobile UI, Flutter Plugins, Mobile App Development"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(280,100%,65%) 0%, hsl(320,100%,60%) 50%, transparent 100%)`
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
					title="How Flutter Delivered a Cross-Platform App With One Maintainable Codebase"
					description="A startup needed to launch iOS and Android quickly without doubling the engineering effort. OpenGridLabs built a Flutter application with reusable screens, shared business logic, native integrations, and release pipelines for both stores."
					categoryBorderClass="border-purple-500/30"
					categoryBgClass="bg-purple-500/10"
					categoryTextClass="text-purple-400"
					glowBgClass="bg-purple-400"
					terminalIconClass="text-purple-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Growth-stage mobile product (anonymised)" },
						{ label: "Scope", value: "2 platforms launched" },
						{ label: "Timeline", value: "10 weeks to dual release" },
						{ label: "Stack", value: "Flutter · Dart · Shared UI · Native Plugins" }
					]}
				/>

				<CaseStudyCarousel
					slug="flutter"
					title="Flutter"
					accentColor="purple"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/flutter/1.jpg",
						"/images/case-studies/flutter/2.jpg"
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-purple-500/30"
					hoverTextClass="group-hover:text-purple-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"The client had a mobile product roadmap with strong user demand, but the application needed stronger foundations before it could scale. Teams were managing platform differences, mobile UX constraints, device integrations, release requirements, offline behavior, notifications, analytics, and backend dependencies at the same time.",
						"The company needed Flutter that could move beyond a prototype and support real users across devices, connectivity conditions, app store requirements, and operational workflows. OpenGridLabs designed the mobile architecture, UX patterns, integrations, QA process, and launch plan needed to make the capability reliable in production.",
						"Flutter is a mobile application capability focused on improving how users access, interact with, or rely on a mobile product. In production, it requires platform-aware design, app architecture, device integration, API reliability, testing, release management, and analytics."
					]}
					contextHighlightColorClass="bg-purple-400"
					contextIconColorClass="text-purple-400"
					definitionTitle="What Is Flutter?"
					definitionText="Flutter is a mobile application capability focused on improving how users access, interact with, or rely on a mobile product. In production, it requires platform-aware design, app architecture, device integration, API reliability, testing, release management, and analytics."
					definitionIcon={<Sparkles className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-purple-500/10"
					definitionIconBorderClass="border-purple-500/20"
					definitionIconColorClass="text-purple-400"
					glowColorClass="bg-purple-400"
					gradientFromClass="from-purple-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Mobile Product & Engineering Gaps Resolved"}
					description={"How OpenGridLabs designed a cross-platform Flutter application architecture."}
					hoverBorderClass={"hover:border-purple-500/20"}
					arrowColorClass={"text-purple-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a mobile application architecture that connected native device capabilities, application logic, backend APIs, analytics, release management, and operational monitoring. The result was a reusable mobile foundation that supported the first launch and future product iterations."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-purple-400"}
					highlightColorClass={"bg-purple-400"}
					gradientColorClass={"via-purple-400/50"}
					alertBorderClass={"border-purple-500/20"}
					alertBgClass={"bg-purple-500/5"}
					alertTextColorClass={"text-purple-300"}
					alertTitle={"Design for real mobile conditions, not only ideal demos"}
					alertText={"The implementation focused on the conditions users actually face: unreliable networks, app backgrounding, permissions, battery limits, store review rules, device differences, and the need for clear recovery paths when something fails."}
					rightColumnTitle={"Flutter Architecture Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases, moving from product discovery and mobile architecture into implementation, testing, release, and post-launch operations."}
					phaseColors={[ "hsl(280,100%,65%)", "hsl(320,100%,60%)", "hsl(340,100%,60%)" ]}
					axisGradientClass={"from-purple-500 via-pink-500 to-fuchsia-500"}
					badgeColorClass={"text-purple-400 bg-purple-400/10 border-purple-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from pairing mobile-first user experience with reliable device integration, release discipline, and production monitoring."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The work made flutter feel like part of a real mobile product system. We got cleaner UX, fewer release surprises, and the visibility we needed to keep improving after launch."}
					author={"Head of Product"}
					subtitle={"Confidential Mobile Platform"}
					accentLineClass={"bg-purple-400"}
					iconColorClass={"text-purple-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-purple-500/20"}
					iconColorClass={"text-purple-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-purple-400"}
					activeChevronColorClass={"text-purple-400"}
				/>

				<CaseStudyCta 
					title={"Ready to improve your mobile application with Flutter?"}
					description={"OpenGridLabs designs and builds mobile application systems for flutter, combining product strategy, mobile UX, app architecture, device integrations, QA, analytics, and release support."}
					moreCaseStudiesLink={"/services/product-engineering"}
					glowBgClass={"bg-purple-400"}
					iconColorClass={"text-purple-400"}
					btnGradientClass={"from-purple-400 to-pink-500"}
					btnShadowColor={"168,85,247,0.2"}
				/>
			</div>
		</>
	);
}
