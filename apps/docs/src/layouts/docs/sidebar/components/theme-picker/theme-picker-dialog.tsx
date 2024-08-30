import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
} from "@radix-ui/react-dialog";
import { Settings2, X } from "lucide-react";

import { ThemePicker } from "./theme-picker";

import "./theme-picker-dialog.css";

/* -------------------------------------------------------------------------------------------------
 * ThemePickerDialog
 * -----------------------------------------------------------------------------------------------*/
function ThemePickerDialog() {
	return (
		<Dialog>
			<DialogTrigger
				className="theme-picker-modal-trigger"
				aria-label="Customize Theme"
			>
				<Settings2 />
			</DialogTrigger>
			<DialogPortal>
				<DialogOverlay className="theme-picker-modal-overlay" />
				<DialogContent className="theme-picker-modal wui-scrollbar">
					<div className="theme-picker-dialog-header">
						<DialogTitle className="theme-picker-dialog-title" slot="title">
							Customize Theme
						</DialogTitle>
						<DialogDescription className="theme-picker-dialog-description">
							Change the vibes of your docs
						</DialogDescription>
					</div>
					<div className="theme-picker-dialog-content">
						<ThemePicker />
					</div>
					<DialogClose className="theme-picker-dialog-close">
						<X />
					</DialogClose>
				</DialogContent>
			</DialogPortal>
		</Dialog>
	);
}

export { ThemePickerDialog };
