import { useRef, useEffect } from "react";
import { gsap } from "gsap";
// styles
import styles from "../styles/pages/projects.module.scss";

export default function Projects() {
  const titleRef = useRef();

  useEffect(() => {
    gsap.to(titleRef.current, { rotation: "+=360" });
    return () => {};
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title} ref={titleRef}>
          <h1>Projects</h1>
        </div>
      </div>
    </div>
  );
}
