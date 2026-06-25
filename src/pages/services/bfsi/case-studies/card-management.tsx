import { Link } from "react-router";

import {
	ArrowLeft,
	Layers,
	ShieldCheck,
	Cpu,
	Database,
	Zap,
	CreditCard,
	Lock
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
	{ value: "8 wk", label: "Virtual card MVP launch", accent: "from-amber-500 to-yellow-600" },
	{ value: "67%", label: "Reduction in card fraud losses", accent: "from-emerald-500 to-teal-600" },
	{ value: "8,000+", label: "Business clients on the platform", accent: "from-blue-500 to-cyan-600" },
	{ value: "6 mo", label: "Full feature set live", accent: "from-violet-500 to-fuchsia-600" }
];

const CHALLENGES = [
	{ text: "18-month timeline from principal bank partner for traditional card programme launch" },
	{ text: "No virtual card capability — business clients using personal cards for business expenses" },
	{ text: "No spend controls — no way to restrict card usage by merchant category, amount, or geography" },
	{ text: "No real-time transaction notifications — clients only seeing transactions in next-day file" },
	{ text: "Card fraud losses at 2.3% — above industry benchmark with no 3DS2 implementation" }
];

const SOLUTIONS = [
	{ text: "BIN sponsor partnership providing Mastercard/Visa network access without principal bank timeline" },
	{ text: "Instant virtual card issuance via issuing API — cards created in seconds via API or dashboard" },
	{ text: "Granular spend controls per card: merchant category restrictions, single/periodic spend limits, geography" },
	{ text: "Real-time transaction notifications and push alerts for all card activity" },
	{ text: "3DS2 strong authentication for online transactions, card tokenisation for Apple Pay/Google Pay" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Issuance", items: ["Card credential generation", "BIN sponsor integration", "Virtual/physical issuance", "Apple Pay/Google Pay token"], color: "hsl(38,100%,50%)" },
	{ title: "Controls", items: ["Spend limit engine", "MCC restriction", "Geography controls", "Time-based controls", "Dynamic controls API"], color: "hsl(145,100%,45%)" },
	{ title: "Authorisation", items: ["Real-time auth processing", "Spend control enforcement", "3DS2 challenge", "Fraud scoring"], color: "hsl(200,100%,50%)" },
	{ title: "Management", items: ["Card lifecycle management", "Transaction history", "Dispute management", "Reporting", "Notification engine"], color: "hsl(280,100%,65%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Virtual Cards MVP (Weeks 1–8)",
		desc: "OpenGridLabs integrated the BIN sponsor issuing API and built the core card management platform: virtual card issuance, basic spend limits, and real-time transaction notifications. The MVP launched in week 8 — 8,000 business clients could issue virtual cards to employees within seconds of the launch.",
		accent: "from-amber-500 to-yellow-500"
	},
	{
		number: "Phase 2",
		title: "Advanced Controls and 3DS2 (Months 3–5)",
		desc: "Granular spend controls were built: merchant category code restrictions, per-transaction and periodic limits, geography restrictions, and a controls API enabling the client's expense management software to set and modify card controls programmatically. 3DS2 was implemented for all online transactions, providing PSD2 SCA compliance and the fraud reduction that comes from strong authentication.",
		accent: "from-emerald-500 to-teal-500"
	},
	{
		number: "Phase 3",
		title: "Tokenisation, Physical Cards & Dispute Management (Month 6)",
		desc: "Apple Pay and Google Pay tokenisation were implemented via the network token requestor programme. The physical card issuance pathway was launched for clients requiring physical cards. A dispute management workflow was built, enabling clients to raise and track card disputes through the platform.",
		accent: "from-indigo-500 to-blue-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Time to virtual card launch", before: "18+ months (bank route)", after: "8 weeks (BIN sponsor)", change: "8 weeks (BIN sponsor)" },
	{ metric: "Card fraud losses", before: "2.3% of spend", after: "0.76%", change: "-67%" },
	{ metric: "Virtual card issuance time", before: "Not available", after: "<5 seconds", change: "<5 seconds" },
	{ metric: "Spend control capability", before: "None", after: "Granular controls", change: "Granular controls" },
	{ metric: "3DS2 compliance", before: "Not implemented", after: "Fully compliant", change: "Fully compliant" },
	{ metric: "Client NPS (card product)", before: "—", after: "Net Promoter +52", change: "+52" }
];

const SUCCESS_FACTORS = [
	{
		title: "BIN sponsorship separates the regulatory problem from the product problem",
		desc: "Obtaining principal bank status or a full bank licence to issue cards takes years. BIN sponsorship provides network access and regulatory coverage in weeks, allowing product development to proceed at startup speed rather than bank speed. The product quality comes from the platform built on top, not from the sponsorship structure."
	},
	{
		title: "Virtual card issuance changes the expense management product",
		desc: "A card issued in seconds, with spend controls configured at the moment of issuance, for a specific purpose and a specific amount, is a fundamentally different product from a traditional corporate card. The virtual card capability transformed the client's product from an expense management tool to a payment control platform."
	},
	{
		title: "3DS2 is fraud prevention and compliance simultaneously",
		desc: "3DS2 strong authentication for online transactions provides PSD2 SCA compliance and significantly reduces card-not-present fraud. The 67% fraud reduction was primarily a consequence of 3DS2 implementation — the cardholder authentication required for online transactions eliminated the majority of fraudulent card-not-present transactions that the legacy 3D Secure 1.0 implementation was not catching."
	}
];

const FAQS = [
	{
		q: "What is the difference between a virtual card and a physical card?",
		a: "A virtual card is a card product consisting of a card number, expiry date, and CVV — without a physical plastic card — used for online and contactless (via Apple Pay/Google Pay) transactions. Virtual cards can be issued instantly, created for specific purposes with spend controls, and cancelled when no longer needed, making them significantly more flexible than physical cards for business expense management."
	},
	{
		q: "What is 3DS2 and why does it matter for card fraud?",
		a: "3DS2 (3-D Secure version 2) is the current standard for online card authentication under PSD2, providing Strong Customer Authentication for online transactions. It uses device intelligence, behavioural data, and cardholder authentication (biometric or OTP) to verify the cardholder is present during online transactions, dramatically reducing card-not-present fraud compared to the legacy 3DS1 protocol."
	}
];

export default function CardManagementCaseStudy() {
	return (
		<>
			<SEO
				title="Card Management & Virtual Card Issuance Case Study | OpenGridLabs"
				description="How a Modern Card Issuing Platform Launched Virtual Cards in 8 Weeks and Cut Card Fraud Losses 67% using a BIN sponsor partnership and 3DS2."
				canonical="/services/bfsi/card-management"
				keywords="Card Management, Virtual Cards, Card Issuance, BIN Sponsorship, 3DS2, Spend Controls, Card Tokenisation, Apple Pay, Fraud Prevention, FinTech, Banking Technology, OpenGridLabs"
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
					categoryTag="Case Study · Card Management"
					title="How a Modern Card Issuing Platform Launched Virtual Cards in 8 Weeks and Cut Card Fraud Losses 67%"
					description="A fintech company needed to launch a card product for its business clients — virtual cards with granular spend controls, real-time notifications, and instant issuance. The traditional issuing route through a principal bank would take 18 months and limit product flexibility. OpenGridLabs built a card management and issuing platform using a BIN sponsor partnership, launching virtual cards in 8 weeks and cutting fraud losses 67% through tokenisation and dynamic CVV."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "B2B Fintech (anonymised)" },
						{ label: "Scale", value: "Cards platform for 8,000+ business clients" },
						{ label: "Timeline", value: "8 weeks MVP · 6 months full feature" },
						{ label: "Stack", value: "Card issuing API · BIN sponsor · Tokenisation · 3DS2 · Mastercard/Visa" }
					]}
				/>

				<CaseStudyCarousel
					slug="card-management"
					title="Virtual Card Controls and Tokenisation"
					accentColor="pink"
					aspectRatioClass="aspect-[3/2]"
					images={[
						"/images/case-studies/card-management/1.jpg",
						"/images/case-studies/card-management/2.jpg"
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
					contextIcon={<CreditCard className="w-5 h-5" />}
					contextParagraphs={[
						"Our client is a B2B fintech company offering expense management software to 8,000 business clients. Their customers needed to issue virtual cards to employees — for SaaS subscriptions, online advertising, supplier payments — with spend controls and real-time visibility. The client had been trying to partner with a principal bank for card issuance for 14 months; the bank's programme management requirements, compliance overhead, and technical integration timelines made an 18-month minimum to launch seem optimistic.",
						"OpenGridLabs structured a different approach: a BIN sponsor partnership providing the regulatory and network access, with OpenGridLabs building the card management platform on top of the sponsor's issuing APIs. This separated the regulatory and network access problem (solved by the BIN sponsor) from the product problem (solved by building a genuinely excellent card management platform). Virtual cards could be issued in seconds, spend controls could be configured per card, and the full platform could be launched in 8 weeks.",
						"A card management system is the platform that manages the lifecycle of payment cards — issuance (creating card credentials and activating card products), controls (spend limits, merchant category restrictions, geographic restrictions), transaction authorisation, notifications, and card management actions (block, unblock, PIN change, dispute). A modern card management platform supports both physical and virtual cards, integrates with tokenisation services for Apple Pay and Google Pay, and provides APIs enabling businesses to manage cards programmatically."
					]}
					contextHighlightColorClass="bg-amber-400"
					contextIconColorClass="text-amber-400"
					definitionTitle="What Is a Card Management System?"
					definitionText="A card management system is the platform that manages the lifecycle of payment cards — issuance (creating card credentials and activating card products), controls (spend limits, merchant category restrictions, geographic restrictions), transaction authorisation, notifications, and card management actions (block, unblock, PIN change, dispute). A modern card management platform supports both physical and virtual cards, integrates with tokenisation services for Apple Pay and Google Pay, and provides APIs enabling businesses to manage cards programmatically."
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
					description={"Overcoming compliance overhead, program limitations, and latency in core transaction routing."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-400"}
				/>

				<CaseStudyArchitecture
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Lock, ShieldCheck, Database]}
					tag={"Technical Design"}
					title={"Card Management Architecture"}
					description={"A secure, compliant transaction processing flow spanning instant issuance, spend controls, real-time auth, and card lifecycle management."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Regulatory & Security Core"}
					alertText={"All solutions are designed with financial services regulatory compliance at the core — not bolted on. Security architecture, audit logging, data residency, and operational resilience are first-class concerns throughout the engagement."}
					rightColumnTitle={"Card Management Engine Layers"}
				/>

				<CaseStudyTimeline
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A phased approach separating the regulatory and network access problem from the core card management product."}
					phaseColors={["hsl(38,100%,50%)", "hsl(145,100%,45%)", "hsl(200,100%,50%)"]}
					axisGradientClass={"from-amber-500 via-emerald-500 to-indigo-500"}
					badgeColorClass={"text-amber-400 bg-amber-400/10 border-amber-400/20"}
				/>

				<MeasurableResults
					description="Deploying BIN sponsor platform integrations significantly cut fraud and simplified corporate spend management."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote
					quote={"We'd been trying to launch cards for over a year. The BIN sponsor route with OpenGridLabs building the platform took eight weeks. The speed was transformational for our clients, and the fraud reduction from 3DS2 alone justified the entire platform investment."}
					author={"CEO"}
					subtitle={"Confidential B2B Fintech Company"}
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
					title={"Card product launch stuck in 18-month bank programme timelines?"}
					description={"OpenGridLabs builds card management platforms — BIN sponsor partnerships, instant virtual issuance, granular spend controls, and 3DS2 authentication — launching in weeks, not months."}
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
