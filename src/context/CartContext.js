import React, { useContext, useState, createContext } from "react";
const CartContext = createContext();

export function UseCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function AddToCart( {item} ) {
    setCart([...cart, item])
  }
  return (
    <CartContext.Provider value={{ cart, AddToCart }}>
      {children}
    </CartContext.Provider>
  );
}
