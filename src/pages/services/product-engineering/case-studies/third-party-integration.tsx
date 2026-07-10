import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Database,
	Link2
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
	{ value: "13", label: "Third-party systems connected through reusable patterns", accent: "from-green-400 to-emerald-500" },
	{ value: "56%", label: "Reduction in integration-related incidents", accent: "from-emerald-400 to-teal-500" },
	{ value: "81%", label: "Automatic recovery from transient API failures", accent: "from-teal-500 to-sky-500" },
	{ value: "11 wk", label: "From brittle connectors to integration layer", accent: "from-sky-400 to-green-600" }
];

const CHALLENGES = [
	{ text: "Backend logic had grown organically, creating unclear ownership and duplicated service behavior" },
	{ text: "Client teams lacked consistent contracts, error handling, rate limits, and operational dashboards" },
	{ text: "Data flows and integrations were difficult to trace when incidents or performance issues occurred" },
	{ text: "Security, permissions, validation, and audit requirements were handled unevenly across endpoints" },
	{ text: "Release confidence was low because testing, rollback, monitoring, and runbooks were incomplete" }
];

const SOLUTIONS = [
	{ text: "A production backend blueprint with clear service boundaries, contracts, data ownership, and release paths" },
	{ text: "Reusable patterns for validation, authorization, error handling, rate limiting, logging, and retries" },
	{ text: "Data modeling, migrations, integration tests, and contract tests aligned to real product workflows" },
	{ text: "Observability dashboards for latency, throughput, errors, queue depth, dependency health, and usage" },
	{ text: "Documentation, runbooks, and team handoff practices so the backend could evolve safely after launch" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Clients", items: ["Web app", "Mobile app", "Admin tools", "Partner clients", "Internal services"], color: "hsl(145,100%,40%)" },
	{ title: "Services", items: ["API layer", "Service modules", "Validation", "Authorization", "Business logic"], color: "hsl(155,100%,38%)" },
	{ title: "Data", items: ["Databases", "Cache", "Queues", "Object storage", "External integrations"], color: "hsl(165,100%,38%)" },
	{ title: "Operate", items: ["Logs", "Metrics", "Tracing", "Alerts", "Runbooks"], color: "hsl(150,100%,36%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Architecture, Contracts & Risk Review (Weeks 1-3)",
		desc: "OpenGridLabs audited the existing backend architecture, service dependencies, data flows, security controls, operational incidents, and release process. The team defined target contracts, ownership boundaries, quality gates, and rollout milestones.",
		accent: "from-green-400 to-emerald-500"
	},
	{
		number: "Phase 2",
		title: "Build, Integrate & Validate (Weeks 4-8)",
		desc: "The team implemented the backend capability with service modules, data migrations, validation, authorization, integration tests, observability, and deployment automation. Critical paths were tested against real traffic patterns and failure modes.",
		accent: "from-emerald-400 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "Launch, Monitoring & Handoff (Weeks 9-10)",
		desc: "The final phase covered production rollout, monitoring dashboards, alert thresholds, rollback plans, documentation, and team enablement. OpenGridLabs handed over runbooks and architecture notes so client engineers could extend the system safely.",
		accent: "from-teal-500 to-sky-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "External systems", before: "One-off connectors", after: "13 systems", change: "Connected" },
	{ metric: "Integration incidents", before: "Baseline", after: "44% of baseline", change: "-56%" },
	{ metric: "Transient failure recovery", before: "Manual reruns", after: "81% automatic recovery", change: "Reliable" },
	{ metric: "Webhook handling", before: "Scattered endpoints", after: "Shared webhook pipeline", change: "Standardized" },
	{ metric: "Dependency visibility", before: "Limited", after: "Health dashboard", change: "Operational" }
];

const SUCCESS_FACTORS = [
	{
		title: "Contracts came first",
		desc: "The team defined clear request, response, error, permission, and ownership expectations before implementation, reducing ambiguity between clients and services."
	},
	{
		title: "Failure modes were designed intentionally",
		desc: "Retries, timeouts, idempotency, dead-letter handling, rollback paths, and alerts were part of the build instead of afterthoughts."
	},
	{
		title: "Observability matched business workflows",
		desc: "Dashboards connected technical signals to product flows, helping teams diagnose incidents and understand impact faster."
	},
	{
		title: "Documentation made the system extendable",
		desc: "Runbooks, architecture notes, and test patterns gave client engineers a safe path for future changes."
	}
];

const FAQS = [
	{
		q: "What is Third-party Integration?",
		a: "Third-party Integration is a backend development capability that supports server-side product behavior, data processing, integrations, security, reliability, or operational workflows. It can include APIs, databases, queues, authentication, caching, storage, admin tools, and real-time infrastructure depending on the system need."
	},
	{
		q: "Why do companies invest in Third-party Integration?",
		a: "Companies invest in Third-party Integration to improve scalability, reliability, security, developer velocity, data quality, and production visibility. The strongest results come when architecture, implementation, testing, observability, and operational ownership are planned together."
	}
];

export default function ThirdPartyIntegrationCaseStudy() {
	return (
		<>
			<SEO
				title="Third-party Integration Case Study | OpenGridLabs"
				description="How OpenGridLabs built a third-party integration layer with normalized connectors, retries, and dependency health dashboards — reducing incidents by 56%."
				canonical="/services/product-engineering/third-party-integration"
				keywords="Third-party Integration, API Integration, Webhook Integration, SaaS Integrations, Connector Architecture, External APIs, Integration Layer, Backend Automation"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(145,100%,40%) 0%, hsl(155,100%,35%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Backend Development"
					title="How Third-party Integration Connected External Systems Without Fragile One-Off Work"
					description="A growing platform depended on payment, CRM, analytics, support, and partner APIs, but integrations were brittle and hard to monitor. OpenGridLabs built a third-party integration layer with normalized connectors, retries, webhooks, audit logs, and dependency health dashboards."
					categoryBorderClass="border-green-500/30"
					categoryBgClass="bg-green-500/10"
					categoryTextClass="text-green-400"
					glowBgClass="bg-green-400"
					terminalIconClass="text-green-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "SaaS platform with partner ecosystem (anonymised)" },
						{ label: "Scope", value: "13 external systems connected" },
						{ label: "Timeline", value: "11 weeks to production" },
						{ label: "Stack", value: "Connectors · Webhooks · Retries · Audit Logs" }
					]}
				/>

				<CaseStudyCarousel
					slug="third-party-integration"
					title="Third-party Integration"
					accentColor="emerald"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/third-party-integration/1.jpg",
						"/images/case-studies/third-party-integration/2.jpg"
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-green-500/30"
					hoverTextClass="group-hover:text-green-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"The client had a growing product surface with more users, more integrations, more data movement, and more operational expectations than the original backend could comfortably support. Teams were dealing with slow releases, unclear service boundaries, duplicate logic, fragile jobs, and limited production visibility.",
						"The company needed Third-party Integration that could move beyond quick fixes and support real product growth. OpenGridLabs designed the backend architecture, contracts, data flows, security controls, deployment process, and observability needed to make the capability reliable in production.",
						"Third-party Integration is a backend development capability focused on building reliable server-side systems, service contracts, data flows, integrations, security controls, and operational tooling. In production, it requires clear architecture, testing, observability, deployment discipline, and maintainable ownership patterns."
					]}
					contextHighlightColorClass="bg-green-400"
					contextIconColorClass="text-green-400"
					definitionTitle="What Is Third-party Integration?"
					definitionText="Third-party Integration is a backend development capability focused on building reliable server-side systems, service contracts, data flows, integrations, security controls, and operational tooling. In production, it requires clear architecture, testing, observability, deployment discipline, and maintainable ownership patterns."
					definitionIcon={<Link2 className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-green-500/10"
					definitionIconBorderClass="border-green-500/20"
					definitionIconColorClass="text-green-400"
					glowColorClass="bg-green-400"
					gradientFromClass="from-green-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Backend Engineering Gaps Resolved"}
					description={"How OpenGridLabs built Third-party Integration to deliver standard patterns and incident tracking."}
					hoverBorderClass={"hover:border-green-500/20"}
					arrowColorClass={"text-green-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a backend architecture that connected application clients, service contracts, data models, infrastructure, security, and operational monitoring. The result was a maintainable foundation that could support current workloads and future product expansion."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-green-400"}
					highlightColorClass={"bg-green-400"}
					gradientColorClass={"via-green-400/50"}
					alertBorderClass={"border-green-500/20"}
					alertBgClass={"bg-green-500/5"}
					alertTextColorClass={"text-green-300"}
					alertTitle={"Design backend capabilities as operating foundations"}
					alertText={"The implementation focused on more than shipping endpoints. Each capability included contracts, data ownership, observability, failure handling, and team practices so the backend could support product growth after launch."}
					rightColumnTitle={"Third-party Integration Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases, moving from architecture and contract design into implementation, hardening, launch, and operational enablement."}
					phaseColors={[ "hsl(145,100%,40%)", "hsl(155,100%,35%)", "hsl(165,100%,35%)" ]}
					axisGradientClass={"from-green-500 via-emerald-500 to-teal-500"}
					badgeColorClass={"text-green-400 bg-green-400/10 border-green-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from clearer service boundaries, more reliable data flows, automated checks, and better production visibility."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The work made third-party integration feel like a real platform capability instead of a pile of backend fixes. We got clearer contracts, safer releases, and the visibility we needed to operate with confidence."}
					author={"VP of Engineering"}
					subtitle={"Confidential Software Platform"}
					accentLineClass={"bg-green-400"}
					iconColorClass={"text-green-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-green-500/20"}
					iconColorClass={"text-green-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-green-400"}
					activeChevronColorClass={"text-green-400"}
				/>

				<CaseStudyCta 
					title={"Ready to strengthen your backend with Third-party Integration?"}
					description={"OpenGridLabs designs and builds backend systems for third-party integration, combining architecture, secure service contracts, data design, integrations, testing, observability, and production rollout support."}
					moreCaseStudiesLink={"/services/product-engineering"}
					glowBgClass={"bg-green-400"}
					iconColorClass={"text-green-400"}
					btnGradientClass={"from-green-400 to-green-500"}
					btnShadowColor={"74,222,128,0.2"}
				/>
			</div>
		</>
	);
}
