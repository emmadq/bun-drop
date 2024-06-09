import React, { useState, useEffect } from "react";

function BurgerModal({ item, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrese = () => setQuantity(quantity + 1);
  const handleDecrese = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  if (!item) return null;

  return (
    <div className="burger-modal">
      <div className="burger-modal-header">
        <img id="burger-modal-img" src={item.image} alt="" />

        <button onClick={onClose}>
          <img src="/src/assets/icons/CloseX.svg" alt="" />
        </button>
      </div>
      <div className="burger-modal-info-cont">
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <h1>$ {item.price}</h1>
      </div>
      <div className="burger-modal-btn-cont">
        <div>
          <button onClick={handleDecrese}></button>
          <h2>{quantity}</h2>
          <button onClick={handleIncrese}></button>
        </div>

        <button
          onClick={() => {
            onAddToCart(item, quantity),
              setQuantity(1),
              setTimeout(onClose, 200);
          }}
        >
          Add to order
        </button>
      </div>
    </div>
  );
}

export default BurgerModal;
