import React from "react";
import OrderDisplay from "../components/OrderDisplay";

function Order({ user }) {
  console.log("log from orderpage " + user);
  return (
    <div className="order-cont">
      <OrderDisplay user={user}></OrderDisplay>
    </div>
  );
}

export default Order;
