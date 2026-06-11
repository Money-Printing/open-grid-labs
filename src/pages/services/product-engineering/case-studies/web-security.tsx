import { Link } from "react-router";

import { 
	ArrowLeft, 
	BrainCircuit, 
	Layers, 
	Workflow, 
	Cpu, 
	Sparkles,
	Database
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
	{ value: "47", label: "Security controls implemented or strengthened", accent: "from-blue-400 to-indigo-500" },
	{ value: "64%", label: "Reduction in high and medium web findings", accent: "from-cyan-400 to-blue-500" },
	{ value: "100%", label: "Protected routes covered by authorization checks", accent: "from-purple-500 to-pink-500" },
	{ value: "8 wk", label: "From security audit to hardened release", accent: "from-emerald-400 to-teal-500" }
];

const CHALLENGES = [
	{ text: "User journeys and technical implementation had drifted as the product grew feature by feature" },
	{ text: "Teams lacked a shared architecture pattern for consistent releases and future improvements" },
	{ text: "Performance, accessibility, SEO, and security concerns were handled late instead of built into delivery" },
	{ text: "Business users needed clearer analytics, content workflows, and operational visibility after launch" },
	{ text: "Engineering velocity slowed because common UI, data, and integration patterns were duplicated" }
];

const SOLUTIONS = [
	{ text: "A production-ready web application blueprint aligned to user journeys, business goals, and engineering constraints" },
	{ text: "Reusable frontend patterns, components, API contracts, QA checks, and release workflows" },
	{ text: "Performance, accessibility, SEO, security, and analytics controls built into the implementation process" },
	{ text: "Integration with content, data, communication, or operational systems needed by the workflow" },
	{ text: "Launch dashboards, documentation, and team enablement so improvements could continue after handoff" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Experience", items: ["User journeys", "Design system", "Content model", "Accessibility", "Analytics events"], color: "hsl(180,100%,50%)" },
	{ title: "Application", items: ["Frontend components", "State management", "Routing", "API clients", "Form workflows"], color: "hsl(210,100%,50%)" },
	{ title: "Platform", items: ["CMS and APIs", "Authentication", "Search", "CDN", "Integrations"], color: "hsl(280,100%,65%)" },
	{ title: "Operate", items: ["Monitoring", "Performance budgets", "SEO checks", "Security alerts", "Release workflow"], color: "hsl(330,100%,60%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Product Audit & Technical Blueprint (Weeks 1-3)",
		desc: "OpenGridLabs audited the current product experience, technical architecture, analytics, content flow, performance profile, and release process. The team defined target user journeys, success metrics, technical constraints, and the implementation roadmap.",
		accent: "from-blue-400 to-indigo-500"
	},
	{
		number: "Phase 2",
		title: "Build, Integrate & Quality Assurance (Weeks 4-8)",
		desc: "The team implemented the core web application improvements with reusable components, API integrations, state and routing patterns, QA coverage, accessibility checks, and performance budgets. Business stakeholders reviewed working increments throughout the build.",
		accent: "from-purple-500 to-pink-500"
	},
	{
		number: "Phase 3",
		title: "Launch, Monitoring & Enablement (Weeks 9-10)",
		desc: "The final phase covered production launch, monitoring, analytics verification, documentation, and team enablement. OpenGridLabs handed over reusable patterns, runbooks, and dashboards so the client could continue shipping confidently.",
		accent: "from-cyan-400 to-blue-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Security controls", before: "Partial", after: "47 controls", change: "Hardened" },
	{ metric: "High and medium findings", before: "Baseline", after: "36% of baseline", change: "-64%" },
	{ metric: "Authorization coverage", before: "Inconsistent", after: "100% protected routes", change: "Covered" },
	{ metric: "Dependency risk checks", before: "Manual", after: "Automated scanning", change: "Improved" },
	{ metric: "Release security review", before: "Late review", after: "CI checks", change: "Repeatable" }
];

const SUCCESS_FACTORS = [
	{
		title: "User journeys drove the build",
		desc: "The team tied technical decisions to real workflows, which kept the implementation focused on measurable product outcomes."
	},
	{
		title: "Reusable patterns reduced future cost",
		desc: "Shared components, API contracts, QA checks, and documentation made new features easier to add without rebuilding foundations."
	},
	{
		title: "Quality was built into delivery",
		desc: "Performance, accessibility, SEO, security, and analytics checks were part of the release workflow rather than last-minute review items."
	},
	{
		title: "Launch included operations",
		desc: "Dashboards, runbooks, and ownership practices helped the application stay healthy after the first release."
	}
];

const FAQS = [
	{
		q: "What is Web Security?",
		a: "Web Security is a web application capability focused on improving a specific part of the digital product experience, engineering foundation, or operational workflow. It can include design, frontend engineering, integrations, performance, security, analytics, and release practices depending on the product need."
	},
	{
		q: "Why do companies invest in Web Security?",
		a: "Companies invest in Web Security to improve user experience, speed up delivery, reduce technical debt, increase conversion, improve maintainability, and make the application easier to operate at scale. The strongest results come when product, design, engineering, and analytics work together."
	}
];

export default function WebSecurityCaseStudy() {
	return (
		<>
			<SEO
				title="Web Security Case Study | OpenGridLabs"
				description="How OpenGridLabs hardened a customer-facing enterprise SaaS application without slowing down product delivery pipelines."
				canonical="/services/product-engineering/web-security"
				keywords="Web Security, Application Security, Frontend Security, Authentication, Authorization, Security Headers, Dependency Scanning, Secure Web App"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Gorgeous Dynamic HSL Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(210,100%,60%) 0%, hsl(260,100%,50%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/product-engineering" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to Product Engineering
					</Link>
				</div>

				<CaseStudyHero 
					categoryTag="Case Study · Web Application"
					title="How Web Security Hardened a Customer-Facing Application Without Slowing Delivery"
					description="A customer-facing platform needed stronger security controls before expanding enterprise usage. OpenGridLabs implemented web security improvements across authentication, authorization, headers, dependency risk, input validation, session handling, and release checks."
					categoryBorderClass="border-blue-500/30"
					categoryBgClass="bg-blue-500/10"
					categoryTextClass="text-blue-400"
					glowBgClass="bg-blue-400"
					terminalIconClass="text-blue-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Enterprise SaaS application (anonymised)" },
						{ label: "Scope", value: "47 security controls implemented" },
						{ label: "Timeline", value: "8 weeks to production" },
						{ label: "Stack", value: "App Security · Auth · Headers · Dependency Scanning" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-blue-500/30"
					hoverTextClass="group-hover:text-blue-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<BrainCircuit className="w-5 h-5" />}
					contextParagraphs={[
						"The client had a growing web product with strong business demand, but the application experience had become harder to maintain and slower to improve. Teams were managing competing needs across usability, speed, content, SEO, integrations, security, and real-time product expectations.",
						"The company needed Web Security that could move beyond isolated fixes and become part of a reliable web application strategy. OpenGridLabs designed the product workflow, frontend architecture, delivery process, quality controls, and operational monitoring needed to make the improvement stick.",
						"Web Security is a web application capability that improves how users experience, access, interact with, or operate a digital product. In production, it requires clear product goals, frontend architecture, quality assurance, analytics, performance controls, and a maintainable delivery workflow."
					]}
					contextHighlightColorClass="bg-blue-400"
					contextIconColorClass="text-blue-400"
					definitionTitle="What Is Web Security?"
					definitionText="Web Security is a web application capability that improves how users experience, access, interact with, or operate a digital product. In production, it requires clear product goals, frontend architecture, quality assurance, analytics, performance controls, and a maintainable delivery workflow."
					definitionIcon={<Sparkles className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-blue-500/10"
					definitionIconBorderClass="border-blue-500/20"
					definitionIconColorClass="text-blue-400"
					glowColorClass="bg-blue-400"
					gradientFromClass="from-blue-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Five Product & Engineering Gaps Resolved"}
					description={"How OpenGridLabs designed security controls and integrated automated testing into the delivery pipeline."}
					hoverBorderClass={"hover:border-blue-500/20"}
					arrowColorClass={"text-blue-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Database, Workflow, Cpu, Layers]}
					tag={"Blueprint"}
					title={"System Architecture"}
					description={"OpenGridLabs designed a web application architecture that connected user experience, frontend delivery, APIs, content, analytics, performance, and operational governance. The result was a reusable pattern that supported both immediate improvements and future product growth."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-blue-400"}
					highlightColorClass={"bg-blue-400"}
					gradientColorClass={"via-blue-400/50"}
					alertBorderClass={"border-blue-500/20"}
					alertBgClass={"bg-blue-500/5"}
					alertTextColorClass={"text-blue-300"}
					alertTitle={"Build the experience and the operating model together"}
					alertText={"The implementation focused on more than screens. Every product improvement was paired with architecture, QA, analytics, and release practices so the application could keep improving after launch."}
					rightColumnTitle={"Web Security Architecture Stages"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Implementation Approach"}
					description={"The engagement ran across three phases, moving from discovery and architecture into implementation, rollout, and measurement."}
					phaseColors={[ "hsl(210,100%,60%)", "hsl(280,100%,65%)", "hsl(330,100%,60%)" ]}
					axisGradientClass={"from-blue-500 via-purple-500 to-pink-500"}
					badgeColorClass={"text-blue-400 bg-blue-400/10 border-blue-400/20"}
				/>

				<MeasurableResults 
					description="Results were measured after launch against the client's pre-engagement baseline. The strongest gains came from pairing user-centered design with production-grade frontend engineering and measurable delivery practices."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The work made web security feel like part of a mature product system instead of another one-off project. We shipped faster, understood user behavior better, and had a cleaner foundation for the next releases."}
					author={"VP of Product"}
					subtitle={"Confidential Web Platform"}
					accentLineClass={"bg-blue-400"}
					iconColorClass={"text-blue-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked: Key Success Factors"}
					hoverBorderClass={"hover:border-blue-500/20"}
					iconColorClass={"text-blue-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-blue-400"}
					activeChevronColorClass={"text-blue-400"}
				/>

				<CaseStudyCta 
					title={"Ready to improve your web application with Web Security?"}
					description={"OpenGridLabs designs and builds web application systems for web security, combining product strategy, UI engineering, integrations, performance, QA, analytics, and launch support."}
					moreCaseStudiesLink={"/services/product-engineering"}
					glowBgClass={"bg-blue-400"}
					iconColorClass={"text-blue-400"}
					btnGradientClass={"from-blue-400 to-indigo-500"}
					btnShadowColor={"59,130,246,0.2"}
				/>
			</div>
		</>
	);
}
