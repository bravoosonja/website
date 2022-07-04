//TODO: add link

// styles
import styles from "../styles/pages/contact.module.scss";
// components
import AnimatedTitle from "../components/feature/AnimatedTitle";
// icons
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.title}>
            <AnimatedTitle textToAnimate={"Contact"} />
          </div>
          <div className={styles.icons}>
            <IconContext.Provider value={{ color: "white" }}>
              <FaGithub />
              <FaLinkedin />
            </IconContext.Provider>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.text}>
            <p>
              Feel free to reach out for collaboration opportunities or simply
              for a chat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
