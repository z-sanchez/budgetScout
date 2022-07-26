import React from "react";
import loginSplash from "./assets/images/loginSplash.svg";
import logo from "./assets/images/logo.svg";
import { Button, TextInput, Form } from "./components";
import { Container } from "./layout";
import { GREEN } from "./constants";

const App: React.FC = () => {
  const fields = [
    {
      type: "email",
      label: "Email",
      placeholder: "Email",
    },
    {
      type: "password",
      label: "Password",
      placeholder: "Password",
    },
  ];

  return (
    <div className="h-screen overflow-hidden">
      <Container flexFlow="column">
        <img src={logo} className="w-40 mb-14" alt="logo"></img>
        <img
          src={loginSplash}
          className="w-11/12 self-center mb-14"
          alt="loginSplash"
        ></img>

        <Form fields={fields}></Form>
        <div className="mt-14">
          <Button
            text={"Login"}
            backgroundColor={GREEN}
            textColor={"#fff"}
          ></Button>
        </div>
      </Container>
    </div>
  );
};

export default App;
