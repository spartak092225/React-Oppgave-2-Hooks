import React, { useState } from 'react';
import styles from './Users.module.css';

function Users() {
  const mockData = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no' },
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
  ];

  const [users, setUsers] = useState(mockData);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const getNameInput = function getUserName(event) {
    return setName(event.target.value);
  };

  const getEmailInput = function getUserEmail(event) {
    return setEmail(event.target.value);
  };

  function addUser() {
    const enteredName = name.trim();
    const enteredEmail = email.trim();
    if (!name || !email) return;
    const newUser = { username: enteredName, email: enteredEmail };
    setUsers((prev) => [...prev, newUser]);
    setName('');
    setEmail('');
  }

  return (
    <div className="main-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={getNameInput}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={getEmailInput}
        />
        <button onClick={addUser}>Add to the list</button>
      </div>

      <ul>
        {users.map((user, index) => (
          <li key={user.email || index}>
            Name: {user.username} <br /> Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
