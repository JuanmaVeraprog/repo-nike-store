import React, { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, text }) {
  const [count, setCount] = useState(initial);

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  return (
    <div className="shop-container">
      <h2>Realiza tu compra</h2>
      <div className="counter-container">
        <button onClick={handleSubstract}>-</button>
        <strong id="counter">{count}</strong>
        <button onClick={handleAdd}>+</button>
      </div>
      <button className="addCartBtn">{text}</button>
    </div>
  );
}
