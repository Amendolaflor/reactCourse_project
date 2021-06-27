import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import NavBar from "../components/navbar/NavBar";
import Checkout from "../components/checkout/Checkout";
import ItemDetailContainer from "../components/itemdetailcontainer/ItemDetailContainer"

function AppRouters() {
  return (
    <BrowserRouter>    
      <NavBar/>
      <Switch>
        <Route exact path="/"> <Home/></Route>                 
        <Route path="/products"><Products/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/checkout"><Checkout/></Route>
        <Route path="/:product_id"><ItemDetailContainer/></Route>

      </Switch>     
    </BrowserRouter>
  );
}

export default AppRouters;


