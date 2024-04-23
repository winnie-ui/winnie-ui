import { createUniqueId } from "solid-js";
import { createStore } from "solid-js/store";

type CommandMenuItem = {
  id: string;
  textValue: string;
  disabled: boolean;
};

type CommandMenuState = {
  items: CommandMenuItem[];
};

type CommandMenuStore = {
  state: CommandMenuState;
  createCommandMenuItem(item: CommandMenuItem): void;
};

function createCommandMenuStore(): CommandMenuStore {
  const [state, setState] = createStore<CommandMenuState>({
    items: [],
  });

  return {
    state,
    createCommandMenuItem(foo: Omit<CommandMenuItem, "id">) {
      const id = createUniqueId();
      const item = {
        ...foo,
        id,
      };
      setState("items", state.items.length, item);

      return item;
    },
  };
}

/**
 * Command
 *  CommandInput
 *  CommandListBox
 *    CommandEmpty
 *    CommandSection
 *      CommandItem
 *
 * store
 *  inputValue
 *  activeId
 */
