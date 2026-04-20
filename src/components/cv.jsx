export default function CV({ details }) {
  function isEmptyInput(input) {
    return input === "" || input === undefined;
  }
  function generateSkillBlocks(input) {
    let skills = input.split(",");
    skills = skills.map((skill) => skill.trim());
    return skills;
  }
  return (
    <div className="cv-container flex flex-col bg-[#f2f2f2] px-4 py-8 border-1 font-sans">
      <header className="text-center flex flex-col gap-2 mb-4">
        <p className="name font-extrabold text-2xl font-serif">
          {details.firstname} {details.surname}
        </p>
        <p className="location">
          {details.city}, <span className="uppercase">{details.state}</span> |{" "}
          <span className="phone">{details.phone}</span> |{" "}
          <span className="email">{details.email}</span>
        </p>
      </header>
      {!isEmptyInput(details.summary) && (
        <section className="summary">
          <p className="font-bold uppercase">Professional Summary</p>
          <hr />
          <p>{details.summary}</p>
        </section>
      )}
      {/* next section here */}
      {!isEmptyInput(details.skills) && (
        <section>
          <p className="font-bold uppercase">Skills</p>
          <hr />
          <div className="flex gap-2">
            {generateSkillBlocks(details.skills).map((skill) => (
              <span
                key={crypto.randomUUID()}
                className="skill bg-blue-400 border-1 rounded-2xl text-white px-4 py-2 capitalize"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
