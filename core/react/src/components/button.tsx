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
  Text as AriaText,
  ButtonContext,
  useContextProps,
  useSlottedContext,
} from "react-aria-components";

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/
type WinnieButtonProps = {
  /**
   * Changes the color of the button
   *
   * @default "accent"
   */
  color?:
    | "brand"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "grey";

  /**
   * Changes the size of the button
   *
   * @default undefined
   */
  radius?: "none" | "sm" | "md" | "lg" | "round";

  /**
   * Ref to button element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaButton>>;

  /**
   * Changes the size of the button
   *
   * @default "md"
   */
  size?: "sm" | "md" | "lg";

  /**
   * Changes the look of the button
   *
   * @default "solid"
   */
  variant?: "solid" | "outlined" | "soft" | "plain";

  /**
   * Changes the width of the button
   *
   * @default "auto"
   */
  width?: "auto" | "full";
};

type ButtonProps = AriaButtonProps & WinnieButtonProps;

/**
 * # Button
 * Trigger an event, action or operation.
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <Button>
 *  <ButtonLabel />
 *  <ButtonIcon />
 *  <ButtonPending />
 * </Button>
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/button Documentation} for examples.
 */
function Button({
  className,
  children,
  color = undefined,
  radius = undefined,
  size = "md",
  variant = "solid",
  width = "auto",
  ref,
  ...props
}: ButtonProps) {
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
          "wui-focus-ring__tight": variant === "plain",
        })}
        data-accent-color={color}
        data-component="button"
        data-radius={radius}
        data-size={size}
        data-variant={variant}
        data-width={width}
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
type ButtonLabelProps = ComponentPropsWithoutRef<typeof AriaText> & {
  /**
   * Ref to span element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaText>>;
};

function ButtonLabel({
  className,
  children,
  ref,
  ...props
}: PropsWithChildren<ButtonLabelProps>) {
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
  WinnieButtonProps,
};
