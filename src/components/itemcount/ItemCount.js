import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css";

function ItemCount({ stock, onAdd }) {
  const [counter, setCounter] = useState(1);
  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const manualChange = (e) => {
    let value = e.target.value;
    if (value > stock) {
      setCounter(stock);
    } else {
      setCounter(value);
    }
  };
  return (
    <div className="btn-comprar">
      {stock > 0 ? (
        <>
          {" "}
          <Button variant="info" onClick={restar}>
            -
          </Button>{" "}
          <input
            type="number"
            value={counter}
            placeholder="Escribe la cantidad"
            onChange={manualChange}
          />
          <Button variant="info" onClick={sumar}>
            +
          </Button>
          <div>
            <Button onClick={onAdd} variant="outline-info">
              Comprar
            </Button>{" "}
          </div>
        </>
      ) : (
        <p>Sin stock</p>
      )}
    </div>
  );
}

export default ItemCount;
