import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemList(props) {
  return (
    <>
      <FlexWrapper>
        {props.productsList.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
              detail={product.detail}
              stock={product.stock}
              expired={product.expires}
            />
          );
        })}
      </FlexWrapper>
    </>
  );
}

export default ItemList;