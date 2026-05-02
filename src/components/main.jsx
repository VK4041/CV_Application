import { useState } from "react";
import Form from "./form.jsx";
import CV from "./cv.jsx";
import "../styles/main.css";

export default function Main() {
  //All states should be here, since this is the parent of form and CV
  const [details, setDetails] = useState({
    experiences: [],
    education: [],
  });
  function updateDetails(event) {
    //logic for flat fields
    setDetails({ ...details, [event.target.name]: event.target.value });
  }
  function addExperience() {
    setDetails({
      ...details, experiences: [...details.experiences, { id: crypto.randomUUID() }]
    })
  }
  function handleArray(id, field, value, type) {
    //Experience array
    if (type === 'experience') {
      //find the exp object to update
      setDetails({
        ...details, experiences:
          details.experiences.map(exp => {
            if (exp.id === id) {
              return { ...exp, [field]: value }
            }
            else {
              return exp
            }
          })
      })
    }
    //Education array
    else {
      //same for education array here
    }
  }
  function isEmpty(details) {
    return !details.firstname || details.firstname.trim() === "";
  }
  function deleteArrayElem(item, type) {
    if (type === 'experience') {
      //deleting the exp state element
      console.log(`Deleting ${item.cname}`)
      setDetails({
        ...details, experiences:
          details.experiences.filter(exp => item.id !== exp.id)
      })
    }
    else {
      //deleting the education state element
    }
  }
  return (
    <div className="flex-1 px-[25%] py-4 flex flex-col gap-8">
      <Form handleChange={updateDetails} experiences={details.experiences} addExp={addExperience} deleter={deleteArrayElem} handleArray={handleArray} />
      {!isEmpty(details) && <CV details={details} />}
    </div>
  );
}
