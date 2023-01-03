import React, { useState } from "react";
import "../Hero/Hero.css";

const IncreaseDecrease = () => {
  const [increase, setIncrease] = useState(1);

  return (
    <div className="container">
      <div>
        <h2>Increased: {increase}</h2>
        <button onClick={() => setIncrease(increase + 1)}>Increase + </button>
        <button onClick={() => setIncrease(increase - 1)}>Decrease - </button>
      </div>
    </div>
  );
};

export default IncreaseDecrease;
