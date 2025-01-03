type IconProps = {
  /**
   * Icon className
   */
  className?: string;

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
};

/**
 * Builds an object of props for icon components
 *
 * @param props IconProps
 * @returns object of props
 */
function getIconProps({ color, contrast = "high", size = "2" }: IconProps) {
  return {
    "data-accent-color": color,
    "data-contrast": contrast,
    "data-size": size,
  };
}

export { getIconProps };
export type { IconProps };
