import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { setUserSession } from "../assets/helpers/auth";

function OrderDisplay({ user }) {
  const [totalprice, setTotalprice] = useState(0);
  const [order, setOrder] = useState([]);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    if (user) {
      setOrder(user.order);
      const total = user.order.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalprice(total);
      console.log(user);
    }
  }, [user]);

  useEffect(() => {
    const total = order.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalprice(total);
  }, [order]);

  function handleDelete(item) {
    try {
      const updateOrder = order.filter((orderI) => orderI.id !== item.id);

      setOrder(updateOrder);

      const updateOption = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...user, order: updateOrder }),
      };

      // const deleteOption = {
      //   method: "DELETE",
      //   headers: { "Content-Type": "application/json" },
      // };

      fetch(`http://localhost:3000/users/${user.id}`, updateOption)
        .then((resp) => resp.json())
        .then((data) => {
          setUserSession(data);
          setCurrentUser(data);
          console.log(`decresed 1 of ${item.title} to ${data.username}s cart`);
        });
    } catch (error) {
      console.log("handle delete does not work as expected");
    }
  }

  return (
    <div className="orderdisp-cont">
      <div className="order-head">
        <div className="order-head-left">
          <img src="/src/assets/icons/carticon.svg" alt="" />
          <h2>Order</h2>
        </div>
        <div className="order-head-right">
          <h2>Quantity</h2>
          <h2>Price</h2>
          <div></div>
        </div>
      </div>
      <hr />

      <div className="order-items">
        {user
          ? order.map((i) => (
              <div key={i} className="order-item">
                <div className="order-item-left">
                  <img src={i.image}></img>
                  <h3>{i.title}</h3>
                </div>
                <div className="order-item-right">
                  <h3>{i.quantity}</h3>
                  <h3>${i.price}</h3>
                  <button onClick={() => handleDelete(i)}></button>
                </div>
              </div>
            ))
          : console.log("No user " + user)}
      </div>
      <div className="order-total">
        <h2>Total:</h2>
        <h2 id="dollar">$</h2>
        <h2>{totalprice.toFixed(2)}</h2>
        <Link to="/pay">
          <button>Pay</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderDisplay;
