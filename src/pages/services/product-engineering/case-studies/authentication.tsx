import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Database,
	KeyRound
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
	{ value: "7", label: "Access and identity workflows secured", accent: "from-emerald-400 to-green-500" },
	{ value: "100%", label: "Protected routes covered by permission checks", accent: "from-green-400 to-emerald-500" },
	{ value: "62%", label: "Reduction in access-related support cases", accent: "from-emerald-500 to-teal-500" },
	{ value: "9 wk", label: "From fragmented auth to secure access layer", accent: "from-teal-400 to-emerald-600" }
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
	{ title: "Clients", items: ["Web app", "Mobile app", "Admin tools", "Partner clients", "Internal services"], color: "hsl(155,100%,40%)" },
	{ title: "Services", items: ["API layer", "Service modules", "Validation", "Authorization", "Business logic"], color: "hsl(145,100%,38%)" },
	{ title: "Data", items: ["Databases", "Cache", "Queues", "Object storage", "External integrations"], color: "hsl(165,100%,38%)" },
	{ title: "Operate", items: ["Logs", "Metrics", "Tracing", "Alerts", "Runbooks"], color: "hsl(160,100%,36%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Architecture, Contracts & Risk Review (Weeks 1-3)",
		desc: "OpenGridLabs audited the existing backend architecture, service dependencies, data flows, security controls, operational incidents, and release process. The team defined target contracts, ownership boundaries, quality gates, and rollout milestones.",
		accent: "from-emerald-400 to-green-500"
	},
	{
		number: "Phase 2",
		title: "Build, Integrate & Validate (Weeks 4-8)",
		desc: "The team implemented the backend capability with service modules, data migrations, validation, authorization, integration tests, observability, and deployment automation. Critical paths were tested against real traffic patterns and failure modes.",
		accent: "from-green-400 to-emerald-500"
	},
	{
		number: "Phase 3",
		title: "Launch, Monitoring & Handoff (Weeks 9-10)",
		desc: "The final phase covered production rollout, monitoring dashboards, alert thresholds, rollback plans, documentation, and team enablement. OpenGridLabs handed over runbooks and architecture notes so client engineers could extend the system safely.",
		accent: "from-emerald-500 to-teal-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Access workflows", before: "Fragmented auth", after: "7 secured workflows", change: "Hardened" },
	{ metric: "Protected routes", before: "Partial", after: "100% coverage", change: "Covered" },
	{ metric: "Access support cases", before: "Baseline", after: "38% of baseline", change: "-62%" },
	{ metric: "Audit logging", before: "Limited", after: "User and admin audit logs", change: "Traceable" },
	{ metric: "Session handling", before: "Inconsistent", after: "Central policy", change: "Safer" }
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
		q: "What is Authentication?",
		a: "Authentication is a backend development capability that supports server-side product behavior, data processing, integrations, security, reliability, or operational workflows. It can include APIs, databases, queues, authentication, caching, storage, admin tools, and real-time infrastructure depending on the system need."
	},
	{
		q: "Why do companies invest in Authentication?",
		a: "Companies invest in Authentication to improve scalability, reliability, security, developer velocity, data quality, and production visibility. The strongest results come when architecture, implementation, testing, observability, and operational ownership are planned together."
	}
];

export default function AuthenticationCaseStudy() {
	return (
		<>
			<SEO
				title="Authentication Case Study | OpenGridLabs"
				description="How OpenGridLabs rebuilt authentication with secure token handling, RBAC, audit logs, and migration paths — achieving 100% route coverage and reducing access support cases by 62%."
				canonical="/services/product-engineering/authentication"
				keywords="Authentication, Authorization, RBAC, User Login, Session Security, Identity Management, Access Control, Backend Security"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(155,100%,40%) 0%, hsl(165,100%,35%) 50%, transparent 100%)`
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
					title="How Authentication Secured User Access Without Slowing Product Growth"
					description="A fast-growing platform needed stronger login, session, role, and permission controls across web, mobile, and admin workflows. OpenGridLabs rebuilt authentication with secure token handling, role-based access, audit logs, and migration paths that avoided user disruption."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Enterprise SaaS and customer portal (anonymised)" },
						{ label: "Scope", value: "7 access workflows secured" },
						{ label: "Timeline", value: "9 weeks to production" },
						{ label: "Stack", value: "Auth · RBAC · Sessions · Audit Logs" }
					]}
				/>

				<CaseStudyCarousel
					slug="authentication"
					title="Authentication"
					accentColor="emerald"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/authentication/1.jpg",
						"/images/case-studies/authentication/2.jpg"
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-emerald-500/30"
					hoverTextClass="group-hover:text-emerald-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"The client had a growing product surface with more users, more integrations, more data movement, and more operational expectations than the original backend could comfortably support. Teams were dealing with slow releases, unclear service boundaries, duplicate logic, fragile jobs, and limited production visibility.",
						"The company needed Authentication that could move beyond quick fixes and support real product growth. OpenGridLabs designed the backend architecture, contracts, data flows, security controls, deployment process, and observability needed to make the capability reliable in production.",
						"Authentication is a backend development capability focused on building reliable server-side systems, service contracts, data flows, integrations, security controls, and operational tooling. In production, it requires clear architecture, testing, observability, deployment discipline, and maintainable ownership patterns."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Authentication?"
					definitionText="Authentication is a backend development capability focused on building reliable server-side systems, service contracts, data flows, integrations, security controls, and operational tooling. In production, it requires clear architecture, testing, observability, deployment discipline, and maintainable ownership patterns."
					definitionIcon={<KeyRound className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-emerald-500/10"
					definitionIconBorderClass="border-emerald-500/20"
					definitionIconColorClass="text-emerald-400"
					glowColorClass="bg-emerald-400"
					gradientFromClass="from-emerald-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Backend Engineering Gaps Resolved"}
					description={"How OpenGridLabs rebuilt authentication to secure every access path without disrupting existing users."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a backend architecture that connected application clients, service contracts, data models, infrastructure, security, and operational monitoring. The result was a maintainable foundation that could support current workloads and future product expansion."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Design backend capabilities as operating foundations"}
					alertText={"The implementation focused on more than shipping endpoints. Each capability included contracts, data ownership, observability, failure handling, and team practices so the backend could support product growth after launch."}
					rightColumnTitle={"Authentication Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases, moving from architecture and contract design into implementation, hardening, launch, and operational enablement."}
					phaseColors={[ "hsl(155,100%,40%)", "hsl(145,100%,38%)", "hsl(165,100%,38%)" ]}
					axisGradientClass={"from-emerald-500 via-green-500 to-teal-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from clearer service boundaries, more reliable data flows, automated checks, and better production visibility."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The work made authentication feel like a real platform capability instead of a pile of backend fixes. We got clearer contracts, safer releases, and the visibility we needed to operate with confidence."}
					author={"VP of Engineering"}
					subtitle={"Confidential Software Platform"}
					accentLineClass={"bg-emerald-400"}
					iconColorClass={"text-emerald-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-emerald-500/20"}
					iconColorClass={"text-emerald-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-emerald-400"}
					activeChevronColorClass={"text-emerald-400"}
				/>

				<CaseStudyCta 
					title={"Ready to strengthen your backend with Authentication?"}
					description={"OpenGridLabs designs and builds backend systems for authentication, combining architecture, secure service contracts, data design, integrations, testing, observability, and production rollout support."}
					moreCaseStudiesLink={"/services/product-engineering"}
					glowBgClass={"bg-emerald-400"}
					iconColorClass={"text-emerald-400"}
					btnGradientClass={"from-emerald-400 to-green-500"}
					btnShadowColor={"52,211,153,0.2"}
				/>
			</div>
		</>
	);
}
