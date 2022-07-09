// style
import styles from "../styles/components/skills.module.scss";
// components
import AnimatedTitle from "./feature/AnimatedTitle";
// data
import { skillsItems } from "../public/data";

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <AnimatedTitle textToAnimate={"Skills"} />
        </div>
        <div className={styles.content}>
          {skillsItems.map((skill) => (
            <div className={styles.column} key={skill.id}>
              <ul>{skill.title}</ul>

              <li key={skill.index}>{skill.contents}</li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
