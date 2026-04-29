import { motion } from "motion/react";
import SEO from "../../components/seo";
import PageHeading2 from "../../components/page-heading-2";
import HomeTestimonials from "../home/components/testimonials";
import ClientsExpertise from "./components/clients-expertise";
import ClientsHero from "./components/clients-hero";

export default function Clients() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="min-h-screen bg-background overflow-hidden"
		>
			<SEO
				title="Our Clients - Trusted Partners & Testimonials | OpenGridLabs"
				description="OpenGridLabs proudly partners with leading brands worldwide. Explore our immersive network of clients, success stories, and testimonials."
				canonical="/clients"
				keywords="OpenGridLabs clients, technology partners, client testimonials, 3D agency clients, software agency partners"
			/>
			
			<ClientsHero />

			{/* Testimonials Section */}
			<div className="relative z-10 w-[90%] max-w-[1600px] mx-auto mt-20">
				<HomeTestimonials />
			</div>

			{/* Industries Expertise Section */}
			<div className="relative z-10 w-[90%] max-w-[1600px] mx-auto px-4 py-32">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<PageHeading2
						preTitle="Domain Expertise"
						mainTitle="Industries We Transform"
					/>
				</motion.div>

				<ClientsExpertise />
			</div>
		</motion.div>
	);
}
