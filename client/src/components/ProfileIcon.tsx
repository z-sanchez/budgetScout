import React from "react";
import styled from "@emotion/styled";

const Icon = styled.div`
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 50%;
  color: #fff;
  text-align: center;
`;

interface ProfileIconProps {
  backgroundColor: string;
  letter: string;
  onClick?: any;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({
  backgroundColor,
  onClick = () => console.log("profile icon pressed"),
  letter,
}) => {
  return (
    <Icon
      className="font-semibold text-2xl"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {letter.toUpperCase()}
    </Icon>
  );
};

export { ProfileIcon };
