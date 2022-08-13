import React from "react";
import { AppRoutes } from "./Routes";

const App: React.FC = () => {
  return (
    <div className="flex h-screen justify-center py-8">
      <AppRoutes></AppRoutes>
    </div>
  );
};

export default App;
