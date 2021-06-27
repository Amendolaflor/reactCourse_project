import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import "./Slider.css";
import bijou from "../../assets/imgs/bijou.jpg";
import smartphones from "../../assets/imgs/smartphones.png";
import womanBuying from "../../assets/imgs/womanBuying.jpg";



const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${bijou})`}}>
              <span></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${smartphones})`}}>
              <span></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${womanBuying})`}}>
              <span></span>
            </div>
          </div>
        </Slide>
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
