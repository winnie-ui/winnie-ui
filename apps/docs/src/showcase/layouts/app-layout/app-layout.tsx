import {
  Layout,
  LayoutContent,
  LayoutMask,
  LayoutSidebar,
  LayoutSidebarOpenButton,
  LayoutSidebarResizeHandle,
} from "~/showcase/components/ds/layout/layout";

import {
  Page,
  PageContent,
  PageHeader,
} from "~/showcase/components/ds/page/page";

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
          <span>Goho Pizza Co.</span>
        </header>
        <LayoutSidebarResizeHandle />
      </LayoutSidebar>
      <LayoutContent>
        <Page>
          <PageHeader>
            <LayoutSidebarOpenButton>
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
