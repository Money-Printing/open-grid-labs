import { useParams, Link, Navigate } from "react-router";
import SEO from "../../../components/seo";
import { motion } from "motion/react";
import {
	ArrowLeft,
	BrainCircuit,
	ArrowRight,
	Sparkles,
	CheckCircle2,
	Terminal
} from "lucide-react";
import { slugify } from "../../../utils/slugify";
import AlgorithmicTradingCaseStudy from "./case-studies/algorithmic-trading";
import CardManagementCaseStudy from "./case-studies/card-management";
import DerivativesPricingCaseStudy from "./case-studies/derivatives-pricing";
import ESGAnalyticsCaseStudy from "./case-studies/esg-analytics";
import FinancialDashboardsCaseStudy from "./case-studies/financial-dashboards";
import FundAccountingCaseStudy from "./case-studies/fund-accounting";
import InvestmentAnalyticsCaseStudy from "./case-studies/investment-analytics";
import KycAmlComplianceCaseStudy from "./case-studies/kyc-aml-compliance";
import MarketDataFeedsCaseStudy from "./case-studies/market-data-feeds";
import PortfolioOptimizationCaseStudy from "./case-studies/portfolio-optimization";
import RegulatoryReportingCaseStudy from "./case-studies/regulatory-reporting";
import ActuarialAnalyticsCaseStudy from "./case-studies/actuarial-analytics";
import AgentBrokerPortalsCaseStudy from "./case-studies/agent-broker-portals";
import ClaimsProcessingCaseStudy from "./case-studies/claims-processing";
import ComplianceReportingCaseStudy from "./case-studies/compliance-reporting";
import CustomerSelfServicePortalsCaseStudy from "./case-studies/customer-self-service-portals";
import DocumentOcrAiCaseStudy from "./case-studies/document-ocr-ai";
import LossForecastingCaseStudy from "./case-studies/loss-forecasting";
import PolicyManagementSystemsCaseStudy from "./case-studies/policy-management-systems";
import RiskManagementCaseStudy from "./case-studies/risk-management";
import WealthManagementPlatformsCaseStudy from "./case-studies/wealth-management-platforms";
import PremiumCalculationEnginesCaseStudy from "./case-studies/premium-calculation-engines";
import ReinsurancePlatformsCaseStudy from "./case-studies/reinsurance-platforms";
import TelematicsIntegrationCaseStudy from "./case-studies/telematics-integration";
import UnderwritingAutomationCaseStudy from "./case-studies/underwriting-automation";



import CoreBankingSystemsCaseStudy from "./case-studies/core-banking-systems";
import DigitalBankingPortalsCaseStudy from "./case-studies/digital-banking-portals";
import FraudDetectionCaseStudy from "./case-studies/fraud-detection";
import LoanOriginationCaseStudy from "./case-studies/loan-origination";
import MobileBankingAppsCaseStudy from "./case-studies/mobile-banking-apps";
import OpenBankingApisCaseStudy from "./case-studies/open-banking-apis";
import PaymentProcessingCaseStudy from "./case-studies/payment-processing";
import RealTimeSettlementsCaseStudy from "./case-studies/real-time-settlements";
import SwiftIntegrationCaseStudy from "./case-studies/swift-integration";
import TradeFinanceCaseStudy from "./case-studies/trade-finance";
import TreasuryManagementCaseStudy from "./case-studies/treasury-management";


interface BFSIDetail {
	title: string;
	category: "Banking" | "Financial Services" | "Insurance Tech";
	highlight: string;
	description: string;
	overview: string;
	technologies: string[];
	features: string[];
	useCases: {
		industry: string;
		title: string;
		desc: string;
	}[];
	results: {
		metric: string;
		value: string;
		desc: string;
	}[];
}

const BANKING_SERVICES = [
	"Core Banking Systems", "Digital Banking Portals", "Payment Processing", "Open Banking APIs",
	"Trade Finance", "Loan Origination", "Treasury Management", "Fraud Detection",
	"Real-time Settlements", "Mobile Banking Apps", "SWIFT Integration", "Card Management"
];

const FINANCIAL_SERVICES = [
	"Wealth Management Platforms", "Investment Analytics", "Algorithmic Trading", "Risk Management",
	"Portfolio Optimization", "Regulatory Reporting", "KYC / AML Compliance", "ESG Analytics",
	"Fund Accounting", "Derivatives Pricing", "Market Data Feeds", "Financial Dashboards"
];

const INSURANCE_TECH_SERVICES = [
	"Policy Management Systems", "Claims Processing", "Underwriting Automation", "Actuarial Analytics",
	"Customer Self-Service Portals", "Premium Calculation Engines", "Reinsurance Platforms", "Document OCR & AI",
	"Loss Forecasting", "Agent & Broker Portals", "Compliance Reporting", "Telematics Integration"
];

const ALL_SERVICES = [...BANKING_SERVICES, ...FINANCIAL_SERVICES, ...INSURANCE_TECH_SERVICES];

function generateBFSIDetail(_slug: string, title: string): BFSIDetail {
	let category: "Banking" | "Financial Services" | "Insurance Tech" = "Banking";
	let highlight = "#F59E0B"; // Amber

	if (BANKING_SERVICES.includes(title)) {
		category = "Banking";
		highlight = "#F59E0B";
	} else if (FINANCIAL_SERVICES.includes(title)) {
		category = "Financial Services";
		highlight = "#10B981"; // Emerald
	} else if (INSURANCE_TECH_SERVICES.includes(title)) {
		category = "Insurance Tech";
		highlight = "#6366F1"; // Indigo
	}

	const categoryConfig = {
		"Banking": {
			tech: ["Java / Spring", "PostgreSQL", "Kafka", "Redis", "PCI-DSS", "OAuth 2.0", "AWS"],
			metrics: [
				{ metric: "System Latency", value: "< 80ms", desc: "For end-to-end ledger updates and payment clearances." },
				{ metric: "Uptime Guaranteed", value: "99.999%", desc: "High availability design across distributed clusters." },
				{ metric: "SLA Adherence", value: "100%", desc: "Regulatory compliance and reporting milestones met on schedule." }
			]
		},
		"Financial Services": {
			tech: ["Python", "Oracle DB", "Redis", "Kafka", "OAuth 2.0", "Tableau", "AWS"],
			metrics: [
				{ metric: "Portfolio Sync", value: "Real-Time", desc: "Zero delay processing for high-volume transactions and asset valuation." },
				{ metric: "Compliance Auditing", value: "Automated", desc: "Ongoing verification for regulatory frameworks and AML." },
				{ metric: "Analytics Speed", value: "10x Faster", desc: "Report generation and dashboard load times post-deployment." }
			]
		},
		"Insurance Tech": {
			tech: ["Java / Spring", "Python", "PostgreSQL", "Kafka", "Redis", "Power BI", "AWS"],
			metrics: [
				{ metric: "Claims Processing", value: "-60% Time", desc: "Achieved via automated document classification and OCR pipelines." },
				{ metric: "Underwriting Speed", value: "Instant", desc: "Algorithmic risk scoring for basic policy categories." },
				{ metric: "Portal Engagement", value: "+30% Lift", desc: "Increase in customer self-service transactions and renewal rates." }
			]
		}
	};

	const config = categoryConfig[category];

	return {
		title: title,
		category: category,
		highlight: highlight,
		description: `Enterprise-grade ${title} solutions designed to ensure regulatory compliance, absolute security, and high performance.`,
		overview: `Our ${title} capability bridges the gap between strict financial requirements and high-velocity digital products. By implementing secure API layers, robust encryption protocols, low-latency transaction routing, and scalable database schemas, we build platforms that meet the most demanding regulatory and operational challenges in ${category}.`,
		technologies: config.tech,
		features: [
			`Tailormade ${title} Infrastructure: Secure configurations designed around your existing core systems and business workflows.`,
			"Regulatory-First Engineering: Architecture built to satisfy PCI-DSS, GDPR, PSD2, and local banking guidelines.",
			"Real-Time Auditing & Telemetry: End-to-end tracing and structured logging for all financial operations.",
			"Resilient Event Pipelines: Asynchronous transaction routing utilizing event streams for zero data loss."
		],
		useCases: [
			{
				industry: "Fintech",
				title: `${title} Integration & Modernisation`,
				desc: `Partnered with emerging fintechs to design, secure, and validate their ${title} systems, reducing regulatory audit prep times by 40% and optimizing throughput.`
			},
			{
				industry: "Traditional Banking",
				title: `${title}-Powered Digital Core Expansion`,
				desc: `Developed microservices layers wrapper around legacy mainframes using ${title}, enabling safe open-banking API access and mobile application client queries.`
			}
		],
		results: config.metrics
	};
}

export default function ServicesBFSIDetail() {
	const { serviceId } = useParams<{ serviceId: string }>();

	if (serviceId === "algorithmic-trading") {
		return <AlgorithmicTradingCaseStudy />;
	}

	if (serviceId === "card-management") {
		return <CardManagementCaseStudy />;
	}

	if (serviceId === "derivatives-pricing") {
		return <DerivativesPricingCaseStudy />;
	}

	if (serviceId === "esg-analytics") {
		return <ESGAnalyticsCaseStudy />;
	}

	if (serviceId === "financial-dashboards") {
		return <FinancialDashboardsCaseStudy />;
	}

	if (serviceId === "fund-accounting") {
		return <FundAccountingCaseStudy />;
	}

	if (serviceId === "investment-analytics") {
		return <InvestmentAnalyticsCaseStudy />;
	}

	if (serviceId === "kyc-aml-compliance") {
		return <KycAmlComplianceCaseStudy />;
	}

	if (serviceId === "market-data-feeds") {
		return <MarketDataFeedsCaseStudy />;
	}

	if (serviceId === "portfolio-optimization") {
		return <PortfolioOptimizationCaseStudy />;
	}

	if (serviceId === "regulatory-reporting") {
		return <RegulatoryReportingCaseStudy />;
	}

	if (serviceId === "risk-management") {
		return <RiskManagementCaseStudy />;
	}

	if (serviceId === "wealth-management-platforms") {
		return <WealthManagementPlatformsCaseStudy />;
	}

	if (serviceId === "actuarial-analytics") {
		return <ActuarialAnalyticsCaseStudy />;
	}

	if (serviceId === "agent-broker-portals") {
		return <AgentBrokerPortalsCaseStudy />;
	}

	if (serviceId === "claims-processing") {
		return <ClaimsProcessingCaseStudy />;
	}

	if (serviceId === "compliance-reporting") {
		return <ComplianceReportingCaseStudy />;
	}

	if (serviceId === "customer-self-service-portals") {
		return <CustomerSelfServicePortalsCaseStudy />;
	}

	if (serviceId === "document-ocr-ai") {
		return <DocumentOcrAiCaseStudy />;
	}

	if (serviceId === "loss-forecasting") {
		return <LossForecastingCaseStudy />;
	}

	if (serviceId === "policy-management-systems") {
		return <PolicyManagementSystemsCaseStudy />;
	}

	if (serviceId === "premium-calculation-engines") {
		return <PremiumCalculationEnginesCaseStudy />;
	}

	if (serviceId === "reinsurance-platforms") {
		return <ReinsurancePlatformsCaseStudy />;
	}

	if (serviceId === "telematics-integration") {
		return <TelematicsIntegrationCaseStudy />;
	}

	if (serviceId === "underwriting-automation") {
		return <UnderwritingAutomationCaseStudy />;
	}

	if (serviceId === "core-banking-systems") {
		return <CoreBankingSystemsCaseStudy />;
	}

	if (serviceId === "digital-banking-portals") {
		return <DigitalBankingPortalsCaseStudy />;
	}

	if (serviceId === "fraud-detection") {
		return <FraudDetectionCaseStudy />;
	}

	if (serviceId === "loan-origination") {
		return <LoanOriginationCaseStudy />;
	}

	if (serviceId === "mobile-banking-apps") {
		return <MobileBankingAppsCaseStudy />;
	}

	if (serviceId === "open-banking-apis") {
		return <OpenBankingApisCaseStudy />;
	}

	if (serviceId === "payment-processing") {
		return <PaymentProcessingCaseStudy />;
	}

	if (serviceId === "real-time-settlements") {
		return <RealTimeSettlementsCaseStudy />;
	}

	if (serviceId === "swift-integration") {
		return <SwiftIntegrationCaseStudy />;
	}

	if (serviceId === "trade-finance") {
		return <TradeFinanceCaseStudy />;
	}

	if (serviceId === "treasury-management") {
		return <TreasuryManagementCaseStudy />;
	}

	const matchedTitle = ALL_SERVICES.find(s => slugify(s) === serviceId);

	if (!serviceId || !matchedTitle) {
		return <Navigate to="/services/bfsi" replace />;
	}

	const service = generateBFSIDetail(serviceId, matchedTitle);

	return (
		<>
			<SEO
				title={`${service.title} - BFSI & Fintech Solutions | OpenGridLabs`}
				description={service.description}
				canonical={`/services/bfsi/${serviceId}`}
				keywords={`${service.title}, ${service.category}, core banking, fintech, compliance, security, payment processing, opengridlabs`}
			/>

			<div className="bg-background min-h-screen font-sans overflow-x-hidden relative pb-32">
				{/* gorgeous ambient glow */}
				<div
					className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[600px] blur-[160px] pointer-events-none opacity-20 dark:opacity-30 transition-all duration-700"
					style={{
						background: `radial-gradient(circle, ${service.highlight} 0%, transparent 70%)`
					}}
				/>

				{/* back button */}
				<div className="w-[90%] max-w-[1600px] mx-auto pt-32 relative z-10">
					<Link
						to="/services/bfsi"
						className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors group text-sm md:text-base"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
						Back to BFSI & Fintech
					</Link>
				</div>

				{/* main hero */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-12 relative z-10">
					<div className="grid lg:grid-cols-12 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 space-y-6"
						>
							<div className="flex items-center gap-3">
								<span
									className="text-xs md:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border bg-opacity-10 backdrop-blur-md"
									style={{
										borderColor: `${service.highlight}30`,
										backgroundColor: `${service.highlight}10`,
										color: service.highlight
									}}
								>
									{service.category}
								</span>
							</div>

							<h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/50">
								{service.title}
							</h1>

							<p className="text-xl md:text-3xl font-light text-foreground/80 leading-relaxed max-w-3xl">
								{service.description}
							</p>
						</motion.div>

						{/* technology stack card */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-4"
						>
							<div className="glass-panel p-8 rounded-[32px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl">
								<div
									className="absolute -top-12 -right-12 w-32 h-32 blur-3xl opacity-20 pointer-events-none rounded-full"
									style={{ backgroundColor: service.highlight }}
								/>
								<div className="flex items-center gap-3 mb-6">
									<Terminal className="w-6 h-6" style={{ color: service.highlight }} />
									<h3 className="text-lg font-bold text-foreground">Technology Stack</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{service.technologies.map((tech, idx) => (
										<span
											key={idx}
											className="px-3.5 py-1.5 rounded-xl text-sm font-medium border border-black/5 dark:border-white/5 bg-foreground/[0.02] dark:bg-white/5 text-foreground/80"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* overview */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
						<div
							className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
							style={{ backgroundImage: `linear-gradient(to right, transparent, ${service.highlight}40, transparent)` }}
						/>
						<div className="grid lg:grid-cols-12 gap-12">
							<div className="lg:col-span-5 space-y-6">
								<div className="flex items-center gap-2">
									<BrainCircuit className="w-5 h-5 text-muted-foreground" />
									<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Deep Dive</span>
								</div>
								<h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
									Service Overview
								</h2>
								<div
									className="w-16 h-1 rounded-full"
									style={{ backgroundColor: service.highlight }}
								/>
							</div>
							<div className="lg:col-span-7">
								<p className="text-lg md:text-2xl font-light leading-relaxed text-foreground/80 dark:text-foreground/70">
									{service.overview}
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* capabilities */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-24 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">System Capabilities</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Core Features
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						{service.features.map((feature, idx) => {
							const [titlePart, descPart] = feature.split(": ");
							return (
								<motion.div
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: idx * 0.05 }}
									className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-colors shadow-lg group relative overflow-hidden"
								>
									<div className="flex gap-4 items-start">
										<div className="mt-1">
											<CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: service.highlight }} />
										</div>
										<div className="space-y-2">
											<h3 className="text-xl font-bold text-foreground">
												{titlePart}
											</h3>
											{descPart && (
												<p className="text-muted-foreground leading-relaxed">
													{descPart}
												</p>
											)}
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</section>

				{/* use cases */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Engineering in Action</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Real-World Use Cases
						</h2>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						{service.useCases.map((useCase, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, scale: 0.98 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="glass-panel p-10 rounded-[36px] border border-black/5 dark:border-white/5 flex flex-col justify-between h-[360px] relative overflow-hidden group shadow-xl"
							>
								<div
									className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
									style={{ backgroundColor: service.highlight }}
								/>

								<div className="space-y-4">
									<span
										className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-black/10 dark:border-white/10 bg-foreground/[0.01] text-muted-foreground"
									>
										{useCase.industry}
									</span>
									<h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
										{useCase.title}
									</h3>
								</div>

								<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
									{useCase.desc}
								</p>
							</motion.div>
						))}
					</div>
				</section>

				{/* results */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="mb-12">
						<span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Strategic Value</span>
						<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground mt-2">
							Target Impact Metrics
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{service.results.map((result, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/5 text-left relative overflow-hidden shadow-lg"
							>
								<div
									className="absolute -top-6 -right-6 w-16 h-16 rounded-full opacity-10"
									style={{ backgroundColor: service.highlight }}
								/>
								<div className="space-y-4 relative z-10">
									<span className="text-xs uppercase text-muted-foreground font-bold tracking-wider">
										{result.metric}
									</span>
									<p
										className="text-4xl md:text-5xl font-black tracking-tight"
										style={{ color: service.highlight }}
									>
										{result.value}
									</p>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{result.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* call to action */}
				<section className="w-[90%] max-w-[1600px] mx-auto mt-32 relative z-10">
					<div className="glass-panel p-8 md:p-16 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl text-center relative overflow-hidden">
						<div
							className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 blur-[120px] opacity-15 rounded-full pointer-events-none"
							style={{ backgroundColor: service.highlight }}
						/>
						<div className="max-w-3xl mx-auto space-y-8 relative z-10">
							<Sparkles className="w-10 h-10 mx-auto" style={{ color: service.highlight }} />
							<h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-foreground leading-none">
								Ready to deploy this capability?
							</h2>
							<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
								Partner with our engineering experts to custom design, validate, and integrate {service.title} inside your enterprise financial platforms.
							</p>
							<div>
								<Link
									to="/contact-us"
									className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg text-white"
									style={{
										background: `linear-gradient(135deg, ${service.highlight} 0%, hsl(260, 100%, 60%) 100%)`,
										boxShadow: `0 10px 30px ${service.highlight}30`
									}}
								>
									Get in Touch <ArrowRight className="w-5 h-5" />
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
