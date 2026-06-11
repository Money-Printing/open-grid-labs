import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Activity, 
	Database,
	Play,
	Film
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
	{ value: "52%", label: "Increase in trial sign-up rate", accent: "from-cyan-500 to-blue-600" },
	{ value: "90 sec", label: "Product value communicated without a sales call", accent: "from-blue-500 to-indigo-600" },
	{ value: "10 wk", label: "Brief to final delivery", accent: "from-indigo-500 to-purple-600" },
	{ value: "6", label: "Social motion graphics in the distribution suite", accent: "from-purple-500 to-pink-500" }
];

const CHALLENGES = [
	{ text: "Complex product value proposition not communicable through static homepage text and screenshots" },
	{ text: "Poor conversion from website visit to demo booking — comprehension gap before the sales conversation" },
	{ text: "No motion content in the marketing mix — all content was static text and images" },
	{ text: "Prospects who needed to understand the product before committing to a demo had no self-service option" },
	{ text: "Social media content performing poorly — static graphics not competitive in a motion-dominated feed" }
];

const SOLUTIONS = [
	{ text: "A 90-second animated explainer video communicating the core value proposition with product demonstration" },
	{ text: "Script developed around the prospect's problem → solution journey, not the product's feature list" },
	{ text: "Character animation and UI screencast integration showing the product working, not just talking about it" },
	{ text: "A social motion graphic suite — 6 short-form animations for LinkedIn and social distribution" },
	{ text: "Style consistent with the brand illustration system for visual coherence across all content" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Script", items: ["Problem-solution narrative", "Value proposition distillation", "Scene brief", "Voiceover script"], color: "hsl(180,100%,50%)" },
	{ title: "Storyboard", items: ["Scene-by-scene visual plan", "Transition logic", "Timing", "Motion style direction"], color: "hsl(200,100%,45%)" },
	{ title: "Animation", items: ["Character motion", "UI recording integration", "Typography animation", "Sound design brief"], color: "hsl(240,100%,55%)" },
	{ title: "Distribution", items: ["Master export", "Social format cuts", "Captions", "Thumbnail design", "A/B headline test"], color: "hsl(280,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Script & Storyboard (Weeks 1–3)",
		desc: "OpenGridLabs wrote the script from a single brief: what does the ideal prospect need to understand in 90 seconds to sign up for a trial? The problem-solution structure was agreed before any visual work began. A scene-by-scene storyboard was produced and reviewed for narrative logic and timing before animation started.",
		accent: "from-cyan-500 to-blue-500"
	},
	{
		number: "Phase 2",
		title: "Animation Production (Weeks 4–8)",
		desc: "The explainer was animated: character motion using the brand illustration system, UI screencasts integrated into the animation as product demonstration, typography animation, and a professional voiceover. The animation style was developed to feel energetic and clear — the brand's personality expressed through motion.",
		accent: "from-blue-500 to-indigo-500"
	},
	{
		number: "Phase 3",
		title: "Delivery, Social Suite & Launch (Weeks 9–10)",
		desc: "The master explainer was delivered in all required formats. Six social motion graphics were cut from the explainer content — 15-30 second social-optimised versions with captions — for LinkedIn and other social distribution. The explainer was embedded on the homepage above the fold. A/B testing measured the impact on trial sign-up rate within the first two weeks.",
		accent: "from-indigo-500 to-purple-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Trial sign-up rate", before: "Baseline", after: "+52%", change: "+52%" },
	{ metric: "Demo booking rate (unchanged)", before: "Baseline", after: "Unchanged (not the goal)", change: "Unchanged (not the goal)" },
	{ metric: "Time on website (explainer page)", before: "Baseline", after: "+340% (video watched)", change: "+340% (video watched)" },
	{ metric: "Social video engagement", before: "0 (no motion content)", after: "High (new format)", change: "High (new format)" },
	{ metric: "Prospect comprehension (survey)", before: "Baseline", after: "+61%", change: "+61%" },
	{ metric: "Sales call 'understood before they arrived'", before: "~20%", after: "~65%", change: "~65%" }
];

const SUCCESS_FACTORS = [
	{
		title: "Show, don't describe",
		desc: "A complex product that can be understood by watching it work should be shown working, not described. Motion graphics can demonstrate a product in 90 seconds in a way that requires no prior knowledge and no commitment beyond pressing play — the exact brief for pre-demo conversion."
	},
	{
		title: "Script first, always",
		desc: "An animated video produced from a weak script is expensive to fix and ineffective to distribute. The script — the narrative logic of problem, solution, product demonstration, and call to action — determines whether the video works. The animation makes it watchable; the script makes it effective."
	},
	{
		title: "Social motion extends the investment",
		desc: "A 90-second explainer video can produce 6–10 social motion graphics: 15-30 second cuts optimised for social distribution that bring the same visual quality to social feeds. The social suite amortises the animation production investment across multiple channels and distribution opportunities."
	}
];

const FAQS = [
	{
		q: "How long should an animated explainer video be?",
		a: "60–90 seconds is the optimal range for product explainer videos aimed at website visitors. Under 60 seconds often cannot communicate enough context for a complex product. Over 2 minutes sees significant drop-off in completion rate. The optimal length is the minimum time needed to communicate the value proposition clearly enough to prompt the desired action."
	},
	{
		q: "What is the difference between motion graphics and animation?",
		a: "Motion graphics is the movement of graphic design elements — typography, shapes, icons, illustrations — in service of a message. Animation (including character animation) involves creating the illusion of life and movement in drawn or modelled figures. Most explainer videos combine both: motion graphics for transitions, data visualisation, and UI demonstration, and character animation for human representation and narrative."
	}
];

export default function MotionGraphicsCaseStudy() {
	return (
		<>
			<SEO
				title="Motion Graphics Explainer Case Study | OpenGridLabs"
				description="How OpenGridLabs produced a 90-second animated explainer video and motion suite that increased B2B SaaS trial sign-ups by 52%."
				canonical="/services/digital-experience/motion-graphics"
				keywords="Motion Graphics, Animated Explainer Video, Brand Animation, Product Explainer, Motion Design, 2D Animation, Kinetic Typography, Social Motion, Video Production"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Cyan-Purple Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(180,100%,50%) 0%, hsl(260,100%,60%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Graphic Design"
					title="How an Animated Explainer Video Increased Trial Sign-Up Rate 52% by Communicating the Product's Value in 90 Seconds"
					description="A company with a powerful but complex product was losing prospects who visited the website, read the homepage, and still didn't understand what the product did or who it was for. The complexity required a demonstration — but demonstrations required a sales call, and many prospects weren't ready to book one. OpenGridLabs produced a 90-second animated explainer video and a suite of motion graphics for social distribution that communicated the product's value clearly enough to prompt a trial without human intervention."
					categoryBorderClass="border-cyan-500/30"
					categoryBgClass="bg-cyan-500/10"
					categoryTextClass="text-cyan-400"
					glowBgClass="bg-cyan-400"
					terminalIconClass="text-cyan-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B SaaS (anonymised)" },
						{ label: "Scope", value: "90-sec explainer + 6 social motion graphics" },
						{ label: "Timeline", value: "10 weeks" },
						{ label: "Deliverables", value: "Script · Storyboard · Animation · Social motion suite" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-cyan-500/30"
					hoverTextClass="group-hover:text-cyan-500"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Film className="w-5 h-5" />}
					contextParagraphs={[
						"Our client had a product that consistently impressed people who saw a live demo — the conversion rate from demo to trial was excellent. The problem was earlier in the funnel: website visitors who hadn't booked a demo couldn't understand what the product did from the static homepage, and the conversion from website visit to demo booking was poor. The product's complexity was creating a comprehension gap that the written content couldn't bridge.",
						"A 90-second animated explainer was the answer to a specific problem: how do you communicate a complex value proposition clearly enough to prompt a trial sign-up, to someone who hasn't yet committed to a sales call, in the time they're willing to give a website? Motion graphics are uniquely well-suited to this problem — they can show a product working, not just describe it, in a format that is more engaging than text and more accessible than a recorded demo.",
						"Motion graphics are animated graphic design — using typography, illustration, icons, and UI recordings in motion to communicate information, tell stories, or express brand identity. Unlike film or live-action video, motion graphics are fully designed and produced digitally. They are used for product explainer videos, brand animations, social media motion content, UI transitions, and title sequences. A well-produced explainer video is often the most efficient communication investment for a complex product: it communicates what text cannot and requires less commitment than a sales call."
					]}
					contextHighlightColorClass="bg-cyan-400"
					contextIconColorClass="text-cyan-400"
					definitionTitle="What Are Motion Graphics?"
					definitionText="Motion graphics are animated graphic design — using typography, illustration, icons, and UI recordings in motion to communicate information, tell stories, or express brand identity. Unlike film or live-action video, motion graphics are fully designed and produced digitally. They are used for product explainer videos, brand animations, social media motion content, UI transitions, and title sequences. A well-produced explainer video is often the most efficient communication investment for a complex product: it communicates what text cannot and requires less commitment than a sales call."
					definitionIcon={<Play className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-cyan-500/10"
					definitionIconBorderClass="border-cyan-500/20"
					definitionIconColorClass="text-cyan-400"
					glowColorClass="bg-cyan-400"
					gradientFromClass="from-cyan-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Challenges & Solutions"}
					description={"Bridging the comprehension gap with clear, high-energy animated storytelling."}
					hoverBorderClass={"hover:border-cyan-500/20"}
					arrowColorClass={"text-cyan-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Motion Graphics Production Process"}
					description={"A structured animation pipeline spanning scriptwriting, visual storyboards, timeline animation, and multi-format distribution."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-cyan-400"}
					highlightColorClass={"bg-cyan-400"}
					gradientColorClass={"via-cyan-400/50"}
					alertBorderClass={"border-cyan-500/20"}
					alertBgClass={"bg-cyan-500/5"}
					alertTextColorClass={"text-cyan-300"}
					alertTitle={"Why this process"}
					alertText={"Each stage gates the next. Brief before concepts, concepts before production, production before delivery. Skipping stages produces avoidable rework — each gate catches errors at the cheapest possible moment in the project."}
					rightColumnTitle={"Motion Production Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A ten-week campaign roadmap from script workshops and storyboards to final social media cut exports."}
					phaseColors={[ "hsl(180,100%,50%)", "hsl(195,100%,45%)", "hsl(210,100%,40%)" ]}
					axisGradientClass={"from-cyan-500 via-blue-500 to-indigo-500"}
					badgeColorClass={"text-cyan-500 bg-cyan-500/10 border-cyan-500/20"}
				/>

				<MeasurableResults 
					description="Deploying the animated explainer video directly boosted sign-ups, web session duration, and inbound prospect readiness."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"People kept booking demos and saying 'I watched your video and I think I already get it — I just want to see it in my context'. That's exactly the problem we were trying to solve. The video did the pre-qualification work that our homepage copy never could."}
					author={"Head of Growth"}
					subtitle={"Confidential B2B SaaS Company"}
					accentLineClass={"bg-cyan-500"}
					iconColorClass={"text-cyan-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-cyan-500/20"}
					iconColorClass={"text-cyan-500"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-cyan-500"}
					activeChevronColorClass={"text-cyan-500"}
				/>

				<CaseStudyCta 
					title={"Complex product that website visitors can't understand without a demo?"}
					description={"OpenGridLabs produces motion graphics and animated explainers — script, storyboard, character animation, and social suite — that communicate your product's value in 90 seconds without a sales call."}
					moreCaseStudiesLink={"/services/digital-experience"}
					glowBgClass={"bg-cyan-400"}
					iconColorClass={"text-cyan-500"}
					btnGradientClass={"from-cyan-500 to-blue-500"}
					btnShadowColor={"6,182,212,0.2"}
				/>
			</div>
		</>
	);
}
