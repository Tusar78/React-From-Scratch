import React from 'react';
import useCount from '../Hook/useCount';

const Mobile = () => {
  const {count, setCount} = useCount();
  const decreaseTen = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 10);
    }
  }
  return (
    <div className=' max-w-3xl w-full mx-auto mt-4'>
      <div className=" w-72 h-96 border rounded-lg p-4 flex align-center flex-col space-y-10">
        <h2>Battery: {count}%</h2>
        <button onClick={decreaseTen} disabled={count === 0 ? true : false} className='p-1 p-3 rounded-md text-white bg-blue-500'>Battery Down</button>
      </div>
    </div>
  );
};

export default Mobile;