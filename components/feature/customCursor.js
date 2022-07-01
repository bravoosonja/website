import { useRef, useEffect, useContext } from "react";
// context
import { CursorContext } from "../../context/cursor-context";
// style
import styles from "../../styles/components/customCursor.module.scss";
// hooks
import useWindowSize from "../../hooks/useWindowSize";

const CustomCursor = () => {
  // to get current mouse position
  const cursor = useRef(null);

  // to customize cursor
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);
  const { width, height } = useWindowSize();

  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = clientX / width;
    const y = clientY / height;

    cursor.current.style = cursorType;
    cursor.current.style.left = `${x}px`;
    cursor.current.style.top = `${y}px`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div className={cursorType} ref={cursor} />
    </>
  );
};

export default CustomCursor;
