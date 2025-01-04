import clsx from "clsx";
import {
  Children,
  ComponentPropsWithoutRef,
  type ComponentRef,
  type ForwardedRef,
  PropsWithChildren,
  ReactElement,
  cloneElement,
} from "react";

import {
  Header as AriaHeader,
  Keyboard as AriaKeyboard,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  type MenuItemProps as AriaMenuItemProps,
  type MenuProps as AriaMenuProps,
  MenuSection as AriaMenuSection,
  type MenuSectionProps as AriaMenuSectionProps,
  MenuTrigger as AriaMenuTrigger,
  type MenuTriggerProps as AriaMenuTriggerProps,
  Popover as AriaPopover,
  type PopoverProps as AriaPopoverProps,
  Separator as AriaSeparator,
  type SeparatorProps as AriaSeparatorProps,
  Text as AriaText,
  type TextProps as AriaTextProps,
  type Selection,
} from "react-aria-components";

import { Check } from "./icons/outlined/check";
import { Dot } from "./icons/solid/dot";

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
      data-mode={props.selectionMode ? "selection" : undefined}
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
type MenuItemProps<T> = AriaMenuItemProps<T> & {
  /**
   * Changes the color of the menu item
   *
   * @default undefined
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
   * Ref to menu item element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaMenuItem>>;
};

function MenuItem<T extends object>({
  children,
  color = undefined,
  className,
  ref,
  ...props
}: MenuItemProps<T>) {
  /**
   * Compute the text value based on the typeof provided children
   */
  const textValue =
    props.textValue || (typeof children === "string" ? children : undefined);

  return (
    <AriaMenuItem
      {...props}
      data-component="listbox-item"
      data-accent-color={color}
      className={clsx(className, "wui-menu__item")}
      ref={ref}
      textValue={textValue}
    >
      {(renderProps) => (
        // @ts-ignore
        <>
          {renderProps.selectionMode === "single" && renderProps.isSelected && (
            <Dot data-slot="indicator" />
          )}
          {renderProps.selectionMode === "multiple" &&
            renderProps.isSelected && <Check data-slot="indicator" />}
          {children}
        </>
      )}
    </AriaMenuItem>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuItemGroup
 * -----------------------------------------------------------------------------------------------*/
type MenuItemGroupProps = AriaTextProps & {
  /**
   * Changes the arrangement of label and descroption slots
   *
   * @default "column"
   */
  orientation?: "row" | "column";

  /**
   * Ref to menu item group element
   */
  ref?: ForwardedRef<ComponentRef<"div">>;
};

function MenuItemGroup({
  children,
  className,
  orientation = "column",
  ref,
  ...props
}: MenuItemGroupProps) {
  return (
    <div
      {...props}
      data-component="group"
      data-orientation={orientation}
      className={clsx(className, "wui-menu__item-group")}
      ref={ref}
    >
      {children}
    </div>
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

/* -------------------------------------------------------------------------------------------------
 * MenuItemShortcut
 * -----------------------------------------------------------------------------------------------*/
type MenuItemShortcutProps = ComponentPropsWithoutRef<typeof AriaKeyboard> & {
  /**
   * Ref to menu item element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaKeyboard>>;
};

function MenuItemShortcut({
  children,
  className,
  ref,
  ...props
}: MenuItemShortcutProps) {
  return (
    <AriaKeyboard
      {...props}
      data-slot="shortcut"
      className={clsx(className, "wui-menu__item-shortcut")}
      ref={ref}
    >
      {children}
    </AriaKeyboard>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuItemIcon
 * -----------------------------------------------------------------------------------------------*/
type MenuItemIconProps = {
  className?: string;
};

const MenuItemIcon = ({
  className,
  children,
}: PropsWithChildren<MenuItemIconProps>) => {
  /**
   * Check that there is a single child passed
   */
  if (Children.count(children) > 1) {
    throw new Error("MenuItemIcon accepts only one child");
  }
  /**
   * Convert children to array
   */
  const icon = Children.only(children);

  return cloneElement(
    icon as ReactElement<MenuItemIconProps & { "data-slot": string }>,
    {
      className: clsx("wui-menu__item-icon", className),
      "data-slot": "icon",
    },
  );
};

/* -------------------------------------------------------------------------------------------------
 * MenuSeparator
 * -----------------------------------------------------------------------------------------------*/
type MenuSeparatorProps = AriaSeparatorProps & {
  /**
   * Ref to menu separator element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaSeparator>>;
};

function MenuSeparator({ className, ref, ...props }: MenuSeparatorProps) {
  return (
    <AriaSeparator
      {...props}
      data-component="separator"
      className={clsx(className, "wui-menu__separator")}
      ref={ref}
    />
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuSection
 * -----------------------------------------------------------------------------------------------*/
type MenuSectionProps<T> = AriaMenuSectionProps<T> & {
  /**
   * Ref to menu section element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaMenuSection>>;
};

function MenuSection<T extends object>({
  className,
  children,
  ref,
  ...props
}: MenuSectionProps<T>) {
  return (
    <AriaMenuSection
      {...props}
      data-component="section"
      className={clsx(className, "wui-menu__section")}
      ref={ref}
    >
      {children}
    </AriaMenuSection>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuSectionHeader
 * -----------------------------------------------------------------------------------------------*/
type MenuSectionHeaderProps = ComponentPropsWithoutRef<typeof AriaHeader> & {
  /**
   * Ref to menu section header element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaHeader>>;
};

function MenuSectionHeader({
  className,
  children,
  ref,
  ...props
}: MenuSectionHeaderProps) {
  return (
    <AriaHeader
      {...props}
      data-component="header"
      className={clsx(className, "wui-menu__section-header")}
      ref={ref}
    >
      {children}
    </AriaHeader>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuSectionLabel
 * -----------------------------------------------------------------------------------------------*/
type MenuSectionLabelProps = AriaTextProps & {
  /**
   * Ref to menu section label element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaText>>;
};

function MenuSectionLabel({
  className,
  children,
  ref,
  ...props
}: MenuSectionLabelProps) {
  return (
    <AriaText
      {...props}
      slot="label"
      data-slot="label"
      className={clsx(className, "wui-menu__section-label")}
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
  MenuSection,
  MenuSectionHeader,
  MenuSectionLabel,
  MenuSeparator,
  MenuItem,
  MenuItemGroup,
  MenuItemLabel,
  MenuItemDescription,
  MenuItemShortcut,
  MenuItemIcon,
};
export type {
  MenuProviderProps,
  MenuPopoverProps,
  MenuProps,
  MenuSectionProps,
  MenuSectionHeaderProps,
  MenuSectionLabelProps,
  MenuSeparatorProps,
  MenuItemProps,
  MenuItemGroupProps,
  MenuItemLabelProps,
  MenuItemDescriptionProps,
  MenuItemIconProps,
  MenuItemShortcutProps,
  Selection,
};
