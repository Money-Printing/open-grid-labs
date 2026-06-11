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
	{ value: "6", label: "Azure SQL databases optimized and governed", accent: "from-emerald-500 to-teal-600" },
	{ value: "41%", label: "Reduction in slow query incidents", accent: "from-purple-500 to-indigo-600" },
	{ value: "99.9%", label: "Database availability during monitored rollout", accent: "from-blue-500 to-cyan-600" },
	{ value: "10 wk", label: "From unmanaged DB practices to Azure SQL operating model", accent: "from-amber-500 to-orange-500" }
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
	{ metric: "Azure SQL databases", before: "Ad hoc settings", after: "6 governed databases", change: "Optimized" },
	{ metric: "Slow query incidents", before: "Baseline", after: "59% of baseline", change: "-41%" },
	{ metric: "Database availability", before: "Unmeasured", after: "99.9% monitored", change: "Reliable" },
	{ metric: "Backup confidence", before: "Manual review", after: "Automated backups and checks", change: "Safer" },
	{ metric: "Read scaling", before: "Primary-only reads", after: "Replica strategy", change: "Scalable" }
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
		q: "What is Azure SQL Database?",
		a: "Azure SQL Database is an Azure capability used to support production workloads through cloud compute, storage, networking, identity, security, observability, scaling, or managed services. It is most effective when designed with automation, monitoring, cost controls, and security from the start."
	},
	{
		q: "Why do companies invest in Azure SQL Database?",
		a: "Companies invest in Azure SQL Database to improve reliability, scalability, security, delivery speed, operational visibility, and cost efficiency on Microsoft Azure. The strongest results come when architecture, implementation, automation, monitoring, and ownership are planned together."
	}
];

export default function AzureSQLDatabaseCaseStudy() {
	return (
		<>
			<SEO
				title="Azure SQL Database Case Study | OpenGridLabs"
				description="How OpenGridLabs optimized and secured 6 Azure SQL databases, reducing slow query incidents by 41% and implementing automated replica read scaling."
				canonical="/services/cloud-platform/azure-sql-database"
				keywords="Azure SQL Database, Azure SQL, Managed SQL, Cloud Database, Database Optimization, SQL Performance, Database Backups, Azure Data Platform, Microsoft Azure, OpenGridLabs"
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
					title="How Azure SQL Database Stabilized Managed Relational Data for Product Growth"
					description="A data-heavy application used SQL databases without consistent backup, performance, scaling, and migration practices. OpenGridLabs redesigned Azure SQL Database usage with tuning, backups, replicas, monitoring, access controls, and migration runbooks."
					categoryBorderClass="border-blue-500/30"
					categoryBgClass="bg-blue-500/10"
					categoryTextClass="text-blue-400"
					glowBgClass="bg-blue-400"
					terminalIconClass="text-blue-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "SaaS transaction and reporting platform (anonymised)" },
						{ label: "Scope", value: "6 databases optimized" },
						{ label: "Timeline", value: "10 weeks to production" },
						{ label: "Stack", value: "Azure SQL · Query Performance · Backups · Failover" }
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
						"The company needed Azure SQL Database that could move beyond a tactical cloud setup and become part of a reliable Azure operating model. OpenGridLabs designed the architecture, security controls, automation, monitoring, cost governance, and rollout plan needed to support production workloads with confidence.",
						"Azure SQL Database is an Azure capability used to run, store, secure, scale, connect, observe, or modernize production workloads. In practice, it requires architecture decisions, access controls, automation, monitoring, cost governance, and operational ownership."
					]}
					contextHighlightColorClass="bg-blue-400"
					contextIconColorClass="text-blue-400"
					definitionTitle="What Is Azure SQL Database?"
					definitionText="Azure SQL Database is an Azure capability used to run, store, secure, scale, connect, observe, or modernize production workloads. In practice, it requires architecture decisions, access controls, automation, monitoring, cost governance, and operational ownership."
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
					title={"Azure SQL Database Architecture"}
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
					rightColumnTitle={"Azure SQL Database Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"A systematic ten-week journey establishing baseline configurations, securing networking, and tuning database failovers."}
					phaseColors={[ "hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)" ]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-blue-400 bg-blue-400/10 border-blue-400/20"}
				/>

				<MeasurableResults 
					description="Redesigning our relational database operations on Azure SQL resulted in immediate gains across query latency, failover backups, availability, and scalable read replicas."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The Azure work gave us a foundation we could actually operate. Azure SQL Database stopped being a set of manual cloud tasks and became a reliable capability with visibility, ownership, and safer scaling."}
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
					title={"Ready to improve your Azure foundation with Azure SQL Database?"}
					description={"OpenGridLabs designs and builds Azure cloud systems for azure sql database, combining architecture, automation, security, monitoring, cost governance, and production rollout support."}
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
