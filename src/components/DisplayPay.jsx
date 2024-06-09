import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DisplayPay({ user }) {
  const [radio, setRadio] = useState("");
  const [tel, setTel] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (radio === "") {
      alert("Please choose type of payment!");
    }

    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    navigate("/confirmation");
  }

  return (
    <form onSubmit={handleSubmit} className="displaypay-cont">
      <div className="displaypay-delivery">
        <h3>Delivery information</h3>
        <div>
          <input type="text" placeholder="First name" required />
          <input
            className="lastname"
            type="text"
            placeholder="Last name"
            required
          />
        </div>
        <input type="email" placeholder="Email adress" required />
        <input
          onBlur={(e) => setTel(e.target.value)}
          type="tel"
          pattern="[0-9]{4}-[0-9]{6}"
          placeholder="Phone number"
          required
        />
      </div>
      <div className="displaypay-delivery">
        <input type="text" placeholder="Street" required />
      </div>
      <div className="displaypay-delivery city">
        <div>
          <input type="text" placeholder="Zip code" required />
          <input className="lastname" type="text" placeholder="City" required />
        </div>
      </div>
      <div className="displaypay-payment">
        <h3>Payment method</h3>
        <div className="payment-options">
          <label htmlFor="option1">
            <input
              checked={radio === "card"}
              onClick={() =>
                radio === "" || radio === "swish"
                  ? setRadio("card")
                  : setRadio("")
              }
              id="option1"
              type="radio"
              name="payment"
            />
            Card
            <img
              src="https://checkout-cdn.avarda.com/cdn/images/svg-assets/VisaMastercardLogo.svg"
              alt=""
            />
          </label>
          {radio === "card" ? (
            <div className="cardinput">
              <div className="cardinput-first">
                <p>Card number</p>
                <input type="text" placeholder="4925 0000 0000 0000" required />
              </div>
              <div className="cardinput2">
                <div className="cardborderright">
                  <p>Expiration date (mm/yy)</p>
                  <input type="text" placeholder="02/25" required />
                </div>
                <div className="cardinput-second">
                  <p>CVC</p>
                  <input type="text" placeholder="123" required />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <label htmlFor="option2">
            <input
              checked={radio === "swish"}
              onClick={() =>
                radio === "" || radio === "card"
                  ? setRadio("swish")
                  : setRadio("")
              }
              id="option2"
              type="radio"
              name="payment"
            />
            Swish
            <img
              src="https://checkout-cdn.avarda.com/cdn/images/svg-assets/SwishLogo.svg"
              alt=""
            />
          </label>
          {radio === "swish" ? (
            <div className="cardinput">
              <input
                type="tel"
                value={tel}
                pattern="[0-9]{4}-[0-9]{6}"
                placeholder="Phone number"
                onChange={(e) => setTel(e.target.value)}
                required
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="checkout">
        <button type="submit">Finalize Purchase</button>
      </div>
    </form>
  );
}

export default DisplayPay;
