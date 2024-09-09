import { BoxSelect, Palette } from "lucide-react";
import { type ReactNode, useState } from "react";
import { Radio, RadioGroup } from "react-aria-components";

import "./spatial-toggle.css";

type Mode = "spatial" | "color";

const MODE_ICON_MAP = {
	spatial: <BoxSelect />,
	color: <Palette />,
} satisfies Record<Mode, ReactNode>;

export function SpatialToggle() {
	/**
	 * tracks the selected mode
	 */
	const [mode, setMode] = useState<Mode>("color");

	/**
	 * Sets the data-mode attribute on the demo element
	 *
	 * @param value Value of the radio group that has been selected
	 */
	function onValueChange(value: string) {
		setMode(value as Mode);
	}

	return (
		<>
			<RadioGroup
				defaultValue={mode}
				aria-label="Select Spatial Mode"
				className="sp-radio-group"
				onChange={onValueChange}
			>
				{["spatial", "color"].map((m) => {
					return (
						<Radio
							key={m}
							value={m}
							aria-label={`${m} mode`}
							className="sp-radio-item"
						>
							{MODE_ICON_MAP[m as Mode]}
						</Radio>
					);
				})}
			</RadioGroup>
			<button
				className="spatial-hero-button"
				data-mode={mode}
				data-component="button"
				type="button"
			>
				<span data-component="text">Create an account</span>
			</button>
		</>
	);
}
