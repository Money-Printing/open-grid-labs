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
	{ value: "83%", label: "Lower change failure rate", accent: "from-emerald-500 to-teal-600" },
	{ value: "<2 min", label: "Drift detection and auto-reconciliation", accent: "from-purple-500 to-indigo-600" },
	{ value: "git revert", label: "Production rollback mechanism", accent: "from-blue-500 to-cyan-600" },
	{ value: "9 wk", label: "Imperative deploys → full GitOps", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "No single source of truth — live cluster could drift from what was deployed" },
	{ text: "Rollbacks required manual kubectl or helm commands, slow under pressure" },
	{ text: "No automatic detection of configuration drift or manual cluster changes" },
	{ text: "Pipeline-triggered deployments gave no ongoing health view after the job" },
	{ text: "Multi-environment promotion was a manual, error-prone copy of values files" }
];

const SOLUTIONS = [
	{ text: "All application manifests in a GitOps repository with environment-separated overlays" },
	{ text: "Rollback via git revert + push — ArgoCD handles the rest" },
	{ text: "Sync policies reconciling drift within minutes of detection" },
	{ text: "ArgoCD Applications syncing each service per environment from Git automatically" },
	{ text: "App-of-Apps pattern managing all ArgoCD Applications declaratively from one root" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Git", items: ["App manifests repo", "Helm charts", "Kustomize overlays", "Environment directories"], color: "hsl(145,100%,45%)" },
	{ title: "ArgoCD", items: ["App-of-Apps root", "Per-service Application CRDs", "Sync policy", "Health checks"], color: "hsl(200,100%,50%)" },
	{ title: "Reconcile", items: ["Drift detection", "Auto-sync", "Pruning", "Self-heal on out-of-band changes"], color: "hsl(280,100%,60%)" },
	{ title: "Cluster", items: ["Kubernetes namespaces", "Rolling updates", "Rollback via Git revert", "Status reporting"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "GitOps Repo & First App (Weeks 1–3)",
		desc: "OpenGridLabs designed the GitOps repository structure with Kustomize overlays, deployed ArgoCD, and migrated the first service to ArgoCD sync — validating the pattern end-to-end.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "Full Rollout & App-of-Apps (Weeks 4–7)",
		desc: "All eight services were migrated using the App-of-Apps pattern. Sync policies were configured per service — automatic for staging, gated approval for production. Multi-environment promotion became a pull request.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Drift Alerting & Runbook (Weeks 8–9)",
		desc: "ArgoCD health and sync status were surfaced in Slack and dashboards. The rollback runbook (git revert + PR) and multi-environment promotion workflow were documented.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Change failure rate", before: "Baseline", after: "17% of baseline", change: "-83%" },
	{ metric: "Drift detection time", before: "Undetected", after: "< 2 min (auto)", change: "< 2 min (auto)" },
	{ metric: "Rollback complexity", before: "Manual helm/kubectl", after: "git revert + push", change: "git revert + push" },
	{ metric: "Production state visibility", before: "Unknown", after: "Git-defined, live-synced", change: "Git-defined, live-synced" },
	{ metric: "Deployment audit trail", before: "Pipeline logs only", after: "Full git history", change: "Full git history" },
	{ metric: "Out-of-band changes", before: "Silent", after: "Auto-reverted", change: "Auto-reverted" }
];

const SUCCESS_FACTORS = [
	{
		title: "Declarative beats imperative for ongoing state",
		desc: "Declarative systems continuously enforce the desired state rather than performing a one-off action that can drift silently."
	},
	{
		title: "Git as audit trail is structurally better than logs",
		desc: "Git history is immutable, searchable, attributable to a person, and directly causal — the diff IS the deployment."
	},
	{
		title: "App-of-Apps makes the system self-describing",
		desc: "Managing ArgoCD Applications declaratively means the GitOps system itself is defined in Git — bootstrappable from scratch and auditable like everything else."
	}
];

const FAQS = [
	{
		q: "What is GitOps?",
		a: "GitOps uses Git as the single source of truth for infrastructure and application state, with an operator continuously reconciling the live environment to the Git-defined desired state."
	},
	{
		q: "What is the difference between push-based and pull-based deployment?",
		a: "Push-based has the pipeline actively deploy; pull-based has an operator inside the cluster watch a Git repo and apply updates automatically, keeping credentials inside the cluster."
	}
];

export default function ArgoCDGitOpsCaseStudy() {
	return (
		<>
			<SEO
				title="ArgoCD GitOps Kubernetes Deployment Case Study | OpenGridLabs"
				description="How OpenGridLabs implemented ArgoCD GitOps, reducing change failure rate by 83% and achieving automated drift reconciliation."
				canonical="/services/cloud-platform/argocd-gitops"
				keywords="ArgoCD, GitOps, Kubernetes, Declarative Deployment, Drift Detection, App-of-Apps, Helm, Kustomize, CI/CD, DevOps, OpenGridLabs"
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
					title="How ArgoCD GitOps Made Production Deployments Auditable, Self-Healing, and One Git Revert Away from Rollback"
					description="A company running eight microservices on Kubernetes had no reliable answer to 'what is actually running in production?'. Helm deployments were triggered imperatively from pipelines, configuration drifted silently, and rollbacks required manual kubectl intervention. OpenGridLabs implemented ArgoCD GitOps, making Git the single source of truth and every cluster state automatically reconciled — and reversible."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / Platform (anonymised)" },
						{ label: "Scale", value: "8 microservices, 3 environments" },
						{ label: "Timeline", value: "9 weeks" },
						{ label: "Stack", value: "ArgoCD · Helm · Kustomize · Kubernetes" }
					]}
				/>

				<CaseStudyCarousel
					slug="argocd-gitops"
					title="ArgoCD GitOps"
					accentColor="emerald"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/argocd-gitops/1.jpg",
						"/images/case-studies/argocd-gitops/2.jpg"
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
						"Our client runs eight microservices on Kubernetes across three environments. Deployments were triggered imperatively — kubectl apply or helm upgrade commands run as pipeline steps. This worked, but left a gap: the pipeline could say it deployed successfully while the live cluster silently drifted from what was deployed if anyone ran a kubectl edit or a manual hotfix.",
						"The missing piece was a system that continuously compared the live cluster state against an authoritative desired state and corrected any divergence automatically. ArgoCD GitOps provided exactly that. With all application manifests in Git, ArgoCD watches the cluster, detects any deviation, and reconciles it — making Git the single source of truth and every deployment traceable to a commit.",
						"ArgoCD is a Kubernetes-native GitOps operator. It watches a Git repository containing the desired state of Kubernetes applications and continuously compares it against what is running. When it detects a difference — a new commit, a manual change, or drift — it reconciles the cluster back to the Git-defined state. Deployments become a git push; rollbacks a git revert."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is ArgoCD GitOps?"
					definitionText="ArgoCD is a Kubernetes-native GitOps operator. It watches a Git repository containing the desired state of Kubernetes applications and continuously compares it against what is running. When it detects a difference — a new commit, a manual change, or drift — it reconciles the cluster back to the Git-defined state. Deployments become a git push; rollbacks a git revert."
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
					description={"How OpenGridLabs aligned Git repositories, ArgoCD synchronizations, and self-healing cluster states."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Layers, Workflow, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"The ArgoCD GitOps architecture tracks application repositories using custom overlays and declarative App-of-Apps structures to reconcile clusters natively."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Why this architecture"}
					alertText={"Each stage is independently observable and deployable. Failures surface at the earliest possible point, keeping feedback loops tight and mean time to detection measured in minutes rather than hours."}
					rightColumnTitle={"ArgoCD GitOps Architecture Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"An iterative roadmap migrating Helm configurations and Kubernetes workloads to a secure GitOps pipeline over nine weeks."}
					phaseColors={["hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)"]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults
					description="Deploying ArgoCD dramatically reduced change failure rates and simplified rollbacks down to Git operations."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"Before ArgoCD, 'what is running in production?' was a question that required checking four places. Now it's 'look at the main branch of the GitOps repo'. And if it drifts, ArgoCD fixes it before anyone notices."}
					author={"Staff Platform Engineer"}
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
					title={"Do you know exactly what is running in production right now?"}
					description={"OpenGridLabs implements ArgoCD GitOps — declarative delivery, automatic drift reconciliation, and git-revert rollback — so your production state is always known and always correct."}
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
