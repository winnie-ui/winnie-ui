import {
  Layout,
  LayoutContent,
  LayoutMask,
  LayoutSidebar,
  LayoutSidebarCloseButton,
  LayoutSidebarOpenButton,
} from "~/showcase/components/ds/layout";

import { Page } from "~/showcase/components/ds/page";

import "./app-layout.css";
import { PanelLeft } from "lucide-react";
import type { PropsWithChildren } from "react";

/* -------------------------------------------------------------------------------------------------
 * AppLayout
 * -----------------------------------------------------------------------------------------------*/
function AppLayout(props: PropsWithChildren) {
  return (
    <Layout className="showcase-app-layout">
      <LayoutMask className="showcase-app-layout__mask" />
      <LayoutSidebar className="showcase-app-layout__sidebar">
        <header className="sidebar__header">
          <span>Goho Pizza Co.</span>
        </header>
        <LayoutSidebarCloseButton className="showcase-app-layout__sidebar-close-button">
          <span className="showcase-app-layout__sidebar-close-button-thumb" />
        </LayoutSidebarCloseButton>
      </LayoutSidebar>
      <LayoutContent className="showcase-app-layout__content">
        <Page className="showcase-app-layout__page">
          <LayoutSidebarOpenButton
            className="showcase-app-layout__sidebar-open-button"
            data-component="button"
          >
            <PanelLeft data-slot="icon" />
          </LayoutSidebarOpenButton>
          {props.children}
        </Page>
      </LayoutContent>
    </Layout>
  );
}

export { AppLayout };
