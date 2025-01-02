import {
  Layout,
  LayoutContent,
  LayoutMask,
  LayoutSidebar,
  LayoutSidebarOpenButton,
  LayoutSidebarResizeHandle,
} from "@winnie-ui/react/layout";

// import { Page, PageHeader } from "../../ds/page/page";

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
        <LayoutSidebarOpenButton icon={<PanelLeft />} />
        Breadcrumbs
        {props.children}
      </LayoutContent>
    </Layout>
  );
}

export { AppLayout };
