export interface ArchitectureLayer {
	title: string;
	connector?: string;
	items: { name: string; detail?: string }[];
}

export interface ProjectDetail {
	id: string;
	title: string;
	description: string;
	category: string;
	client: string;
	duration: string;
	teamSize?: string;
	technologies: string[];
	overview: string;
	challenges: string[];
	solutions: string[];
	features: string[];
	results: {
		metric: string;
		value: string;
	}[];
	videoUrl?: string;
	galleryImages?: string[];
	galleryImageCaptions?: string[];
	galleryGifs?: string[];
	architecture?: {
		description: string;
		layers: ArchitectureLayer[];
	};
}

export const projectsData: Record<string, ProjectDetail> = {
	"frontend-microscopic-scanner": {
		id: "frontend-microscopic-scanner",
		title: "Morphle Cloud & Scanners",
		description: "A cloud-connected whole-slide imaging platform — renders 100+ GB microscopic scans in-browser, controls robotic scanners, and delivers AI-assisted diagnostic reporting.",
		category: "Medical Technology",
		client: "Morphle Labs",
		duration: "1 Year",
		teamSize: "2 Engineers",
		technologies: ["React", "Django", "OpenLayers", "Redux", "OpenCV", "Docker", "WebSocket", "Redis", "MySQL", "AWS", "GCS"],
		overview: "Built a cloud-connected whole-slide imaging platform for Morphle Labs — a 2D map-based viewer that renders 100+ GB microscopic scans in-browser using OpenLayers pyramid tiling, paired with full robotic scanner hardware control, a real-time collaborative annotation system, an AI-assisted analysis pipeline, and CAP-compliant diagnostic reporting.",
		challenges: [
			"Rendering 100+ GB whole-slide scans in-browser — standard image loading would crash the browser; required pyramid tiling with viewport-aware lazy loading",
			"Building a hardware abstraction layer for robotic scanners — motor stage (X/Y, homing), objective switching (4x–40x), autofocus, Z-stack acquisition, and specimen loader all proxied through Django to Scano's local REST API",
			"Real-time collaborative annotation sync across concurrent users while keeping per-annotation metadata (area, perimeter, bounds, Z-level) consistent",
			"Image stitching pipeline — SURF feature matching between adjacent tiles with CLAHE preprocessing, displacement vector computation, and quality-visualization disagreement heatmaps"
		],
		solutions: [
			"OpenLayers pyramid tiling (256×256 tiles, multi-zoom levels) — only fetches tiles visible in the current viewport, enabling sub-second pan/zoom on 100+ GB scans",
			"Django REST API (150+ endpoints) as central proxy — hardware commands routed to Scano, slide lifecycle managed centrally, low network footprint via relay server pattern with Redis caching",
			"Django Channels + Redis for WebSocket-based collaborative annotation sync, live camera preview polling, scan progress updates, and multi-user display settings sync",
			"SURF feature matching with CLAHE preprocessing → displacement vector computation → recursive pyramid builder with Redis progress tracking and BigTIFF export",
			"Flask relay microservice bridging on-premise scanners to Morphle Cloud (GCS / AWS) — async TIFF conversion, object-hash upload deduplication, and configurable quotas"
		],
		features: [
			"2D map-based whole-slide viewer — OpenLayers pyramid rendering (256×256 tiles) with pan, zoom, rotate, and micron-space measurement grids",
			"GammaViewer (tissue pathology), BloodViewer (hematology + grid-based RBC/platelet analysis), LiveMode (real-time camera preview during scanning)",
			"Full annotation system — polygon, circle, rectangle, freehand, and magic tool on vector layers with area, perimeter, bounds, and Z-level metadata",
			"Hardware interface — motor stage control (X/Y, homing), objective switching (4x–40x), autofocus, Z-stack acquisition, and automated specimen loader management",
			"Image stitching pipeline — SURF feature matching, CLAHE preprocessing, displacement vectors, and disagreement heatmaps for quality visualization",
			"Multi-zoom pyramid tiling engine — recursive downsampling into 256×256 tiles, Redis progress tracking, and BigTIFF export for interoperability",
			"Real-time AI — blur detection (5-grid CLAHE + SURF), blood cell CNN classification, urine sediment analysis, tissue segmentation QC, and DeepBio IHC relay",
			"Cloud integration — Flask relay microservice (async TIFF conversion, object-hash deduplication) bridging on-premise scanners to GCS / AWS S3",
			"CAP-compliant diagnostic reporting — breast cancer protocol templates (DCIS, invasive carcinoma), PDF generation, and case-level access control",
			"Dockerized full stack — Django, MySQL, Redis, custom OpenCV 3.2 build from source; offline (local scanner) and cloud deployment modes"
		],
		results: [
			{ metric: "Revenue Milestone", value: "$1M+" },
			{ metric: "API Endpoints", value: "150+" },
			{ metric: "Scans Managed", value: "14,711+" },
			{ metric: "Zoom Range", value: "4x – 40x" }
		],
		videoUrl: "/videos/microscopic-scanner/scanner.mp4",
		galleryImages: [
			"/images/microscopic-scanner/scannerimage1.png",
			"/images/microscopic-scanner/scannerimage2.png"
		],
		galleryImageCaptions: [
			"Slide Management Dashboard — 14,711 scans browsable by case name, tag, and scan date with thumbnail previews and MFA access controls",
			"Whole-Slide Viewer at 10X — OpenLayers pyramid tile renderer displaying tissue pathology with annotation tools, DeepBio IHC analysis, and measurement panel"
		],
		galleryGifs: [],
		architecture: {
			description: "Multi-tier system: robotic scanners run Scano (Java REST server) on local IP; Django backend proxies all hardware commands and manages slide lifecycle; React SPA renders scans via OpenLayers pyramid tile layers. Image processing pipeline runs server-side — SURF-based stitching computes displacement vectors between adjacent tiles, then the tiling engine builds multi-zoom pyramids (256×256 tiles). Django Channels + Redis handle real-time WebSocket sync for annotations and scan progress. A Flask relay server bridges on-premise scanners to Morphle Cloud (Google Cloud Run gateway) with async TIFF conversion and upload deduplication. AI services run as separate Flask microservices. MySQL stores all metadata, Redis handles caching and task queues, S3/GCS for image storage.",
			layers: [
				{
					title: "Scanner Hardware",
					items: [
						{ name: "Camera", detail: "Exposure · Focus" },
						{ name: "Stage Motors", detail: "X/Y · Homing" },
						{ name: "Objectives", detail: "4x–40x Turret" },
						{ name: "Loader", detail: "Auto Cassette" }
					]
				},
				{
					title: "Scanner Software",
					connector: "HTTP proxy",
					items: [
						{ name: "Scano", detail: "Java REST Server on Local IP" },
						{ name: "Hardware Abstraction", detail: "All commands via HTTP" }
					]
				},
				{
					title: "Django Backend — 150+ Endpoints",
					connector: "raw tiles",
					items: [
						{ name: "Device API", detail: "Proxy to Scano" },
						{ name: "Slide API", detail: "Lifecycle · Status" },
						{ name: "Annotation API", detail: "CRUD · Sync" },
						{ name: "Cloud API", detail: "Upload · Bridge" }
					]
				},
				{
					title: "Image Processing Pipeline",
					items: [
						{ name: "SURF Stitching", detail: "Feature Match · CLAHE" },
						{ name: "Pyramid Tiling", detail: "256×256 · Multi-zoom" },
						{ name: "Z-Stack Merge", detail: "Focus Selection" },
						{ name: "BigTIFF Export", detail: "Interop Format" }
					]
				},
				{
					title: "Real-time & Storage",
					connector: "tile pyramid",
					items: [
						{ name: "Django Channels", detail: "WebSocket · Collab" },
						{ name: "Redis", detail: "Cache · Queue" },
						{ name: "MySQL", detail: "Metadata" },
						{ name: "S3 / GCS", detail: "Image Storage" }
					]
				},
				{
					title: "Frontend",
					items: [
						{ name: "React + Redux + OpenLayers", detail: "SPA · Pyramid Viewer" },
						{ name: "GammaViewer", detail: "Tissue Pathology" },
						{ name: "BloodViewer", detail: "Hematology · RBC/WBC" },
						{ name: "LiveMode", detail: "Real-time Camera Preview" }
					]
				},
				{
					title: "AI Services",
					items: [
						{ name: "Blur Detection", detail: "5-grid CLAHE + SURF" },
						{ name: "Blood Cell CNN", detail: "RBC · WBC · Platelet" },
						{ name: "Tissue Segmentation", detail: "Binary Morphology" },
						{ name: "DeepBio / IHC Relay", detail: "External API Gateway" }
					]
				},
				{
					title: "Cloud Integration",
					connector: "bridge",
					items: [
						{ name: "Relay Server", detail: "Flask · TIFF Convert · Upload" },
						{ name: "Morphle Cloud", detail: "Google Cloud Run Gateway" }
					]
				},
				{
					title: "Reporting",
					items: [
						{ name: "CAP Reports", detail: "DCIS · Invasive · PDF Export" }
					]
				}
			]
		}
	},
	"whale-wallet-tracker": {
		id: "whale-wallet-tracker",
		title: "Jarvis Labs — Whale Wallet Tracker",
		description: "A multi-chain whale wallet tracker covering Bitcoin (top 50), Ethereum (top 100), USDT ERC-20 (top 50), and Bitfinex cold wallets — interactive dashboard with copy-trade P&L and price impact analysis.",
		category: "Blockchain / Analytics",
		client: "Jarvis Labs LLC",
		duration: "Jun 2021 — Dec 2021",
		teamSize: "Solo",
		technologies: ["Python", "Streamlit", "Plotly", "Pandas", "Selenium", "Heroku", "Blockchair API", "Etherscan API", "Santiment API"],
		overview: "Built a multi-chain whale wallet tracker covering Bitcoin (top 50), Ethereum (top 100), USDT ERC-20 (top 50), and Bitfinex cold storage wallets — all in a single interactive Streamlit dashboard. Integrates three blockchain data APIs with anti-detection scraping to extract top wallet lists, then overlays whale transactions on price history with copy-trade P&L analysis and multi-interval price impact calculations.",
		challenges: [
			"Aggregating and normalising on-chain transaction data across three blockchains (BTC, ETH, USDT ERC-20) with different APIs, data formats, and time resolutions",
			"Anti-detection scraping — top wallet lists on btc.com, etherscan.io, and tether.to all require JavaScript rendering and actively block bots",
			"Inverse deposit/withdrawal logic for stablecoins — USDT buy/sell interpretation is the opposite of native coins, requiring separate classification pathways",
			"Copy-trade P&L calculation with different logic for native coins (entry/exit timing from transaction history) vs. stablecoins (HODL + trade return split)"
		],
		solutions: [
			"Unified Pandas pipeline normalising all three chains to hour-boundary timestamps for consistent time-series alignment and price correlation",
			"Selenium + undetected-chromedriver to bypass JavaScript rendering and bot detection; results stored as CSVs in Bitbucket and loaded at runtime via environment variable URLs",
			"Threshold-based transaction filter and inverse mode toggle — users set minimum transaction size and flip deposit/withdrawal logic per coin type",
			"Separate P&L calculation branches — native-coin wallets use entry/exit timing, stablecoin wallets use HODL-first then trade return logic",
			"Stateless Heroku deployment with Bitbucket Pipelines CI/CD — no database, all data fetched and transformed on-demand at runtime"
		],
		features: [
			"Multi-chain coverage — Bitcoin (top 50), Ethereum (top 100), USDT ERC-20 (top 50), and Bitfinex cold storage wallets in one dashboard",
			"Interactive Plotly chart overlaying whale transaction markers on price history — deposits and withdrawals color-coded and sized by amount",
			"Price impact analysis — 1h / 4h / 12h / 1d price changes shown after each whale transaction via hover tooltip",
			"Copy-trading P&L calculator — HODL returns and actual trading P&L based on wallet entry/exit timing",
			"Threshold-based transaction filtering — set minimum size to focus on significant whale movements and cut through dust",
			"Inverse mode toggle for USDT — flips deposit/withdrawal interpretation for stablecoin analysis",
			"Bitfinex cold wallet aggregation — tracks multiple known cold storage addresses with live balances via Blockchair",
			"Ad-hoc wallet analysis — enter any public address for on-demand transaction and performance analysis",
			"Anti-detection scraping pipeline — Selenium + undetected-chromedriver extracting top wallet lists from btc.com, etherscan.io, and tether.to",
			"CI/CD with Bitbucket Pipelines — automated testing, build artifact creation, and Heroku deployment on push to master"
		],
		results: [
			{ metric: "Chains Covered", value: "4" },
			{ metric: "Wallets Tracked", value: "200+" },
			{ metric: "Price Intervals", value: "4 (1h–1d)" },
			{ metric: "P&L Modes", value: "HODL + Trade" }
		],
		videoUrl: "",
		galleryImages: [],
		galleryGifs: [],
		architecture: {
			description: "Stateless API aggregation architecture — no database, all data fetched on-demand. Streamlit app queries Blockchair (BTC), Etherscan (ETH/ERC-20), and Santiment (price history) APIs at runtime. Top wallet lists scraped periodically via Jupyter notebooks using Selenium with undetected-chromedriver, stored as CSVs in Bitbucket, and loaded by the app via environment variable URLs. Pandas DataFrames handle all data transformation — transaction classification, threshold filtering, time normalisation to hour boundaries, and profit calculation. Plotly renders interactive time-series charts with transaction overlays. Deployed on Heroku single dyno with Bitbucket Pipelines CI/CD.",
			layers: [
				{
					title: "Data Sources",
					items: [
						{ name: "Blockchair API", detail: "BTC Transactions" },
						{ name: "Etherscan API", detail: "ETH + ERC-20" },
						{ name: "Santiment API", detail: "Hourly Prices" }
					]
				},
				{
					title: "Scraping",
					connector: "store",
					items: [
						{ name: "Selenium + Undetected", detail: "btc.com · etherscan · tether.to" },
						{ name: "Bitbucket CSVs", detail: "Top Wallet Lists" }
					]
				},
				{
					title: "Processing Layer",
					connector: "wallet lists",
					items: [
						{ name: "Pandas", detail: "DataFrames · Transforms" },
						{ name: "Transaction Filter", detail: "Threshold · Inverse Mode" },
						{ name: "Price Correlation", detail: "1h · 4h · 12h · 1d Δ" }
					]
				},
				{
					title: "Analytics Engine",
					items: [
						{ name: "Copy-Trade P&L", detail: "Entry / Exit Timing" },
						{ name: "HODL Returns", detail: "First → Last Price" },
						{ name: "Deposit / Withdrawal", detail: "Classification Engine" }
					]
				},
				{
					title: "Visualization",
					items: [
						{ name: "Plotly Interactive Chart", detail: "Price + Tx Markers · Range Slider" },
						{ name: "Wallet Tables", detail: "Top 50–100 Wallets" },
						{ name: "Metrics Panel", detail: "P&L · HODL · Trade %" }
					]
				},
				{
					title: "Dashboard",
					items: [
						{ name: "Streamlit App", detail: "Wide Layout · Sidebar Selector" }
					]
				},
				{
					title: "Deployment",
					items: [
						{ name: "Heroku", detail: "Single Dyno · Headless Chrome" },
						{ name: "Bitbucket Pipelines", detail: "Test → Build → Deploy" }
					]
				}
			]
		}
	},
	"cloud-medical-devices": {
		id: "cloud-medical-devices",
		title: "Cloud Frontend/Backend for Medical Devices",
		description: "A reliable cloud platform for managing and analyzing medical device data efficiently.",
		category: "Healthcare Cloud",
		client: "Healthcare Technology Company",
		duration: "8 months",
		technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "Kubernetes", "Redis"],
		overview: "Built a comprehensive cloud platform for managing medical device data, enabling healthcare providers to monitor patient vitals, track device performance, and analyze trends. The platform supports real-time data streaming, alerts, and comprehensive reporting.",
		challenges: [
			"Handling real-time data streams from thousands of medical devices",
			"Ensuring 99.99% uptime for critical healthcare operations",
			"Managing large volumes of sensitive patient data securely",
			"Creating scalable architecture for growing device ecosystem"
		],
		solutions: [
			"Implemented microservices architecture with containerization",
			"Deployed on AWS with auto-scaling and load balancing",
			"Built real-time data pipeline using WebSockets and message queues",
			"Implemented comprehensive security measures and compliance protocols"
		],
		features: [
			"Real-time device monitoring and alerts",
			"Historical data analysis and reporting",
			"Device management and configuration",
			"Patient vitals dashboard",
			"Automated alert system",
			"Data export and integration APIs",
			"Role-based access control"
		],
		results: [
			{ metric: "Uptime", value: "99.99%" },
			{ metric: "Devices Supported", value: "10,000+" },
			{ metric: "Response Time", value: "<100ms" },
			{ metric: "Data Processed", value: "5TB/day" }
		],
		videoUrl: "https://www.w3schools.com/html/movie.mp4",
		galleryImages: [
			"https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2070",
			"https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2080",
			"https://images.unsplash.com/photo-1530497610245-94d3c16cda48?auto=format&fit=crop&q=80&w=2080"
		],
		galleryGifs: [
			"https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
			"https://media.giphy.com/media/3o7abKhOpu0NwnRgE8/giphy.gif"
		]
	},
	"airtrader-trading-simulator": {
		id: "airtrader-trading-simulator",
		title: "AirTrader – Trader Training Simulator",
		description: "A full-stack trading simulation platform to train commodity traders through historical market scenarios with realistic order execution, risk management, and post-game analytics.",
		category: "Fintech / Trading Education",
		client: "ETG Commodities",
		duration: "6 Months",
		teamSize: "Solo",
		technologies: ["React", "Vite", "Django", "ChartIQ", "Redux Toolkit", "PostgreSQL", "AWS EB", "S3", "ECharts"],
		overview: "Built a full-stack trading simulation platform to train commodity traders — traders play through historical market scenarios without seeing future prices, placing orders and managing risk under realistic constraints. Core game loop: admin creates a simulation with a date range and products, trader starts the game, places trades on a ChartIQ chart, advances time day-by-day, and finishes when done — all positions auto-close at game end and performance stats are calculated.",
		challenges: [
			"Strictly hiding future price data while serving a full charting experience — all API queries must filter by the trader's current progress date with no leakage",
			"Building a realistic order execution engine supporting multiple order types, bracket orders (OTO/OCO), randomized slippage, and commission costs",
			"Enforcing dynamic risk limits — $1M VAR and $1M notional exposure — recalculated live, with auto-liquidation when capital reaches zero",
			"Integrating ChartIQ 9.4 with a custom QuoteFeed adapter that caches fetched ranges per symbol and never reveals bars beyond the trader's current date"
		],
		solutions: [
			"Custom QuoteFeed adapter — lazy-loads OHLCV from the backend, caches fetched ranges per symbol, and only reveals new bars as the trader progresses forward in time",
			"Batch order execution on date progression — all pending orders execute against the new day's High/Low data with randomized slippage and fixed commission costs",
			"VAR calculated using 20-day historical volatility at 95% confidence; capital-zero event auto-cancels all orders and liquidates all open positions",
			"ChartIQ TFC plugin for visual order placement directly on charts, multi-chart grid layouts for cross-product analysis, and fundamental data report overlays on the timeline",
			"Deployed to AWS Elastic Beanstalk with Nginx reverse proxy — React SPA served from dist, Django API proxied on /server, /auth, /data, /trader; GitHub Actions CI/CD on push to master"
		],
		features: [
			"Day-by-day time progression — traders advance through historical scenarios without ever seeing future prices",
			"ChartIQ 9.4 with TFC plugin — visual order placement on chart with multi-chart grid for cross-product analysis",
			"Complete order engine — market, limit, stop, and MIT orders with bracket orders (OTO / OCO)",
			"Risk management — $1M VAR (20-day historical, 95% confidence) and $1M notional exposure limits enforced in real time",
			"Auto-liquidation — capital-zero event cancels all pending orders and closes all open positions immediately",
			"Post-game analytics — Sharpe, Sortino, and Calmar ratios, max drawdown, hit ratio, profit ratio, and per-product P&L breakdowns",
			"Real-time stats — live P&L (realized + unrealized), available VAR, available notional, open positions, and full trade history",
			"Multi-product futures trading with contract expiry management — auto-close on expiry, per-contract pip values and tick sizes",
			"Custom QuoteFeed with range caching — lazy-loads OHLCV per symbol, prevents future data leakage as trader progresses",
			"AWS Elastic Beanstalk + Nginx deployment with S3 for report storage and chart view persistence; GitHub Actions CI/CD"
		],
		results: [
			{ metric: "Order Types", value: "6+" },
			{ metric: "Post-game Analytics", value: "8 ratios" },
			{ metric: "VAR Confidence", value: "95%" },
			{ metric: "Future Data Leakage", value: "0%" }
		],
		videoUrl: "/videos/airtrader-trading-simulator/airtraderdemo.mp4",
		galleryImages: [
			"/images/airtrader-trading-simulator/airtraderimage1.png",
			"/images/airtrader-trading-simulator/airtraderimage2.png",
			"/images/airtrader-trading-simulator/airtraderimage3.png",
			"/images/airtrader-trading-simulator/airtraderimage4.png",
			"/images/airtrader-trading-simulator/airtraderimage5.png",
			"/images/airtrader-trading-simulator/airtraderimage6.png",
			"/images/airtrader-trading-simulator/airtraderimage7.png",
			"/images/airtrader-trading-simulator/airtraderimage8.png",
			"/images/airtrader-trading-simulator/airtraderimage9.png",
			"/images/airtrader-trading-simulator/airtraderimage10.png"
		],
		galleryImageCaptions: [
			"Single-chart view — Corn H2005 candlestick chart with the product panel on the left and a live trade log showing all executed buy/sell orders",
			"Multi-chart grid — Corn H2005 and K2005 futures alongside CORN fundamental reports (Brazil Beginning Stocks, Argentina Ending Stocks) for cross-product analysis",
			"Trade From Chart (TFC) — order placement panel overlaid directly on the C H2005 chart, allowing traders to set side, quantity, and order type without leaving the chart",
			"Order entry modal — entering a limit order for C H2005 with quantity, price, and bracket fields triggered from the TFC plugin on the live candlestick chart",
			"Bracket order configuration — setting up OTO/OCO bracket parameters (take-profit and stop-loss levels) for an open C H2005 position via the TFC overlay",
			"Symbol lookup — searchable contract browser listing futures products by category, exchange, and country (Corn, Soybean, Brazil, Argentina) for adding instruments to the simulation",
			"Drawing tools — rectangle annotation active on C H2005 showing price range and bar count measurements (78.75 pts / 98 bars) for manual technical analysis",
			"Chart type switcher — changing from candlestick to bar, OHLC, mountain, or baseline view via the studies panel while the simulation is in progress",
			"Live position view — C H2005 candlestick chart with an open-position price marker showing the trader's current entry level during day-by-day time progression",
			"Fundamental data overlay — Argentina Corn Ending Stocks report pinned directly onto the C H2005 price timeline for in-context analysis as the trader advances through the scenario"
		],
		galleryGifs: []
	},
	"widget-plugin-framework": {
		id: "widget-plugin-framework",
		title: "Matrix One — Widget Plug-in Framework",
		description: "A scalable widget plug-in framework letting third-party developers create and integrate custom widgets into a cloud product — ecosystem-grade extensibility built solo.",
		category: "Platform / Developer Tools",
		client: "Matrix One",
		duration: "Feb 2023 — Current",
		teamSize: "Solo",
		technologies: ["Angular", "Spring", "TypeScript"],
		overview: "Built a scalable widget plug-in framework at Matrix One that lets third-party developers create and integrate custom widgets into the cloud product — accelerating feature expansion without requiring core-team involvement for every new capability. The framework defines a versioned plugin contract, handles dynamic widget registration and lifecycle management, and provides a Spring-backed registry for widget metadata, versioning, and per-instance configuration.",
		challenges: [
			"Designing a plugin API stable enough for third-party developers to build against while the core product continues to evolve rapidly",
			"Sandboxing third-party widgets to prevent a misbehaving plugin from breaking the host Angular application's state or layout",
			"Dynamic widget loading at runtime — Angular's compilation model requires careful lazy-module architecture to instantiate plugins on demand without full app restarts",
			"Type-safe contracts across the Angular frontend and Spring backend so plugin metadata, configuration schemas, and lifecycle events stay consistent end-to-end"
		],
		solutions: [
			"Defined a versioned TypeScript plugin API with strict lifecycle interfaces (register, mount, update, destroy) — core API surface is additive-only to avoid breaking third-party plugins",
			"Angular component isolation using independently compiled modules per widget with encapsulated CSS and scoped event boundaries to contain plugin side-effects",
			"Spring plugin registry managing widget catalogue, semantic versioning, runtime configuration, and provisioning — plugins are registered once and resolved dynamically at runtime",
			"Lazy-loaded Angular modules for on-demand widget instantiation — only the active widgets in the user's layout are fetched and compiled, keeping initial load unaffected",
			"Shared TypeScript interface package consumed by both the Angular host and plugin SDK, ensuring compile-time type safety across the plugin boundary"
		],
		features: [
			"Versioned plugin SDK — TypeScript lifecycle interfaces and event hooks for third-party widget developers",
			"Dynamic widget loading — Angular lazy modules instantiated on demand at runtime with zero impact on initial load",
			"Spring plugin registry — catalogue of available widgets with semantic versioning, metadata, and runtime config management",
			"Widget isolation — scoped CSS, encapsulated Angular modules, and event boundary enforcement per plugin",
			"Configuration API — per-widget settings managed through the host cloud platform UI",
			"Shared type package — TypeScript interfaces consumed by both the host app and plugin SDK for compile-time safety",
			"Plugin lifecycle management — controlled mount, update, and destroy hooks with cleanup guarantees",
			"Third-party developer workflow — SDK, documentation, and scaffolding tooling for external contributors"
		],
		results: [
			{ metric: "Client", value: "Matrix One" },
			{ metric: "Status", value: "Active · 2023–" },
			{ metric: "Team Size", value: "Solo" },
			{ metric: "Extensibility", value: "3rd-party SDK" }
		],
		videoUrl: "",
		galleryImages: [],
		galleryGifs: [],
		architecture: {
			description: "Plugin-host architecture: the Angular cloud application acts as the host, dynamically loading independently compiled widget modules at runtime via Angular's lazy-loading mechanism. The Spring backend serves as a plugin registry — storing widget metadata, versioning, and per-instance configuration, and exposing provisioning APIs to the host. A shared TypeScript interface package defines the plugin contract consumed by both sides. Widgets are sandboxed within Angular module boundaries with encapsulated CSS and scoped events.",
			layers: [
				{
					title: "Plugin SDK",
					items: [
						{ name: "TypeScript Interfaces", detail: "Lifecycle · Event Hooks" },
						{ name: "Widget Contract", detail: "Versioned API Surface" },
						{ name: "Scaffolding Tooling", detail: "3rd-party Dev Workflow" }
					]
				},
				{
					title: "Angular Host Application",
					connector: "lazy module load",
					items: [
						{ name: "Dynamic Module Loader", detail: "On-demand Instantiation" },
						{ name: "Component Registry", detail: "Runtime Widget Resolution" },
						{ name: "Event Bus", detail: "Host ↔ Plugin Messaging" },
						{ name: "Layout Engine", detail: "Widget Placement · Resize" }
					]
				},
				{
					title: "Widget Isolation Layer",
					items: [
						{ name: "Scoped CSS", detail: "Encapsulated Styling" },
						{ name: "Module Boundary", detail: "Angular Compilation Unit" },
						{ name: "Lifecycle Hooks", detail: "Mount · Update · Destroy" }
					]
				},
				{
					title: "Spring Plugin Registry",
					connector: "metadata + config",
					items: [
						{ name: "Widget Catalogue", detail: "Registration · Discovery" },
						{ name: "Semantic Versioning", detail: "Compatibility Tracking" },
						{ name: "Config Management", detail: "Per-instance Settings" },
						{ name: "Provisioning API", detail: "REST · Plugin Activation" }
					]
				},
				{
					title: "Shared Type Package",
					items: [
						{ name: "TypeScript Interfaces", detail: "Consumed by Host + SDK" },
						{ name: "Compile-time Safety", detail: "Plugin Boundary Contract" }
					]
				},
				{
					title: "Cloud Platform",
					items: [
						{ name: "Widget Marketplace", detail: "Discovery · Installation" },
						{ name: "User Permissions", detail: "Access Control per Widget" },
						{ name: "Settings UI", detail: "Per-widget Configuration" }
					]
				}
			]
		}
	},
	"crypto-analytical-tools": {
		id: "crypto-analytical-tools",
		title: "Crypto Analytical Tools",
		description: "Comprehensive crypto analysis tools providing actionable insights for investments.",
		category: "Cryptocurrency",
		client: "Crypto Investment Firm",
		duration: "7 months",
		technologies: ["React", "TypeScript", "Python", "Django", "MongoDB", "WebSocket", "D3.js"],
		overview: "Created a sophisticated cryptocurrency analysis platform with real-time market data, advanced charting, sentiment analysis, and automated trading signals. The platform aggregates data from multiple exchanges and provides comprehensive market insights.",
		challenges: [
			"Aggregating data from multiple cryptocurrency exchanges",
			"Processing high-frequency market data updates",
			"Implementing accurate technical analysis algorithms",
			"Creating real-time sentiment analysis from social media"
		],
		solutions: [
			"Built scalable data aggregation pipeline with WebSocket connections",
			"Implemented efficient data processing with Python and caching",
			"Developed custom technical indicators and signals",
			"Integrated NLP models for sentiment analysis"
		],
		features: [
			"Real-time multi-exchange market data",
			"Advanced charting with 50+ indicators",
			"Sentiment analysis from social media",
			"Automated trading signals",
			"Portfolio tracking and analytics",
			"Price alerts and notifications",
			"Historical data analysis"
		],
		results: [
			{ metric: "Markets Tracked", value: "500+" },
			{ metric: "Data Points/Second", value: "10,000+" },
			{ metric: "Prediction Accuracy", value: "75%" },
			{ metric: "User ROI Improvement", value: "35%" }
		],
		videoUrl: "https://www.w3schools.com/html/movie.mp4",
		galleryImages: [
			"https://images.unsplash.com/photo-1621504450168-b8c4375b2b80?auto=format&fit=crop&q=80&w=2070",
			"https://images.unsplash.com/photo-1622630998477-20aa696fab05?auto=format&fit=crop&q=80&w=2070",
			"https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=2002"
		],
		galleryGifs: [
			"https://media.giphy.com/media/7FBY7h5Pcyh6BbILFB/giphy.gif",
			"https://media.giphy.com/media/l0HlJDaeqNUDhhaCt/giphy.gif"
		]
	},
	"galen-cloud-platform": {
		id: "galen-cloud-platform",
		title: "Galen Data — Cloud Platform",
		description: "A configurable, scalable cloud platform that lets medical devices centralise data and leverage cloud infrastructure — full-stack from architecture to UI, built for FDA-context medical environments.",
		category: "Medical Device Cloud",
		client: "Galen Data Inc.",
		duration: "Feb 2023 — May 2025",
		teamSize: "3 Engineers",
		technologies: ["Angular", "Spring", "Java", "AWS"],
		overview: "Built a configurable, scalable cloud platform at Galen Data Inc. that lets medical devices centralise data and leverage cloud technology — full-stack from architecture to UI. The platform is designed for FDA-context medical infrastructure, providing device manufacturers with a production-ready cloud layer without building it themselves.",
		challenges: [
			"Designing a platform flexible enough to serve multiple device manufacturers with different data schemas, device types, and regulatory requirements",
			"Building for FDA-context medical infrastructure — data integrity, audit trails, and access controls need to meet device-grade compliance standards",
			"Full-stack ownership across Angular frontend, Spring/Java backend, and AWS infrastructure with a 3-person team",
			"Scalable data ingestion and storage for devices that emit continuous telemetry streams across varying frequencies and payload formats"
		],
		solutions: [
			"Configurable platform architecture — device manufacturers customise data schemas, dashboards, and alert rules without core-team involvement",
			"Spring + Java backend with strict audit logging, role-based access control, and data validation at every ingestion boundary",
			"Angular frontend built for flexibility — component library supporting per-tenant configuration of layouts, charts, and device management views",
			"AWS-based infrastructure with scalable ingestion, storage, and API layers sized for continuous medical device telemetry"
		],
		features: [
			"Configurable cloud platform — medical device manufacturers plug in their devices and customise data flows without building cloud infrastructure from scratch",
			"Full-stack from architecture to UI — Angular frontend, Spring/Java backend, and AWS infrastructure owned end-to-end",
			"FDA-context medical infrastructure — data integrity, audit trails, and access control designed for regulated environments",
			"Device data centralisation — ingest, store, and query telemetry from multiple device types in a unified platform",
			"Role-based access control — fine-grained permissions for device manufacturers, operators, and clinical users",
			"Configurable dashboards — per-tenant layouts, chart types, and data views without code changes",
			"Scalable AWS infrastructure — ingestion and storage layers designed for continuous device telemetry at production scale"
		],
		results: [
			{ metric: "Client", value: "Galen Data Inc." },
			{ metric: "Team", value: "3 Engineers" },
			{ metric: "Stack", value: "Angular + Spring + AWS" },
			{ metric: "Context", value: "FDA Medical" }
		],
		videoUrl: "",
		galleryImages: [],
		galleryGifs: [],
		architecture: {
			description: "Three-tier cloud platform: Angular SPA serves as the configurable frontend with per-tenant layouts and device dashboards; Spring/Java backend handles device registration, data ingestion, access control, and audit logging; AWS infrastructure provides scalable storage, compute, and API gateway. Device manufacturers integrate via a REST API — devices push telemetry to the ingestion layer, data is validated and stored, and the Angular frontend consumes it through the Spring API. Platform configuration (schemas, dashboards, alert rules) is stored as tenant metadata and applied at runtime.",
			layers: [
				{
					title: "Medical Devices",
					items: [
						{ name: "Device Telemetry", detail: "Continuous Data Streams" },
						{ name: "Device Registration", detail: "Manufacturer Onboarding" }
					]
				},
				{
					title: "AWS Infrastructure",
					connector: "REST ingestion",
					items: [
						{ name: "API Gateway", detail: "Ingestion Entry Point" },
						{ name: "Scalable Storage", detail: "Device Data · Time-series" },
						{ name: "Compute", detail: "Spring App Hosting" }
					]
				},
				{
					title: "Spring / Java Backend",
					connector: "validated data",
					items: [
						{ name: "Ingestion Layer", detail: "Schema Validation · Parsing" },
						{ name: "Device API", detail: "Registration · Status" },
						{ name: "Access Control", detail: "RBAC · Audit Logging" },
						{ name: "Config API", detail: "Tenant Schemas · Rules" }
					]
				},
				{
					title: "Platform Configuration",
					items: [
						{ name: "Tenant Metadata", detail: "Schemas · Dashboards · Alerts" },
						{ name: "Alert Rules Engine", detail: "Threshold · Notification" },
						{ name: "Data Schema Registry", detail: "Per-device Type Config" }
					]
				},
				{
					title: "Angular Frontend",
					items: [
						{ name: "Device Dashboard", detail: "Configurable Layouts · Charts" },
						{ name: "Data Explorer", detail: "Query · Filter · Export" },
						{ name: "Admin Panel", detail: "Device Mgmt · User Roles" },
						{ name: "Alert Centre", detail: "Notifications · History" }
					]
				}
			]
		}
	},
	"tread-pattern-dashboard": {
		id: "tread-pattern-dashboard",
		title: "Tread Pattern Monitoring System POC & Analytical Dashboard",
		description: "Advanced monitoring system and analytics dashboard to simplify complex data and enhance efficiency.",
		category: "Industrial IoT",
		client: "Automotive Manufacturer",
		duration: "6 months",
		technologies: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "MQTT", "Grafana"],
		overview: "Developed a proof-of-concept monitoring system that uses computer vision and IoT sensors to analyze tire tread patterns, predict wear, and provide maintenance recommendations. The analytical dashboard visualizes complex data and provides actionable insights.",
		challenges: [
			"Processing high-resolution tire images in real-time",
			"Developing accurate tread wear prediction models",
			"Integrating with existing manufacturing systems",
			"Visualizing complex 3D tread pattern data"
		],
		solutions: [
			"Implemented computer vision models using TensorFlow",
			"Built edge computing solution for on-site processing",
			"Created API integrations with manufacturing systems",
			"Developed custom 3D visualization components"
		],
		features: [
			"Real-time tread pattern analysis",
			"Predictive maintenance alerts",
			"3D pattern visualization",
			"Historical trend analysis",
			"Quality control dashboard",
			"Automated reporting system",
			"Integration with ERP systems"
		],
		results: [
			{ metric: "Detection Accuracy", value: "98%" },
			{ metric: "Maintenance Cost Reduction", value: "30%" },
			{ metric: "Processing Time", value: "5 sec/tire" },
			{ metric: "Defect Detection", value: "95%" }
		],
		videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
		galleryImages: [
			"https://images.unsplash.com/photo-1487887235942-6101435aa7a1?auto=format&fit=crop&q=80&w=1974",
			"https://images.unsplash.com/photo-1579609598045-60479b660cb8?auto=format&fit=crop&q=80&w=2070",
			"https://images.unsplash.com/photo-1583198432859-634bb3284951?auto=format&fit=crop&q=80&w=2070"
		],
		galleryGifs: [
			"https://media.giphy.com/media/Q81NcsY6YxK7jxnr4v/giphy.gif",
			"https://media.giphy.com/media/3o7qEcqN5PjN90jNC0/giphy.gif"
		]
	},
	"crypto-deribit-option-trader": {
		id: "crypto-deribit-option-trader",
		title: "Crypto Deribit Option Trader",
		description: "Created the infrastructure and software that trades option strategies with fastest latency possible on Deribit exchange",
		category: "Cryptocurrency Trading",
		client: "Crypto Trading Firm",
		duration: "8 months",
		technologies: ["Python", "C++", "WebSocket", "Deribit API", "Redis", "PostgreSQL", "Linux", "Docker"],
		overview: "Built a high-performance automated trading system for options on the Deribit exchange, leveraging ultra-low latency infrastructure and advanced option trading strategies. The system executes trades with millisecond precision, monitors market conditions in real-time, and manages risk automatically.",
		challenges: [
			"Achieving ultra-low latency for competitive advantage in options trading",
			"Implementing complex option Greeks calculations and hedging strategies",
			"Managing risk across multiple positions and strategies",
			"Handling high-frequency data streams and order execution"
		],
		solutions: [
			"Optimized backend with C++ for critical path components",
			"Direct WebSocket connection to Deribit with custom protocol optimization",
			"Pre-calculated Greeks and dynamic hedging algorithms",
			"Advanced position management and risk monitoring system"
		],
		features: [
			"Ultra-low latency order execution (<10ms)",
			"Real-time Greeks calculation (Delta, Gamma, Vega, Theta)",
			"Automated hedging and risk management",
			"Multi-strategy support and execution",
			"Real-time P&L tracking and analytics",
			"Order book monitoring and optimization",
			"Automated position closing and rebalancing"
		],
		results: [
			{ metric: "Order Latency", value: "<5ms" },
			{ metric: "Execution Success", value: "99.8%" },
			{ metric: "Win Rate", value: "72%" },
			{ metric: "Daily Volume", value: "$2M+" }
		],
		videoUrl: "",
		galleryImages: [],
		galleryGifs: []
	},
	"champspace": {
		id: "champspace",
		title: "Champspace - Learn & Earn Platform",
		description: "An edtech platform where students learn through courses and earn money by completing them",
		category: "EdTech",
		client: "champspace.in",
		duration: "3 months",
		technologies: ["React", "Django", "TypeScript", "MongoDB", "Stripe", "AWS"],
		overview: "Built a revolutionary learning management system that incentivizes education by paying students as they complete courses. The platform provides a seamless learning experience with video content, assessments, and a transparent reward mechanism that converts learning into real earnings.",
		challenges: [
			"Creating engaging course content delivery with video streaming",
			"Implementing fair and transparent payment system for course completion",
			"Building robust user progress tracking and verification",
			"Ensuring platform scalability for thousands of concurrent learners"
		],
		solutions: [
			"Developed adaptive learning interface with video streaming optimization",
			"Integrated Stripe for secure payment processing and payouts",
			"Built comprehensive progress verification and fraud detection system",
			"Deployed on AWS with auto-scaling infrastructure"
		],
		features: [
			"Video-based course content with progress tracking",
			"Real-time earnings dashboard",
			"Automated course completion verification",
			"Secure payment and payout system",
			"User certificates and credentials",
			"Progress leaderboards and gamification",
			"Instructor course management tools"
		],
		results: [
			{ metric: "Active Students", value: "25,000+" },
			{ metric: "Total Payouts", value: "$10k+" },
			{ metric: "Course Completion", value: "78%" },
			{ metric: "User Retention", value: "65%" }
		],
		videoUrl: "/videos/champspace/champspace.mp4",
		galleryImages: [
			"/images/champspace/champspaceimage1.PNG",
			"/images/champspace/Champspaceimage2.PNG",
			"/images/champspace/champspaceimage3.PNG",
			"/images/champspace/champspaceimage4.PNG",
			"/images/champspace/champspaceimage5.PNG"
		],
		galleryImageCaptions: [
			"Homepage — Learn-to-Earn hero with ₹500–₹50,000/month earnings promise, course discovery CTA, and live daily new-student counter",
			"Trending Courses — curated course cards (Full Stack AI, Business Analytics, React Native) with category badges and enrollment CTAs",
			"Course Catalogue — category filter sidebar with per-course earnings badge (₹500 on completion), lecture count, and difficulty level",
			"Student Dashboard — learning progress tracker showing course completion percentages, Continue Learning CTA, and sidebar for earnings and certificates",
			"Instructor Dashboard — course management hub showing live/pending course status, enrolled student count, and earnings overview with course creation tools"
		],
		galleryGifs: []
	},
	"adnow": {
		id: "adnow",
		title: "AdNow - Unified Ad Management Platform",
		description: "A comprehensive ad agency solution providing one-centric management for all ads across Meta, Google, Amazon, and more",
		category: "MarTech/AdTech",
		client: "Digital Marketing Agency",
		duration: "1 month and active",
		technologies: ["React", "Django", "TypeScript", "Python", "PostgreSQL", "Redis", "AWS", "REST APIs"],
		overview: "Developed a unified advertising management platform that consolidates campaign management across multiple advertising networks including Meta, Google, and Amazon. The platform provides centralized analytics, budget management, and campaign optimization across all channels from a single dashboard.",
		challenges: [
			"Integrating with multiple ad network APIs with different specifications",
			"Unifying analytics data from disparate sources",
			"Real-time bid management and budget optimization",
			"Handling high-volume campaign data and reporting"
		],
		solutions: [
			"Built abstraction layer for multi-platform ad network integration",
			"Implemented unified analytics aggregation and normalization",
			"Created intelligent budget allocation algorithms",
			"Deployed data warehouse for efficient reporting"
		],
		features: [
			"Unified dashboard for all advertising platforms",
			"Multi-channel campaign creation and management",
			"Real-time performance analytics and reporting",
			"Intelligent budget allocation and optimization",
			"A/B testing and experimentation framework",
			"Automated bid management and adjustments",
			"Comprehensive ROI and performance metrics"
		],
		results: [
			{ metric: "Platforms Integrated", value: "8+" },
			{ metric: "Monthly Campaigns", value: "500+" },
			{ metric: "Spend Managed", value: "$10k+" },
			{ metric: "ROAS Improvement", value: "40%" }
		],
		videoUrl: "/videos/adnow/adnowdemo.mp4",
		galleryImages: [
			"/images/adnow/adnowimage1.PNG",
			"/images/adnow/adnowimage2.PNG",
			"/images/adnow/adnowimage3.PNG",
			"/images/adnow/adnowimage4.PNG"
		],
		galleryImageCaptions: [
			"Landing Page — hero with +127% conversion lift, 45.2K reach, and ₹2.4L revenue dashboard preview; trusted by 500+ SMBs",
			"How It Works — 3-step campaign setup: share business goals → AI generates ad creatives → review, customise, and launch",
			"Pricing Tiers — Starter (Free), Growth (₹499/month), and Performance (₹1,299/month) with ad spend limits and AI optimisation",
			"Footer & Contact — product, company, and support navigation with Send Message contact form and full site map"
		],
		galleryGifs: []
	},
	"curiote": {
		id: "curiote",
		title: "Curiote - Whale Monitoring System",
		description: "Real-time whale transaction detection across Bitcoin and Ethereum mainnet — tracking large movements of BTC, ETH, and 12+ major ERC20 tokens.",
		category: "Blockchain / Fintech",
		client: "Curiote",
		duration: "Ongoing",
		teamSize: "Solo",
		technologies: ["React", "Django", "Microservices", "Blockchain", "PostgreSQL", "WebSocket", "ZMQ", "Redis", "Telegram API", "X API", "Web3.py", "TypeScript", "GitHub Actions"],
		overview: "Real-time whale transaction detection across Bitcoin and Ethereum mainnet — tracking large movements of BTC, ETH, and 12+ major ERC20 tokens (USDT, USDC, WBTC, DAI, LINK, and more). Set up and configured full Bitcoin Core and Ethereum (Geth) nodes from scratch with RPC, WebSocket subscriptions, ZMQ block notifications, and cookie-based auth. Built an async microservices architecture with dedicated services for ETH monitoring, BTC monitoring, price feeds, Telegram alerts, and X/Twitter alerts — each running in isolated threads with their own event loops and task queues.",
		challenges: [
			"Configuring full Bitcoin Core and Ethereum (Geth) nodes from scratch — RPC, WebSocket subscriptions, ZMQ block notifications, and cookie-based auth",
			"Building async microservices with isolated threads, independent event loops, and per-service task queues",
			"Transaction confirmation pipeline requiring sliding-window block tracking with full blockchain reorg detection and status rollback",
			"Rate-limit-aware multi-platform alerting — Telegram (4096-char batching, retry-after backoff) and X/Twitter (280-char formatting, OAuth1 + API v2)"
		],
		solutions: [
			"Implemented smart whale detection with configurable thresholds per token (e.g., 100+ BTC, 1000+ ETH, 5M+ USDT) with automatic USD conversion via live price feeds",
			"Built 6-confirmation BTC and 12-confirmation ETH pipelines with sliding-window block tracking and full blockchain reorg detection and rollback",
			"Live Telegram bot alerts with intelligent message batching, rate-limit handling, and retry-after backoff",
			"Automated X/Twitter posting via OAuth1 + API v2 with 280-char formatting, rate-limit header parsing, and calculated cooldown",
			"Real-time WebSocket streaming to the frontend via Django Channels + Redis with auto-reconnect and connection status tracking",
			"Historical backfill on service restart — automatically detects gaps and replays missed blocks (batch of 500 for ETH, sequential for BTC) before resuming live monitoring"
		],
		features: [
			"Real-time whale transaction detection for BTC, ETH, and 12+ ERC20 tokens",
			"Full Bitcoin Core and Ethereum (Geth) node management with ZMQ block notifications",
			"Async microservices — ETH monitor, BTC monitor, price feeds, Telegram alerts, X/Twitter alerts",
			"Configurable whale thresholds per token with automatic live USD conversion",
			"Sliding-window confirmation pipeline with blockchain reorg detection and status rollback",
			"React + TypeScript dashboard — live alert feed, severity filtering, date range picker, token/wallet filters, and block explorer drill-down",
			"Multi-method auth — email/password, Google OAuth, Twitter OAuth, and Web3 wallet signing (MetaMask, WalletConnect via Reown AppKit)",
			"Historical backfill on service restart with gap detection and batch block replay",
			"CI/CD with GitHub Actions — automated tests on PostgreSQL 16 + Redis, SSH deployment to production"
		],
		results: [
			{ metric: "Chains Monitored", value: "2" },
			{ metric: "Tokens Tracked", value: "14+" },
			{ metric: "Auth Methods", value: "4" },
			{ metric: "Confirmation Depth", value: "12 blocks" }
		],
		videoUrl: "",
		galleryImages: [
			"/images/curiote/bitcoind_service.png",
			"/images/curiote/dashboard.png",
			"/images/curiote/datetime_filter.png",
			"/images/curiote/geth_service.png",
			"/images/curiote/telegram_alert.png",
			"/images/curiote/token_filter.png",
			"/images/curiote/transaction_detail.png"
		],
		galleryImageCaptions: [
			"Bitcoin Core Node — systemd service active since Apr 26, live block sync at height 948,919 via ZMQ notifications and RPC",
			"Live Whale Alert Feed — $178B volume tracked across 4,251 alerts with HIGH / MEDIUM severity tags and real-time CONFIRMED status",
			"Date Range Picker — Preset shortcuts (Today through Last Year) with a dual-month calendar for custom range selection",
			"Ethereum Geth Node — Execution client at block 25,070,970, importing chain segments every ~12s with full WebSocket subscription",
			"Telegram Bot Alerts — Batched whale notifications with tx hash, block number, confirmation status, and full token transfer details",
			"Token Filter — Searchable dropdown across 12+ ERC20 tokens (USDC, ETH, WBTC, DAI, LINK, 1INCH, BAT, YFI) with contract addresses",
			"Transaction Drill-Down — $30.60M DAI / USDC transaction with 12+ ETH confirmations, Etherscan link, and full per-transfer breakdown"
		],
		galleryGifs: []
	},
	"data-engineering-datascience": {
		id: "data-engineering-datascience",
		title: "Data Engineering & Data Science Platform",
		description: "End-to-end data engineering and data science solution powering scalable pipelines, advanced analytics, and ML-driven insights.",
		category: "Data Engineering / Data Science",
		client: "Enterprise Analytics Firm",
		duration: "6 months and active",
		technologies: ["Python", "Apache Spark", "Apache Airflow", "Kafka", "Snowflake", "dbt", "PostgreSQL", "AWS S3", "Redshift", "Docker", "Kubernetes", "Pandas", "Scikit-learn", "TensorFlow", "Jupyter", "Tableau", "Power BI"],
		overview: "Designed and built a comprehensive data engineering and data science platform that unifies data ingestion, transformation, warehousing, and machine learning workflows. The platform automates ETL/ELT pipelines to process terabytes of raw data from diverse sources, transforms it into analytics-ready datasets, and powers predictive models and interactive dashboards for data-driven decision making.",
		challenges: [
			"Ingesting and processing data from 50+ heterogeneous sources with varying formats and schemas",
			"Building fault-tolerant, scalable ETL pipelines that handle terabyte-scale data volumes",
			"Ensuring data quality, lineage tracking, and governance across the entire data lifecycle",
			"Deploying and monitoring ML models in production with minimal latency",
			"Providing self-service analytics capabilities to non-technical stakeholders"
		],
		solutions: [
			"Built modular data ingestion framework with Apache Kafka for real-time streaming and Airflow for batch orchestration",
			"Implemented a medallion architecture (Bronze, Silver, Gold) using dbt and Snowflake for reliable data transformation",
			"Developed automated data quality checks, schema validation, and lineage tracking with custom metadata catalog",
			"Created ML pipeline with feature store, model registry, and automated retraining using MLflow and Kubernetes",
			"Deployed interactive Tableau and Power BI dashboards with real-time data refresh"
		],
		features: [
			"Automated ETL/ELT pipelines with Apache Airflow orchestration",
			"Real-time data streaming and event processing with Kafka",
			"Data warehouse with medallion architecture (Bronze/Silver/Gold layers)",
			"ML model training, deployment, and monitoring pipeline",
			"Feature store for reusable ML features across teams",
			"Interactive dashboards and self-service analytics",
			"Data quality monitoring and anomaly detection",
			"Data lineage tracking and governance",
			"Predictive analytics and forecasting models"
		],
		results: [
			{ metric: "Data Sources Integrated", value: "50+" },
			{ metric: "Daily Data Processed", value: "2TB+" },
			{ metric: "Pipeline Reliability", value: "99.9%" },
			{ metric: "ML Model Accuracy", value: "92%" },
			{ metric: "Reporting Speed Improvement", value: "10x faster" }
		],
		videoUrl: "",
		galleryImages: [],
		galleryGifs: []
	}
};
