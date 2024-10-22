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

/* -------------------------------------------------------------------------------------------------
 * AppLayout
 * -----------------------------------------------------------------------------------------------*/
function AppLayout({ children }: PropsWithChildren) {
  const sidebarRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

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
    function handleMouseOver(e: MouseEvent) {
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
      // TODO: calculate safe area

      // if the current target is within the button of the sidebar
      if (
        buttonRef.current?.contains(e.target as Node) ||
        sidebarRef.current?.contains(e.target as Node)
      ) {
        return;
      }

      sidebarRef.current.setAttribute("data-state", "closed");
    }

    function handleMouseLeave() {
      if (sidebarRef?.current?.getAttribute("data-state") !== "open") {
        return;
      }

      sidebarRef.current.setAttribute("data-state", "closed");
    }

    document.addEventListener("mousemove", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseOver);
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
