import React from "react";
import "./styles.css";
import SideBar from "./Sidebar";
import MainContent from "./MainContent";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <div id="master-wrapper">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
