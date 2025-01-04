import { Button, ButtonIcon, ButtonLabel } from "@winnie-ui/react/button";
import {
  Menu,
  MenuItem,
  MenuItemDescription,
  MenuItemGroup,
  MenuItemIcon,
  MenuItemLabel,
  MenuItemShortcut,
  MenuPopover,
  MenuProvider,
  MenuSection,
  MenuSectionHeader,
  MenuSectionLabel,
  MenuSeparator,
  type Selection,
} from "@winnie-ui/react/menu";
import { ChevronDown, Cog, Info, LogOut, Moon, User } from "lucide-react";
import { useState } from "react";

/* -------------------------------------------------------------------------------------------------
 * DishActionButton
 * -----------------------------------------------------------------------------------------------*/
export function DishActionButton() {
  return (
    <MenuProvider>
      <Button variant="outlined">
        <ButtonLabel>Dish Actions</ButtonLabel>
        <ButtonIcon>
          <ChevronDown />
        </ButtonIcon>
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <MenuItemLabel>Assign To</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Edit</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Duplicate</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Delete</MenuItemLabel>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuProvider>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuColorDemo
 * -----------------------------------------------------------------------------------------------*/
export function MenuColorDemo() {
  return (
    <MenuProvider>
      <Button variant="outlined">
        <ButtonLabel>Dish Actions</ButtonLabel>
        <ButtonIcon>
          <ChevronDown />
        </ButtonIcon>
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <MenuItemLabel>Assign To</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Edit</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Duplicate</MenuItemLabel>
          </MenuItem>
          <MenuItem color="red">
            <MenuItemLabel>Delete</MenuItemLabel>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuProvider>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuIconDemo
 * -----------------------------------------------------------------------------------------------*/
export function MenuIconDemo() {
  return (
    <MenuProvider>
      <Button variant="outlined">
        <ButtonLabel>Preferences</ButtonLabel>
        <ButtonIcon>
          <ChevronDown />
        </ButtonIcon>
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <MenuItemIcon>
              <User />
            </MenuItemIcon>
            <MenuItemLabel>Account</MenuItemLabel>
          </MenuItem>
          <MenuItem>
            <MenuItemIcon>
              <Cog />
            </MenuItemIcon>
            <MenuItemLabel>Settings</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuItemIcon>
              <Info />
            </MenuItemIcon>
            <MenuItemLabel>Help center</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuItemIcon>
              <Moon />
            </MenuItemIcon>
            <MenuItemLabel>Dark mode</MenuItemLabel>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuItemIcon>
              <LogOut />
            </MenuItemIcon>
            <MenuItemLabel>Sign out</MenuItemLabel>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuProvider>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuSectionDemo
 * -----------------------------------------------------------------------------------------------*/
export function MenuSectionDemo() {
  return (
    <MenuProvider>
      <Button variant="outlined">
        <ButtonLabel>Preferences</ButtonLabel>
        <ButtonIcon>
          <ChevronDown />
        </ButtonIcon>
      </Button>
      <MenuPopover>
        <Menu>
          <MenuSection>
            <MenuSectionHeader>
              <MenuSectionLabel>User Settings</MenuSectionLabel>
            </MenuSectionHeader>
            <MenuItem>
              <MenuItemIcon>
                <User />
              </MenuItemIcon>
              <MenuItemLabel>Account</MenuItemLabel>
            </MenuItem>
            <MenuItem>
              <MenuItemIcon>
                <Cog />
              </MenuItemIcon>
              <MenuItemLabel>Settings</MenuItemLabel>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection>
            <MenuSectionHeader>
              <MenuSectionLabel>Support</MenuSectionLabel>
            </MenuSectionHeader>
            <MenuItem>
              <MenuItemIcon>
                <Info />
              </MenuItemIcon>
              <MenuItemLabel>Help center</MenuItemLabel>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection>
            <MenuSectionHeader>
              <MenuSectionLabel>Preferences</MenuSectionLabel>
            </MenuSectionHeader>
            <MenuItem>
              <MenuItemIcon>
                <Moon />
              </MenuItemIcon>
              <MenuItemLabel>Dark mode</MenuItemLabel>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection>
            <MenuSectionHeader>
              <MenuSectionLabel>Account Actions</MenuSectionLabel>
            </MenuSectionHeader>
            <MenuItem>
              <MenuItemIcon>
                <LogOut />
              </MenuItemIcon>
              <MenuItemLabel>Sign out</MenuItemLabel>
            </MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuProvider>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuIndicatorDemo
 * -----------------------------------------------------------------------------------------------*/
export function MenuIndicatorDemo() {
  /**
   * Tracks the selected crust
   */
  const [crust, setCrust] = useState<Selection>(new Set(["thin"]));

  /**
   * Tracks the selected sauce
   */
  const [sauce, setSauce] = useState<Selection>(new Set(["tomato"]));

  /**
   * Tracks the selected cheese
   */
  const [cheese, setCheese] = useState<Selection>(new Set(["mozzarella"]));

  return (
    <MenuProvider>
      <Button variant="outlined">
        <ButtonLabel>Select Pizza</ButtonLabel>
        <ButtonIcon>
          <ChevronDown />
        </ButtonIcon>
      </Button>
      <MenuPopover>
        <Menu>
          <MenuSection
            selectionMode="single"
            selectedKeys={crust}
            onSelectionChange={setCrust}
          >
            <MenuSectionHeader>
              <MenuSectionLabel>Crust</MenuSectionLabel>
            </MenuSectionHeader>
            <MenuItem id="thin">
              <MenuItemLabel>Thin</MenuItemLabel>
            </MenuItem>
            <MenuItem id="hand-tossed">
              <MenuItemLabel>Hand-tossed</MenuItemLabel>
            </MenuItem>
            <MenuItem id="deep dish">
              <MenuItemLabel>Deep Dish</MenuItemLabel>
            </MenuItem>
            <MenuItem id="original">
              <MenuItemLabel>Original</MenuItemLabel>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection
            selectionMode="single"
            selectedKeys={sauce}
            onSelectionChange={setSauce}
          >
            <MenuSectionHeader>
              <MenuSectionLabel>Sauce</MenuSectionLabel>
            </MenuSectionHeader>
            <MenuItem id="tomato">
              <MenuItemLabel>Tomato</MenuItemLabel>
            </MenuItem>
            <MenuItem id="pesto">
              <MenuItemLabel>Pesto</MenuItemLabel>
            </MenuItem>
            <MenuItem id="alfredo">
              <MenuItemLabel>Alfredo</MenuItemLabel>
            </MenuItem>
            <MenuItem id="bbq">
              <MenuItemLabel>BBQ</MenuItemLabel>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection
            selectionMode="multiple"
            selectedKeys={cheese}
            onSelectionChange={setCheese}
          >
            <MenuSectionHeader>
              <MenuSectionLabel>Cheese</MenuSectionLabel>
            </MenuSectionHeader>
            <MenuItem id="mozzarella">
              <MenuItemLabel>Mozzarella</MenuItemLabel>
            </MenuItem>
            <MenuItem id="pecorino">
              <MenuItemLabel>Pecorino</MenuItemLabel>
            </MenuItem>
            <MenuItem id="ricotta">
              <MenuItemLabel>Ricotta</MenuItemLabel>
            </MenuItem>
            <MenuItem id="brie">
              <MenuItemLabel>Brie</MenuItemLabel>
            </MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuProvider>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuDescriptionColumnDemo
 * -----------------------------------------------------------------------------------------------*/
export function MenuDescriptionColumnDemo() {
  /**
   * Tracks the selected permission
   */
  const [permissions, setPermissions] = useState<Selection>(new Set(["read"]));

  return (
    <MenuProvider>
      <Button variant="outlined">
        <ButtonLabel>Permissions</ButtonLabel>
        <ButtonIcon>
          <ChevronDown />
        </ButtonIcon>
      </Button>
      <MenuPopover>
        <Menu
          selectionMode="single"
          selectedKeys={permissions}
          onSelectionChange={setPermissions}
        >
          <MenuItem id="read">
            <MenuItemGroup>
              <MenuItemLabel>Read</MenuItemLabel>
              <MenuItemDescription>Read only</MenuItemDescription>
            </MenuItemGroup>
          </MenuItem>
          <MenuItem id="write">
            <MenuItemGroup>
              <MenuItemLabel>Write</MenuItemLabel>
              <MenuItemDescription>Read and write only</MenuItemDescription>
            </MenuItemGroup>
          </MenuItem>
          <MenuItem id="admin">
            <MenuItemGroup>
              <MenuItemLabel>Admin</MenuItemLabel>
              <MenuItemDescription>Full Access</MenuItemDescription>
            </MenuItemGroup>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuProvider>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuDescriptionRowDemo
 * -----------------------------------------------------------------------------------------------*/
export function MenuDescriptionRowDemo() {
  /**
   * Tracks the selected permission
   */
  const [people, setPeople] = useState<Selection>(new Set(["adamaho"]));

  return (
    <MenuProvider>
      <Button variant="outlined">
        <ButtonLabel>Select People</ButtonLabel>
        <ButtonIcon>
          <ChevronDown />
        </ButtonIcon>
      </Button>
      <MenuPopover>
        <Menu
          selectionMode="multiple"
          selectedKeys={people}
          onSelectionChange={setPeople}
        >
          <MenuItem id="adamaho">
            <MenuItemGroup orientation="row">
              <MenuItemLabel>adamaho</MenuItemLabel>
              <MenuItemDescription>@adamaho</MenuItemDescription>
            </MenuItemGroup>
          </MenuItem>
          <MenuItem id="daxraad">
            <MenuItemGroup orientation="row">
              <MenuItemLabel>Dax Raad</MenuItemLabel>
              <MenuItemDescription>@thdxr</MenuItemDescription>
            </MenuItemGroup>
          </MenuItem>
          <MenuItem id="adamwathan">
            <MenuItemGroup orientation="row">
              <MenuItemLabel>Adam Wathan</MenuItemLabel>
              <MenuItemDescription>@adamwathan</MenuItemDescription>
            </MenuItemGroup>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuProvider>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuDescriptionInlineDemo
 * -----------------------------------------------------------------------------------------------*/
export function MenuDescriptionInlineDemo() {
  /**
   * Tracks the selected permission
   */
  const [permissions, setPermissions] = useState<Selection>(new Set(["read"]));

  return (
    <MenuProvider>
      <Button variant="outlined">
        <ButtonLabel>Permissions</ButtonLabel>
        <ButtonIcon>
          <ChevronDown />
        </ButtonIcon>
      </Button>
      <MenuPopover>
        <Menu
          selectionMode="single"
          selectedKeys={permissions}
          onSelectionChange={setPermissions}
        >
          <MenuItem id="read">
            <MenuItemLabel>Read</MenuItemLabel>
            <MenuItemDescription>Read only</MenuItemDescription>
          </MenuItem>
          <MenuItem id="write">
            <MenuItemLabel>Write</MenuItemLabel>
            <MenuItemDescription>Read and write only</MenuItemDescription>
          </MenuItem>
          <MenuItem id="admin">
            <MenuItemLabel>Admin</MenuItemLabel>
            <MenuItemDescription>Full Access</MenuItemDescription>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuProvider>
  );
}

/* -------------------------------------------------------------------------------------------------
 * MenuShortcutDemo
 * -----------------------------------------------------------------------------------------------*/
export function MenuShortcutDemo() {
  return (
    <MenuProvider>
      <Button variant="outlined">
        <ButtonLabel>Dish Actions</ButtonLabel>
        <ButtonIcon>
          <ChevronDown />
        </ButtonIcon>
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem>
            <MenuItemLabel>Assign To</MenuItemLabel>
            <MenuItemShortcut>A</MenuItemShortcut>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Edit</MenuItemLabel>
            <MenuItemShortcut>E</MenuItemShortcut>
          </MenuItem>
          <MenuItem>
            <MenuItemLabel>Duplicate</MenuItemLabel>
            <MenuItemShortcut>D</MenuItemShortcut>
          </MenuItem>
          <MenuSeparator />
          <MenuItem color="red">
            <MenuItemLabel>Delete</MenuItemLabel>
            <MenuItemShortcut>
              <kbd>⌘</kbd>
              <kbd>D</kbd>
            </MenuItemShortcut>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuProvider>
  );
}
