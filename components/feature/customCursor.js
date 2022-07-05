import { useRef, useEffect, useContext, useState } from "react";
import { motion } from "framer-motion";
// context
import { CursorContext } from "../../context/cursor-context";
// style
import styles from "../../styles/components/customCursor.module.scss";
// hooks
import useMousePosition from "../../hooks/useMousePosition";

// export default function CustomCursor() {
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });
//   const [cursorVariant, setCursorVariant] = useState("default");

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", mouseMove);

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//     };
//   }, []);

//   const variants = {
//     default: {
//       x: mousePosition.x - 16,
//       y: mousePosition.y - 16,
//     },
//     text: {
//       height: 150,
//       width: 150,
//       x: mousePosition.x - 75,
//       y: mousePosition.y - 75,
//       backgroundColor: "yellow",
//       mixBlendMode: "difference",
//     },
//   };

//   const textEnter = () => setCursorVariant("text");
//   const textLeave = () => setCursorVariant("default");

//   return (
//     <>
//       <motion.div
//         className={styles.cursor}
//         variants={variants}
//         animate={cursorVariant}
//       />
//     </>
//   );
// }

// const CustomCursor = () => {
//   // to get current mouse position
//   const cursor = useRef(null);

//   // to customize cursor
//   const { cursorType, cursorChangeHandler } = useContext(CursorContext);
//   const { width, height } = useWindowSize();

//   const onMouseMove = (event) => {
//     const { clientX, clientY } = event;
//     const x = clientX / width;
//     const y = clientY / height;

//     cursor.current.style = cursorType;
//     cursor.current.style.left = `${x}px`;
//     cursor.current.style.top = `${y}px`;
//   };

//   useEffect(() => {
//     document.addEventListener("mousemove", onMouseMove);
//     return () => {
//       document.removeEventListener("mousemove", onMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       <div className={styles.cursor} ref={cursor} />
//     </>
//   );
// };

// export default CustomCursor;

export default function CustomCursor() {
  const { cursorType } = useContext(CursorContext);
  const { x, y } = useMousePosition();

  return (
    <>
      <div
        className={`styles.cursor ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      />
      <div
        className={styles.seeMore}
        style={{ left: `${x}px`, top: `${y}px` }}
      />
    </>
  );
}
