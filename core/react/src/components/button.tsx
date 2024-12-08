import clsx from "clsx";
import {
  Children,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type PropsWithChildren,
  type ReactElement,
  cloneElement,
  forwardRef,
} from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/
type ButtonElement = ElementRef<typeof AriaButton>;
type ButtonProps = AriaButtonProps & {
  /**
   * Changes the color of the button
   */
  color?: "red" | "accent" | "grey";

  /**
   * Changes the look of the button
   */
  variant?: "solid" | "soft" | "ghost";
};

const Button = forwardRef<ButtonElement, PropsWithChildren<ButtonProps>>(
  (
    { className, children, color = "accent", variant = "solid", ...props },
    ref,
  ) => {
    return (
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
        {props.isPending && props.loadingComponent && (
          <span className="wui-button__loading" data-slot="loading">
            {props.loadingComponent}
          </span>
        )}
        {children}
      </AriaButton>
    );
  },
);

/* -------------------------------------------------------------------------------------------------
 * ButtonLabel
 * -----------------------------------------------------------------------------------------------*/
type ButtonLabelElement = ElementRef<"span">;
type ButtonLabelProps = ComponentPropsWithoutRef<"span">;

const ButtonLabel = forwardRef<
  ButtonLabelElement,
  PropsWithChildren<ButtonLabelProps>
>(({ className, children, ...props }, ref) => {
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
});

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

  return cloneElement(icon as ReactElement, {
    className: clsx("wui-button__icon", className),
    "data-slot": "icon",
  });
};

export { Button, ButtonLabel, ButtonIcon };
export type { ButtonProps, ButtonLabelProps, ButtonIconProps };
