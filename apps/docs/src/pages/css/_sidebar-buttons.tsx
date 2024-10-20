export function SidebarButtons() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button
        type="button"
        data-component="button"
        onClick={() => {
          const sidebar = document.querySelector("[data-slot=sidebar]");
          sidebar?.setAttribute("data-state", "docked");
        }}
      >
        Dock
      </button>
      <button
        type="button"
        data-component="button"
        onClick={() => {
          const sidebar = document.querySelector("[data-slot=sidebar]");
          sidebar?.setAttribute("data-state", "open");
        }}
      >
        Open
      </button>
      <button
        type="button"
        data-component="button"
        onClick={() => {
          const sidebar = document.querySelector("[data-slot=sidebar]");
          sidebar?.setAttribute("data-state", "closed");
        }}
      >
        Close
      </button>
    </div>
  );
}
