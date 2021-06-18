import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
//import ItemCount from "../itemcount/ItemCount";

function Item() {
  const data = [
    {
      id: "1",
      name: "Anteojos Chloe",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipiscing, elit id.",
      stock: 5,
    },
    {
      id: "2",
      name: "Reloj Heroine",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipiscing, elit id.",
      stock: 16,
    },
    {
      id: "3",
      name: "Cartera Lady",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipiscing, elit id.",
      stock: 13,
    },
  ];

  function getItems() {
    let myFirstPromise = new Promise((resolve, reject) => {
      setTimeout(function () {
        const error = false;
        if (!error) {
          resolve(data);
        }
        reject("Error obteniendo los datos solicitados");
      }, 2000);
    });

    myFirstPromise
      .then(function (datos) {
        console.log(datos);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("Bravo, hiciste tu primera promesa <3!!");
      });
  }

  getItems();

  return (
    <CardDeck>
      {data.map((dato, index) => {
        return (
          <Card key={index}>
            <h3>{dato.name}</h3>
            <p>{dato.description}</p>
            <hr />
          </Card>
        );
      })}
    </CardDeck>
  );
}

export default Item;
