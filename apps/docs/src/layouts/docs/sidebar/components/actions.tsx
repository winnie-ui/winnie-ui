import { SearchCommandMenu } from "~/components/search-command-menu/search-command-menu";
import { useMediaQuery } from "~/hooks/use-media-query";

import type { CollectionKey } from "astro:content";
import { ThemePickerDialog } from "./theme-picker/theme-picker-dialog";

type ActionsProps = {
  collection: CollectionKey;
};

export const Actions = ({ collection }: ActionsProps) => {
  /**
   * Computes if the current breakpoint is less than 768px
   */
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isMobile && <SearchCommandMenu collection={collection} />}
      <ThemePickerDialog />
    </>
  );
};
