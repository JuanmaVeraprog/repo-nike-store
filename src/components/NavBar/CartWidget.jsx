import CartWidgetImg from "../Img/shopping-bag.png"


function CartWidget() {
    return (
      <a href="#cart">
        <img src={CartWidgetImg} alt="Cart Widget" className="shoppingBagLogo"/>
      </a>
    );
  }
  
  export default CartWidget;