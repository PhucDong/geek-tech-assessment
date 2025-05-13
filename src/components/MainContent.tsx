import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";

function MainContent(): React.ReactElement {
  return (
    <div className="w-4/5 bg-gray-100">
      <Header />

      <Outlet />
    </div>
  );
}

export default MainContent;
