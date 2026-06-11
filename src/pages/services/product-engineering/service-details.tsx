import ServiceDetailsSwitcher from "../../../components/service-details-switcher";
import CMSIntegrationCaseStudy from "./case-studies/cms-integration";
import CodeOptimizationCaseStudy from "./case-studies/code-optimization";
import FrontEndDevCaseStudy from "./case-studies/front-end-dev";
import ProgressiveWebAppCaseStudy from "./case-studies/progressive-web-app";
import RealTimeChatCaseStudy from "./case-studies/real-time-chat";
import ResponsiveDesignCaseStudy from "./case-studies/responsive-design";
import ScalableWebEcosystemsCaseStudy from "./case-studies/scalable-web-ecosystems";
import SEOOptimizationCaseStudy from "./case-studies/seo-optimization";
import SPADevelopmentCaseStudy from "./case-studies/spa-development";
import UIUXDesignCaseStudy from "./case-studies/ui-ux-design";
import WebAnimationsCaseStudy from "./case-studies/web-animations";
import WebSecurityCaseStudy from "./case-studies/web-security";
import AndroidDevelopmentCaseStudy from "./case-studies/android-development";
import AppStoreDeploymentCaseStudy from "./case-studies/app-store-deployment";
import AppUIUXCaseStudy from "./case-studies/app-ui-ux";
import CameraIntegrationCaseStudy from "./case-studies/camera-integration";
import CrossPlatformAppsCaseStudy from "./case-studies/cross-platform-apps";
import FirebaseIntegrationCaseStudy from "./case-studies/firebase-integration";
import FlutterCaseStudy from "./case-studies/flutter";
import GPSMapsCaseStudy from "./case-studies/gps-maps";
import IOSDevelopmentCaseStudy from "./case-studies/ios-development";
import OfflineModeCaseStudy from "./case-studies/offline-mode";
import PushNotificationsCaseStudy from "./case-studies/push-notifications";
import ReactNativeCaseStudy from "./case-studies/react-native";
import AdminPanelsCaseStudy from "./case-studies/admin-panels";
import APIDevelopmentCaseStudy from "./case-studies/api-development";
import AuthenticationCaseStudy from "./case-studies/authentication";
import CachingSystemsCaseStudy from "./case-studies/caching-systems";
import DatabaseDesignCaseStudy from "./case-studies/database-design";
import FileStorageCaseStudy from "./case-studies/file-storage";
import GraphQLCaseStudy from "./case-studies/graphql";
import JobQueuesCaseStudy from "./case-studies/job-queues";
import RESTfulServicesCaseStudy from "./case-studies/restful-services";
import ServerlessFunctionsCaseStudy from "./case-studies/serverless-functions";
import ThirdPartyIntegrationCaseStudy from "./case-studies/third-party-integration";
import WebSocketsCaseStudy from "./case-studies/websockets";

const PRODUCT_COMPONENT_MAP: Record<string, React.ComponentType> = {
	"cms-integration": CMSIntegrationCaseStudy,
	"code-optimization": CodeOptimizationCaseStudy,
	"front-end-dev": FrontEndDevCaseStudy,
	"progressive-web-app": ProgressiveWebAppCaseStudy,
	"real-time-chat": RealTimeChatCaseStudy,
	"responsive-design": ResponsiveDesignCaseStudy,
	"scalable-web-ecosystems": ScalableWebEcosystemsCaseStudy,
	"seo-optimization": SEOOptimizationCaseStudy,
	"spa-development": SPADevelopmentCaseStudy,
	"ui-ux-design": UIUXDesignCaseStudy,
	"web-animations": WebAnimationsCaseStudy,
	"web-security": WebSecurityCaseStudy,
	"android-development": AndroidDevelopmentCaseStudy,
	"app-store-deployment": AppStoreDeploymentCaseStudy,
	"app-ui-ux": AppUIUXCaseStudy,
	"camera-integration": CameraIntegrationCaseStudy,
	"cross-platform-apps": CrossPlatformAppsCaseStudy,
	"firebase-integration": FirebaseIntegrationCaseStudy,
	"flutter": FlutterCaseStudy,
	"gps-maps": GPSMapsCaseStudy,
	"ios-development": IOSDevelopmentCaseStudy,
	"offline-mode": OfflineModeCaseStudy,
	"push-notifications": PushNotificationsCaseStudy,
	"react-native": ReactNativeCaseStudy,
	"admin-panels": AdminPanelsCaseStudy,
	"api-development": APIDevelopmentCaseStudy,
	"authentication": AuthenticationCaseStudy,
	"caching-systems": CachingSystemsCaseStudy,
	"database-design": DatabaseDesignCaseStudy,
	"file-storage": FileStorageCaseStudy,
	"graphql": GraphQLCaseStudy,
	"job-queues": JobQueuesCaseStudy,
	"restful-services": RESTfulServicesCaseStudy,
	"serverless-functions": ServerlessFunctionsCaseStudy,
	"third-party-integration": ThirdPartyIntegrationCaseStudy,
	"websockets": WebSocketsCaseStudy,
};

export default function ServicesProductEngineeringDetail() {
	return (
		<ServiceDetailsSwitcher
			componentMap={PRODUCT_COMPONENT_MAP}
			fallbackPath="/services/product-engineering"
		/>
	);
}
