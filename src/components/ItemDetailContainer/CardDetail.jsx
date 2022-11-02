import React, { useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function CardDetail({ prod }) {
  const [count, setCount] = useState(0);
  const { addToCart, removeItem } = useContext(cartContext);

  function handleAddToCart(count) {
    addToCart(prod, count);
    setCount(count);
  }

  if (prod.title)
    return (
      <div className="cardDetail">
        <div className="cardDetail_img_detail">
        <h2>{prod.title}</h2>
          <img src={prod.img} alt={prod.title} />
        </div>

          <div>
            <h3>$ {prod.price}</h3>
            <p>{prod.detail}</p>
          </div>
          {count === 0 ? (
            <ItemCount
              onAddToCart={handleAddToCart}
              text="Add to Cart"
              initial={1}
            />
          ) : (
            <Link to="/cart" id="viewCartBtn">View Cart</Link>
          )}

          <button onClick={() => removeItem(prod.id)} className="DeleteBtn">Delete</button>

      </div>
    );

  return <Loader />;
}

export default CardDetail;
