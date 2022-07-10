// style
import styles from "../../styles/components/projectLayout.module.scss";
// components
import CustomCursor from "../feature/CustomCursor";
import Menu from "../Menu";
import Contact from "../../pages/contact";

export default function ProjectLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.text}>{children}</div>
        </div>
      </div>
    </div>
  );
}
