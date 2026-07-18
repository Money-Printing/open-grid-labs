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
import CaseStudyCarousel from "../../../../components/case-study-carousel";

const STATS = [
	{ value: "42", label: "EC2 workloads standardized and documented", accent: "from-orange-500 to-amber-600" },
	{ value: "−37%", label: "Reduction in compute waste through right-sizing", accent: "from-purple-500 to-indigo-600" },
	{ value: "99.9%", label: "Availability during monitored rollout", accent: "from-teal-400 to-emerald-600" },
	{ value: "9 wk", label: "From manual instances to managed EC2 foundation", accent: "from-blue-500 to-cyan-500" }
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
	{ title: "Workloads", items: ["Applications", "APIs", "Workers", "Data flows", "Users"], color: "hsl(33,100%,50%)" },
	{ title: "Services", items: ["Compute", "Storage", "Database", "Networking", "Managed services"], color: "hsl(280,100%,60%)" },
	{ title: "Govern", items: ["IAM", "Encryption", "Tags", "Backups", "Policy controls"], color: "hsl(200,100%,50%)" },
	{ title: "Operate", items: ["CloudWatch", "Alarms", "Dashboards", "Cost reports", "Runbooks"], color: "hsl(160,100%,40%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Cloud Assessment & Architecture Blueprint (Weeks 1–3)",
		desc: "OpenGridLabs audited the existing AWS accounts, workloads, service configuration, IAM policies, networking, cost reports, alarms, and operational incidents. The team defined target architecture, migration steps, service boundaries, and production readiness criteria.",
		accent: "from-orange-500 to-amber-600"
	},
	{
		number: "Phase 2",
		title: "Build, Secure & Automate (Weeks 4–8)",
		desc: "The team implemented the AWS capability with infrastructure automation, security controls, environment configuration, service integration, monitoring, and deployment workflows. Critical paths were tested against expected load, failure modes, and rollback scenarios.",
		accent: "from-purple-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Production Rollout & Operations (Weeks 9–10)",
		desc: "The final phase covered production rollout, dashboard validation, alert tuning, runbooks, cost review, documentation, and team enablement. OpenGridLabs handed over operating practices so the client team could extend the AWS foundation safely.",
		accent: "from-teal-400 to-emerald-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "EC2 workloads", before: "Manual instances", after: "42 standardized workloads", change: "Governed" },
	{ metric: "Compute waste", before: "Baseline", after: "63% of baseline", change: "−37%" },
	{ metric: "Availability", before: "Unmeasured", after: "99.9% monitored", change: "Reliable" },
	{ metric: "Patch visibility", before: "Manual checks", after: "Image and patch process", change: "Improved" },
	{ metric: "Deployment consistency", before: "SSH-driven", after: "Template-based rollout", change: "Repeatable" }
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
		q: "What are EC2 Instances?",
		a: "EC2 Instances is an AWS capability used to support production workloads through cloud compute, storage, networking, security, observability, scaling, or managed services. It is most effective when designed with automation, monitoring, cost controls, and security from the start."
	},
	{
		q: "Why do companies invest in EC2 Instances?",
		a: "Companies invest in EC2 Instances to improve reliability, scalability, security, delivery speed, operational visibility, and cost efficiency on AWS. The strongest results come when architecture, implementation, automation, monitoring, and ownership are planned together."
	}
];

export default function EC2InstancesCaseStudy() {
	return (
		<>
			<SEO
				title="AWS EC2 Instances Optimization Case Study | OpenGridLabs"
				description="How OpenGridLabs standardized 42 EC2 workloads, cutting compute waste by 37% and enabling template-based repeatable deployments."
				canonical="/services/cloud-platform/ec2-instances"
				keywords="EC2 Instances, AWS EC2, Cloud Compute, Launch Templates, Auto Scaling Groups, AWS Compute, EC2 Optimization, Cloud Infrastructure, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous AWS Theme Ambient Glow */}
				<div
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700"
					style={{
						background: `radial-gradient(circle, hsl(33,100%,50%) 0%, hsl(280,100%,60%) 50%, transparent 100%)`
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
					title="How EC2 Instances Right-Sized Compute for Reliable Production Workloads"
					description="A SaaS team was running production services on manually managed EC2 instances with inconsistent sizing, patching, backups, and deployment practices. OpenGridLabs redesigned the EC2 foundation with launch templates, hardened images, autoscaling groups, observability, and cost controls."
					categoryBorderClass="border-orange-500/30"
					categoryBgClass="bg-orange-500/10"
					categoryTextClass="text-orange-400"
					glowBgClass="bg-orange-400"
					terminalIconClass="text-orange-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B SaaS platform (anonymised)" },
						{ label: "Scope", value: "42 EC2 workloads standardized" },
						{ label: "Timeline", value: "9 weeks to production" },
						{ label: "Stack", value: "EC2 · Launch Templates · Auto Scaling · CloudWatch" }
					]}
				/>

				<CaseStudyCarousel
					slug="ec2-instances"
					title="EC2 Instances"
					accentColor="orange"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/ec2-instances/1.jpg",
						"/images/case-studies/ec2-instances/2.jpg"
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
					contextIcon={<Cpu className="w-5 h-5" />}
					contextParagraphs={[
						"The client had growing cloud workloads on AWS, but the environment had expanded faster than the operating model around it. Teams were managing reliability, cost, security, deployments, networking, monitoring, and scaling with a mix of manual processes and uneven standards.",
						"The company needed EC2 Instances that could move beyond a tactical cloud setup and become part of a reliable AWS operating model. OpenGridLabs designed the architecture, security controls, automation, monitoring, cost governance, and rollout plan needed to support production workloads with confidence.",
						"EC2 Instances is an AWS cloud capability used to run, store, secure, scale, connect, observe, or migrate production workloads. In practice, it requires architecture decisions, access controls, automation, monitoring, cost governance, and operational ownership."
					]}
					contextHighlightColorClass="bg-orange-400"
					contextIconColorClass="text-orange-400"
					definitionTitle="What Are EC2 Instances?"
					definitionText="EC2 Instances is an AWS cloud capability used to run, store, secure, scale, connect, observe, or migrate production workloads. In practice, it requires architecture decisions, access controls, automation, monitoring, cost governance, and operational ownership."
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
					description={"How OpenGridLabs designed security boundaries, repeatability, and observability for EC2 Instances."}
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
					rightColumnTitle={"EC2 Instances Architecture Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases, moving from assessment and architecture into implementation, production rollout, and operational handoff."}
					phaseColors={["hsl(33,100%,50%)", "hsl(280,100%,60%)", "hsl(200,100%,50%)"]}
					axisGradientClass={"from-orange-500 via-purple-500 to-teal-500"}
					badgeColorClass={"text-orange-400 bg-orange-400/10 border-orange-400/20"}
				/>

				<MeasurableResults
					description="Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from better automation, right-sized infrastructure, stronger security controls, and improved operational visibility."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"The AWS work gave us a foundation we could actually operate. EC2 Instances stopped being a set of manual cloud tasks and became a reliable capability with visibility, ownership, and safer scaling."}
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
					title={"Ready to improve your AWS foundation with EC2 Instances?"}
					description={"OpenGridLabs designs and builds AWS cloud systems for ec2 instances, combining architecture, automation, security, monitoring, cost governance, and production rollout support."}
					moreCaseStudiesLink={"/services/cloud-platform"}
					glowBgClass={"bg-orange-400"}
					iconColorClass={"text-orange-400"}
					btnGradientClass={"from-orange-400 to-purple-500"}
					btnShadowColor={"249,115,22,0.2"}
				/>
			</div>
		</>
	);
}
