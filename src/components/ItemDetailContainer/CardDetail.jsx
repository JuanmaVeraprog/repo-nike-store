import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function CardDetail({ product }) {
  return (
    <div className="detail-container">
      <div className="container-product">
      <h1>{product.title}</h1>

      <img src={product.img} alt={product.title} />

      <h3>€ {product.price}</h3>
      </div>
      <ItemCount stock={product.stock} initial={1} text="Add to Cart" />
    </div>
  );
}

export default CardDetail;
