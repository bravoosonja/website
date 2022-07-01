import { useRef } from "react";
// styles
import styles from "../../styles/components/cookie.module.scss";

export default function Cookie({ cookieActive, setCookieActive }) {
  const cookieRef = useRef();
  const cookieEl = gsap.utils.selector(cookieRef);

  function RemoveCookie() {}
  return (
    <div className={styles.cookie}>
      <div className={`${styles.cookie} ${styles.wrapper}`}>
        <div className={`${styles.cookie} ${styles.content}`}>
          <h4>No, I don't want your non-edible cookies.</h4>
        </div>
        <button
          className={styles.cookieAcceptCookie}
          onClick={() => cookieActive && RemoveCookie()}
        >
          Real Cookies Only
        </button>
      </div>
    </div>
  );
}
