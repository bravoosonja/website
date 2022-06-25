import { useEffect, useRef, useContext } from "react";
//context
import { CursorContext } from "../../context/globalContext";
// Styled Components
import styled from "styled-components";

const CustomCursor = ({ toggleMenu }) => {
  const cursorType = useContext(CursorContext);
  const cursor = useRef(null);

  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <>
      <Cursor
        className={`${!!cursorType ? "hovered" : ""} ${cursorType} ${
          toggleMenu ? "nav-open" : ""
        }`}
        ref={cursor}
      />
    </>
  );
};

const Cursor = styled.div`
  background-color: black;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  mix-blend-mode: difference;
  transition: 0.5s cubic-bezier(0.75, -1.17, 0.3, 2.33) transform 0.2s
    cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
  z-index: 1000;

  &.hovered {
    content: "See More";
    font-family: "Murmure";
    font-size: 1rem;
    transition: 0.5s cubic-bezier(0.75, -1.17, 0.3, 2.33) transform 0.2s
      cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
  }
`;

export default CustomCursor;
