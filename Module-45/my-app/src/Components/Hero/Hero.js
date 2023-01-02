import React from 'react';
import './Hero.css'

const Hero = (props) => {
  const {tool} = props;
  return (
    <div>
      <h2>I Love {tool}</h2>
    </div>
  );
};

export default Hero;