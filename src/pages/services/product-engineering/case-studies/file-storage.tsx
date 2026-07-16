import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Database,
	HardDrive
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
	{ value: "4", label: "Secure file workflows launched", accent: "from-sky-400 to-indigo-500" },
	{ value: "52%", label: "Reduction in failed upload and delivery issues", accent: "from-indigo-400 to-blue-500" },
	{ value: "100%", label: "Sensitive files protected by access policies", accent: "from-blue-500 to-teal-500" },
	{ value: "8 wk", label: "From manual file handling to storage platform", accent: "from-teal-400 to-sky-600" }
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
	{ title: "Clients", items: ["Web app", "Mobile app", "Admin tools", "Partner clients", "Internal services"], color: "hsl(195,100%,40%)" },
	{ title: "Services", items: ["API layer", "Service modules", "Validation", "Authorization", "Business logic"], color: "hsl(205,100%,38%)" },
	{ title: "Data", items: ["Databases", "Cache", "Queues", "Object storage", "External integrations"], color: "hsl(215,100%,38%)" },
	{ title: "Operate", items: ["Logs", "Metrics", "Tracing", "Alerts", "Runbooks"], color: "hsl(210,100%,36%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Architecture, Contracts & Risk Review (Weeks 1-3)",
		desc: "OpenGridLabs audited the existing backend architecture, service dependencies, data flows, security controls, operational incidents, and release process. The team defined target contracts, ownership boundaries, quality gates, and rollout milestones.",
		accent: "from-sky-400 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "Build, Integrate & Validate (Weeks 4-8)",
		desc: "The team implemented the backend capability with service modules, data migrations, validation, authorization, integration tests, observability, and deployment automation. Critical paths were tested against real traffic patterns and failure modes.",
		accent: "from-indigo-400 to-blue-500"
	},
	{
		number: "Phase 3",
		title: "Launch, Monitoring & Handoff (Weeks 9-10)",
		desc: "The final phase covered production rollout, monitoring dashboards, alert thresholds, rollback plans, documentation, and team enablement. OpenGridLabs handed over runbooks and architecture notes so client engineers could extend the system safely.",
		accent: "from-blue-500 to-teal-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "File workflows", before: "Manual uploads", after: "4 workflows", change: "Launched" },
	{ metric: "Upload and delivery issues", before: "Baseline", after: "48% of baseline", change: "-52%" },
	{ metric: "Protected sensitive files", before: "Partial", after: "100% policy coverage", change: "Secured" },
	{ metric: "File processing", before: "Manual checks", after: "Scan and metadata pipeline", change: "Automated" },
	{ metric: "Storage lifecycle", before: "None", after: "Retention rules", change: "Controlled" }
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
		q: "What is File Storage?",
		a: "File Storage is a backend development capability that supports server-side product behavior, data processing, integrations, security, reliability, or operational workflows. It can include APIs, databases, queues, authentication, caching, storage, admin tools, and real-time infrastructure depending on the system need."
	},
	{
		q: "Why do companies invest in File Storage?",
		a: "Companies invest in File Storage to improve scalability, reliability, security, developer velocity, data quality, and production visibility. The strongest results come when architecture, implementation, testing, observability, and operational ownership are planned together."
	}
];

export default function FileStorageCaseStudy() {
	return (
		<>
			<SEO
				title="File Storage Case Study | OpenGridLabs"
				description="How OpenGridLabs built secure file storage workflows with signed URLs, virus scanning, lifecycle rules, and CDN delivery — achieving a 52% reduction in upload and delivery issues."
				canonical="/services/product-engineering/file-storage"
				keywords="File Storage, Object Storage, Signed URLs, Secure Uploads, CDN Delivery, File Processing, Document Storage, Backend Storage"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(195,100%,40%) 0%, hsl(205,100%,35%) 50%, transparent 100%)`
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
					title="How File Storage Created Secure Upload, Processing, and Delivery Workflows"
					description="A product needed to handle documents, media, exports, and user uploads securely across web and mobile clients. OpenGridLabs built file storage workflows with signed URLs, virus scanning, metadata, lifecycle rules, access policies, and CDN delivery."
					categoryBorderClass="border-sky-500/30"
					categoryBgClass="bg-sky-500/10"
					categoryTextClass="text-sky-400"
					glowBgClass="bg-sky-400"
					terminalIconClass="text-sky-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Document-heavy SaaS and customer portal (anonymised)" },
						{ label: "Scope", value: "4 file workflows launched" },
						{ label: "Timeline", value: "8 weeks to production" },
						{ label: "Stack", value: "Object Storage · Signed URLs · Scanning · CDN" }
					]}
				/>

				<CaseStudyCarousel
					slug="file-storage"
					title="File Storage"
					accentColor="indigo"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/file-storage/1.jpg",
						"/images/case-studies/file-storage/2.jpg"
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-sky-500/30"
					hoverTextClass="group-hover:text-sky-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"The client had a growing product surface with more users, more integrations, more data movement, and more operational expectations than the original backend could comfortably support. Teams were dealing with slow releases, unclear service boundaries, duplicate logic, fragile jobs, and limited production visibility.",
						"The company needed File Storage that could move beyond quick fixes and support real product growth. OpenGridLabs designed the backend architecture, contracts, data flows, security controls, deployment process, and observability needed to make the capability reliable in production.",
						"File Storage is a backend development capability focused on building reliable server-side systems, service contracts, data flows, integrations, security controls, and operational tooling. In production, it requires clear architecture, testing, observability, deployment discipline, and maintainable ownership patterns."
					]}
					contextHighlightColorClass="bg-sky-400"
					contextIconColorClass="text-sky-400"
					definitionTitle="What Is File Storage?"
					definitionText="File Storage is a backend development capability focused on building reliable server-side systems, service contracts, data flows, integrations, security controls, and operational tooling. In production, it requires clear architecture, testing, observability, deployment discipline, and maintainable ownership patterns."
					definitionIcon={<HardDrive className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-sky-500/10"
					definitionIconBorderClass="border-sky-500/20"
					definitionIconColorClass="text-sky-400"
					glowColorClass="bg-sky-400"
					gradientFromClass="from-sky-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Backend Engineering Gaps Resolved"}
					description={"How OpenGridLabs built file storage to secure uploads and prevent delivery issues."}
					hoverBorderClass={"hover:border-sky-500/20"}
					arrowColorClass={"text-sky-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a backend architecture that connected application clients, service contracts, data models, infrastructure, security, and operational monitoring. The result was a maintainable foundation that could support current workloads and future product expansion."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-sky-400"}
					highlightColorClass={"bg-sky-400"}
					gradientColorClass={"via-sky-400/50"}
					alertBorderClass={"border-sky-500/20"}
					alertBgClass={"bg-sky-500/5"}
					alertTextColorClass={"text-sky-300"}
					alertTitle={"Design backend capabilities as operating foundations"}
					alertText={"The implementation focused on more than shipping endpoints. Each capability included contracts, data ownership, observability, failure handling, and team practices so the backend could support product growth after launch."}
					rightColumnTitle={"File Storage Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases, moving from architecture and contract design into implementation, hardening, launch, and operational enablement."}
					phaseColors={[ "hsl(195,100%,40%)", "hsl(205,100%,38%)", "hsl(215,100%,38%)" ]}
					axisGradientClass={"from-sky-500 via-blue-500 to-teal-500"}
					badgeColorClass={"text-sky-400 bg-sky-400/10 border-sky-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from clearer service boundaries, more reliable data flows, automated checks, and better production visibility."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The work made file storage feel like a real platform capability instead of a pile of backend fixes. We got clearer contracts, safer releases, and the visibility we needed to operate with confidence."}
					author={"VP of Engineering"}
					subtitle={"Confidential Software Platform"}
					accentLineClass={"bg-sky-400"}
					iconColorClass={"text-sky-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-sky-500/20"}
					iconColorClass={"text-sky-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-sky-400"}
					activeChevronColorClass={"text-sky-400"}
				/>

				<CaseStudyCta 
					title={"Ready to strengthen your backend with File Storage?"}
					description={"OpenGridLabs designs and builds backend systems for file storage, combining architecture, secure service contracts, data design, integrations, testing, observability, and production rollout support."}
					moreCaseStudiesLink={"/services/product-engineering"}
					glowBgClass={"bg-sky-400"}
					iconColorClass={"text-sky-400"}
					btnGradientClass={"from-sky-400 to-green-500"}
					btnShadowColor={"56,189,248,0.2"}
				/>
			</div>
		</>
	);
}
