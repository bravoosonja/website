import Link from "next/link";
// styles
import styles from "../styles/components/header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.navItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/skills">
              <a>Skills</a>
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
