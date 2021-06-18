import React from "react";
import FetchProductsApi from "../fetchproductsapi/FetchProductsApi";
//import Item from "../item/Item";
import "../fetchproductsapi/FetchProductsApi.css";
//import "../item/Item.css";


function ItemList() {
  return (
    <div>
      <FetchProductsApi />
    </div>
  );
}

export default ItemList;
