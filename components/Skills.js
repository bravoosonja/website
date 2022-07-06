// style
import styles from "../styles/components/skills.module.scss";
// components
import AnimatedTitle from "./feature/AnimatedTitle";

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <AnimatedTitle textToAnimate={"Skills"} />
        </div>
        <div className={styles.content}>
          <div className={styles.colOne}>
            <ul>Web Development Technologies</ul>
            <li>HTML/CSS/Vanilla JavaScript</li>
            <li>React</li>
            <li>Styled Components</li>
            <li>SASS</li>
          </div>
          <div className={styles.colTwo}>
            <ul>Web Frameworks</ul>
            <li>Next JS</li>
            <li>Gatsby JS</li>
          </div>
          <div className={styles.colThree}>
            <ul>Network Security</ul>
            <li>CompTIA Security +</li>
            <li>
              Cisco Certified Network Associate (CCNA) Routing and Switching
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
