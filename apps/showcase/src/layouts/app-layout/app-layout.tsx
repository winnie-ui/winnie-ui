import {
  Layout,
  LayoutContent,
  LayoutMask,
  LayoutSidebar,
  LayoutSidebarResizeHandle,
  LayoutSidebarToggle,
} from "@winnie-ui/react/layout";

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
        <LayoutSidebarToggle icon={<PanelLeft />} />
        Breadcrumbs
        {props.children}
      </LayoutContent>
    </Layout>
  );
}

export { AppLayout };
