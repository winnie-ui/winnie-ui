export function CreateUserForm() {
  return (
    <div>
      <div>New User</div>
      <form>
        <div>
          <label htmlFor="firstName">Name</label>
          <input name="firstName" id="firstName" />
        </div>
        <div>
          <button type="button">Create</button>
        </div>
      </form>
    </div>
  );
}
