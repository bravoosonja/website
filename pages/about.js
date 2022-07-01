import styles from "../styles/pages/about.module.scss";
// icons
import { HiArrowUp } from "react-icons/hi";
import { IconContext } from "react-icons/lib";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.hiddenCard}>
          <div className={styles.title}>
            <h1>About</h1>
          </div>
          <ul>
            My latest obsessions
            <li>Animation effects</li>
            <li>Parallax scroll</li>
            <li>Thinking of different ways to use mix-blend-mode</li>
          </ul>
          <ul>
            My regular obsessions
            <li>Nutella</li>
            <li>Mechanical keyboards</li>
            <li>Nintendo games</li>
          </ul>
          <div className={styles.arrows}>
            <IconContext.Provider value={{ color: "hsla(0, 0%, 23%, 0.288)" }}>
              <HiArrowUp />
              <HiArrowUp />
              <HiArrowUp />
            </IconContext.Provider>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.text}>
            <p>
              Nulla eu sodales nunc. Donec diam enim, facilisis vitae eros sed,
              blandit eleifend nulla. Nunc nec diam gravida, dapibus ante eget,
              finibus nibh. Nunc sed 4fermentum dui. Aenean arcu velit, euismod
            </p>
            <h4>Rarely Asked Questions</h4>
            <p>Accordian Menu </p>
            <p>Accordian Menu </p>
            <p>Accordian Menu </p>
            <p>Accordian Menu </p>
          </div>
        </div>
      </div>
    </div>
  );
}
