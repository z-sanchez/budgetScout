import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { LoginPage, BudgetsPage } from "./pages";
import { Header } from "./components";
import { Container } from "./layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage></LoginPage>}></Route>
      <Route
        path="budgets"
        element={
          <div className="flex flex-col items-center w-full">
            <Header></Header>
            <Outlet></Outlet>
          </div>
        }
      >
        <Route path="house" element={<BudgetsPage></BudgetsPage>}></Route>
      </Route>
    </Routes>
  );
};

export { AppRoutes };
