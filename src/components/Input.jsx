import React from "react";

const Input = (props) => {
  const {title, name, type, value, handleChange, placeholder} = props

  return (
    <div className="flex flex-col">
      <label className="mb-2 mt-2" htmlFor={name}>{title}</label>
      <input
        className="border w-[100%] rounded pl-2"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
