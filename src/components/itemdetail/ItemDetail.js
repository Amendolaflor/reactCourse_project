import React from 'react';
import { Button, Container, Row, Image, Col } from "react-bootstrap";
import "./ItemDetail.css"

function ItemDetail({ image, description, price, title }) {
  return (
    <Container className="cont-detalle">
      <Row>
        <Col xs={6} md={6}>
          <Image className="img-detalle" src={image} rounded />{" "}
        </Col>
        <Col xs={6} md={6}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Price: UDS {price}</p>
          <hr />
          <Button variant="info">Buy</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;



