import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { setUserSession } from "../assets/helpers/auth";

function OrderDisplay({ user }) {
  const [totalprice, setTotalprice] = useState(0);
  const [order, setOrder] = useState([]);
  const [currentUser, setCurrentUser] = useState(user);

  console.log(order);
  useEffect(() => {
    if (user) {
      setOrder(user.order);
      const total = user.order.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalprice(total);
      console.log(user);
    } else {
      const guestCart = JSON.parse(localStorage.getItem("guestCart")) || [];
      setOrder(guestCart);
      const total = guestCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalprice(total);
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
      let updateOrder;
      if (item.quantity > 1) {
        updateOrder = order.map((orderI) => {
          if (orderI.id === item.id) {
            return { ...orderI, quantity: orderI.quantity - 1 };
          }
          return orderI;
        });
      } else {
        updateOrder = order.filter((orderI) => orderI.id !== item.id);
      }

      setOrder(updateOrder);

      const updateOption = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...user, order: updateOrder }),
      };

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

  function handleDeleteNouser(item) {
    try {
      if (item.quantity > 1) {
        const updateOrder = order.map((orderI) => {
          if (orderI.id === item.id) {
            return { ...orderI, quantity: orderI.quantity - 1 };
          }
          return orderI;
        });

        setOrder(updateOrder);
        localStorage.setItem("guestCart", JSON.stringify(updateOrder));
      } else {
        const updateOrder = order.filter((orderI) => orderI.id !== item.id);
        setOrder(updateOrder);
        localStorage.setItem("guestCart", JSON.stringify(updateOrder));
      }
    } catch (error) {}
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
        {order.length > 0 ? (
          order.map((i) => (
            <div key={i} className="order-item">
              <div className="order-item-left">
                <img src={i.image}></img>
                <h3>{i.title}</h3>
              </div>
              <div className="order-item-right">
                <h3>{i.quantity}</h3>
                <h3>${i.price}</h3>
                <button
                  onClick={() => {
                    if (currentUser) {
                      handleDelete(i);
                    } else {
                      handleDeleteNouser(i);
                    }
                  }}
                ></button>
              </div>
            </div>
          ))
        ) : (
          <h2>No items selected!</h2>
        )}
      </div>
      <div className="order-total">
        <h2>Total:</h2>
        <h2 id="dollar">$</h2>
        <h2>{totalprice.toFixed(2)}</h2>
        <Link to="/pay">
          <button
            className={totalprice < 1 ? "order-btn-disabled" : ""}
            disabled={totalprice < 1}
          >
            Pay
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderDisplay;
