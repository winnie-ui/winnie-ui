export type NavigationItem = {
  label: string;
  link?: string;
  items?: NavigationItem[];
  badge?: "wip" | "new";
};
