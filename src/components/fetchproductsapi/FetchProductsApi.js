import React, { useEffect, useState } from "react";
import { CardDeck, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./FetchProductsApi.css";
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
    <Container>
    <CardDeck>
      {data !== null ? (
        data.map((dato, index) => {
          return (
            <CardDeck>
            <Card ClassName = "ficha-producto" border="light" style={{ width: "18rem" }} key={index}>
              <Card.Img variant="top" src={dato.image} />
              <h3>{dato.title}</h3>
              <p>{dato.description}</p>
              <hr />
            </Card>
            </CardDeck>
          );
        })
      ) : (
        <h3>Cargando Productos :)</h3>
      )}
    </CardDeck>
    </Container>
  );
}

export default FetchProductsApi;
