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
        <header style={{ display: "flex", justifyContent: "flex-end" }}>
          <LayoutSidebarCloseButton className="showcase-app-layout__sidebar-close">
            <PanelLeft data-slot="icon" />
          </LayoutSidebarCloseButton>
        </header>
        sidebar
      </LayoutSidebar>
      <LayoutContent className="showcase-app-layout__content">
        <Page className="showcase-app-layout__page">
          <LayoutSidebarOpenButton className="showcase-app-layout__sidebar-open">
            <PanelLeft data-slot="icon" />
          </LayoutSidebarOpenButton>
          {props.children}
        </Page>
      </LayoutContent>
    </Layout>
  );
}

export { AppLayout };
