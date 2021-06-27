import { Card, CardDeck, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../fetchproductsapi/FetchProductsApi.css";
import "./Item.css";

function Item({ image, title, price, index, id }) {
 
  return (
    <CardDeck>
      <Card
        className="ficha-producto"
        border="light"
        style={{ width: "18rem" }}
        key={index}
      >
        <Card.Img variant="top" className="prod-img" src={image} />
        <h3>{title}</h3>
        <p>{`Precio: $${price}`}</p>        
        <hr />
        <div>
          <Link to={`/${id}`}><Button variant="outline-info">Detalle</Button>{" "}</Link>
        </div>
      </Card>
    </CardDeck>
  );
}

export default Item;
