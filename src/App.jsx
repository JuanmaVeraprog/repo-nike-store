import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import MainFlyer from "./components/MainFlyer/MainFlyer";
import CartView from "./components/CartView/CartView";

function App() {

  return (
    
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <MainFlyer/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route
              path="/category/:categoryID"
              element={<ItemListContainer />}
            />
            <Route
              path="/prod/:itemID"
              element={<ItemDetailContainer />}
            ></Route>

            <Route path="/cart" element={<CartView />}></Route>

            <Route
              path="/thankyou/:orderid"
              element={<h1>Gracias por tu compra</h1>}
            ></Route>

            <Route path="*" element={<h4>Te perdiste! Error: 404</h4>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}


export default App;