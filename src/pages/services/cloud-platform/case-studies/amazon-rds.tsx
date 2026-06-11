import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Workflow, 
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
	{ value: "6", label: "RDS databases optimized and governed", accent: "from-amber-500 to-orange-600" },
	{ value: "−42%", label: "Reduction in slow query incidents", accent: "from-blue-500 to-indigo-600" },
	{ value: "99.9%", label: "Database availability during monitored rollout", accent: "from-teal-400 to-emerald-600" },
	{ value: "10 wk", label: "From unmanaged DB practices to RDS operating model", accent: "from-purple-500 to-pink-500" }
];

const CHALLENGES = [
	{ text: "AWS resources had grown organically, creating inconsistent naming, tagging, permissions, and ownership" },
	{ text: "Manual provisioning and configuration made environments hard to reproduce and review" },
	{ text: "Security, networking, monitoring, and cost controls varied between workloads and accounts" },
	{ text: "Scaling and incident response depended on manual intervention instead of predictable automation" },
	{ text: "Teams needed clearer dashboards, runbooks, and handoff practices for production operations" }
];

const SOLUTIONS = [
	{ text: "A production AWS architecture aligned to workload requirements, security boundaries, and growth targets" },
	{ text: "Infrastructure automation, tagging, environment standards, and deployment practices for repeatability" },
	{ text: "Least-privilege access, network controls, encryption, backups, and audit-friendly configuration" },
	{ text: "CloudWatch metrics, logs, alarms, dashboards, and runbooks tied to business-critical workflows" },
	{ text: "Cost visibility, scaling policies, and operational ownership practices for long-term maintainability" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Workloads", items: ["Applications", "APIs", "Workers", "Data flows", "Users"], color: "hsl(210,100%,50%)" },
	{ title: "Services", items: ["Compute", "Storage", "Database", "Networking", "Managed services"], color: "hsl(33,100%,50%)" },
	{ title: "Govern", items: ["IAM", "Encryption", "Tags", "Backups", "Policy controls"], color: "hsl(280,100%,65%)" },
	{ title: "Operate", items: ["CloudWatch", "Alarms", "Dashboards", "Cost reports", "Runbooks"], color: "hsl(145,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Cloud Assessment & Architecture Blueprint (Weeks 1–3)",
		desc: "OpenGridLabs audited the existing AWS accounts, workloads, service configuration, IAM policies, networking, cost reports, alarms, and operational incidents. The team defined target architecture, migration steps, service boundaries, and production readiness criteria.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 2",
		title: "Build, Secure & Automate (Weeks 4–8)",
		desc: "The team implemented the AWS capability with infrastructure automation, security controls, environment configuration, service integration, monitoring, and deployment workflows. Critical paths were tested against expected load, failure modes, and rollback scenarios.",
		accent: "from-amber-500 to-orange-600"
	},
	{
		number: "Phase 3",
		title: "Production Rollout & Operations (Weeks 9–10)",
		desc: "The final phase covered production rollout, dashboard validation, alert tuning, runbooks, cost review, documentation, and team enablement. OpenGridLabs handed over operating practices so the client team could extend the AWS foundation safely.",
		accent: "from-teal-400 to-emerald-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "RDS databases", before: "Ad hoc settings", after: "6 governed databases", change: "Optimized" },
	{ metric: "Slow query incidents", before: "Baseline", after: "58% of baseline", change: "−42%" },
	{ metric: "Database availability", before: "Unmeasured", after: "99.9% monitored", change: "Reliable" },
	{ metric: "Backup confidence", before: "Manual review", after: "Automated backups and checks", change: "Safer" },
	{ metric: "Read scaling", before: "Primary-only reads", after: "Replica strategy", change: "Scalable" }
];

const SUCCESS_FACTORS = [
	{
		title: "Infrastructure was repeatable",
		desc: "Automation, naming standards, tagging, and environment templates reduced drift and made changes reviewable."
	},
	{
		title: "Security was built into the design",
		desc: "Least-privilege access, network boundaries, encryption, logging, and backup requirements were handled as part of the architecture."
	},
	{
		title: "Observability matched production workflows",
		desc: "Dashboards and alarms were tied to real service health, user impact, cost signals, and incident response paths."
	},
	{
		title: "Ownership was clear after handoff",
		desc: "Runbooks, documentation, and operational reviews made it easier for the client team to maintain and extend the AWS setup."
	}
];

const FAQS = [
	{
		q: "What is Amazon RDS?",
		a: "Amazon RDS is an AWS capability used to support production workloads through cloud compute, storage, networking, security, observability, scaling, or managed services. It is most effective when designed with automation, monitoring, cost controls, and security from the start."
	},
	{
		q: "Why do companies invest in Amazon RDS?",
		a: "Companies invest in Amazon RDS to improve reliability, scalability, security, delivery speed, operational visibility, and cost efficiency on AWS. The strongest results come when architecture, implementation, automation, monitoring, and ownership are planned together."
	}
];

export default function AmazonRDSCaseStudy() {
	return (
		<>
			<SEO
				title="Amazon RDS Database Optimization Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned Amazon RDS databases for production growth: implementing read replicas, automated backups, and CloudWatch performance tuning."
				canonical="/services/cloud-platform/amazon-rds"
				keywords="Amazon RDS, AWS Database, Managed Database, RDS Optimization, Read Replicas, Database Backups, Performance Insights, Cloud Database, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous AWS Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(33,100%,50%) 0%, hsl(210,100%,50%) 50%, transparent 100%)`
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
					categoryTag="Case Study · AWS Cloud"
					title="How Amazon RDS Stabilized Managed Databases for Production Growth"
					description="A data-heavy application used relational databases without consistent backup, replica, performance, and migration practices. OpenGridLabs redesigned Amazon RDS usage with parameter tuning, backups, read replicas, monitoring, maintenance windows, and migration runbooks."
					categoryBorderClass="border-orange-500/30"
					categoryBgClass="bg-orange-500/10"
					categoryTextClass="text-orange-400"
					glowBgClass="bg-orange-400"
					terminalIconClass="text-orange-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "SaaS transaction and reporting platform (anonymised)" },
						{ label: "Scope", value: "6 RDS databases optimized" },
						{ label: "Timeline", value: "10 weeks to production" },
						{ label: "Stack", value: "Amazon RDS · Read Replicas · Backups · Performance Insights" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-orange-500/30"
					hoverTextClass="group-hover:text-orange-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Database className="w-5 h-5" />}
					contextParagraphs={[
						"The client had growing cloud workloads on AWS, but the environment had expanded faster than the operating model around it. Teams were managing reliability, cost, security, deployments, networking, monitoring, and scaling with a mix of manual processes and uneven standards.",
						"The company needed Amazon RDS that could move beyond a tactical cloud setup and become part of a reliable AWS operating model. OpenGridLabs designed the architecture, security controls, automation, monitoring, cost governance, and rollout plan needed to support production workloads with confidence.",
						"Amazon RDS is an AWS cloud capability used to run, store, secure, scale, connect, observe, or migrate production workloads. In practice, it requires architecture decisions, access controls, automation, monitoring, cost governance, and operational ownership."
					]}
					contextHighlightColorClass="bg-orange-400"
					contextIconColorClass="text-orange-400"
					definitionTitle="What Is Amazon RDS?"
					definitionText="Amazon RDS is an AWS cloud capability used to run, store, secure, scale, connect, observe, or migrate production workloads. In practice, it requires architecture decisions, access controls, automation, monitoring, cost governance, and operational ownership."
					definitionIcon={<ShieldAlert className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-orange-500/10"
					definitionIconBorderClass="border-orange-500/20"
					definitionIconColorClass="text-orange-400"
					glowColorClass="bg-orange-400"
					gradientFromClass="from-orange-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Cloud Engineering Gaps Resolved"}
					description={"How OpenGridLabs designed security boundaries, repeatability, and observability for Amazon RDS."}
					hoverBorderClass={"hover:border-orange-500/20"}
					arrowColorClass={"text-orange-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Workflow, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed an AWS architecture that connected application workloads, managed services, identity, networking, automation, observability, and cost controls. The result was a cloud foundation that supported current production traffic and future growth."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-orange-400"}
					highlightColorClass={"bg-orange-400"}
					gradientColorClass={"via-orange-400/50"}
					alertBorderClass={"border-orange-500/20"}
					alertBgClass={"bg-orange-500/5"}
					alertTextColorClass={"text-orange-300"}
					alertTitle={"Treat AWS services as part of one operating model"}
					alertText={"The work connected architecture, security, deployment, observability, and cost management. That made each AWS service easier to run because teams could see ownership, health, risk, and spend in one coherent system."}
					rightColumnTitle={"Amazon RDS Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases, moving from assessment and architecture into implementation, production rollout, and operational handoff."}
					phaseColors={[ "hsl(210,100%,50%)", "hsl(33,100%,50%)", "hsl(145,100%,40%)" ]}
					axisGradientClass={"from-orange-400 via-blue-500 to-teal-500"}
					badgeColorClass={"text-orange-400 bg-orange-400/10 border-orange-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from better automation, right-sized infrastructure, stronger security controls, and improved operational visibility."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The AWS work gave us a foundation we could actually operate. Amazon RDS stopped being a set of manual cloud tasks and became a reliable capability with visibility, ownership, and safer scaling."}
					author={"Cloud Engineering Lead"}
					subtitle={"Confidential SaaS Company"}
					accentLineClass={"bg-orange-400"}
					iconColorClass={"text-orange-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-orange-500/20"}
					iconColorClass={"text-orange-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-orange-400"}
					activeChevronColorClass={"text-orange-400"}
				/>

				<CaseStudyCta 
					title={"Ready to improve your AWS foundation with Amazon RDS?"}
					description={"OpenGridLabs designs and builds AWS cloud systems for amazon rds, combining architecture, automation, security, monitoring, cost governance, and production rollout support."}
					moreCaseStudiesLink={"/services/cloud-platform"}
					glowBgClass={"bg-orange-400"}
					iconColorClass={"text-orange-400"}
					btnGradientClass={"from-orange-400 to-blue-500"}
					btnShadowColor={"249,115,22,0.2"}
				/>
			</div>
		</>
	);
}
