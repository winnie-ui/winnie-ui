import type { PropsWithChildren } from "react";

import "./whats-next-card-grid.css";

export function WhatsNextCardGrid({ children }: PropsWithChildren) {
  return <div className="whats-next-card-grid">{children}</div>;
}
