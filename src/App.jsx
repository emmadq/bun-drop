import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Meny from "./pages/Meny";
import Order from "./pages/Order";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import { getUserSession, clearUserSession } from "./assets/helpers/auth";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegi, setShowRegi] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const sessionUser = getUserSession();
    if (sessionUser) {
      setUser(sessionUser);
    }

    console.log("log from app.js " + user);
  }, []);

  const handleLogout = () => {
    console.log("handle logout fungerar!");

    clearUserSession();
    setUser(null);
  };

  const handleUserLogin = (loggedInUser) => {
    setUser(loggedInUser);
    setShowLogin(false);
    setShowRegi(false);
  };

  return (
    <div className="app">
      <Router>
        {showLogin ? (
          <LoginModal
            setShowLogin={setShowLogin}
            setShowRegi={setShowRegi}
            onUserLogin={handleUserLogin}
          ></LoginModal>
        ) : showRegi ? (
          <RegisterModal
            setShowRegi={setShowRegi}
            setShowLogin={setShowLogin}
            onUserRegister={handleUserLogin}
          ></RegisterModal>
        ) : (
          <></>
        )}
        <Navbar
          setShowLogin={setShowLogin}
          user={user}
          handleLogout={handleLogout}
        ></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/menu" element={<Meny></Meny>}></Route>
          <Route path="/order" element={<Order></Order>}></Route>

          <Route></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
