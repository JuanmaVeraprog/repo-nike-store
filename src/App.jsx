import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./app.css";
import MainFlyer from "./components/MainFlyer/MainFlyer";

function App() {


  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <MainFlyer/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          {}
          <Route
            path="/curso/:itemID"
            element={<ItemDetailContainer />}
          ></Route>

          <Route path="*" element={<h4>Error: 404</h4>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;