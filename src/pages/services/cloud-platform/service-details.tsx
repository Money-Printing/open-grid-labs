import { useParams, Link, Navigate } from "react-router";
import SEO from "../../../components/seo";
import { motion } from "motion/react";
import { 
	ArrowLeft, 
	BrainCircuit, 
	ArrowRight, 
	Sparkles, 
	CheckCircle2, 
	Terminal
} from "lucide-react";
import { slugify } from "../../../utils/slugify";
import AmazonRDSCaseStudy from "./case-studies/amazon-rds";
import AutoScalingCaseStudy from "./case-studies/auto-scaling";
import AnsibleAutomationCaseStudy from "./case-studies/ansible-automation";
import ArgoCDGitOpsCaseStudy from "./case-studies/argocd-gitops";
import ArtifactRegistryCaseStudy from "./case-studies/artifact-registry";
import AutomatedTestingCaseStudy from "./case-studies/automated-testing";
import CodeQualityGatesCaseStudy from "./case-studies/code-quality-gates";
import DockerBuildsCaseStudy from "./case-studies/docker-builds";
import GitHubActionsCaseStudy from "./case-studies/github-actions";
import GitLabCaseStudy from "./case-studies/gitlab-ci-cd";
import JenkinsPipelinesCaseStudy from "./case-studies/jenkins-pipelines";
import KubernetesDeploymentCaseStudy from "./case-studies/kubernetes-deployment";
import ReleaseManagementCaseStudy from "./case-studies/release-management";
import TerraformIaCCaseStudy from "./case-studies/terraform-iac";
import AppServiceCaseStudy from "./case-studies/app-service";
import AzureActiveDirectoryCaseStudy from "./case-studies/azure-active-directory";
import AzureDevOpsCaseStudy from "./case-studies/azure-devops";
import AzureFunctionsCaseStudy from "./case-studies/azure-functions";
import AzureKubernetesAKSCaseStudy from "./case-studies/azure-kubernetes-aks";
import AzureMonitorCaseStudy from "./case-studies/azure-monitor";
import AzureSQLDatabaseCaseStudy from "./case-studies/azure-sql-database";
import AzureStorageCaseStudy from "./case-studies/azure-storage";
import AzureVirtualMachinesCaseStudy from "./case-studies/azure-virtual-machines";
import ContainerAppsCaseStudy from "./case-studies/container-apps";
import CosmosDBCaseStudy from "./case-studies/cosmos-db";
import InfrastructureAsCodeCaseStudy from "./case-studies/infrastructure-as-code";
import AWSIAMCaseStudy from "./case-studies/aws-iam";
import AWSLambdaCaseStudy from "./case-studies/aws-lambda";
import CloudFrontCDNCaseStudy from "./case-studies/cloudfront-cdn";
import CloudWatchCaseStudy from "./case-studies/cloudwatch";
import DatabaseMigrationCaseStudy from "./case-studies/database-migration";
import EC2InstancesCaseStudy from "./case-studies/ec2-instances";
import ElasticKubernetesEKSCaseStudy from "./case-studies/elastic-kubernetes-eks";
import LoadBalancingCaseStudy from "./case-studies/load-balancing";
import S3StorageCaseStudy from "./case-studies/s3-storage";
import VPCNetworkingCaseStudy from "./case-studies/vpc-networking";
import BigQueryCaseStudy from "./case-studies/bigquery";
import CloudArmorCaseStudy from "./case-studies/cloud-armor";
import CloudFunctionsCaseStudy from "./case-studies/cloud-functions";
import CloudRunCaseStudy from "./case-studies/cloud-run";
import CloudSQLCaseStudy from "./case-studies/cloud-sql";
import CloudStorageCaseStudy from "./case-studies/cloud-storage";
import ComputeEngineCaseStudy from "./case-studies/compute-engine";
import DataPipelineCaseStudy from "./case-studies/data-pipeline";
import GoogleKubernetesGKECaseStudy from "./case-studies/google-kubernetes-gke";
import MultiCloudIntegrationCaseStudy from "./case-studies/multi-cloud-integration";
import PubSubMessagingCaseStudy from "./case-studies/pub-sub-messaging";
import VertexAICaseStudy from "./case-studies/vertex-ai";

interface CloudDetail {
	title: string;
	category: "AWS Services" | "GCP Services" | "Azure Services" | "CI/CD & DevOps";
	highlight: string;
	description: string;
	overview: string;
	technologies: string[];
	features: string[];
	useCases: {
		industry: string;
		title: string;
		desc: string;
	}[];
	results: {
		metric: string;
		value: string;
		desc: string;
	}[];
}

const AWS_SERVICES = [
	"EC2 Instances", "S3 Storage", "AWS Lambda", "Amazon RDS",
	"Elastic Kubernetes (EKS)", "CloudFront CDN", "Auto Scaling", "Load Balancing",
	"VPC Networking", "AWS IAM", "CloudWatch", "Database Migration"
];

const GCP_SERVICES = [
	"Compute Engine", "Cloud Run", "BigQuery", "Google Kubernetes (GKE)",
	"Pub/Sub Messaging", "Cloud Storage", "Cloud Functions", "Cloud SQL",
	"Vertex AI", "Cloud Armor", "Data Pipeline", "Multi-cloud Integration"
];

const AZURE_SERVICES = [
	"Azure Virtual Machines", "Azure Kubernetes (AKS)", "Azure Functions", "Cosmos DB",
	"Azure DevOps", "Container Apps", "Azure SQL Database", "App Service",
	"Azure Active Directory", "Infrastructure as Code", "Azure Storage", "Azure Monitor"
];

const CICD_SERVICES = [
	"GitHub Actions", "Jenkins Pipelines", "GitLab CI/CD", "ArgoCD GitOps",
	"Terraform IaC", "Ansible Automation", "Docker Builds", "Kubernetes Deployment",
	"Automated Testing", "Release Management", "Code Quality Gates", "Artifact Registry"
];

const ALL_SERVICES = [...AWS_SERVICES, ...GCP_SERVICES, ...AZURE_SERVICES, ...CICD_SERVICES];

function generateCloudDetail(_slug: string, title: string): CloudDetail {
	let category: "AWS Services" | "GCP Services" | "Azure Services" | "CI/CD & DevOps" = "AWS Services";
	let highlight = "#FF9900"; // AWS Orange

	if (AWS_SERVICES.includes(title)) {
		category = "AWS Services";
		highlight = "#FF9900";
	} else if (GCP_SERVICES.includes(title)) {
		category = "GCP Services";
		highlight = "#4285F4"; // GCP Blue
	} else if (AZURE_SERVICES.includes(title)) {
		category = "Azure Services";
		highlight = "#0089D6"; // Azure Blue
	} else if (CICD_SERVICES.includes(title)) {
		category = "CI/CD & DevOps";
		highlight = "#00D084"; // Green
	}

	const categoryConfig = {
		"AWS Services": {
			tech: ["AWS CLI", "Terraform", "AWS CloudFormation", "IAM", "VPC", "EC2", "S3", "CloudWatch"],
			metrics: [
				{ metric: "Provisioning Speed", value: "< 10 min", desc: "For full infrastructure stacks via infrastructure as code." },
				{ metric: "Service Availability", value: "99.99%", desc: "High availability architecture across multi-AZ configurations." },
				{ metric: "Scaling Response", value: "-60% Wait Time", desc: "Automated scaling policies reacting dynamically to load changes." }
			]
		},
		"GCP Services": {
			tech: ["Google Cloud SDK", "Terraform", "Google Kubernetes Engine (GKE)", "BigQuery", "Cloud Run", "Cloud Logging"],
			metrics: [
				{ metric: "Data Processing Latency", value: "< 1s RT", desc: "Real-time query response times for multi-terabyte analytics." },
				{ metric: "Container Start Time", value: "< 250ms", desc: "Serverless container spin-up speed on Google Cloud Run." },
				{ metric: "Operational Efficiency", value: "+30% Yield", desc: "Increase in resource utilisation through custom GKE autoprovisioning." }
			]
		},
		"Azure Services": {
			tech: ["Azure CLI", "Terraform", "Azure Resource Manager", "Entra ID", "Azure Kubernetes Service (AKS)", "Azure Monitor"],
			metrics: [
				{ metric: "Authentication Uptime", value: "99.999%", desc: "Guaranteed directory services availability via Entra ID sync." },
				{ metric: "Deployment Cadence", value: "10x Faster", desc: "Compared to manual infrastructure modifications." },
				{ metric: "Diagnostic Coverage", value: "100% Monitored", desc: "End-to-end trace, metric, and log capture across services." }
			]
		},
		"CI/CD & DevOps": {
			tech: ["GitHub Actions", "Jenkins", "GitLab CI/CD", "ArgoCD", "Docker", "Kubernetes", "Ansible", "SonarQube"],
			metrics: [
				{ metric: "Pipeline Build Duration", value: "< 8 min", desc: "Optimised caching and parallel execution strategies." },
				{ metric: "Release Failure Rate", value: "< 1.5%", desc: "Sharply reduced deployment regressions using automated testing." },
				{ metric: "Automation Coverage", value: "95% Covered", desc: "Complete automated deployment pipeline coverage for cloud releases." }
			]
		}
	};

	const config = categoryConfig[category];

	return {
		title: title,
		category: category,
		highlight: highlight,
		description: `Enterprise-grade ${title} solutions designed to ensure cloud stability, security, scalability, and automated deployments.`,
		overview: `Our ${title} capability bridges the gap between infrastructure execution and cloud operations. By implementing scalable architectures, infrastructure-as-code automation, strict security guardrails, and real-time monitoring workflows, we build platforms that support high-growth production workloads. We ensure your resources are resilient, optimized, and fully governable.`,
		technologies: config.tech,
		features: [
			`Tailormade ${title} Design: Custom patterns designed specifically around your workload specifications and scalability criteria.`,
			"Automated Provisioning (IaC): Repeatable deployments using industry-standard templates (Terraform/CloudFormation).",
			"observability & Alerting: Real-time dashboards, log aggregation, and automated alarm systems for maximum runtime confidence.",
			"Network & Identity Boundaries: Enterprise-grade access control and isolated networking topologies ensuring complete data isolation."
		],
		useCases: [
			{
				industry: "Fintech & Enterprise SaaS",
				title: `${title} Infrastructure Modernization`,
				desc: `Migrated legacy deployments to automated, secure, and auto-scaling cloud environments using ${title}, establishing repeatable deployment templates and reducing operational downtime to near-zero.`
			},
			{
				industry: "High-Growth Digital Products",
				title: `${title}-Powered Continuous Scaling`,
				desc: `Designed and optimized high-throughput workloads using ${title} to scale compute and database backends during flash traffic surges, cutting infrastructure costs by 25% while maintaining performance.`
			}
		],
		results: config.metrics
	};
}

export default function ServicesCloudPlatformDetail() {
	const { serviceId } = useParams<{ serviceId: string }>();

	if (serviceId === "amazon-rds") {
		return <AmazonRDSCaseStudy />;
	}

	if (serviceId === "ansible-automation") {
		return <AnsibleAutomationCaseStudy />;
	}

	if (serviceId === "argocd-gitops") {
		return <ArgoCDGitOpsCaseStudy />;
	}

	if (serviceId === "artifact-registry") {
		return <ArtifactRegistryCaseStudy />;
	}

	if (serviceId === "docker-builds") {
		return <DockerBuildsCaseStudy />;
	}

	if (serviceId === "github-actions") {
		return <GitHubActionsCaseStudy />;
	}

	if (serviceId === "gitlab-ci-cd") {
		return <GitLabCaseStudy />;
	}

	if (serviceId === "jenkins-pipelines") {
		return <JenkinsPipelinesCaseStudy />;
	}

	if (serviceId === "kubernetes-deployment") {
		return <KubernetesDeploymentCaseStudy />;
	}

	if (serviceId === "release-management") {
		return <ReleaseManagementCaseStudy />;
	}

	if (serviceId === "terraform-iac") {
		return <TerraformIaCCaseStudy />;
	}

	if (serviceId === "app-service") {
		return <AppServiceCaseStudy />;
	}

	if (serviceId === "azure-active-directory") {
		return <AzureActiveDirectoryCaseStudy />;
	}

	if (serviceId === "azure-devops") {
		return <AzureDevOpsCaseStudy />;
	}

	if (serviceId === "azure-functions") {
		return <AzureFunctionsCaseStudy />;
	}

	if (serviceId === "azure-kubernetes-aks") {
		return <AzureKubernetesAKSCaseStudy />;
	}

	if (serviceId === "azure-monitor") {
		return <AzureMonitorCaseStudy />;
	}

	if (serviceId === "azure-sql-database") {
		return <AzureSQLDatabaseCaseStudy />;
	}

	if (serviceId === "azure-storage") {
		return <AzureStorageCaseStudy />;
	}

	if (serviceId === "azure-virtual-machines") {
		return <AzureVirtualMachinesCaseStudy />;
	}

	if (serviceId === "container-apps") {
		return <ContainerAppsCaseStudy />;
	}

	if (serviceId === "cosmos-db") {
		return <CosmosDBCaseStudy />;
	}

	if (serviceId === "infrastructure-as-code") {
		return <InfrastructureAsCodeCaseStudy />;
	}

	if (serviceId === "automated-testing") {
		return <AutomatedTestingCaseStudy />;
	}

	if (serviceId === "code-quality-gates") {
		return <CodeQualityGatesCaseStudy />;
	}

	if (serviceId === "auto-scaling") {
		return <AutoScalingCaseStudy />;
	}

	if (serviceId === "aws-iam") {
		return <AWSIAMCaseStudy />;
	}

	if (serviceId === "aws-lambda") {
		return <AWSLambdaCaseStudy />;
	}

	if (serviceId === "cloudfront-cdn") {
		return <CloudFrontCDNCaseStudy />;
	}

	if (serviceId === "cloudwatch") {
		return <CloudWatchCaseStudy />;
	}

	if (serviceId === "database-migration") {
		return <DatabaseMigrationCaseStudy />;
	}

	if (serviceId === "ec2-instances") {
		return <EC2InstancesCaseStudy />;
	}

	if (serviceId === "elastic-kubernetes-eks") {
		return <ElasticKubernetesEKSCaseStudy />;
	}

	if (serviceId === "load-balancing") {
		return <LoadBalancingCaseStudy />;
	}

	if (serviceId === "s3-storage") {
		return <S3StorageCaseStudy />;
	}

	if (serviceId === "vpc-networking") {
		return <VPCNetworkingCaseStudy />;
	}

	if (serviceId === "bigquery") {
		return <BigQueryCaseStudy />;
	}

	if (serviceId === "cloud-armor") {
		return <CloudArmorCaseStudy />;
	}

	if (serviceId === "cloud-functions") {
		return <CloudFunctionsCaseStudy />;
	}

	if (serviceId === "cloud-run") {
		return <CloudRunCaseStudy />;
	}

	if (serviceId === "cloud-sql") {
		return <CloudSQLCaseStudy />;
	}

	if (serviceId === "cloud-storage") {
		return <CloudStorageCaseStudy />;
	}

	if (serviceId === "compute-engine") {
		return <ComputeEngineCaseStudy />;
	}

	if (serviceId === "data-pipeline") {
		return <DataPipelineCaseStudy />;
	}

	if (serviceId === "google-kubernetes-gke") {
		return <GoogleKubernetesGKECaseStudy />;
	}

	if (serviceId === "multi-cloud-integration") {
		return <MultiCloudIntegrationCaseStudy />;
	}

	if (serviceId === "pub-sub-messaging") {
		return <PubSubMessagingCaseStudy />;
	}

	if (serviceId === "vertex-ai") {
		return <VertexAICaseStudy />;
	}

	const matchedTitle = ALL_SERVICES.find(s => slugify(s) === serviceId);

	if (!serviceId || !matchedTitle) {
		return <Navigate to="/services/cloud-platform" replace />;
	}

	const service = generateCloudDetail(serviceId, matchedTitle);

	return (
		<>
			<SEO
				title={`${service.title} - Cloud & Platform Engineering | OpenGridLabs`}
				description={service.description}
				canonical={`/services/cloud-platform/${serviceId}`}
				keywords={`${service.title}, ${service.category}, cloud engineering, AWS, GCP, Azure, DevOps, Terraform, opengridlabs`}
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[600px] blur-[160px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, ${service.highlight} 0%, transparent 70%)`
					}}
				/>

				{/* Back Button & Breadcrumbs */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/cloud-platform" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to Cloud & Platform Engineering
					</Link>
				</div>

				{/* Main Hero Header */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-center">
						<motion.div 
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							{/* Category Tag */}
							<div className="flex items-center gap-3">
								<span 
									className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border bg-opacity-10 backdrop-blur-md"
									style={{ 
										borderColor: `${service.highlight}30`, 
										backgroundColor: `${service.highlight}10`,
										color: service.highlight 
									}}
								>
									{service.category}
								</span>
							</div>

							{/* Large Service Title */}
							<h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								{service.title}
							</h1>

							{/* Core Tagline */}
							<p className="text-xl md:text-3xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								{service.description}
							</p>
						</motion.div>

						{/* Interactive Technology Card */}
						<motion.div 
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl">
								<div 
									className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full" 
									style={{ backgroundColor: service.highlight }}
								/>
								<div className="flex items-center gap-3 mb-6">
									<Terminal className="w-6 h-6" style={{ color: service.highlight }} />
									<h3 className="text-lg font-bold text-foreground">Technology Stack</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{service.technologies.map((tech, idx) => (
										<span 
											key={idx} 
											className="px-3.5 py-1.5 rounded-xl text-sm font-medium border border-black/5 dark:border-white/5 bg-foreground/[0.02] dark:bg-white/5 text-foreground/80"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* In-depth Overview Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div 
							className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" 
							style={{ backgroundImage: `linear-gradient(to right, transparent, ${service.highlight}40, transparent)` }}
						/>
						<div className="grid lg:grid-cols-12 gap-12">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<BrainCircuit className="w-5 h-5 text-muted-foreground" />
									<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Deep Dive</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
									Service Overview
								</h2>
								<div 
									className="w-16 h-1 rounded-full" 
									style={{ backgroundColor: service.highlight }}
								/>
							</div>
							<div className="lg:col-span-7">
								<p className="text-lg md:text-2xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
									{service.overview}
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Detailed Features & Capabilities */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">System Capabilities</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Core Features
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						{service.features.map((feature, idx) => {
							const [titlePart, descPart] = feature.split(": ");
							return (
								<motion.div 
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: idx * 0.05 }}
									className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-colors shadow-lg group relative overflow-hidden"
								>
									<div className="flex gap-4 items-start">
										<div className="mt-1">
											<CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: service.highlight }} />
										</div>
										<div className="space-y-2">
											<h3 className="text-xl font-bold text-foreground">
												{titlePart}
											</h3>
											{descPart && (
												<p className="text-muted-foreground leading-relaxed">
													{descPart}
												</p>
											)}
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</section>

				{/* Custom Real-world Use Cases */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Engineering in Action</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Real-World Use Cases
						</h2>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						{service.useCases.map((useCase, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, scale: 0.98 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="glass-panel p-10 rounded-[36px] border border-black/5 dark:border-white/5 flex flex-col justify-between h-[360px] relative overflow-hidden group shadow-xl"
							>
								<div 
									className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
									style={{ backgroundColor: service.highlight }}
								/>
								
								<div className="space-y-4">
									<span 
										className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-black/10 dark:border-white/10 bg-foreground/[0.01] text-muted-foreground"
									>
										{useCase.industry}
									</span>
									<h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
										{useCase.title}
									</h3>
								</div>

								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									{useCase.desc}
								</p>
							</motion.div>
						))}
					</div>
				</section>

				{/* Results & Business Impact Section */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Strategic Value</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Target Impact Metrics
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{service.results.map((result, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 text-left relative overflow-hidden shadow-lg"
							>
								<div 
									className="absolute -top-6 -right-6 w-16 h-16 rounded-full opacity-10"
									style={{ backgroundColor: service.highlight }}
								/>
								<div className="space-y-4 relative z-10">
									<span className="text-xs uppercase text-muted-foreground font-bold tracking-wider">
										{result.metric}
									</span>
									<p 
										className="text-4xl md:text-5xl font-black tracking-tight"
										style={{ color: service.highlight }}
									>
										{result.value}
									</p>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{result.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Contact Call to Action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div 
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none"
							style={{ backgroundColor: service.highlight }}
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto" style={{ color: service.highlight }} />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Ready to deploy this capability?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								Partner with our Cloud and DevOps engineering experts to custom design, validate, and integrate {service.title} inside your enterprise software platform.
							</p>
							<div>
								<Link 
									to="/contact-us"
									className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white"
									style={{ 
										background: `linear-gradient(135deg, ${service.highlight} 0%, hsl(260, 100%, 60%) 100%)`,
										boxShadow: `0 10px 30px ${service.highlight}30`
									}}
								>
									Get in Touch <ArrowRight className="w-5 h-5" />
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
