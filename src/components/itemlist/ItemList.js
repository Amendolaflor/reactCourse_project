import React from "react";
import FetchProductsApi from "../fetchproductsapi/FetchProductsApi";
import "../fetchproductsapi/FetchProductsApi.css";

function ItemList() {
  return (
    <div>
      <FetchProductsApi />
    </div>
  );
}

export default ItemList;
