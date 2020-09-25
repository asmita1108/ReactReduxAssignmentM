import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import EditProduct from "./Pages/EditProduct";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/edit-product" component={EditProduct} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
