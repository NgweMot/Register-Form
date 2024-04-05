import React from "react";

const FormComponents = ({ type, name, label, placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
};

export default FormComponents;
