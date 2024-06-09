import React, { useEffect, useState } from "react";
import CategoryCircle from "./CategoryCircle";
import MenyItems from "./MenyItems";
import Searchbar from "./Seachbar";
import BurgerModal from "./BurgerModal";
import { setUserSession } from "../assets/helpers/auth";

function Display({ user }) {
  const [searchInput, setSearchInput] = useState("");
  const [catSearch, setCat] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentUser, setCurrentUser] = useState(user);
  const [favo, setFavo] = useState(user ? user.favo : []);

  useEffect(() => {
    setCurrentUser(user);
    setFavo(user ? user.favo : []);
  }, [user]);

  const handleInputChange = (input) => {
    setSearchInput(input);
  };

  const handleSelectedItem = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const addToFavo = (itemId) => {
    const updatedFavo = [...favo, { itemId }];
    setFavo(updatedFavo);
    updateUserFavo(updatedFavo);
  };

  const removeFromFavo = (itemId) => {
    const updatedFavorites = favo.filter((favo) => favo.itemId !== itemId);
    setFavo(updatedFavorites);
    updateUserFavo(updatedFavorites);
  };

  const updateUserFavo = (updatedFavorites) => {
    if (user) {
      const updateUser = {
        ...user,
        favo: updatedFavorites,
      };

      const updateOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateUser),
      };

      fetch(`http://localhost:3000/users/${user.id}`, updateOptions)
        .then((resp) => resp.json())
        .then((data) => {
          setUserSession(data);
          console.log("User favorites updated:", data.favo);
        })
        .catch((error) => {
          console.error("Failed to update user favorites:", error);
          // Återställ till tidigare favoriter vid fel
          setFavorites(user.favo);
        });
    }
  };

  const handleAddToCart = (item, quantity) => {
    const newItem = { ...item, quantity };

    if (currentUser) {
      try {
        const updatedOrder = currentUser.order || [];
        updatedOrder.push(newItem);
        const updatedUser = { ...currentUser, order: updatedOrder };

        const updateOptions = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        };
        fetch(`http://localhost:3000/users/${currentUser.id}`, updateOptions)
          .then((resp) => resp.json())
          .then((data) => {
            setUserSession(data);
            setCurrentUser(data);
            console.log(
              `added ${quantity} of ${item.title} to ${data.username}s cart`
            );
          });
      } catch (error) {
        console.log(`Failed to update user data on server`);
      }
    } else {
      const guestCart = JSON.parse(localStorage.getItem("guestCart")) || [];
      guestCart.push(newItem);
      localStorage.setItem("guestCart", JSON.stringify(guestCart));
      console.log(`added ${quantity} of ${item.title} to guest cart!`);
    }
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
        favo={favo}
        addToFavo={addToFavo}
        removeFromFavo={removeFromFavo}
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
