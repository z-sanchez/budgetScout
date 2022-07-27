import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage></LoginPage>}></Route>
    </Routes>
  );
};

export { AppRoutes };
