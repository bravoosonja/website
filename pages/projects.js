import Image from "next/image";
// styles
import styles from "../styles/pages/projects.module.scss";
// components
import AnimatedTitle from "../components/feature/AnimatedTitle";
// data
import { projectItems } from "../data/projectItems";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <AnimatedTitle textToAnimate={"Projects"} />
        </div>
        <div className={styles.content}>
          {projectItems.map((projectItem) => (
            <>
              <Image
                key={projectItem.key}
                src={projectItem.path}
                alt={projectItem.name}
                objectFit="cover"
                width={500}
                height={600}
              />
              <div className={styles.text}>
                <h4>{projectItem.name}</h4>
                <h5>{projectItem.skills}</h5>
                <p>{projectItem.info}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
