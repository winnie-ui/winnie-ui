export function SidebarButtons() {
  return (
    <>
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
    </>
  );
}
