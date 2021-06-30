import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from "../itemcount/ItemCount";
import {UseCartContext} from "../../context/CartContext"


function ItemDetail({ item }) {
  const {AddToCart} = UseCartContext();

//fatla logica del carrito

  
  
  return (
    <>
      {item !== undefined ? (
        <Container className="cont-detalle">
          <Row>
            <Col xs={12} md={6} className="cont_img-detalle">
              <Image className="img-detalle" src={item.thumbnail} rounded />{" "}
            </Col>
            <Col xs={12} md={6} className="cont_descripcion">
              <h3>{item.title}</h3>
              <p>{`Stock: ${item.available_quantity}`}</p>
              <p>{`Precio: $${item.price}`}</p>
              <p>{`Descripcion: ${item.title}`} </p>
              <hr />
              <ItemCount stock={item.available_quantity} onAdd={AddToCart}/>
            </Col>
          </Row>
        </Container>
      ) : (
        <p>No hay nada para mostrar</p>
      )}
    </>
  );
}

export default ItemDetail;
