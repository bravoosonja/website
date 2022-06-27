import { useRef, useEffect, useContext } from "react";
import styled from "styled-components";
// context
import { CursorContext } from "../../context/cursor-context";

const CustomCursor = () => {
  // to get current mouse position
  const cursor = useRef(null);

  // to customize cursor
  const { cursorType, cursorChangeHandler } = useContext(CursorContext);

  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = clientX - 30;
    const y = clientY - 30;

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
      <Cursor ref={cursor} />
    </>
  );
};

const Cursor = styled.div`
  background-color: ${(props) => props.theme.cursor};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  transition: 0.5s cubic-bezier(0.75, -1.17, 0.3, 2.33) transform 0.2s
    cubic-bezier(0.75, -1.27, 0.3, 2.33);
  z-index: 1;
  mix-blend-mode: difference;

  &.hovered {
    content: "See More";
    font-family: "Murmure";
    font-size: 1rem;
    transition: 0.5s cubic-bezier(0.75, -1.17, 0.3, 2.33) transform 0.2s
      cubic-bezier(0.75, -1.27, 0.3, 2.33);
  }
`;

export default CustomCursor;
