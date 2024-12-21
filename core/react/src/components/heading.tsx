import clsx from "clsx";
import { ComponentRef, ForwardedRef } from "react";
import {
  Heading as AriaHeading,
  type HeadingProps as AriaHeadingProps,
} from "react-aria-components";

import {
  type TypographyProps,
  getTypographyProps,
} from "../utils/get-typography-props";

/* -------------------------------------------------------------------------------------------------
 * Heading
 * -----------------------------------------------------------------------------------------------*/
type HeadingProps = AriaHeadingProps &
  TypographyProps & {
    /**
     * Ref to heading element
     */
    ref?: ForwardedRef<ComponentRef<typeof AriaHeading>>;
  };

/**
 * # Heading
 * Foundational heading component
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <Heading />
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/heading Documentation} for examples.
 */
function Heading({
  align,
  color = "grey",
  className,
  children,
  contrast,
  size = "5",
  weight = "semibold",
  ref,
  ...props
}: HeadingProps) {
  return (
    <AriaHeading
      {...props}
      data-component="heading"
      {...getTypographyProps({ align, color, contrast, size, weight })}
      className={clsx("wui-heading", className)}
      ref={ref}
    >
      {children}
    </AriaHeading>
  );
}

export { Heading };
export type { HeadingProps };
