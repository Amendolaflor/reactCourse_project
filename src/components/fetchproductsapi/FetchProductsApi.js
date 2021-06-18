import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
//import CardDeck from "react-bootstrap/CardDeck";
//import ItemCount from "../itemcount/ItemCount";

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
    <div>
      {data !== null ? (
        data.map((dato, index) => {
          return (
            <Card border="light" style={{ width: "18rem" }} key={index}>
              <Card.Img variant="top" src={dato.image} />
              <h3>{dato.title}</h3>
              <p>{dato.description}</p>
              <hr />
            </Card>
          );
        })
      ) : (
        <h3>Cargando Productos :)</h3>
      )}
    </div>
  );
}

export default FetchProductsApi;
