import React from "react";
import FetchProductsApi from "../fetchproductsapi/FetchProductsApi";
//import Item from "../item/Item";
import "../item/Item.css";

function ItemList() {
  return (
    <div>
      <FetchProductsApi />
    </div>
  );
}

export default ItemList;
