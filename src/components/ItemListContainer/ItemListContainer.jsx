import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

import { getProducts, getProductsByCategory } from "../../mockApi/mockApi";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [productsList, setProductsList] = useState([]);
  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    if (categoryID === undefined) {
      getProducts().then((data) => {
        setProductsList(data);
      });
    } else {
      getProductsByCategory(categoryID).then((data) => {
        setProductsList(data);
      });
    }
  }, [categoryID]);

  return (
    <div className="container">
      <h1>Products</h1>
      <ItemList productsList={productsList} />
      <hr />
    </div>
  );
}

export default ItemListContainer;