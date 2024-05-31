import React, { useState } from "react";
import CategoryCircle from "./CategoryCircle";
import MenyItems from "./MenyItems";
import Searchbar from "./Seachbar";
import BurgerModal from "./BurgerModal";

function Display() {
  const [searchInput, setSearchInput] = useState("");
  const [catSearch, setCat] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleInputChange = (input) => {
    setSearchInput(input);
  };

  const handleSelectedItem = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleAddToCart = (item, quantity) => {
    console.log(`Added ${quantity} of ${item.title} to cart.`);
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
      <CategoryCircle catSearch={catSearch} setCat={setCat}></CategoryCircle>
      <MenyItems
        searchInput={searchInput}
        cat={catSearch}
        setSelectedItem={handleSelectedItem}
      ></MenyItems>
      <BurgerModal
        item={selectedItem}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      ></BurgerModal>
    </div>
  );
}

export default Display;
