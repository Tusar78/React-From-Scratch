import React from 'react';

const App = () => {
  return (
    <div>
      <TestComponent name="Tusar" />
    </div>
  );
};

const TestComponent = (properties) => {
  const {name} = properties;
  console.log(name);
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  )
}

export default App;