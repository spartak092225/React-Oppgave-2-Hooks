import { useState } from "react";

import styles from "./CookieCounter.module.css";
import cookieImg from "../assets/cookie-1.png";

function CookieCounter() {
  const [count, setCount] = useState(0);

  function oneMoreCookie() {
    setCount(count + 1);
  }

  return (
    <div className={styles["cookie-counter-container"]}>
      <p className={styles["cookie-number"]}>{count}</p>
      <button onClick={oneMoreCookie} className={styles["cookie-btn"]}>
        <img src={cookieImg} alt="image of a cookie" width="200px" />
      </button>
    </div>
  );
}

export default CookieCounter;
