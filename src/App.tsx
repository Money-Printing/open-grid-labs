import { Navigate, Route, Routes } from "react-router"
import Home from "./pages/home"
import Work from "./pages/work"
import ProjectDetails from "./pages/work/project-details"
import MainLayout from "./layouts/main"
import Clients from "./pages/clients"
import ServicesProductEngineering from "./pages/services/product-engineering"
import ServicesAIData from "./pages/services/ai-data"
import ServicesAIDataDetail from "./pages/services/ai-data/service-details"
import ServicesCloudPlatform from "./pages/services/cloud-platform"
import ServicesLegacyModernization from "./pages/services/legacy-modernization"
import ServicesDigitalExperience from "./pages/services/digital-experience"
import AboutUs from "./pages/about/about-us"
import Team from "./pages/about/team"
import Career from "./pages/about/career"
import ContactUs from "./pages/contact-us"
import NotFound from "./pages/NotFound"
import PrivacyPolicy from "./pages/privacy-policy"
import TermsOfUse from "./pages/terms-of-use"

function App() {
	return (
		<div className="bg-background text-foreground min-h-screen">
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="work">
						<Route index element={<Work />} />
						<Route path=":projectId" element={<ProjectDetails />} />
					</Route>
					<Route path="clients" element={<Clients />} />
					<Route path="services">
						<Route index element={<Navigate to="/services/ai-data" replace />} />
						<Route index path="product-engineering" element={<ServicesProductEngineering />} />
						<Route index path="ai-data" element={<ServicesAIData />} />
						<Route path="ai-data/:serviceId" element={<ServicesAIDataDetail />} />
						<Route index path="cloud-platform" element={<ServicesCloudPlatform />} />
						<Route index path="legacy-modernization" element={<ServicesLegacyModernization />} />
						<Route index path="digital-experience" element={<ServicesDigitalExperience />} />
					</Route>
					<Route path="about">
						<Route index element={<Navigate to="/about/about-us" replace />} />
						<Route index path="about-us" element={<AboutUs />} />
						<Route index path="team" element={<Team />} />
						<Route index path="career" element={<Career />} />
					</Route>
					<Route path="contact-us" element={<ContactUs />} />
					<Route path="privacy-policy" element={<PrivacyPolicy />} />
					<Route path="terms-of-use" element={<TermsOfUse />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
