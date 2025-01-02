import clsx from "clsx";
import type { ComponentRef, ForwardedRef } from "react";
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  type MenuItemProps as AriaMenuItemProps,
  type MenuProps as AriaMenuProps,
  MenuTrigger as AriaMenuTrigger,
  type MenuTriggerProps as AriaMenuTriggerProps,
  Popover as AriaPopover,
  type PopoverProps as AriaPopoverProps,
  Text as AriaText,
  type TextProps as AriaTextProps,
} from "react-aria-components";

/* -------------------------------------------------------------------------------------------------
 * MenuProvider
 * -----------------------------------------------------------------------------------------------*/
type MenuProviderProps = AriaMenuTriggerProps;

/**
 * # Menu
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <MenuProvider>
 *  <Button />
 *  <MenuPopover>
 *    <Menu>
 *      <MenuItem />
 *    </Menu>
 *  </Popover>
 * </MenuProvider>
 * ```
 *
 * > Note: This component uses the `MenuTrigger` component from react-aria-components under the hood.
 *
 * See {@link https://winnie-ui.com/react/docs/components/menu Documentation} for examples.
 */
function MenuProvider({ children, ...props }: MenuProviderProps) {
  return <AriaMenuTrigger {...props}>{children}</AriaMenuTrigger>;
}

/* -------------------------------------------------------------------------------------------------
 * MenuButton
 * -----------------------------------------------------------------------------------------------*/
// type MenuButtonProps = AriaButtonProps & {
//   /**
//    * Ref to button element
//    */
//   ref?: ForwardedRef<ComponentRef<typeof AriaButton>>;
// };
//
// function MenuButton({ children, className, ref, ...props }: MenuButtonProps) {
//   return (
//     <AriaButton
//       {...props}
//       className={clsx(className, "wui-menu-button")}
//       ref={ref}
//     >
//       {children}
//     </AriaButton>
//   );
// }

/* -------------------------------------------------------------------------------------------------
 * MenuPopover
 * -----------------------------------------------------------------------------------------------*/
type MenuPopoverProps = AriaPopoverProps & {
  /**
   * Ref to popover element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaPopover>>;
};

function MenuPopover({ children, className, ref, ...props }: MenuPopoverProps) {
  return (
    <AriaPopover
      {...props}
      data-component="popover"
      className={clsx(className, "wui-popover")}
      ref={ref}
    >
      {children}
    </AriaPopover>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Menu
 * -----------------------------------------------------------------------------------------------*/
type MenuProps<T> = AriaMenuProps<T> & {
  /**
   * Ref to menu element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaMenu>>;
};

function Menu<T extends object>({
  children,
  className,
  ref,
  ...props
}: MenuProps<T>) {
  return (
    <AriaMenu
      {...props}
      data-component="listbox"
      className={clsx(className, "wui-menu")}
      ref={ref}
    >
      {children}
    </AriaMenu>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuItem
 * -----------------------------------------------------------------------------------------------*/
type MenuItemProps = AriaMenuItemProps & {
  /**
   * Ref to menu item element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaMenuItem>>;
};

function MenuItem({ children, className, ref, ...props }: MenuItemProps) {
  /**
   * Compute the text value based on the typeof provided children
   */
  const textValue =
    props.textValue || (typeof children === "string" ? children : undefined);

  return (
    <AriaMenuItem
      {...props}
      data-component="listbox-item"
      className={clsx(className, "wui-menu__item")}
      ref={ref}
      textValue={textValue}
    >
      {children}
    </AriaMenuItem>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuItemLabel
 * -----------------------------------------------------------------------------------------------*/
type MenuItemLabelProps = AriaTextProps & {
  /**
   * Ref to menu item element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaText>>;
};

function MenuItemLabel({
  children,
  className,
  ref,
  ...props
}: MenuItemLabelProps) {
  return (
    <AriaText
      {...props}
      slot="label"
      data-slot="label"
      className={clsx(className, "wui-menu__item-label")}
      ref={ref}
    >
      {children}
    </AriaText>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuItemDescription
 * -----------------------------------------------------------------------------------------------*/
type MenuItemDescriptionProps = AriaTextProps & {
  /**
   * Ref to menu item element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaText>>;
};

function MenuItemDescription({
  children,
  className,
  ref,
  ...props
}: MenuItemDescriptionProps) {
  return (
    <AriaText
      {...props}
      slot="description"
      data-slot="description"
      className={clsx(className, "wui-menu__item-description")}
      ref={ref}
    >
      {children}
    </AriaText>
  );
}

export {
  MenuProvider,
  MenuPopover,
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuItemDescription,
};
export type {
  MenuProviderProps,
  MenuPopoverProps,
  MenuProps,
  MenuItemProps,
  MenuItemLabelProps,
  MenuItemDescriptionProps,
};
