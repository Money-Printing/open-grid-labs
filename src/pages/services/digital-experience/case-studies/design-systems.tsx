import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Activity, 
	Database,
	Zap,
	Paintbrush
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
	{ value: "78%", label: "Reduction in cross-product UI inconsistencies", accent: "from-pink-500 to-rose-600" },
	{ value: "2×", label: "Faster new-feature design with shared components", accent: "from-purple-500 to-indigo-600" },
	{ value: "240+", label: "Components in the shared library", accent: "from-blue-500 to-cyan-600" },
	{ value: "20 wk", label: "From fragmented libraries to production system", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Four separate component libraries with conflicting conventions across eight products" },
	{ text: "Designers spending 30–40% of time rebuilding components rather than solving new problems" },
	{ text: "Users experiencing noticeable inconsistency moving between products in the portfolio" },
	{ text: "No shared colour, spacing, or typography definitions — all values hard-coded per product" },
	{ text: "No governance process — teams kept diverging even when a shared approach existed" }
];

const SOLUTIONS = [
	{ text: "A unified component library of 240+ components covering all eight products' needs" },
	{ text: "A design token layer defining all colour, spacing, typography, and elevation values" },
	{ text: "Published Storybook documentation with usage guidelines and code examples per component" },
	{ text: "A governance process — component proposals, reviews, and versioning — preventing future divergence" },
	{ text: "A migration path allowing each team to adopt the system incrementally without blocking shipping" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Tokens", items: ["Colour (semantic + primitive)", "Spacing scale", "Typography scale", "Elevation", "Motion"], color: "hsl(330,100%,60%)" },
	{ title: "Components", items: ["Atoms (Button, Input)", "Molecules (Form, Card)", "Organisms (Nav, Table)"], color: "hsl(280,100%,65%)" },
	{ title: "Patterns", items: ["Page templates", "Form patterns", "Empty states", "Responsive guidelines"], color: "hsl(200,100%,50%)" },
	{ title: "Governance", items: ["Contribution process", "Component proposal", "Review & Versioning", "Deprecation policy"], color: "hsl(145,100%,45%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Audit, Tokens & Foundation (Weeks 1–6)",
		desc: "OpenGridLabs audited all eight product libraries, inventoried 600+ component variants, and identified the shared patterns. The token layer was designed collaboratively with all four design teams. Typography, colour, and spacing foundations were established and approved before any components were built.",
		accent: "from-pink-500 to-rose-500"
	},
	{
		number: "Phase 2",
		title: "Component Library Build (Weeks 7–15)",
		desc: "240+ components were built in Figma with full variant coverage and linked to the token layer. Each component was designed in collaboration with the team that used it most, ensuring real-world constraints were met. Storybook documentation was written in parallel.",
		accent: "from-purple-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Rollout, Migration & Governance (Weeks 16–20)",
		desc: "Each team began migrating to the shared system with OpenGridLabs support. A governance process was established so new component needs could be proposed, reviewed, and added to the system rather than built locally and re-diverging. The first quarterly system review was run before handoff.",
		accent: "from-blue-500 to-cyan-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "Cross-product UI inconsistencies", before: "High (documented audit)", after: "22% of baseline", change: "-78%" },
	{ metric: "New-feature design time", before: "Baseline", after: "50% of baseline", change: "2× faster" },
	{ metric: "Component reinvention per sprint", before: "30–40% design time", after: "<5%", change: "<5%" },
	{ metric: "Design token coverage", before: "0% (hard-coded)", after: "100%", change: "100%" },
	{ metric: "System adoption across teams", before: "0 / 4 teams", after: "4 / 4 teams", change: "4 / 4 teams" },
	{ metric: "Storybook documentation coverage", before: "—", after: "100% of components", change: "100%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Tokens before components",
		desc: "Building components before establishing the token foundation produces components that can't be consistently updated. Tokens make the system maintainable: changing a colour token updates it everywhere in design and code simultaneously."
	},
	{
		title: "Collaborative build",
		desc: "A design system that four teams didn't participate in building will not be used by four teams. Running the component decisions as collaborative workshops produced a system those teams felt ownership of — and adopted."
	},
	{
		title: "Governance prevents re-divergence",
		desc: "A design system without a contribution process is a snapshot, not a system. The governance process meant new component needs were handled in the system rather than around it, protecting the consistency the build had established."
	}
];

const FAQS = [
	{
		q: "What is a design system?",
		a: "A design system is a shared library of UI components, design tokens, and usage guidelines that serves as the single source of truth for how a product portfolio looks and behaves. It connects design to code, ensures consistency, and reduces time spent rebuilding solved problems."
	},
	{
		q: "What are design tokens in a design system?",
		a: "Design tokens are named variables that store design decisions — colour values, spacing units, font sizes — shared between design tools and code. They make a design system maintainable: changing one token updates it everywhere simultaneously in both Figma and the engineering codebase."
	}
];

export default function DesignSystemsCaseStudy() {
	return (
		<>
			<SEO
				title="Design System UI/UX Case Study | OpenGridLabs"
				description="How OpenGridLabs built a shared design system for 8 products, cutting cross-product UI inconsistencies by 78% and halving design time."
				canonical="/services/digital-experience/design-systems"
				keywords="Design System, Component Library, Design Tokens, Figma, Storybook, Atomic Design, Design Governance, UI Consistency, Shared Library, UI/UX"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Pink/Rose Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(330,100%,50%) 0%, hsl(320,100%,45%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/digital-experience" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to Digital Experience Design
					</Link>
				</div>

				<CaseStudyHero 
					categoryTag="Case Study · UI/UX Design"
					title="How a Shared Design System Reduced UI Inconsistency 78% Across 8 Products and Halved New-Feature Design Time"
					description="A company with eight products built by four different teams had accumulated four years of compounding inconsistency — each team making slightly different decisions about buttons, forms, spacing, and colour. Users moved between products and noticed the seams. Designers reinvented the same components repeatedly. OpenGridLabs built a shared design system — tokens, components, documentation, and governance — that became the single source of truth for all eight products."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Technology / Platform (anonymised)" },
						{ label: "Scale", value: "8 products, 4 design teams, 60+ engineers" },
						{ label: "Timeline", value: "20 weeks to production system" },
						{ label: "Tools", value: "Figma · Storybook · Design Tokens · Documentation site" }
					]}
				/>

				<CaseStudyCarousel
									slug="design-systems"
									title="How a Design System Reduced UI Inconsistency 78% Across 8 Products and Halved New-Feature Design Time"
									accentColor="pink"
									aspectRatioClass="aspect-[3/2]"
									images={[
										"/images/case-studies/design-systems/1.jpg",
										"/images/case-studies/design-systems/2.jpg"
									]}
								/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-pink-500/30"
					hoverTextClass="group-hover:text-pink-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Paintbrush className="w-5 h-5" />}
					contextParagraphs={[
						"Our client's product portfolio had grown through a combination of organic development and acquisition. Eight products, built by four teams over four years, each with their own component library — or none at all. A user moving from the main product to a secondary tool encountered different button styles, different form behaviours, different error messaging conventions, and different colour meanings. Support tickets noted the confusion. Designers were spending 30–40% of their time rebuilding components other teams had already built.",
						"The inefficiency was quantifiable but the cultural challenge was real. Four teams had four ways of doing things, and any design system would need to represent all of them. OpenGridLabs structured the engagement as a collaborative build rather than a centrally imposed standard — each team contributing to decisions about the shared components that would replace their own, producing a system with genuine adoption from day one.",
						"A design system is a shared library of UI components, design tokens, and usage guidelines that serves as the single source of truth for how a product — or portfolio of products — looks and behaves. It connects design tools to code, ensures consistency across teams, and reduces the time designers and engineers spend rebuilding decisions that have already been made. A good design system is a product in itself: documented, versioned, and maintained."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is a Design System?"
					definitionText="A design system is a shared library of UI components, design tokens, and usage guidelines that serves as the single source of truth for how a product — or portfolio of products — looks and behaves. It connects design tools to code, ensures consistency across teams, and reduces the time designers and engineers spend rebuilding decisions that have already been made. A good design system is a product in itself: documented, versioned, and maintained."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-pink-500/10"
					definitionIconBorderClass="border-pink-500/20"
					definitionIconColorClass="text-pink-400"
					glowColorClass="bg-pink-400"
					gradientFromClass="from-pink-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Challenges & Solutions"}
					description={"Five distinct friction points were resolved through unified system architecture."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"System Architecture"}
					description={"The design system structures styling layers into tokens, component libraries, and page patterns, governed by clear versioning templates."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage builds on validated evidence from the last. Decisions grounded in user data rather than assumptions reduce rework, compress iteration cycles, and produce outcomes the team can defend with confidence."}
					rightColumnTitle={"Design System Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A 20-week collaborative migration timeline from fragmented local code bases to unified design truth."}
					phaseColors={[ "hsl(330,100%,60%)", "hsl(280,100%,65%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-pink-500 via-purple-500 to-blue-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults 
					description="Cross-product inconsistencies dropped 78% while feature delivery speeds doubled across the entire portfolio."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"Before the design system, 'button' meant five different things depending on which product you were in. Now it means one thing, documented, with code already written. The design system isn't a constraint — it's the thing that freed us up to do the work that actually needs thinking."}
					author={"Design Director"}
					subtitle={"Confidential Technology Company"}
					accentLineClass={"bg-pink-400"}
					iconColorClass={"text-pink-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-pink-500/20"}
					iconColorClass={"text-pink-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-pink-400"}
					activeChevronColorClass={"text-pink-400"}
				/>

				<CaseStudyCta 
					title={"Four teams building the same button four different ways?"}
					description={"OpenGridLabs builds design systems — tokens, components, documentation, and governance — that become the single source of truth for your product portfolio and halve the time spent on solved problems."}
					moreCaseStudiesLink={"/services/digital-experience"}
					glowBgClass={"bg-pink-400"}
					iconColorClass={"text-pink-400"}
					btnGradientClass={"from-pink-400 to-indigo-500"}
					btnShadowColor={"236,72,153,0.2"}
				/>
			</div>
		</>
	);
}
