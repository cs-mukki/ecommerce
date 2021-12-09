import "./collection-preview.styles.css";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ collections }) => (
  <div className="collection-preview">
    {collections.map(({ id, title, items }) => (
      <div className="preview" key={id}>
        <h2 className="preview__title">{title}</h2>
        <div className="preview__items">
          {items
            .filter((_, ind) => ind < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    ))}
  </div>
);

export default CollectionPreview;
