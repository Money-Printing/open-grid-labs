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
	{ value: "89%", label: "Reduction in configuration drift incidents", accent: "from-emerald-500 to-teal-600" },
	{ value: "400", label: "Servers managed by Ansible", accent: "from-purple-500 to-indigo-600" },
	{ value: "<20 min", label: "New node provisioning, from 2–3 hours", accent: "from-blue-500 to-cyan-600" },
	{ value: "10 wk", label: "Ad hoc ops → full automation", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "400 servers with years of accumulated manual changes and configuration drift" },
	{ text: "Incident response slowed by incorrect assumptions about installed packages" },
	{ text: "New node provisioning required 2–3 hours of senior engineer time" },
	{ text: "Compliance audits consistently found undocumented configuration variances" },
	{ text: "No way to verify a security patch had actually applied to the full fleet" }
];

const SOLUTIONS = [
	{ text: "A shared Ansible role library covering base OS, security hardening, and service installation" },
	{ text: "Drift detection by comparing Ansible facts against role defaults and alerting on variances" },
	{ text: "New node provisioning reduced to running a single playbook from AWX" },
	{ text: "AWX scheduling enforcement runs daily — every playbook idempotent, every run logged" },
	{ text: "Dynamic inventory pulling node lists from the CMDB rather than static files" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Inventory", items: ["Dynamic inventory from CMDB", "Host groups by role/environment", "Variable hierarchy"], color: "hsl(145,100%,45%)" },
	{ title: "Playbooks", items: ["Base OS role", "Security hardening", "Service-specific roles", "Patch management"], color: "hsl(200,100%,50%)" },
	{ title: "Execution", items: ["AWX job templates", "Scheduled enforcement", "Ad-hoc runner for urgent changes"], color: "hsl(280,100%,60%)" },
	{ title: "Audit", items: ["AWX job history", "Facts database", "Drift alert → ticketing", "Compliance report export"], color: "hsl(33,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Role Library & Inventory (Weeks 1–4)",
		desc: "OpenGridLabs designed the Ansible role structure, built base OS and security-hardening roles, connected dynamic inventory to the CMDB, and ran the first enforcement against staging.",
		accent: "from-emerald-500 to-teal-600"
	},
	{
		number: "Phase 2",
		title: "Fleet Rollout & AWX (Weeks 5–8)",
		desc: "AWX was deployed and all playbooks converted to AWX job templates. Enforcement runs were scheduled daily across all host groups.",
		accent: "from-blue-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Drift Alerting & Provisioning Workflow (Weeks 9–10)",
		desc: "Drift detection creates tickets for variances above threshold. The new-node provisioning playbook reduced onboarding to under 20 minutes.",
		accent: "from-purple-500 to-pink-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Configuration drift incidents", before: "Baseline", after: "11% of baseline", change: "-89%" },
	{ metric: "New node provisioning", before: "2–3 hrs", after: "<20 min", change: "<20 min" },
	{ metric: "Fleet-wide patch verification", before: "Manual sample", after: "100% automated", change: "100% automated" },
	{ metric: "Compliance audit findings", before: "Regular", after: "Near-zero", change: "Near-zero" },
	{ metric: "Configuration source of truth", before: "Engineers' notes", after: "Ansible roles in Git", change: "Ansible roles in Git" },
	{ metric: "Senior engineer ops involvement", before: "High", after: "Routine tasks eliminated", change: "Routine tasks eliminated" }
];

const SUCCESS_FACTORS = [
	{
		title: "Idempotency is the key property",
		desc: "An idempotent playbook runs daily against a production fleet safely. If nothing has drifted, nothing changes. If something has drifted, it is corrected."
	},
	{
		title: "Dynamic inventory scales without maintenance",
		desc: "Dynamic inventory pulling from the CMDB means automation knows about new nodes automatically."
	},
	{
		title: "AWX makes automation safe for the whole team",
		desc: "Storing credentials in AWX and exposing job templates means junior engineers safely run automation that previously required a senior with root access."
	}
];

const FAQS = [
	{
		q: "What is Ansible?",
		a: "Ansible is an agentless configuration management tool that defines server desired state — packages, files, services — and enforces it via SSH. Idempotent playbooks are safe to run repeatedly."
	},
	{
		q: "What is AWX?",
		a: "AWX is the open-source upstream of Ansible Tower, providing a web UI, credential management, scheduling, and audit logging on top of Ansible."
	}
];

export default function AnsibleAutomationCaseStudy() {
	return (
		<>
			<SEO
				title="Ansible Automation Case Study | OpenGridLabs"
				description="How OpenGridLabs eliminated configuration drift across 400 servers using idempotent Ansible playbooks, a shared role library, and AWX-scheduled enforcement runs."
				canonical="/services/cloud-platform/ansible-automation"
				keywords="Ansible, Ansible Automation, Ansible Playbooks, Ansible Roles, AWX, Ansible Tower, Configuration Management, Infrastructure Automation, Idempotent, DevOps, OpenGridLabs"
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
					title="How Ansible Automation Eliminated Server Configuration Drift Across 400 Nodes"
					description="A company managing 400 servers had accumulated years of manual SSH sessions, one-off fixes, and undocumented configuration changes. OpenGridLabs replaced the ad hoc approach with idempotent Ansible playbooks, a shared role library, and AWX-scheduled enforcement runs — making every server's state defined in code and continuously enforced."
					categoryBorderClass="border-emerald-500/30"
					categoryBgClass="bg-emerald-500/10"
					categoryTextClass="text-emerald-400"
					glowBgClass="bg-emerald-400"
					terminalIconClass="text-emerald-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Infrastructure / Platform (anonymised)" },
						{ label: "Scale", value: "400 servers across 3 data centres" },
						{ label: "Timeline", value: "10 weeks" },
						{ label: "Stack", value: "Ansible · AWX · Dynamic Inventory · Roles" }
					]}
				/>

				<CaseStudyCarousel
					slug="ansible-automation"
					title="Ansible Automation"
					accentColor="emerald"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/ansible-automation/1.jpg",
						"/images/case-studies/ansible-automation/2.jpg"
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
						"Our client runs a hybrid infrastructure across three data centres. Over six years of operations, the server fleet had been maintained by engineers who knew their nodes personally. Every quick fix was a direct SSH session. Every tuning change lived in someone's notes. The result was a fleet of 400 servers that were each subtly different from the configuration baseline.",
						"The operational cost of this drift was real. Incident response was slow because assumptions about what was installed on a node were frequently wrong. New node provisioning required a senior engineer following informal notes. Compliance audits consistently found configuration variances. The team needed a way to define what every node should look like and enforce it continuously.",
						"Ansible is an agentless configuration management and automation tool. Playbooks are YAML files defining the desired state of servers — packages installed, services running, files present. Because Ansible is idempotent, running the same playbook repeatedly produces the same result. AWX provides a web UI, scheduling, credential management, and audit logging on top of Ansible."
					]}
					contextHighlightColorClass="bg-emerald-400"
					contextIconColorClass="text-emerald-400"
					definitionTitle="What Is Ansible Automation?"
					definitionText="Ansible is an agentless configuration management and automation tool. Playbooks are YAML files defining the desired state of servers — packages installed, services running, files present. Because Ansible is idempotent, running the same playbook repeatedly produces the same result. AWX provides a web UI, scheduling, credential management, and audit logging on top of Ansible."
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
					description={"How OpenGridLabs aligned dynamic inventories, idempotency, and automated provisioning to eradicate server configuration drift."}
					hoverBorderClass={"hover:border-emerald-500/20"}
					arrowColorClass={"text-emerald-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Layers, Workflow, Activity]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"Our Ansible Automation Architecture establishes a robust execution pipeline, separating inventory generation from role definitions, and tying execution runtimes to continuous compliance audits and alerting systems."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-emerald-400"}
					highlightColorClass={"bg-emerald-400"}
					gradientColorClass={"via-emerald-400/50"}
					alertBorderClass={"border-emerald-500/20"}
					alertBgClass={"bg-emerald-500/5"}
					alertTextColorClass={"text-emerald-300"}
					alertTitle={"Why this architecture"}
					alertText={"Each stage is independently observable and deployable. Failures surface at the earliest possible point, keeping feedback loops tight and mean time to detection measured in minutes rather than hours."}
					rightColumnTitle={"Ansible Automation Architecture Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"A systematic ten-week journey from manual, ad-hoc server configuration to strict code-defined automation and real-time drift alerting."}
					phaseColors={["hsl(145,100%,45%)", "hsl(200,100%,50%)", "hsl(280,100%,60%)"]}
					axisGradientClass={"from-emerald-500 via-blue-500 to-purple-500"}
					badgeColorClass={"text-emerald-400 bg-emerald-400/10 border-emerald-400/20"}
				/>

				<MeasurableResults
					description="The transition from ad-hoc manual management to declarative automation delivered immediate improvements across provisioning times, drift occurrence, and configuration traceability."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"We used to joke that every server was a unique snowflake. Now they're cattle — defined in code, enforced daily, provisioned from a single playbook. The last compliance audit was the first with no configuration findings."}
					author={"Head of Operations"}
					subtitle={"Confidential Platform Company"}
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
					title={"Still managing servers with SSH sessions?"}
					description={"OpenGridLabs implements Ansible automation — idempotent roles, AWX scheduling, and drift detection — so every server's state is defined in code and continuously enforced."}
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
