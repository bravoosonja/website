import { useState, useRef } from "react";

// styles
import styles from "../../styles/components/cookie.module.scss";

export default function Cookie({ setShowCookie }) {
  const containerRef = useRef();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h4>No, I don't want your non-edible cookies.</h4>
        </div>
        <button
          className={styles.acceptCookie}
          onClick={() => setShowCookie(false)}
        >
          Real Cookies Only
        </button>
      </div>
    </div>
  );
}
