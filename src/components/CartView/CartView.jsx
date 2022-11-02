import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import "./CartView.css"

import UserForm from "../UserForm/UserForm";

function CartView() {
  const { cart, removeItem, getTotalPrice } = useContext(cartContext);

  return (
    <>
      {cart.map((prod) => (
        <div key={prod.id} className="containerProduct">
          <h2>{prod.title}</h2>
          <h4>${prod.price}</h4>
          <h4>{prod.count}</h4>
          <h4>Total Price: €{prod.price * prod.count}</h4>
          <button  onClick={() => removeItem(prod.id)} className="DeleteBtnS">X</button>
        </div>
      ))}

      <UserForm cart={cart} getTotalPrice={getTotalPrice} />
    </>
  );
}

export default CartView;