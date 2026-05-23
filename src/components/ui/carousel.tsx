import { useState, useRef, useEffect, type TouchEvent } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface CarouselProps {
	items: string[];
	className?: string;
	captions?: string[];
}

export default function Carousel({ items, className = "", captions }: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const touchStartX = useRef(0);
	const [slideWidth, setSlideWidth] = useState(0);

	useEffect(() => {
		const update = () => {
			if (!containerRef.current) return;
			const cw = containerRef.current.offsetWidth;
			const pct = window.innerWidth < 640 ? 1 : 0.85;
			setSlideWidth(cw * pct);
		};

		update();

		let ro: ResizeObserver | null = null;
		if (typeof ResizeObserver !== "undefined") {
			ro = new ResizeObserver(update);
			if (containerRef.current) ro.observe(containerRef.current);
		} else {
			window.addEventListener("resize", update);
		}

		return () => {
			if (ro) ro.disconnect();
			else window.removeEventListener("resize", update);
		};
	}, []);

	// Keyboard navigation for lightbox
	useEffect(() => {
		if (lightboxIndex === null) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setLightboxIndex(null);
			if (e.key === "ArrowRight") setLightboxIndex((i) => i === null ? null : (i + 1) % items.length);
			if (e.key === "ArrowLeft") setLightboxIndex((i) => i === null ? null : (i - 1 + items.length) % items.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [lightboxIndex, items.length]);

	// Lock body scroll when lightbox is open
	useEffect(() => {
		if (lightboxIndex !== null) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => { document.body.style.overflow = ""; };
	}, [lightboxIndex]);

	const GAP = 16;
	const offset = slideWidth > 0 ? -(currentIndex * (slideWidth + GAP)) : 0;

	const handleNext = () => setCurrentIndex((i) => (i + 1 >= items.length ? 0 : i + 1));
	const handlePrevious = () => setCurrentIndex((i) => (i - 1 < 0 ? items.length - 1 : i - 1));

	const handleTouchStart = (e: TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
	const handleTouchEnd = (e: TouchEvent) => {
		const delta = touchStartX.current - e.changedTouches[0].clientX;
		if (delta > 50) handleNext();
		else if (delta < -50) handlePrevious();
	};

	if (!items || items.length === 0) return null;

	return (
		<>
			<div className={`w-full flex flex-col gap-4 sm:gap-6 ${className}`}>
				{/* Track */}
				<div
					ref={containerRef}
					className="relative w-full overflow-hidden"
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
				>
					<motion.div
						className="flex gap-4"
						animate={{ x: offset }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
					>
						{items.map((item, index) => (
							<motion.div
								key={index}
								className="relative flex-shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-white/50 dark:bg-foreground/5 group cursor-zoom-in"
								style={{ width: slideWidth > 0 ? slideWidth : "100%", aspectRatio: "16 / 9" }}
								animate={{
									opacity: index === currentIndex ? 1 : 0.5,
									scale: index === currentIndex ? 1 : 0.95,
								}}
								transition={{ duration: 0.3 }}
								onClick={() => setLightboxIndex(index)}
							>
								<CarouselImage
									src={item}
									alt={captions?.[index] ?? `Slide ${index + 1}`}
									priority={index === 0}
								/>

								{/* Zoom hint on hover */}
								<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
									<div className="bg-black/50 backdrop-blur-sm rounded-full p-3">
										<ZoomIn className="w-5 h-5 text-white" />
									</div>
								</div>

								{/* Caption overlay */}
								{captions?.[index] && (
									<div
										className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none px-3 sm:px-5 md:px-8 pb-3 sm:pb-5 md:pb-6 pt-10 sm:pt-14 md:pt-20"
										style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)" }}
									>
										<p
											className="text-center font-bold leading-snug tracking-wide text-[11px] sm:text-sm md:text-base lg:text-lg"
											style={{ color: "#ffffff", textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
										>
											{captions[index]}
										</p>
									</div>
								)}
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Controls */}
				<div className="flex items-center justify-between px-1 sm:px-2">
					<div className="flex flex-wrap gap-1.5 sm:gap-2">
						{items.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`h-2 rounded-full transition-all duration-300 ${
									currentIndex === index ? "w-6 sm:w-8 bg-primary" : "w-2 bg-white/50 dark:bg-foreground/20"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
					<div className="flex gap-2 sm:gap-3">
						<button
							className="p-2 sm:p-3 rounded-full bg-white/50 dark:bg-foreground/5 hover:bg-white/80 dark:hover:bg-foreground/10 transition-colors text-foreground"
							onClick={handlePrevious}
							aria-label="Previous slide"
						>
							<ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
						</button>
						<button
							className="p-2 sm:p-3 rounded-full bg-white/50 dark:bg-foreground/5 hover:bg-white/80 dark:hover:bg-foreground/10 transition-colors text-foreground"
							onClick={handleNext}
							aria-label="Next slide"
						>
							<ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
						</button>
					</div>
				</div>
			</div>

			{/* Lightbox */}
			{lightboxIndex !== null && createPortal(
				<Lightbox
					items={items}
					captions={captions}
					index={lightboxIndex}
					onClose={() => setLightboxIndex(null)}
					onPrev={() => setLightboxIndex((i) => i === null ? null : (i - 1 + items.length) % items.length)}
					onNext={() => setLightboxIndex((i) => i === null ? null : (i + 1) % items.length)}
				/>,
				document.body
			)}
		</>
	);
}

function Lightbox({
	items,
	captions,
	index,
	onClose,
	onPrev,
	onNext,
}: {
	items: string[];
	captions?: string[];
	index: number;
	onClose: () => void;
	onPrev: () => void;
	onNext: () => void;
}) {
	const touchStartX = useRef(0);

	const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
	const handleTouchEnd = (e: React.TouchEvent) => {
		const delta = touchStartX.current - e.changedTouches[0].clientX;
		if (delta > 50) onNext();
		else if (delta < -50) onPrev();
	};

	return (
		<AnimatePresence>
			<motion.div
				key="lightbox-backdrop"
				className="fixed inset-0 z-[9999] flex items-center justify-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
				style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)" }}
				onClick={onClose}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
			>
				{/* Close button */}
				<button
					className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
					onClick={onClose}
					aria-label="Close lightbox"
				>
					<X className="w-6 h-6" />
				</button>

				{/* Counter */}
				<div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tabular-nums">
					{index + 1} / {items.length}
				</div>

				{/* Prev button */}
				{items.length > 1 && (
					<button
						className="absolute left-3 sm:left-6 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
						onClick={(e) => { e.stopPropagation(); onPrev(); }}
						aria-label="Previous image"
					>
						<ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
					</button>
				)}

				{/* Image */}
				<motion.div
					key={index}
					className="relative max-w-[92vw] max-h-[88vh] flex flex-col items-center gap-4"
					initial={{ opacity: 0, scale: 0.94 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.94 }}
					transition={{ duration: 0.2 }}
					onClick={(e) => e.stopPropagation()}
				>
					<img
						src={items[index]}
						alt={captions?.[index] ?? `Image ${index + 1}`}
						className="max-w-full max-h-[78vh] rounded-xl object-contain shadow-2xl"
						loading="lazy"
						decoding="async"
					/>
					{captions?.[index] && (
						<p className="text-center text-white/85 font-semibold text-sm sm:text-base leading-snug max-w-2xl px-4"
							style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}>
							{captions[index]}
						</p>
					)}
				</motion.div>

				{/* Next button */}
				{items.length > 1 && (
					<button
						className="absolute right-3 sm:right-6 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
						onClick={(e) => { e.stopPropagation(); onNext(); }}
						aria-label="Next image"
					>
						<ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
					</button>
				)}

				{/* Dot indicators */}
				{items.length > 1 && (
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
						{items.map((_, i) => (
							<button
								key={i}
								onClick={(e) => { e.stopPropagation(); }}
								className={`h-1.5 rounded-full transition-all duration-300 ${
									i === index ? "w-5 bg-white" : "w-1.5 bg-white/35"
								}`}
								aria-label={`Go to image ${i + 1}`}
							/>
						))}
					</div>
				)}
			</motion.div>
		</AnimatePresence>
	);
}

function CarouselImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	return (
		<div className="w-full h-full relative">
			{isLoading && (
				<div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-foreground/5">
					<div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-primary" />
				</div>
			)}
			{hasError ? (
				<div className="h-full w-full flex items-center justify-center bg-white/50 dark:bg-foreground/5 text-muted-foreground text-sm p-4 text-center">
					Failed to load image
				</div>
			) : (
				<img
					src={src}
					alt={alt}
					className="h-full w-full object-cover"
					loading={priority ? "eager" : "lazy"}
					decoding="async"
					fetchPriority={priority ? "high" : "low"}
					onLoad={() => setIsLoading(false)}
					onError={() => { setIsLoading(false); setHasError(true); }}
					style={{ display: isLoading ? "none" : "block" }}
				/>
			)}
		</div>
	);
}
