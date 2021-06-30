import React, { useContext, useState, createContext } from "react";
const CartContext = createContext();

export function UseCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function AddToCart({ obj }) {
    setCart([...cart, obj])
  }
  return (
    <CartContext.Provider value={{ cart, AddToCart }}>
      {children}
    </CartContext.Provider>
  );
}
