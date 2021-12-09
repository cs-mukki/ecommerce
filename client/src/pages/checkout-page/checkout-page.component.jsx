import React from "react";

import "./checkout-page.styles.css";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../providers/cart/cart.provider";

const CheckoutPage = () => {
  const { cartItems } = React.useContext(CartContext);

  return (
    <div className="checkout-page">
      <h2>Checkout Page!</h2>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CheckoutPage;
