import { type ComponentRef, type ForwardedRef } from "react";
import { type IconProps, getIconProps } from "../../../utils/get-icon-props";

import clsx from "clsx";

type DotProps = IconProps & {
  /**
   * Ref to button element
   */
  ref?: ForwardedRef<ComponentRef<"svg">>;
};

/**
 * # Outlined - Dot
 *
 *
 * ```tsx
 * <Dot />
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/icons Documentation} for examples.
 */
function Dot({
  className,
  color = undefined,
  contrast = "high",
  size = "3",
  ...props
}: DotProps) {
  return (
    <svg
      {...props}
      {...getIconProps({ color, contrast, size })}
      className={clsx("wui-icon wui-icon-solid wui-icon-dot", className)}
      data-component="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export { Dot };
export type { DotProps };
