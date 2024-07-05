import type { PropsWithChildren, ReactNode } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";

import "./demo-tabs.css";

type DemoTabsProps = {
  tsx: ReactNode;
  css: ReactNode;
};

export function DemoTabs({ tsx, css }: PropsWithChildren<DemoTabsProps>) {
  return (
    <Tabs className="wui-demo-tabs">
      <TabList className="wui-demo-tab-list" aria-label="React and CSS Code">
        <Tab id="tsx" className="wui-demo-tab">
          React
        </Tab>
        <Tab id="css" className="wui-demo-tab">
          CSS
        </Tab>
      </TabList>
      <TabPanel id="tsx" className="wui-demo-tab-panel">
        {tsx}
      </TabPanel>
      <TabPanel id="css" className="wui-demo-tab-panel">
        {css}
      </TabPanel>
    </Tabs>
  );
}
