import React from 'react';

const Country = ({country}) => {
  const {name, area, flags} = country;
  return (
    <div className='country'>
      <img className='country__flag' src={flags.png} alt={name} />
      <h2 className='country__title'>{name.common}</h2>
      <span className='country__text'>{area}</span>
    </div>
  );
};

export default Country;