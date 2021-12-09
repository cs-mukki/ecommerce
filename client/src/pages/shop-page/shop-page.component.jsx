import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./shop-page.styles.css";

import SHOP_DATA from "./shop-page.data";
import CollectionPage from "../collection-page/collection-page.component";
import CollectionsOverview from "../../components/collections-overview./collections-overview.component";
import { getCollectionsInArray } from "./shop-page.utils";
import CollectionDetail from "../collection-detail-page/collection-detail-page.component";

const ShopPage = ({ match }) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const shopCollections = getCollectionsInArray(SHOP_DATA);
    console.log("SHOP IN ARRAY: ", shopCollections);
    setCollections(shopCollections);
  }, [setCollections]);

  return (
    <div className="shop-page">
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverview collections={collections} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:slug`}
          render={(props) => (
            <CollectionPage collections={SHOP_DATA} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/details/:id`}
          render={(props) => (
            <CollectionDetail collections={SHOP_DATA} {...props} />
          )}
        />
      </Switch>
    </div>
  );
};

export default ShopPage;
