import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import SingleProducts from "./Components/SingleProducts";
import Footer from "./Components/Footer";
import { CartProvider } from "./CartContext";
function App() {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/products/:id"
            element={<SingleProducts></SingleProducts>}
          />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
