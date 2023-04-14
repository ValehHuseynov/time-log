import React from "react";

function FormGroup({ type, label, name, value, onChange }) {
  const inputType = type || "text";
  function handleChange(event) {
    const field = event.target;
    const name = field.name;
    const value = field.value;
    onChange(name, value);
  }
  return (
    <div className="Form-group">
      <label>{label}</label>
      <input
        type={inputType}
        name={name}
        placeholder={label}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormGroup;
