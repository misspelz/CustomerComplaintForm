import React from "react";


const Button = (props) => {
  const {backgroundColor, title, handleClick} = props

  return (
    <div className="form-div">
      <button
        style={{ backgroundColor: backgroundColor}}

        className="text-white px-2 py-2 md:px-4 md:py-2 rounded font-semibold mr-2 "

        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
