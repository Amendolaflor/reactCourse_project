import React from "react";
import ItemDetailContainer from "../itemdetailcontainer/ItemDetailContainer";
import ItemList from "../itemlist/ItemList";
import "./ItemListContainer.css"

function ItemListContainer(props) {
  return (
    <div className="product-list">
      <div className = "greeting">
        <h1> Welcome! Thanks for your visit! </h1>
      </div>
      <ItemList />
      <ItemDetailContainer/>
    </div>
  );
}

export default ItemListContainer;
