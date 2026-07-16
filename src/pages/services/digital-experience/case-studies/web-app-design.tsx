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
	{ value: "35%", label: "Reduction in task completion time", accent: "from-pink-500 to-rose-600" },
	{ value: "WCAG AA", label: "Full accessibility compliance achieved", accent: "from-purple-500 to-indigo-600" },
	{ value: "300%", label: "More mobile users supported by redesign", accent: "from-blue-500 to-cyan-600" },
	{ value: "18 wk", label: "Full responsive web application redesign", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "40% of sessions on non-desktop devices with an application designed for desktop only" },
	{ text: "Complex forms and data tables breaking on tablet and mobile viewports" },
	{ text: "34% of screens failing WCAG AA accessibility checks — a contractual blocker for enterprise deals" },
	{ text: "Keyboard-first interaction patterns with no accessible touch equivalents" },
	{ text: "No responsive design system — mobile adaptations were ad hoc patches, not systematic design" }
];

const SOLUTIONS = [
	{ text: "A mobile-first responsive design system built for three breakpoints from the start" },
	{ text: "Accessible component library meeting WCAG AA — correct labels, focus states, contrast, and keyboard support" },
	{ text: "Responsive data table pattern with priority columns, horizontal scroll affordance, and card fallback on mobile" },
	{ text: "Multi-step form redesign optimised for both keyboard (desktop) and touch (mobile) interactions" },
	{ text: "WCAG compliance built in at component level — accessibility not audited at the end but designed from the start" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Audit", items: ["WCAG audit", "Mobile usage analysis", "Task timing study", "Responsive failure catalogue"], color: "hsl(330,100%,60%)" },
	{ title: "System", items: ["Responsive token system", "Breakpoint definitions", "Grid at each size", "Accessible component specs"], color: "hsl(280,100%,65%)" },
	{ title: "Design", items: ["Form patterns", "Data table responsive design", "Navigation across sizes", "Complex UI patterns"], color: "hsl(200,100%,50%)" },
	{ title: "Validate", items: ["WCAG re-audit", "Cross-device usability testing", "Task timing re-benchmark", "Enterprise procurement review"], color: "hsl(145,100%,45%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Audit & Responsive System (Weeks 1–6)",
		desc: "OpenGridLabs conducted a full WCAG audit documenting all 34% of failing screens, and a mobile usage study identifying the 20 highest-traffic flows on non-desktop devices. The responsive design system was established: token-based breakpoints, accessible component specifications, and grid definitions at mobile, tablet, and desktop.",
		accent: "from-pink-500 to-rose-500"
	},
	{
		number: "Phase 2",
		title: "Component Library & Screen Redesign (Weeks 7–14)",
		desc: "The accessible component library was built with WCAG AA compliance at component level — correct ARIA attributes, focus states, keyboard navigation, and contrast. All screens were redesigned in responsive three-breakpoint layouts, with particular design focus on the complex patterns: data tables, multi-step forms, and inline editing.",
		accent: "from-purple-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "WCAG Audit, Testing & Handoff (Weeks 15–18)",
		desc: "A post-design WCAG audit confirmed zero critical failures. Cross-device usability testing validated the responsive behaviour with real users on actual devices. Task timing benchmarks were run at all three breakpoints. The enterprise procurement accessibility review was passed in full.",
		accent: "from-blue-500 to-cyan-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "Task completion time", before: "Baseline", after: "-35%", change: "-35%" },
	{ metric: "WCAG AA failures", before: "34% of screens", after: "Zero", change: "Zero" },
	{ metric: "Mobile task completion", before: "~40% (broken layouts)", after: "94%", change: "94%" },
	{ metric: "Enterprise procurement passes", before: "Failed (accessibility)", after: "Passed", change: "Passed" },
	{ metric: "Mobile session length", before: "Baseline", after: "+89%", change: "+89%" },
	{ metric: "Keyboard navigation coverage", before: "Partial", after: "100%", change: "100%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Mobile-first produces a better desktop",
		desc: "Designing mobile first forces hierarchy decisions that make the desktop design cleaner. Desktop-first designs that are then adapted for mobile produce compromises; mobile-first designs that are enhanced for desktop produce systems."
	},
	{
		title: "Accessibility at component level is sustainable",
		desc: "Auditing for accessibility at the end of a design process and retrofitting is expensive and incomplete. Building WCAG compliance into component specifications means every new screen that uses the library is accessible by default."
	},
	{
		title: "The enterprise deal was the business case",
		desc: "Design ROI is often described as intangible. In this case it was concrete: failing an enterprise accessibility procurement requirement was a direct revenue loss. The redesign paid for itself in the first qualified deal it unblocked."
	}
];

const FAQS = [
	{
		q: "What is WCAG accessibility compliance?",
		a: "WCAG (Web Content Accessibility Guidelines) is an international standard for making web content accessible to users with disabilities. WCAG AA is the level required by most enterprise procurement processes and legal requirements. It covers perceivability, operability, understandability, and robustness across four principles."
	},
	{
		q: "What is responsive web app design?",
		a: "Responsive web app design creates applications that adapt their layout, interaction patterns, and component behaviour across device sizes — mobile, tablet, and desktop — from a single codebase. It requires a systematic approach to breakpoints, component adaptations, and interaction patterns rather than ad hoc mobile patches."
	}
];

export default function WebAppDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Web App Design UI/UX Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned a B2B SaaS web application, reducing task time 35%, achieving full WCAG AA compliance, and handling mobile traffic increase."
				canonical="/services/digital-experience/web-app-design"
				keywords="Web App Design, Responsive Design, WCAG Accessibility, Web Application UX, Accessible Design, Mobile-First, Complex UI, Form Design, Data Tables, Figma, UI/UX"
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
					title="How a Responsive Web App Redesign Reduced Task Time 35%, Achieved WCAG AA Compliance, and Handled a 300% Mobile Traffic Increase"
					description="A company's web application had been designed for desktop in 2018 and never fully adapted to the reality that 40% of its users were now accessing it on mobile or tablet. Complex forms were unusable on touch screens, data tables were unnavigable on narrow viewports, and WCAG compliance was failing on 34% of screens. OpenGridLabs redesigned the application as a responsive system — reducing task time 35% and achieving full WCAG AA compliance."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Healthcare / B2B SaaS (anonymised)" },
						{ label: "Scope", value: "Full web application redesign" },
						{ label: "Timeline", value: "18 weeks" },
						{ label: "Tools", value: "Figma · Responsive tokens · WCAG audit · A11y testing" }
					]}
				/>

				<CaseStudyCarousel
					slug="web-app-design"
					title="How Responsive Design Replaced Six Months of Wrong Assumptions with the Right Problem to Solve"
					accentColor="pink"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/web-app-design/1.jpg",
						"/images/case-studies/web-app-design/2.jpg"
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
						"Our client had a mature web application built for desktop power users. By the time OpenGridLabs engaged, analytics showed that 40% of sessions were on non-desktop devices — tablets in clinical settings and phones in the field. The application had been patched for mobile responsively but never designed for it: complex multi-column forms collapsed into unusable single-column layouts, data tables required horizontal scrolling with no mobile affordance, and the keyboard-first interaction model had no touch equivalent.",
						"Simultaneously, the company was preparing for an enterprise procurement process where accessibility compliance was a contractual requirement. A WCAG audit revealed that 34% of screens had critical failures — missing labels, insufficient contrast, keyboard traps, and missing focus states. The desktop-focused design decisions that had produced a powerful product for keyboard users were failing both touch users and users with disabilities. Both problems shared a root cause: the product had been designed for one context and patched for others rather than designed as a system.",
						"Web application design is the practice of designing complex, functional applications delivered through a web browser — encompassing responsive behaviour across device sizes, accessibility compliance, data-heavy interfaces like tables and dashboards, and complex interaction patterns like multi-step forms, inline editing, and real-time updates. Unlike marketing websites, web apps must perform complex tasks across a wide range of contexts, devices, and user abilities."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is Web App Design?"
					definitionText="Web application design is the practice of designing complex, functional applications delivered through a web browser — encompassing responsive behaviour across device sizes, accessibility compliance, data-heavy interfaces like tables and dashboards, and complex interaction patterns like multi-step forms, inline editing, and real-time updates. Unlike marketing websites, web apps must perform complex tasks across a wide range of contexts, devices, and user abilities."
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
					description={"Rebuilding visual app architectures systematically to align screen scaling with accessibility frameworks."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Web App Design Process"}
					description={"A multi-size design process addressing WCAG AA rules, responsive breakpoints, and complex viewport formatting."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage builds on validated evidence from the last. Decisions grounded in user data rather than assumptions reduce rework, compress iteration cycles, and produce outcomes the team can defend with confidence."}
					rightColumnTitle={"Web App Pipeline Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"An extensive 18-week diagnostic overhaul updating responsive layouts, focus styling, and accessibility indicators."}
					phaseColors={["hsl(330,100%,60%)", "hsl(280,100%,65%)", "hsl(200,100%,50%)"]}
					axisGradientClass={"from-pink-500 via-purple-500 to-blue-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults
					description="Redesigning desktop application workflows responsively and accessibly resolved enterprise procurement blockages and lifted mobile engagement."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"We were losing enterprise deals because 'accessible product' was in every procurement checklist and we couldn't honestly say yes. The redesign fixed both the mobile problem and the accessibility problem because it turned out they had the same root cause — we hadn't designed for context."}
					author={"CTO"}
					subtitle={"Confidential Healthcare SaaS Company"}
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
					title={"Desktop-first design that's breaking on 40% of your sessions?"}
					description={"OpenGridLabs designs responsive web applications — WCAG AA accessibility, mobile-first systems, and complex UI patterns — that work for every user on every device."}
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
