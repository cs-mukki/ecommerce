import { withRouter } from "react-router-dom";

import "./collection-item.styles.css";

const CollectionItem = ({ item: { name, imageUrl, id, price }, history }) => {
  return (
    <div
      className="collection-item"
      onClick={() => history.push(`/shop/details/${id}`)}
    >
      <div
        className="collection-item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-item__details">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};
export default withRouter(CollectionItem);
