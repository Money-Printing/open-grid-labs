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
	{ value: "8", label: "Workload groups covered by scaling policies", accent: "from-amber-500 to-orange-600" },
	{ value: "−45%", label: "Reduction in peak-time performance incidents", accent: "from-teal-400 to-emerald-600" },
	{ value: "−29%", label: "Reduction in idle compute cost", accent: "from-blue-500 to-indigo-600" },
	{ value: "7 wk", label: "From manual scaling to automated capacity", accent: "from-purple-500 to-pink-500" }
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
	{ title: "Operate", items: ["CloudWatch", "Alarms", "Dashboards", "Cost reports", "Runbooks"], color: "hsl(165,100%,40%)" }
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
	{ metric: "Workload groups", before: "Manual capacity", after: "8 scaling groups", change: "Automated" },
	{ metric: "Peak incidents", before: "Baseline", after: "55% of baseline", change: "−45%" },
	{ metric: "Idle compute cost", before: "Baseline", after: "71% of baseline", change: "−29%" },
	{ metric: "Scaling visibility", before: "Limited", after: "CloudWatch dashboards", change: "Visible" },
	{ metric: "Capacity planning", before: "Reactive", after: "Metric-based policies", change: "Scalable" }
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
		q: "What is Auto Scaling?",
		a: "Auto Scaling is an AWS capability used to support production workloads through cloud compute, storage, networking, security, observability, scaling, or managed services. It is most effective when designed with automation, monitoring, cost controls, and security from the start."
	},
	{
		q: "Why do companies invest in Auto Scaling?",
		a: "Companies invest in Auto Scaling to improve reliability, scalability, security, delivery speed, operational visibility, and cost efficiency on AWS. The strongest results come when architecture, implementation, automation, monitoring, and ownership are planned together."
	}
];

export default function AutoScalingCaseStudy() {
	return (
		<>
			<SEO
				title="AWS Auto Scaling Capacity Redesign Case Study | OpenGridLabs"
				description="How OpenGridLabs implemented automated scaling policies and metrics for 8 workload groups, cutting idle compute costs by 29% and peak incidents by 45%."
				canonical="/services/cloud-platform/auto-scaling"
				keywords="Auto Scaling, AWS Auto Scaling, Scaling Policies, Cloud Capacity, EC2 Auto Scaling, Elastic Scaling, CloudWatch Metrics, AWS Cost Optimization, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous AWS Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(33,100%,50%) 0%, hsl(165,100%,40%) 50%, transparent 100%)`
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
					title="How Auto Scaling Matched Capacity to Demand Without Manual Intervention"
					description="A production workload saw traffic spikes that caused either overprovisioning or degraded performance. OpenGridLabs implemented AWS Auto Scaling with scaling policies, CloudWatch metrics, warmup rules, schedules, dashboards, and cost review loops."
					categoryBorderClass="border-teal-500/30"
					categoryBgClass="bg-teal-500/10"
					categoryTextClass="text-teal-400"
					glowBgClass="bg-teal-400"
					terminalIconClass="text-teal-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "High-traffic SaaS workload (anonymised)" },
						{ label: "Scope", value: "8 workload groups scaled" },
						{ label: "Timeline", value: "7 weeks to production" },
						{ label: "Stack", value: "Auto Scaling · Scaling Policies · CloudWatch · Capacity Planning" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-teal-500/30"
					hoverTextClass="group-hover:text-teal-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Cpu className="w-5 h-5" />}
					contextParagraphs={[
						"The client had growing cloud workloads on AWS, but the environment had expanded faster than the operating model around it. Teams were managing reliability, cost, security, deployments, networking, monitoring, and scaling with a mix of manual processes and uneven standards.",
						"The company needed Auto Scaling that could move beyond a tactical cloud setup and become part of a reliable AWS operating model. OpenGridLabs designed the architecture, security controls, automation, monitoring, cost governance, and rollout plan needed to support production workloads with confidence.",
						"Auto Scaling is an AWS cloud capability used to run, store, secure, scale, connect, observe, or migrate production workloads. In practice, it requires architecture decisions, access controls, automation, monitoring, cost governance, and operational ownership."
					]}
					contextHighlightColorClass="bg-teal-400"
					contextIconColorClass="text-teal-400"
					definitionTitle="What Is Auto Scaling?"
					definitionText="Auto Scaling is an AWS cloud capability used to run, store, secure, scale, connect, observe, or migrate production workloads. In practice, it requires architecture decisions, access controls, automation, monitoring, cost governance, and operational ownership."
					definitionIcon={<ShieldAlert className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-teal-500/10"
					definitionIconBorderClass="border-teal-500/20"
					definitionIconColorClass="text-teal-400"
					glowColorClass="bg-teal-400"
					gradientFromClass="from-teal-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Cloud Engineering Gaps Resolved"}
					description={"How OpenGridLabs designed security boundaries, repeatability, and observability for AWS Auto Scaling."}
					hoverBorderClass={"hover:border-teal-500/20"}
					arrowColorClass={"text-teal-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Workflow, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed an AWS architecture that connected application workloads, managed services, identity, networking, automation, observability, and cost controls. The result was a cloud foundation that supported current production traffic and future growth."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-teal-400"}
					highlightColorClass={"bg-teal-400"}
					gradientColorClass={"via-teal-400/50"}
					alertBorderClass={"border-teal-500/20"}
					alertBgClass={"bg-teal-500/5"}
					alertTextColorClass={"text-teal-300"}
					alertTitle={"Treat AWS services as part of one operating model"}
					alertText={"The work connected architecture, security, deployment, observability, and cost management. That made each AWS service easier to run because teams could see ownership, health, risk, and spend in one coherent system."}
					rightColumnTitle={"AWS Auto Scaling Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases, moving from assessment and architecture into implementation, production rollout, and operational handoff."}
					phaseColors={[ "hsl(210,100%,50%)", "hsl(33,100%,50%)", "hsl(165,100%,40%)" ]}
					axisGradientClass={"from-orange-400 via-teal-500 to-blue-500"}
					badgeColorClass={"text-teal-400 bg-teal-400/10 border-teal-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from better automation, right-sized infrastructure, stronger security controls, and improved operational visibility."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The AWS work gave us a foundation we could actually operate. Auto Scaling stopped being a set of manual cloud tasks and became a reliable capability with visibility, ownership, and safer scaling."}
					author={"Cloud Engineering Lead"}
					subtitle={"Confidential SaaS Company"}
					accentLineClass={"bg-teal-400"}
					iconColorClass={"text-teal-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-teal-500/20"}
					iconColorClass={"text-teal-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-teal-400"}
					activeChevronColorClass={"text-teal-400"}
				/>

				<CaseStudyCta 
					title={"Ready to improve your AWS foundation with Auto Scaling?"}
					description={"OpenGridLabs designs and builds AWS cloud systems for auto scaling, combining architecture, automation, security, monitoring, cost governance, and production rollout support."}
					moreCaseStudiesLink={"/services/cloud-platform"}
					glowBgClass={"bg-teal-400"}
					iconColorClass={"text-teal-400"}
					btnGradientClass={"from-orange-400 to-teal-500"}
					btnShadowColor={"20,184,166,0.2"}
				/>
			</div>
		</>
	);
}
