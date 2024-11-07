import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Pay from "./pages/Pay";
import Confirmation from "./pages/Confirmation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import {
  getUserSession,
  setUserSession,
  clearUserSession,
} from "./assets/helpers/auth";

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
    setUserSession(loggedInUser);
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
          <Route path="/" element={<Home user={user}></Home>}></Route>
          <Route path="/order" element={<Order user={user}></Order>}></Route>
          <Route path="/pay" element={<Pay user={user}></Pay>}></Route>
          <Route
            path="/confirmation"
            element={<Confirmation user={user}></Confirmation>}
          ></Route>

          <Route></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
