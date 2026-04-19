export default function Form({ handleChange }) {
  return (
    <form onChange={handleChange}>
      <div className="input-row">
        <label htmlFor="name">Name</label>
        <input type="text" name="firstname" placeholder="First Name" />
        <input type="text" name="surname" placeholder="Surname" />
      </div>
    </form>
  );
}
