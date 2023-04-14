import React, { useState } from "react";
import "./Form.css";
import FormGroup from "components/Form/FormGroup";
import { format } from "date-fns";
import useLogs from "hooks/useLogs";

function Form() {
  const { addLog } = useLogs(({ addLog }) => ({
    addLog,
  }));

  const [fields, setFields] = useState({
    description: "",
    timeSpent: "",
  });

  const [error, setError] = useState(null);

  function onChange(name, value) {
    const updateFields = (prevFields) => ({ ...prevFields, [name]: value });
    setFields(updateFields);
  }

  function onSubmit(event) {
    event.preventDefault();
    const { description, timeSpent } = fields;
    if (!(description.trim() && timeSpent.trim())) {
      setError("Xanaları doldurun!");
      return;
    }
    const date = new Date();
    const shortDate = format(date, "dd.MM.yyyy");
    const createDate = format(date, "dd.MM.yyyy HH:mm");
    const body = {
      description: description,
      timeSpent: timeSpent,
      date: shortDate,
      createDate,
    };
    addLog(body);
    setError(null);
  }
  let displayMessage;
  if (error) displayMessage = <span>{error}</span>;

  return (
    <form className="Form" onSubmit={onSubmit}>
      <FormGroup
        label="Description"
        name="description"
        onChange={onChange}
        value={fields.description}
      />
      <FormGroup
        label="Time spent"
        name="timeSpent"
        onChange={onChange}
        value={fields.timeSpent}
      />
      <div className="Form-error">{displayMessage}</div>
      <div className="Form-button">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default Form;
