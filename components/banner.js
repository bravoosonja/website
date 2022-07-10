import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// styles
import styles from "../styles/components/banner.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Banner() {
  return (
    <div className={styles.banner} id="container">
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
          <span className={styles.bannerRowTop}>I enjoy creating</span>
        </motion.div>
        <motion.div
          className={styles.bannerRowCenter}
          initial={{ opacity: 0, y: "-1.45em" }}
          animate={{ opacity: 1, y: "0em" }}
          transition={{ ease: [0.2, 0.65, 0.3, 0.9], duration: 1 }}
        >
          <span>aesthetic & fun</span>
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
          <span>user experience</span>
        </motion.div>

        {/* <motion.div
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
        </motion.div> */}
      </div>
    </div>
  );
}
