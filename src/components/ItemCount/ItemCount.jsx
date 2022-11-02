import React, { useState } from "react";

import "./ItemCount.css";



const ItemCount = ({onAddToCart }) => {

  const [count, setCount] = useState(1)

  const handleAdd = () => setCount( count + 1 )
  const handleSubstract = () => count > 0 && setCount( count - 1 ) 
  const handleCart = () => onAddToCart ( count )
    

  
  return (
      <div className="containerItemCount">
        <div className="containerSymbols">     
          <button onClick={handleSubstract} className="itemCountBtnS">-</button>
          <div>{count}</div>
          <button onClick={handleAdd} className="itemCountBtnS">+</button>
        </div>   
        <div>
          <button onClick={handleCart} className="itemCountBtn">Add to Cart</button>
        </div>
      </div>  
  )
}

export default ItemCount