import React from "react";
import { DARK_BLUE } from "../utils/constants";
import { Container } from "../layout";
import headerLogo from "../assets/images/headerLogo.svg";
import { ProfileIcon } from "./ProfileIcon";
import { Outlet } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="w-10/12 flex flex-row justify-between">
      <img src={headerLogo} alt="header logo"></img>
      <ProfileIcon letter="z" backgroundColor={DARK_BLUE}></ProfileIcon>
    </div>
  );
};

export { Header };
