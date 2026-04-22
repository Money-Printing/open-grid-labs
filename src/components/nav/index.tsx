import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import Button from "../ui/button";
import { Link, useLocation, useNavigate } from "react-router";
import { AnimatePresence } from "motion/react";
import ButtonLink from "../ui/button-link.tsx/index.tsx"; // Actually I just put button-link.tsx back previously
import ServiceCard from "../service-card/index.tsx";
import Logo from "../../icons/logo/index.tsx";

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
			{ title: "Software", desc: "Modern web apps", href: '/services/software' },
			{ title: "Intelligent", desc: "AI Solutions", href: '/services/intelligent' },
			{ title: "Design", desc: "Visual identity", href: '/services/design' },
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

const Nav = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openMenu, setOpenMenu] = useState<string | null>(null);
	const [openAccordion, setOpenAccordion] = useState<string | null>(null);
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { scrollY } = useScroll()

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
						? "glass-panel bg-card/80 border-b border-white/10 backdrop-blur-xl"
						: "bg-background/20 backdrop-blur-md border-b border-white/5"
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

							<div className="hidden md:flex items-center gap-8 relative">
								{navItems.map((item, index) => (
									<motion.div
										key={item.name}
										onMouseEnter={() => (item.dropdown ? setOpenMenu(item.name) : setOpenMenu(null))}
									>
										<motion.button
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.3 + index * 0.1 }}
											className={`flex gap-1 items-center text-muted-foreground hover:text-white hover:text-shadow-glow font-medium cursor-pointer transition-all ${pathname.startsWith(item.href ?? 'none') ? 'text-primary bg-primary/10 px-4 py-2 rounded-full shadow-[inset_0_0_10px_hsla(210,100%,50%,0.2)]' : 'px-4 py-2'}`}
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
								
								<div className="ml-4">
									<Button
										onClick={() => handleNavigate('/contact-us')}
										className="h-10 px-6 rounded-full"
									>
										Contact
									</Button>
								</div>
							</div>

							<button
								className="md:hidden text-foreground cursor-pointer z-50 p-2 hover:bg-white/5 rounded-full transition-colors"
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							>
								{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
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
                   rounded-2xl border border-white/10 shadow-2xl"
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
							className="fixed top-0 right-0 h-full w-[85%] max-w-sm glass-panel border-l border-white/10 p-6 z-50 md:hidden overflow-y-auto shadow-2xl"
						>
							<div className="flex justify-end mt-4 mb-8">
                                {/* Close button is already handled in header via z-index, but we add a safety fallback */}
							</div>

							<div className="flex flex-col gap-4 mt-8">
								{navItems.map((item, i) => (
									<motion.div 
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                        key={item.name} 
                                        className="flex flex-col border-b border-white/5 pb-4 last:border-0"
                                    >
										<button
											className={`text-muted-foreground hover:text-white text-left font-display text-2xl font-semibold flex justify-between items-center w-full py-2 cursor-pointer transition-all ${pathname.startsWith(item.href ?? 'none') ? 'text-primary' : ''}`}
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
