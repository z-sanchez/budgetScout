import React from "react";
import { LIGHT_GRAY, LIGHT_TEXT } from "../../utils/constants";

interface TextInputProps {
  type?: string;
  label?: string;
  placeHolder?: string;
  width?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  label = "Label",
  placeHolder = "Placeholder",
  width = "100%",
  className = "",
}) => {
  return (
    <>
      <label
        style={{ color: LIGHT_TEXT }}
        className="appFont font-semibold text-base mb-2"
      >
        {label}
      </label>
      <input
        style={{ backgroundColor: LIGHT_GRAY }}
        className={`appFont font-semibold rounded-md py-3 pl-5 text-lg text-left focus-visible:outline-none ${
          width + " " + className
        }`}
        type={type}
        placeholder={placeHolder}
      ></input>
    </>
  );
};

export { TextInput };
