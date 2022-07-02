import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// styles
import styles from "../styles/components/banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.bannerRowTop}
          initial={{ opacity: 0, y: "-1.45em" }}
          animate={{ opacity: 1, y: "0em" }}
          transition={{
            ease: [0.2, 0.65, 0.3, 0.9],
            duration: 1,
            delay: 1.5,
          }}
        >
          <h1 className={styles.bannerRowTop}>I enjoy creating</h1>
        </motion.div>
        <motion.div
          className={styles.bannerRowCenter}
          initial={{ opacity: 0, y: "-1.45em" }}
          animate={{ opacity: 1, y: "0em" }}
          transition={{ ease: [0.2, 0.65, 0.3, 0.9], duration: 1 }}
        >
          <h1>aesthetic & fun</h1>
        </motion.div>
        <motion.div
          className={styles.bannerRowBottom}
          initial={{ opacity: 0, y: "-1.45em" }}
          animate={{ opacity: 1, y: "0em" }}
          transition={{
            ease: [0.2, 0.65, 0.3, 0.9],
            duration: 1,
            delay: 1,
          }}
        >
          <h1>user experience</h1>
        </motion.div>
        <motion.div
          className={styles.scrollDown}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            ease: [0.2, 0.65, 0.3, 0.9],
            duration: 1.3,
            delay: 2,
          }}
        >
          <span>Scroll down</span>
        </motion.div>
      </div>
    </div>
  );
}
