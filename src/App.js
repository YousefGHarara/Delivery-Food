import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import Cart from "./Pages/Cart/cart";
import PlaceOrder from "./Pages/PlaceOrder/placeOrder";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/menu" element={<Home />}/>
        <Route path="/mobile-app" element={<Home />}/>
        <Route path="/contact" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/place-order" element={<PlaceOrder />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
