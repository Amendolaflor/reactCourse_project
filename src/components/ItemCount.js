import React from 'react';
import Button from 'react-bootstrap/Button';


function ItemCount() {
      const [clicks, setClicks] = React.useState(1);

      function increaseCount() {
          setClicks(clicks + 1)
      }

      function decreaseCount() {
          setClicks(clicks - 1)          
      }

    return (
        <div>
             <Button variant="outline-info" onClick={increaseCount}>{` Agregar `}</Button>
             <Button variant="outline-info" onClick={decreaseCount}>{` Quitar `}</Button>
             <p>{`Cantidad: ${clicks}`}</p>             
        </div>
    )
}

export default ItemCount;

