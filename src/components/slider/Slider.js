import React from 'react';
import 'react-slideshow-image/dist/styles.css'
//import { Slide } from 'react-slideshow-image';
import "./Slider.css";
import astronauta from "../../assets/imgs/astronauta.png";
// import smartphones from "../../assets/imgs/smartphones.png";
// import womanBuying from "../../assets/imgs/womanBuying.jpg";
//import fondo from "../../assets/imgs/fondo-estrellas.jpg";


const Slideshow = () => {
    return (
      <div>
        <div class="container-fluid welcome ">
        <div class="row justify-content-center py-5">
          <div class="col-lg-4 col-md-12 d-flex justify-content-center align-content-center pl-lg-6">
             <img src={astronauta} alt="astronaita" width="100%"/>      
            <div
            class="col-lg-8 col-md-12 d-flex flex-column justify-content-center align-content-start text-white px-lg-6">
            <h1 class="display-lg-4 h1 text-lg-left text-center">Bienvenidas y Bienvenidos a Nuestra Tienda</h1>
            <h2 class="h4 text-lg-left text-center">Las comidas mas ricas para tu estadia en el espacio</h2>
          </div>
        </div>
      </div>
      </div>
      </div>

    )
};

export default Slideshow;




// import React from 'react';
// import AwesomeSlider from "react-awesome-slider";

// import "./Slider.css";
// import "react-awesome-slider/dist/styles.css";
// import bijou from "../../assets/imgs/bijou.jpg";
// import smartphones from "../../assets/imgs/smartphones.png";
// import womanBuying from "../../assets/imgs/womanBuying.jpg";

// function Slider() {
//   return (
//     <div>
//       <AwesomeSlider className="slider">
//         <div data-src={bijou} />
//         <div data-src={smartphones} />
//         <div data-src={womanBuying} />
//       </AwesomeSlider>
//     </div>
//   );
// }

// export default Slider;
