import React from "react";
import { TextInput } from "./TextInput";

interface inputType {
  type: string;
  label: string;
  placeholder: string;
}

interface FormProps {
  fields: inputType[];
}

const Form: React.FC<FormProps> = ({ fields }) => {
  return (
    <div className="flex flex-col w-100">
      {fields.map((input: inputType) => {
        return (
          <div className="mb-5 flex flex-col">
            <TextInput
              type={input.type}
              label={input.label}
              placeHolder={input.placeholder}
            ></TextInput>
          </div>
        );
      })}
    </div>
  );
};

export { Form };
