import { Link } from "react-router";

import {
	ArrowLeft,
	Layers,
	Workflow,
	Cpu,
	Activity,
	ShieldAlert,
	Database
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
	{ value: "16", label: "Cloud Storage buckets governed with shared standards", accent: "from-blue-500 to-cyan-600" },
	{ value: "−43%", label: "Reduction in stale storage cost", accent: "from-purple-500 to-indigo-600" },
	{ value: "100%", label: "Sensitive buckets covered by encryption and access policy", accent: "from-emerald-500 to-teal-600" },
	{ value: "7 wk", label: "From storage sprawl to governed Cloud Storage platform", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "GCP resources had grown organically, creating inconsistent naming, labels, permissions, and ownership" },
	{ text: "Manual provisioning and configuration made environments hard to reproduce and review" },
	{ text: "Security, networking, monitoring, and cost controls varied between workloads and projects" },
	{ text: "Scaling and incident response depended on manual intervention instead of predictable automation" },
	{ text: "Teams needed clearer dashboards, runbooks, and handoff practices for production operations" }
];

const SOLUTIONS = [
	{ text: "A production GCP architecture aligned to workload requirements, security boundaries, and growth targets" },
	{ text: "Infrastructure automation, labeling, environment standards, and deployment practices for repeatability" },
	{ text: "Least-privilege access, network controls, encryption, backups, and audit-friendly configuration" },
	{ text: "Cloud Monitoring metrics, logs, alerts, dashboards, and runbooks tied to business-critical workflows" },
	{ text: "Cost visibility, scaling policies, and operational ownership practices for long-term maintainability" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Workloads", items: ["Applications", "APIs", "Workers", "Data flows", "Users"], color: "hsl(217,89%,61%)" },
	{ title: "Services", items: ["Compute", "Storage", "Database", "Networking", "Managed services"], color: "hsl(145,100%,45%)" },
	{ title: "Govern", items: ["IAM", "Encryption", "Labels", "Backups", "Policy controls"], color: "hsl(280,100%,60%)" },
	{ title: "Operate", items: ["Cloud Monitoring", "Logs", "Alerts", "Cost reports", "Runbooks"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Cloud Assessment & Architecture Blueprint (Weeks 1–3)",
		desc: "OpenGridLabs audited the existing GCP projects, workloads, service configuration, IAM policies, networking, cost reports, alerts, and operational incidents. The team defined target architecture, migration steps, service boundaries, and production readiness criteria.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 2",
		title: "Build, Secure & Automate (Weeks 4–8)",
		desc: "The team implemented the GCP capability with infrastructure automation, security controls, environment configuration, service integration, monitoring, and deployment workflows. Critical paths were tested against expected load, failure modes, and rollback scenarios.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 3",
		title: "Production Rollout & Operations (Weeks 9–10)",
		desc: "The final phase covered production rollout, dashboard validation, alert tuning, runbooks, cost review, documentation, and team enablement. OpenGridLabs handed over operating practices so the client team could extend the GCP foundation safely.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Storage buckets", before: "Mixed policies", after: "16 governed buckets", change: "Standardized" },
	{ metric: "Stale storage cost", before: "Baseline", after: "57% of baseline", change: "−43%" },
	{ metric: "Sensitive data protection", before: "Partial", after: "100% policy coverage", change: "Secured" },
	{ metric: "Object lifecycle", before: "Manual cleanup", after: "Lifecycle automation", change: "Automated" },
	{ metric: "Access model", before: "Shared keys", after: "Signed and scoped access", change: "Safer" }
];

const SUCCESS_FACTORS = [
	{
		title: "Infrastructure was repeatable",
		desc: "Automation, naming standards, labels, and environment templates reduced drift and made changes reviewable."
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
		desc: "Runbooks, documentation, and operational reviews made it easier for the client team to maintain and extend the GCP setup."
	}
];

const FAQS = [
	{
		q: "What is Cloud Storage?",
		a: "Cloud Storage is a GCP capability used to support production workloads through cloud compute, storage, networking, security, analytics, observability, scaling, or managed services. It is most effective when designed with automation, monitoring, cost controls, and security from the start."
	},
	{
		q: "Why do companies invest in Cloud Storage?",
		a: "Companies invest in Cloud Storage to improve reliability, scalability, security, delivery speed, operational visibility, and cost efficiency on Google Cloud. The strongest results come when architecture, implementation, automation, monitoring, and ownership are planned together."
	}
];

export default function CloudStorageCaseStudy() {
	return (
		<>
			<SEO
				title="Google Cloud Storage Governance Case Study | OpenGridLabs"
				description="How OpenGridLabs governed 16 Cloud Storage buckets, reducing stale storage costs by 43% and implementing automated lifecycle rules and secure signed access."
				canonical="/services/cloud-platform/cloud-storage"
				keywords="Cloud Storage, Google Cloud Storage, GCP Storage, Object Storage, Bucket Lifecycle, Signed URLs, Cloud Storage Security, Data Storage, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous GCP Theme Ambient Glow */}
				<div
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700"
					style={{
						background: `radial-gradient(circle, hsl(217,89%,61%) 0%, hsl(145,100%,45%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Google Cloud Platform"
					title="How Cloud Storage Secured and Organized Object Storage at Scale"
					description="A product team stored documents, exports, images, and backups in Cloud Storage, but access rules, lifecycle policies, and data organization were inconsistent. OpenGridLabs redesigned Cloud Storage with bucket strategy, encryption, signed access, retention, lifecycle rules, and monitoring."
					categoryBorderClass="border-blue-500/30"
					categoryBgClass="bg-blue-500/10"
					categoryTextClass="text-blue-400"
					glowBgClass="bg-blue-400"
					terminalIconClass="text-blue-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Document-heavy SaaS and analytics platform (anonymised)" },
						{ label: "Scope", value: "16 buckets governed" },
						{ label: "Timeline", value: "7 weeks to production" },
						{ label: "Stack", value: "Cloud Storage · Lifecycle Rules · Signed URLs · IAM" }
					]}
				/>

				<CaseStudyCarousel
					slug="cloud-storage"
					title="Cloud Storage"
					accentColor="blue"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/cloud-storage/1.jpg",
						"/images/case-studies/cloud-storage/2.jpg"
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
						"The client had growing cloud workloads on Google Cloud, but the environment had expanded faster than the operating model around it. Teams were managing reliability, cost, security, deployments, networking, monitoring, and scaling with a mix of manual processes and uneven standards.",
						"The company needed Cloud Storage that could move beyond a tactical cloud setup and become part of a reliable GCP operating model. OpenGridLabs designed the architecture, security controls, automation, monitoring, cost governance, and rollout plan needed to support production workloads with confidence.",
						"Cloud Storage is a Google Cloud capability used to run, store, secure, scale, connect, observe, or analyze production workloads. In practice, it requires architecture decisions, access controls, automation, monitoring, cost governance, and operational ownership."
					]}
					contextHighlightColorClass="bg-blue-400"
					contextIconColorClass="text-blue-400"
					definitionTitle="What Is Cloud Storage?"
					definitionText="Cloud Storage is a Google Cloud capability used to run, store, secure, scale, connect, observe, or analyze production workloads. In practice, it requires architecture decisions, access controls, automation, monitoring, cost governance, and operational ownership."
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
					title={"Five Cloud Engineering Gaps Resolved"}
					description={"How OpenGridLabs designed security boundaries, repeatability, and observability for Cloud Storage."}
					hoverBorderClass={"hover:border-blue-500/20"}
					arrowColorClass={"text-blue-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Workflow, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a GCP architecture that connected application workloads, managed services, identity, networking, automation, observability, and cost controls. The result was a cloud foundation that supported current production traffic and future growth."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-blue-400"}
					highlightColorClass={"bg-blue-400"}
					gradientColorClass={"via-blue-400/50"}
					alertBorderClass={"border-blue-500/20"}
					alertBgClass={"bg-blue-500/5"}
					alertTextColorClass={"text-blue-300"}
					alertTitle={"Treat GCP services as part of one operating model"}
					alertText={"The work connected architecture, security, deployment, observability, and cost management. That made each GCP service easier to run because teams could see ownership, health, risk, and spend in one coherent system."}
					rightColumnTitle={"Cloud Storage Architecture Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases, moving from assessment and architecture into implementation, production rollout, and operational handoff."}
					phaseColors={["hsl(217,89%,61%)", "hsl(145,100%,45%)", "hsl(280,100%,60%)"]}
					axisGradientClass={"from-blue-500 via-emerald-500 to-purple-500"}
					badgeColorClass={"text-blue-400 bg-blue-400/10 border-blue-400/20"}
				/>

				<MeasurableResults
					description="Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from better automation, managed services, stronger security controls, and improved operational visibility."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"The GCP work gave us a foundation we could actually operate. Cloud Storage stopped being a set of manual cloud tasks and became a reliable capability with visibility, ownership, and safer scaling."}
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
					title={"Ready to improve your GCP foundation with Cloud Storage?"}
					description={"OpenGridLabs designs and builds Google Cloud systems for cloud storage, combining architecture, automation, security, monitoring, cost governance, and production rollout support."}
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
