import React, { createContext, useState, useEffect } from "react";

import {
  addItem,
  getCartCount,
  removeItem,
  deleteItemFromCart,
} from "./cart.utils";

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  hidden: true,
  toggleHidden: () => {},
  removeItemFromCart: () => {},
  deleteItem: () => {},
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const count = getCartCount(cartItems);
    setCartCount(count);
  }, [cartItems]);

  const addItemToCart = (item) => setCartItems(addItem(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);
  const removeItemFromCart = (item) =>
    setCartItems(removeItem(cartItems, item));
  const deleteItem = (item) =>
    setCartItems(deleteItemFromCart(cartItems, item));

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        cartCount,
        toggleHidden,
        hidden,
        removeItemFromCart,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
