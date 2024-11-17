import clsx from "clsx";
import { type ElementRef, type PropsWithChildren, forwardRef } from "react";
import {
  Text as AriaText,
  type TextProps as AriaTextProps,
} from "react-aria-components";
import { type TypographyProps, getTypographyProps } from "./typography";

type TextElement = ElementRef<typeof AriaText>;
type TextProps = AriaTextProps & TypographyProps;

const Text = forwardRef<TextElement, PropsWithChildren<TextProps>>(
  (
    { align, className, children, color, contrast, size, weight, ...props },
    ref,
  ) => {
    return (
      <AriaText
        {...props}
        {...getTypographyProps({ align, color, contrast, size, weight })}
        className={clsx("wui-typography wui-text", className)}
        ref={ref}
      >
        {children}
      </AriaText>
    );
  },
);

export { Text };
export type { TextProps };
