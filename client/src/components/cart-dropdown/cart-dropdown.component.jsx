import React from "react";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.css";

import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../providers/cart/cart.provider";

const CartDropdown = ({ cartItems, history }) => {
  const { toggleHidden } = React.useContext(CartContext);
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        cartItems.map(({ id, ...otherProps }) => (
          <CartItem key={id} {...otherProps} />
        ))
      ) : (
        <h4 className="empty">Cart Is Empty...</h4>
      )}
      <div className="cart-dropdown__bottom">
        {cartItems.length ? (
          <button
            type="button"
            className="checkout-btn"
            onClick={() => {
              history.push("/checkout");
              toggleHidden();
            }}
          >
            GO TO CHECKOUT
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(CartDropdown);
