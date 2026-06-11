import ServiceDetailsSwitcher from "../../../components/service-details-switcher";
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




const BFSI_COMPONENT_MAP: Record<string, React.ComponentType> = {
	"algorithmic-trading": AlgorithmicTradingCaseStudy,
	"card-management": CardManagementCaseStudy,
	"derivatives-pricing": DerivativesPricingCaseStudy,
	"esg-analytics": ESGAnalyticsCaseStudy,
	"financial-dashboards": FinancialDashboardsCaseStudy,
	"fund-accounting": FundAccountingCaseStudy,
	"investment-analytics": InvestmentAnalyticsCaseStudy,
	"kyc-aml-compliance": KycAmlComplianceCaseStudy,
	"market-data-feeds": MarketDataFeedsCaseStudy,
	"portfolio-optimization": PortfolioOptimizationCaseStudy,
	"regulatory-reporting": RegulatoryReportingCaseStudy,
	"risk-management": RiskManagementCaseStudy,
	"wealth-management-platforms": WealthManagementPlatformsCaseStudy,
	"actuarial-analytics": ActuarialAnalyticsCaseStudy,
	"agent-broker-portals": AgentBrokerPortalsCaseStudy,
	"claims-processing": ClaimsProcessingCaseStudy,
	"compliance-reporting": ComplianceReportingCaseStudy,
	"customer-self-service-portals": CustomerSelfServicePortalsCaseStudy,
	"document-ocr-ai": DocumentOcrAiCaseStudy,
	"loss-forecasting": LossForecastingCaseStudy,
	"policy-management-systems": PolicyManagementSystemsCaseStudy,
	"premium-calculation-engines": PremiumCalculationEnginesCaseStudy,
	"reinsurance-platforms": ReinsurancePlatformsCaseStudy,
	"telematics-integration": TelematicsIntegrationCaseStudy,
	"underwriting-automation": UnderwritingAutomationCaseStudy,
	"core-banking-systems": CoreBankingSystemsCaseStudy,
	"digital-banking-portals": DigitalBankingPortalsCaseStudy,
	"fraud-detection": FraudDetectionCaseStudy,
	"loan-origination": LoanOriginationCaseStudy,
	"mobile-banking-apps": MobileBankingAppsCaseStudy,
	"open-banking-apis": OpenBankingApisCaseStudy,
	"payment-processing": PaymentProcessingCaseStudy,
	"real-time-settlements": RealTimeSettlementsCaseStudy,
	"swift-integration": SwiftIntegrationCaseStudy,
	"trade-finance": TradeFinanceCaseStudy,
	"treasury-management": TreasuryManagementCaseStudy,
};

export default function ServicesBFSIDetail() {
	return (
		<ServiceDetailsSwitcher
			componentMap={BFSI_COMPONENT_MAP}
			fallbackPath="/services/bfsi"
		/>
	);
}
