import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from "../itemdetail/ItemDetail";


function ItemDetailContainer() {
  const [dato, setData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  console.log(dato);
  return (
    <Container>
      <ItemDetail
        key={dato.id}
        image={dato.image}
        description={dato.description}
        title={dato.title}
        price={dato.price}
        stock="9"
      />
    </Container>
  );
}

export default ItemDetailContainer
