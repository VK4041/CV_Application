import { useState } from "react";
import Form from "./form.jsx";
import CV from "./cv.jsx";
import "../styles/main.css";

export default function Main() {
  //All states should be here, since this is the parent of form and CV
  const [details, setDetails] = useState({});
  function editDetails(event) {
    setDetails({ ...details, [event.target.name]: event.target.value });
  }
  function isEmptyObject(info) {
    return Object.keys(info).length === 0;
  }
  return (
    <div className="flex-1 px-[25%] py-4 flex flex-col gap-8">
      <Form handleChange={editDetails} />
      {!isEmptyObject(details) && <CV details={details} />}
    </div>
  );
}
