import React, { useState } from 'react';

const useCount = () => {
  const [count, setCount] = useState(100);

  return {count, setCount};
};

export default useCount;