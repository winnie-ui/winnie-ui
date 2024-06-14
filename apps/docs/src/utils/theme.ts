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
};

export type ThemeSelectors = "data-radius" | "data-accent-color" | "data-scale";

export const defaultTheme = {
  color: "yellow",
  radius: "round",
  scale: "100%",
} satisfies Theme;

/**
 * Retrieves the users current theme from localStorage
 */
export function getTheme() {
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
  localStorage.setItem(THEME_LOCALSTORAGE_KEY, JSON.stringify(theme));
}

/**
 * Sets the users current theme in localStorage
 *
 * @param theme Current theme configuration
 */
export function updateTheme(
  key: keyof Theme,
  selector: ThemeSelectors,
  value: string,
) {
  const html = document.querySelector("html");
  html!.setAttribute(selector, value);

  const currentTheme = getTheme();

  localStorage.setItem(
    THEME_LOCALSTORAGE_KEY,
    JSON.stringify({ ...currentTheme, [key]: value }),
  );
}
