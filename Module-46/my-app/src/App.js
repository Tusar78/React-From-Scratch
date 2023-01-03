import React from 'react';
import Countries from './Components/Countries/Countries';
import useCountries from './Hooks/useCountries';

const App = () => {
  const {countries} = useCountries();

  return (
    <div className='container'>
      <Countries countries={countries} />
    </div>
  );
};

export default App;