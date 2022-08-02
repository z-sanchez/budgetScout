import React from "react";
import { GREEN } from "../../utils/constants";
import { FormButton, FormInput } from "./styledComponents";

interface FormProps {
  className?: string;
}

const LoginForm: React.FC<FormProps> = ({ className }) => {
  return (
    <form className="flex flex-col w-full">
      <FormInput
        className="mb-10 flex flex-col"
        type={"email"}
        label={"Email"}
        placeHolder={"Email"}
      ></FormInput>
      <FormInput
        className="mb-10 flex flex-col"
        type={"password"}
        label={"Password"}
        placeHolder={"Password"}
      ></FormInput>
      <FormButton
        text={"Login"}
        backgroundColor={GREEN}
        textColor={"#fff"}
      ></FormButton>
    </form>
  );
};

export { LoginForm };
