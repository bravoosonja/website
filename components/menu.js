import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimateSharedLayout } from "framer-motion";
// styles
import styles from "../styles/components/menu.module.scss";
// data
import menuItems from "../public/data.json";

export default function Menu() {
  const MenuItem = ({ name, id, selected, link, onClick }) => (
    <motion.div
      className={styles.navItem}
      onClick={onClick}
      animate={{ opacity: selected ? 1 : 0.5 }}
    >
      <Link href={link}>
        <a key={id}>{name}</a>
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
            {menuItems.map((menuItem) => (
              <MenuItem
                name={menuItem.name}
                key={menuItem.id}
                selected={selected === menuItem.id}
                onClick={() => setSelected(menuItem.id)}
                link={menuItem.path}
              />
            ))}
          </AnimateSharedLayout>
        </div>
      </div>
    </div>
  );
}
