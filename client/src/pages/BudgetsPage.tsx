import React from "react";
import {
  BudgetBlock,
  Button,
  DateIndicator,
  PageTitle,
  SearchBar,
} from "../components";
import {
  LIGHT_RED,
  RED,
  LIGHT_BLUE,
  LIGHT_ORANGE,
  BLUE,
  GREEN,
  ORANGE,
} from "../utils/constants";

const BudgetsPage: React.FC = () => {
  return (
    <>
      <div className="w-11/12 flex flex-col lg:justify-between cursor-pointer">
        <div className="flex row mt-10 justify-between items-center w-full">
          <PageTitle
            className="w-8/12 lg:w-5/12"
            underLineColor={RED}
            title="Mimi's Palace"
            onClick={() => console.log("TitleClick")}
          ></PageTitle>
          <DateIndicator className="text-md" text="7/24-7/30"></DateIndicator>
        </div>
      </div>
      <div className="w-10/12 flex flex-col lg:justify-center">
        <SearchBar
          className="my-10"
          placeHolder="Search Categories"
          type="text"
        >
          <BudgetBlock
            className="mb-10 lg:w-4/12 lg:mr-10"
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
            className="mb-10 lg:w-4/12 lg:mr-10"
            backgroundColor={BLUE}
            lightColor={LIGHT_BLUE}
            budgetAmount={100}
            budgetSpent={40}
            budgetName={"Date"}
            onClick={() => {
              console.log("BudgetBlock Clicked");
            }}
          ></BudgetBlock>
          <BudgetBlock
            className="mb-10 lg:w-4/12 lg:mr-10"
            backgroundColor={ORANGE}
            lightColor={LIGHT_ORANGE}
            budgetAmount={225}
            budgetSpent={156}
            budgetName={"Activity"}
            onClick={() => {
              console.log("BudgetBlock Clicked");
            }}
          ></BudgetBlock>
          <BudgetBlock
            className="mb-10 lg:w-4/12 lg:mr-10"
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
            className="mb-10 lg:w-4/12 lg:mr-10"
            backgroundColor={BLUE}
            lightColor={LIGHT_BLUE}
            budgetAmount={100}
            budgetSpent={40}
            budgetName={"Date"}
            onClick={() => {
              console.log("BudgetBlock Clicked");
            }}
          ></BudgetBlock>
          <BudgetBlock
            className="mb-10 lg:w-4/12 lg:mr-10"
            backgroundColor={ORANGE}
            lightColor={LIGHT_ORANGE}
            budgetAmount={225}
            budgetSpent={156}
            budgetName={"Activity"}
            onClick={() => {
              console.log("BudgetBlock Clicked");
            }}
          ></BudgetBlock>
        </SearchBar>
        <Button
          className=" self-center w-full lg:w-1/4 mt-5"
          text="Add Payment"
          backgroundColor={GREEN}
        ></Button>
      </div>
    </>
  );
};

export { BudgetsPage };
