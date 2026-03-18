import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router"

const SITE_NAME = "OpenGridLabs"
const SITE_URL = "https://opengridlabs.com"
const DEFAULT_TITLE = "OpenGridLabs | Software, AI, Cloud & Product Engineering"
const DEFAULT_DESCRIPTION = "OpenGridLabs builds scalable software, intelligent systems, and digital products for startups and enterprises."
const DEFAULT_IMAGE = `${SITE_URL}/images/logo_light.svg`

const routeMeta: Record<string, { title: string; description: string }> = {
	"/": {
		title: "OpenGridLabs | Software, AI, Cloud & Product Engineering",
		description:
			"OpenGridLabs delivers software engineering, AI integration, cloud architecture, and product design services for modern businesses.",
	},
	"/work": {
		title: "Our Work | OpenGridLabs",
		description:
			"Explore OpenGridLabs project case studies across AI, software platforms, digital products, and enterprise solutions.",
	},
	"/clients": {
		title: "Clients | OpenGridLabs",
		description:
			"See the companies and teams that trust OpenGridLabs for software delivery, product innovation, and technology consulting.",
	},
	"/services/software": {
		title: "Software Development Services | OpenGridLabs",
		description:
			"Custom software development services including web apps, backend systems, APIs, and scalable engineering delivery.",
	},
	"/services/intelligent": {
		title: "AI & Intelligent Systems Services | OpenGridLabs",
		description:
			"Build intelligent products with AI strategy, model integration, automation workflows, and data-driven engineering.",
	},
	"/services/design": {
		title: "Product & UX Design Services | OpenGridLabs",
		description:
			"Design user-centric digital products with OpenGridLabs through UX research, interaction design, and product thinking.",
	},
	"/about/about-us": {
		title: "About Us | OpenGridLabs",
		description:
			"Learn about OpenGridLabs, our mission, values, and approach to building high-impact software and digital experiences.",
	},
	"/about/team": {
		title: "Our Team | OpenGridLabs",
		description:
			"Meet the OpenGridLabs team of engineers, designers, and product specialists driving innovation for our clients.",
	},
	"/about/career": {
		title: "Careers | OpenGridLabs",
		description:
			"Join OpenGridLabs and build meaningful software products with a collaborative team focused on quality and impact.",
	},
	"/contact-us": {
		title: "Contact OpenGridLabs",
		description:
			"Talk to OpenGridLabs about your software, AI, cloud, or product idea. Get in touch to start your next build.",
	},
	"/privacy-policy": {
		title: "Privacy Policy | OpenGridLabs",
		description: "Read the OpenGridLabs privacy policy and how we collect, use, and protect user and client information.",
	},
	"/terms-of-use": {
		title: "Terms of Use | OpenGridLabs",
		description: "Review the terms of use for OpenGridLabs website services and digital content.",
	},
}

const getPageMeta = (pathname: string) => {
	if (pathname.startsWith("/work/") && pathname !== "/work") {
		return {
			title: "Project Details | OpenGridLabs",
			description: "Read this OpenGridLabs case study, including challenge, solution, and measurable project outcomes.",
		}
	}

	if (pathname === "/about") {
		return routeMeta["/about/about-us"]
	}

	if (pathname === "/services") {
		return routeMeta["/services/software"]
	}

	return routeMeta[pathname] ?? { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION }
}

export default function Seo() {
	const { pathname } = useLocation()
	const page = getPageMeta(pathname)
	const canonical = `${SITE_URL}${pathname === "/" ? "" : pathname}`

	const organizationJsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: SITE_NAME,
		url: SITE_URL,
		logo: `${SITE_URL}/images/logo_light.svg`,
		sameAs: ["https://www.linkedin.com/company/opengridlabs"],
	}

	const websiteJsonLd = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE_NAME,
		url: SITE_URL,
	}

	return (
		<Helmet>
			<title>{page.title}</title>
			<meta name="description" content={page.description} />
			<link rel="canonical" href={canonical} />

			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:title" content={page.title} />
			<meta property="og:description" content={page.description} />
			<meta property="og:url" content={canonical} />
			<meta property="og:image" content={DEFAULT_IMAGE} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={page.title} />
			<meta name="twitter:description" content={page.description} />
			<meta name="twitter:image" content={DEFAULT_IMAGE} />

			<script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
			<script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
		</Helmet>
	)
}