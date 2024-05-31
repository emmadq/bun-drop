import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Meny from "./pages/Meny";
import Order from "./pages/Order";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/menu" element={<Meny></Meny>}></Route>
          <Route path="/order" element={<Order></Order>}></Route>

          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
