import { useRouter } from "next/router";
// styles
import styles from "../../styles/components/projectLayout.module.scss";
// data
import { projectItems } from "../../public/data";

export default function Project() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1></h1>
        </div>
      </div>
    </div>
  );
}
