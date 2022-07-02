import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// styles
import styles from "../styles/components/banner.module.scss";
// components
import AnimatedTitle from "./feature/AnimatedTitle";

export default function Banner() {
  const animatedText = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      animatedText.start("visible");
    }

    if (!inView) {
      animatedText.start("hidden");
    }
  }, [animatedText, inView]);

  const bannerRowTop = {
    hidden: {
      opacity: 0,
      y: "0.25em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const bannerRowCenter = {
    hidden: {
      opacity: 0,
      y: "0.25em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const bannerRowBottom = {
    hidden: {
      opacity: 0,
      y: "0.25em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <div className={styles.banner}>
      <div className={styles.wrapper}>
        <div className={styles.bannerRowTop}>
          <motion.h1
            className={styles.bannerRowTop}
            animate={animatedText}
            variants={bannerRowTop}
          >
            I like creating
          </motion.h1>
        </div>
        <div className={styles.bannerRowCenter}>
          <AnimatedTitle textToAnimate={"aesthetic & fun"} />
        </div>
        <div className={styles.bannerRowBottom}>
          <AnimatedTitle textToAnimate={"user experience"} />
        </div>
        <div className={styles.arrow}>
          <span>Scroll down</span>
        </div>
      </div>
    </div>
  );
}
