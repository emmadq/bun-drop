import React, { useState, useEffect } from "react";
import LogoC from "../assets/bun drop images/logo-color.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setShowLogin, user, handleLogout }) => {
  const [clicked, setClicked] = useState("menu");
  const location = useLocation();

  useEffect(() => {
    const storedClicked = localStorage.getItem("clicked");
    if (storedClicked) {
      setClicked(storedClicked);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("clicked", clicked);
  }, [clicked]);

  useEffect(() => {
    if (location.pathname === "/pay" || location.pathname === "/confirmation") {
      setClicked("");
    }
    if (location.pathname === "/") {
      setClicked("menu");
    }
    if (location.pathname === "/order") {
      setClicked("order");
    }
  }, [location]);

  return (
    <div className="Navbar-container">
      <Link
        onClick={() => setClicked("")}
        className="logo-cont link-cont"
        to="/"
      >
        <img src={LogoC} alt="" />
        <h2>Bun Drop</h2>
      </Link>
      <div className="link-cont">
        <Link
          onClick={() => setClicked("menu")}
          className={clicked === "menu" ? "active" : ""}
          to="/"
        >
          Menu
        </Link>
        <Link
          onClick={() => setClicked("order")}
          className={clicked === "order" ? "active" : ""}
          to="/order"
        >
          Order
        </Link>
        {!user ? (
          <button onClick={() => setShowLogin(true)}>Login</button>
        ) : (
          <button className="logout" onClick={handleLogout}>
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
