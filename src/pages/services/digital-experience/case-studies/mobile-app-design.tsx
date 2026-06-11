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

const STATS = [
	{ value: "2.9→4.6", label: "App Store rating improvement", accent: "from-pink-500 to-rose-600" },
	{ value: "67%", label: "Growth in monthly active users", accent: "from-purple-500 to-indigo-600" },
	{ value: "41%", label: "Reduction in session abandonment", accent: "from-blue-500 to-cyan-600" },
	{ value: "16 wk", label: "From 2.9 rating to native-first redesign", accent: "from-amber-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "App designed as a desktop port — desktop information architecture and interaction patterns on mobile" },
	{ text: "Critical actions in the top half of the screen, unreachable one-handed" },
	{ text: "No use of native platform patterns — iOS and Android users saw the same non-native design" },
	{ text: "Navigation pattern requiring multiple taps to reach frequently used features" },
	{ text: "Session abandonment at 54% on the core task flow — the app's primary value proposition" }
];

const SOLUTIONS = [
	{ text: "Native-first redesign using iOS HIG and Material Design 3 conventions per platform" },
	{ text: "Thumb-zone analysis repositioning all primary actions to the natural reach arc" },
	{ text: "Tab bar navigation for iOS, navigation drawer for Android — correct patterns per platform" },
	{ text: "Gesture navigation and swipe patterns for content browsing and action shortcuts" },
	{ text: "Performance-perceived design: skeleton screens, optimistic updates, and smooth transitions" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Platform", items: ["iOS HIG / Material 3", "Thumb zone mapping", "Gesture inventory", "Native component audit"], color: "hsl(330,100%,60%)" },
	{ title: "Structure", items: ["Mobile IA redesign", "Tab bar architecture", "Navigation depth", "Content prioritisation"], color: "hsl(280,100%,65%)" },
	{ title: "Interaction", items: ["Touch targets (44pt)", "Swipe patterns", "Haptic feedback", "Optimistic UI", "Loading states"], color: "hsl(200,100%,50%)" },
	{ title: "Test", items: ["Usability sessions", "Beta programme", "App store tracking", "Retention analytics"], color: "hsl(145,100%,45%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Platform Research & Structure (Weeks 1–5)",
		desc: "OpenGridLabs conducted a full platform audit against iOS HIG and Material Design 3, categorising every departure from platform conventions. The information architecture was redesigned for mobile — reduced depth, tab bar primary navigation, and all critical actions repositioned to the thumb zone.",
		accent: "from-pink-500 to-rose-500"
	},
	{
		number: "Phase 2",
		title: "Interaction Design & Visual (Weeks 6–11)",
		desc: "The complete app was redesigned screen by screen with native platform components. Gesture patterns, touch targets (minimum 44×44pt), and haptic feedback were specified. The visual design was updated to feel at home on each platform while maintaining brand identity.",
		accent: "from-purple-500 to-indigo-600"
	},
	{
		number: "Phase 3",
		title: "Beta, Iteration & Launch (Weeks 12–16)",
		desc: "A TestFlight and Android beta programme ran with 200 users over three weeks. Three rounds of feedback informed final iterations. The redesigned app launched with a featured placement in both stores, achieving 4.6 on iOS and 4.5 on Android within four weeks.",
		accent: "from-blue-500 to-cyan-600"
	}
];

const TABLE_RESULTS = [
	{ metric: "App Store rating", before: "2.9", after: "4.6", change: "+1.7" },
	{ metric: "Monthly active users", before: "Baseline", after: "+67%", change: "+67%" },
	{ metric: "Session abandonment (core flow)", before: "54%", after: "13%", change: "-41%" },
	{ metric: "One-handed task completion", before: "Baseline", after: "+58%", change: "+58%" },
	{ metric: "Native pattern compliance", before: "~25%", after: "100%", change: "100%" },
	{ metric: "Review sentiment (positive)", before: "38%", after: "84%", change: "84%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Native patterns are borrowed trust",
		desc: "When an app uses the navigation patterns users already know from every other app on their phone, they bring existing knowledge to it rather than learning new conventions. This is not design conformity — it is leveraging the mental models users have already built."
	},
	{
		title: "Thumb zones are not a suggestion",
		desc: "A button in the top half of a phone screen will be missed, fumbled, or tapped while adjusting grip. Placing primary actions in the natural thumb reach arc is not a mobile nicety — it is the difference between an action being taken and an action being abandoned."
	},
	{
		title: "Beta validation drives launch metrics",
		desc: "The beta programme made the data undeniable. 200 users over three weeks produced qualitative feedback, quantitative task data, and early App Store ratings that confirmed the direction before full launch. The launch confidence it produced was the precondition for the featured placement."
	}
];

const FAQS = [
	{
		q: "What is mobile app design?",
		a: "Mobile app design creates applications specifically for mobile devices, accounting for touch interaction, thumb reach zones, platform conventions, and the contexts of mobile use. Good mobile design uses platform-native patterns so users apply knowledge from every other app they've used."
	},
	{
		q: "What are thumb zones in mobile design?",
		a: "Thumb zones are the areas of a phone screen reachable comfortably by the thumb in a standard one-handed grip. The lower portion of the screen is the natural reach zone; the upper portion requires a grip adjustment or a second hand. Primary actions and navigation should be placed in the natural reach zone."
	}
];

export default function MobileAppDesignCaseStudy() {
	return (
		<>
			<SEO
				title="Mobile App Design UI/UX Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned a mobile app from first principles (native patterns, thumb zone optimization), lifting App Store rating to 4.6 and MAU by 67%."
				canonical="/services/digital-experience/mobile-app-design"
				keywords="Mobile App Design, iOS Design, Android Design, Mobile UX, Thumb Zones, Native Patterns, App Redesign, Material Design, iOS HIG, Mobile First, UI/UX"
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
					title="How a Native-First Mobile Redesign Lifted App Store Rating from 2.9 to 4.6 and Grew Monthly Active Users 67%"
					description="A company's mobile app had a 2.9 App Store rating and reviews that consistently described it as 'clunky', 'hard to navigate', and 'not like other apps'. The app's functionality was solid but it had been designed as a shrunk-down version of the web product rather than as a native mobile experience. OpenGridLabs redesigned it from first principles — native platform patterns, thumb-zone optimisation, and gesture navigation — producing a 4.6 rating and 67% growth in monthly active users."
					categoryBorderClass="border-pink-500/30"
					categoryBgClass="bg-pink-500/10"
					categoryTextClass="text-pink-400"
					glowBgClass="bg-pink-400"
					terminalIconClass="text-pink-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Consumer / Lifestyle (anonymised)" },
						{ label: "Platform", value: "iOS and Android" },
						{ label: "Timeline", value: "16 weeks" },
						{ label: "Tools", value: "Figma · Native design systems · Usability testing · Beta programme" }
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
						"Our client's mobile app had been built by porting the web product to mobile — the same information architecture, the same interaction patterns, the same layout logic, simply presented on a smaller screen. This approach is common and consistently produces the same result: an app that feels foreign to mobile users, because it is. Mobile users have been trained by years of iOS and Android apps to expect specific patterns — and apps that don't deliver them feel wrong in ways users can't always articulate.",
						"The reviews made it explicit: 'not intuitive', 'I have to search for everything', 'my thumb can't reach the important buttons'. The app was asking users to adapt to a desktop interaction model on a device built for thumbs, gestures, and one-handed use. The redesign wasn't about adding features — it was about meeting users where they were: on their phones, with their thumbs, using the patterns they'd already learned.",
						"Mobile app design is the practice of designing applications specifically for mobile devices — accounting for touch interaction, thumb reach zones, screen sizes, platform conventions, and the contexts in which people use their phones. Unlike desktop design, mobile design must work one-handed, in motion, in low-attention contexts, with intermittent connectivity. Good mobile design uses platform-native patterns so users can apply the knowledge they've built from every other app they've ever used."
					]}
					contextHighlightColorClass="bg-pink-400"
					contextIconColorClass="text-pink-400"
					definitionTitle="What Is Mobile App Design?"
					definitionText="Mobile app design is the practice of designing applications specifically for mobile devices — accounting for touch interaction, thumb reach zones, screen sizes, platform conventions, and the contexts in which people use their phones. Unlike desktop design, mobile design must work one-handed, in motion, in low-attention contexts, with intermittent connectivity. Good mobile design uses platform-native patterns so users can apply the knowledge they've built from every other app they've ever used."
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
					description={"Five core design flaws were unblocked to establish a platform-native, high-converting product experience."}
					hoverBorderClass={"hover:border-pink-500/20"}
					arrowColorClass={"text-pink-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"App Architecture"}
					description={"The mobile design framework guides product iterations from platform reviews down to usability verifications and beta telemetry."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-pink-400"}
					highlightColorClass={"bg-pink-400"}
					gradientColorClass={"via-pink-400/50"}
					alertBorderClass={"border-pink-500/20"}
					alertBgClass={"bg-pink-500/5"}
					alertTextColorClass={"text-pink-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage builds on validated evidence from the last. Decisions grounded in user data rather than assumptions reduce rework, compress iteration cycles, and produce outcomes the team can defend with confidence."}
					rightColumnTitle={"Mobile Redesign Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A 16-week timeline moving from HIG/Material audits to structured beta loops and store launches."}
					phaseColors={[ "hsl(330,100%,60%)", "hsl(280,100%,65%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-pink-500 via-purple-500 to-blue-500"}
					badgeColorClass={"text-pink-400 bg-pink-400/10 border-pink-400/20"}
				/>

				<MeasurableResults 
					description="Task completion rates and session abandonment improved substantially, yielding a massive App Store review uplift."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The old app asked users to think like desktop users. The new one thinks like a mobile user. The rating change happened in the first week — users know immediately when an app was designed for them versus designed for a screen they're not holding."}
					author={"Head of Mobile"}
					subtitle={"Confidential Consumer Company"}
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
					title={"App Store rating below 3.0 with reviews calling it clunky?"}
					description={"OpenGridLabs redesigns mobile apps from first principles — native platform patterns, thumb-zone optimisation, and gesture navigation — built for the device users are actually holding."}
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
