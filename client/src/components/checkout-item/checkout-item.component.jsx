import { useContext } from "react";
import { CartContext } from "../../providers/cart/cart.provider";

import "./checkout-item.styles.css";

const CheckoutItem = ({ item }) => {
  const { addItemToCart, removeItemFromCart, deleteItem } =
    useContext(CartContext);
  const { name, price, quantity, imageUrl } = item;

  return (
    <div className="checkout-item">
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>
        <span className="minus" onClick={() => removeItemFromCart(item)}>
          &lt;
        </span>
        <span>{quantity}</span>
        <span className="plus" onClick={() => addItemToCart(item)}>
          &gt;
        </span>
      </p>
      <p>💸{price * quantity}</p>
      <p className="checkout-item__rm" onClick={() => deleteItem(item)}>
        ⚔️
      </p>
    </div>
  );
};

export default CheckoutItem;
