import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
