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
import CaseStudyCarousel from "../../../../components/case-study-carousel";

const STATS = [
	{ value: "58%", label: "Reduction in median build time", accent: "from-emerald-500 to-teal-600" },
	{ value: "100%", label: "PRs gated by automated checks", accent: "from-purple-500 to-indigo-600" },
	{ value: "0", label: "Manual steps in the CI phase", accent: "from-blue-500 to-cyan-600" },
	{ value: "6 wk", label: "Ad hoc scripts → workflow-as-code", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "No consistent CI across repositories — some had scripts, many had nothing" },
	{ text: "Releases required a senior engineer following a 40-step manual checklist" },
	{ text: "No automated security or dependency scanning on merged code" },
	{ text: "Build scripts lived outside version control and drifted silently" },
	{ text: "Matrix testing across runtime versions ran manually and infrequently" }
];

const SOLUTIONS = [
	{ text: "Standardised reusable workflow templates shared across all 10 repositories" },
	{ text: "Docker image built and pushed to registry on every main-branch merge" },
	{ text: "SAST, dependency audit, and container vulnerability scanning on every PR" },
	{ text: "PR status checks enforced as required — merges blocked until all jobs pass" },
	{ text: "Matrix builds covering all supported runtime versions in parallel" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Trigger", items: ["Push / PR event", "Branch filters", "Path filters", "Manual dispatch"], color: "hsl(145,100%,45%)" },
	{ title: "Jobs", items: ["Lint & format", "Unit tests (matrix)", "Build Docker image", "SAST & dependency scan"], color: "hsl(200,100%,50%)" },
	{ title: "Artefacts", items: ["Coverage report", "SBOM", "Container image → registry", "Test results"], color: "hsl(280,100%,60%)" },
	{ title: "Gate", items: ["Required status checks", "PR review", "Merge queue"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Baseline & Template (Weeks 1–2)",
		desc: "OpenGridLabs audited all ten repositories, designed a shared reusable workflow library covering lint, test, build, and scan, and migrated the first repository fully as a reference implementation.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "Repository Migration & Matrix Builds (Weeks 3–5)",
		desc: "All remaining repositories were migrated to shared workflows. Matrix build configurations were added for every supported runtime. Dependency audit and SAST jobs were wired in as blocking PR checks.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Hardening & Enablement (Week 6)",
		desc: "Merge queues, required reviewer rules, and branch protection were enabled across all repositories. OpenGridLabs ran a workflow-authoring workshop and documented standards for every new repository.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "PR gate coverage", before: "~20% (ad hoc)", after: "100%", change: "+100%" },
	{ metric: "Median build time", before: "Baseline", after: "42% of baseline", change: "-58%" },
	{ metric: "Manual release steps", before: "40-step checklist", after: "Zero", change: "Eliminated" },
	{ metric: "Security scan coverage", before: "0%", after: "100% every PR", change: "Full" },
	{ metric: "Time to detect failing test", before: "Hours–days", after: "<10 min", change: "<10 min" },
	{ metric: "Workflows in version control", before: "None", after: "All 10 repos", change: "All 10 repos" }
];

const SUCCESS_FACTORS = [
	{
		title: "Reusable workflows prevent drift",
		desc: "Shared workflow templates mean updating one file updates CI everywhere — without tracking down ten copies of the same YAML."
	},
	{
		title: "Matrix builds find real failures",
		desc: "Running the test suite against every supported runtime surfaced compatibility failures that single-version CI was silently ignoring."
	},
	{
		title: "Required checks change the culture",
		desc: "Making CI checks required — not advisory — turned the pipeline from a suggestion into an institution."
	}
];

const FAQS = [
	{
		q: "What is GitHub Actions?",
		a: "GitHub Actions is a CI/CD platform built into GitHub where workflows are YAML files in the repository triggered by events such as pushes or pull requests."
	},
	{
		q: "What are reusable workflows?",
		a: "Reusable workflows let you define a workflow once in a central repository and call it from any other, eliminating copy-pasted YAML and ensuring consistency."
	}
];

export default function GitHubActionsCaseStudy() {
	return (
		<>
			<SEO
				title="GitHub Actions CI/CD Case Study | OpenGridLabs"
				description="How OpenGridLabs built a secure, reusable GitHub Actions CI/CD pipeline, reducing build times by 58% and automating PR quality gates."
				canonical="/services/cloud-platform/github-actions"
				keywords="GitHub Actions, CI/CD, Workflow as Code, Reusable Workflows, Matrix Builds, SAST, Docker, Branch Protection, DevOps, Automated Testing, OpenGridLabs"
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
					title="How GitHub Actions Turned Every Pull Request into a Fully Automated Quality Gate"
					description="A 70-engineer team was merging code with no consistent automated check — builds ran locally if at all, releases required a dedicated engineer following a 40-step checklist. OpenGridLabs rebuilt the entire CI layer in GitHub Actions: every pull request now triggers a tested, linted, scanned, and containerised build automatically."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / SaaS (anonymised)" },
						{ label: "Scale", value: "70 engineers, 10 repos" },
						{ label: "Timeline", value: "6 weeks" },
						{ label: "Stack", value: "GitHub Actions · Docker · SAST · Reusable Workflows" }
					]}
				/>

				<CaseStudyCarousel
									slug="github-actions"
									title="GitHub Actions"
									accentColor="emerald"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/github-actions/1.jpg",
										"/images/case-studies/github-actions/2.jpg"
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
						"Our client is a fast-scaling SaaS company whose engineering team grew from ten to seventy in eighteen months. Early on, a senior engineer ran tests before every release. By the time OpenGridLabs engaged, that individual had become a bottleneck — and the team had started skipping tests to keep pace. Bugs that should have been caught in development were surfacing in staging, sometimes in production.",
						"The root cause was the absence of a consistent, automated integration layer. Every repository had a different convention, some had none, and accumulated inconsistency was slowing the team down. They needed workflow-as-code that lived alongside application code, reviewed and versioned like everything else.",
						"GitHub Actions is a CI/CD platform built into GitHub. Workflows are YAML files in the repository triggered by events — push, pull request, tag. Because the workflow lives in the repository, it is reviewed, versioned, and rolled back exactly like application code."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is GitHub Actions?"
					definitionText="GitHub Actions is a CI/CD platform built into GitHub. Workflows are YAML files in the repository triggered by events — push, pull request, tag. Because the workflow lives in the repository, it is reviewed, versioned, and rolled back exactly like application code."
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
					description={"How OpenGridLabs implemented reusable YAML workflows, matrix test suites, and strict merge queue pipelines."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"The GitHub Actions CI pipeline translates pushes and pull request events into matrixed lint, test, scan, and build steps, validating quality gates before merging."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Why this architecture"}
					alertText={"Each stage is independently observable and deployable. Failures surface at the earliest possible point, keeping feedback loops tight and mean time to detection measured in minutes rather than hours."}
					rightColumnTitle={"GitHub Actions Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"A six-week pipeline migration plan going from ad-hoc script runs to highly-parallelized matrix workflows and strict branch protections."}
					phaseColors={[ "hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)" ]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Migrating to GitHub Actions standardized CI across the fleet, cutting median build times by 58% and eliminating manual checklist steps."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We went from 'did you remember to run the tests?' to every PR being gated automatically. The team ships faster because they trust the pipeline to catch things — not because they skip steps."}
					author={"Engineering Manager"}
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
					title={"Ready to make every pull request a quality gate?"}
					description={"OpenGridLabs builds GitHub Actions pipelines — reusable workflows, matrix builds, security scanning, and merge queues — consistent and enforced across every repository."}
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
