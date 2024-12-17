import {
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";

import { TypographyProps } from "../utils/get-typography-props";
import { type WinnieButtonProps } from "./button";

type LinkButtonProps = AriaLinkProps &
  WinnieButtonProps & {
    styledAs?: "button";
  };

type LinkTextProps = AriaLinkProps &
  TypographyProps & {
    styledAs?: "text";
  };

type LinkProps = LinkButtonProps | LinkTextProps;

function Link({ children }: LinkProps) {
  return <AriaLink data-component="text">{children}</AriaLink>;
}

export { Link };
