import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
// styles
import styles from "../styles/components/header.module.scss";

export default function Header() {
  // animate on hover
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div
            className={styles.navItem}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div
            className={styles.navItem}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div
            className={styles.navItem}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <Link href="/skills">
              <a>Skills</a>
            </Link>
          </div>
          <div
            className={styles.navItem}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </div>
          <div
            className={styles.navItem}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
