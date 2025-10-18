import { useState } from 'react';

import styles from './CookieCounter.module.css';

function CookieCounter() {
  const [count, setCount] = useState(0);

  function oneMoreCookie() {
    setCount(count + 1);
  }

  return (
    <div className="cookie-counter-container">
      <p className="cookie-number">{count}</p>
      <button
        onClick={oneMoreCookie}
        className="cookie-btn"
      >
        <img
          src="public\cookie-1.png"
          alt="image of a cookie"
          width="200px"
        />
      </button>
    </div>
  );
}

export default CookieCounter;
