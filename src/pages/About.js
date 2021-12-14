//import React from "react"
import "./Pages.css";
import astronauta from "../assets/imgs/logo3.png";
import React, { useState, useEffect } from 'react';

function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `You clicked ${count} times`;
  });

  return (
<div className="container-pages">
  <h2>About under construction. . .  (In a mission to Mars)</h2>
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
// function About() {
//   return (
//     
//       <h2>About under construction. . .  (In a mission to Mars)</h2>
//       <div>
//         <img src={astronauta} alt="logo astronauta" width="20%"></img>
//       </div>
//     </div>
//   );
// }

export default About;
