import {
  Button,
  // UNSTABLE_Disclosure as AriaDisclosure,
  // UNSTABLE_DisclosurePanel as AriaDisclosurePanel,
} from "react-aria-components";

import { useHover } from "react-aria";

import { type PropsWithChildren, useEffect, useRef } from "react";

import "./app-layout.css";

/* -------------------------------------------------------------------------------------------------
 * NavigationDisclosure
 * -----------------------------------------------------------------------------------------------*/
// type NavigationDisclosureProps = {
//   heading: string;
// };
//
// function NavigationDisclosure({
//   children,
//   heading,
// }: PropsWithChildren<NavigationDisclosureProps>) {
//   return (
//     <AriaDisclosure className="navigation-disclosure">
//       <Button className="navigation-disclosure__trigger" slot="trigger">
//         {heading}
//       </Button>
//       <AriaDisclosurePanel className="navigation-disclosure__panel">
//         {children}
//       </AriaDisclosurePanel>
//     </AriaDisclosure>
//   );
// }
//
/* -------------------------------------------------------------------------------------------------
 * Utilities
 * -----------------------------------------------------------------------------------------------*/
/**
 * Computes the area of a triangle given a set of 3 coordinates
 *
 * @param points all of the x, y coordinates of the triangle
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

/* -------------------------------------------------------------------------------------------------
 * AppLayout
 * -----------------------------------------------------------------------------------------------*/
function AppLayout({ children }: PropsWithChildren) {
  const sidebarRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<any | null>(null);

  const { hoverProps } = useHover({
    onHoverStart: () => {
      const sidebar = document.querySelector("[data-slot=sidebar]");

      const breakpoint = window.matchMedia("(min-width: 768px)");

      if (!breakpoint.matches) {
        return;
      }

      if (sidebar?.getAttribute("data-state") === "closed") {
        sidebar?.setAttribute("data-state", "open");
      }
    },
  });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Get the coordinates of the parent and target elements
      const parentRect = buttonRef?.current?.getBoundingClientRect();
      const targetRect = sidebarRef?.current?.getBoundingClientRect();

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

      const breakpoint = window.matchMedia("(min-width: 768px)");

      if (!breakpoint.matches) {
        return;
      }

      // if docked and on the left of the screen
      if (
        e.clientX > 0 &&
        e.clientX <= 16 &&
        sidebarRef.current?.getAttribute("data-state") !== "docked"
      ) {
        sidebarRef?.current?.setAttribute("data-state", "open");
        return;
      }

      // if the state is anything but open do nothing
      if (sidebarRef?.current?.getAttribute("data-state") !== "open") {
        return;
      }

      // if the current mouse position is within the safe triangle
      if (isCursorSafe(mouseX, mouseY, { p1, p2, p3 })) {
        return;
      }

      // if the current target is within the button of the sidebar
      if (
        buttonRef.current?.contains(e.target as Node) ||
        sidebarRef.current?.contains(e.target as Node)
      ) {
        clearTimeout(timerRef.current);
        return;
      }

      sidebarRef.current.setAttribute("data-state", "closed");
    }

    function handleMouseLeave() {
      const breakpoint = window.matchMedia("(min-width: 768px)");

      if (!breakpoint.matches) {
        return;
      }

      if (sidebarRef?.current?.getAttribute("data-state") !== "open") {
        return;
      }

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        sidebarRef?.current?.setAttribute("data-state", "closed");
      }, 1000);
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="showcase-app-layout" data-component="layout">
      <div className="showcase-app-layout__mask" data-slot="mask" />
      <nav
        className="showcase-app-layout__sidebar"
        data-slot="sidebar"
        ref={sidebarRef}
      >
        <header className="showcase-app-layout__sidebar-header">
          <span>Winnie</span>
          <Button
            onPress={() =>
              document
                .querySelector("[data-slot=sidebar]")
                ?.setAttribute("data-state", "closed")
            }
          >
            close
          </Button>
        </header>
        {/*
          locations
            paris
              dashboard
              customers
              orders
            
        */}
      </nav>
      <main className="showcase-app-layout__content" data-slot="content">
        <div className="showcase-app-layout__page" data-component="page">
          <Button
            onPress={() =>
              document
                .querySelector("[data-slot=sidebar]")
                ?.setAttribute("data-state", "docked")
            }
          >
            dock
            <div
              {...hoverProps}
              style={{
                zIndex: 96,
                height: "calc(60px * var(--wui-scale))",
                width: "60px",
                position: "absolute",
                inset: "0",
              }}
              ref={buttonRef}
            />
          </Button>
          <Button
            onPress={() =>
              document
                .querySelector("[data-slot=sidebar]")
                ?.setAttribute("data-state", "open")
            }
          >
            open
          </Button>
          {children}
        </div>
      </main>
    </div>
  );
}

export { AppLayout };
