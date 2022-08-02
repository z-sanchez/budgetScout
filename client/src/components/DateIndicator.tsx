import React from "react";
import { DARK_WHITE } from "../utils/constants";

interface DateIndicatorProps {
  className?: string;
  text: string;
}

const DateIndicator: React.FC<DateIndicatorProps> = ({ text, className }) => {
  return (
    <p
      className={`text-lg font-semibold numeralFont ${className}`}
      style={{ color: DARK_WHITE }}
    >
      {text}
    </p>
  );
};

export { DateIndicator };
