import PageHeading from "../../../../components/page-heading";
import ServiceCard from "../../../../components/service-card";


type otherService = {
	name: string
	description: string
	link: string
}

type OtherServicesProps = {
	otherServices: otherService[]
}

export default function OtherServices({otherServices}: OtherServicesProps) {
	return (
		<section id="service-details-other-services" className="w-full flex flex-col relative justify-center text-center py-20">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-[100px] pointer-events-none" />
			<PageHeading
				preTitle="See"
				mainTitle="Other"
				postTitle="Services"
			/>

			<div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6 mt-16 text-left max-w-4xl mx-auto z-10">
				{otherServices.map((service, idx) => (
					<ServiceCard key={idx} link={service.link} name={service.name} description={service.description} />
				))}
			</div>
		</section>
	);
}
