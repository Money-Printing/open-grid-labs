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
	{ value: "→ Weekly", label: "Release cadence from fortnightly big-bangs", accent: "from-emerald-500 to-teal-600" },
	{ value: "-79%", label: "Post-release incidents", accent: "from-purple-500 to-indigo-600" },
	{ value: "100%", label: "Releases with auto-generated changelogs", accent: "from-blue-500 to-cyan-600" },
	{ value: "8 wk", label: "Chaotic batches → structured process", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Fortnightly big-bang releases with 50–100 changes making root-cause analysis near-impossible" },
	{ text: "No semantic versioning — releases named by date with no indication of change severity" },
	{ text: "Changelogs written manually on release day, incomplete and time-consuming" },
	{ text: "No feature flags — deploying and releasing to users were the same action, all or nothing" },
	{ text: "Change management approvals treated as bureaucratic hurdle rather than useful gate" }
];

const SOLUTIONS = [
	{ text: "Semantic Release automating version bumping and changelog from commit messages" },
	{ text: "Conventional commits standard enforced via commitlint in CI" },
	{ text: "Feature flag platform decoupling deployment from feature activation" },
	{ text: "Approval gates per environment integrated with the change management system" },
	{ text: "Trunk-based development with short-lived feature branches reducing merge complexity" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Commit", items: ["Conventional commits", "commitlint gate in CI", "Type: feat/fix/chore/breaking"], color: "hsl(145,100%,45%)" },
	{ title: "Version", items: ["Semantic Release: determine bump", "Update CHANGELOG.md", "Tag and GitHub release"], color: "hsl(200,100%,50%)" },
	{ title: "Gate", items: ["Staging approval", "Change management ticket auto-created", "Production approval required"], color: "hsl(280,100%,60%)" },
	{ title: "Activate", items: ["Feature flag", "Percentage rollout", "Kill switch", "Rollback = flag off"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Conventional Commits & Semantic Release (Weeks 1–3)",
		desc: "OpenGridLabs introduced the conventional commits standard with commitlint in CI. Semantic Release was configured to run on every main-branch merge, automatically bumping the version, generating the changelog, and creating a release.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "Feature Flags & Approval Gates (Weeks 4–6)",
		desc: "Feature flags were introduced for the five most-requested new features. Approval gates were integrated with the change management system, auto-creating change requests from release metadata.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Cadence Change & Runbooks (Weeks 7–8)",
		desc: "The fortnightly release batch was replaced with weekly releases of maximum ten changes. Post-release runbooks were updated to use feature flags as the first rollback mechanism.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Release cadence", before: "Fortnightly ~50 changes", after: "Weekly ~10 changes", change: "Weekly ~10 changes" },
	{ metric: "Post-release incidents", before: "Baseline", after: "-79%", change: "-79%" },
	{ metric: "Changelog generation", before: "Manual, incomplete", after: "Automated, complete", change: "Automated, complete" },
	{ metric: "Time to isolate a failing change", before: "Hours (big-bang)", after: "Flag off (seconds)", change: "Flag off (seconds)" },
	{ metric: "Release engineer time/release", before: "4–6 hours", after: "~30 min (automated)", change: "~30 min (automated)" },
	{ metric: "Change mgmt approvals", before: "Manual, batched", after: "Automated, per-release", change: "Automated, per-release" }
];

const SUCCESS_FACTORS = [
	{
		title: "Smaller releases are inherently lower risk",
		desc: "Ten changes deployed weekly is mathematically safer than fifty deployed fortnightly, even with the same total rate of change."
	},
	{
		title: "Conventional commits make the changelog a by-product",
		desc: "When commit messages follow a machine-readable convention, version numbers and changelogs become outputs of the pipeline rather than tasks for a release engineer."
	},
	{
		title: "Feature flags decouple deployment from risk",
		desc: "The highest-risk part of a release is activating a feature for users. Flags separate that activation from the deployment."
	}
];

const FAQS = [
	{
		q: "What is semantic versioning?",
		a: "Semantic versioning uses MAJOR.MINOR.PATCH versioning where MAJOR indicates breaking changes, MINOR new features, and PATCH bug fixes."
	},
	{
		q: "What is a feature flag?",
		a: "A feature flag enables or disables a feature without deploying new code, decoupling deployment from release and enabling instant rollback."
	}
];

export default function ReleaseManagementCaseStudy() {
	return (
		<>
			<SEO
				title="Release Management Case Study | OpenGridLabs"
				description="How OpenGridLabs built semantic versioning, automated changelogs, approval gates, and feature flags to turn chaotic big-bang deployments into controlled releases."
				canonical="/services/cloud-platform/release-management"
				keywords="Release Management, Semantic Versioning, Semantic Release, Conventional Commits, Feature Flags, Changelogs, Approval Gates, CI/CD, DevOps, Change Management, OpenGridLabs"
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
					title="How Structured Release Management Turned Chaotic Big-Bang Deploys into Controlled, Auditable Releases"
					description="A company was deploying every few weeks in large, anxiety-inducing batches — big-bang releases where everything shipped at once, nothing could be rolled back independently, and post-deploy incidents were common. OpenGridLabs built semantic versioning, automated changelogs, approval gates, and feature flags — making every release small, documented, and independently reversible."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "FinTech / Regulated SaaS (anonymised)" },
						{ label: "Scale", value: "55 engineers, 5 release trains" },
						{ label: "Timeline", value: "8 weeks" },
						{ label: "Stack", value: "Semantic Release · Feature Flags · Approval Gates · Changelogs" }
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
						"Our client operates in a regulated industry where every production change is subject to change management review. The team had been batching two weeks of changes into fortnightly releases to limit change requests. The unintended consequence was that every release was a large, high-risk event — dozens of changes deployed simultaneously, no way to isolate a failing feature.",
						"The regulation didn't require big batches; the process had simply evolved that way. OpenGridLabs redesigned the release process to work with the change management requirement: smaller, more frequent releases with better documentation, explicit approval gates, and feature flags to decouple deployment from feature activation.",
						"Release management governs how software changes move from development to production — how versions are numbered, changes documented, who must approve them, and how they deploy. Good release management makes releases frequent, small, traceable, and independently reversible, reducing the blast radius of each change."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Release Management?"
					definitionText="Release management governs how software changes move from development to production — how versions are numbered, changes documented, who must approve them, and how they deploy. Good release management makes releases frequent, small, traceable, and independently reversible, reducing the blast radius of each change."
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
					description={"How OpenGridLabs transformed high-risk release events into structured, semantic versions and flag-decoupled rollouts."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"The Release Management Pipeline processes conventional commits to auto-determine versions, requires pipeline environment approvals, and rolls out changes dynamically via feature flags."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Why this architecture"}
					alertText={"Each stage is independently observable and deployable. Failures surface at the earliest possible point, keeping feedback loops tight and mean time to detection measured in minutes rather than hours."}
					rightColumnTitle={"Release Management Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"An eight-week transition plan introducing automated version tagging, environment gates, and feature flags."}
					phaseColors={[ "hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)" ]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Automating changelogs, decoupling flags, and establishing semantic gating cut incidents by 79% and reduced release toil to minutes."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We used to treat each release like a military operation because any one of fifty changes could cause an incident. Now a release is ten changes, each individually reversible via a feature flag. The fear is gone."}
					author={"Head of Delivery"}
					subtitle={"Confidential FinTech Company"}
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
					title={"Treating every release like a military operation?"}
					description={"OpenGridLabs builds structured release management — semantic versioning, automated changelogs, feature flags, and approval gates — so releases are small, documented, and independently reversible."}
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
