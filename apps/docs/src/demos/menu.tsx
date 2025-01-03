import { Button, ButtonIcon, ButtonLabel } from "@winnie-ui/react/button";
import {
  Menu,
  MenuItem,
  MenuItemIcon,
  MenuItemLabel,
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
      <Button color="grey" variant="outlined">
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
      <Button color="grey" variant="outlined">
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
