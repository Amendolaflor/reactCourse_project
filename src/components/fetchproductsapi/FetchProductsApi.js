import React, { useEffect, useState } from "react";
import { CardDeck, Spinner } from "react-bootstrap";
import Item from "../item/Item";

function FetchProductsApi() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  console.log(data);
  return (
    <CardDeck>
      {data !== null ? (
        data.map((dato, index) => {
          return (
            <Item
              key={index}
              image={dato.image}
              name={dato.description}
              title={dato.title}
             price={dato.price}
              stock="9"
            />
          );
        })
      ) : (
        <Spinner animation="border" />
      )}
    </CardDeck>
  );
}

export default FetchProductsApi;
