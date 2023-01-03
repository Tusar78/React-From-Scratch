import React from 'react';

const User = ({user}) => {
  const {name, email} = user;
  return (
    <div className='profile'>
      <h2>{name}</h2>
      <span>{email}</span>
    </div>
  );
};

export default User;