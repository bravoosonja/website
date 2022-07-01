import { useRef, useEffect } from "react";
// styles
import styles from "../styles/pages/projects.module.scss";
// gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Projects() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(containerRef.current);
    gsap.to(q(".title"), {
      scrollTrigger: ".container",
      y: 100,
      markers: true,
    });
    return () => {};
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Projects</h1>
        </div>
      </div>
    </div>
  );
}
