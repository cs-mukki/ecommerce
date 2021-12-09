import "./cart-item.styles.css";

const CartItem = ({ imageUrl, name, quantity }) => (
  <div className="cart-item">
    <div className="cart-item__left">
      <img src={imageUrl} alt={name} />
    </div>
    <div className="cart_item__right">
      <span>{name}</span>
      <span> ✖️ {quantity}</span>
    </div>
  </div>
);

export default CartItem;
