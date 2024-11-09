import { createLazyFileRoute } from "@tanstack/react-router";
import { Button, ButtonIcon } from "../components/ds/button/button";

import { PanelLeft } from "lucide-react";
import { ButtonContext } from "react-aria-components";

export const Route = createLazyFileRoute("/showcase/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Button>
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button variant="soft">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button variant="ghost">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button color="red">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button color="red" variant="soft">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button color="red" variant="ghost">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button color="grey">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button color="grey" variant="soft">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button color="grey" variant="ghost">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
      </div>
      <ButtonContext.Provider value={{ isDisabled: true }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "20px",
          }}
        >
          <Button>
            <ButtonIcon>
              <PanelLeft />
            </ButtonIcon>
          </Button>
          <Button variant="soft">
            <ButtonIcon>
              <PanelLeft />
            </ButtonIcon>
          </Button>
          <Button variant="ghost">
            <ButtonIcon>
              <PanelLeft />
            </ButtonIcon>
          </Button>
          <Button color="red">
            <ButtonIcon>
              <PanelLeft />
            </ButtonIcon>
          </Button>
          <Button color="red" variant="soft">
            <ButtonIcon>
              <PanelLeft />
            </ButtonIcon>
          </Button>
          <Button color="red" variant="ghost">
            <ButtonIcon>
              <PanelLeft />
            </ButtonIcon>
          </Button>
          <Button color="grey">
            <ButtonIcon>
              <PanelLeft />
            </ButtonIcon>
          </Button>
          <Button color="grey" variant="soft">
            <ButtonIcon>
              <PanelLeft />
            </ButtonIcon>
          </Button>
          <Button color="grey" variant="ghost">
            <ButtonIcon>
              <PanelLeft />
            </ButtonIcon>
          </Button>
        </div>
      </ButtonContext.Provider>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Button isPending>
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button isPending variant="soft">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button isPending variant="ghost">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button isPending color="red">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button isPending color="red" variant="soft">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button isPending color="red" variant="ghost">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button isPending color="grey">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button isPending color="grey" variant="soft">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
        <Button isPending color="grey" variant="ghost">
          <ButtonIcon>
            <PanelLeft />
          </ButtonIcon>
        </Button>
      </div>
    </div>
  );
}
