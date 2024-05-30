import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Display from "../components/Display";

function Home() {
  return (
    <div className="home-cont">
      <Navbar></Navbar>
      <Display></Display>
      <Footer></Footer>
    </div>
  );
}

export default Home;
