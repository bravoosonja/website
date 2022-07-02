import { useRef, useEffect } from "react";
// styles
import styles from "../styles/pages/projects.module.scss";
// components
import AnimatedTitle from "../components/feature/AnimatedTitle";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.projects__wrapper}>
        <div className={styles.projects__title}>
          <AnimatedTitle textToAnimate={"Projects"} />
        </div>
      </div>
    </div>
  );
}
