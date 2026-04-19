export default function CV({ details }) {
  function isEmptyInput(input) {
    return input === "" || input === undefined;
  }
  return (
    <div className="cv-container flex flex-col bg-[#f2f2f2] px-4 py-8 border-1 font-sans">
      <header className="text-center flex flex-col gap-2">
        <p className="name font-extrabold text-2xl font-serif">
          {details.firstname} {details.surname}
        </p>
        <p className="location">
          {details.city}, <span className="uppercase">{details.state}</span> |{" "}
          <span className="phone">{details.phone}</span> |{" "}
          <span className="email">{details.email}</span>
        </p>
      </header>
      <hr />
      {!isEmptyInput(details.summary) && (
        <section className="summary">
          <p className="font-bold">PROFESSIONAL SUMMARY</p>
          <p>{details.summary}</p>
          <hr />
        </section>
      )}
      {/* next section here */}
    </div>
  );
}
