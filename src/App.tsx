import React from "react";
import { Route, Routes } from "react-router";
import LandPage from "./components/LandPage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandPage />} />
      </Routes>
    </>
  );
};

export default App;
