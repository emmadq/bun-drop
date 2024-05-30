import React from "react";
import LogoC from "../assets/bun drop images/logo-color.png";

const Navbar = () => {
  const meny = [];

  fetch("http://localhost:3000/menu")
    .then((resp) => resp.json())
    .then((data) => meny.push(data));

  return (
    <div className="Navbar-container">
      <div className="logo-cont">
        <img src={LogoC} alt="" />
        <h2>Bun Drop</h2>
      </div>
      <div className="link-cont">
        <a href="">Meny</a>
        <a href="">Order</a>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
