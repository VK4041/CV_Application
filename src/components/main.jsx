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
  function addElem(type) {
    setDetails({
      ...details, [type]: [...details[type], { id: crypto.randomUUID() }]
    })
  }
  function updateArray(id, field, value, type) {
    setDetails({
      ...details, [type]:
        details[type].map(elem => {
          if (elem.id === id) {
            return { ...elem, [field]: value }
          }
          else {
            return elem
          }
        })
    })
  }
  function isEmpty(details) {
    return !details.firstname || details.firstname.trim() === "";
  }
  function deleteArray(item, type) {
    setDetails({
      ...details, [type]:
        details[type].filter(elem => item.id !== elem.id)
    })
  }
  return (
    <div className="flex-1 px-[25%] py-4 flex flex-col gap-8">
      <Form
        handleChange={updateDetails}
        education={details.education}
        experiences={details.experiences}
        addElem={addElem}
        deleter={deleteArray}
        updater={updateArray} />
      {!isEmpty(details) && <CV details={details} />}
    </div>
  );
}
