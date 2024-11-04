import {
  Layout,
  LayoutContent,
  LayoutMask,
  LayoutSidebar,
  LayoutSidebarOpenButton,
  LayoutSidebarResizeHandle,
} from "~/showcase/components/ds/layout";

import { Page, PageContent, PageHeader } from "~/showcase/components/ds/page";

import { PanelLeft } from "lucide-react";
import type { PropsWithChildren } from "react";

import "./app-layout.css";

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
        <LayoutSidebarResizeHandle className="showcase-app-layout__sidebar-resize-handle">
          <span className="showcase-app-layout__sidebar-sidebar-resize-handle-thumb" />
        </LayoutSidebarResizeHandle>
      </LayoutSidebar>
      <LayoutContent className="showcase-app-layout__content">
        <Page className="showcase-app-layout__page">
          <PageHeader>
            <LayoutSidebarOpenButton
              className="showcase-app-layout__sidebar-open-button"
              data-component="button"
            >
              <PanelLeft data-slot="icon" />
            </LayoutSidebarOpenButton>
            <div>Hello World</div>
          </PageHeader>
          <PageContent>{props.children}</PageContent>
        </Page>
      </LayoutContent>
    </Layout>
  );
}

export { AppLayout };
