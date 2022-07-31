import React from "react";
import { ProgressBar } from "./ProgressBar";
import { findPercentage } from "../utils/calculator";

interface BudgetBlockProps {
  backgroundColor?: string;
  lightColor: string;
  budgetAmount: number;
  budgetSpent: number;
  budgetName?: string;
  onClick?: any;
}

const BudgetBlock: React.FC<BudgetBlockProps> = ({
  backgroundColor,
  lightColor,
  budgetAmount,
  budgetSpent,
  budgetName,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick()}
      style={{ backgroundColor: backgroundColor }}
      className="flex flex-col px-10 py-8 w-full rounded-md"
    >
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-white font-semibold text-4xl appFont">
          {budgetName}
        </h1>
        <h1 className="text-white text-4xl numeralFont">
          ${budgetAmount && budgetSpent ? budgetAmount - budgetSpent : null}
        </h1>
      </div>
      <div className="w-full mt-5">
        {
          <ProgressBar
            color={lightColor}
            precentage={findPercentage(budgetAmount, budgetSpent)}
          ></ProgressBar>
        }
      </div>
    </div>
  );
};

export { BudgetBlock };
