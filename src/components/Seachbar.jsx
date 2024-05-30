import React, { useState } from "react";

function Searchbar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  function handleInput(e) {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  }

  return (
    <div className="searchbar">
      <h2>What are you craving?</h2>
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={handleInput}
      />
    </div>
  );
}

export default Searchbar;
