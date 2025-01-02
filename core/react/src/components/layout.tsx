import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type Dispatch,
  type ForwardedRef,
  ReactNode,
  type RefObject,
  type SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { mergeProps, mergeRefs } from "@react-aria/utils";
import { useFocusRing, useHover, useMove, usePress } from "react-aria";

import { Button, ButtonIcon } from "./button";

import clsx from "clsx";

/* -------------------------------------------------------------------------------------------------
 * Constants
 * -----------------------------------------------------------------------------------------------*/
const DOCKED_BREAKPOINT = "(min-width: 768px)";
const MIN_SIDEBAR_WIDTH = 220;
const DEFAULT_SIDEBAR_WIDTH = 296;
const MAX_SIDEBAR_WIDTH = 320;

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

/**
 * Returns a number between a min and max value
 *
 * @param x current x position
 * @returns number between the min and max value
 */
function clamp(x: number) {
  return Math.min(MAX_SIDEBAR_WIDTH, Math.max(MIN_SIDEBAR_WIDTH, x));
}

/* -------------------------------------------------------------------------------------------------
 * LayoutContext
 * -----------------------------------------------------------------------------------------------*/
type SidebarState = "docked" | "open" | "closed";
type LayoutContextProps = {
  /**
   * If true, the user is dragging the sidebar
   */
  sidebarDragging: boolean;

  /**
   * Sets the sidebarDragging state
   */
  setSidebarDragging: Dispatch<SetStateAction<boolean>>;

  /**
   * Width of sidebar in pixels
   */
  sidebarWidth: number;

  /**
   * Sets the sidebar width
   */
  setSidebarWidth: Dispatch<SetStateAction<number>>;

  /**
   * State of the sidebar
   */
  sidebarState: SidebarState;

  /**
   * Sets the state of the sidebar
   */
  setSidebarState: Dispatch<SetStateAction<SidebarState>>;

  /**
   * Ref to the sidebar open button
   */
  triggerRef: RefObject<HTMLElement | null>;

  /**
   * Ref to the sidebar
   */
  sidebarRef: RefObject<HTMLElement | null>;
};

const LayoutContext = createContext<LayoutContextProps | null>(null);

/**
 * A hook that returns the current state of the layout context
 *
 * @returns An instance of the layout context
 */
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
type LayoutProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * Ref to button element
   */
  ref?: ForwardedRef<ComponentRef<"div">>;
};

function Layout({ children, className, ref, ...props }: LayoutProps) {
  /**
   * tracks the state of the layout
   */
  const [sidebarState, setSidebarState] =
    useState<LayoutContextProps["sidebarState"]>("docked");

  /**
   * tracks the width of the sidebar
   */
  const [sidebarWidth, setSidebarWidth] = useState<
    LayoutContextProps["sidebarWidth"]
  >(DEFAULT_SIDEBAR_WIDTH);

  /**
   * tracks the drag state of the sidebar
   */
  const [sidebarDragging, setSidebarDragging] =
    useState<LayoutContextProps["sidebarDragging"]>(false);

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
  const timerRef = useRef<any>(null);

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

  /**
   * Handles setting the body cursor while dragging occurs
   */
  useEffect(() => {
    if (!sidebarDragging) {
      document.body.style.removeProperty("cursor");
      return;
    }

    document.body.style.cursor = "col-resize";
  }, [sidebarDragging]);
  return (
    <LayoutContext.Provider
      value={{
        sidebarDragging,
        setSidebarDragging,
        sidebarWidth,
        sidebarState,
        setSidebarWidth,
        setSidebarState,
        triggerRef,
        sidebarRef,
      }}
    >
      <div
        {...props}
        className={clsx(className, "wui-layout")}
        data-component="layout"
        data-sidebar-dragging={sidebarDragging}
        ref={ref}
        // @ts-ignore
        style={{ "--wui-layout-sidebar-width": `${sidebarWidth}px` }}
      >
        {children}
      </div>
    </LayoutContext.Provider>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LayoutSidebarOpenButton
 * -----------------------------------------------------------------------------------------------*/
type LayoutSidebarOpenButtonProps = ComponentPropsWithoutRef<typeof Button> & {
  /**
   * icon for the button
   */
  icon?: ReactNode;

  /**
   * Ref to button element
   */
  ref?: ForwardedRef<ComponentRef<typeof Button>>;
};

function LayoutSidebarOpenButton({
  className,
  icon,
  ref,
  ...props
}: LayoutSidebarOpenButtonProps) {
  /*
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
        if (!breakpoint.matches) {
          return context.setSidebarState("open");
        }
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
      className={clsx(className, "wui-layout__sidebar-toggle")}
      data-slot="toggle"
      color="grey"
      variant="plain"
      onPress={onPress}
      ref={ref}
    >
      <ButtonIcon>{icon}</ButtonIcon>
      <span
        {...hoverProps}
        style={{
          zIndex: 96,
          height:
            "calc(var(--wui-page-header-height) + var(--wui-layout-content-space))",
          top: "calc(-1 * var(--wui-layout-content-space) - var(--wui-space-4))",
          position: "absolute",
          width: "calc(70px * var(--wui-scale))",
        }}
        ref={context.triggerRef}
      />
    </Button>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LayoutSidebarResizeHandle
 * -----------------------------------------------------------------------------------------------*/
type LayoutSidebarResizeHandleProps = ComponentPropsWithoutRef<"button"> & {
  /**
   * Ref to resize element
   */
  ref?: ForwardedRef<ComponentRef<"button">>;
};

function LayoutSidebarResizeHandle({
  children,
  className,
  ref,
  ...props
}: LayoutSidebarResizeHandleProps) {
  /**
   * subscribe to app layout context
   */
  const context = useLayoutContext();

  /**
   * handles button press by docking the sidebar or closing if open
   */
  const { pressProps } = usePress({
    onPress() {
      if (context.sidebarDragging) {
        return;
      }

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
    },
  });

  /**
   * handles drag events on the thing
   */
  const { moveProps } = useMove({
    onMoveStart: () => {
      context.setSidebarDragging(true);
    },
    onMove: (e) => {
      context.setSidebarWidth((width) => {
        const newWidth = clamp(width + e.deltaX);
        return newWidth;
      });
    },
    onMoveEnd: () => {
      context.setSidebarDragging(false);
    },
  });

  /**
   * handles focus events on the drag handle
   */
  const { isFocusVisible, focusProps } = useFocusRing();

  /**
   * handles hover events on the drag handle
   */
  const { isHovered, hoverProps } = useHover({});

  return (
    <button
      {...mergeProps(props, moveProps, pressProps, focusProps, hoverProps)}
      className={clsx(className, "wui-layout__sidebar-resize-handle")}
      ref={ref}
      data-component="resize-handle"
      data-hovered={isHovered ? true : undefined}
      data-sidebar-dragging={context.sidebarDragging ? true : undefined}
      data-focus-visible={isFocusVisible ? true : undefined}
    >
      <span
        className="wui-layout-sidebar-resize-handle-thumb"
        data-slot="thumb"
      />
    </button>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LayoutSidebar
 * -----------------------------------------------------------------------------------------------*/
type LayoutSidebarProps = ComponentPropsWithoutRef<"nav"> & {
  /**
   * Ref to sidebar element
   */
  ref?: ForwardedRef<ComponentRef<"nav">>;
};

function LayoutSidebar({
  children,
  className,
  ref,
  ...props
}: LayoutSidebarProps) {
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
      className={clsx(className, "wui-layout__sidebar")}
      data-state={context.sidebarState}
      data-sidebar-dragging={context.sidebarDragging}
      ref={mergedRefs}
    >
      {children}
    </nav>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LayoutMask
 * -----------------------------------------------------------------------------------------------*/
type LayoutMaskProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * Ref to mask element
   */
  ref?: ForwardedRef<ComponentRef<"div">>;
};

function LayoutMask({ className, ref, ...props }: LayoutMaskProps) {
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

  return (
    <div
      {...mergedProps}
      className={clsx(className, "wui-layout__mask")}
      data-slot="mask"
      ref={ref}
    />
  );
}

/* -------------------------------------------------------------------------------------------------
 * LayoutContent
 * -----------------------------------------------------------------------------------------------*/
type LayoutContentProps = ComponentPropsWithoutRef<"main"> & {
  /**
   * Ref to mask element
   */
  ref?: ForwardedRef<ComponentRef<"main">>;
};

function LayoutContent({
  children,
  className,
  ref,
  ...props
}: LayoutContentProps) {
  /**
   * subscribe to app layout context
   */
  const context = useLayoutContext();

  return (
    <main
      {...props}
      className={clsx(className, "wui-layout__content")}
      data-slot="content"
      ref={ref}
      data-sidebar-dragging={context.sidebarDragging}
    >
      {children}
    </main>
  );
}

export {
  Layout,
  LayoutMask,
  LayoutSidebar,
  LayoutContent,
  LayoutSidebarOpenButton,
  LayoutSidebarResizeHandle,
};
export type {
  LayoutProps,
  LayoutMaskProps,
  LayoutSidebarProps,
  LayoutContentProps,
  LayoutSidebarOpenButtonProps,
  LayoutSidebarResizeHandleProps,
};
