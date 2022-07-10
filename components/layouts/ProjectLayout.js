// style
import styles from "../../styles/components/projectLayout.module.scss";

export default function ProjectLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{children}</div>
      </div>
    </div>
  );
}
