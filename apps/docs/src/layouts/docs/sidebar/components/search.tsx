import { SearchCommandMenu } from "~/components/search-command-menu/search-command-menu";
import { useMediaQuery } from "~/hooks/use-media-query";

export const Search = () => {
	/**
	 * Computes if the current breakpoint is less than 768px
	 */
	const isMobile = useMediaQuery("(max-width: 768px)");

	return !isMobile ? <SearchCommandMenu /> : null;
};
