import { brands } from "../../components/hero";
import PageHeading from "../../components/page-heading";
import PageHeading2 from "../../components/page-heading-2";
import PageTitle from "../../components/page-title";
import SEO from "../../components/seo";
import HomeTestimonials from "../home/components/testimonials";
import ClientsExpertise from "./components/clients-expertise";

export default function Clients() {
	return (
		<>
			<SEO
				title="Our Clients - Trusted Partners & Testimonials"
				description="OpenGridLabs proudly partners with leading brands like Morphle Labs, Galen Data, ETG Commodities, NPCI, and United Health Group. See our client success stories and testimonials."
				canonical="/clients"
				keywords="OpenGridLabs clients, technology partners, client testimonials, healthcare clients, fintech clients, enterprise clients"
			/>
			<PageTitle
				label="Our Clients"
				mainTitle="Trusted"
				subTitle="Partners"
				description="We proudly collaborate with diverse clients worldwide, delivering tailored digital solutions that foster trust, long-term partnerships, and measurable business success."
			/>

			<div className="relative py-20 px-4 md:px-8 w-[90%] max-w-[1400px] mx-auto">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[120px] pointer-events-none" />
				<PageHeading
					preTitle="Trusted"
					mainTitle="Leading"
					postTitle="Brands"
				/>

				<div className='w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 relative z-10'>
					{
						brands.map((b, i) => (
							<div key={i} className='glass-panel border border-white/5 rounded-3xl px-8 py-10 flex items-center justify-center hover:border-primary/40 hover:shadow-[0_0_20px_hsla(210,100%,50%,0.15)] transition-all duration-300 group overflow-hidden relative'>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
								<img src={b.href} alt={b.alt} className='w-auto h-12 md:h-16 object-contain filter grayscale group-hover:grayscale-0 brightness-200 group-hover:brightness-100 transition-all duration-500 scale-95 group-hover:scale-105' />
							</div>
						))
					}
				</div>
			</div>

			<HomeTestimonials
				preTitle="Happy Clients With 50+"
				mainTitle="Successful Projects."
			/>

			<div className="w-[90%] max-w-[1400px] mx-auto px-4 w-full py-20">
				<PageHeading2
					preTitle="Industries We Have"
					mainTitle="Successfully Worked In"
				/>

				<ClientsExpertise />
			</div>
		</>
	)
}
