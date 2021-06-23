import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import NavBar from "../components/navbar/NavBar"

function AppRouters() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">{Home} </Route>         
        <Route path="/about">{About}</Route>
        <Route path="/products">{Products}</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouters;
