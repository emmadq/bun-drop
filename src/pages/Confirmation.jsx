import React, { useState, useEffect } from "react";

function Confirmation({ user }) {
  const randomMin = Math.floor(Math.random() * (90 - 15 + 1)) + 15;
  const [order, setOrder] = useState([]);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    if (user) {
      setOrder(user.order);
    } else {
      const guestCart = JSON.parse(localStorage.getItem("guestCart")) || [];
      setOrder(guestCart);
    }
  }, [user]);

  useEffect(() => {
    if (currentUser) {
      const updateUser = { ...currentUser, order: [] };
      const updateOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          body: JSON.stringify(updateUser),
        },
      };

      fetch(`http://localhost:3000/users/${currentUser.id}`, updateOption)
        .then((resp) => resp.json())
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((error) => console.log("Failed to update users order", error));
    } else {
      localStorage.removeItem("guestCart");
    }
  }, [currentUser]);

  return (
    <div className="confirm-cont">
      <h1>Thank you for your purchues</h1>
      <h2>You have orderd:</h2>
      {order.map((i) => (
        <h3>
          x{i.quantity} {i.title}
        </h3>
      ))}
      <h2>Your order will be done and delivered in {randomMin} minutes!</h2>
    </div>
  );
}

export default Confirmation;
