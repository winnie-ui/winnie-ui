import {
  Layout,
  LayoutContent,
  LayoutMask,
  LayoutSidebar,
} from "~/showcase/components/ds/layout";

import { Page } from "~/showcase/components/ds/page";

import "./app-layout.css";
import type { PropsWithChildren } from "react";

/* -------------------------------------------------------------------------------------------------
 * AppLayout
 * -----------------------------------------------------------------------------------------------*/
function AppLayout(props: PropsWithChildren) {
  return (
    <Layout className="showcase-app-layout">
      <LayoutMask className="showcase-app-layout__mask" />
      <LayoutSidebar className="showcase-app-layout__sidebar">
        sidebar
      </LayoutSidebar>
      <LayoutContent className="showcase-app-layout__content">
        <Page className="showcase-app-layout__page">{props.children}</Page>
      </LayoutContent>
    </Layout>
  );
}

export { AppLayout };
