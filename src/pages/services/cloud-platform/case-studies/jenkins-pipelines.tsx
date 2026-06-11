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
	{ value: "74%", label: "Reduction in pipeline build failures", accent: "from-emerald-500 to-teal-600" },
	{ value: "2×", label: "Faster end-to-end pipeline via parallelism", accent: "from-purple-500 to-indigo-600" },
	{ value: "35", label: "Freestyle jobs migrated to Pipeline as Code", accent: "from-blue-500 to-cyan-600" },
	{ value: "10 wk", label: "Full migration, zero delivery pauses", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "35 freestyle jobs configured through the UI with no version control or review" },
	{ text: "Plugin updates frequently broke pipelines with no rollback and no audit trail" },
	{ text: "Sequential stages running 40 minutes when they could safely run in 15 with parallelism" },
	{ text: "Shared build scripts duplicated across repositories, drifting out of sync" },
	{ text: "Staging used different pipeline logic from production" }
];

const SOLUTIONS = [
	{ text: "All 35 pipelines migrated to Declarative Jenkinsfiles in version control" },
	{ text: "Jenkins Shared Library encapsulating notification, artifact publishing, and deployment" },
	{ text: "Parallel stages for test, lint, and security scan halving pipeline wall-clock time" },
	{ text: "Docker agent definitions standardising the build environment across all pipelines" },
	{ text: "Blue-green migration strategy: new Jenkinsfile runs shadow to old job before cutover" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Source", items: ["Jenkinsfile in repo", "Shared Library import", "Docker agent", "Parameters"], color: "hsl(145,100%,45%)" },
	{ title: "Stages", items: ["Checkout", "Lint (parallel)", "Unit test (parallel)", "Security scan (parallel)"], color: "hsl(200,100%,50%)" },
	{ title: "Post-build", items: ["Artifact archive", "Docker push", "Notification", "Environment promotion gate"], color: "hsl(280,100%,60%)" },
	{ title: "Shared Lib", items: ["notify()", "publishArtifact()", "deployToEnv()", "checkQuality()"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Shared Library & Low-Risk Migration (Weeks 1–4)",
		desc: "OpenGridLabs built the Jenkins Shared Library and migrated the five simplest freestyle jobs as reference implementations. Each Jenkinsfile ran shadow to its freestyle job before cutover, validating parity.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "Parallel Stages & Bulk Migration (Weeks 5–8)",
		desc: "The remaining 30 jobs were migrated. Parallel stages were introduced wherever test, lint, and scan were previously sequential. Staging/production parity was closed by sharing one Jenkinsfile with environment parameters.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Plugin Audit & Hardening (Weeks 9–10)",
		desc: "Unused plugins were removed, pinned plugin versions documented in version control, and pipeline health checks added. OpenGridLabs ran a Jenkinsfile authoring workshop and handed over the shared library with full documentation.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Pipeline failure rate", before: "Baseline", after: "26% of baseline", change: "-74%" },
	{ metric: "End-to-end pipeline time", before: "Baseline", after: "50% of baseline", change: "2× faster" },
	{ metric: "Jobs version-controlled", before: "0 / 35", after: "35 / 35", change: "100%" },
	{ metric: "Env parity staging = prod", before: "No", after: "Yes", change: "Standardised" },
	{ metric: "Plugin-update breakages", before: "Frequent", after: "Eliminated by pinning", change: "Eliminated by pinning" },
	{ metric: "Mean diagnosis time on failure", before: "30+ min", after: "<5 min", change: "<5 min" }
];

const SUCCESS_FACTORS = [
	{
		title: "Version control changes the conversation",
		desc: "When a pipeline breaks, the answer used to be 'check who last clicked in Jenkins'. Now it's 'git log'. Audit trail, blame, and rollback come for free when pipelines are code."
	},
	{
		title: "Parallelism is almost always free performance",
		desc: "Most pipelines have stages with no data dependency on each other. Running them in parallel halved wall-clock time for nearly every pipeline at essentially zero engineering cost."
	},
	{
		title: "Shadow running de-risks migration",
		desc: "Running the new Jenkinsfile alongside the old freestyle job for two weeks before cutover eliminated the 'we migrated and broke the release' failure mode entirely."
	}
];

const FAQS = [
	{
		q: "What is a Jenkinsfile?",
		a: "A Jenkinsfile defines a Jenkins pipeline in the source repository as code, versioned and reviewed like application code."
	},
	{
		q: "What is a Jenkins Shared Library?",
		a: "A Jenkins Shared Library centralises common pipeline logic in a separate repository, importable into any Jenkinsfile for consistent reuse."
	}
];

export default function JenkinsPipelinesCaseStudy() {
	return (
		<>
			<SEO
				title="Jenkins Pipelines as Code Case Study | OpenGridLabs"
				description="How OpenGridLabs migrated 35 fragile Jenkins freestyle jobs to Declarative Pipelines as Code and Shared Libraries, cutting build failures by 74%."
				canonical="/services/cloud-platform/jenkins-pipelines"
				keywords="Jenkins, Jenkins Pipelines, Jenkinsfile, Shared Library, Pipeline as Code, Declarative Pipeline, Parallel Stages, CI/CD, DevOps, Groovy, OpenGridLabs"
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
					title="How Jenkins Pipeline as Code Replaced 35 Fragile Freestyle Jobs and Cut Build Failures 74%"
					description="A 120-engineer organisation had accumulated six years of Jenkins freestyle jobs — click-configured, undocumented, and fragile. A single plugin update could break the release for three services at once. OpenGridLabs migrated the entire estate to Declarative Pipelines as code, Shared Libraries, and parallel stages without a single delivery pause."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Enterprise Technology (anonymised)" },
						{ label: "Scale", value: "120 engineers, 35 pipelines" },
						{ label: "Timeline", value: "10 weeks" },
						{ label: "Stack", value: "Jenkins · Declarative Pipeline · Groovy Libraries · Docker" }
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
						"Our client is a large enterprise technology company with a Jenkins installation that had grown organically for six years. What started as a handful of simple freestyle jobs had become 35 pipelines, most configured exclusively through the Jenkins UI with no version control, no documentation, and dependencies that existed only in long-tenured engineers' heads.",
						"Plugin updates routinely broke one or more pipelines. Configuration drift between environments was impossible to detect until something failed. The CI estate had become a source of risk rather than confidence. The team wanted to modernise to Pipeline as Code — but couldn't afford to pause the delivery machine while they did it.",
						"Jenkins Pipeline as Code defines build, test, and deploy logic in a Jenkinsfile that lives in the source repository. Declarative Pipeline provides clear structure and built-in error handling. Shared Libraries centralise common logic — notification, artifact publishing, deployment — reusable across all pipelines."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Jenkins Pipeline as Code?"
					definitionText="Jenkins Pipeline as Code defines build, test, and deploy logic in a Jenkinsfile that lives in the source repository. Declarative Pipeline provides clear structure and built-in error handling. Shared Libraries centralise common logic — notification, artifact publishing, deployment — reusable across all pipelines."
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
					description={"How OpenGridLabs replaced click-configured UI builds with versioned pipelines, centralized logic, and parallel runs."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"The Jenkins Declarative Pipeline Architecture sources the pipeline schema directly from Git, utilizes shared Groovy functions, and launches isolated Docker environments for builds."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Why this architecture"}
					alertText={"Each stage is independently observable and deployable. Failures surface at the earliest possible point, keeping feedback loops tight and mean time to detection measured in minutes rather than hours."}
					rightColumnTitle={"Jenkins Declarative Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"A ten-week transition plan migrating 35 jobs, optimizing build parallelism, and training engineering teams."}
					phaseColors={[ "hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)" ]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Standardizing pipelines under version control halved build times, eliminated plugin regressions, and accelerated debugging."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Six years of freestyle jobs that nobody could change without fear of breaking something. Now every pipeline is a Jenkinsfile in Git — any engineer can read it, review it, and roll it back. That change alone was worth the whole project."}
					author={"Head of Platform Engineering"}
					subtitle={"Confidential Enterprise Company"}
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
					title={"Held back by fragile freestyle jobs?"}
					description={"OpenGridLabs migrates Jenkins estates to Pipeline as Code — Shared Libraries, parallel stages, and Docker agents — without pausing your delivery line."}
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
