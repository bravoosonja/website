// styles
import styles from "../styles/components/banner.module.scss";
// icons
import { IconContext } from "react-icons/lib";
import { GiBranchArrow } from "react-icons/gi";
// animation
import { motion } from "framer-motion";
// component
import CustomCursor from "./feature/customCursor";

//variants
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letter = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};
export default function Banner() {
  return (
    <>
      <motion.div className={styles.container} variants={banner}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2>I enjoy 🤍 aesthetic, exper</h2>
          </div>
          <div className={styles.right}>
            <h2> creating fun🤍 user iences</h2>
            <div className={styles.arrow}>
              <span>Scroll down</span>
              <IconContext.Provider value={{ color: "#00FF39" }}>
                <GiBranchArrow />
                <GiBranchArrow />
                <GiBranchArrow />
              </IconContext.Provider>
            </div>
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
