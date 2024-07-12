const THEME_LOCALSTORAGE_KEY = "wuiTheme";

export type Theme = {
  color:
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "brand";
  radius: "none" | "sm" | "md" | "lg" | "round";
  scale: "90%" | "95%" | "100%" | "105%" | "110%";
  mode: "light" | "dark";
};

export type ThemeSelectors =
  | "data-radius"
  | "data-accent-color"
  | "data-scale"
  | "data-theme";

export const defaultTheme = {
  color: "yellow",
  radius: "round",
  scale: "95%",
  mode: "light",
} satisfies Theme;

/**
 * Retrieves the users current theme from localStorage
 */
export function getTheme(): Theme {
  const theme = localStorage.getItem(THEME_LOCALSTORAGE_KEY);

  if (theme == null) {
    return defaultTheme;
  }

  return JSON.parse(theme);
}

/**
 * Sets the users current theme in localStorage
 *
 * @param theme Current theme configuration
 */
export function setTheme(theme: Theme) {
  const html = document.querySelector("html")!;
  html.setAttribute("data-accent-color", theme.color);
  html.setAttribute("data-radius", theme.radius);
  html.setAttribute("data-scale", theme.scale);
  html.setAttribute("data-theme", theme.mode);
  localStorage.setItem(THEME_LOCALSTORAGE_KEY, JSON.stringify(theme));
}

/**
 * Sets the users current theme in localStorage
 *
 * @param theme Current theme configuration
 */
export function updateTheme(key: keyof Theme, value: string) {
  const currentTheme = getTheme();

  setTheme({
    ...currentTheme,
    [key]: value,
  });
}
