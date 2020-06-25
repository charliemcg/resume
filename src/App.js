import React from "react";
import "./styles.css";
import SideBar from "./Sidebar";
import MainContent from "./MainContent";

function App() {
  return (
    <div id="master-wrapper">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
