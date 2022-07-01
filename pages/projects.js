import { useRef, useEffect } from "react";
// styles
import styles from "../styles/pages/projects.module.scss";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.projects__wrapper}>
        <div className={styles.projects__title}>
          <h1>Projects</h1>
        </div>
      </div>
    </div>
  );
}
