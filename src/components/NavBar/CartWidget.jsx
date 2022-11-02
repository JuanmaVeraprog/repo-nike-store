
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import CartWidgetImg from "../../Img/shopping-bag.png"

function CartWidget() {
  const { getTotalItemCount } = useContext(cartContext);

  return (
    <a className="containerCartWidget" href="/cart">
      <img src={CartWidgetImg} alt="Cart Widget" className="shoppingBagLogo"/>
      <span className="itemCountSpan">{getTotalItemCount() > 0 && getTotalItemCount()}</span>
    </a>
  );
}

export default CartWidget;
