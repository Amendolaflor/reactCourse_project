import React, { useState, useEffect } from 'react';
import astronauta from "../../assets/imgs/logo3.png";
import "../../pages/Pages.css";

function Checkout() {
  const [count, setCount] = useState(0);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `You clicked ${count} times`;
  });

  return (
  <div className="container-pages">
      <h2>Checkout under construction. . .  (In a mission to Mars)</h2>
      <div>
        <img src={astronauta} alt="logo astronauta" width="20%"></img>
      </div>
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
    </div>
  );
}

export default Checkout;
