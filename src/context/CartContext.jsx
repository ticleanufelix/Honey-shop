import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    // Verificăm dacă produsul este deja în coș

    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Dacă produsul există, actualizăm cantitatea lui
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Dacă produsul nu există, îl adăugăm în coș cu cantitatea specificată
      setCart([...cart, { ...product, quantity }]);
    }
    toast.success("Ai adaugat produs in cos");
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const resetCart = () => {
    setCart([]);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, resetCart, scrollToTop }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
