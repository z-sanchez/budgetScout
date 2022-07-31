import React from "react";

interface ContainerProps {
  flexFlow?: string;
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return <div className={`${className} w-3/4`}>{children}</div>;
};

export { Container };
