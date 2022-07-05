//TODO: change text when copied

import { useState, useContext } from "react";
import { motion } from "framer-motion";
// styles
import styles from "../styles/pages/contact.module.scss";
// components
import AnimatedTitle from "../components/feature/AnimatedTitle";
// icons
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
// context
import { CursorContext } from "../context/cursor-context";

// animation variant
const copy = {
  init: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: -10,
    opacity: 1,
    transition: {
      ease: "ease-in",
      repeat: 1,
      repeatType: "reverse",
      type: "tween",
    },
  },
};

export default function Contact() {
  function copyToClipboard() {
    navigator.clipboard.writeText("songnachoi@gmail.com");
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.title}>
            <AnimatedTitle textToAnimate={"Contact"} />
          </div>
          <div className={styles.icons}>
            <IconContext.Provider value={{ color: "white" }}>
              <button>
                <a
                  target="_blank"
                  href="https://github.com/bravoosonja"
                  rel="noopener noreferrer"
                >
                  <FaGithub className={styles.github} />
                </a>
              </button>
              <button>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/songna-c"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className={styles.linkedin} />
                </a>
              </button>
            </IconContext.Provider>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.text}>
            <p>
              Feel free to reach out for collaboration opportunities or simply
              for a chat!
            </p>
            <div className={styles.email}>
              <button
                onClick={() => {
                  copyToClipboard();
                }}
              >
                <motion.span
                  className={styles.underline}
                  onMouseOver={() => setIsHovered(true)}
                  onMouseOut={() => setIsHovered(false)}
                >
                  songnachoi@gmail.com
                </motion.span>
                <motion.div
                  className={styles.copyText}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: isHovered ? "1" : "0",
                    x: isHovered ? "0" : "50",
                  }}
                  transition={{
                    duration: isHovered ? "0.7" : "0.7",
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                >
                  Click to copy to clipboard
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
