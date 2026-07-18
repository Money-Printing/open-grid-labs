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
	{ value: "Zero", label: "Downtime deployments since go-live", accent: "from-emerald-500 to-teal-600" },
	{ value: "3×", label: "Better CPU/memory utilisation", accent: "from-purple-500 to-indigo-600" },
	{ value: "90 sec", label: "Scale-out time under traffic spike", accent: "from-blue-500 to-cyan-600" },
	{ value: "11 wk", label: "VM fleet → production Kubernetes", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Deployments required a maintenance window and brief service unavailability" },
	{ text: "Traffic spike on one service consumed VM resources and degraded all co-located services" },
	{ text: "Scaling required manual VM resizing or manual process count changes" },
	{ text: "No health-check-based routing — unhealthy instances still received requests" },
	{ text: "On-call runbooks reduced to 'SSH to VM and restart the process'" }
];

const SOLUTIONS = [
	{ text: "All six services deployed as Kubernetes Deployments with rolling update strategies" },
	{ text: "HPA scaling pods between 2 and 20 replicas on CPU and custom metrics" },
	{ text: "Resource requests and limits isolating services so one cannot consume another's resources" },
	{ text: "Readiness and liveness probes routing traffic only to healthy pods" },
	{ text: "PodDisruptionBudgets ensuring minimum availability during node maintenance" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Workloads", items: ["Deployment per service", "Rolling update (maxSurge/maxUnavailable)", "Readiness & liveness probes"], color: "hsl(145,100%,45%)" },
	{ title: "Networking", items: ["ClusterIP Service", "Ingress controller", "TLS termination", "DNS-based service discovery"], color: "hsl(200,100%,50%)" },
	{ title: "Scaling", items: ["HPA on CPU + custom metrics", "Resource requests & limits", "Namespace quotas"], color: "hsl(280,100%,60%)" },
	{ title: "Resilience", items: ["PodDisruptionBudget", "Anti-affinity", "Multi-AZ node pools", "Automatic rollback on failure"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Cluster Setup & First Service (Weeks 1–4)",
		desc: "OpenGridLabs provisioned the Kubernetes cluster via Terraform, configured Ingress and TLS, and migrated the highest-traffic service. The first rolling update with zero downtime ran in week four.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "Full Migration & HPA (Weeks 5–9)",
		desc: "All six services were migrated with resource requests, limits, readiness probes, and PodDisruptionBudgets. HPAs were configured per service, tested under load, and tuned.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Operational Hardening & Runbooks (Weeks 10–11)",
		desc: "On-call runbooks were rewritten for Kubernetes. RBAC was locked down. OpenGridLabs ran a Kubernetes operations workshop and handed over monitoring dashboards and alert playbooks.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Deployment downtime", before: "Required window", after: "Zero", change: "Zero" },
	{ metric: "CPU/memory utilisation", before: "~25%", after: "~75%", change: "~75%" },
	{ metric: "Scale-out under spike", before: "Manual 15–30 min", after: "Auto <90 sec", change: "Auto <90 sec" },
	{ metric: "Noisy-neighbour incidents", before: "Regular", after: "Zero (resource limits)", change: "Zero (resource limits)" },
	{ metric: "Mean time to recovery", before: "Manual 10–30 min", after: "Auto-restart <60 sec", change: "Auto-restart <60 sec" },
	{ metric: "On-call incidents/week", before: "Baseline", after: "-67%", change: "-67%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Rolling updates are the default; downtime is opt-in",
		desc: "Kubernetes rolling updates with properly configured readiness probes achieve zero-downtime deployments out of the box."
	},
	{
		title: "Resource limits turn a shared cluster into isolated services",
		desc: "Without limits, one service can consume all available CPU and starve neighbours — exactly the VM fleet's noisy-neighbour problem."
	},
	{
		title: "HPA makes scaling proactive, not reactive",
		desc: "An HPA scales before users feel the degradation, not after an on-call page. Latency between rising traffic and more pods is under 90 seconds."
	}
];

const FAQS = [
	{
		q: "What is a Kubernetes Deployment?",
		a: "A Kubernetes Deployment declares the desired state of a set of pods — image, replica count, and update strategy — and continuously reconciles the actual state towards it."
	},
	{
		q: "What is a HorizontalPodAutoscaler?",
		a: "An HPA automatically adjusts pod replica count based on observed metrics — CPU, memory, or custom — scaling up under load and down when demand falls."
	}
];

export default function KubernetesDeploymentCaseStudy() {
	return (
		<>
			<SEO
				title="Kubernetes Deployment Case Study | OpenGridLabs"
				description="How OpenGridLabs migrated a VM-based fleet to Kubernetes, achieving zero-downtime rolling deployments and a 3× increase in resource utilization."
				canonical="/services/cloud-platform/kubernetes-deployment"
				keywords="Kubernetes, Kubernetes Deployment, Rolling Updates, HPA, Horizontal Pod Autoscaler, PodDisruptionBudget, Readiness Probes, Container Orchestration, K8s, DevOps, OpenGridLabs"
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
					title="How Kubernetes Enabled Zero-Downtime Deployments and 3× Better Resource Utilisation"
					description="A company running six services on three long-lived VMs had reached the limits of the VM approach: deployments required downtime, traffic spikes caused fleet-wide degradation, and scaling required manual intervention. OpenGridLabs migrated every service to Kubernetes — rolling updates, HPA, and resource isolation turning a fragile VM fleet into a resilient, self-scaling platform."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "E-commerce / Platform (anonymised)" },
						{ label: "Scale", value: "6 services, 3 VMs → K8s cluster" },
						{ label: "Timeline", value: "11 weeks" },
						{ label: "Stack", value: "Kubernetes · Helm · HPA · Ingress · PDB" }
					]}
				/>

				<CaseStudyCarousel
									slug="kubernetes-deployment"
									title="Kubernetes Deployment"
									accentColor="emerald"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/kubernetes-deployment/1.jpg",
										"/images/case-studies/kubernetes-deployment/2.jpg"
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
						"Our client ran six services on three dedicated VMs. This worked at low traffic. As the product grew, deploying a new version required taking the service down, a traffic spike on one service degraded all others sharing the same VM, and on-call engineers' first response to most incidents was 'restart the service on VM-2'.",
						"The team had evaluated Kubernetes before and found the complexity daunting. OpenGridLabs made the case that Kubernetes complexity is front-loaded. The migration was structured to deliver a working deployment for the highest-priority service in week three, building team confidence before the broader rollout.",
						"A Kubernetes Deployment is a declarative specification of how many replicas of a container image should run and how to update them via rolling update. Combined with Services, Ingress, HorizontalPodAutoscaler, and PodDisruptionBudgets, Deployments give a complete set of primitives for running workloads at scale with zero-downtime updates and automatic recovery."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is a Kubernetes Deployment?"
					definitionText="A Kubernetes Deployment is a declarative specification of how many replicas of a container image should run and how to update them via rolling update. Combined with Services, Ingress, HorizontalPodAutoscaler, and PodDisruptionBudgets, Deployments give a complete set of primitives for running workloads at scale with zero-downtime updates and automatic recovery."
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
					description={"How OpenGridLabs replaced dedicated VMs with self-healing, auto-scaling Kubernetes Deployments."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"The Kubernetes Deployment Architecture isolates service workloads, terminates TLS at Ingress, dynamically scales using HPAs, and guarantees high availability via PodDisruptionBudgets."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Why this architecture"}
					alertText={"Each stage is independently observable and deployable. Failures surface at the earliest possible point, keeping feedback loops tight and mean time to detection measured in minutes rather than hours."}
					rightColumnTitle={"Kubernetes Deployment Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"An eleven-week systematic migration pipeline covering infrastructure provisioning, workload porting, and operational validation."}
					phaseColors={[ "hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)" ]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Migrating to Kubernetes Deployments cut deployment downtime to zero, tripled resource utilisation, and accelerated recovery times."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The first time we deployed to Kubernetes and watched the rolling update happen — old pods terminating, new pods becoming ready, zero traffic interruption — the team collectively exhaled. We'd been living with maintenance windows for years."}
					author={"CTO"}
					subtitle={"Confidential E-Commerce Company"}
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
					title={"Still deploying to long-lived VMs with maintenance windows?"}
					description={"OpenGridLabs migrates workloads to Kubernetes — rolling updates, HPA, resource isolation, and resilience primitives — so deployments are zero-downtime and scaling is automatic."}
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
