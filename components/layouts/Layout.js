import { useContext, useState, useEffect } from "react";
// context
import CursorContextProvider, {
  CursorContext,
} from "../../context/cursor-context";
// components
import Menu from "../Menu";
import CustomCursor from "../feature/CustomCursor";
import Contact from "../../pages/contact";
import styles from "../../styles/components/layout.module.scss";

export default function Layout({ children }) {
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);

  return (
    <div className={styles.container}>
      <CustomCursor />
      <nav>
        <Menu />
      </nav>
      <main className={styles.main}>{children}</main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}
