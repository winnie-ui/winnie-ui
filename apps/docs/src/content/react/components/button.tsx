import {
  Button,
  ButtonContext,
  ButtonIcon,
  ButtonLabel,
  ButtonPending,
} from "@winnie-ui/react/button";

import { Loader, Utensils } from "lucide-react";

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
 * ButtonIconOnlyDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonIconOnlyDemo() {
  return (
    <Button variant="outlined">
      <ButtonIcon>
        <Utensils />
      </ButtonIcon>
    </Button>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonSizeDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonSizeDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <Button size="sm" variant="soft">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button size="md" variant="soft">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button size="lg" variant="soft">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonVariantDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonVariantDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <Button variant="solid">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="soft">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="outlined">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="plain">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonRadiusDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonRadiusDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <Button variant="soft" radius="none">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="soft" radius="lg">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="soft" radius="round">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonColorDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonColorDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <Button variant="soft">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="soft" color="red">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="soft" color="orange">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="soft" color="yellow">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="soft" color="green">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="soft" color="blue">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="soft" color="purple">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="soft" color="pink">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="soft" color="grey">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonDisabledDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonDisabledDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <ButtonContext.Provider value={{ isDisabled: true }}>
        <Button variant="solid">
          <ButtonLabel>Edit Dish</ButtonLabel>
        </Button>
        <Button variant="soft">
          <ButtonLabel>Edit Dish</ButtonLabel>
        </Button>
        <Button variant="outlined">
          <ButtonLabel>Edit Dish</ButtonLabel>
        </Button>
        <Button variant="plain">
          <ButtonLabel>Edit Dish</ButtonLabel>
        </Button>
      </ButtonContext.Provider>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonPendingDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonPendingDemo() {
  return (
    <Button isPending>
      <ButtonLabel>Delete Dish</ButtonLabel>
      <ButtonPending
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Loader />
      </ButtonPending>
    </Button>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonWidthDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonWidthDemo() {
  return (
    <Button width="full">
      <ButtonLabel>Save Dish</ButtonLabel>
    </Button>
  );
}
