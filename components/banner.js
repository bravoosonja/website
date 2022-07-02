import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// styles
import styles from "../styles/components/banner.module.scss";
// icons
import { GiBranchArrow } from "react-icons/gi";
// component
// import CustomCursor from "./feature/customCursor";

export default function Banner() {
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
