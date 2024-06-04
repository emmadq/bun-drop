import React, { useState, useEffect } from "react";
import LogoC from "../assets/bun drop images/logo-color.png";

const Navbar = ({ setShowLogin, user, handleLogout }) => {
  const [clicked, setClicked] = useState("");

  useEffect(() => {
    const storedClicked = localStorage.getItem("clicked");
    if (storedClicked) {
      setClicked(storedClicked);
    }

    console.log("log from navbar " + user);
  }, []);

  useEffect(() => {
    localStorage.setItem("clicked", clicked);
  }, [clicked]);

  return (
    <div className="Navbar-container">
      <a
        onClick={() => setClicked("")}
        className="logo-cont link-cont"
        href="/"
      >
        <img src={LogoC} alt="" />
        <h2>Bun Drop</h2>
      </a>
      <div className="link-cont">
        <a
          onClick={() => setClicked("menu")}
          className={clicked === "menu" ? "active" : ""}
          href="/menu"
        >
          Menu
        </a>
        <a
          onClick={() => setClicked("order")}
          className={clicked === "order" ? "active" : ""}
          href="/order"
        >
          Order
        </a>
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
