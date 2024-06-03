import type { ReactNode } from "react";
import { Label, Radio, RadioGroup } from "react-aria-components";

type ThemePickerRadioGroupProps = {
  defaultValue: string;
  label: string;
  items: {
    value: string;
    render: ReactNode;
  }[];
  selector: string;
};

function ThemePickerRadioGroup(props: ThemePickerRadioGroupProps) {
  /**
   * Sets the attribute on the body element
   *
   * @param value Value of the radio group that has been selected
   */
  function onValueChange(value: string) {
    const html = document.querySelector("html");
    html!.setAttribute(props.selector, value);
  }

  /**
   * Gets the radius attribute value from the body element
   */
  function getDefaultValue() {
    const html = document.querySelector("html");
    return html!.getAttribute(props.selector) ?? props.defaultValue;
  }

  return (
    <RadioGroup
      className="mt-6"
      defaultValue={getDefaultValue()}
      onChange={onValueChange}
    >
      <Label className="text-grey-12 text-1 leading-1 mb-4 block font-bold">
        {props.label}
      </Label>
      <div className="grid grid-cols-2 gap-3">
        {props.items.map((item) => {
          return (
            <Radio
              key={item.value}
              value={item.value}
              className="rounded-3 border-grey-3 text-1 align-center text-grey-11 [&[data-hovered],&[data-focus-visible]]:bg-accent-a2 [&[data-selected]]:outline-accent-8 [&[data-selected]]:bg-accent-a2 border p-3 text-center [&[data-selected]]:outline-2"
            >
              {item.render}
            </Radio>
          );
        })}
      </div>
    </RadioGroup>
  );
}

export { ThemePickerRadioGroup };
export type { ThemePickerRadioGroupProps };
