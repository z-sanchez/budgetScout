import React from "react";

interface ButtonProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  onSubmit?: any;
  width?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text = "button",
  backgroundColor = "#000",
  textColor = "#fff",
  width = "100%",
  onSubmit = () => console.log("button pressed"),
  className = "",
}) => {
  return (
    <button
      className={`rounded-md py-3 px-26 font-semibold text-xl text-center cursor-pointer appFont ${className}`}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        width: width,
      }}
      onClick={onSubmit}
    >
      {text}
    </button>
  );
};

export { Button };
