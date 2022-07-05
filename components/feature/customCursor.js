import { useContext } from "react";
// context
import { CursorContext } from "../../context/cursor-context";
// style
import styles from "../../styles/components/customCursor.module.scss";
// hooks
import useMousePosition from "../../hooks/useMousePosition";

export default function CustomCursor() {
  const { cursorType } = useContext(CursorContext);
  const { x, y } = useMousePosition();

  return (
    <>
      <div
        className={styles.cursor}
        style={{ left: `${x}px`, top: `${y}px` }}
      />
    </>
  );
}
