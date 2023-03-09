import React from "react";

const Select = (props) => {
  const {title, name, type, value, handleChange, options, placeholder} = props

  return (
    <div className="flex flex-col">
      <label className="mt-2" htmlFor={name}>{title}</label>
      <select
        className="border w-[100%] mt-2 rounded pl-2"
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={handleChange}
      >
        <option value="">
          {placeholder}
        </option>
        {options && options.map((option) => {
          return (
            <option key={option} value={option} label={option}>
                {option}
            </option>
          )
        })}
      </select>
    </div>
  );
};

export default Select;
