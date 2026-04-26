import { ExperienceGenerator } from "./experience.jsx";
export default function CV({ details }) {
  function isEmptyInput(input) {
    return input === "" || input === undefined;
  }
  function isEmptyArray(array) {
    return array.length === 0
  }
  function generateSkillBlocks(input) {
    let skills = input.split(",");
    skills = skills.map((skill) => skill.toLowerCase().trim());
    skills = skills.filter((skill) => skill.length > 0);
    skills = Array.from(new Set(skills));
    return skills;
  }
  return (
    <div className="cv-container flex flex-col bg-[#f2f2f2] px-4 py-8 border-1 font-sans">
      <header className="text-center flex flex-col gap-2 mb-4">
        <p className="name font-extrabold text-2xl font-serif capitalize">
          {details.firstname} {details.surname}
        </p>
        <p className="location">
          <span className="capitalize">{details.city}</span>
          {!isEmptyInput(details.state) && (
            <span className="uppercase">, {details.state}</span>
          )}
          {!isEmptyInput(details.phone) && (
            <span className="phone"> | {details.phone}</span>
          )}
          {!isEmptyInput(details.email) && (
            <span className="email"> | {details.email}</span>
          )}
        </p>
      </header>
      {!isEmptyInput(details.summary) && (
        <section className="summary">
          <p className="font-bold uppercase">Professional Summary</p>
          <hr />
          <p>{details.summary}</p>
        </section>
      )}
      {!isEmptyInput(details.skills) && (
        <section>
          <p className="font-bold uppercase">Skills</p>
          <hr />
          <div className="flex flex-wrap gap-2">
            {generateSkillBlocks(details.skills).map((skill) => (
              <span
                key={skill}
                className="skill bg-blue-400 border rounded-2xl text-white px-4 py-2 capitalize"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
      {/* experience section here */}
      {!isEmptyArray(details.experiences) && (
        <section>
          <p className="font-bold uppercase">Experience</p>
          <hr />
          <div className="flex flex-col gap-2">
            {details.experiences.map(exp => <ExperienceGenerator key={exp.id} exp={exp} isEmpty={isEmptyInput} />)}
          </div>
        </section>
      )}
      {/* education here */}
      {/* end for now */}
    </div>
  );
}
