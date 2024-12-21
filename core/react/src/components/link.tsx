import clsx from "clsx";
import { ComponentRef, ForwardedRef } from "react";
import {
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";

import {
  type TypographyProps,
  getTypographyProps,
} from "../utils/get-typography-props";

type LinkTextProps = AriaLinkProps &
  Omit<TypographyProps, "align"> & {
    /**
     * Ref to link element
     */
    ref?: ForwardedRef<ComponentRef<typeof AriaLink>>;
  };

type LinkProps = LinkTextProps;

/* -------------------------------------------------------------------------------------------------
 * Link
 * -----------------------------------------------------------------------------------------------*/
/**
 * # Link
 * Foundational heading component
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <Link />
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/link Documentation} for examples.
 */
function Link({
  color,
  className,
  children,
  contrast,
  size,
  weight,
  ref,
  ...props
}: LinkProps) {
  return (
    <AriaLink
      {...props}
      data-component="link"
      {...getTypographyProps({ align: "left", color, contrast, size, weight })}
      className={clsx("wui-link", className)}
      ref={ref}
    >
      {children}
    </AriaLink>
  );
}

export { Link };
export type { LinkProps };
