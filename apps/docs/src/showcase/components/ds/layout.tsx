import { Button } from "react-aria-components";

import {
  type ComponentPropsWithoutRef,
  type Dispatch,
  type ElementRef,
  type MutableRefObject,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { mergeProps, mergeRefs } from "@react-aria/utils";
import { useHover, usePress } from "react-aria";

/* -------------------------------------------------------------------------------------------------
 * Constants
 * -----------------------------------------------------------------------------------------------*/
const DOCKED_BREAKPOINT = "(min-width: 768px)";

/* -------------------------------------------------------------------------------------------------
 * Utilities
 * -----------------------------------------------------------------------------------------------*/
/**
 * Computes the area of a triangle given a set of 3 coordinates
 *
 * @param area all of the x, y coordinates of the triangle
 */
function getAreaOfTriangle({
  p1,
  p2,
  p3,
}: {
  p1: {
    x: number;
    y: number;
  };
  p2: {
    x: number;
    y: number;
  };
  p3: {
    x: number;
    y: number;
  };
}) {
  return Math.abs(
    (p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2.0,
  );
}

/**
 * Computes the area of a triangle given a set of 3 coordinates
 *
 * @param points all of the x, y coordinates of the triangle
 */
function isCursorSafe(
  mouseX: number,
  mouseY: number,
  {
    p1,
    p2,
    p3,
  }: {
    p1: {
      x: number;
      y: number;
    };
    p2: {
      x: number;
      y: number;
    };
    p3: {
      x: number;
      y: number;
    };
  },
) {
  // Calculates area of reference triangle
  const areaABC = getAreaOfTriangle({ p1, p2, p3 });

  // Calculate the areas of the triangles formed by the mouse position and two vertices of the triangle
  const areaPAB = getAreaOfTriangle({
    p1: {
      x: mouseX,
      y: mouseY,
    },
    p2: {
      x: p1.x,
      y: p1.y,
    },
    p3: {
      x: p2.x,
      y: p2.y,
    },
  });
  const areaPBC = getAreaOfTriangle({
    p1: {
      x: mouseX,
      y: mouseY,
    },
    p2: {
      x: p2.x,
      y: p2.y,
    },
    p3: {
      x: p3.x,
      y: p3.y,
    },
  });
  const areaPCA = getAreaOfTriangle({
    p1: {
      x: mouseX,
      y: mouseY,
    },
    p2: {
      x: p3.x,
      y: p3.y,
    },
    p3: {
      x: p1.x,
      y: p1.y,
    },
  });

  // Check if the sum of the smaller triangle areas equals the area of the original triangle
  return areaABC === areaPAB + areaPBC + areaPCA;
}

/**
 * Gets the three points of a triangle
 *
 * @param points all of the x, y coordinates of the triangle
 */
function getTrianglePoints(
  parentElement: HTMLElement,
  targetElement: HTMLElement,
) {
  // Get the coordinates of the parent and target elements
  const parentRect = parentElement.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();

  const p1 = {
    x: parentRect?.right,
    y: parentRect?.top,
  };

  const p2 = {
    x: targetRect?.left,
    y: targetRect?.top,
  };

  const p3 = {
    x: targetRect?.right,
    y: targetRect?.top,
  };

  return {
    p1,
    p2,
    p3,
  };
}

/* -------------------------------------------------------------------------------------------------
 * LayoutContext
 * -----------------------------------------------------------------------------------------------*/
type SidebarState = "docked" | "open" | "closed";
type LayoutContextProps = {
  sidebarState: SidebarState;
  setSidebarState: Dispatch<SetStateAction<SidebarState>>;
  triggerRef: MutableRefObject<HTMLElement | null>;
  sidebarRef: MutableRefObject<HTMLElement | null>;
};

const LayoutContext = createContext<LayoutContextProps | null>(null);

const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  if (context == null) {
    throw new Error(
      "Failed to get LayoutContext, ensure your component is wrapped in Layout",
    );
  }

  return context;
};

/* -------------------------------------------------------------------------------------------------
 * Layout
 * -----------------------------------------------------------------------------------------------*/
type LayoutRef = ElementRef<"div">;
type LayoutComponentProps = ComponentPropsWithoutRef<"div">;
type LayoutProps = LayoutComponentProps;

const Layout = forwardRef<LayoutRef, PropsWithChildren<LayoutProps>>(
  ({ children, ...props }, ref) => {
    /**
     * tracks the state of the layout
     */
    const [sidebarState, setSidebarState] =
      useState<LayoutContextProps["sidebarState"]>("docked");

    /**
     * tracks the ref of the sidebar
     */
    const sidebarRef = useRef<HTMLElement>(null);

    /**
     * tracks the ref of the sidebar trigger
     */
    const triggerRef = useRef<HTMLSpanElement>(null);

    /**
     * tracks the active timer to debounce the mouse leave event
     */
    const timerRef = useRef<any>();

    /**
     * handles the mouse move event by triggering the open state
     * of the sidebar and calculating the safe area. Also checks
     * the min breakpoint
     */
    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        if (!triggerRef.current || !sidebarRef.current) {
          return;
        }

        const breakpoint = window.matchMedia(DOCKED_BREAKPOINT);
        if (!breakpoint.matches) {
          return;
        }

        if (e.clientX <= 16 && sidebarState === "closed") {
          return setSidebarState("open");
        }

        // if the state is anything but open do nothing
        if (sidebarState !== "open") {
          return;
        }

        if (e.clientX <= 16) {
          return;
        }

        // if the current mouse position is within the safe triangle
        if (
          isCursorSafe(
            e.clientX,
            e.clientY,
            getTrianglePoints(triggerRef.current, sidebarRef.current),
          )
        ) {
          return;
        }

        // if the current target is within the button of the sidebar
        if (
          triggerRef.current?.contains(e.target as Node) ||
          sidebarRef.current?.contains(e.target as Node)
        ) {
          clearTimeout(timerRef.current);
          return;
        }

        setSidebarState("closed");
      },
      [sidebarState],
    );

    /**
     * handles the mouse leave event by only firing when the
     * users screen is greater than the min breakpoint and after
     * the debounce time has elapsed
     */
    const handleMouseLeave = useCallback(() => {
      const breakpoint = window.matchMedia(DOCKED_BREAKPOINT);

      if (!breakpoint.matches) {
        return;
      }

      if (sidebarState !== "open") {
        return;
      }

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setSidebarState("closed");
      }, 700);
    }, [sidebarState]);

    /**
     * handles subscribing to document level events
     */
    useEffect(() => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, [handleMouseMove, handleMouseLeave]);

    return (
      <LayoutContext.Provider
        value={{
          sidebarState,
          setSidebarState,
          triggerRef,
          sidebarRef,
        }}
      >
        <div {...props} data-component="layout" ref={ref}>
          {children}
        </div>
      </LayoutContext.Provider>
    );
  },
);

/* -------------------------------------------------------------------------------------------------
 * LayoutSidebarOpenButton
 * -----------------------------------------------------------------------------------------------*/
type LayoutSidebarOpenButtonRef = ElementRef<typeof Button>;
type LayoutSidebarOpenButtonComponentProps = ComponentPropsWithoutRef<
  typeof Button
>;
type LayoutSidebarOpenButtonProps = LayoutSidebarOpenButtonComponentProps;

const LayoutSidebarOpenButton = forwardRef<
  LayoutSidebarOpenButtonRef,
  PropsWithChildren<LayoutSidebarOpenButtonProps>
>(({ children, ...props }, ref) => {
  /**
   * subscribe to app layout context
   */
  const context = useLayoutContext();

  /**
   * handles hover start by opening the sidebar
   */
  const { hoverProps } = useHover({
    onHoverStart: () => {
      const breakpoint = window.matchMedia(DOCKED_BREAKPOINT);

      if (!breakpoint.matches) {
        return;
      }

      if (context.sidebarState === "closed") {
        context.setSidebarState("open");
      }
    },
  });

  /**
   * handles button press by docking the sidebar or closing if open
   */
  function onPress() {
    const breakpoint = window.matchMedia(DOCKED_BREAKPOINT);
    switch (context.sidebarState) {
      case "docked": {
        break;
      }
      case "closed": {
        if (breakpoint.matches) {
          return context.setSidebarState("docked");
        }

        return context.setSidebarState("open");
      }
      case "open": {
        return context.setSidebarState("docked");
      }
    }
  }

  return (
    <Button
      {...props}
      onPress={onPress}
      data-component="button"
      style={{
        isolation: "revert",
        display: context.sidebarState === "docked" ? "none" : "block",
      }}
      ref={ref}
    >
      {children}
      {context.sidebarState !== "docked" && (
        <span
          {...hoverProps}
          style={{
            zIndex: 96,
            height: "calc(60px * var(--wui-scale))",
            width: "60px",
            position: "absolute",
            inset: "0",
          }}
          ref={context.triggerRef}
        />
      )}
    </Button>
  );
});

LayoutSidebarOpenButton.displayName = "LayoutSidebarOpenButton";

/* -------------------------------------------------------------------------------------------------
 * LayoutSidebarCloseButton
 * -----------------------------------------------------------------------------------------------*/
type LayoutSidebarCloseButtonRef = ElementRef<typeof Button>;
type LayoutSidebarCloseButtonComponentProps = ComponentPropsWithoutRef<
  typeof Button
>;
type LayoutSidebarCloseButtonProps = LayoutSidebarCloseButtonComponentProps;

const LayoutSidebarCloseButton = forwardRef<
  LayoutSidebarCloseButtonRef,
  PropsWithChildren<LayoutSidebarCloseButtonProps>
>(({ children, ...props }, ref) => {
  /**
   * subscribe to app layout context
   */
  const context = useLayoutContext();

  /**
   * handles button press by docking the sidebar or closing if open
   */
  function onPress() {
    const breakpoint = window.matchMedia(DOCKED_BREAKPOINT);
    if (!breakpoint.matches) return;

    switch (context.sidebarState) {
      case "docked": {
        return context.setSidebarState("closed");
      }
      case "closed": {
        break;
      }
      case "open": {
        break;
      }
    }
  }

  return (
    <Button
      {...props}
      ref={ref}
      onPress={onPress}
      data-component="button"
      style={{ display: context.sidebarState !== "docked" ? "none" : "block" }}
    >
      {children}
    </Button>
  );
});

LayoutSidebarCloseButton.displayName = "LayoutSidebarCloseButton";

/* -------------------------------------------------------------------------------------------------
 * LayoutSidebar
 * -----------------------------------------------------------------------------------------------*/
type LayoutSidebarRef = ElementRef<"nav">;
type LayoutSidebarComponentProps = ComponentPropsWithoutRef<"nav">;
type LayoutSidebarProps = LayoutSidebarComponentProps;

const LayoutSidebar = forwardRef<LayoutSidebarRef, LayoutSidebarProps>(
  ({ children, ...props }, ref) => {
    /**
     * subscribe to app layout context
     */
    const context = useLayoutContext();

    /**
     * merge the refs
     */
    const mergedRefs = mergeRefs(ref, context.sidebarRef);

    return (
      <nav
        {...props}
        data-slot="sidebar"
        data-state={context.sidebarState}
        ref={mergedRefs}
      >
        {children}
      </nav>
    );
  },
);

LayoutSidebar.displayName = "LayoutSidebar";

/* -------------------------------------------------------------------------------------------------
 * LayoutMask
 * -----------------------------------------------------------------------------------------------*/
type LayoutMaskRef = ElementRef<"div">;
type LayoutMaskComponentProps = ComponentPropsWithoutRef<"div">;
type LayoutMaskProps = LayoutMaskComponentProps;

const LayoutMask = forwardRef<LayoutMaskRef, LayoutMaskProps>((props, ref) => {
  /**
   * subscribe to app layout context
   */
  const context = useLayoutContext();

  /**
   * handles hover start by opening the sidebar
   */
  const { pressProps } = usePress({
    onPress: () => {
      context.setSidebarState("closed");
    },
  });

  /**
   * Merge the props from press and passed in props
   */
  const mergedProps = mergeProps(pressProps, props);

  if (context.sidebarState !== "open") {
    return null;
  }

  return <div {...mergedProps} data-slot="mask" ref={ref} />;
});

LayoutMask.displayName = "LayoutMask";

/* -------------------------------------------------------------------------------------------------
 * LayoutContent
 * -----------------------------------------------------------------------------------------------*/
type LayoutContentRef = ElementRef<"main">;
type LayoutContentComponentProps = ComponentPropsWithoutRef<"main">;
type LayoutContentProps = LayoutContentComponentProps;

const LayoutContent = forwardRef<
  LayoutContentRef,
  PropsWithChildren<LayoutContentProps>
>(({ children, ...props }, ref) => {
  return (
    <main {...props} data-slot="content" ref={ref}>
      {children}
    </main>
  );
});

LayoutContent.displayName = "LayoutContent";

export {
  Layout,
  LayoutMask,
  LayoutSidebar,
  LayoutContent,
  LayoutSidebarOpenButton,
  LayoutSidebarCloseButton,
};
export type {
  LayoutProps,
  LayoutMaskProps,
  LayoutSidebarProps,
  LayoutContentProps,
  LayoutSidebarOpenButtonProps,
  LayoutSidebarCloseButtonProps,
};
