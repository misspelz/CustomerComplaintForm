import React from "react";

const Textarea = (props) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 mt-2" htmlFor={props.name}>{props.title}</label>
      <textarea
        className="border w-[100%] rounded pl-2"
        name={props.name}
        rows={props.rows}
        cols={props.cols}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
};

export default Textarea;
