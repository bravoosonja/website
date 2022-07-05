//TODO: add link to icons
//TODO: change appearing text on hover to cursor
//TODO: add animation for hover
//TODO: change text when copied

import { useState, useContext } from "react";
// styles
import styles from "../styles/pages/contact.module.scss";
// components
import AnimatedTitle from "../components/feature/AnimatedTitle";
// icons
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
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
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);

  function copyToClipboard() {
    navigator.clipboard.writeText("songnachoi@gmail.com");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.title}>
            <AnimatedTitle textToAnimate={"Contact"} />
          </div>
          <div className={styles.icons}>
            <IconContext.Provider value={{ color: "white" }}>
              <FaGithub className={styles.github} />
              <FaLinkedin className={styles.linkedin} />
            </IconContext.Provider>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.text}>
            <p>
              Feel free to reach out for collaboration opportunities or simply
              for a chat!
            </p>
            <div
              className={styles.email}
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("cursor")}
            >
              <button
                onClick={() => {
                  copyToClipboard();
                }}
              >
                <h2>songnachoi@gmail.com</h2>
              </button>
              <div className={styles.copy}>Click to copy to clipboard</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
