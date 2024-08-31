import { useCallback, useEffect, useState } from "react";

/**
 * Computes whether or not the provided media query is matching
 *
 * @param query media query to match against
 * @returns boolean stating where or not the provided query is matching
 */
export const useMediaQuery = (query: string) => {
	/**
	 * tracks whether the provided media query is currently matching
	 */
	const [isMatching, setIsMatching] = useState(false);

	/**
	 * Called when the media query matching state changes
	 */
	const handleMediaChange = useCallback(
		(mm: MediaQueryListEvent | MediaQueryList) => {
			setIsMatching(mm.matches);
		},
		[],
	);

	/**
	 * When the component mounts, subscribe to the media query event
	 *
	 * Unsubscribe when the component unmounts
	 */
	useEffect(() => {
		const mm = window.matchMedia(query);

		handleMediaChange(mm);

		mm.addEventListener("change", handleMediaChange);
		return () => mm.removeEventListener("change", handleMediaChange);
	}, [query, handleMediaChange]);

	return isMatching;
};
