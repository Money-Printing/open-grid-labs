import { Link } from "react-router";

import { 
	ArrowLeft, 
	Layers, 
	Cpu, 
	Database,
	Zap,
	Server
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
	{ value: "4.8", label: "App Store rating, from 2.4", accent: "from-emerald-500 to-teal-600" },
	{ value: "89%", label: "Growth in monthly active users", accent: "from-amber-500 to-yellow-600" },
	{ value: "33%", label: "Reduction in call centre volume", accent: "from-blue-500 to-cyan-600" },
	{ value: "15 mo", label: "Discovery to full native launch", accent: "from-purple-500 to-indigo-600" }
];

const CHALLENGES = [
	{ text: "Hybrid web-view app with 4–6 second load times and non-native interactions" },
	{ text: "No biometric authentication — password-only login frustrating high-frequency users" },
	{ text: "No push notifications — customers not alerted to important account events" },
	{ text: "Limited self-service — most customer service requests requiring call or branch visit" },
	{ text: "2.4 App Store rating limiting new user acquisition through organic store discovery" }
];

const SOLUTIONS = [
	{ text: "Full native rebuild — Swift for iOS, Kotlin for Android — with sub-second performance" },
	{ text: "Face ID/Touch ID biometric authentication with secure enclave credential storage" },
	{ text: "Push notification framework for transaction alerts, payment reminders, and service updates" },
	{ text: "Complete self-service capability — 41 customer service request types handled in-app" },
	{ text: "Offline capability for balance and transaction history using local secure data caching" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Device Layer", items: ["Swift (iOS) / Kotlin (Android)", "Native UI components", "Biometric auth (Face ID/Touch ID)", "Secure enclave"], color: "hsl(38,100%,50%)" },
	{ title: "Application", items: ["Self-service request engine", "Push notification handling", "Offline data layer", "Analytics"], color: "hsl(145,100%,45%)" },
	{ title: "API Layer", items: ["Core banking API gateway", "Authentication service", "Document management", "Notification service"], color: "hsl(200,100%,50%)" },
	{ title: "Security", items: ["Certificate pinning", "Jailbreak/root detection", "Session management", "Fraud signals", "Audit logging"], color: "hsl(280,100%,65%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Core Banking Journeys & Authentication (Months 1–5)",
		desc: "The native app foundation was built: authentication (biometric primary, passcode fallback), account overview, transaction history, and payments. Performance was benchmarked — sub-second screen loads were the threshold for launch on each journey. The existing hybrid app was maintained in parallel throughout.",
		accent: "from-amber-500 to-yellow-500"
	},
	{
		number: "Phase 2",
		title: "Self-Service & Push Notifications (Months 6–10)",
		desc: "The self-service request engine was built — 41 request types covering the most common reasons customers called the branch. The push notification framework was implemented with customer-controlled notification preferences. Biometric-authenticated fast pay for frequent payees was built as a differentiating feature.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "Launch, Optimisation & Call Migration (Months 11–15)",
		desc: "The new app was launched on both platforms with a phased rollout beginning with opt-in for existing customers. The App Store rating was monitored daily and in-app feedback captured. Call centre agents were briefed on the new app capabilities to start routing appropriate contacts to the digital channel. The hybrid app was retired in month 15.",
		accent: "from-indigo-500 to-blue-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "App Store rating", before: "2.4", after: "4.8", change: "4.8" },
	{ metric: "Monthly active users", before: "Baseline", after: "+89%", change: "+89%" },
	{ metric: "Call centre volume", before: "Baseline", after: "-33%", change: "-33%" },
	{ metric: "App load time (screen-to-screen)", before: "4–6 seconds", after: "<0.8 seconds", change: "<0.8 seconds" },
	{ metric: "Biometric authentication adoption", before: "0% (not available)", after: "84% of active users", change: "84% of active users" },
	{ metric: "Customer app NPS", before: "Below zero", after: "Net Promoter +41", change: "+41" }
];

const SUCCESS_FACTORS = [
	{
		title: "Native is the right architecture for a primary financial channel",
		desc: "A banking app used daily for financial management is a different category from a utility app used occasionally. The performance, security, and device integration requirements — biometrics, secure enclave, offline capability — are best served by native development. The performance difference between native and hybrid is most visible precisely when users need it most."
	},
	{
		title: "Biometric authentication is adoption, not just security",
		desc: "Face ID and Touch ID authentication increases login frequency, reduces session abandonment, and improves security simultaneously. The 84% biometric adoption rate within six months was the primary driver of increased active usage — removing the friction that had been limiting how often customers opened the app."
	},
	{
		title: "Push notifications with customer control change engagement",
		desc: "Push notifications that can't be customised are muted by most users within a week. A preference framework allowing customers to choose which events trigger notifications — transaction alerts above a threshold they set, balance warnings they define — produced an opt-in rate of 91% and no significant opt-out pattern over the first six months."
	}
];

const FAQS = [
	{
		q: "Why is native app development preferred over hybrid for banking apps?",
		a: "Native apps (built in Swift for iOS or Kotlin for Android) provide direct access to device capabilities including biometric authentication, secure enclave storage, native push notifications, and platform-specific UI components. They deliver significantly better performance than hybrid web-view apps and can implement the security architecture required for banking — certificate pinning, jailbreak detection, secure credential storage — more robustly."
	},
	{
		q: "What is certificate pinning in mobile banking security?",
		a: "Certificate pinning is a security technique that restricts a mobile app to communicating only with servers presenting a specific certificate or public key, preventing man-in-the-middle attacks even if a fraudulent certificate authority is compromised. It is a standard security control in financial services mobile applications."
	}
];

export default function MobileBankingAppsCaseStudy() {
	return (
		<>
			<SEO
				title="Mobile Banking App Rebuild Case Study | OpenGridLabs"
				description="How a Native Mobile Banking App Rebuild Achieved a 4.8 App Store Rating and Reduced Call Centre Volume 33%."
				canonical="/services/bfsi/mobile-banking-apps"
				keywords="Mobile Banking App, Swift, Kotlin, Biometric Authentication, Push Notifications, Self-Service Banking, Digital Banking, OpenGridLabs"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Amber Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(38,100%,50%) 0%, hsl(28,100%,45%) 50%, transparent 100%)`
					}}
				/>

				{/* Back Button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link 
						to="/services/bfsi" 
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to BFSI & Fintech
					</Link>
				</div>

				<CaseStudyHero 
					categoryTag="Case Study · Mobile Banking App"
					title="How a Native Mobile Banking App Rebuild Achieved a 4.8 App Store Rating and Reduced Call Centre Volume 33%"
					description="A retail bank's mobile app had a 2.4 App Store rating and was the subject of consistent negative reviews — slow, visually dated, and limited in the self-service actions it supported. Customers were downloading it to check balances and calling the branch for everything else. OpenGridLabs rebuilt the app natively for iOS and Android: biometric authentication, push-notification engagement, and a complete self-service capability that made the app the preferred channel for 71% of customers within six months."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Retail bank (anonymised)" },
						{ label: "Platforms", value: "Native iOS (Swift) & Android (Kotlin)" },
						{ label: "Timeline", value: "15 months to full launch" },
						{ label: "Stack", value: "Swift · Kotlin · Biometric auth · Push notifications · Core banking APIs" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-amber-500/30"
					hoverTextClass="group-hover:text-amber-400"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Cpu className="w-5 h-5" />}
					contextParagraphs={[
						"Our client's mobile banking app was a hybrid web-view application built in 2017 — functional for basic balance checking but experiencing the performance and UX limitations common to hybrid approaches: slow load times, non-native interactions, and an inability to use device capabilities like biometric authentication, push notifications, or native navigation patterns without significant engineering complexity. The App Store rating had been 2.4 for two years, consistently citing slowness and limited functionality as the primary complaints.",
						"The bank had been patching the existing app — adding features to the hybrid codebase — without addressing the underlying architecture problem. Each feature added increased the performance debt. OpenGridLabs advised that the 2.4 App Store rating was a structural indicator that a rebuild, not a patch, was required, and that the rebuild would also unlock the native capabilities — biometrics, push notifications, native navigation — that were the biggest differentiators between good and great banking apps. A 15-month rebuild programme was agreed, with the existing app maintained throughout.",
						"A great mobile banking app is fast (sub-second screen load times), native (using iOS and Android platform conventions, gestures, and device capabilities), secure (biometric authentication, secure enclave-stored credentials), and comprehensive in self-service (reducing call centre contacts by handling the full range of customer service requests digitally). The best banking apps achieve sub-second performance, use biometrics as the primary authentication method, provide push notifications for relevant account events, and support all routine service requests without requiring a branch visit or call."
					]}
					contextHighlightColorClass="bg-amber-400"
					contextIconColorClass="text-amber-400"
					definitionTitle="What Makes a Great Mobile Banking App?"
					definitionText="A great mobile banking app is fast (sub-second screen load times), native (using iOS and Android platform conventions, gestures, and device capabilities), secure (biometric authentication, secure enclave-stored credentials), and comprehensive in self-service (reducing call centre contacts by handling the full range of customer service requests digitally). The best banking apps achieve sub-second performance, use biometrics as the primary authentication method, provide push notifications for relevant account events, and support all routine service requests without requiring a branch visit or call."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-amber-500/10"
					definitionIconBorderClass="border-amber-500/20"
					definitionIconColorClass="text-amber-400"
					glowColorClass="bg-amber-400"
					gradientFromClass="from-amber-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Challenge & Solution"}
					title={"Challenges & Solutions"}
					description={"Overcoming performance debt and poor interaction latency through native codebasings."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-400"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Layers, Database, Server]}
					tag={"Technical Design"}
					title={"Native Mobile App Architecture"}
					description={"A secure native device layer paired with asynchronous notifications, offline data caches, and TLS-hardened API gateways."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Regulatory & Security Core"}
					alertText={"All solutions are designed with financial services regulatory compliance at the core — not bolted on. Security architecture, audit logging, data residency, and operational resilience are first-class concerns throughout the engagement."}
					rightColumnTitle={"Mobile Architecture Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A phased 15-month timeline establishing native core routes before initiating customer migration."}
					phaseColors={[ "hsl(38,100%,50%)", "hsl(145,100%,45%)", "hsl(200,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-emerald-500 to-indigo-500"}
					badgeColorClass={"text-amber-400 bg-amber-400/10 border-amber-400/20"}
				/>

				<MeasurableResults 
					description="The native rebuild dramatically increased monthly active users while decreasing call center volume."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The 2.4 rating was a daily operational frustration — it affected app store discovery, it affected new customer confidence, and it was a constant internal reminder that we hadn't done this properly. The 4.8 after the rebuild changed the conversation entirely. The app stopped being a problem we were managing and started being an asset we were investing in."}
					author={"Chief Digital Officer"}
					subtitle={"Confidential Retail Bank"}
					accentLineClass={"bg-amber-400"}
					iconColorClass={"text-amber-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-amber-500/20"}
					iconColorClass={"text-amber-400"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-amber-400"}
					activeChevronColorClass={"text-amber-400"}
				/>

				<CaseStudyCta 
					title={"Mobile banking app with a 2-star rating and no biometric support?"}
					description={"OpenGridLabs rebuilds mobile banking apps natively — Swift, Kotlin, biometric authentication, and complete self-service — that customers rate highly and call centres appreciate."}
					moreCaseStudiesLink={"/services/bfsi"}
					glowBgClass={"bg-amber-400"}
					iconColorClass={"text-amber-400"}
					btnGradientClass={"from-amber-400 to-indigo-500"}
					btnShadowColor={"245,158,11,0.2"}
				/>
			</div>
		</>
	);
}
