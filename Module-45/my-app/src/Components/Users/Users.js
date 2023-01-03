import React, { useEffect, useState } from 'react';
import '../Hero/Hero.css'
import User from '../User/User';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <>
      {
        users.map(user => <User user={user} />)
      }
    </>
  );
};

export default Users;