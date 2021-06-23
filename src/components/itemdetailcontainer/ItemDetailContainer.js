import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from "../itemdetail/ItemDetail";

function ItemDetailContainer() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  console.log(data);
  return (
    <Container>
      {data !== null ? (
        data.map((dato, index) => {
          return (
            <ItemDetail
              key={index}
              image={dato.image}
              description={dato.description}
              title={dato.title}
              price={dato.price}
              stock="9"
            />
          );
        })
      ) : (
        <p/>
      )}
    </Container>
  );
}

export default ItemDetailContainer;
