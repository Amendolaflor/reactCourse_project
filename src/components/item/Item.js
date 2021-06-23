import { CardDeck } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../fetchproductsapi/FetchProductsApi.css";
import ItemCount from "../itemcount/ItemCount";
import "./Item.css";

function Item({ image, title, description, index, stock }) {
  const onAdd = () => {
    console.log("Articulo en tu carrito");
  };

  return (
    <CardDeck>
      <Card
        ClassName="ficha-producto"
        border="light"
        style={{ width: "18rem" }}
        key={index}
      >
        <Card.Img variant="top" src={image} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p stock="9"> </p>
        <hr />
        <ItemCount stock={stock} onAdd={onAdd} />
      </Card>
    </CardDeck>
  );
}

export default Item;
