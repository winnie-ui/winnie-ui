import { type ComponentRef, type ForwardedRef } from "react";
import { type IconProps, getIconProps } from "../../../utils/get-icon-props";

import clsx from "clsx";

type CheckProps = IconProps & {
  /**
   * Ref to button element
   */
  ref?: ForwardedRef<ComponentRef<"svg">>;
};

/**
 * # Outlined - Check
 *
 *
 * ```tsx
 * <Check />
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/icons Documentation} for examples.
 */
function Check({
  className,
  color = "grey",
  contrast = "high",
  size = "3",
  ...props
}: CheckProps) {
  return (
    <svg
      {...props}
      {...getIconProps({ color, contrast, size })}
      className={clsx("wui-icon wui-icon-outlined wui-icon-check", className)}
      data-component="icon"
      width="16"
      height="16"
      strokeWidth="1.5"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export { Check };
export type { CheckProps };
