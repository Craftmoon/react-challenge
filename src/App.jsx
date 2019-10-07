import React from "react";
import "./App.scss";
import Menu from "./components/menu";
import Breadcrumb from "./components/breadcrumb";
import PageContent from "./components/page-content";

function App() {
  return (
    <div className="flex-row page-view">
      <Menu />
      <div className="flex-column">
        <Breadcrumb />
        <PageContent />
      </div>
    </div>
  );
}

export default App;
