import React from "react";
import NavBar from "../components/common/NavBar";
import MainContent from "../components/MainContent";

function RootLayout(): React.ReactElement {
  return (
    <div className="h-screen flex items-stretch">
      <NavBar />
      <MainContent />
    </div>
  );
}

export default RootLayout;
