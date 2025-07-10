import React from "react";

const Button = () => {
  return (
    <div>
      <button
        onClick={() => {
          alert("Hi");
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Button;
