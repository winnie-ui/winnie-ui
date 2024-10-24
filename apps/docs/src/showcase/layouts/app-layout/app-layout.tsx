import {
  Layout,
  LayoutContent,
  LayoutMask,
  LayoutSidebar,
} from "~/showcase/components/ds/layout";

import { Page } from "~/showcase/components/ds/page";

import "./app-layout.css";

/* -------------------------------------------------------------------------------------------------
 * AppLayout
 * -----------------------------------------------------------------------------------------------*/
function AppLayout() {
  return (
    <Layout className="showcase-app-layout">
      <LayoutMask className="showcase-app-layout__mask" />
      <LayoutSidebar className="showcase-app-layout__sidebar">
        sidebar
      </LayoutSidebar>
      <LayoutContent className="showcase-app-layout__content">
        <Page className="showcase-app-layout__page"></Page>
      </LayoutContent>
    </Layout>
  );
}

export { AppLayout };
