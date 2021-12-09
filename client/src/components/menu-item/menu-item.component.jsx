import { withRouter } from "react-router-dom";

import "./menu-item.styles.css";

const MenuItem = ({ title, imageUrl, history }) => (
  <div
    className="menu-item"
    onClick={() => history.push(`/shop/${title.toLowerCase()}`)}
  >
    <div
      className="menu-item__image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <h2 className="menu-item__title">{title}</h2>
  </div>
);

export default withRouter(MenuItem);
