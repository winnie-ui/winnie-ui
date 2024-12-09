import type { CollectionKey } from "astro:content";
import { SearchCommandMenu } from "~/components/search-command-menu/search-command-menu";
import { useMediaQuery } from "~/hooks/use-media-query";

type SearchProps = {
  collection: CollectionKey;
};

export const Search = ({ collection }: SearchProps) => {
  /**
   * Computes if the current breakpoint is less than 768px
   */
  const isMobile = useMediaQuery("(max-width: 768px)");

  return !isMobile ? <SearchCommandMenu collection={collection} /> : null;
};
