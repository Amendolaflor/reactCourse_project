import React, { useEffect, useState } from "react";
import { CardDeck, Spinner } from "react-bootstrap";
import Item from "../item/Item";

function FetchProductsApi() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1430")
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
      });
  }, []);

  return (
    <CardDeck>
      {data !== null ? (
        data.map((dato, index) => {
          return (
            <Item
              key={index}
              id={dato.id}
              image={dato.thumbnail}
              title={dato.title}
              price={dato.price}
              stock={dato.available_quantity}
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
