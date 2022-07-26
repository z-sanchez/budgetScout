import React from "react";
import { LIGHT_GRAY, LIGHT_TEXT } from "../constants";

interface TextInputProps {
  type?: string;
  label?: string;
  placeHolder?: string;
  width?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  label = "Label",
  placeHolder = "Placeholder",
  width = "100%",
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
        className="appFont font-semibold rounded-md py-3 pl-5 text-lg text-left focus-visible:outline-none"
        type={type}
        placeholder={placeHolder}
      ></input>
    </>
  );
};

export { TextInput };
