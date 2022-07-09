import { useRouter } from "next/router";
// styles
import styles from "../../styles/components/projectLayout.module.scss";
// data
import { projectItems } from "../../public/data";

export default function ProjectLayout() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className={styles.container}>
      {projectItems.map((project) => (
        <div className={styles.wrapper} key={project.id}>
          <div className={styles.title}>
            <h1>{project.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
