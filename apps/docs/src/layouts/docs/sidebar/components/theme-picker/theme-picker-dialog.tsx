import { useContext } from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { OverlayTriggerStateContext } from "react-aria-components";

import { Settings2, X } from "lucide-react";

import { ThemePicker } from "./theme-picker";

import "./theme-picker-dialog.css";

/* -------------------------------------------------------------------------------------------------
 * CloseButton
 * -----------------------------------------------------------------------------------------------*/
function CloseButton() {
  let state = useContext(OverlayTriggerStateContext)!;
  return (
    <Button onPress={() => state.close()} className="theme-picker-dialog-close">
      <X />
    </Button>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ThemePickerDialog
 * -----------------------------------------------------------------------------------------------*/
function ThemePickerDialog() {
  return (
    <DialogTrigger>
      <Button
        className="theme-picker-modal-trigger"
        aria-label="Customize Theme"
      >
        <Settings2 />
      </Button>
      <ModalOverlay className="theme-picker-modal-overlay" isDismissable>
        <Modal isDismissable className="theme-picker-modal wui-scrollbar">
          <Dialog className="theme-picker-dialog">
            <div className="theme-picker-dialog-header">
              <Heading className="theme-picker-dialog-title" slot="title">
                Customize Theme
              </Heading>
              <p className="theme-picker-dialog-description">
                Change the vibes of your docs
              </p>
            </div>
            <div className="theme-picker-dialog-content">
              <ThemePicker />
            </div>
            <CloseButton />
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}

export { ThemePickerDialog };
