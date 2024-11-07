import React from "react";
import DisplayPay from "../components/DisplayPay";

function Pay({ user }) {
  return (
    <div className="pay-cont">
      <DisplayPay user={user}></DisplayPay>
    </div>
  );
}

export default Pay;
