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
	{ value: "60%", label: "Reduction in measurable technical debt", accent: "from-emerald-500 to-teal-600" },
	{ value: "0", label: "Security hotspots in new code since gates", accent: "from-purple-500 to-indigo-600" },
	{ value: "85%", label: "Average code coverage (from 41%)", accent: "from-blue-500 to-cyan-600" },
	{ value: "7 wk", label: "Unmeasured debt → enforced quality", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Technical debt concentrated in high-churn files, slowing every adjacent feature" },
	{ text: "No coverage enforcement — new features regularly shipped with 0% test coverage" },
	{ text: "Security hotspots in three services known but untracked, no gate preventing new ones" },
	{ text: "Inconsistent linting standards between services — some had ESLint, others nothing" },
	{ text: "No measurable baseline — 'we have a lot of debt' had no number attached to it" }
];

const SOLUTIONS = [
	{ text: "SonarQube connected to all eight repositories with quality profiles per language" },
	{ text: "Blocking quality gate: ≥80% coverage, ≤15 cyclomatic complexity, 0 new security hotspots, ≤3% duplication on new code" },
	{ text: "Legacy remediation backlog auto-generated from SonarQube issues, prioritised by churn frequency" },
	{ text: "ESLint and Pylint pre-commit hooks for instant local feedback before push" },
	{ text: "Technical debt dashboard tracking debt ratio per service over time" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Local", items: ["Pre-commit hooks (ESLint/Pylint)", "Fast format & lint", "No pipeline round-trip needed"], color: "hsl(145,100%,45%)" },
	{ title: "CI Analysis", items: ["SonarQube scan on every PR", "Coverage report ingestion", "Security hotspot detection", "Duplication analysis"], color: "hsl(200,100%,50%)" },
	{ title: "Gate Decision", items: ["Quality gate pass/fail → PR check", "Block merge on failure", "Annotated inline issues"], color: "hsl(280,100%,60%)" },
	{ title: "Dashboard", items: ["Technical debt trend", "Coverage history", "Hotspot ageing", "Sprint-level debt metrics"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Baseline & SonarQube Setup (Weeks 1–3)",
		desc: "OpenGridLabs connected SonarQube to all eight repositories and ran the first analysis to establish an actual debt baseline. Pre-commit hooks were installed across the team. The initial gate was set to the current baseline to avoid immediately blocking all PRs.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "Gate Tightening & Security (Weeks 4–6)",
		desc: "Quality gate thresholds were tightened incrementally over six weeks, each preceded by a one-sprint remediation window. The three known security hotspots were addressed and a zero-new-hotspots gate introduced.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Debt Backlog & Enablement (Week 7)",
		desc: "SonarQube issues were exported and prioritised by churn frequency. The prioritised backlog was added to the sprint board. OpenGridLabs documented the thresholds and override process.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Measured technical debt ratio", before: "Baseline", after: "40% of baseline", change: "-60%" },
	{ metric: "New security hotspots", before: "Untracked", after: "Zero since gate", change: "Zero since gate" },
	{ metric: "Average code coverage", before: "41%", after: "85%", change: "85%" },
	{ metric: "Linting enforced across services", before: "3 / 8", after: "8 / 8", change: "8 / 8" },
	{ metric: "Senior engineer debt triage time", before: "High", after: "Automated prioritisation", change: "Automated prioritisation" },
	{ metric: "PR merge rate with gate", before: "—", after: "~94% pass on first attempt", change: "~94% pass on first attempt" }
];

const SUCCESS_FACTORS = [
	{
		title: "Make debt visible before it is enforceable",
		desc: "Starting SonarQube in reporting mode before tightening the gate let the team see the baseline. Introducing enforcement against problems they'd already discussed created buy-in."
	},
	{
		title: "Incremental tightening prevents the 'big bang' quality push",
		desc: "Tightening one threshold per sprint spreads debt-reduction work across the normal engineering cycle rather than requiring a dedicated quality sprint."
	},
	{
		title: "Pre-commit hooks give sub-second feedback",
		desc: "A SonarQube analysis takes 3–5 minutes. A pre-commit lint check takes under a second. Engineers correct issues immediately when feedback is instant."
	}
];

const FAQS = [
	{
		q: "What is SonarQube?",
		a: "SonarQube is a static analysis platform that scans source code for bugs, security vulnerabilities, code smells, duplication, and coverage, integrating with CI to block merges below configured thresholds."
	},
	{
		q: "What is cyclomatic complexity?",
		a: "Cyclomatic complexity measures independent paths through a function. High complexity correlates with defects. Quality gates cap it on new code to prevent hard-to-maintain functions accumulating."
	}
];

export default function CodeQualityGatesCaseStudy() {
	return (
		<>
			<SEO
				title="Code Quality Gates Case Study | OpenGridLabs"
				description="How OpenGridLabs implemented SonarQube quality gates, reducing technical debt by 60% and enforcing quality standards in pull requests."
				canonical="/services/cloud-platform/code-quality-gates"
				keywords="Code Quality Gates, SonarQube, Static Analysis, Technical Debt, Code Coverage, Security Hotspots, ESLint, Pylint, Cyclomatic Complexity, CI/CD, DevOps, OpenGridLabs"
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
					title="How Automated Code Quality Gates Reduced Technical Debt 60% and Made Quality a Merge Requirement"
					description="A company with four years of accumulated codebase had technical debt slowing every new feature. Engineers knew the problem areas but had no leverage to prevent new debt being introduced. OpenGridLabs implemented SonarQube quality gates — coverage thresholds, complexity limits, duplication caps, and security hotspot blocking — making quality a measurable, enforced property of every merge."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / SaaS (anonymised)" },
						{ label: "Team / Scale", value: "40 engineers, 8 services" },
						{ label: "Timeline", value: "7 weeks" },
						{ label: "Stack", value: "SonarQube · ESLint · Pylint · Pre-commit · CI Gates" }
					]}
				/>

				<CaseStudyCarousel
									slug="code-quality-gates"
									title="Code Quality Gates"
									accentColor="emerald"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/code-quality-gates/1.jpg",
										"/images/case-studies/code-quality-gates/2.jpg"
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
						"Our client had four years of product code and a universal engineering sentiment that certain parts of the codebase were places nobody wanted to work. Functions with cyclomatic complexity above 30, copy-pasted logic spread across twelve files, and a security hotspot three engineers knew about but nobody had prioritised fixing. Technical debt was not invisible — it was just unenforced.",
						"The team had tried quality as a cultural initiative — code review norms, refactoring weeks. None stuck because there was no structural enforcement. Adding a feature was rewarded by shipping; cleaning up debt was not. OpenGridLabs changed the structural incentive: quality gates meant new debt could not be introduced without a deliberate override.",
						"A code quality gate is an automated check in the CI pipeline that blocks a merge unless the code meets defined quality thresholds — coverage above a minimum, cyclomatic complexity below a maximum, zero new security hotspots, duplication below a percentage. SonarQube integrates with CI to post gate results as pull request checks and block merges on failure."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Are Code Quality Gates?"
					definitionText="A code quality gate is an automated check in the CI pipeline that blocks a merge unless the code meets defined quality thresholds — coverage above a minimum, cyclomatic complexity below a maximum, zero new security hotspots, duplication below a percentage. SonarQube integrates with CI to post gate results as pull request checks and block merges on failure."
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
					description={"How OpenGridLabs implemented SonarQube gate configurations, static linting checks, and legacy debt remediation pipelines."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"The Code Quality Gate Pipeline integrates sub-second local lint checks with deep static analysis and PR gating checks inside CI/CD, feeding code complexity metrics into central dashboards."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Why this architecture"}
					alertText={"Each stage is independently observable and deployable. Failures surface at the earliest possible point, keeping feedback loops tight and mean time to detection measured in minutes rather than hours."}
					rightColumnTitle={"Code Quality Gate Pipeline Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"A structured seven-week delivery plan tracking static baselines, incremental gate adjustments, and developer onboarding."}
					phaseColors={[ "hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)" ]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Installing the gates cut measurable technical debt ratio by 60% and successfully blocked any new security vulnerabilities."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Before the gates, 'code quality' was a phrase in our engineering principles that nobody could measure. Now every service has a number, every sprint moves that number, and nobody can introduce a security hotspot without the pipeline stopping them."}
					author={"Principal Engineer"}
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
					title={"Technical debt nobody can measure or enforce?"}
					description={"OpenGridLabs implements code quality gates — SonarQube, linting, coverage thresholds, and security hotspot blocking — so quality is measurable, enforceable, and trending in the right direction."}
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
