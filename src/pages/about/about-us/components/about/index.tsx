import PageHeading2 from "../../../../../components/page-heading-2";

const aboutData = [
	{
		parts: [
			{ text: "We are dedicated to " },
			{ text: "innovating digital solutions", bold: true },
			{ text: " that help businesses achieve " },
			{ text: "efficiency, growth, and impact", bold: true },
			{ text: " through modern technology and smart strategies." },
		],
	},
	{
		parts: [
			{ text: "Our team of " },
			{ text: "skilled professionals", bold: true },
			{ text: " works closely with clients to deliver " },
			{ text: "scalable, reliable, and future-ready products", bold: true },
			{ text: " that meet evolving business challenges and opportunities." },
		],
	},
	{
		parts: [
			{ text: "We focus on " },
			{ text: "user-centric design, cutting-edge development", bold: true },
			{ text: ", and " },
			{ text: "continuous innovation", bold: true },
			{ text: " to create solutions that empower organizations in a rapidly changing digital world." },
		],
	},
];

type AboutText = {
	parts: { text: string; bold?: boolean }[];
};

const AboutParagraph = ({ parts }: AboutText) => {
	return (
		<p className="md:text-3xl text-xl leading-relaxed mt-10">
			{parts.map((part, idx) => (
				<span
					key={idx}
					className={part.bold ? "font-bold text-foreground drop-shadow-lg dark:shadow-[0_0_10px_rgba(255,255,255,0.3)]" : "font-medium text-muted-foreground"}
				>
					{part.text}
				</span>
			))}
		</p>
	);
};

const About = () => {
	return (
		<section
			id="about-us-about"
			className="w-full flex flex-col relative py-20 px-4 md:px-10 glass-panel rounded-3xl mt-12 overflow-hidden border border-black/5 dark:border-transparent"
		>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none" />
			<PageHeading2 mainTitle="About" />
            <div className="relative z-10 w-[90%] max-w-[1600px]">
                {aboutData.map((para, idx) => (
                    <AboutParagraph key={idx} parts={para.parts} />
                ))}
            </div>
		</section>
	);
};

export default About;
