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
	{ value: "5→1", label: "Tools replaced by GitLab's platform", accent: "from-emerald-500 to-teal-600" },
	{ value: "100%", label: "Projects with built-in security scanning", accent: "from-purple-500 to-indigo-600" },
	{ value: "8 wk", label: "Scattered tools → single platform", accent: "from-blue-500 to-cyan-600" },
	{ value: "0", label: "External CI/CD tool licences remaining", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Five separate tools with separate credentials, dashboards, and billing" },
	{ text: "Security scanning ran on a weekly schedule rather than blocking merge requests" },
	{ text: "No single view of a change from commit to production" },
	{ text: "Deployment and pipeline status lived in different systems" },
	{ text: "No environment tracking — production state required querying multiple tools" }
];

const SOLUTIONS = [
	{ text: "All CI/CD migrated to .gitlab-ci.yml pipeline definitions per project" },
	{ text: "Built-in SAST, dependency scanning, and DAST via GitLab-managed templates" },
	{ text: "GitLab Environments tracking deployment state per environment per project" },
	{ text: "Merge request pipelines blocking merges until security and test gates pass" },
	{ text: "Protected environments requiring approval before production deployments" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Source", items: ["GitLab repo", "MR pipeline trigger", ".gitlab-ci.yml", "Include templates"], color: "hsl(145,100%,45%)" },
	{ title: "Scan & Test", items: ["SAST (managed)", "Dependency scan", "Unit tests", "DAST on review apps"], color: "hsl(200,100%,50%)" },
	{ title: "Deploy", items: ["GitLab Environments", "Protected env approval", "Rollback via re-deploy"], color: "hsl(280,100%,60%)" },
	{ title: "Observe", items: ["Pipeline dashboard", "Security dashboard", "MR widget", "Deploy board"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Pipeline Migration & Security Templates (Weeks 1–3)",
		desc: "OpenGridLabs migrated all twelve projects from CircleCI to .gitlab-ci.yml, enabling managed SAST and dependency scanning templates. Security jobs were immediately wired as blocking merge request checks.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "Environments, DAST & Protected Branches (Weeks 4–6)",
		desc: "GitLab Environments were configured per project with DAST running against review apps on every MR. Protected environment approval gates were set for production.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Consolidation & Decommission (Weeks 7–8)",
		desc: "CircleCI, Snyk, and the custom deploy tooling were decommissioned. GitLab's Security Dashboard replaced the separate Snyk console.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "CI/CD tool count", before: "5 tools", after: "1 platform", change: "-80%" },
	{ metric: "Security scan frequency", before: "Weekly batch", after: "Every MR", change: "Every MR" },
	{ metric: "Full change status view", before: "Multiple dashboards", after: "Single MR widget", change: "Single MR widget" },
	{ metric: "Production approval gate", before: "Absent", after: "Protected environment", change: "Protected environment" },
	{ metric: "Pipeline run time", before: "Baseline", after: "Baseline -40%", change: "Baseline -40%" },
	{ metric: "Annual toolchain cost", before: "Baseline", after: "Materially lower", change: "Materially lower" }
];

const SUCCESS_FACTORS = [
	{
		title: "Platform consolidation reduces cognitive load",
		desc: "Every tool an engineer doesn't have to context-switch into is time and attention returned to actual engineering."
	},
	{
		title: "Built-in security beats bolted-on security",
		desc: "GitLab-managed templates are updated by GitLab as vulnerabilities evolve, shifting that operational burden off the platform team."
	},
	{
		title: "Environments as first-class entities close the audit gap",
		desc: "GitLab Environments give a continuously updated answer to 'what is live?' and full deployment history."
	}
];

const FAQS = [
	{
		q: "What is a .gitlab-ci.yml file?",
		a: "A .gitlab-ci.yml file defines a GitLab CI/CD pipeline in the repository, versioned alongside the application code it tests and deploys."
	},
	{
		q: "What is GitLab DevSecOps?",
		a: "GitLab DevSecOps embeds security testing — SAST, DAST, dependency and container scanning — directly into the CI/CD pipeline as blocking merge request checks."
	}
];

export default function GitLabCaseStudy() {
	return (
		<>
			<SEO
				title="GitLab CI/CD DevSecOps Case Study | OpenGridLabs"
				description="How OpenGridLabs consolidated a fragmented DevSecOps toolchain onto a single GitLab CI/CD platform, reducing complexity and costs."
				canonical="/services/cloud-platform/gitlab-ci-cd"
				keywords="GitLab CI/CD, GitLab Pipelines, DevSecOps, SAST, DAST, GitLab Environments, MR Pipelines, Platform Consolidation, CI/CD, DevOps, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous DevOps Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(145,100%,45%) 0%, hsl(200,100%,50%) 50%, transparent 100%)`
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
					categoryTag="Case Study · DevOps & Engineering"
					title="How GitLab CI/CD Unified Source, Pipelines, Security Scanning, and Environments on One Platform"
					description="A mid-sized engineering team was juggling five separate tools for source control, CI, security scanning, deployment, and environment management. OpenGridLabs consolidated everything onto GitLab CI/CD — a single .gitlab-ci.yml per project replaced the entire fragmented toolchain, delivering built-in SAST, DAST, and dependency scanning as first-class merge request checks."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Software / B2B SaaS (anonymised)" },
						{ label: "Scale", value: "50 engineers, 12 projects" },
						{ label: "Timeline", value: "8 weeks" },
						{ label: "Stack", value: "GitLab CI · SAST/DAST · Environments · Protected Branches" }
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
					contextIcon={<Cpu className="w-5 h-5" />}
					contextParagraphs={[
						"Our client had accumulated five separate tools across the delivery pipeline: GitHub for source, CircleCI for CI, Snyk for scanning, a custom deploy script, and Datadog synthetics for post-deploy verification. Each tool had its own credentials, its own dashboard, and its own failure modes — keeping them in sync was consuming a disproportionate share of the platform team's time.",
						"Beyond the operational overhead, there were genuine gaps. Security scanning ran on a separate schedule rather than blocking merges. Deployment status lived in a different system from the pipeline that triggered it. There was no single place where an engineer could see the state of their change from commit to production.",
						"GitLab CI/CD is a continuous integration and delivery platform built directly into GitLab. Pipelines are defined in a .gitlab-ci.yml file in the repository. GitLab includes built-in SAST, DAST, dependency scanning, and container scanning — enabled with a single template include — making it a complete DevSecOps platform without external tool integration."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is GitLab CI/CD?"
					definitionText="GitLab CI/CD is a continuous integration and delivery platform built directly into GitLab. Pipelines are defined in a .gitlab-ci.yml file in the repository. GitLab includes built-in SAST, DAST, dependency scanning, and container scanning — enabled with a single template include — making it a complete DevSecOps platform without external tool integration."
					definitionIcon={<ShieldAlert className="w-6 h-6 animate-pulse" />}
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
					title={"DevOps Challenges & Solutions"}
					description={"How OpenGridLabs consolidated scattered build tools into a unified DevSecOps platform."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"The consolidated GitLab DevSecOps architecture tracks source code, runs automated SAST/DAST overlays, manages environments declaratively, and observes deploys inside one platform."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Why this architecture"}
					alertText={"Each stage is independently observable and deployable. Failures surface at the earliest possible point, keeping feedback loops tight and mean time to detection measured in minutes rather than hours."}
					rightColumnTitle={"GitLab CI/CD Pipeline Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"An eight-week migration strategy migrating repositories, wiring environments, and decommissioning the legacy pipeline."}
					phaseColors={[ "hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)" ]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Consolidating onto a single DevSecOps platform cut CI/CD runtime, license fees, and credentials management overhead."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Five logins, five dashboards, five places something could silently break. Now it's one. Every merge request shows tests, security, and deployment status in the same place."}
					author={"VP of Engineering"}
					subtitle={"Confidential SaaS Company"}
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
					title={"Too many CI/CD tools to manage?"}
					description={"OpenGridLabs builds GitLab CI/CD pipelines — unified DevSecOps, built-in scanning, environment tracking, and protected deployments — on a single platform."}
					moreCaseStudiesLink={"/services/cloud-platform"}
					glowBgClass={"bg-emerald-400"}
					iconColorClass={"text-emerald-400"}
					btnGradientClass={"from-emerald-400 to-teal-500"}
					btnShadowColor={"16,185,129,0.2"}
				/>
			</div>
		</>
	);
}
