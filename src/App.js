import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import Cart from "./Pages/Cart/cart";
import PlaceOrder from "./Pages/PlaceOrder/placeOrder";
import Footer from "./Components/Footer/footer";
import { useState } from "react";
import LoginPopup from "./Components/LoginPopup/loginPopup";

function App() {
  const [loginModel, setLoginModel] = useState(false);

  return (
    <div className="App">
      {loginModel ? <LoginPopup loginModel={loginModel} setLoginModel={setLoginModel} /> : <></>}
      <Navbar loginModel={loginModel} setLoginModel={setLoginModel} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
