import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid2X2, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { socialLinks } from "../../../../components/footer";


type ContactCardProps = {
	icon: ReactNode
	label: string
	children?: ReactNode
	items: string[]
	href?: string
	hrefItemIdx?: number
}

function ContactCard({
	icon,
	label,
	children,
	items,
	href,
	hrefItemIdx
}: ContactCardProps) {
	return (
		<div className="flex flex-col gap-6 p-8 glass-panel border border-white/5 rounded-3xl group hover:border-primary/30 hover:shadow-[0_0_25px_hsla(210,100%,50%,0.15)] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
			<div className="p-4 rounded-xl bg-white/5 border border-white/10 w-fit text-primary group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors shadow-inner relative z-10">
				{icon}
			</div>
			<h3 className="text-2xl md:text-3xl font-display font-semibold text-white group-hover:text-primary transition-colors relative z-10">{label}</h3>
			<div className="flex flex-col gap-3 relative z-10">
				{
					items.map((item, i) => (
						(href && hrefItemIdx == i) ? (
							<div key={i}>
								<a href={href} target="_blank" rel="noopener noreferrer" className="inline text-lg md:text-xl text-primary/80 font-mono hover:text-primary transition-colors">{item}</a>
							</div>
						) : (
							<p key={i} className={`text-lg md:text-xl text-muted-foreground font-medium ${!href && 'group-hover:text-white/80'} transition-colors`}>{item}</p>
						)
					))
				}
			</div>
			<div className="mt-auto relative z-10">
                {children}
            </div>
		</div>
	)
}

export default function ContactInfo() {
	return (
		<div className="w-full grid md:grid-cols-2 gap-8 mt-16 text-left">

			<ContactCard
				icon={<MapPin size={28} />}
				label="Our Location"
				items={[
					"New Delhi, India",
					"New York, USA",
					"Alberta, Canada",
					"London, UK",
					"Munich, Germany"
				]}
			/>

			<ContactCard
				icon={<Mail size={28} />}
				label="Email"
				items={['Reach us via email for inquiries', 'priyanshu@opengridlabs.com']}
				href="mailto:priyanshu@opengridlabs.com"
				hrefItemIdx={1}
			/>

			<ContactCard
				icon={<FontAwesomeIcon icon={faWhatsapp} size={'xl'} />}
				label="WhatsApp"
				items={['+1 315 908 7303']}
				href={'https://wa.me/13159087303'}
				hrefItemIdx={0}
			/>

			<ContactCard
				icon={<Grid2X2 size={28} />}
				label="Social Media"
				items={['Connect with us']}
			>
				<div className="flex items-center gap-4 mt-2">
					{socialLinks.map((link, i) => (
						<a key={i} href={link.href} target="_blank" rel="noreferrer" className="text-white hover:text-primary border border-white/10 hover:border-primary/50 transition-all bg-white/5 hover:bg-primary/20 rounded-full p-3 shadow-inner">
							{link.icon}
						</a>
					))}
				</div>
			</ContactCard>
		</div>
	);
}
