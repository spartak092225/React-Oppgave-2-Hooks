import { useState } from "react";

import styles from "./CookieCounter.module.css";

function CookieCounter() {
  const [count, setCount] = useState(0);

  function oneMoreCookie() {
    setCount(count + 1);
  }

  return (
    <div className={styles["cookie-counter-container"]}>
      <p className={styles["cookie-number"]}>{count}</p>
      <button onClick={oneMoreCookie} className={styles["cookie-btn"]}>
        <img
          src="src\assets\cookie-1.png"
          alt="image of a cookie"
          width="200px"
        />
      </button>
    </div>
  );
}

export default CookieCounter;
