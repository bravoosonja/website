import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimateSharedLayout } from "framer-motion";
// styles
import styles from "../styles/components/menu.module.scss";

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Menu() {
  const MenuItem = ({ name, key, selected, link, onClick }) => (
    <motion.div
      className={styles.navItem}
      onClick={onClick}
      animate={{ opacity: selected ? 1 : 0.5 }}
    >
      <Link href={link}>
        <a key={key}>{name}</a>
      </Link>
      {selected && (
        <motion.div className={styles.underline} layoutId="underline" />
      )}
    </motion.div>
  );

  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <AnimateSharedLayout>
            {menuItems.map((menuItem, index) => (
              <MenuItem
                name={menuItem.name}
                key={index}
                selected={selected === index}
                onClick={() => setSelected(index)}
                link={menuItem.path}
              />
            ))}
            {/* <div className={styles.navItem}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/skills">
                <a>Skills</a>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </div> */}
          </AnimateSharedLayout>
        </div>
      </div>
    </div>
  );
}
