import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// styles
import styles from "../styles/components/banner.module.scss";
// icons
import { GiBranchArrow } from "react-icons/gi";
// component
// import CustomCursor from "./feature/customCursor";

// variants for framer motion
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  aimate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

export default function Banner() {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  const AnimatedLetters = ({ title, disabled }) => {
    <motion.h2
      className={styles.rowTitle}
      variants={disabled ? null : banner}
      initial="initial"
      animate="animate"
    >
      {[...title].map((letter) => (
        <motion.h2
          className="row-letter"
          variants={disabled ? null : letterAni}
        >
          {letter}
        </motion.h2>
      ))}
    </motion.h2>;
  };

  const BannerRowTop = ({ title }) => {
    return (
      <motion.div
        className={styles.bannerRowTop}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
      >
        <AnimatedLetters title={title} />
      </motion.div>
    );
  };

  const BannerRowBottom = ({ title }) => {
    return (
      <div className={styles.bannerRowBottom}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
          className={styles.arrow}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
          ></motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
          ></motion.span>
        </motion.div>
        <AnimatedLetters title={title} />
      </div>
    );
  };

  const BannerRowCenter = ({ title, playMarquee }) => {
    return (
      <div
        className={`${styles.BannerRowCenter} ${
          styles.playMarquee && "animate"
        }`}
      >
        <motion.div
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
          className="marquee__inner"
        >
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} />
          <AnimatedLetters title={title} disabled />
          <AnimatedLetters title={title} disabled />
        </motion.div>
      </div>
    );
  };

  return (
    <>
      <motion.div className={styles.banner} variants={banner}>
        <div className={styles.wrapper}>
          <div className={styles.bannerRowTop} title={"I enjoy creating"}>
            <h2>I enjoy creating</h2>
          </div>
          <div
            className={styles.bannerRowCenter}
            title={"aesthetic & fun"}
            playMarquee={playMarquee}
          >
            <h2>aesthetic & fun</h2>
          </div>
          <div className={styles.bannerRowBottom} title={"user experiences"}>
            <h2>user experiences</h2>
          </div>
          <div className={styles.arrow}>
            <span>Scroll down</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// const Wrapper = styled(motion.div)`
//   width: 100%;
//   height: 95vh;
//   margin-top: 2rem;
// `;

// const Content = styled(motion.div)`
//   padding: 1rem 3rem;
//   overflow-wrap: break-word;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   text-transform: uppercase;
//   /* gap: 0.5em; */
//   font-family: "Manrope";

//   h2 {
//     font-size: 7rem;
//     line-height: 1.5;
//     font-weight: 600;
//   }
// `;

// const Left = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: right;
//   text-align: left;
//   /* margin-right: 1rem; */
// `;

// const Right = styled.div`
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   text-align: right;
// `;

// const Arrow = styled.button`
//   font-size: 1rem;
//   position: relative;
//   top: 3vh;
//   left: -25vw;
//   transform: scale(5) rotate(40deg);
//   z-index: 50;
//   margin: 0 auto;
//   background: transparent;

//   /* margin-right: 3rem; */

//   span {
//     font-family: "Murmure";
//     font-size: 0.5rem;
//     position: relative;
//     color: ${(props) => props.theme.text};
//     font-style: italic;

//     &:hover {
//       color: ${(props) => props.theme.accent};
//     }
//   }
// `;
