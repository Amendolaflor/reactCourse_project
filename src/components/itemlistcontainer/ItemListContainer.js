import React from "react";
import ItemList from "../itemlist/ItemList";

function ItemListContainer(props) {
  return (
    <div className="product-list">
      <h1> {props.greeting} </h1>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
