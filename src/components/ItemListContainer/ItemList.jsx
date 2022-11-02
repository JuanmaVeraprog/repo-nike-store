import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemList(props) {
  return (
    <>
      <FlexWrapper rows={true}>
        {props.productsList.map((prod) => {
          return (
            <Card
              key={prod.id}
              id={prod.id}
              title={prod.title}
              img={prod.img}
              price={prod.price}
              detail={prod.detail}
            />
          );
        })}
      </FlexWrapper>
    </>
  );
}

export default ItemList;
