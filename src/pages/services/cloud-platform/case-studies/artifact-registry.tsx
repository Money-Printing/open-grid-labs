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

const STATS = [
	{ value: "81%", label: "Reduction in CVEs in production images", accent: "from-emerald-500 to-teal-600" },
	{ value: "100%", label: "Images signed and SBOM-attested", accent: "from-purple-500 to-indigo-600" },
	{ value: "0", label: "Mutable ':latest' tags in production", accent: "from-blue-500 to-cyan-600" },
	{ value: "6 wk", label: "Docker Hub → secure private registry", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "All images pushed to Docker Hub with mutable ':latest' tags — not reproducible, not auditable" },
	{ text: "Docker Hub rate limits causing intermittent CI build failures" },
	{ text: "No vulnerability scanning — unknown CVEs in every production image" },
	{ text: "No image signing — no way to verify an image was produced by a trusted CI pipeline" },
	{ text: "No retention policy — registry growing unbounded, old images never cleaned up" }
];

const SOLUTIONS = [
	{ text: "Migration to AWS ECR private registry with immutable tag policy preventing overwrite" },
	{ text: "SHA-digest-based tags pinned in all Kubernetes manifests" },
	{ text: "Trivy vulnerability scanning on every image push, blocking deploys with critical CVEs" },
	{ text: "Cosign keyless image signing with OIDC, producing a cryptographic signature for every CI-built image" },
	{ text: "SBOM generation (Syft) attached as attestation to every image" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Build", items: ["Multi-stage Docker build", "Deterministic build args", "No secrets in layers", "BuildKit cache"], color: "hsl(145,100%,45%)" },
	{ title: "Push", items: ["ECR push", "Immutable tag policy", "SHA digest as canonical reference", "No rate limits"], color: "hsl(200,100%,50%)" },
	{ title: "Scan & Sign", items: ["Trivy CVE scan", "Critical CVE = block deploy", "Cosign keyless sign", "SBOM (Syft) attestation"], color: "hsl(280,100%,60%)" },
	{ title: "Consume", items: ["Kubernetes manifests pinned to SHA", "Pull-through cache", "Retention policy", "Audit log"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "ECR Migration & Immutable Tags (Weeks 1–2)",
		desc: "OpenGridLabs migrated all 50 images from Docker Hub to AWS ECR, enabled immutable tag policy, and updated all Kubernetes manifests to SHA-digest-pinned image references.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "Vulnerability Scanning & CVE Remediation (Weeks 3–4)",
		desc: "Trivy scanning was added to CI with a blocking gate on critical CVEs. The first scan surfaced 23 critical CVEs across base images — all remediated within two weeks.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Signing, SBOM & Retention (Weeks 5–6)",
		desc: "Cosign keyless image signing was implemented using OIDC from GitHub Actions. SBOM generation via Syft was added with attestations pushed to ECR. Lifecycle policies retain the last 10 versions per tag.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Critical CVEs in production", before: "23", after: "0", change: "0" },
	{ metric: "Images using mutable ':latest'", before: "100%", after: "0%", change: "0%" },
	{ metric: "Image signing coverage", before: "0%", after: "100%", change: "100%" },
	{ metric: "Docker Hub rate-limit failures", before: "Occasional", after: "Eliminated", change: "Eliminated" },
	{ metric: "Rollback reliability", before: "Requires pipeline re-run", after: "Pull immutable SHA", change: "Pull immutable SHA" },
	{ metric: "SBOM coverage", before: "0%", after: "100%", change: "100%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Immutable tags make deployments reproducible by construction",
		desc: "A ':latest' tag is not a version. Immutable SHA-pinned tags ensure staging and production use byte-for-byte identical images."
	},
	{
		title: "Scanning on push, not on schedule",
		desc: "Weekly scans mean new CVEs are discovered a week after introduction. Scanning on push detects and blocks them the next build."
	},
	{
		title: "Signing closes the pipeline-to-cluster trust gap",
		desc: "Without image signing, a cluster cannot verify an image was built by a trusted CI pipeline. Cosign keyless signing provides that assurance without key management overhead."
	}
];

const FAQS = [
	{
		q: "What is an immutable image tag?",
		a: "An immutable tag prevents a pushed image from being overwritten, ensuring the same tag always resolves to the same bytes and making deployments reproducible."
	},
	{
		q: "What is an SBOM?",
		a: "A Software Bill of Materials lists all packages and dependencies in a software artefact, enabling rapid CVE impact assessment and supply chain transparency."
	}
];

export default function ArtifactRegistryCaseStudy() {
	return (
		<>
			<SEO
				title="Artifact Registry & Supply Chain Security Case Study | OpenGridLabs"
				description="How OpenGridLabs implemented a secure, private ECR registry with Trivy CVE scanning, Cosign image signatures, and SBOM generation."
				canonical="/services/cloud-platform/artifact-registry"
				keywords="Artifact Registry, Container Registry, ECR, Immutable Tags, Vulnerability Scanning, Trivy, Cosign, SBOM, Supply Chain Security, SLSA, DevOps, CI/CD, OpenGridLabs"
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
					title="How a Private Artifact Registry Secured the Software Supply Chain and Eliminated Mutable Build Artefacts"
					description="A company was pushing all container images to Docker Hub using mutable ':latest' tags with no scanning, no signing, and no retention policy. The same tag could resolve to a different image every deploy. OpenGridLabs implemented a private registry with immutable SHA-pinned tags, automated vulnerability scanning, SBOM generation, and image signing — turning a supply chain liability into an auditable, secure build provenance system."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / SaaS (anonymised)" },
						{ label: "Scale", value: "50 images, 8 services" },
						{ label: "Timeline", value: "6 weeks" },
						{ label: "Stack", value: "ECR · Cosign · Trivy · SBOM · Retention Policies" }
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
						"Our client was using Docker Hub as its image registry with a straightforward but insecure convention: every service pushed to myorg/service:latest on every main-branch build. A deploy was pulling whatever image happened to have been built most recently — not a specific, verifiable version. A rollback meant re-running a pipeline to produce the 'previous' image rather than pulling an immutable artefact.",
						"The supply chain risk was significant even before external threats. Internally, a broken build could push a bad :latest image pulled by the next deploy. Docker Hub rate limits caused intermittent CI failures. And the absence of vulnerability scanning meant the team had no idea what CVEs were running in production.",
						"An artifact registry stores and serves the outputs of a build pipeline — container images, Helm charts, npm packages. A private registry gives control over access, retention, scanning, and immutability. Immutable tags mean a pushed image cannot be overwritten — the same tag always resolves to the same content — making deployments reproducible and rollbacks reliable."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is an Artifact Registry?"
					definitionText="An artifact registry stores and serves the outputs of a build pipeline — container images, Helm charts, npm packages. A private registry gives control over access, retention, scanning, and immutability. Immutable tags mean a pushed image cannot be overwritten — the same tag always resolves to the same content — making deployments reproducible and rollbacks reliable."
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
					description={"How OpenGridLabs implemented automated scanning, cryptographic image signing, and immutable tags."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Workflow, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"The private artifact registry architecture ensures secure build verification, from multi-stage compilation to secure SHA-pinned deployments and image signing validation."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Why this architecture"}
					alertText={"Each stage is independently observable and deployable. Failures surface at the earliest possible point, keeping feedback loops tight and mean time to detection measured in minutes rather than hours."}
					rightColumnTitle={"Artifact Registry Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"A secure migration strategy executed across three key phases, from initial repository migration to active vulnerability blocking and OIDC cryptosignatures."}
					phaseColors={[ "hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)" ]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Deploying the private registry secured production workloads against CVE exposures, standardized builds, and enabled cryptographically verifiable deployments."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"We discovered we had 23 critical CVEs running in production on day one of scanning. That alone justified the project. Now every image that ships has been scanned, signed, and has a full SBOM. We can answer 'what is in that image?' in seconds."}
					author={"Head of Security Engineering"}
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
					title={"Running unknown images from a mutable ':latest' tag?"}
					description={"OpenGridLabs implements private artifact registries — immutable tags, vulnerability scanning, image signing, and SBOM attestation — so every production image is traceable, verified, and CVE-gated."}
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
