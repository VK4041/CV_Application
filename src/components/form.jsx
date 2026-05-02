import { ExperienceInput } from "./experience.jsx";
import { EducationInput } from './education.jsx'
export default function Form({ handleChange, experiences, education, addElem, updater, deleter }) {
  return (
    <form className="flex flex-col gap-2" onChange={handleChange}>
      <div className="input-row">
        <label htmlFor="name">Name</label>
        <input type="text" name="firstname" placeholder="First Name" />
        <input type="text" name="surname" placeholder="Surname" />
      </div>
      <div className="input-row">
        <label htmlFor="location">Location</label>
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="state" placeholder="State" />
      </div>
      <div className="input-row">
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" placeholder="Phone" maxLength={10} />
      </div>
      <div className="input-row">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email Address" />
      </div>
      <div className="input-row">
        <label htmlFor="summary">Professional Summary</label>
        <textarea name="summary" id="summary" maxLength={400} />
      </div>
      <div className="input-row">
        <label htmlFor="skills">Skills</label>
        <textarea
          name="skills"
          id="skills"
          placeholder="Enter skills separated by a comma"
          maxLength={400}
        ></textarea>
      </div>
      {/* experience section here */}
      <div className='input-row flex-col'>
        <label htmlFor="experience">Experience</label>
        {experiences.map(exp => (
          <ExperienceInput exp={exp} key={exp.id} updater={updater} deleter={deleter} />
        ))}
        <button onClick={() => {
          addElem('experiences')
        }} type='button' className='addbtn'>Add new experience</button>
      </div>
      {/* education here */}
      <div className="input-row flex-col">
        <label htmlFor="education">Education</label>
        {education.map(edu => (
          <EducationInput edu={edu} key={edu.id} updater={updater} deleter={deleter} />
        ))}
        <button onClick={() => {
          addElem('education')
        }} type='button' className='addbtn'>Add new education</button>
      </div>
      {/* end for now */}
    </form>
  );
}
