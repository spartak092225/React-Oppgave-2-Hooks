import React, { useState } from 'react';
import CookieCounter from './components/CookieCounter';
import CatFacts from './components/CatFacts';
import Users from './components/Users';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('catfacts'); // default

  return (
    <div className="app">
      <nav className="navbar">
        <button onClick={() => setActivePage('catfacts')}>🐱</button>
        <button onClick={() => setActivePage('cookies')}>🍪</button>
        <button onClick={() => setActivePage('users')}>👥</button>
      </nav>

      <main>
        {activePage === 'catfacts' && <CatFacts />}
        {activePage === 'cookies' && <CookieCounter />}
        {activePage === 'users' && <Users />}
      </main>
    </div>
  );
}

export default App;
