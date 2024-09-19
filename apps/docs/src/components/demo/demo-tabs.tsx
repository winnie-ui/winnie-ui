import type { ReactNode } from "react";

import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";

import "./demo-tabs.css";

type DemoTabsProps = {
  tsx?: ReactNode;
  css?: ReactNode;
  html?: ReactNode;
  /*
   * This is a drawback of client:load in astro.
   * when a slot is passed to a react component a element is created even if technically
   * it should be conditionally rendered from the astro side. So as a workaround, we are passing
   * the renderX to allow us to conditionally render tabs and tab panels
   */
  renderTsx: boolean;
  renderCss: boolean;
  renderHtml: boolean;
};

function DemoTabs({
  tsx,
  css,
  html,
  renderTsx,
  renderCss,
  renderHtml,
}: DemoTabsProps) {
  return (
    <Tabs className="wui-demo-tabs">
      <TabList className="wui-demo-tab-list">
        {renderTsx && (
          <Tab className="wui-demo-tab" id="tsx">
            React
          </Tab>
        )}
        {renderHtml && (
          <Tab className="wui-demo-tab" id="html">
            HTML
          </Tab>
        )}
        {renderCss && (
          <Tab className="wui-demo-tab" id="css">
            CSS
          </Tab>
        )}
      </TabList>
      {renderTsx && <TabPanel id="tsx">{tsx}</TabPanel>}
      {renderHtml && <TabPanel id="html">{html}</TabPanel>}
      {renderCss && <TabPanel id="css">{css}</TabPanel>}
    </Tabs>
  );
}

export { DemoTabs };
export type { DemoTabsProps };
