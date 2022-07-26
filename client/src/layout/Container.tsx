import React from "react";

interface ContainerProps {
  flexFlow?: string;
  children?: JSX.Element | JSX.Element[];
}

const Container: React.FC<ContainerProps> = ({ children, flexFlow = "" }) => {
  return (
    <div className="flex justify-center h-full">
      <div
        className="w-3/4 py-8"
        style={flexFlow ? { display: "flex", flexFlow: flexFlow } : {}}
      >
        {children}
      </div>
    </div>
  );
};

export { Container };
