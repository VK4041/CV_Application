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

  return (
    <div className="flex-1 px-[25%] py-4 flex flex-col gap-8">
      <Form handleChange={editDetails} />
      <hr />
      <CV details={details} />
    </div>
  );
}
