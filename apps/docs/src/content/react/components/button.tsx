import { Button, ButtonIcon, ButtonLabel } from "@winnie-ui/react/button";

import { Utensils } from "lucide-react";

/* -------------------------------------------------------------------------------------------------
 * NewDishButton
 * -----------------------------------------------------------------------------------------------*/
export function NewDishButton() {
  return (
    <Button>
      <ButtonIcon>
        <Utensils />
      </ButtonIcon>
      <ButtonLabel>New Dish</ButtonLabel>
    </Button>
  );
}

/* -------------------------------------------------------------------------------------------------
 * EditDishButton
 * -----------------------------------------------------------------------------------------------*/
export function EditDishButton() {
  return (
    <div>
      <Button size="sm">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button size="md">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button size="lg">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
    </div>
  );
}
