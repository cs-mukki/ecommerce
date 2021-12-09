import React from "react";

import ShoppingIcon from "../../assets/shopping-icon.png";
import { CartContext } from "../../providers/cart/cart.provider";

import "./cart-icon.styles.css";

const CartIcon = () => {
  const { cartCount, toggleHidden } = React.useContext(CartContext);
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <img src={ShoppingIcon} alt="CartIcon" />
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
