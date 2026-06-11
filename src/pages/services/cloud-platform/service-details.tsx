import ServiceDetailsSwitcher from "../../../components/service-details-switcher";
import AmazonRDSCaseStudy from "./case-studies/amazon-rds";
import AutoScalingCaseStudy from "./case-studies/auto-scaling";
import AnsibleAutomationCaseStudy from "./case-studies/ansible-automation";
import ArgoCDGitOpsCaseStudy from "./case-studies/argocd-gitops";
import ArtifactRegistryCaseStudy from "./case-studies/artifact-registry";
import AutomatedTestingCaseStudy from "./case-studies/automated-testing";
import CodeQualityGatesCaseStudy from "./case-studies/code-quality-gates";
import DockerBuildsCaseStudy from "./case-studies/docker-builds";
import GitHubActionsCaseStudy from "./case-studies/github-actions";
import GitLabCaseStudy from "./case-studies/gitlab-ci-cd";
import JenkinsPipelinesCaseStudy from "./case-studies/jenkins-pipelines";
import KubernetesDeploymentCaseStudy from "./case-studies/kubernetes-deployment";
import ReleaseManagementCaseStudy from "./case-studies/release-management";
import TerraformIaCCaseStudy from "./case-studies/terraform-iac";
import AppServiceCaseStudy from "./case-studies/app-service";
import AzureActiveDirectoryCaseStudy from "./case-studies/azure-active-directory";
import AzureDevOpsCaseStudy from "./case-studies/azure-devops";
import AzureFunctionsCaseStudy from "./case-studies/azure-functions";
import AzureKubernetesAKSCaseStudy from "./case-studies/azure-kubernetes-aks";
import AzureMonitorCaseStudy from "./case-studies/azure-monitor";
import AzureSQLDatabaseCaseStudy from "./case-studies/azure-sql-database";
import AzureStorageCaseStudy from "./case-studies/azure-storage";
import AzureVirtualMachinesCaseStudy from "./case-studies/azure-virtual-machines";
import ContainerAppsCaseStudy from "./case-studies/container-apps";
import CosmosDBCaseStudy from "./case-studies/cosmos-db";
import InfrastructureAsCodeCaseStudy from "./case-studies/infrastructure-as-code";
import AWSIAMCaseStudy from "./case-studies/aws-iam";
import AWSLambdaCaseStudy from "./case-studies/aws-lambda";
import CloudFrontCDNCaseStudy from "./case-studies/cloudfront-cdn";
import CloudWatchCaseStudy from "./case-studies/cloudwatch";
import DatabaseMigrationCaseStudy from "./case-studies/database-migration";
import EC2InstancesCaseStudy from "./case-studies/ec2-instances";
import ElasticKubernetesEKSCaseStudy from "./case-studies/elastic-kubernetes-eks";
import LoadBalancingCaseStudy from "./case-studies/load-balancing";
import S3StorageCaseStudy from "./case-studies/s3-storage";
import VPCNetworkingCaseStudy from "./case-studies/vpc-networking";
import BigQueryCaseStudy from "./case-studies/bigquery";
import CloudArmorCaseStudy from "./case-studies/cloud-armor";
import CloudFunctionsCaseStudy from "./case-studies/cloud-functions";
import CloudRunCaseStudy from "./case-studies/cloud-run";
import CloudSQLCaseStudy from "./case-studies/cloud-sql";
import CloudStorageCaseStudy from "./case-studies/cloud-storage";
import ComputeEngineCaseStudy from "./case-studies/compute-engine";
import DataPipelineCaseStudy from "./case-studies/data-pipeline";
import GoogleKubernetesGKECaseStudy from "./case-studies/google-kubernetes-gke";
import MultiCloudIntegrationCaseStudy from "./case-studies/multi-cloud-integration";
import PubSubMessagingCaseStudy from "./case-studies/pub-sub-messaging";
import VertexAICaseStudy from "./case-studies/vertex-ai";

const CLOUD_COMPONENT_MAP: Record<string, React.ComponentType> = {
	"amazon-rds": AmazonRDSCaseStudy,
	"ansible-automation": AnsibleAutomationCaseStudy,
	"argocd-gitops": ArgoCDGitOpsCaseStudy,
	"artifact-registry": ArtifactRegistryCaseStudy,
	"docker-builds": DockerBuildsCaseStudy,
	"github-actions": GitHubActionsCaseStudy,
	"gitlab-ci-cd": GitLabCaseStudy,
	"jenkins-pipelines": JenkinsPipelinesCaseStudy,
	"kubernetes-deployment": KubernetesDeploymentCaseStudy,
	"release-management": ReleaseManagementCaseStudy,
	"terraform-iac": TerraformIaCCaseStudy,
	"app-service": AppServiceCaseStudy,
	"azure-active-directory": AzureActiveDirectoryCaseStudy,
	"azure-devops": AzureDevOpsCaseStudy,
	"azure-functions": AzureFunctionsCaseStudy,
	"azure-kubernetes-aks": AzureKubernetesAKSCaseStudy,
	"azure-monitor": AzureMonitorCaseStudy,
	"azure-sql-database": AzureSQLDatabaseCaseStudy,
	"azure-storage": AzureStorageCaseStudy,
	"azure-virtual-machines": AzureVirtualMachinesCaseStudy,
	"container-apps": ContainerAppsCaseStudy,
	"cosmos-db": CosmosDBCaseStudy,
	"infrastructure-as-code": InfrastructureAsCodeCaseStudy,
	"automated-testing": AutomatedTestingCaseStudy,
	"code-quality-gates": CodeQualityGatesCaseStudy,
	"auto-scaling": AutoScalingCaseStudy,
	"aws-iam": AWSIAMCaseStudy,
	"aws-lambda": AWSLambdaCaseStudy,
	"cloudfront-cdn": CloudFrontCDNCaseStudy,
	"cloudwatch": CloudWatchCaseStudy,
	"database-migration": DatabaseMigrationCaseStudy,
	"ec2-instances": EC2InstancesCaseStudy,
	"elastic-kubernetes-eks": ElasticKubernetesEKSCaseStudy,
	"load-balancing": LoadBalancingCaseStudy,
	"s3-storage": S3StorageCaseStudy,
	"vpc-networking": VPCNetworkingCaseStudy,
	"bigquery": BigQueryCaseStudy,
	"cloud-armor": CloudArmorCaseStudy,
	"cloud-functions": CloudFunctionsCaseStudy,
	"cloud-run": CloudRunCaseStudy,
	"cloud-sql": CloudSQLCaseStudy,
	"cloud-storage": CloudStorageCaseStudy,
	"compute-engine": ComputeEngineCaseStudy,
	"data-pipeline": DataPipelineCaseStudy,
	"google-kubernetes-gke": GoogleKubernetesGKECaseStudy,
	"multi-cloud-integration": MultiCloudIntegrationCaseStudy,
	"pub-sub-messaging": PubSubMessagingCaseStudy,
	"vertex-ai": VertexAICaseStudy,
};

export default function ServicesCloudPlatformDetail() {
	return (
		<ServiceDetailsSwitcher
			componentMap={CLOUD_COMPONENT_MAP}
			fallbackPath="/services/cloud-platform"
		/>
	);
}
