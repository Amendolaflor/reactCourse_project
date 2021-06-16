import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function ItemCount() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    if (count < 7) {
      setCount(count + 1);
    }
  }

  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <Button
        variant="outline-dark"
        onClick={increaseCount}
      >{` Agregar `}</Button>
      <Button
        variant="outline-dark"
        onClick={decreaseCount}
      >{` Quitar `}</Button>
      <p>{`Cantidad: ${count}`}</p>
    </div>
  );
}

export default ItemCount;
