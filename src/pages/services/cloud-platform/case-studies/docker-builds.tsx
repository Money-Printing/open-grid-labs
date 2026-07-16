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
	{ value: "70%", label: "Reduction in container image size", accent: "from-emerald-500 to-teal-600" },
	{ value: "54%", label: "Faster Docker build time", accent: "from-purple-500 to-indigo-600" },
	{ value: "0", label: "'Works on my machine' incidents post-rollout", accent: "from-blue-500 to-cyan-600" },
	{ value: "6 wk", label: "Bloated images → production-optimal", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Images between 1.4 and 2.3 GB containing build tools running in production" },
	{ text: "18-minute build times with no layer caching, rebuilding all dependencies on every commit" },
	{ text: "Credentials accidentally included in image layers, discoverable in image history" },
	{ text: "Different base image tags used by developers locally vs. production, causing inconsistency" },
	{ text: "No vulnerability scanning — the large attack surface made findings unmanageable" }
];

const SOLUTIONS = [
	{ text: "Multi-stage Dockerfiles separating build environment from runtime image" },
	{ text: "BuildKit layer caching pinning dependency layers to only rebuild when lock files change" },
	{ text: "Automated vulnerability scanning and SBOM generation on every image push" },
	{ text: "Pinned, immutable image tags for base images across all environments — no ':latest'" },
	{ text: "Distroless and Alpine base images for runtime stages reducing attack surface and size" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Dockerfile", items: ["Builder stage (full toolchain)", "Dependency cache layer", "Build/compile", "Runtime stage (distroless)"], color: "hsl(145,100%,45%)" },
	{ title: "BuildKit", items: ["Layer cache mount", "--mount=type=cache for package managers", "Parallel stage execution"], color: "hsl(200,100%,50%)" },
	{ title: "Registry", items: ["Immutable tags (SHA digest)", "Vulnerability scan on push", "SBOM attestation"], color: "hsl(280,100%,60%)" },
	{ title: "Deploy", items: ["Minimal image pull", "Faster node startup", "Reduced attack surface", "Consistent envs"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Audit & Multi-Stage Rewrites (Weeks 1–3)",
		desc: "OpenGridLabs audited all twelve Dockerfiles, identified top contributors to image size, and rewrote each using multi-stage builds. Distroless base images were introduced for runtime stages. All base images were pinned to immutable SHA digests.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "BuildKit Caching & CI (Weeks 4–5)",
		desc: "BuildKit cache mounts were added to dependency installation steps. The CI pipeline was updated to export and import the BuildKit cache, reducing cache miss rate to under 10%.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Scanning & Enablement (Week 6)",
		desc: "Trivy vulnerability scanning was added to CI, blocking on critical CVEs. SBOM generation was added to every push. OpenGridLabs ran a Dockerfile best-practices workshop.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Average image size", before: "1.8 GB", after: "540 MB", change: "-70%" },
	{ metric: "Build time (cold)", before: "18 min", after: "8 min", change: "-54%" },
	{ metric: "Build time (cached)", before: "18 min", after: "~90 sec", change: "~90 sec" },
	{ metric: "Env inconsistency incidents", before: "Weekly", after: "Zero", change: "Zero" },
	{ metric: "Critical CVEs in base images", before: "Unscanned", after: "Zero (scanned + gated)", change: "Zero (scanned + gated)" },
	{ metric: "Credentials in image layers", before: "Occasional", after: "Eliminated", change: "Eliminated" }
];

const SUCCESS_FACTORS = [
	{
		title: "The build environment and the runtime are different problems",
		desc: "Build tools compile code. They have no place in a running container. Multi-stage builds make this separation structurally enforced rather than a matter of discipline."
	},
	{
		title: "Pinned tags are an environmental invariant",
		desc: "FROM python:3.11@sha256:abc... is the same image everywhere, forever. Pinning eliminates a whole class of 'it worked yesterday' failures."
	},
	{
		title: "Layer cache design is build performance",
		desc: "Ordering layers from least-to-most-frequently-changing and using BuildKit cache mounts means dependency layers almost never rebuild."
	}
];

const FAQS = [
	{
		q: "What is a multi-stage Docker build?",
		a: "A multi-stage Dockerfile uses separate stages to compile the application and produce a minimal runtime image, excluding build tools from production."
	},
	{
		q: "What is a distroless base image?",
		a: "A distroless image contains only the application runtime with no shell or system utilities, reducing size and attack surface dramatically."
	}
];

export default function DockerBuildsCaseStudy() {
	return (
		<>
			<SEO
				title="Docker Builds & Image Optimization Case Study | OpenGridLabs"
				description="How OpenGridLabs implemented multi-stage Docker builds, distroless runtime images, and BuildKit caching, cutting image sizes by 70%."
				canonical="/services/cloud-platform/docker-builds"
				keywords="Docker, Docker Builds, Multi-Stage Build, Dockerfile, Docker Optimisation, Distroless, BuildKit, Layer Caching, Container Security, DevOps, OpenGridLabs"
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
					title="How Multi-Stage Docker Builds Reduced Image Size 70% and Fixed Environment Inconsistency for Good"
					description="A company's Docker images had grown to over 2 GB, took 18 minutes to build, and contained build tools and test dependencies with no business being in production containers. OpenGridLabs rewrote every Dockerfile using multi-stage builds and minimal base images, cutting size 70% and build time 54% while eliminating the environment inconsistency causing weekly incidents."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / SaaS (anonymised)" },
						{ label: "Scale", value: "12 services, 6 engineers" },
						{ label: "Timeline", value: "6 weeks" },
						{ label: "Stack", value: "Docker · Multi-stage · BuildKit · Distroless · Registry" }
					]}
				/>

				<CaseStudyCarousel
									slug="docker-builds"
									title="Docker Builds"
									accentColor="emerald"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/docker-builds/1.jpg",
										"/images/case-studies/docker-builds/2.jpg"
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
						"Our client's twelve microservices each had a Dockerfile written by a different engineer at a different time. The common pattern was a full language base image followed by installing every dependency including dev tools, running tests, and ending with a CMD instruction. The result was images between 1.4 GB and 2.3 GB containing test frameworks, build toolchains, and occasionally a copied .env file committed by accident.",
						"The operational consequences were significant. Deploys were slow because every node pulled a 2 GB image. The attack surface was enormous because containers included hundreds of packages the running application never used. And despite running in Docker, environment inconsistency between development laptops and production was a weekly source of incidents.",
						"A multi-stage Dockerfile uses multiple FROM instructions to define separate stages. A builder stage installs all build tools and compiles the application. A final stage starts from a minimal base image — distroless or Alpine — and copies only the compiled output. The result is a production image containing only what the application needs to run, with none of the build tooling."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is a Multi-Stage Docker Build?"
					definitionText="A multi-stage Dockerfile uses multiple FROM instructions to define separate stages. A builder stage installs all build tools and compiles the application. A final stage starts from a minimal base image — distroless or Alpine — and copies only the compiled output. The result is a production image containing only what the application needs to run, with none of the build tooling."
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
					description={"How OpenGridLabs designed multi-stage compilations, dependency caching, and environment lock-ins to optimize container deliveries."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"The optimized Docker build pipeline isolates compilation caches, executes multi-stage container assembly, and performs vulnerability checking inside BuildKit before shipping to node hosts."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Why this architecture"}
					alertText={"Each stage is independently observable and deployable. Failures surface at the earliest possible point, keeping feedback loops tight and mean time to detection measured in minutes rather than hours."}
					rightColumnTitle={"Docker Build Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"A six-week container refactoring timeline executing size audits, BuildKit caching integration, and security scans."}
					phaseColors={[ "hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)" ]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults 
					description="Transitioning to multi-stage compiling shrank runtime containers by 70% and cut pipeline runtimes in half."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Two gigabyte images were just something we'd accepted as normal. Multi-stage builds felt almost too simple — change the Dockerfile structure, and the image shrank to 500 MB with no other change to the application."}
					author={"Senior Engineer"}
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
					title={"Running gigabyte images with 18-minute builds?"}
					description={"OpenGridLabs rewrites Dockerfiles — multi-stage builds, distroless runtime images, BuildKit caching, and vulnerability scanning — for minimal, fast, secure containers."}
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
