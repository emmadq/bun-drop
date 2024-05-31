import React, { useState, useEffect } from "react";
import LogoC from "../assets/bun drop images/logo-color.png";

const Navbar = () => {
  const [clicked, setClicked] = useState("");

  useEffect(() => {
    const storedClicked = localStorage.getItem("clicked");
    if (storedClicked) {
      setClicked(storedClicked);
    }
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
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
