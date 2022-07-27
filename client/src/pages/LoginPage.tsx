import React from "react";
import loginSplash from "../assets/images/loginSplash.svg";
import logo from "../assets/images/logo.svg";
import { LoginForm } from "../components/";
import { Container } from "../layout";

const LoginPage: React.FC = () => {
  return (
    <Container className="w-100 flex flex-col lg:flex-row lg:justify-center">
      <Container className="lg:w-1/2 w-full flex flex-col lg:mr-10">
        <img src={logo} className="w-40 mb-14 lg:hidden" alt="logo"></img>
        <img
          src={loginSplash}
          className="w-11/12 lg:w-8/12 self-center mb-14 lg:mb-auto lg:mt-auto"
          style={{ minWidth: "400px" }}
          alt="loginSplash"
        ></img>
      </Container>
      <Container className="w-full lg:ml-10 lg:w-1/2 flex flex-col justify-center items-center">
        <img
          src={logo}
          className="w-2/4 mb-14 hidden lg:block self-center "
          alt="logo"
        ></img>
        <LoginForm></LoginForm>
        <h1>Testing Deploy</h1>
      </Container>
    </Container>
  );
};

export { LoginPage };
