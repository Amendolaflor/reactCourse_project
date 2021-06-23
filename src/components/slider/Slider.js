import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import "./Slider.css"
import "react-awesome-slider/dist/styles.css";
import bijou from "../../assets/imgs/bijou.jpg";
import smartphones from "../../assets/imgs/smartphones.png"
import womanBuying from "../../assets/imgs/womanBuying.jpg"

const AutoplaySlider = withAutoplay(AwesomeSlider)

function Slider() {
  return (
    <div>
      <AutoplaySlider className= "slider" play={true} showTimer={false}>
        <div data-src= {bijou} />
        <div data-src= {smartphones} />
        <div data-src= {womanBuying}/>
      </AutoplaySlider>
    </div>
  );
}

export default Slider;


