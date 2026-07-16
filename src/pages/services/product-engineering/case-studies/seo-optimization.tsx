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
import CaseStudyCarousel from "../../../../components/case-study-carousel";
import ChallengesSolutions from "../../../../components/challenges-solutions";
import CaseStudyTimeline from "../../../../components/case-study-timeline";
import CaseStudyArchitecture from "../../../../components/case-study-architecture";
import CaseStudyBackground from "../../../../components/case-study-background";
import CaseStudyQuote from "../../../../components/case-study-quote";
import CaseStudySuccessFactors from "../../../../components/case-study-success-factors";
import CaseStudyFaq from "../../../../components/case-study-faq";
import CaseStudyCta from "../../../../components/case-study-cta";

const STATS = [
	{ value: "620", label: "Pages audited and optimized", accent: "from-blue-400 to-indigo-500" },
	{ value: "38%", label: "Increase in organic landing page sessions", accent: "from-cyan-400 to-blue-500" },
	{ value: "51%", label: "Reduction in indexation and metadata issues", accent: "from-purple-500 to-pink-500" },
	{ value: "9 wk", label: "From SEO audit to production rollout", accent: "from-emerald-400 to-teal-500" }
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
	{ metric: "Pages optimized", before: "Ad hoc fixes", after: "620 pages", change: "Scaled" },
	{ metric: "Organic sessions", before: "Baseline", after: "1.38x baseline", change: "+38%" },
	{ metric: "SEO issues", before: "Baseline", after: "49% of baseline", change: "-51%" },
	{ metric: "Structured data", before: "Limited", after: "Template-level schema", change: "Improved" },
	{ metric: "Content publishing SEO", before: "Manual checks", after: "CMS-guided fields", change: "Repeatable" }
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
		q: "What is SEO Optimization?",
		a: "SEO Optimization is a web application capability focused on improving a specific part of the digital product experience, engineering foundation, or operational workflow. It can include design, frontend engineering, integrations, performance, security, analytics, and release practices depending on the product need."
	},
	{
		q: "Why do companies invest in SEO Optimization?",
		a: "Companies invest in SEO Optimization to improve user experience, speed up delivery, reduce technical debt, increase conversion, improve maintainability, and make the application easier to operate at scale. The strongest results come when product, design, engineering, and analytics work together."
	}
];

export default function SEOOptimizationCaseStudy() {
	return (
		<>
			<SEO
				title="SEO Optimization Case Study | OpenGridLabs"
				description="How OpenGridLabs implemented technical and content SEO fixes to improve search visibility and increase organic sessions by 38%."
				canonical="/services/product-engineering/seo-optimization"
				keywords="SEO Optimization, Technical SEO, Web Performance SEO, Structured Data, Content SEO, Indexation Fixes, Metadata Optimization, Search Visibility"
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
					title="How SEO Optimization Improved Organic Visibility With Technical and Content SEO Fixes"
					description="A content-heavy web application had strong expertise but weak organic visibility due to technical SEO gaps, slow pages, inconsistent metadata, and fragmented content structure. OpenGridLabs implemented SEO optimization across architecture, content models, rendering, and measurement."
					categoryBorderClass="border-blue-500/30"
					categoryBgClass="bg-blue-500/10"
					categoryTextClass="text-blue-400"
					glowBgClass="bg-blue-400"
					terminalIconClass="text-blue-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B marketing and product website (anonymised)" },
						{ label: "Scope", value: "620 pages optimized" },
						{ label: "Timeline", value: "9 weeks to production" },
						{ label: "Stack", value: "Technical SEO · Structured Data · Performance · Content Model" }
					]}
				/>

				<CaseStudyCarousel
					slug="seo-optimization"
					title="SEO Optimization"
					accentColor="blue"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/seo-optimization/1.jpg",
						"/images/case-studies/seo-optimization/2.jpg"
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
						"The company needed SEO Optimization that could move beyond isolated fixes and become part of a reliable web application strategy. OpenGridLabs designed the product workflow, frontend architecture, delivery process, quality controls, and operational monitoring needed to make the improvement stick.",
						"SEO Optimization is a web application capability that improves how users experience, access, interact with, or operate a digital product. In production, it requires clear product goals, frontend architecture, quality assurance, analytics, performance controls, and a maintainable delivery workflow."
					]}
					contextHighlightColorClass="bg-blue-400"
					contextIconColorClass="text-blue-400"
					definitionTitle="What Is SEO Optimization?"
					definitionText="SEO Optimization is a web application capability that improves how users experience, access, interact with, or operate a digital product. In production, it requires clear product goals, frontend architecture, quality assurance, analytics, performance controls, and a maintainable delivery workflow."
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
					description={"How OpenGridLabs addressed technical SEO flaws to expand organic visibility."}
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
					rightColumnTitle={"SEO Optimization Architecture Stages"}
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
					quote={"The work made SEO Optimization feel like part of a mature product system instead of another one-off project. We shipped faster, understood user behavior better, and had a cleaner foundation for the next releases."}
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
					title={"Ready to improve your web application with SEO Optimization?"}
					description={"OpenGridLabs designs and builds web application systems for SEO optimization, combining product strategy, UI engineering, integrations, performance, QA, analytics, and launch support."}
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
