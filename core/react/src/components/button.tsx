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
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  ButtonContext,
  useContextProps,
  useSlottedContext,
} from "react-aria-components";

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/
type ButtonProps = AriaButtonProps & {
  /**
   * Changes the color of the button
   */
  color?: "red" | "accent" | "grey";

  /**
   * Ref to button element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaButton>>;

  /**
   * Changes the look of the button
   */
  variant?: "solid" | "soft" | "ghost";
};

function Button({
  className,
  children,
  color = "accent",
  variant = "solid",
  ref,
  ...props
}: PropsWithChildren<ButtonProps>) {
  /**
   * merge context with provided props
   */
  [props, ref] = useContextProps(props, ref!, ButtonContext);

  return (
    <ButtonContext.Provider
      value={{ isPending: props.isPending, isDisabled: props.isPending }}
    >
      <AriaButton
        {...props}
        className={clsx("wui-button wui-focus-ring", className, {
          "wui-focus-ring__tight": variant === "ghost",
        })}
        data-accent-color={color === "accent" ? undefined : color}
        data-component="button"
        data-variant={variant}
        ref={ref}
      >
        {children}
      </AriaButton>
    </ButtonContext.Provider>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonLabel
 * -----------------------------------------------------------------------------------------------*/
type ButtonLabelProps = ComponentPropsWithoutRef<"span"> & {
  /**
   * Ref to span element
   */
  ref?: ForwardedRef<ComponentRef<"span">>;
};

function ButtonLabel({
  className,
  children,
  ref,
  ...props
}: PropsWithChildren<ButtonLabelProps>) {
  return (
    <span
      {...props}
      className={clsx("wui-button__label", className)}
      data-slot="label"
      ref={ref}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonPending
 * -----------------------------------------------------------------------------------------------*/
type ButtonPendingProps = ComponentPropsWithoutRef<"span"> & {
  /**
   * Ref to span element
   */
  ref?: ForwardedRef<ComponentRef<"span">>;
};

function ButtonPending({
  className,
  children,
  ref,
  ...props
}: PropsWithChildren<ButtonLabelProps>) {
  /**
   * Subscribe to button context
   */
  const buttonState = useSlottedContext(ButtonContext);

  if (buttonState && !buttonState.isPending) {
    return null;
  }

  return (
    <span
      className={clsx("wui-button__pending", className)}
      data-slot="pending"
      {...props}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonIcon
 * -----------------------------------------------------------------------------------------------*/
type ButtonIconProps = {
  className?: string;
};

const ButtonIcon = ({
  className,
  children,
}: PropsWithChildren<ButtonIconProps>) => {
  /**
   * Check that there is a single child passed
   */
  if (Children.count(children) > 1) {
    throw new Error("ButtonIcon accepts only one child");
  }
  /**
   * Convert children to array
   */
  const icon = Children.only(children);

  return cloneElement(
    icon as ReactElement<ButtonIconProps & { "data-slot": string }>,
    {
      className: clsx("wui-button__icon", className),
      "data-slot": "icon",
    },
  );
};

export { Button, ButtonLabel, ButtonIcon, ButtonPending, ButtonContext };
export type {
  ButtonProps,
  ButtonLabelProps,
  ButtonIconProps,
  ButtonPendingProps,
};
