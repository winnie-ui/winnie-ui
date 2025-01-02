import { Button, ButtonIcon, ButtonLabel } from "@winnie-ui/react/button";
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuProvider,
} from "@winnie-ui/react/menu";
import { ChevronDown } from "lucide-react";

/* -------------------------------------------------------------------------------------------------
 * DishActionButton
 * -----------------------------------------------------------------------------------------------*/
export function DishActionButton() {
  return (
    <MenuProvider>
      <Button variant="outlined">
        <ButtonLabel>Actions</ButtonLabel>
        <ButtonIcon>
          <ChevronDown />
        </ButtonIcon>
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem>Assign To...</MenuItem>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Duplicate</MenuItem>
          <MenuItem>Delete</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuProvider>
  );
}
