// styles
import styles from "../styles/components/projectLayout.module.scss";

export default function ProjectLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}
