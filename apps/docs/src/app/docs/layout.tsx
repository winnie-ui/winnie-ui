import type { PropsWithChildren } from "react";

export default function DocsLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full gap-4 [--wui-docs-layout-sidebar-width:296px]">
      <nav className="bg-accent-3 - 16px)] fixed h-full w-[calc(var(--wui-docs-layout-sidebar-width)">
        Sidebar
      </nav>
      <main className="bg-accent-3 w-full p-4 pl-[var(--wui-docs-layout-sidebar-width)]">
        <div className="bg-white-a8 rounded-4 border-accent-a5 h-full overflow-auto border shadow-[-2px_0px_16px_-2px_hsl(var(--wui-shadow-color)/calc(var(--wui-shadow-strength)+10%))]">
          {children}
        </div>
      </main>
    </div>
  );
}
