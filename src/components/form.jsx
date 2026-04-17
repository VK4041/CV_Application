import "../styles/form.css";
export default function Form() {
  return (
    <form className="form grid grid-cols-[auto_1fr] gap-3 items-center">
      <p className="col-span-2 text-xl text-bold text-center underline">
        Create your Resume
      </p>
      <label>Name</label>
      <div className="name flex gap-2">
        <input
          type="text"
          name="firstName"
          className="input flex-1 text-center"
          placeholder="Given name"
          required
        />
        <input
          type="text"
          name="lastName"
          className="input flex-1 text-center"
          placeholder="Surname"
        />
      </div>

      <label htmlFor="age">Age</label>
      <input type="text" name="age" className="input w-10" />
    </form>
  );
}
