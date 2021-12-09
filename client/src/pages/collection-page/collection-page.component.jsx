import React, { useState, useEffect } from "react";

import "./collection-page.styles.css";

import { getCollection } from "./collection-page.utils";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ match, collections }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const collectionId = match.params.slug;
    const collection = getCollection(collections, collectionId);
    console.log("COLLECTION: ", collections);
    const { items } = collection;
    setItems(items);
  }, []);
  return (
    <div className="collection-page">
      <h2 className="collection-page__title">
        {match.params.slug.toUpperCase()}
      </h2>
      <div className="collection-page__items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
