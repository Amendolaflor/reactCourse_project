import React from "react";
import ItemList from "../itemlist/ItemList";
//import FetchProductsApi from "../fetchproductsapi/FetchProductsApi";

function ItemListContainer(props) {
  return (
    <div className="product-list">
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
