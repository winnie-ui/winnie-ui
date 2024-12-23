import clsx from "clsx";
import {
  Children,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  ForwardedRef,
  type PropsWithChildren,
  type ReactElement,
  cloneElement,
} from "react";

import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
  Text as AriaText,
  LinkContext as LinkButtonContext,
} from "react-aria-components";
import { WinnieButtonProps } from "./button";

/* -------------------------------------------------------------------------------------------------
 * LinkButton
 * -----------------------------------------------------------------------------------------------*/
type LinkButtonProps = AriaLinkProps &
  Omit<WinnieButtonProps, "ref"> & {
    /**
     * Ref to button element
     */
    ref?: ForwardedRef<ComponentRef<typeof AriaLink>>;
  };

/**
 * # LinkButton
 * Navigates a user between pages.
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <LinkButton>
 *  <LinkButtonLabel />
 *  <LinkButtonIcon />
 * </LinkButton>
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/link-button Documentation} for examples.
 */
function LinkButton({
  className,
  children,
  color = undefined,
  radius = undefined,
  size = "md",
  variant = "solid",
  width = "auto",
  ref,
  ...props
}: LinkButtonProps) {
  return (
    <AriaLink
      {...props}
      className={clsx("wui-button", className)}
      data-accent-color={color}
      data-component="button"
      data-radius={radius}
      data-size={size}
      data-variant={variant}
      data-width={width}
      ref={ref}
    >
      {children}
    </AriaLink>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkButtonLabel
 * -----------------------------------------------------------------------------------------------*/
type LinkButtonLabelProps = ComponentPropsWithoutRef<typeof AriaText> & {
  /**
   * Ref to span element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaText>>;
};

function LinkButtonLabel({
  className,
  children,
  ref,
  ...props
}: PropsWithChildren<LinkButtonLabelProps>) {
  return (
    <AriaText
      {...props}
      className={clsx("wui-button__label", className)}
      data-slot="label"
      ref={ref}
    >
      {children}
    </AriaText>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkButtonIcon
 * -----------------------------------------------------------------------------------------------*/
type LinkButtonIconProps = {
  className?: string;
};

const LinkButtonIcon = ({
  className,
  children,
}: PropsWithChildren<LinkButtonIconProps>) => {
  /**
   * Check that there is a single child passed
   */
  if (Children.count(children) > 1) {
    throw new Error("LinkButtonIcon accepts only one child");
  }
  /**
   * Convert children to array
   */
  const icon = Children.only(children);

  return cloneElement(
    icon as ReactElement<LinkButtonIconProps & { "data-slot": string }>,
    {
      className: clsx("wui-button__icon", className),
      "data-slot": "icon",
    },
  );
};

export { LinkButton, LinkButtonLabel, LinkButtonIcon, LinkButtonContext };
export type { LinkButtonProps, LinkButtonLabelProps, LinkButtonIconProps };
