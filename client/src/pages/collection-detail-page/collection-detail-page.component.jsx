import React, { useState, useEffect, useContext } from "react";

import "./collection-detail-page.styles.css";

import { getItem } from "./shop-detail-page.utils";
import { CartContext } from "../../providers/cart/cart.provider";

const CollectionDetail = ({ collections, match }) => {
  const [item, setItem] = useState({});
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    const newItem = getItem(collections, match.params.id);
    setItem(newItem);
  }, []);

  const { name, imageUrl, price } = item;
  return (
    <div className="collection-detail">
      <div className="detail__left">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="detail__right">
        <h2 className="detail__right__title">{name}</h2>
        <p>🌟🌟🌟🌟🌟 5/5(2555Reviews)</p>
        <p>${price}</p>
        <p>Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam
          ratione quidem quo odio, quas at. Tempora doloribus tenetur maxime
          laborum autem ex molestias in aperiam quam, fugit fugiat quos...
        </p>
        <div className="detail__right__buttons">
          <button className="btn buy-now">Buy Now</button>
          <button
            type="button"
            className="btn add-to-cart"
            onClick={() => addItemToCart(item)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetail;
