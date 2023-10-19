import Cart from "./components/cart/Cart";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ProductsPage from "./pages/produse/ProductsPage";
import Articole from "./pages/articole/Articole";
import DespreNoi from "./pages/despre-noi/DespreNoi";
import Contact from "./pages/contact/Contact";
import CheckOut from "./pages/checkOut/CheckOut";
import Product from "./pages/produs/Product";
import { useEffect, useState } from "react";
import HoneyBee from "./components/beeAnimation/HoneyBee";
import Finish from "./pages/Finish/Finish";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <CartProvider>
      {isLoading && <HoneyBee />}
      {!isLoading && (
        <Routes>
          <Route index element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/produse" element={<ProductsPage />} />
          <Route path="/articole" element={<Articole />} />
          <Route path="/despre-noi" element={<DespreNoi />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/check-out" element={<CheckOut />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      )}
    </CartProvider>
  );
}

export default App;
