import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "motion/react"
import Button from "../ui/button";
import { Link, useLocation, useNavigate } from "react-router";
import { AnimatePresence } from "motion/react";
import ServiceCard from "../service-card/index.tsx";
import Logo from "../../icons/logo/index.tsx";
import { useTheme } from "../../context/theme-provider";

export type NavItemDropdownType = {
	title: string
	desc: string
	href: string
}

const navItems = [
	{ name: "Work", href: "/work" },
	{
		name: "Services", href: "/services",
		dropdown: [
			{ title: "Product Engineering", desc: "Scalable SaaS & Platforms", href: '/services/product-engineering' },
			{ title: "AI & Data Intelligence", desc: "GenAI & Predictive Models", href: '/services/ai-data' },
			{ title: "Cloud Platform & Services", desc: "AWS, Azure , DevOps & CI CD", href: '/services/cloud-platform' },
			{ title: "Legacy Modernization", desc: "Tech Debt & Migration", href: '/services/legacy-modernization' },
			{ title: "Digital Experience", desc: "Modern UI & Performance", href: '/services/digital-experience' },
		],
	},
	{ name: "Clients", href: "/clients" },
	{
		name: "About", href: "/about",
		dropdown: [
			{ title: "About Us", desc: "How we started", href: '/about/about-us' },
			{ title: "Our Team", desc: "Meet our members", href: '/about/team' },
			{ title: "Career", desc: "Values & vision", href: '/about/career' },
		],
	},
];

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors mr-2 md:mr-0 flex items-center justify-center text-foreground cursor-pointer"
            aria-label="Toggle Theme"
        >
            <Sun className={`w-5 h-5 transition-all duration-300 ${isDark ? 'scale-0 -rotate-90 opacity-0 absolute' : 'scale-100 rotate-0 opacity-100'}`} />
            <Moon className={`w-5 h-5 transition-all duration-300 ${isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0 absolute'}`} />
        </button>
    );
};

const Nav = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openMenu, setOpenMenu] = useState<string | null>(null);
	const [openAccordion, setOpenAccordion] = useState<string | null>(null);
	const { pathname } = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 150);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	function handleNavigate(href: string) {
		setOpenAccordion(null)
		setIsMobileMenuOpen(false)
		navigate(href)
	}

	useEffect(() => {
		setOpenAccordion(null)
		setOpenMenu(null)
		setIsMobileMenuOpen(false)
	}, [pathname])

	return (
		<header>
			<motion.nav
				aria-label="Main navigation"
				className="fixed top-0 left-0 z-50 w-full"
			>
				<div
					className={`relative transition-all duration-500 shadow-lg ${isScrolled
						? "glass-panel bg-card/80 border-b border-white/10 dark:border-transparent backdrop-blur-xl"
						: "bg-background/20 backdrop-blur-md border-b border-black/5 dark:border-transparent"
						}`}
				>
					<div className="px-6 py-4 w-[90%] max-w-[1600px] mx-auto">
						<div className="flex items-center justify-between">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
								className="text-2xl font-display font-bold tracking-tight z-50"
							>
								<Link to={'/'} className="hover:opacity-80 transition-opacity">
									<Logo />
								</Link>
							</motion.div>

							<div className="hidden md:flex items-center gap-6 relative">
								{navItems.map((item, index) => (
									<motion.div
										key={item.name}
										onMouseEnter={() => (item.dropdown ? setOpenMenu(item.name) : setOpenMenu(null))}
									>
										<motion.button
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.3 + index * 0.1 }}
											className={`flex gap-1 items-center text-muted-foreground hover:text-foreground hover:text-shadow-glow font-medium cursor-pointer transition-all ${pathname.startsWith(item.href ?? 'none') ? 'text-primary bg-primary/10 px-4 py-2 rounded-full shadow-[inset_0_0_10px_hsla(210,100%,50%,0.2)]' : 'px-4 py-2'}`}
										>
											{
												item.dropdown ? (<span>{item.name}</span>) : (
													<Link to={item.href}>
														{item.name}
													</Link>
												)
											}
											{
												item.dropdown && (
													<ChevronDown size={20} className={`${openMenu === item.name ? 'rotate-180' : ''} transition-transform duration-300`} />
												)
											}
										</motion.button>
									</motion.div>
								))}
								
								<div className="ml-4 flex items-center gap-4">
                                    <ThemeToggle />
									<Button
										onClick={() => handleNavigate('/contact-us')}
										className="h-10 px-6 rounded-full"
									>
										Contact
									</Button>
								</div>
							</div>

                            <div className="flex items-center md:hidden z-50">
                                <ThemeToggle />
                                <button
                                    className="text-foreground cursor-pointer p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
						</div>
					</div>

				</div>
			</motion.nav>

			<AnimatePresence>
				{openMenu && (
					<motion.div
						initial={{ opacity: 0, y: -10, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -10, scale: 0.95 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="fixed left-1/2 -translate-x-1/2 top-[106px]
                   w-[95%] w-[90%] max-w-[1200px] z-40
                   flex gap-6 glass-panel p-6
                   rounded-2xl border border-black/10 dark:border-transparent shadow-2xl"
						onMouseLeave={() => setOpenMenu(null)}
					>
						{navItems.find(n => n.name === openMenu)?.dropdown?.map(card => (
							<ServiceCard key={card.href} link={card.href} name={card.title} description={card.desc} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{isMobileMenuOpen && (
					<>
						<motion.div
							key="backdrop"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-background/80 backdrop-blur-xl md:hidden z-40"
							onClick={() => setIsMobileMenuOpen(false)}
						/>

						<motion.div
							key="sidebar"
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 200 }}
							className="fixed top-0 right-0 h-full w-[85%] max-w-sm glass-panel border-l border-black/10 dark:border-transparent p-6 z-50 md:hidden overflow-y-auto shadow-2xl"
						>
							<div className="flex justify-end mt-4 mb-8">
							</div>

							<div className="flex flex-col gap-4 mt-8">
								{navItems.map((item, i) => (
									<motion.div 
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                        key={item.name} 
                                        className="flex flex-col border-b border-black/5 dark:border-transparent pb-4 last:border-0"
                                    >
										<button
											className={`text-muted-foreground hover:text-foreground text-left font-display text-2xl font-semibold flex justify-between items-center w-full py-2 cursor-pointer transition-all ${pathname.startsWith(item.href ?? 'none') ? 'text-primary' : ''}`}
											onClick={() =>
												item.dropdown
													? setOpenAccordion(openAccordion === item.name ? null : item.name)
													: handleNavigate(item.href!)
											}
										>
											{item.name}
											{item.dropdown && <ChevronDown size={24} className={`${openAccordion === item.name ? 'rotate-180 text-primary' : ''} transition-all duration-300`} />}
										</button>

										<AnimatePresence>
											{item.dropdown && openAccordion === item.name && (
												<motion.div
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: "auto", opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													transition={{ duration: 0.3, ease: "easeInOut" }}
													className="flex flex-col ml-4 mt-4 gap-4 overflow-hidden"
												>
													{item.dropdown.map((sub) => (
														<ServiceCard key={sub.href} link={sub.href} name={sub.title} description={sub.desc} />
													))}
												</motion.div>
											)}
										</AnimatePresence>
									</motion.div>
								))}

								<motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-12"
                                >
                                    <Button
                                        onClick={() => handleNavigate('/contact-us')}
                                        className="w-full text-lg py-6"
                                    >
                                        Get in Touch
                                    </Button>
                                </motion.div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</header>

	);
};

export default Nav;
