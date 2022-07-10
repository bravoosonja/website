import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "../../styles/components/mockupImage.module.scss";

export default function DemoImage({ src, alt, width, height }) {
  const animatedImage = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      animatedImage.start("show");
    }

    if (!inView) {
      animatedImage.start("hidden");
    }
  }, [animatedImage, inView]);

  // variants
  const imageAnimation = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };

  return (
    <motion.div
      className={styles.container}
      variants={imageAnimation}
      initial="hidden"
      animate="show"
      ref={ref}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
}
