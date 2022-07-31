import React from "react";
import { Header, BudgetBlock } from "../components";
import { BLUE, LIGHT_RED, RED } from "../utils/constants";
import { Outlet } from "react-router-dom";

const BudgetsPage: React.FC = () => {
  return (
    <div className="w-10/12 flex flex-col lg:justify-center cursor-pointer">
      <BudgetBlock
        backgroundColor={RED}
        lightColor={LIGHT_RED}
        budgetAmount={200}
        budgetSpent={156}
        budgetName={"Grocery"}
        onClick={() => {
          console.log("BudgetBlock Clicked");
        }}
      ></BudgetBlock>
      <BudgetBlock
        backgroundColor={BLUE}
        lightColor={LIGHT_RED}
        budgetAmount={100}
        budgetSpent={30}
        budgetName={"Date"}
        onClick={() => {
          console.log("BudgetBlock Clicked");
        }}
      ></BudgetBlock>
    </div>
  );
};

export { BudgetsPage };
