import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// style
import styles from "../../styles/components/AnimatedTitle.module.scss";

export default function AnimatedTitle({ textToAnimate }) {
  const text = textToAnimate;

  const animatedText = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.35,
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

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
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
    <h1 className={styles.title} aria-label={text} role="heading">
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            className={styles.word}
            ref={ref}
            aria-hidden="true"
            key={index}
            animate={animatedText}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.05,
              staggerChildren: 0.2,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  className={styles.character}
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </h1>
  );
}
