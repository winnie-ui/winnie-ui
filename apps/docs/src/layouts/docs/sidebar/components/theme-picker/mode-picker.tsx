import type { Theme } from "~/utils/theme";

import { ThemePickerRadioGroup } from "./theme-picker-radio-group";

import "./mode-picker.css";

function ModePicker() {
	const modes = ["light", "dark"] satisfies Theme["mode"][];
	return (
		<ThemePickerRadioGroup
			items={modes.map((mode) => {
				return {
					value: mode,
					render: <span className="mode-picker">{mode}</span>,
				};
			})}
			themeKey="mode"
			label="Mode"
			selector="data-theme"
		/>
	);
}

export { ModePicker };
