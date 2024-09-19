import { useCallback, useEffect, useRef } from "react";

import { ScrollArea } from "~/components/scroll-area/scroll-area";

import { NavigationList } from "./navigation-list";
import type { NavigationItem } from "./types";

import "./navigation.css";

type NavigationProps = {
  items: NavigationItem[];
  slug: string;
};

export function Navigation(props: NavigationProps) {
  /**
   * reference to the scroll area viewport
   */
  const viewportRef = useRef<HTMLDivElement>(null);

  /**
   * handles setting a data attribute on the scroll area which marks
   * it current scroll position before the page transition occurs.
   * why not use `useState` from react? unfortunatly due to how astro
   * caches react state, the current scroll position will lag behind during
   * the view transition. capturing the scroll position in the DOM is how I decided
   * to persist it through the view transition
   */
  const handleBeforePreparation = useCallback(() => {
    const scrollTop = viewportRef.current?.scrollTop;
    viewportRef.current?.setAttribute(
      "data-scroll-position",
      Math.ceil(scrollTop ?? 0).toString(),
    );
  }, []);

  /**
   * handles grabbing the scroll position from the scroll area attribute
   * and propgrammitically scrolling to it.
   */
  const handleAfterPreparation = useCallback(() => {
    const scrollTop = Number(
      viewportRef.current?.getAttribute("data-scroll-position"),
    );

    if (Number.isNaN(scrollTop)) {
      return;
    }

    viewportRef.current?.scrollTo(0, scrollTop);
  }, []);

  useEffect(() => {
    document.addEventListener(
      "astro:before-preparation",
      handleBeforePreparation,
    );

    document.addEventListener("astro:page-load", handleAfterPreparation);

    return () => {
      document.removeEventListener(
        "astro:before-preparation",
        handleBeforePreparation,
      );
      document.removeEventListener("astro:page-load", handleAfterPreparation);
    };
  }, [handleAfterPreparation, handleBeforePreparation]);

  return (
    <ScrollArea className="wui-navigation" viewportRef={viewportRef}>
      <NavigationList items={props.items} slug={props.slug} />
    </ScrollArea>
  );
}
