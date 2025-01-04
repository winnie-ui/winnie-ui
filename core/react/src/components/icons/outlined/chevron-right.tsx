import { type ComponentRef, type ForwardedRef } from "react";
import { type IconProps, getIconProps } from "../../../utils/get-icon-props";

import clsx from "clsx";

type ChevronRightProps = IconProps & {
  /**
   * Ref to button element
   */
  ref?: ForwardedRef<ComponentRef<"svg">>;
};

/**
 * # Outlined - ChevronRight
 *
 *
 * ```tsx
 * <ChevronRight />
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/icons Documentation} for examples.
 */
function ChevronRight({
  className,
  color = undefined,
  contrast = "high",
  size = "3",
  ...props
}: ChevronRightProps) {
  return (
    <svg
      {...props}
      {...getIconProps({ color, contrast, size })}
      className={clsx(
        "wui-icon wui-icon-outlined wui-icon-chevron-right",
        className,
      )}
      data-component="icon"
      width="16"
      height="16"
      strokeWidth="1.5"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export { ChevronRight };
export type { ChevronRightProps };
