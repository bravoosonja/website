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
        <div className={styles.content}></div>
      </div>
    </div>
  );
}
