import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import { Outlet } from "react-router";
import Spacer from "../../components/spacer";
import { ToastContainer } from 'react-toastify';

export default function MainLayout() {
	//const { pathname } = useLocation();
	//const isHome = pathname === "/";

	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col items-center overflow-x-clip">
			<Nav />
			<div className="w-full">
				<Spacer />
				<div className="mx-auto flex flex-col gap-24 pt-4 w-full">
					<Outlet />
					<div className="w-[90%] max-w-[1600px] mx-auto">
						<Contact />
					</div>
				</div>
			</div>
			<div className="w-full md:border-t mt-12 md:mt-24 border-border">
				<div className="w-[90%] max-w-[1600px] mx-auto">
					<Footer />
				</div>
			</div>
			<ToastContainer />
		</div>
	)
}
