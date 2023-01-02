import React from 'react';
import './Hero.css'

const Hero = (props) => {
  console.log(props);
  return (
    <div>
      <h2>I Love {props.tool}</h2>
    </div>
  );
};

export default Hero;