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
	{ value: "84%", label: "Recipients who commented on the card", accent: "from-amber-500 to-orange-600" },
	{ value: "28%", label: "Increase in meeting follow-up rate", accent: "from-yellow-500 to-amber-600" },
	{ value: "4 wk", label: "Brief to print-ready files", accent: "from-orange-500 to-red-600" },
	{ value: "3", label: "Premium finish options explored before final selection", accent: "from-rose-500 to-orange-500" }
];

const CHALLENGES = [
	{ text: "Thin, lightweight card stock contradicting the premium positioning recently established" },
	{ text: "Generic template layout with no distinctive visual character" },
	{ text: "No tactile finish — identical to commodity business cards" },
	{ text: "Information hierarchy placing the company name as less prominent than the individual name" },
	{ text: "No consistency with the new brand identity that had been developed in the prior six months" }
];

const SOLUTIONS = [
	{ text: "Premium 540gsm double-thick cotton card stock with a substantial hand feel" },
	{ text: "A confident layout centring the logomark with clean typographic hierarchy" },
	{ text: "Foil stamping on the logo in a warm gold complementing the brand colour palette" },
	{ text: "Matt velvet lamination on both sides providing tactile quality and visual depth" },
	{ text: "A systematic template for all 200 staff cards ensuring consistency at scale" }
];

const ARCHITECTURE_STAGES = [
	{ title: "Brief", items: ["Brand positioning", "Audience context", "Budget parameters", "Print spec options"], color: "hsl(45,100%,50%)" },
	{ title: "Design", items: ["Layout concepts", "Typography hierarchy", "Logo application", "Finish options"], color: "hsl(35,100%,50%)" },
	{ title: "Production", items: ["Print supplier selection", "Paper stock", "Finish specification", "Proof review"], color: "hsl(20,100%,50%)" },
	{ title: "Delivery", items: ["Print-ready files", "Supplier relationship", "Reorder guide", "Digital equivalent"], color: "hsl(5,100%,50%)" }
];

const PHASES = [
	{
		number: "Phase 1",
		title: "Design Concepts & Layout (Week 1–2)",
		desc: "OpenGridLabs developed three distinct layout directions — each applying the brand identity in a different structural approach. The concepts explored different hierarchies (company-led vs. individual-led), different information densities, and different uses of white space. Physical mockups were produced for the first review.",
		accent: "from-yellow-500 to-amber-500"
	},
	{
		number: "Phase 2",
		title: "Finish Selection & Refinement (Week 3)",
		desc: "The chosen layout was refined and three finish options were presented as physical samples: foil with matt lamination, spot UV with gloss lamination, and a plain uncoated letterpress option. The client held physical samples before deciding. Foil with matt velvet lamination was selected for its tactile contrast and premium feel.",
		accent: "from-amber-500 to-orange-500"
	},
	{
		number: "Phase 3",
		title: "Print Production & Template System (Week 4)",
		desc: "Print-ready files were prepared for the full team of 200 staff, with a systematic template allowing HR to generate new cards for new starters using a locked Figma template. Print run was managed through a curated supplier with QC review of the proof run before full production.",
		accent: "from-orange-500 to-red-500"
	}
];

const TABLE_RESULTS = [
	{ metric: "Recipient comment rate", before: "Low (no data / unnoticed)", after: "84% commented", change: "84% commented" },
	{ metric: "Meeting follow-up rate", before: "Baseline", after: "+28%", change: "+28%" },
	{ metric: "Card retention (reported kept)", before: "~20%", after: "~78%", change: "~78%" },
	{ metric: "Brand consistency (card vs. identity)", before: "Misaligned", after: "Fully aligned", change: "Fully aligned" },
	{ metric: "New starter card production time", before: "2+ weeks (manual)", after: "3 days (template)", change: "3 days (template)" },
	{ metric: "Cost per card", before: "Standard pricing", after: "Premium, within budget", change: "Premium, within budget" }
];

const SUCCESS_FACTORS = [
	{
		title: "Paper weight communicates before design does",
		desc: "The hand feel of a business card is registered before the recipient reads a word. A 540gsm card says 'this company takes quality seriously' in the moment of exchange. No amount of good design compensates for a flimsy card."
	},
	{
		title: "Tactile contrast is the finish strategy",
		desc: "Foil (shiny) on a matt laminated background (velvety) creates a tactile and visual contrast that invites handling. The contrast is the feature — not the foil alone, not the matt alone, but the interaction between them."
	},
	{
		title: "A template is as important as the design",
		desc: "A great business card that takes two weeks to produce for each new hire is a design that will be circumvented. A locked Figma template that generates print-ready files in minutes made the premium design sustainable at scale."
	}
];

const FAQS = [
	{
		q: "What paper stock should I use for premium business cards?",
		a: "Premium business cards typically use 400–600gsm card stock. Cotton or uncoated stocks have a natural, tactile feel; coated stocks can take foil and UV finishes more precisely. Double-thick (two sheets bonded together) cards have a substantial weight that communicates quality in the hand."
	},
	{
		q: "What is the difference between foil, spot UV, and letterpress finishes?",
		a: "Foil stamping applies a metallic or pigmented film to the printed surface, creating a reflective finish. Spot UV applies a clear glossy coating to a specific area, creating contrast with a matt background. Letterpress uses a die to impress an inked design into the paper, creating a tactile depth. Each works best with specific designs and paper stocks."
	}
];

export default function BusinessCardsCaseStudy() {
	return (
		<>
			<SEO
				title="Premium Business Card Design Case Study | OpenGridLabs"
				description="How OpenGridLabs redesigned B2B premium business cards, turning first-impressions into conversation starters with 84% recipient comment rates."
				canonical="/services/digital-experience/business-cards"
				keywords="Business Cards, Business Card Design, Premium Print, Brand Collateral, Foil Stamping, Matt Lamination, Print Design, Brand Identity, First Impressions, Professional Print"
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* Amber Theme Ambient Glow */}
				<div 
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[700px] blur-[180px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700" 
					style={{
						background: `radial-gradient(circle, hsl(45,100%,50%) 0%, hsl(35,100%,45%) 50%, transparent 100%)`
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
					categoryTag="Case Study · Brand Identity"
					title="How a Premium Business Card Redesign Turned a First-Impression Liability into a Conversation Starter"
					description="A company whose brand had recently been elevated through a visual identity project was still handing out business cards that felt inconsistent with everything else — a thin, standard-weight card with a generic layout and no special finish that contradicted the premium positioning they had worked to establish. OpenGridLabs redesigned the business cards to match the brand's ambitions: a confident layout, premium paper stock, and a finish that made the card worth keeping."
					categoryBorderClass="border-amber-500/30"
					categoryBgClass="bg-amber-500/10"
					categoryTextClass="text-amber-400"
					glowBgClass="bg-amber-400"
					terminalIconClass="text-amber-400"
					detailsTitle="Project Scope"
					details={[
						{ label: "Sector", value: "Professional Services / B2B (anonymised)" },
						{ label: "Scope", value: "Business card redesign — full team" },
						{ label: "Timeline", value: "4w design + 2w print production" },
						{ label: "Deliverables", value: "Design files · Print PDFs · Spec" }
					]}
				/>

				<StatsGrid 
					stats={STATS}
					hoverBorderClass="hover:border-amber-500/30"
					hoverTextClass="group-hover:text-amber-500"
				/>

				<CaseStudyBackground 
					contextTag="Context"
					contextTitle="Background"
					contextIcon={<Paintbrush className="w-5 h-5" />}
					contextParagraphs={[
						"Our client had recently completed a brand identity programme that elevated their visual language significantly. Their website looked premium. Their pitch deck looked premium. Their office reflected the brand. The moment they handed someone a business card in a first meeting, that work was quietly undone — a thin, lightweight card with a standard layout and no tactile distinction, looking like it had been ordered from an online template service.",
						"Business cards occupy a unique position in brand communications: they are the only physical brand touchpoint that survives a meeting and lives on a desk or in a wallet for weeks or months. A forgettable card is discarded. A card with tactile quality, a confident design, and a premium finish is kept — and it represents the brand every time someone handles it. The redesign was not about extravagance; it was about ensuring the physical artefact matched the brand it claimed to represent.",
						"A great business card communicates the brand's positioning and quality through every element — the paper weight (typically 400–600gsm for premium), the finish (matt lamination, foil, spot UV, or letterpress), the typography and layout, and the information hierarchy. The card should be distinctive enough to be remembered and functional enough to be kept. The physical properties — weight, texture, finish — communicate quality before a word is read."
					]}
					contextHighlightColorClass="bg-indigo-400"
					contextIconColorClass="text-indigo-400"
					definitionTitle="What Makes a Great Card?"
					definitionText="A great business card communicates the brand's positioning and quality through every element — the paper weight (typically 400–600gsm for premium), the finish (matt lamination, foil, spot UV, or letterpress), the typography and layout, and the information hierarchy. The card should be distinctive enough to be remembered and functional enough to be kept. The physical properties — weight, texture, finish — communicate quality before a word is read."
					definitionIcon={<Zap className="w-6 h-6 animate-pulse" />}
					definitionIconBgClass="bg-indigo-500/10"
					definitionIconBorderClass="border-indigo-500/20"
					definitionIconColorClass="text-indigo-400"
					glowColorClass="bg-indigo-400"
					gradientFromClass="from-indigo-950/10"
				/>

				<ChallengesSolutions 
					challenges={CHALLENGES}
					solutions={SOLUTIONS}
					tag={"The Gap & The Solution"}
					title={"Challenges & Solutions"}
					description={"Evolving standard cards into tactile physical assets to reinforce brand positioning at scale."}
					hoverBorderClass={"hover:border-amber-500/20"}
					arrowColorClass={"text-amber-500"}
				/>

				<CaseStudyArchitecture 
					stages={ARCHITECTURE_STAGES}
					stageIcons={[Cpu, Database, Layers, Activity]}
					tag={"Design Framework"}
					title={"Business Card Design Process"}
					description={"A standardized layout and printing setup guiding paper specs, finish choices, and automated reorder pipelines."}
					tagIcon={<Layers className="w-5 h-5" />}
					tagColorClass={"text-amber-400"}
					highlightColorClass={"bg-amber-400"}
					gradientColorClass={"via-amber-400/50"}
					alertBorderClass={"border-amber-500/20"}
					alertBgClass={"bg-amber-500/5"}
					alertTextColorClass={"text-amber-300"}
					alertTitle={"Why this process"}
					alertText={"Every stage produces a decision that makes the next stage faster. Strategy before design, research before concepts, concepts before execution — each gate eliminates the rework that comes from skipping it."}
					rightColumnTitle={"Production Pipeline Layers"}
				/>

				<CaseStudyTimeline 
					phases={PHASES}
					tag={"The Roadmap"}
					title={"Engagement Approach"}
					description={"A systematic 4-week design build coupled with print-proof sample selection and staff template deliveries."}
					phaseColors={[ "hsl(45,100%,50%)", "hsl(35,100%,50%)", "hsl(20,100%,50%)" ]}
					axisGradientClass={"from-amber-500 via-orange-500 to-red-500"}
					badgeColorClass={"text-amber-500 bg-amber-500/10 border-amber-500/20"}
				/>

				<MeasurableResults 
					description="Deploying a double-thick stock and foil finish increased response rates and cut starter card times."
					results={TABLE_RESULTS}
				/>

				<CaseStudyQuote 
					quote={"The first time I handed over the new card I watched someone turn it over twice and rub their thumb across it. That was the reaction we wanted. It started three conversations that week about our rebrand that wouldn't have happened with the old one."}
					author={"Managing Partner"}
					subtitle={"Confidential Professional Services Firm"}
					accentLineClass={"bg-amber-500"}
					iconColorClass={"text-amber-500/10"}
				/>

				<CaseStudySuccessFactors 
					factors={SUCCESS_FACTORS}
					tag={"Key Drivers"}
					title={"Why This Worked"}
					hoverBorderClass={"hover:border-amber-500/20"}
					iconColorClass={"text-amber-500"}
				/>

				<CaseStudyFaq 
					faqs={FAQS}
					tag={"Learning Center"}
					title={"Frequently Asked Questions"}
					iconColorClass={"text-amber-500"}
					activeChevronColorClass={"text-amber-500"}
				/>

				<CaseStudyCta 
					title={"Still handing over a card that contradicts your brand?"}
					description={"OpenGridLabs designs premium business cards — paper specification, special finishes, and confident layouts — that make a first impression worth remembering."}
					moreCaseStudiesLink={"/services/digital-experience"}
					glowBgClass={"bg-amber-400"}
					iconColorClass={"text-amber-500"}
					btnGradientClass={"from-amber-500 to-orange-500"}
					btnShadowColor={"245,158,11,0.2"}
				/>
			</div>
		</>
	);
}
