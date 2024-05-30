import React, { useState } from "react";
import bild from "../assets/bun drop images/bg1.jpg";
import CategoryCircle from "./CategoryCircle";
import MenyItems from "./MenyItems";
import Searchbar from "./Seachbar";

function Display() {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (input) => {
    setSearchInput(input);
  };
  return (
    <div className="display-container">
      <div className="header">
        <div id="bg-over">
          <h1>Bun Drop</h1>
          <>
            <h5>-Your burger delivered</h5>
            <h5>from the sky to your door!</h5>
          </>
        </div>
      </div>
      <Searchbar onSearch={handleInputChange}></Searchbar>
      <CategoryCircle></CategoryCircle>
      <MenyItems input={searchInput}></MenyItems>
    </div>
  );
}

export default Display;
