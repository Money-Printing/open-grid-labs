import ServiceDetailsSwitcher from "../../../components/service-details-switcher";

import AgenticAICaseStudy from "./case-studies/agentic-ai";
import AIPerformanceMonitoringCaseStudy from "./case-studies/ai-performance-monitoring";
import CustomAISolutionsCaseStudy from "./case-studies/custom-ai-solutions";
import RAGImplementationCaseStudy from "./case-studies/rag-implementation";
import AIIntegrationServicesCaseStudy from "./case-studies/ai-integration-services";
import LargeLanguageModelsCaseStudy from "./case-studies/large-language-models";
import AIModelFineTuningCaseStudy from "./case-studies/ai-model-fine-tuning";
import AIEthicsGovernanceCaseStudy from "./case-studies/ai-ethics-governance";
import AIStrategyConsultingCaseStudy from "./case-studies/ai-strategy-consulting";
import ExplainableAICaseStudy from "./case-studies/explainable-ai";
import PromptEngineeringCaseStudy from "./case-studies/prompt-engineering";
import TimeSeriesForecastingCaseStudy from "./case-studies/time-series-forecasting";
import ModelOptimizationCaseStudy from "./case-studies/model-optimization";
import FeatureEngineeringCaseStudy from "./case-studies/feature-engineering";
import AutoMLSolutionsCaseStudy from "./case-studies/automl-solutions";
import ABTestingMLCaseStudy from "./case-studies/a-b-testing-ml";
import MLOpsPipelineCaseStudy from "./case-studies/mlops-pipeline";
import ChatbotsVirtualAssistantsCaseStudy from "./case-studies/chatbots-virtual-assistants";
import ContentGenerationCaseStudy from "./case-studies/content-generation";
import IntentRecognitionCaseStudy from "./case-studies/intent-recognition";
import LanguageTranslationCaseStudy from "./case-studies/language-translation";
import NamedEntityRecognitionCaseStudy from "./case-studies/named-entity-recognition";
import QuestionAnsweringCaseStudy from "./case-studies/question-answering";
import SentimentAnalysisCaseStudy from "./case-studies/sentiment-analysis";
import SpeechRecognitionCaseStudy from "./case-studies/speech-recognition";
import TextAnalyticsCaseStudy from "./case-studies/text-analytics";
import TextSummarizationCaseStudy from "./case-studies/text-summarization";
import TopicModelingCaseStudy from "./case-studies/topic-modeling";
import VoiceSynthesisCaseStudy from "./case-studies/voice-synthesis";
import NeuralNetworksCaseStudy from "./case-studies/neural-networks";
import ObjectDetectionCaseStudy from "./case-studies/object-detection";
import OCRSolutionsCaseStudy from "./case-studies/ocr-solutions";
import RNNLSTMCaseStudy from "./case-studies/rnn-lstm";
import StyleTransferCaseStudy from "./case-studies/style-transfer";
import TransferLearningCaseStudy from "./case-studies/transfer-learning";
import VideoAnalyticsCaseStudy from "./case-studies/video-analytics";
import PredictiveModelingCaseStudy from "./case-studies/predictive-modeling";
import ClassificationSystemsCaseStudy from "./case-studies/classification-systems";
import AnomalyDetectionCaseStudy from "./case-studies/anomaly-detection";
import ClusteringAlgorithmsCaseStudy from "./case-studies/clustering-algorithms";
import RecommendationEnginesCaseStudy from "./case-studies/recommendation-engines";
import RegressionAnalysisCaseStudy from "./case-studies/regression-analysis";
import CNNModelsCaseStudy from "./case-studies/cnn-models";
import FaceRecognitionCaseStudy from "./case-studies/face-recognition";
import GenerativeAICaseStudy from "./case-studies/generative-ai";
import ImageRecognitionCaseStudy from "./case-studies/image-recognition";
import VoiceToTextConverterCaseStudy from "./case-studies/voice-to-text-converter";



const AIDATA_COMPONENT_MAP: Record<string, React.ComponentType> = {
	"agentic-ai": AgenticAICaseStudy,
	"rag-implementation": RAGImplementationCaseStudy,
	"mlops-pipeline": MLOpsPipelineCaseStudy,
	"voice-to-text-converter": VoiceToTextConverterCaseStudy,
	"custom-ai-solutions": CustomAISolutionsCaseStudy,
	"ai-performance-monitoring": AIPerformanceMonitoringCaseStudy,
	"ai-integration-services": AIIntegrationServicesCaseStudy,
	"large-language-models": LargeLanguageModelsCaseStudy,
	"ai-model-fine-tuning": AIModelFineTuningCaseStudy,
	"ai-ethics-governance": AIEthicsGovernanceCaseStudy,
	"ai-strategy-consulting": AIStrategyConsultingCaseStudy,
	"explainable-ai": ExplainableAICaseStudy,
	"prompt-engineering": PromptEngineeringCaseStudy,
	"time-series-forecasting": TimeSeriesForecastingCaseStudy,
	"model-optimization": ModelOptimizationCaseStudy,
	"feature-engineering": FeatureEngineeringCaseStudy,
	"automl-solutions": AutoMLSolutionsCaseStudy,
	"a-b-testing-ml": ABTestingMLCaseStudy,
	"chatbots-virtual-assistants": ChatbotsVirtualAssistantsCaseStudy,
	"content-generation": ContentGenerationCaseStudy,
	"intent-recognition": IntentRecognitionCaseStudy,
	"language-translation": LanguageTranslationCaseStudy,
	"named-entity-recognition": NamedEntityRecognitionCaseStudy,
	"question-answering": QuestionAnsweringCaseStudy,
	"sentiment-analysis": SentimentAnalysisCaseStudy,
	"speech-recognition": SpeechRecognitionCaseStudy,
	"text-analytics": TextAnalyticsCaseStudy,
	"text-summarization": TextSummarizationCaseStudy,
	"topic-modeling": TopicModelingCaseStudy,
	"voice-synthesis": VoiceSynthesisCaseStudy,
	"neural-networks": NeuralNetworksCaseStudy,
	"object-detection": ObjectDetectionCaseStudy,
	"ocr-solutions": OCRSolutionsCaseStudy,
	"rnn-lstm": RNNLSTMCaseStudy,
	"style-transfer": StyleTransferCaseStudy,
	"transfer-learning": TransferLearningCaseStudy,
	"video-analytics": VideoAnalyticsCaseStudy,
	"predictive-modeling": PredictiveModelingCaseStudy,
	"classification-systems": ClassificationSystemsCaseStudy,
	"anomaly-detection": AnomalyDetectionCaseStudy,
	"clustering-algorithms": ClusteringAlgorithmsCaseStudy,
	"recommendation-engines": RecommendationEnginesCaseStudy,
	"regression-analysis": RegressionAnalysisCaseStudy,
	"cnn-models": CNNModelsCaseStudy,
	"face-recognition": FaceRecognitionCaseStudy,
	"generative-ai": GenerativeAICaseStudy,
	"image-recognition": ImageRecognitionCaseStudy,
};

export default function ServicesAIDataDetail() {
	return (
		<ServiceDetailsSwitcher
			componentMap={AIDATA_COMPONENT_MAP}
			fallbackPath="/services/ai-data"
		/>
	);
}
