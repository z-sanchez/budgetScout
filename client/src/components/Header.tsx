import React from "react";
import { DARK_BLUE } from "../utils/constants";
import headerLogo from "../assets/images/headerLogo.svg";
import { ProfileIcon } from "./ProfileIcon";

const Header: React.FC = () => {
  return (
    <div className="w-11/12 flex flex-row justify-between">
      <img src={headerLogo} alt="header logo" className="cursor-pointer"></img>
      <ProfileIcon
        letter="z"
        backgroundColor={DARK_BLUE}
      ></ProfileIcon>
    </div>
  );
};

export { Header };
