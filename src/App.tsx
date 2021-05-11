import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routing } from "modules/routing";
import "./App.css";

export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routing />
      </Router>
    </>
  );
};
