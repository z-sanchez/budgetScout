import React from "react";
import { LIGHT_TEXT } from "../utils/constants";

interface PageTitleProps {
  className?: string;
  title: string;
  underLineColor: string;
  onClick: any;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  underLineColor,
  onClick,
  className,
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <h1 style={{ color: LIGHT_TEXT }} className="text-4xl appFont font-bold">
        {title}
      </h1>
      <div
        className="h-2 rounded-md"
        style={{ backgroundColor: underLineColor }}
      ></div>
    </div>
  );
};

export { PageTitle };
