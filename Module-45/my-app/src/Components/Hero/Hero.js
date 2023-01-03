import React from 'react';
import './Hero.css'

const Hero = ({name, job, company, imgUrl}) => {
  return (
    <div className='profile'>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
      <h5>{job}</h5>
      <span>-{company}</span>
    </div>
  );
};

export default Hero;