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
	{ value: "100%", label: "Cloud resources defined in Terraform", accent: "from-emerald-500 to-teal-600" },
	{ value: "<15 min", label: "Environment provisioning, down from days", accent: "from-purple-500 to-indigo-600" },
	{ value: "0", label: "Console-only changes accepted", accent: "from-blue-500 to-cyan-600" },
	{ value: "12 wk", label: "Ad hoc scripts → full IaC coverage", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "All cloud infrastructure provisioned through the AWS console with no version control" },
	{ text: "No reproducibility — environments were subtly different and couldn't be rebuilt from scratch" },
	{ text: "Infrastructure drift between staging and production discovered only when something failed" },
	{ text: "No review process — anyone with console access could change anything without oversight" },
	{ text: "Compliance audits required manual resource inventory with no reliable source of truth" }
];

const SOLUTIONS = [
	{ text: "All 200+ AWS resources written as Terraform HCL across modular, reusable modules" },
	{ text: "Remote state stored in S3 with DynamoDB locking for safe concurrent applies" },
	{ text: "Terraform plan run on every PR, posting the infrastructure diff as a PR comment" },
	{ text: "Terraform apply gated behind CI and required approvals for production workspaces" },
	{ text: "Environment parity enforced by applying the same modules with different variable files" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Code", items: ["HCL modules in Git", "tfvars per environment", ".terraform.lock.hcl", "Module registry"], color: "hsl(145,100%,45%)" },
	{ title: "Plan", items: ["CI terraform init → validate → plan", "Plan output posted as PR comment", "Approval gate"], color: "hsl(200,100%,50%)" },
	{ title: "Apply", items: ["Terraform apply in CI", "Remote state update", "Drift detection on schedule"], color: "hsl(280,100%,60%)" },
	{ title: "Audit", items: ["State file in S3", "CloudTrail correlation", "Resource tagging", "Cost estimation"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Foundations & Module Design (Weeks 1–4)",
		desc: "OpenGridLabs designed the module structure and imported all existing resources into Terraform state without touching them. The import pass gave an accurate baseline for the plan/apply workflow.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "CI Integration & Environment Parity (Weeks 5–9)",
		desc: "Terraform plan was integrated into the PR workflow, posting the infrastructure diff as a comment. All three environments were brought to parity by applying the same modules with environment-specific variable files.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Drift Detection & Governance (Weeks 10–12)",
		desc: "A scheduled Terraform plan job detects out-of-band console changes and alerts the platform team. Resource tagging standards were enforced via Terraform.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Infrastructure version-controlled", before: "0%", after: "100%", change: "100%" },
	{ metric: "Environment provisioning time", before: "Days (manual)", after: "<15 min (automated)", change: "<15 min (automated)" },
	{ metric: "Staging/prod drift incidents", before: "Regular", after: "Zero (enforced parity)", change: "Zero (enforced parity)" },
	{ metric: "Infrastructure PR review rate", before: "0%", after: "100%", change: "100%" },
	{ metric: "Console-only changes", before: "Common", after: "Detected and blocked", change: "Detected and blocked" },
	{ metric: "Compliance audit prep time", before: "Days", after: "Hours (Terraform state)", change: "Hours (Terraform state)" }
];

const SUCCESS_FACTORS = [
	{
		title: "Import first, refactor later",
		desc: "Importing existing resources carried zero production risk and gave an accurate state baseline from day one."
	},
	{
		title: "Plan as a PR comment changes the review",
		desc: "Seeing the exact infrastructure diff in a pull request catches things a code review of HCL never would."
	},
	{
		title: "Modules enforce patterns across environments",
		desc: "Reusable modules meant the same networking, security, and tagging decisions applied consistently. Parity became automatic."
	}
];

const FAQS = [
	{
		q: "What is Terraform?",
		a: "Terraform is an IaC tool that defines cloud resources in HCL, computes a plan of changes, and applies them while tracking state in a state file."
	},
	{
		q: "What is Terraform remote state?",
		a: "Terraform remote state stores the state file in a shared backend like S3, enabling multiple team members and CI systems to safely share state without conflicts."
	}
];

export default function TerraformIaCCaseStudy() {
	return (
		<>
			<SEO
				title="Terraform Infrastructure as Code (IaC) Case Study | OpenGridLabs"
				description="How OpenGridLabs implemented Terraform IaC, moving AWS infrastructure into Git, enabling plan/apply CI gates, and achieving zero staging/production drift."
				canonical="/services/cloud-platform/terraform-iac"
				keywords="Terraform, Infrastructure as Code, Terraform IaC, HCL, Remote State, Terraform Modules, CI/CD, Cloud Infrastructure, AWS, DevOps, OpenGridLabs"
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
					title="How Terraform IaC Made Cloud Infrastructure Reviewable, Versioned, and Reproducible from Code"
					description="A company's cloud infrastructure was a mix of console clicks, ad hoc scripts, and institutional memory. Environments couldn't be reproduced reliably, drift between staging and production was endemic, and nobody could say what existed in the cloud with confidence. OpenGridLabs wrote all infrastructure as Terraform, moved it into version control, and made every infrastructure change a reviewed pull request."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Cloud", value: "AWS multi-region" },
						{ label: "Scope", value: "200+ resources across 3 environments" },
						{ label: "Timeline", value: "12 weeks" },
						{ label: "Stack", value: "Terraform · Remote State · CI Plan/Apply · Modules" }
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
						"Our client had been building cloud infrastructure by clicking through the AWS console since their early days. By the time they engaged OpenGridLabs, they had three environments, six AWS accounts, and a sprawling set of resources nobody had a complete picture of. Staging and production had drifted apart. Provisioning a new environment took a week of careful manual work and still produced something subtly different.",
						"The deeper problem was that infrastructure changes were invisible — no review, no approval, no record. A misconfigured security group or an accidentally deleted S3 bucket left no trail. The team needed infrastructure treated exactly like application code: committed, reviewed, planned before applied, and auditable after the fact.",
						"Terraform lets you define cloud resources in declarative HCL configuration files. You describe the desired state and Terraform computes the difference between what exists and what you want, showing a plan before applying any changes. Resources are tracked in a state file and all configuration lives in version control."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Terraform Infrastructure as Code?"
					definitionText="Terraform lets you define cloud resources in declarative HCL configuration files. You describe the desired state and Terraform computes the difference between what exists and what you want, showing a plan before applying any changes. Resources are tracked in a state file and all configuration lives in version control."
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
					description={"How OpenGridLabs replaced console clicks with version-controlled, modular Terraform HCL."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"The Terraform IaC Pipeline checks in HCL variables, compiles dry-run plan summaries on PR gates, applies configurations safely to remote states, and runs scheduled drift scans."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Why this architecture"}
					alertText={"Each stage is independently observable and deployable. Failures surface at the earliest possible point, keeping feedback loops tight and mean time to detection measured in minutes rather than hours."}
					rightColumnTitle={"Terraform IaC Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"A twelve-week progressive roadmap auditing cloud topologies, setting modules, and scheduling continuous drift checks."}
					phaseColors={[ "hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)" ]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Writing all resources to code cut provisioning times to under 15 minutes, blocked console-only drift, and simplified compliance."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We used to dread the question 'what exactly is in that AWS account?' Now we just run terraform show. Every resource, every configuration, every change — it's all in Git."}
					author={"Head of Infrastructure"}
					subtitle={"Confidential Technology Company"}
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
					title={"Still managing cloud infrastructure by hand?"}
					description={"OpenGridLabs implements Terraform IaC — modular HCL, remote state, CI plan/apply, and drift detection — so every cloud resource is reviewed, versioned, and reproducible."}
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
