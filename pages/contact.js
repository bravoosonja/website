// styles
import styles from "../styles/pages/contact.module.scss";
// components
import AnimatedTitle from "../components/feature/AnimatedTitle";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <AnimatedTitle textToAnimate={"Contact"} />
        </div>
      </div>
    </div>
  );
}
