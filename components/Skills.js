// style
import styles from "../styles/components/skills.module.scss";
// components
import AnimatedTitle from "./feature/AnimatedTitle";
// data
import { skillsItems } from "../data/skillsItems";

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <AnimatedTitle textToAnimate={"Skills"} />
        </div>
        <div className={styles.content}>
          {skillsItems.map((skillItem, index) => (
            <div className={styles.column} key={index}>
              <ul>{skillItem.title}</ul>
              {skillItem.contents.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
