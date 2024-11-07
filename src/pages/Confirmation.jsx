import React, { useState, useEffect } from "react";
import { setUserSession } from "../assets/helpers/auth";

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
    if (user) {
      const updateUser = { ...user, order: [], favo: user.favo };
      const updateOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateUser),
      };

      fetch(`http://localhost:3000/users/${user.id}`, updateOption)
        .then((resp) => resp.json())
        .then((data) => {
          setCurrentUser(data);
          setUserSession(data);
        })
        .catch((error) => console.log("Failed to update users order", error));
    } else {
      localStorage.removeItem("guestCart");
    }
  }, [user]);

  return (
    <div className="confirm-cont">
      <div className="confirm-div">
        <h1>Thank you for your purchase!</h1>
        <h2>You have orderd:</h2>
        {order.map((i) => (
          <h3>
            x{i.quantity} {i.title}
          </h3>
        ))}
        <h2 className="confirm-last">
          Your order will be done and delivered in{" "}
          <span className="last-random">{randomMin} minutes</span>!
        </h2>
      </div>
    </div>
  );
}

export default Confirmation;
