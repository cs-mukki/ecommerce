import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Switch>
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
