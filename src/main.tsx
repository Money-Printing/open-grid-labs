import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import ScrollToTop from './components/scroll-to-top/index.tsx'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/theme-provider'

createRoot(document.getElementById('root')!).render(
	<HelmetProvider>
		<ThemeProvider defaultTheme="system" storageKey="opengridlabs-theme">
			<BrowserRouter>
				<ScrollToTop />
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</HelmetProvider>
)
