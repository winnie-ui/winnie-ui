import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

import type { NavigationItem } from "./types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";

type NavigationListCollapsibleProps = {
  item: NavigationItem;
  hasCurrentItem: boolean;
};

export function NavigationListCollapsible({
  children,
  item,
  hasCurrentItem,
}: PropsWithChildren<NavigationListCollapsibleProps>) {
  const [transitioning, setTransitioning] = useState(false);

  /**
   * Handles the event that is called before the page swap from the view transition.
   * Responsible for setting the boolean state that is used to turn off animations to
   * prevent some animation jank and layout shift.
   */
  const handleBeforeSwap = useCallback(() => {
    setTransitioning(true);
  }, []);

  /**
   * Sets transitioning to false to re-enable the animation and allow close animations
   * to continue working once the view transition as completed
   */
  function handleOpenChange() {
    setTransitioning(false);
  }

  /*
   * Sets up document event listeners for the start and end of page view transitions
   */
  useEffect(() => {
    document.addEventListener("astro:before-preparation", handleBeforeSwap);

    return () => {
      document.removeEventListener(
        "astro:before-preparation",
        handleBeforeSwap,
      );
    };
  }, []);

  return (
    <Collapsible
      asChild
      key={`${item.label}`}
      defaultOpen
      onOpenChange={handleOpenChange}
    >
      <li>
        <CollapsibleTrigger
          className="navigation-list-item"
          data-collapsible-trigger={true}
          data-current={hasCurrentItem}
          aria-current={hasCurrentItem}
        >
          <span className="label">{item.label}</span>
          <ChevronRight className="chevron" />
        </CollapsibleTrigger>
        <CollapsibleContent
          className="navigation-list-collapsible-content"
          style={{ animationName: transitioning ? "none" : undefined }}
        >
          {children}
        </CollapsibleContent>
      </li>
    </Collapsible>
  );
}
