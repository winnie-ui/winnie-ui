import type { PropsWithChildren } from "react";

export default function DocsLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full gap-4 [--wui-docs-layout-sidebar-width:296px]">
      <nav className="bg-accent-3 - 16px)] fixed h-full w-[calc(var(--wui-docs-layout-sidebar-width)">
        Sidebar
      </nav>
      <main className="bg-accent-3 w-full p-4 pl-[var(--wui-docs-layout-sidebar-width)]">
        <div className="bg-white-a9 rounded-4 border-accent-a5 h-full overflow-auto border shadow-[-2px_0px_16px_-2px_hsl(var(--wui-shadow-color)/calc(var(--wui-shadow-strength)+10%))]">
          <div className="flex gap-6 pt-9 pr-6 pl-9">
            <article className="mx-auto max-w-[65ch]">{children}</article>
            <aside className="sticky top-9 block h-max">
              Table of contents
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
