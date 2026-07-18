import { useState, useEffect, useCallback } from "react";

interface UseCarouselOptions {
	itemsCount: number;
	autoplay?: boolean;
	autoplayInterval?: number;
}

export function useCarousel({
	itemsCount,
	autoplay = false,
	autoplayInterval = 6000,
}: UseCarouselOptions) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	const handleNext = useCallback(() => {
		if (itemsCount <= 0) return;
		setCurrentIndex((prev) => (prev + 1) % itemsCount);
	}, [itemsCount]);

	const handlePrev = useCallback(() => {
		if (itemsCount <= 0) return;
		setCurrentIndex((prev) => (prev - 1 + itemsCount) % itemsCount);
	}, [itemsCount]);

	useEffect(() => {
		if (!autoplay || isHovered || itemsCount <= 1) return;
		const interval = setInterval(() => {
			handleNext();
		}, autoplayInterval);
		return () => clearInterval(interval);
	}, [isHovered, autoplay, autoplayInterval, itemsCount, handleNext]);

	return {
		currentIndex,
		setCurrentIndex,
		isHovered,
		setIsHovered,
		handleNext,
		handlePrev,
	};
}
