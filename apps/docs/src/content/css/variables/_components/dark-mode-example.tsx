import { type ReactNode, useState } from "react";
import { Radio, RadioGroup } from "react-aria-components";

import { Moon, Sun } from "lucide-react";
import { type Theme, getTheme } from "~/utils/theme";

import "./dark-mode-example.css";

const MODE_ICON_MAP = {
	light: <Sun />,
	dark: <Moon />,
} satisfies Record<Theme["mode"], ReactNode>;

export function DarkModeExample() {
	/**
	 * tracks the selected theme mode
	 */
	const [mode, setMode] = useState(() => {
		return getTheme().mode;
	});

	/**
	 * Sets the attribute on the demo element
	 *
	 * @param value Value of the radio group that has been selected
	 */
	function onValueChange(value: string) {
		setMode(value as Theme["mode"]);
	}

	return (
		<div className="dme">
			<RadioGroup
				value={mode}
				aria-label="Select Theme Mode"
				className="dme-radio-group"
				onChange={onValueChange}
			>
				{["light", "dark"].map((mode) => {
					return (
						<Radio
							key={mode}
							value={mode}
							aria-label={`${mode} mode`}
							className="dme-radio-item"
						>
							{MODE_ICON_MAP[mode as Theme["mode"]]}
						</Radio>
					);
				})}
			</RadioGroup>
			<div
				className={`dme-content winnie-ui ${mode}`}
				data-accent-color={getTheme().color}
			>
				<span className="dme-title">Sign in</span>
				<div className="dme-control">
					<label className="dme-label" htmlFor="email-address">
						Email address
					</label>
					<input
						className="dme-input"
						type="email"
						id="email-address"
						placeholder="Enter your email"
					/>
				</div>
				<div className="dme-control">
					<label className="dme-label" htmlFor="password">
						Password
					</label>
					<input
						className="dme-input"
						type="password"
						id="password"
						placeholder="Enter your password"
					/>
				</div>
				<div className="dme-footer">
					<button className="dme-button dme-create-button light" type="button">
						Create an account
					</button>
					<button className="dme-button dme-sign-in-button" type="button">
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
}
