import React, { useState, useEffect } from "react";

import { getOneProduct } from "../../mockApi/mockApi";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import CardDetail from "./CardDetail";

import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [product, setProduct] = useState([]);

  const { itemID } = useParams();

  useEffect(() => {
    getOneProduct(itemID).then((data) => {
      setProduct(data);
    });
  }, [itemID]);

  return (
    <FlexWrapper>
      <CardDetail product={product} />
    </FlexWrapper>
  );
}

export default ItemDetailContainer;