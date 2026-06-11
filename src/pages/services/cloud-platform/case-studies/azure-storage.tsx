import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Activity, 
	Database,
	ShieldAlert
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
	{ value: "15", label: "Azure Storage accounts governed with shared standards", accent: "from-emerald-500 to-teal-600" },
	{ value: "44%", label: "Reduction in stale storage cost", accent: "from-purple-500 to-indigo-600" },
	{ value: "100%", label: "Sensitive storage covered by encryption and access policy", accent: "from-blue-500 to-cyan-600" },
	{ value: "7 wk", label: "From storage sprawl to governed Azure Storage platform", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Azure resources had grown organically, creating inconsistent naming, tags, permissions, and ownership" },
	{ text: "Manual provisioning and configuration made environments hard to reproduce and review" },
	{ text: "Security, networking, monitoring, and cost controls varied between workloads and subscriptions" },
	{ text: "Scaling and incident response depended on manual intervention instead of predictable automation" },
	{ text: "Teams needed clearer dashboards, runbooks, and handoff practices for production operations" }
];

const SOLUTIONS = [
	{ text: "A production Azure architecture aligned to workload requirements, security boundaries, and growth targets" },
	{ text: "Infrastructure automation, tagging, environment standards, and deployment practices for repeatability" },
	{ text: "Least-privilege access, network controls, encryption, backups, and audit-friendly configuration" },
	{ text: "Azure Monitor metrics, logs, alerts, dashboards, and runbooks tied to business-critical workflows" },
	{ text: "Cost visibility, scaling policies, and operational ownership practices for long-term maintainability" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Workloads", items: ["Applications", "APIs", "Workers", "Data flows", "Users"], color: "hsl(145,100%,45%)" },
	{ title: "Services", items: ["Compute", "Storage", "Database", "Networking", "Managed services"], color: "hsl(200,100%,50%)" },
	{ title: "Govern", items: ["Identity", "Encryption", "Tags", "Backups", "Policy controls"], color: "hsl(280,100%,60%)" },
	{ title: "Operate", items: ["Azure Monitor", "Logs", "Alerts", "Cost reports", "Runbooks"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Cloud Assessment & Architecture Blueprint (Weeks 1-3)",
		desc: "OpenGridLabs audited the existing Azure subscriptions, workloads, service configuration, identity policies, networking, cost reports, alerts, and operational incidents. The team defined target architecture, migration steps, service boundaries, and production readiness criteria.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "Build, Secure & Automate (Weeks 4-8)",
		desc: "The team implemented the Azure capability with infrastructure automation, security controls, environment configuration, service integration, monitoring, and deployment workflows. Critical paths were tested against expected load, failure modes, and rollback scenarios.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Production Rollout & Operations (Weeks 9-10)",
		desc: "The final phase covered production rollout, dashboard validation, alert tuning, runbooks, cost review, documentation, and team enablement. OpenGridLabs handed over operating practices so the client team could extend the Azure foundation safely.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Storage accounts", before: "Mixed policies", after: "15 governed accounts", change: "Standardized" },
	{ metric: "Stale storage cost", before: "Baseline", after: "56% of baseline", change: "-44%" },
	{ metric: "Sensitive data protection", before: "Partial", after: "100% policy coverage", change: "Secured" },
	{ metric: "Object lifecycle", before: "Manual cleanup", after: "Lifecycle automation", change: "Automated" },
	{ metric: "Access model", before: "Shared keys", after: "SAS and scoped access", change: "Safer" }
];

const SUCCESS_FACTORS = [
	{
		title: "Infrastructure was repeatable",
		desc: "Automation, naming standards, tags, and environment templates reduced drift and made changes reviewable."
	},
	{
		title: "Security was built into the design",
		desc: "Least-privilege access, network boundaries, encryption, logging, and backup requirements were handled as part of the architecture."
	},
	{
		title: "Observability matched production workflows",
		desc: "Dashboards and alerts were tied to real service health, user impact, cost signals, and incident response paths."
	},
	{
		title: "Ownership was clear after handoff",
		desc: "Runbooks, documentation, and operational reviews made it easier for the client team to maintain and extend the Azure setup."
	}
];

const FAQS = [
	{
		q: "What is Azure Storage?",
		a: "Azure Storage is an Azure capability used to support production workloads through cloud compute, storage, networking, identity, security, observability, scaling, or managed services. It is most effective when designed with automation, monitoring, cost controls, and security from the start."
	},
	{
		q: "Why do companies invest in Azure Storage?",
		a: "Companies invest in Azure Storage to improve reliability, scalability, security, delivery speed, operational visibility, and cost efficiency on Microsoft Azure. The strongest results come when architecture, implementation, automation, monitoring, and ownership are planned together."
	}
];

export default function AzureStorageCaseStudy() {
	return (
		<>
			<SEO
				title="Azure Storage Case Study | OpenGridLabs"
				description="How OpenGridLabs standardized and secured 15 Azure Storage accounts, implementing lifecycle rules to reduce stale storage costs by 44%."
				canonical="/services/cloud-platform/azure-storage"
				keywords="Azure Storage, Blob Storage, Azure Blob, Cloud Storage, SAS URLs, Storage Lifecycle, Azure Storage Security, Object Storage, Microsoft Azure, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Azure Blue Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(200,100%,50%) 0%, hsl(210,100%,45%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/cloud-platform" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to Cloud & Platform Engineering
					</Link>
				</div>

				<CaseStudyHero 
					categoryTag="Case Study · Microsoft Azure"
					title="How Azure Storage Secured and Organized Cloud Storage at Scale"
					description="A product team stored documents, exports, images, and backups in Azure Storage, but access rules, lifecycle policies, and data organization were inconsistent. OpenGridLabs redesigned Azure Storage with account strategy, containers, encryption, signed access, retention, lifecycle rules, and monitoring."
					categoryBorderClass="border-blue-500/30"
					categoryBgClass="bg-blue-500/10"
					categoryTextClass="text-blue-400"
					glowBgClass="bg-blue-400"
					terminalIconClass="text-blue-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Document-heavy SaaS and analytics platform (anonymised)" },
						{ label: "Scope", value: "15 storage accounts governed" },
						{ label: "Timeline", value: "7 weeks to production" },
						{ label: "Stack", value: "Azure Storage · Blob Storage · SAS URLs · Lifecycle Rules" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-blue-500/30"
					hoverTextClass="group-hover:text-blue-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Cpu className="w-5 h-5" />}
					contextParagraphs={[
						"The client had growing cloud workloads on Microsoft Azure, but the environment had expanded faster than the operating model around it. Teams were managing reliability, cost, security, deployments, networking, monitoring, and scaling with a mix of manual processes and uneven standards.",
						"The company needed Azure Storage that could move beyond a tactical cloud setup and become part of a reliable Azure operating model. OpenGridLabs designed the architecture, security controls, automation, monitoring, cost governance, and rollout plan needed to support production workloads with confidence.",
						"Azure Storage is an Azure capability used to run, store, secure, scale, connect, observe, or modernize production workloads. In practice, it requires architecture decisions, access controls, automation, monitoring, cost governance, and operational ownership."
					]}
					contextHighlightColorClass="bg-blue-400"
					contextIconColorClass="text-blue-400"
					definitionTitle="What Is Azure Storage?"
					definitionText="Azure Storage is an Azure capability used to run, store, secure, scale, connect, observe, or modernize production workloads. In practice, it requires architecture decisions, access controls, automation, monitoring, cost governance, and operational ownership."
					definitionIcon={<ShieldAlert className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-blue-500/10"
					definitionIconBorderClass="border-blue-500/20"
					definitionIconColorClass="text-blue-400"
					glowColorClass="bg-blue-400"
					gradientFromClass="from-blue-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Azure Challenges & Solutions"}
					description={"Five cloud engineering gaps were limiting reliability, security, scalability, cost control, and production visibility."}
					hoverBorderClass={"hover:border-blue-500/20"}
					arrowColorClass={"text-blue-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Blueprint"}
					title={"Azure Storage Architecture"}
					description={"OpenGridLabs designed an Azure architecture that connected application workloads, managed services, identity, networking, automation, observability, and cost controls."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-blue-400"}
					highlightColorClass={"bg-blue-400"}
					gradientColorClass={"via-blue-400/50"}
					alertBorderClass={"border-blue-500/20"}
					alertBgClass={"bg-blue-500/5"}
					alertTextColorClass={"text-blue-300"}
					alertTitle={"QA: Treat Azure services as part of one operating model"}
					alertText={"The work connected architecture, security, deployment, observability, and cost management. That made each Azure service easier to run because teams could see ownership, health, risk, and spend in one coherent system."}
					rightColumnTitle={"Azure Storage Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"A seven-week roadmap establishing secure boundaries, object lifecycles, and access policies for the data store."}
					phaseColors={[ "hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)" ]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-blue-400 bg-blue-400/10 border-blue-400/20"}
				/>

				<MeasurableResults 
					description="Standardizing storage policies and automating lifecycles delivered immediate reductions in stale storage costs and secured sensitive files."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The Azure work gave us a foundation we could actually operate. Azure Storage stopped being a set of manual cloud tasks and became a reliable capability with visibility, ownership, and safer scaling."}
					author={"Cloud Engineering Lead"}
					subtitle={"Confidential SaaS Company"}
					accentLineClass={"bg-blue-400"}
					iconColorClass={"text-blue-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-blue-500/20"}
					iconColorClass={"text-blue-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-blue-400"}
					activeChevronColorClass={"text-blue-400"}
				/>

				<CaseStudyCta 
					title={"Ready to improve your Azure foundation with Azure Storage?"}
					description={"OpenGridLabs designs and builds Azure cloud systems for azure storage, combining architecture, automation, security, monitoring, cost governance, and production rollout support."}
					moreCaseStudiesLink={"/services/cloud-platform"}
					glowBgClass={"bg-blue-400"}
					iconColorClass={"text-blue-400"}
					btnGradientClass={"from-blue-400 to-indigo-500"}
					btnShadowColor={"59,130,246,0.2"}
				/>
			</div>
		</>
	);
}
