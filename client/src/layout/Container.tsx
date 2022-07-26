import React from "react";

interface ContainerProps {
  flexFlow?: string;
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return <div className={`w-3/4 ${className}`}>{children}</div>;
};

export { Container };
