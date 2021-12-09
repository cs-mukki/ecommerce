import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./header.styles.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { CartContext } from "../../providers/cart/cart.provider";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => {
  const { cartItems, hidden } = useContext(CartContext);

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__right">
        <Link className="link" to="/shop">
          Shop
        </Link>
        <Link className="link" to="/sign-in">
          Sign In
        </Link>
        <CartIcon />
        {!hidden && <CartDropdown cartItems={cartItems} />}
      </div>
    </div>
  );
};

export default Header;
