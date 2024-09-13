import { BoxSelect, Palette, Search } from "lucide-react";
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
			<div className="sp-hero-container">
				<div data-component="group" className="sp-hero-group">
					<Search data-component="icon" />
					<input
						data-component="input"
						className="sp-hero-input"
						placeholder="Search docs..."
						data-mode={mode}
					/>
				</div>
				<button
					className="sp-hero-button"
					data-mode={mode}
					data-component="button"
					type="button"
				>
					<span data-component="text">Search</span>
				</button>
			</div>
		</>
	);
}
