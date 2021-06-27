import React from "react";
import ItemList from "../itemlist/ItemList";
import "./ItemListContainer.css";

function ItemListContainer() {
  return (
    <div className="product-list">
      <div className="greeting">
        <h1> Bienvenidos! Gracias por su visita! </h1>
      </div>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
