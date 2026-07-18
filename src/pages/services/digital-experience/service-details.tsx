import ServiceDetailsSwitcher from "../../../components/service-details-switcher";
import DashboardDesignCaseStudy from "./case-studies/dashboard-design";
import DesignSystemsCaseStudy from "./case-studies/design-systems";
import InformationArchitectureCaseStudy from "./case-studies/information-architecture";
import InteractionDesignCaseStudy from "./case-studies/interaction-design";
import MobileAppDesignCaseStudy from "./case-studies/mobile-app-design";
import PrototypingCaseStudy from "./case-studies/prototyping";
import UsabilityTestingCaseStudy from "./case-studies/usability-testing";
import UserExperienceDesignCaseStudy from "./case-studies/user-experience-design";
import UserInterfaceDesignCaseStudy from "./case-studies/user-interface-design";
import UserResearchCaseStudy from "./case-studies/user-research";
import WebAppDesignCaseStudy from "./case-studies/web-app-design";
import WireframingCaseStudy from "./case-studies/wireframing";
import BannerDesignCaseStudy from "./case-studies/banner-design";
import BrochureDesignCaseStudy from "./case-studies/brochure-design";
import DigitalGraphicsCaseStudy from "./case-studies/digital-graphics";
import FlyerDesignCaseStudy from "./case-studies/flyer-design";
import IconDesignCaseStudy from "./case-studies/icon-design";
import IllustrationCaseStudy from "./case-studies/illustration";
import InfographicsCaseStudy from "./case-studies/infographics";
import MarketingMaterialsCaseStudy from "./case-studies/marketing-materials";
import MotionGraphicsCaseStudy from "./case-studies/motion-graphics";
import PosterDesignCaseStudy from "./case-studies/poster-design";
import PrintDesignCaseStudy from "./case-studies/print-design";
import SocialMediaGraphicsCaseStudy from "./case-studies/social-media-graphics";
import BrandCollateralCaseStudy from "./case-studies/brand-collateral";
import BrandGuidelinesCaseStudy from "./case-studies/brand-guidelines";
import BrandRefreshCaseStudy from "./case-studies/brand-refresh";
import BrandStrategyCaseStudy from "./case-studies/brand-strategy";
import BusinessCardsCaseStudy from "./case-studies/business-cards";
import ColorPaletteCaseStudy from "./case-studies/color-palette";
import LetterheadDesignCaseStudy from "./case-studies/letterhead-design";
import TypographyCaseStudy from "./case-studies/typography";
import VisualIdentityCaseStudy from "./case-studies/visual-identity";
import LogoDesignCaseStudy from "./case-studies/logo-design";
import PackageDesignCaseStudy from "./case-studies/package-design";
import SignageDesignCaseStudy from "./case-studies/signage-design";

const EXPERIENCE_COMPONENT_MAP: Record<string, React.ComponentType> = {
	"dashboard-design": DashboardDesignCaseStudy,
	"design-systems": DesignSystemsCaseStudy,
	"information-architecture": InformationArchitectureCaseStudy,
	"interaction-design": InteractionDesignCaseStudy,
	"mobile-app-design": MobileAppDesignCaseStudy,
	"prototyping": PrototypingCaseStudy,
	"usability-testing": UsabilityTestingCaseStudy,
	"user-experience-design": UserExperienceDesignCaseStudy,
	"user-interface-design": UserInterfaceDesignCaseStudy,
	"user-research": UserResearchCaseStudy,
	"web-app-design": WebAppDesignCaseStudy,
	"wireframing": WireframingCaseStudy,
	"brand-collateral": BrandCollateralCaseStudy,
	"brand-guidelines": BrandGuidelinesCaseStudy,
	"brand-refresh": BrandRefreshCaseStudy,
	"brand-strategy": BrandStrategyCaseStudy,
	"business-cards": BusinessCardsCaseStudy,
	"color-palette": ColorPaletteCaseStudy,
	"letterhead-design": LetterheadDesignCaseStudy,
	"logo-design": LogoDesignCaseStudy,
	"package-design": PackageDesignCaseStudy,
	"signage-design": SignageDesignCaseStudy,
	"typography": TypographyCaseStudy,
	"visual-identity": VisualIdentityCaseStudy,
	"banner-design": BannerDesignCaseStudy,
	"brochure-design": BrochureDesignCaseStudy,
	"digital-graphics": DigitalGraphicsCaseStudy,
	"flyer-design": FlyerDesignCaseStudy,
	"icon-design": IconDesignCaseStudy,
	"illustration": IllustrationCaseStudy,
	"infographics": InfographicsCaseStudy,
	"marketing-materials": MarketingMaterialsCaseStudy,
	"motion-graphics": MotionGraphicsCaseStudy,
	"poster-design": PosterDesignCaseStudy,
	"print-design": PrintDesignCaseStudy,
	"social-media-graphics": SocialMediaGraphicsCaseStudy,
};

export default function ServicesDigitalExperienceDetail() {
	return (
		<ServiceDetailsSwitcher
			componentMap={EXPERIENCE_COMPONENT_MAP}
			fallbackPath="/services/digital-experience"
		/>
	);
}
