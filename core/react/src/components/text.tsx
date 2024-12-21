import clsx from "clsx";
import { ComponentRef, ForwardedRef } from "react";
import {
  Text as AriaText,
  type TextProps as AriaTextProps,
} from "react-aria-components";

import {
  type TypographyProps,
  getTypographyProps,
} from "../utils/get-typography-props";

/* -------------------------------------------------------------------------------------------------
 * Text
 * -----------------------------------------------------------------------------------------------*/
type TextProps = AriaTextProps &
  TypographyProps & {
    /**
     * Ref to text element
     */
    ref?: ForwardedRef<ComponentRef<typeof AriaText>>;
  };

/**
 * # Text
 * Foundational text component
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <Text />
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/text Documentation} for examples.
 */
function Text({
  align,
  color = "grey",
  className,
  children,
  contrast,
  size,
  weight,
  ref,
  ...props
}: TextProps) {
  return (
    <AriaText
      {...props}
      data-component="text"
      {...getTypographyProps({ align, color, contrast, size, weight })}
      className={clsx("wui-text", className)}
      ref={ref}
    >
      {children}
    </AriaText>
  );
}

export { Text };
export type { TextProps };
