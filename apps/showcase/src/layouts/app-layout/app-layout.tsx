import {
  Layout,
  LayoutContent,
  LayoutMask,
  LayoutSidebar,
  LayoutSidebarOpenButton,
  LayoutSidebarResizeHandle,
} from "../../components/ds/layout/layout";

import { Page, PageHeader } from "../../components/ds/page/page";

import { PanelLeft } from "lucide-react";
import type { PropsWithChildren } from "react";

/* -------------------------------------------------------------------------------------------------
 * AppLayout
 * -----------------------------------------------------------------------------------------------*/
function AppLayout(props: PropsWithChildren) {
  return (
    <Layout>
      <LayoutMask />
      <LayoutSidebar>
        <header className="sidebar__header">
          <span>Adam Aho</span>
        </header>
        <LayoutSidebarResizeHandle />
      </LayoutSidebar>
      <LayoutContent>
        <Page>
          <PageHeader>
            <LayoutSidebarOpenButton>
              <PanelLeft data-slot="icon" />
            </LayoutSidebarOpenButton>
            Breadcrumbs
          </PageHeader>
          {props.children}
        </Page>
      </LayoutContent>
    </Layout>
  );
}

export { AppLayout };
