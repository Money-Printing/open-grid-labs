import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Database,
	LayoutDashboard
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
	{ value: "17", label: "Admin workflows launched for operations teams", accent: "from-violet-400 to-purple-500" },
	{ value: "67%", label: "Reduction in engineering-assisted admin tasks", accent: "from-purple-400 to-violet-500" },
	{ value: "100%", label: "Admin actions covered by audit logs", accent: "from-violet-500 to-indigo-500" },
	{ value: "10 wk", label: "From support tickets to admin workflow", accent: "from-indigo-400 to-violet-600" }
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
	{ title: "Clients", items: ["Web app", "Mobile app", "Admin tools", "Partner clients", "Internal services"], color: "hsl(265,100%,65%)" },
	{ title: "Services", items: ["API layer", "Service modules", "Validation", "Authorization", "Business logic"], color: "hsl(250,100%,65%)" },
	{ title: "Data", items: ["Databases", "Cache", "Queues", "Object storage", "External integrations"], color: "hsl(275,100%,60%)" },
	{ title: "Operate", items: ["Logs", "Metrics", "Tracing", "Alerts", "Runbooks"], color: "hsl(285,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Architecture, Contracts & Risk Review (Weeks 1-3)",
		desc: "OpenGridLabs audited the existing backend architecture, service dependencies, data flows, security controls, operational incidents, and release process. The team defined target contracts, ownership boundaries, quality gates, and rollout milestones.",
		accent: "from-violet-400 to-purple-500"
	},
	{
		number: "Phase 2",
		title: "Build, Integrate & Validate (Weeks 4-8)",
		desc: "The team implemented the backend capability with service modules, data migrations, validation, authorization, integration tests, observability, and deployment automation. Critical paths were tested against real traffic patterns and failure modes.",
		accent: "from-purple-400 to-violet-500"
	},
	{
		number: "Phase 3",
		title: "Launch, Monitoring & Handoff (Weeks 9-10)",
		desc: "The final phase covered production rollout, monitoring dashboards, alert thresholds, rollback plans, documentation, and team enablement. OpenGridLabs handed over runbooks and architecture notes so client engineers could extend the system safely.",
		accent: "from-violet-500 to-indigo-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Admin workflows", before: "Engineering tickets", after: "17 workflows", change: "Enabled" },
	{ metric: "Engineering-assisted tasks", before: "Baseline", after: "33% of baseline", change: "-67%" },
	{ metric: "Audit log coverage", before: "Partial", after: "100% action coverage", change: "Traceable" },
	{ metric: "Bulk operations", before: "Manual edits", after: "Validated bulk actions", change: "Faster" },
	{ metric: "Permission model", before: "Shared access", after: "Role-based access", change: "Safer" }
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
		q: "What is Admin Panels?",
		a: "Admin Panels is a backend development capability that supports server-side product behavior, data processing, integrations, security, reliability, or operational workflows. It can include APIs, databases, queues, authentication, caching, storage, admin tools, and real-time infrastructure depending on the system need."
	},
	{
		q: "Why do companies invest in Admin Panels?",
		a: "Companies invest in Admin Panels to improve scalability, reliability, security, developer velocity, data quality, and production visibility. The strongest results come when architecture, implementation, testing, observability, and operational ownership are planned together."
	}
];

export default function AdminPanelsCaseStudy() {
	return (
		<>
			<SEO
				title="Admin Panels Case Study | OpenGridLabs"
				description="How OpenGridLabs built admin panels with RBAC, audit logs, bulk actions, and review controls — reducing engineering-assisted admin tasks by 67% with 100% audit log coverage."
				canonical="/services/product-engineering/admin-panels"
				keywords="Admin Panels, Internal Tools, Admin Dashboard, Operations Tools, RBAC, Audit Logs, Back Office Software, SaaS Admin"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(265,100%,65%) 0%, hsl(285,100%,55%) 50%, transparent 100%)`
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
					title="How Admin Panels Gave Operations Teams Safer Control Over Internal Workflows"
					description="Operations teams relied on engineering tickets and database edits for routine administration. OpenGridLabs built admin panels with role-based access, audit logs, bulk actions, search, validation, and review controls so internal teams could work safely."
					categoryBorderClass="border-violet-500/30"
					categoryBgClass="bg-violet-500/10"
					categoryTextClass="text-violet-400"
					glowBgClass="bg-violet-400"
					terminalIconClass="text-violet-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "SaaS operations and support teams (anonymised)" },
						{ label: "Scope", value: "17 admin workflows launched" },
						{ label: "Timeline", value: "10 weeks to production" },
						{ label: "Stack", value: "Admin UI · RBAC · Audit Logs · Bulk Actions" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-violet-500/30"
					hoverTextClass="group-hover:text-violet-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"The client had a growing product surface with more users, more integrations, more data movement, and more operational expectations than the original backend could comfortably support. Teams were dealing with slow releases, unclear service boundaries, duplicate logic, fragile jobs, and limited production visibility.",
						"The company needed Admin Panels that could move beyond quick fixes and support real product growth. OpenGridLabs designed the backend architecture, contracts, data flows, security controls, deployment process, and observability needed to make the capability reliable in production.",
						"Admin Panels is a backend development capability focused on building reliable server-side systems, service contracts, data flows, integrations, security controls, and operational tooling. In production, it requires clear architecture, testing, observability, deployment discipline, and maintainable ownership patterns."
					]}
					contextHighlightColorClass="bg-violet-400"
					contextIconColorClass="text-violet-400"
					definitionTitle="What Is Admin Panels?"
					definitionText="Admin Panels is a backend development capability focused on building reliable server-side systems, service contracts, data flows, integrations, security controls, and operational tooling. In production, it requires clear architecture, testing, observability, deployment discipline, and maintainable ownership patterns."
					definitionIcon={<LayoutDashboard className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-violet-500/10"
					definitionIconBorderClass="border-violet-500/20"
					definitionIconColorClass="text-violet-400"
					glowColorClass="bg-violet-400"
					gradientFromClass="from-violet-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Backend Engineering Gaps Resolved"}
					description={"How OpenGridLabs gave operations teams safe, audited control over internal workflows without engineering tickets."}
					hoverBorderClass={"hover:border-violet-500/20"}
					arrowColorClass={"text-violet-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a backend architecture that connected application clients, service contracts, data models, infrastructure, security, and operational monitoring. The result was a maintainable foundation that could support current workloads and future product expansion."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-violet-400"}
					highlightColorClass={"bg-violet-400"}
					gradientColorClass={"via-violet-400/50"}
					alertBorderClass={"border-violet-500/20"}
					alertBgClass={"bg-violet-500/5"}
					alertTextColorClass={"text-violet-300"}
					alertTitle={"Design backend capabilities as operating foundations"}
					alertText={"The implementation focused on more than shipping endpoints. Each capability included contracts, data ownership, observability, failure handling, and team practices so the backend could support product growth after launch."}
					rightColumnTitle={"Admin Panels Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases, moving from architecture and contract design into implementation, hardening, launch, and operational enablement."}
					phaseColors={[ "hsl(265,100%,65%)", "hsl(250,100%,65%)", "hsl(275,100%,60%)" ]}
					axisGradientClass={"from-violet-500 via-purple-500 to-indigo-500"}
					badgeColorClass={"text-violet-400 bg-violet-400/10 border-violet-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from clearer service boundaries, more reliable data flows, automated checks, and better production visibility."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The work made admin panels feel like a real platform capability instead of a pile of backend fixes. We got clearer contracts, safer releases, and the visibility we needed to operate with confidence."}
					author={"VP of Engineering"}
					subtitle={"Confidential Software Platform"}
					accentLineClass={"bg-violet-400"}
					iconColorClass={"text-violet-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-violet-500/20"}
					iconColorClass={"text-violet-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-violet-400"}
					activeChevronColorClass={"text-violet-400"}
				/>

				<CaseStudyCta 
					title={"Ready to strengthen your backend with Admin Panels?"}
					description={"OpenGridLabs designs and builds backend systems for admin panels, combining architecture, secure service contracts, data design, integrations, testing, observability, and production rollout support."}
					moreCaseStudiesLink={"/services/product-engineering"}
					glowBgClass={"bg-violet-400"}
					iconColorClass={"text-violet-400"}
					btnGradientClass={"from-violet-400 to-purple-500"}
					btnShadowColor={"167,139,250,0.2"}
				/>
			</div>
		</>
	);
}
