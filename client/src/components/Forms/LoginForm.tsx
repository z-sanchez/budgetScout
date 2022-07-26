import React from "react";
import { Button } from "../Inputs/Button";
import { GREEN } from "../../constants";
import { FormButton, FormInput } from "./styledComponents";
import { TextInput } from "../Inputs";

interface FormProps {}

const LoginForm: React.FC<FormProps> = ({}) => {
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
