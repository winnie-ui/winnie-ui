import clsx from "clsx";
import { type ElementRef, type PropsWithChildren, forwardRef } from "react";
import {
  Heading as AriaHeading,
  type HeadingProps as AriaHeadingProps,
} from "react-aria-components";
import { type TypographyProps, getTypographyProps } from "./typography";

type HeadingElement = ElementRef<typeof AriaHeading>;
type HeadingProps = AriaHeadingProps & TypographyProps;

const Heading = forwardRef<HeadingElement, PropsWithChildren<HeadingProps>>(
  (
    {
      align,
      className,
      children,
      color,
      contrast,
      size = "6",
      weight = "semibold",
      ...props
    },
    ref,
  ) => {
    return (
      <AriaHeading
        {...props}
        {...getTypographyProps({ align, color, contrast, size, weight })}
        className={clsx("wui-typography wui-heading", className)}
        ref={ref}
      >
        {children}
      </AriaHeading>
    );
  },
);

export { Heading };
export type { HeadingProps };
