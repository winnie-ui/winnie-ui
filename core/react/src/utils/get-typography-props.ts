type TypographyProps = {
  /**
   * Alignment on the horizontal axis
   *
   * @default "left"
   */
  align?: "left" | "center" | "right";

  /**
   * Color of the type
   *
   * @default "grey"
   */
  color?:
    | "brand"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "grey";

  /**
   * Contrast of the type
   *
   * @default "high"
   */
  contrast?: "low" | "normal" | "high";

  /**
   * Size of the type
   *
   * @default "3"
   */
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

  /**
   * Font weight of the type
   *
   * @default "normal"
   */
  weight?: "normal" | "medium" | "semibold" | "bold" | "extra-bold";
};

/**
 * Builds an object of props for typography components
 *
 * @param props TypographyProps
 * @returns object of props
 */
function getTypographyProps({
  align = "left",
  color = "grey",
  contrast = "high",
  size = "3",
  weight = "normal",
}: TypographyProps) {
  return {
    "data-accent-color": color,
    "data-align": align,
    "data-contrast": contrast,
    "data-size": size,
    "data-weight": weight,
  };
}

export { getTypographyProps };
export type { TypographyProps };
