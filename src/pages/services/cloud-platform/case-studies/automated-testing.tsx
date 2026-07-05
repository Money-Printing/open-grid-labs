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
	{ value: "68%", label: "Reduction in production bug rate", accent: "from-emerald-500 to-teal-600" },
	{ value: "85%", label: "Code coverage across all services", accent: "from-purple-500 to-indigo-600" },
	{ value: "15 min", label: "Full test suite (from 47 min)", accent: "from-blue-500 to-cyan-600" },
	{ value: "10 wk", label: "Ad hoc tests → enforced strategy", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "No consistent test strategy — unit tests in some services, nothing in others" },
	{ text: "CI pipeline ran tests but did not enforce coverage thresholds or block on missing tests" },
	{ text: "47-minute sequential test suite that engineers frequently cancelled to merge faster" },
	{ text: "No contract tests — API-breaking changes discovered in staging or production" },
	{ text: "Manual QA regression pass required before every release, taking 4–8 hours" }
];

const SOLUTIONS = [
	{ text: "Standardised test pyramid: unit → integration → contract → E2E, each with defined scope" },
	{ text: "Coverage thresholds enforced as blocking CI gates — PRs fail below 80% unit coverage" },
	{ text: "Parallel test execution in CI reducing wall-clock time from 47 to 15 minutes" },
	{ text: "Consumer-driven contract tests using Pact preventing API-breaking changes at PR stage" },
	{ text: "Playwright E2E suite covering 20 critical user journeys, run on every staging deploy" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Unit", items: ["Fast, isolated, no I/O", "Coverage ≥80% enforced", "Run on every commit", "pytest/Jest"], color: "hsl(145,100%,45%)" },
	{ title: "Integration", items: ["Real DB/services in Docker Compose", "Run on every PR", "Service contract validation"], color: "hsl(200,100%,50%)" },
	{ title: "Contract", items: ["Pact consumer-driven contracts", "Provider verification on every PR", "Breaks = blocked merge"], color: "hsl(280,100%,60%)" },
	{ title: "E2E", items: ["Playwright against staging", "Critical user journeys", "Run on staging deploy", "Screenshot on failure"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Strategy & Unit Test Uplift (Weeks 1–4)",
		desc: "OpenGridLabs defined the test pyramid standard, ran a testing workshop, raised unit test coverage to the 80% threshold for all six services, and configured parallel execution with pytest-xdist and Jest workers.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "Integration & Contract Tests (Weeks 5–8)",
		desc: "Docker Compose test environments were defined for each service. Pact contract testing was introduced between the three pairs of services with the most frequent API-breaking incidents.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "E2E Suite & Manual QA Elimination (Weeks 9–10)",
		desc: "Playwright E2E tests were written for 20 critical user journeys. The manual QA regression pass was replaced by the automated E2E suite running against staging before every production deploy.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Production bug rate", before: "Baseline", after: "32% of baseline", change: "-68%" },
	{ metric: "Unit test coverage", before: "38%", after: "85%", change: "85%" },
	{ metric: "CI test suite time", before: "47 min", after: "15 min", change: "-68%" },
	{ metric: "API-breaking changes in staging", before: "Monthly", after: "Zero since Pact", change: "Zero since Pact" },
	{ metric: "Manual QA time per release", before: "4–8 hours", after: "Eliminated", change: "Eliminated" },
	{ metric: "Regression incidents/sprint", before: "Baseline", after: "-79%", change: "-79%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Coverage thresholds enforce ownership",
		desc: "An 80% coverage gate means every engineer who adds a feature must add tests for it, distributing quality ownership across the team."
	},
	{
		title: "Parallel execution changes developer behaviour",
		desc: "A 15-minute test run is something engineers wait for. A 47-minute run is something they cancel."
	},
	{
		title: "Contract tests protect API boundaries without integration theatre",
		desc: "Consumer-driven contracts catch breaking changes in isolation, without needing both services running together."
	}
];

const FAQS = [
	{
		q: "What is the test pyramid?",
		a: "The test pyramid models automated testing with many fast unit tests at the base, fewer integration tests in the middle, and a small number of E2E tests at the top."
	},
	{
		q: "What is contract testing?",
		a: "Contract testing verifies a service provider honours its consumers' expectations in isolation, catching API-breaking changes before services are deployed together."
	}
];

export default function AutomatedTestingCaseStudy() {
	return (
		<>
			<SEO
				title="Automated Testing & Shift-Left QA Case Study | OpenGridLabs"
				description="How OpenGridLabs built an automated test strategy with pytest, Jest, Pact, and Playwright, reducing production bugs by 68%."
				canonical="/services/cloud-platform/automated-testing"
				keywords="Automated Testing, Shift-Left Testing, Test Pyramid, Unit Tests, Integration Tests, Contract Testing, Pact, End-to-End Tests, Playwright, CI/CD, DevOps, OpenGridLabs"
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
					title="How Shift-Left Automated Testing Cut Production Bugs 68% and Made Every Engineer a Quality Owner"
					description="A growing engineering team was shipping features fast and discovering bugs slowly — in staging, in production, and in customer tickets. Tests existed but were inconsistently written, rarely updated, and not enforced in the pipeline. OpenGridLabs built a comprehensive test strategy spanning unit, integration, contract, and E2E tests, enforced as blocking pipeline gates from the first commit."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B SaaS (anonymised)" },
						{ label: "Team / Scale", value: "45 engineers, 6 services" },
						{ label: "Timeline", value: "10 weeks" },
						{ label: "Stack", value: "pytest · Jest · Playwright · Pact · CI Gates" }
					]}
				/>


				<CaseStudyCarousel
					slug="automated-testing"
					title="Automated Testing"
					accentColor="emerald"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/automated-testing/1.jpg",
						"/images/case-studies/automated-testing/2.jpg"
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
						"Our client had tests — but not a testing strategy. Unit tests existed for some services, integration tests for others, and no end-to-end tests anywhere. Coverage ranged from 12% to 71% depending on which engineer had written the service. The CI pipeline ran whatever existed and failed silently when tests were skipped.",
						"The consequences showed up in every release cycle. Each release required a manual regression pass by a QA engineer. Customer-reported bugs frequently turned out to be regressions. The team was not short of talent; it was short of structure.",
						"Shift-left testing means moving quality checks earlier in the development process so defects are caught before they compound. Unit tests gate every commit, integration tests run on every PR, contract tests prevent API-breaking changes before staging. The further left a bug is caught, the cheaper it is to fix."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Shift-Left Testing?"
					definitionText="Shift-left testing means moving quality checks earlier in the development process so defects are caught before they compound. Unit tests gate every commit, integration tests run on every PR, contract tests prevent API-breaking changes before staging. The further left a bug is caught, the cheaper it is to fix."
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
					description={"How OpenGridLabs designed parallel executions, coverage gates, and contract-driven verification to enable bug-free deployments."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"The Automated Testing Pipeline is structured in distinct layers, capturing bugs early via unit and contract tests in isolation, before running E2E suites on staging deployments."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Why this architecture"}
					alertText={"Each stage is independently observable and deployable. Failures surface at the earliest possible point, keeping feedback loops tight and mean time to detection measured in minutes rather than hours."}
					rightColumnTitle={"Automated Testing Pipeline Stages"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"A ten-week quality engineering roadmap executing team training, Jest/pytest optimization, Pact API contract isolation, and Playwright E2E runs."}
					phaseColors={["hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)"]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults
					description="Shifting quality checks left in the pipeline reduced bug rates by 68% and cut staging regression cycles entirely."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"Bugs used to arrive as customer tickets. Now they arrive as failing CI checks. The team didn't change — the structure around them changed. Every engineer knows their PR won't merge if it breaks something."}
					author={"Head of Engineering"}
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
					title={"Discovering bugs in production rather than in CI?"}
					description={"OpenGridLabs builds automated testing strategies — unit, integration, contract, and E2E — enforced as CI gates so quality is owned by every engineer on every commit."}
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
